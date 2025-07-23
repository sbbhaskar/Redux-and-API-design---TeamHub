TeamHub is a full-stack collaborative task management app built using the **MERN** stack. It features user authentication, role-based task access, and a clean, responsive UI for managing personal or team tasks.

## 🌟 Features

- ✅ User Registration & Login (JWT-based)
- 🔐 Private Routes & Role-based access
- 📋 Create, View, and Delete Tasks
- ✅ Mark Tasks as Done
- 🧼 Clean Tailwind CSS UI
- 💾 MongoDB database integration
- ⚙️ Redux Toolkit for global state management

---

## 🛠 Tech Stack

**Frontend**
- React 19 + Vite
- Redux Toolkit
- Axios (with token interceptor)
- Tailwind CSS
- React Router v7

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT + Bcrypt.js
- CORS + dotenv

---

## 📂 Folder Structure

teamhub/
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── redux/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── tailwind.config.js
├── .gitignore
├── README.md

---

## 📦 Setup Instructions

### 1️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
Create a .env file:
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
2️⃣ Frontend Setup
cd frontend
npm install
npm run dev
________________________________________
📸 Screenshots
Add screenshots of:
•	Register/Login
•	Dashboard with Tasks
•	Task Add/Delete/Done in action
________________________________________
🌍 Live Demo
Coming soon
(Once deployed to Vercel & Render)
________________________________________
👨‍💻 Author
Made with 💙 by Bhaskar Banerjee
GitHub Profile
________________________________________
🧿 License
This project is open-source under the MIT License.
