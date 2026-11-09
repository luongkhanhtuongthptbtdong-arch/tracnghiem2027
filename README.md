# Chấm Trắc Nghiệm LKT – 3 bản cài đặt (Windows · Android · iOS)

Tác giả: **Lương Khánh Tường** – THPT Bình Thạnh Đông, An Giang · ĐT/Zalo 0916780807

| Thư mục | Nội dung |
|---|---|
| `web/` | Ứng dụng (một file HTML) + PWA: `index.html` tự nhận thiết bị; `ChamTN-Windows/iOS/Android.html` mở sẵn giao diện từng nền tảng |
| `desktop/` | Bản Windows (Electron) – tạo bộ cài `.exe` |
| `mobile/` | Bản Android/iOS (Capacitor) – tạo `.apk` và dự án iOS |
| `.github/workflows/build.yml` | Tự động build cả 3 bản trên GitHub (miễn phí) |

## Cách tạo bộ cài tự động bằng GitHub (không cần cài gì trên máy)
1. Tạo tài khoản GitHub → **New repository** (ví dụ `cham-trac-nghiem-lkt`, để *Public*).
2. Bấm **uploading an existing file**, kéo thả **toàn bộ** nội dung thư mục này (kể cả thư mục ẩn `.github`) → **Commit**.
   *Mẹo:* nếu trình duyệt không kéo được thư mục `.github`, vào **Add file → Create new file**, gõ tên `.github/workflows/build.yml` rồi dán nội dung file đó.
3. Vào **Settings → Pages → Source: GitHub Actions** (để có bản web cho iPhone/iPad).
4. Vào tab **Actions** → chờ khoảng 10–15 phút → mở lần chạy mới nhất → mục **Artifacts** tải về:
   - `ChamTracNghiemLKT-Windows` → `ChamTracNghiemLKT-Setup-2.1.0.exe` (cài đặt) và `…Portable…exe` (chạy ngay, không cần cài)
   - `ChamTracNghiemLKT-Android` → `ChamTracNghiemLKT-Android-2.1.0.apk`
   - `ChamTracNghiemLKT-iOS` → `.ipa` chưa ký (dành cho người dùng nâng cao)
5. Muốn có trang **Releases** đẹp để chia sẻ link tải: tạo tag `v2.1.0` (Releases → Draft a new release → Choose a tag → v2.1.0 → Publish).

## Cài đặt trên từng thiết bị
- **Windows 10/11:** chạy `ChamTracNghiemLKT-Setup-2.1.0.exe` → Tiếp → Cài đặt. Nếu SmartScreen cảnh báo (do phần mềm chưa mua chứng chỉ ký số): bấm **More info → Run anyway**. Có biểu tượng ngoài Desktop và Start Menu. Gỡ: Settings → Apps.
- **Android 7+:** chép file `.apk` vào điện thoại → mở → cho phép *Cài ứng dụng không rõ nguồn gốc* → Cài đặt. Lần đầu chấm, cho phép quyền **Camera**.
- **iPhone / iPad:** Apple không cho cài file tự do. Cách chuẩn, miễn phí: mở link GitHub Pages (`https://<tên>.github.io/<repo>/ChamTN-iOS.html`) bằng **Safari** → nút **Chia sẻ** → **Thêm vào MH chính**. App chạy toàn màn hình, offline, camera chấm liên tục đầy đủ.
  - Muốn đưa lên **App Store / TestFlight** cần tài khoản Apple Developer (99 USD/năm) và máy Mac: mở `mobile/ios/App/App.xcodeproj` bằng Xcode (sau khi chạy `npx cap add ios`), chọn Team → Archive → Upload.
  - File `.ipa` chưa ký có thể cài bằng **Sideloadly/AltStore** với Apple ID cá nhân (hết hạn sau 7 ngày, cần cài lại).

## Mẹo chấm chính xác
- Chụp trên nền tối, đủ sáng, thấy rõ **4 ô vuông đen** ở 4 góc; app tự nắn thẳng, tự xoay, tự nhận loại phiếu.
- Bật **Chính xác cao** khi chấm bằng camera: app chấm 2–3 khung hình liên tiếp và đối chiếu từng ô.
- Bút chì 2B tô mờ vẫn nhận được (ngưỡng tự thích nghi theo độ đậm thực tế của từng phiếu); có thể chỉnh *Độ nhạy nhận dạng* trong cấu hình bài thi.

## Có gì mới ở bản 2.1.0
- Chấm nhanh hơn 2–3 lần (khoảng 0,2–0,5 giây/phiếu trên máy tính), vẫn giữ độ chính xác.
- Thiết kế & xuất phiếu: 6 kiểu (Chuẩn Bộ hồng, xanh dương, xanh lá, tím, cam, đen trắng), in đủ thông tin Sở – Trường – Kỳ thi – Năm học – Môn – Thời gian, ô Điểm, Giám thị 1/2, Họ tên, Ngày sinh, Lớp, SBD, Phòng thi, chữ ký, hướng dẫn cách tô.
- Phần tự luận tuỳ chọn: số câu, điểm từng câu, bảng điểm cho giáo viên; in cùng trang nếu đủ chỗ hoặc mặt sau.
- Nút "Xuất phiếu cho bài thi này" trong cấu hình bài thi.
