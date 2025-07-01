Smart Phone Repair Check-In App

A simple, cross-platform customer check-in app built with React Native (Expo) and a Flask backend. Customers can check in using a tablet, enter repair information, and the app sends their responses to the backend, which fills out a printable PDF with the appropriate field values.

⸻

Features
	•	Modern touch-friendly UI for in-store tablet use
	•	Screen-by-screen flow with full name, check-in fee acknowledgment, and abandonment policy
	•	Input masking, formatting, and validations (e.g., phone number)
	•	Auto-capitalization and field sanitization
	•	Submissions sent to backend and processed into a PDF
	•	Auto-resets app for next customer after submission

⸻

Tech Stack
	•	Frontend: React Native (via Expo)
	•	Backend: Flask (Python)
	•	PDF Generation: [Coming soon] (using PyPDF2 or pdfrw)
	•	Printing: [Coming soon] (using OS print hooks or CUPS on macOS/Linux)

⸻

Getting Started

Requirements
	•	Node.js and npm
	•	Python 3.9+
	•	Expo CLI (or use npx)

⸻

Installation

1. Clone the Repo

git clone https://github.com/yourusername/checkin-app.git
cd checkin-app

2. Set Up the Frontend

cd frontend
npm install
npx expo start

Scan the QR code from your Android tablet using the Expo Go app

3. Set Up the Backend

cd ../backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py

App will be available at: http://<your-local-ip>:5050

⸻

Form Flow (Screens)
	1.	Welcome Screen: User enters their full name
	2.	Fee Acknowledgment: User confirms non-refundable fee
	3.	Check-In Form: Device type, contact info, issue description
	4.	Abandonment Policy: Final acknowledgment
	5.	Confirmation: Thank you message, then auto-resets for next user

⸻

Coming Soon
	•	Auto-fill and save PDF using uploaded repair form
	•	Auto-print check-in data to local printer
	•	Dashboard or CSV log of all submissions

⸻

Folder Structure

checkin-app/
├── backend/        # Flask server
├── frontend/       # React Native frontend
└── README.md


⸻

Maintained by

Smart Phone Repair (James)
For support or contributions, feel free to open an issue or pull request.

⸻

License

This project is private and owned by Smart Phone Repair. Please do not redistribute without permission.
