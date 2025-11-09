# Ứng Dụng Chia Sẻ Màn Hình (Không Cần Server)

Phiên bản này sử dụng PeerJS - một dịch vụ miễn phí cho WebRTC signaling, không cần cài đặt Node.js hay chạy server.

## Cách Sử Dụng

### Cách 1: Mở trực tiếp trên máy tính

1. Mở file `index-standalone.html` trong trình duyệt
2. Hoặc mở trực tiếp:
   - `share-standalone.html` - để chia sẻ màn hình
   - `view-standalone.html` - để xem màn hình

### Cách 2: Deploy lên GitHub Pages

1. Tạo repository mới trên GitHub
2. Upload 3 file HTML:
   - `index-standalone.html`
   - `share-standalone.html`
   - `view-standalone.html`
3. Vào Settings → Pages → chọn branch và folder
4. Truy cập URL GitHub Pages của bạn

## Hướng Dẫn Sử Dụng

### Người Chia Sẻ:
1. Mở `share-standalone.html`
2. Nhấn "Bắt Đầu Chia Sẻ"
3. Cho phép trình duyệt truy cập màn hình
4. Sao chép ID hiển thị và gửi cho người xem

### Người Xem:
1. Mở `view-standalone.html`
2. Nhập ID của người chia sẻ
3. Nhấn "Kết Nối"
4. Màn hình sẽ hiển thị tự động

## Lưu Ý

- Cần kết nối Internet để sử dụng PeerJS
- Trình duyệt cần hỗ trợ WebRTC (Chrome, Firefox, Edge hiện đại)
- ID sẽ thay đổi mỗi lần tải lại trang
- Có thể sử dụng trên GitHub Pages hoặc bất kỳ hosting static nào

## Công Nghệ

- PeerJS (WebRTC signaling miễn phí)
- WebRTC (Peer-to-peer streaming)
- HTML/CSS/JavaScript thuần

