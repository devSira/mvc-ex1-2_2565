tools - ejs, nodejs, sql
server.js - เป็นไฟล์สำหรับตั้งค่าเซิฟเวอร์ ทำให้สามารถเห็น interface บนบราวเซอร์ได้
package.json - ชื่อไลบรารี่ที่ใช้พัฒนาอยู่ใน dependencies
myapp.sql - คำสั่งที่เกี่ยวข้องกับฐานข้อมูล
routes/routes - ติดต่อกับ controllers เมื่อมีการร้องขอจาก views
views/home/index - หน้าหลัก
views/partials/footer - ส่วนท้ายของแอปพลิเคชัน
views/partials/heaer - ส่วนหัวของแอปพลิเคชัน
views/company/add - หน้าเพิ่มบริษัท
views/company/edit - หน้าแก้ไขบริษัท
views/company/index - หน้าแสดงรายละเอียดบริษัท
controllers/companyController - จัดการคำร้องและการตอบกลับระหว่าง views & models ที่เกี่ยวข้องกับบริษัท
controllers/homeController - จัดการคำร้องและการตอบกลับระหว่าง views & models ที่เกี่ยวข้องกับหน้าหลัก
controllers/index - หาไฟล์ controllers ให้ตรงตามคำร้องขอจาก views
models/companyModels - จัดการฐานข้อมูลของบริษัทและส่งข้อมูลให้ controllers จัดการ