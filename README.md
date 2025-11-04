# 📝 Notes App - MERN Stack Application

A full-stack Notes application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to create, view, and delete notes in real-time.

![Notes App](https://img.shields.io/badge/MERN-Full--Stack-brightgreen)
![Deployment](https://img.shields.io/badge/Deployment-Render-blue)

## 🚀 Live Demo

- **Frontend:** [https://notes-frontend-co0q.onrender.com/](https://notes-frontend-co0q.onrender.com/)

- **Backend API:** [https://notes-backend-bzkc.onrender.com/api/notes](https://notes-backend-bzkc.onrender.com/api/notes))

## 📋 Features

- ✅ Create new notes with title and content
- ✅ View all notes in a responsive grid layout
- ✅ Delete unwanted notes
- ✅ Real-time data persistence with MongoDB
- ✅ Responsive design for all devices
- ✅ RESTful API architecture

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Axios** - HTTP client for API calls
- **CSS3** - Styling and responsive design
- **React Hooks** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

### Deployment
- **Render** - Cloud platform for deployment
- **MongoDB Atlas** - Cloud database service

## 📁 Project Structure

notes-app/
├── backend/
│ ├── models/
│ │ └── Note.js # MongoDB schema
│ ├── routes/
│ │ └── notes.js # API routes
│ ├── server.js # Express server
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── Note.js # Note component
│ │ ├── App.js # Main component
│ │ ├── App.css # Styles
│ │ └── index.js # Entry point
│ └── package.json
└── README.md


## 🔧 Installation & Local Development

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB

### Backend Setup
cd backend
npm install

# Create .env file
echo "MONGODB_URI=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env

# Start backend server
npm start

### Frontend Setup
cd frontend
npm install

# Create .env file
echo "REACT_APP_API_URL="(https://notes-backend-bzkc.onrender.com/api/" > .env

# Start development server
npm start


🎯 API Endpoints
Method	  Endpoint	        Description
GET	      /api/notes	      Get all notes
POST	    /api/notes	      Create new note
DELETE	  /api/notes/:id	  Delete note by ID

🚀 Deployment
This project is deployed on Render:

Backend: Deployed as Web Service

Frontend: Deployed as Static Site

Database: MongoDB Atlas (Cloud)

🎓 Learning Outcomes
This project helped me understand:

Full-stack development workflow

RESTful API design and implementation

MongoDB database integration

Frontend-backend communication

Cloud deployment and environment configuration

CORS and security best practices
