#!/bin/bash

echo "🚀 Starting Smart Phone Repair Check-In App"

# BACKEND SETUP
echo "🔧 Starting backend (Flask server)..."
cd backend

# Activate virtual environment
source venv/bin/activate

# Run Flask server on port 5051 in background
python app.py &

cd ..

# FRONTEND SETUP
echo "📱 Starting frontend (Expo)..."
cd frontend
npx expo start 
