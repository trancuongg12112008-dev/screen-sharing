# Hướng Dẫn Deploy Lên GitHub Pages

## Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào GitHub
2. Nhấn nút **"New"** hoặc **"+"** → **"New repository"**
3. Đặt tên repository (ví dụ: `screen-sharing`)
4. Chọn **Public** (GitHub Pages miễn phí chỉ cho Public repo)
5. **KHÔNG** tích vào "Initialize with README"
6. Nhấn **"Create repository"**

## Bước 2: Upload Files Lên GitHub

Bạn cần upload **3 file HTML** này vào repository:

1. ✅ **`index.html`** - Trang chủ (BẮT BUỘC)
2. ✅ **`share-standalone.html`** - Trang chia sẻ màn hình
3. ✅ **`view-standalone.html`** - Trang xem màn hình

### Cách Upload:

**Cách 1: Upload qua Web (Dễ nhất)**
1. Vào repository vừa tạo
2. Nhấn nút **"uploading an existing file"**
3. Kéo thả 3 file HTML vào
4. Nhấn **"Commit changes"**

**Cách 2: Dùng Git (Nếu đã cài Git)**
```bash
git init
git add index.html share-standalone.html view-standalone.html
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[username]/[repository-name].git
git push -u origin main
```

## Bước 3: Bật GitHub Pages

1. Vào repository trên GitHub
2. Nhấn **Settings** (ở menu trên)
3. Cuộn xuống phần **"Pages"** (ở menu bên trái)
4. Ở phần **"Source"**, chọn:
   - Branch: **main** (hoặc **master**)
   - Folder: **/ (root)**
5. Nhấn **Save**
6. Đợi 1-2 phút để GitHub build

## Bước 4: Truy Cập Website

Sau khi GitHub Pages được bật, bạn sẽ có URL:
```
https://[username].github.io/[repository-name]/
```

Ví dụ: `https://yourname.github.io/screen-sharing/`

## Lưu Ý Quan Trọng:

1. ✅ File `index.html` phải có tên chính xác (không phải `index-standalone.html`)
2. ✅ Tất cả file phải ở thư mục root (không trong thư mục con)
3. ✅ Repository phải là **Public** (không phải Private)
4. ✅ Đợi 1-2 phút sau khi upload để GitHub xử lý

## Kiểm Tra:

- Mở URL GitHub Pages → Phải thấy trang chủ với 2 nút
- Click "Chia Sẻ Màn Hình" → Phải mở được trang share
- Click "Xem Màn Hình" → Phải mở được trang view

## Nếu Vẫn Lỗi:

1. Kiểm tra tên file có đúng không (phải là `index.html`)
2. Kiểm tra file có ở thư mục root không
3. Đợi thêm vài phút và refresh lại
4. Xem trong Settings → Pages có thông báo lỗi không

