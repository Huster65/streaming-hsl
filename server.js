const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Cấu hình để phục vụ các tệp HLS (playlist và segments)
app.use("/hls", express.static(path.join(__dirname, "public", "hls")));

// API để kiểm tra server hoạt động
app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>HLS Streaming Server</h1>
        <p>Phát video tại <a href="/hls/playlist.m3u8">playlist.m3u8</a></p>
      </body>
    </html>
  `);
});

// Lắng nghe kết nối
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
