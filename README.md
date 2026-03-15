#  AWS Web Application with Database (Docker + Node.js + PostgreSQL)

##  Project Description

This project demonstrates the deployment of a web application integrated with a database using cloud infrastructure on AWS.

The application was containerized using Docker and deployed on an EC2 virtual machine.
It allows users to create and list student records stored in a PostgreSQL database.

---

## Architecture

The system is composed of:

- **AWS EC2 Instance** – Cloud virtual machine hosting the application
- **Docker** – Container orchestration
- **Node.js** – Backend web server
- **PostgreSQL** – Relational database
- **Docker Compose** – Multi-container management

User Browser ->  EC2 (Port 3000) -> Node.js Container -> PostgreSQL Container


---

##  Database

An additional table named **students** was created with multiple data types:

| Field | Type |
|------|------|
| id | SERIAL |
| name | VARCHAR |
| age | INTEGER |
| course | VARCHAR |

---

##  Features

- Create student records
- List stored students
- Web interface form
- Persistent database using Docker volume

---

## How to Run

### 1  Clone repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd meu-projeto
```

### 2  Start containers

```bash
docker compose up --build
```

### 3 Access application 

```bash
http://<EC2-PUBLIC-IP>:3000
``` 

## AWS Deployment

The application was deployed using:

- Amazon EC2 (Ubuntu)
- Security Group allowing ports:
	- 22 (SSH)
	- 3000 (Web Application)

Docker containers run directly inside the EC2 instance.

### Demonstration Video

[Watch the video demonstration]((https://youtu.be/H5Ctuj3xQnE))

## Repository Structure
meu-projeto/
│
├── app/                # Web application
├── db/                 # Database initialization scripts
├── Dockerfile
├── docker-compose.yml
├── server.js
└── README.md
