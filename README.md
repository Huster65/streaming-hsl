# streaming-hsl
# HLS Streaming Server

A simple Node.js application to serve video content using HTTP Live Streaming (HLS). This application allows users to stream videos in `.m3u8` format over HTTP.

## Features

- Converts MP4 videos to HLS format using `ffmpeg`.
- Serves HLS streams through a Node.js server.
- Includes Docker support for containerization.
- Lightweight and easy to deploy.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [ffmpeg](https://ffmpeg.org/) (for video conversion)
- [Docker](https://www.docker.com/) (optional, for containerization)

---

## Setup

### 1. Clone the Repository

```bash
git clone git@github.com:your-username/hls-streaming.git
cd hls-streaming

npm install

npm start

docker build -t hls-streaming .

docker run -p 8000:8000 -v $(pwd)/public/hls:/app/public/hls hls-streaming
