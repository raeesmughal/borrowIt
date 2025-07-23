# 📚 Mongoose Relation Demo

This project demonstrates how to use **Mongoose relationships** in a simple Node.js and Express backend API. It covers how to reference one model inside another using `ObjectId` and retrieve related data using `.populate()`.

---

## 🚀 Features

- Create and store **students** and **books**
- Allow a student to **borrow** a book
- View borrowed books along with **full student and book details**
- Uses **Mongoose populate** for relationship management

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Folder Structure

```bash
│
├── models/
│ ├── Student.js
│ ├── Book.js
│ └── Borrow.js
│
├── server.js
└── README.md
└── .env
```




---

## 🧪 API Endpoints

### ➕ Add Student
`POST /students`
```json
{
  "name": "Raees Mughal",
  "email": "raees@example.com"
}
```


### ➕ Add Book
`POST /books`
```json
{
  "title": "Atomic Habits",
  "author": "James Clear"
}
```


### ➕ Borrow Book
`POST /borrow`
```json
{
  "student": "student_id_here",
  "book": "book_id_here"
}
```


### 📄 Get All Borrows (with full details)
`GET /borrow`
