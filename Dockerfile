# Sử dụng Node.js làm base image
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và cài đặt các dependency
COPY package*.json ./
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000 để ứng dụng lắng nghe
EXPOSE 3000

# Lệnh để chạy server
CMD ["node", "server.js"]
