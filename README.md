# 🏥 Hospital Resource Management System and Patient Flow Optimization

An advanced hospital and patient management platform designed to streamline resource utilization, patient appointments, and healthcare operations in a unified interface. Built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js), this system helps **hospitals**, **doctors**, **patients**, and **admins** interact smoothly, reducing delays and increasing transparency.

---

## 📌 Use Case

Hospitals often face challenges like:
- Overcrowding in OPDs
- Lack of real-time bed availability
- Inefficient patient-doctor coordination
- Manual appointment booking

This system solves these issues by:
- Automating patient flow and appointment management
- Providing real-time visibility into hospital capacity
- Enabling patients to book appointments and track status
- Allowing hospitals to allocate resources efficiently

---

## 🧠 Key Features

### ✅ Admin Features
- Add/view all registered hospitals and doctors
- Approve/verify hospital and doctor registrations
- Remove or block suspicious users
- Access analytics (future enhancement)

### 🏥 Hospital Features
- Add multiple doctors
- Manage and accept patient appointment requests
- Set hospital availability and facility details
- View real-time resource availability (beds, OPDs, etc.)

### 👨‍⚕️ Doctor Features
- View patient list & appointment history
- Set working hours and availability slots
- Accept, reject, or complete appointments
- Access individual patient’s visit history

### 👤 Patient Features
- Register/login and book appointments
- Choose hospitals and doctors based on location/specialty
- Track appointment status and receive confirmation
- Upload personal details and basic records

---

## 📷 Sample Screens (Coming Soon)
- Admin Dashboard
- Hospital Resource View
- Patient Booking Page
- Doctor Appointment Panel

---

## 📦 Tech Stack

| Layer       | Technology                            |
|-------------|----------------------------------------|
| **Frontend**| React.js, Tailwind CSS, Vite          |
| **Backend** | Node.js, Express.js                   |
| **Database**| MongoDB (with Mongoose ODM)           |
| **Auth**    | JWT (JSON Web Tokens)                 |
| **Uploads** | Cloudinary (for profile images/docs)  |
| **Hosting** | Vercel (frontend), Render (backend)   |

---

## 🏗️ Architecture Overview

Patient ↔ React Frontend ↔ Node/Express API ↔ MongoDB
↑ ↓
JWT Auth Cloudinary
↑
Admin / Hospital / Doctor

markdown
Copy
Edit

---

## 🔐 Authentication & Authorization

- JWT tokens stored in cookies
- Protected routes for:
  - `/api/admin/*`
  - `/api/hospital/*`
  - `/api/doctor/*`
  - `/api/user/*`
- Role-based access using middleware:
  - `verifyToken.js`
  - `adminMiddleware.js`
  - `doctorMiddleware.js`
  - `hospitalMiddleware.js`

---

## 📊 API Overview (Sample)

### Users
- `POST /api/user/register`
- `POST /api/user/login`
- `GET /api/user/profile`
- `POST /api/user/book-appointment`

### Hospital
- `POST /api/hospital/register`
- `GET /api/hospital/doctors`
- `PATCH /api/hospital/update-bed-info`

### Doctor
- `GET /api/doctor/appointments`
- `POST /api/doctor/update-status`

### Admin
- `GET /api/admin/hospitals`
- `POST /api/admin/verify-hospital`

> Detailed API docs coming soon using Swagger or Postman collection.

---

## ⚙️ Environment Variables

### Frontend
```env
REACT_APP_API_URL=https://your-backend.onrender.com
Backend
env
Copy
Edit
PORT=4000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
💻 Local Setup
Clone the repo

bash
Copy
Edit
git clone https://github.com/your-username/hospital-resource-management.git
cd hospital-resource-management
Start backend

bash
Copy
Edit
cd backend
npm install
npm run dev
Start frontend

bash
Copy
Edit
cd frontend
npm install
npm run dev
Make sure MongoDB is running or use a cloud DB like MongoDB Atlas.

🚀 Deployment
Backend (Render)
Connect GitHub repo

Build command: npm install

Start command: node index.js

Add environment variables

Frontend (Vercel)
Import project

Add REACT_APP_API_URL

Deploy automatically on push

📌 Future Enhancements
Email/SMS notification on booking

Appointment reminder system

PDF generation of reports/prescriptions

Bed occupancy dashboard with graphs

Real-time chat between patients and doctors

🤝 Contributing
Feel free to fork this project, open issues, and submit pull requests.

Steps:

Fork the repo

Create your feature branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m 'Add YourFeature'

Push to the branch: git push origin feature/YourFeature

Submit a pull request

📄 License
Licensed under the MIT License

🙋‍♂️ Author
Rohit Kumar
rohitkumar.pr45@gmail.com

🙌 Acknowledgments
Special thanks to:

MongoDB Atlas for DB hosting

Cloudinary for media handling

Vercel and Render for deployment support

"Transforming healthcare digitally, one hospital at a time."
