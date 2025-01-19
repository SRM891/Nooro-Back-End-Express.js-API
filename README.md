---

### **Back-End (Express.js API)**

```markdown
# Todo List Back-End (Express.js API)

## Prerequisites

- Node.js (>= 16.x)
- npm or yarn
- MySQL or any other SQL database

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/SRM891/Nooro-Back-End-Express.js-API.git
cd todo-backend


Set Up Prisma and Initialize the Database
Install Prisma CLI (if not already installed globally):

npm install prisma --save-dev

Generate Prisma Client:
npx prisma generate

Run Prisma Migrations:
npx prisma migrate dev --name init

This will create the database tables in your MySQL database.

Verify Database:
Check your database to ensure the tables are created (e.g., use MySQL Workbench or DBeaver).
