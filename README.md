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


## 📌 Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL

---


## 📥 How to Clone & Run This App Locally

### 1️⃣ Clone the Repository

Open **Git Bash** or **Terminal**, then run:  

    git clone <repository_url>

"Replace <repository_url> with the actual URL of your GitHub repository."

### 2️⃣ Navigate to the Project Directory

    cd to-do-app

### 3️⃣ Install Dependencies

    npm install

### 4️⃣ Set Up the Database

Heads up to queries.sql and run those commands in pgadmin4 to set your database.

### 5️⃣ Configure the Database in the Code

In the server.js file, update the database connection details:

    const db = new pg.Client({
        user: "your_username", //otherwise postgres
        password: "your_password",
        host: "localhost",
        database: "your_database",
        port: 5234,
    });

### 6️⃣ Run the App

    npm start

or 

    nodemon index.js / node index.js

The app will be running on http://localhost:3000 🎉

