# TO-DO APP

## 📌 App Description
This is a **To-Do List App** that helps you manage your daily tasks efficiently.  
- **Persistent Storage:** Your tasks remain saved even after refreshing the page.  

---

## 🚀 Features
- **Add Tasks** – Easily add new to-dos to your list.  
- **Edit Tasks** – Update any existing to-do.  
- **Mark as Completed** – Check the box to remove a completed task.  
- **Delete All** – Remove all tasks with a single click.  

---

## 📥 How to Clone & Run This App Locally

### 1️⃣ Clone the Repository
Open **Git Bash** or **Terminal**, then run:  
```bash
git clone <repository_url>
Replace <repository_url> with the actual URL of your GitHub repository.

2️⃣ Navigate to the Project Directory
bash
Copy
Edit
cd to-do-app
3️⃣ Install Dependencies
Before running the app, install the required dependencies:

bash
Copy
Edit
npm install
4️⃣ Set Up the Database
Make sure you have PostgreSQL installed and running.

Steps to Create the Database:
Open pgAdmin or the PostgreSQL terminal.

Create a new database named Family_tracker.

Create a table named items using the following SQL command:

sql
Copy
Edit
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);
(Optional) Insert some sample data:

sql
Copy
Edit
INSERT INTO items (title) VALUES ('Buy groceries'), ('Finish project');
5️⃣ Configure the Database in the Code
In the server.js file, update the database connection details:

js
Copy
Edit
const db = new pg.Client({
  user: "postgres",
  password: "your_password",
  host: "localhost",
  database: "Family_tracker",
  port: 5234, // Change to your PostgreSQL port
});
6️⃣ Run the App
Start the server with:

bash
Copy
Edit
npm start
The app will be running on http://localhost:3000 🎉

📌 Git Commands for Collaboration
Pull the latest changes:
bash
Copy
Edit
git pull origin main
Check the current branch:
bash
Copy
Edit
git branch
Create a new feature branch:
bash
Copy
Edit
git checkout -b feature-branch
Add and commit your changes:
bash
Copy
Edit
git add .
git commit -m "Added new feature"
Push the changes to GitHub:
bash
Copy
Edit
git push origin feature-branch
Merge your changes (after approval):
bash
Copy
Edit
git checkout main
git merge feature-branch
git push origin main
📌 Technologies Used
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Database: PostgreSQL