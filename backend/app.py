from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to connect

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    print("Received check-in:", data)
    return {'status': 'success'}, 200

    # Save to a file (optional)
    with open("checkins.json", "a") as f:
        f.write(str(data) + "\n")

    return jsonify({"message": "Check-in received!"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)python


    IF _date(range){
        
    }