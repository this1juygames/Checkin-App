from flask import Flask, request, jsonify
from pdfrw import PdfReader, PdfWriter, PdfDict
import os
import platform

app = Flask(__name__)

# ---- PDF Setup ----
TEMPLATE_PATH = "Repair_Form_Template.pdf"
OUTPUT_PATH = "filled_forms"

os.makedirs(OUTPUT_PATH, exist_ok=True)

FIELD_MAP = {
    "fullName": "fullName",
    "deviceType": "deviceType",
    "phoneNumber": "phoneNumber",
    "callbackNumber": "callbackNumber",
    "carrier": "carrier",
    "passcode": "passcode",
    "issueDescription": "issueDescription"
}

def fill_pdf(data):
    template = PdfReader(TEMPLATE_PATH)
    annotations = template.pages[0]["/Annots"]

    for annotation in annotations:
        if annotation["/Subtype"] == "/Widget" and annotation.get("/T"):
            raw_key = annotation["/T"][1:-1]  # strip parentheses
            for form_key, pdf_field in FIELD_MAP.items():
                if raw_key == pdf_field and form_key in data:
                    annotation.update(
                        PdfDict(
                            V='{}'.format(data[form_key]),  # set value
                            Ff=1,                            # read-only
                            AP=PdfDict(N=PdfDict())          # 🛠️ force render appearance
                        )
                    )

    filename = data["fullName"].replace(" ", "_") + ".pdf"
    output_path = os.path.join(OUTPUT_PATH, filename)
    PdfWriter(output_path, trailer=template).write()

    # Auto-open for testing
    if platform.system() == "Darwin":
        os.system(f'open "{output_path}"')
    elif platform.system() == "Windows":
        os.startfile(output_path)

    return output_path

# ---- API Route ----
@app.route("/submit", methods=["POST"])
def submit():
    data = request.json
    print("Received data:", data)

    pdf_path = fill_pdf(data)
    print(f"PDF saved: {pdf_path}")

    return jsonify({"status": "success"}), 200

# ---- Run App ----
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5051)