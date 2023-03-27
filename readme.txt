tools - ejs, nodejs, mysql
server.js - เป็นไฟล์สำหรับตั้งค่าเซิฟเวอร์ เมื่อเริ่มต้นเซิฟเวอร์ทำให้สามารถเห็น interface บนบราวเซอร์ได้
package.json - ชื่อไลบรารี่ที่ใช้พัฒนาแอปพลิเคชันอยู่ใน dependencies
myapp.sql - คำสั่งที่เกี่ยวข้องกับฐานข้อมูล
utils/config - ตั้งค่ารายละเอียดฐานข้อมูล
utils/db - สร้างการเชื่อมต่อฐานข้อมูล
routes/routes - ติดต่อกับ controllers เมื่อมีการร้องขอจาก views
views/home/index - หน้าหลัก
views/partials/footer - ส่วนท้ายของแอปพลิเคชันในแต่ละหน้า
views/partials/heaer - ส่วนหัวของแอปพลิเคชันในแต่ละหน้า
controllers/homeController - จัดการคำร้องและการตอบกลับระหว่าง views & models ที่เกี่ยวข้องกับหน้าหลัก
controllers/index - หาไฟล์ controllers ให้ตรงตามคำร้องขอจาก views
models/homeModels - จัดการฐานข้อมูลของรายละเอียดนกและส่งข้อมูลให้ controllers จัดการ