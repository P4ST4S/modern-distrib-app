
# **Shopping API**

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![Swagger](https://img.shields.io/badge/Swagger-API%20Docs-orange)
![License](https://img.shields.io/badge/license-MIT-green)

## **Description**
Shopping API is a backend application built with **NestJS**, designed to manage shopping items. The project adheres to best practices for distributed systems and the **12-Factor Principles**, ensuring scalability and portability.

---

## **Team**
- **Ilario Narducci**
- **Simon Carriac**
- **Antoine Rospars**

---

## **Features**
- Retrieve all shopping items.
- Add a new shopping item.
- Update an existing shopping item.
- Delete a shopping item.
- Automatically generated API documentation with **Swagger**.

---

## **Architecture**
This application follows:
- **12-Factor App** principles: Externalized configuration, log-based outputs.
- **Containerization**: Fully Docker and Docker Compose compatible.
- **Cloud-Ready**: Prepared for Kubernetes deployment.

---

## **Requirements**
- **Node.js** (version 16 or higher)
- **Docker** and **Docker Compose**
- **npm**

---

## **Installation**
### **1. Clone the repository**
```bash
git clone https://github.com/your-repo/shopping-api.git
cd shopping-api
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Set up environment variables**
Create a `.env` file at the root:
```env
HOST_PORT=5000
CONTAINER_PORT=3000
SECRET_KEY=my-secret-key
```

### **4. Run the application locally**
```bash
npm run start
```
The application will be available at `http://localhost:3000`.

---

## **Run with Docker**
### **1. Build the Docker image**
```bash
docker build -t shopping-api .
```

### **2. Run with Docker Compose**
```bash
docker-compose up --build
```
Access the application at `http://localhost:5000`.

---

## **API Endpoints**
### **Base URL**
`http://localhost:5000/api`

### **List of Endpoints**
| Method   | Endpoint                       | Description                     |
|----------|--------------------------------|---------------------------------|
| `GET`    | `/shoppingItems`              | Retrieve all shopping items     |
| `GET`    | `/shoppingItems/:name`        | Retrieve a shopping item by name|
| `POST`   | `/shoppingItems`              | Add a new shopping item         |
| `PUT`    | `/shoppingItems/:name`        | Update a shopping item          |
| `DELETE` | `/shoppingItems/:name`        | Delete a shopping item          |

---

## **API Documentation**
Swagger documentation is available at:
[http://localhost:5000/api](http://localhost:5000/api)

---

## **Testing**
### **1. Unit Tests**
Run unit tests using:
```bash
npm run test
```

### **2. Test Coverage**
To generate a coverage report:
```bash
npm run test:cov
```

---

## **Project Structure**
```
shopping-api/
├── src/
│   ├── app.module.ts         # Main application module
│   ├── shopping-items/
│   │   ├── shopping-items.controller.ts  # API endpoints controller
│   │   ├── shopping-items.service.ts     # Business logic service
│   │   ├── dto/                          # Data Transfer Objects for validation
│   │   ├── entities/                     # Entities (if applicable)
├── test/                    # Unit tests
├── Dockerfile               # Dockerfile for containerization
├── docker-compose.yml       # Multi-container orchestration
├── .env                     # Environment variables file
```

---

## **Contributors**
- **Ilario Narducci**
- **Simon Carriac**
- **Antoine Rospars**

---

## **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
