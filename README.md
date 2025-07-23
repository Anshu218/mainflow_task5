# Task 5 - Add & Delete Products/Buyers

This project implements **add & delete functionality** for Products/Buyers as per Task 5 requirements.

## Features
✅ Add new products/buyers via form  
✅ Form validation & required fields  
✅ Delete products/buyers with confirmation  
✅ REST APIs (Express + MongoDB) + React frontend  

---

## Setup

### 1️⃣ Backend
```bash
cd backend
cp .env.example .env
npm install
npm start
```

### 2️⃣ Frontend
```bash
cd frontend
npm install
npm start
```

The frontend runs on **http://localhost:3000** and connects to backend **http://localhost:5000**

---

## API Endpoints
- `GET /api/items` → Fetch all items  
- `POST /api/items` → Add new item  
- `DELETE /api/items/:id` → Delete item  

---

## How to Run
1. Start backend → `npm start` (port 5000)  
2. Start frontend → `npm start` (port 3000)  
3. Open **http://localhost:3000** and test add & delete.

