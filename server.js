const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Phục vụ các file tĩnh
app.use(express.static('public'));

// Trang chủ - chọn chia sẻ hoặc xem
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Trang chia sẻ màn hình
app.get('/share', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'share.html'));
});

// Trang xem màn hình
app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view.html'));
});

// Xử lý WebSocket signaling
io.on('connection', (socket) => {
    console.log('Người dùng kết nối:', socket.id);

    // Khi người chia sẻ kết nối
    socket.on('share-screen', () => {
        socket.broadcast.emit('sharer-connected');
        console.log('Người chia sẻ đã kết nối');
    });

    // Chuyển tiếp offer từ người chia sẻ đến người xem
    socket.on('offer', (data) => {
        socket.broadcast.emit('offer', data);
    });

    // Chuyển tiếp answer từ người xem đến người chia sẻ
    socket.on('answer', (data) => {
        socket.broadcast.emit('answer', data);
    });

    // Chuyển tiếp ICE candidate
    socket.on('ice-candidate', (data) => {
        socket.broadcast.emit('ice-candidate', data);
    });

    // Khi người dùng ngắt kết nối
    socket.on('disconnect', () => {
        console.log('Người dùng ngắt kết nối:', socket.id);
        socket.broadcast.emit('user-disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
    console.log(`- Chia sẻ màn hình: http://localhost:${PORT}/share`);
    console.log(`- Xem màn hình: http://localhost:${PORT}/view`);
});

