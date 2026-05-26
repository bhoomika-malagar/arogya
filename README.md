# Arogya AI 🚑🩺

### AI-Powered Rural Healthcare & Early Disease Screening Platform

Arogya AI is a full-stack intelligent healthcare platform designed to improve healthcare accessibility in rural and low-resource areas using Machine Learning, Voice AI, Emergency Assistance, and multilingual support.

The system provides:
- Early diabetes risk screening
- Hypertension prediction
- AI voice assistance
- Emergency AI calling
- Nearby PHC discovery
- Healthcare awareness tips
- Multilingual accessibility

---

# 🌟 Features

## 🧠 AI Disease Screening
Machine Learning powered:
- Diabetes Risk Prediction
- Hypertension Risk Prediction

Uses:
- Symptom-based screening
- Hybrid ML + risk scoring system
- Real-time predictions

---

## 🎤 Voice AI Assistant
Users can:
- Speak symptoms naturally
- Use multiple languages
- Receive AI-guided health assistance

---

## 🚨 Emergency AI Calling
One-click emergency assistance:
- AI emergency outbound calling
- Phone verification
- Nearby PHC guidance

---

## 🗺️ Rural Healthcare Support
- Nearby PHC discovery
- Health awareness guidance
- Healthcare appointment assistance

---

## 🌐 Multilingual Support
Integrated Google Translate support for:
- Rural accessibility
- Local language interaction
- Improved inclusivity

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- CSS3
- Responsive Mobile UI

## Backend
- Node.js
- Express.js
- MongoDB

## ML Server
- FastAPI
- Scikit-learn
- XGBoost
- Pandas
- Joblib

---

# 📂 Project Structure

```bash
Arogya-AI/
│
├── frontend/          # React Frontend
│
├── backend/           # Express Backend
│
├── ml-server/         # FastAPI ML Server
│
├── models/            # Trained ML models
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/bhoomika-malagar/arogya.git
cd arogya
```

---

## 2️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 3️⃣ Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 4️⃣ ML Server Setup

```bash
cd ml-server
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Virtual Environment

#### Windows

```bash
.\venv\Scripts\activate
```

#### Linux / Mac

```bash
source venv/bin/activate
```

---

### Install Dependencies

```bash
pip install fastapi uvicorn pandas scikit-learn joblib xgboost python-multipart
```

---

### Start ML Server

```bash
uvicorn app:app --reload --port 8000
```

ML server runs on:

```bash
http://localhost:8000
```

---

# 🧠 ML Models

## Diabetes Prediction
Features include:
- Polyuria
- Polydipsia
- Weight loss
- Weakness
- Blurred vision
- Obesity
- Delayed healing
- Muscle stiffness
- Numbness

---

## Hypertension Prediction
Features include:
- Age
- Smoking
- BMI
- Heart rate
- Hypertension history
- Diabetes history
- Physical activity

---

# 📱 UI Features

✔ One-question-per-screen flow  
✔ Mobile-first healthcare UI  
✔ Big YES / NO buttons  
✔ Progress indicators  
✔ Risk result cards  
✔ Healthcare disclaimers  
✔ Emergency red-alert UI  

---

# 📊 Risk Categories

## 🟢 Low Risk
Maintain healthy lifestyle habits.

## 🟡 Moderate Risk
Monitor health regularly and consult a doctor if symptoms persist.

## 🔴 High Risk
Please visit the nearest healthcare center immediately.

---

# ⚠️ Disclaimer

This system is only for early health screening and is not a medical diagnosis.

The predictions are generated using Machine Learning models and symptom-based analysis and should not replace professional medical consultation.

---

# 🔮 Future Improvements

- Real-time doctor consultation
- WhatsApp health assistant
- Wearable device integration
- Voice-to-health-record system
- AI chatbot in regional languages
- Offline rural screening mode

---

# 👩‍💻 Developed By

### Team Arogya AI

AI-powered healthcare innovation for rural communities.

## GitHub Repository

https://github.com/bhoomika-malagar/arogya
