# Drone API (Assignment 1)

API สำหรับจัดการข้อมูลโดรน โดยแยกเป็น 3 ส่วนหลัก:  
- `configs` สำหรับข้อมูลตั้งต้นของโดรน
- `status` สำหรับดูสถานะอุณหภูมิปัจจุบัน
- `logs` สำหรับบันทึก log ลง Drone Log Server (PocketBase)

---

## 📦 Project Structure

```
WebApp_Backend/
├── src/
│   ├── routes/
│   │   ├── configs.js        ← /configs/:droneId
│   │   ├── status.js         ← /status/:droneId
│   │   ├── logs.js           ← /logs/:droneId & POST /logs
│   ├── services/
│   │   ├── configService.js  ← Logic สำหรับเรียก Config Server
│   │   ├── logService.js     ← Logic สำหรับเรียก PocketBase
│   └── app.js                ← Main App (import express, routes)
├── .env
├── .gitignore
├── package.json
├── index.js                  ← ใช้เรียก src/app.js

```

---

## 🚀 Start Project

### 1. ติดตั้ง dependency

```bash
npm install
```

### 2. สร้างไฟล์ `.env`

```env
PORT=3000
CONFIG_SERVER=....
LOG_SERVER=...
LOG_SERVER_TOKEN=...
```

### 3. รัน server

```bash
node index.js
```

---

## 👨‍💻 ผู้พัฒนา

Anas Nilaoh  
IoT System & Information Engineering - KMITL  
2025 01236337 WEB APPLICATION DEVELOPMENT