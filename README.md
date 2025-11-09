# Ứng Dụng Chia Sẻ Màn Hình

Ứng dụng web cho phép chia sẻ màn hình laptop và người khác có thể xem trực tiếp qua trình duyệt.

## Cài Đặt

1. Cài đặt các package cần thiết:
```bash
npm install
```

## Chạy Ứng Dụng

```bash
npm start
```

Server sẽ chạy tại: `http://localhost:3000`

## Sử Dụng

1. **Người chia sẻ màn hình:**
   - Truy cập: `http://localhost:3000/share`
   - Nhấn nút "Bắt Đầu Chia Sẻ"
   - Cho phép trình duyệt truy cập màn hình khi được yêu cầu
   - Chia sẻ URL xem: `http://localhost:3000/view` cho người khác

2. **Người xem màn hình:**
   - Truy cập: `http://localhost:3000/view`
   - Màn hình sẽ tự động hiển thị khi có người chia sẻ

## Lưu Ý

- Cần kết nối Internet để sử dụng WebRTC
- Trình duyệt cần hỗ trợ WebRTC (Chrome, Firefox, Edge hiện đại)
- Có thể cần cấu hình firewall nếu chạy trên mạng nội bộ

## Công Nghệ Sử Dụng

- Node.js + Express
- Socket.io (WebSocket signaling)
- WebRTC (Peer-to-peer streaming)

