const express = require('express');
const app = express();

// Một danh sách mẫu các người dùng
const nguoiDung = [
    { id: 1, ten: "Nguyễn Văn A", tuoi: 30 },
    { id: 2, ten: "Trần Thị B", tuoi: 25 },
    { id: 3, ten: "Lê Văn C", tuoi: 35 }
];

// Định nghĩa API GET method
app.get('/nguoi-dung', (req, res) => {
    res.json(nguoiDung);
});

// Khởi động máy chủ
const port = 3000;
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
