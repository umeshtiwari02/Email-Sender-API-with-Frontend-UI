# Email Server API

This project is a simple email server application designed to send emails. It consists of:
- **Frontend (`emailgui`)**: Built with Angular to provide a user-friendly interface.
- **Backend (`emailapi`)**: Developed in Java to handle email-sending functionality via an API.

## Features
- Input fields for:
  - **To**: Recipient's email address.
  - **Subject**: Email subject line.
  - **Message**: Email content.
- Sends emails via an SMTP server.
- Validation for empty fields and email format.
- Error handling for failed email delivery.


---

## How to Run

### Prerequisites
- **Frontend**:
  - Node.js installed
  - Angular CLI installed
- **Backend**:
  - JDK (Java Development Kit) installed
  - Maven or Gradle installed
- An SMTP server configured (e.g., Gmail SMTP).

---

### Frontend Setup (`emailgui`)
1. Open the emailgui/ folder in VSCode.
2. Install dependencies:
   ```bash
   npm install
3. Start the Angular development server:
   ```bash
   ng serve

4. Open the application in your browser at http://localhost:4200.

---

### Backend Setup (`emailapi`)
1. Open the emailapi/ folder in IntelliJ IDEA.
2. Run the Java application directly from IntelliJ by clicking the Run button or using the shortcut (Shift + F10).

---

**`Note`**: The frontend (Angular) and backend (Java API) run separately in VSCode and IntelliJ IDEA, respectively, and communicate through HTTP requests to connect the user interface with the email-sending API.

