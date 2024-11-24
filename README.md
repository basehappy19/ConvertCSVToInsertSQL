# ConvertCSVToInsertSQL

ConvertCSVToInsertSQL เป็นโปรแกรมที่ใช้สำหรับแปลงข้อมูลจากไฟล์ CSV เป็นคำสั่ง `INSERT INTO` SQL ซึ่งสามารถใช้งานง่ายและรองรับฟังก์ชันพื้นฐานสำหรับการจัดการข้อมูล CSV ที่ต้องนำไปใช้งานในฐานข้อมูล

---

## **คุณสมบัติ**
- อ่านข้อมูลจากไฟล์ CSV
- สร้างคำสั่ง SQL `INSERT` สำหรับตารางที่กำหนด
- Escape ค่าที่มีเครื่องหมาย `'` เพื่อป้องกัน SQL Injection
- เขียนคำสั่ง SQL ลงในไฟล์ `.sql`

---

## **การติดตั้ง**

### **1. Clone Repository**
```bash
git clone https://github.com/basehappy19/ConvertCSVToInsertSQL.git
cd ConvertCSVToInsertSQL
npm install
