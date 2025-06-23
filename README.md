# Two-Step Registration Form

This is a responsive two-step registration form built with **React**, styled using **Tailwind CSS**, and powered by **React Context** for state management. It validates user input and submits the data to an API endpoint using the native `fetch` API.

---

## 🔧 Tech Stack

- React (JavaScript)
- Tailwind CSS
- React Context API
- Native Fetch API
- Vite

---

## 📁 Folder Structure
```
/src
│── /api # (Optional helpers)
│── /components # StepOne, StepTwo, etc.
│── /context # FormContext.jsx
│── /pages # RegistrationForm.jsx
│── /services # API call (registerService.js)
│── /utils # Validation logic
│── App.jsx
│── index.js
.env
```

---

## ✨ Features

- Two-step form:
  - Step 1: Full Name, Email, Phone
  - Step 2: Password, Confirm Password
- Required fields with inline validation
- Step indicator/progress bar
- Submits data using `fetch` to `POST /api/register`
- API base URL configured via `.env`

---

## 🚀 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/chandima2000/registration-form
cd registration-form
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**
- Create a .env file in the root:
```bash
VITE_REACT_APP_API_BASE_URL=http://localhost:5000
```

4. **Run the development server**
```bash
npm run dev
```

## 📡 API Integration

- Method: POST

- Endpoint: /api/register

- Payload format:

```bash
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "123456"
}
```

## 📄 License
- This project is open source and free to use.
