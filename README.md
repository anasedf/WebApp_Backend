# Drone API (Assignment 1)

API สำหรับจัดการข้อมูลโดรน โดยแยกเป็น 3 ส่วนหลัก:  
- `configs` สำหรับข้อมูลตั้งต้นของโดรน
- `status` สำหรับดูสถานะอุณหภูมิปัจจุบัน
- `logs` สำหรับบันทึก log ลง Drone Log Server (PocketBase)

---

## 📦 Project Structure

```
src/
├── app.js                # รวม route ทั้งหมด
├── index.js             # จุดเริ่มต้นของโปรแกรม
├── routes/
│   ├── configs.js        # Router: /configs/:droneId
│   ├── status.js         # Router: /status/:droneId
│   └── logs.js           # Router: /logs + /logs/:droneId
├── controllers/
│   ├── configController.js
│   ├── statusController.js
│   └── logController.js
├── services/
│   ├── configService.js  # ดึงข้อมูลจาก Google Apps Script
│   └── logService.js     # POST logs ไปยัง PocketBase
├── utils/
│   └── tempConvert.js    # แปลง celsius → fahrenheit
.env                      # เก็บค่า CONFIG_SERVER และ LOG_SERVER
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