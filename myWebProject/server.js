// app.js 또는 server.js 등의 이름으로 메인 서버 파일을 작성

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv").config(); // 환경 변수 설정용

// 애플리케이션 객체 인스턴스화 및 포트 설정 
const app = express();
app.use(cors());
app.use(bodyParser.json());

// 환경 변수에 저장된 PORT 값 불러오기 (기본값: 3000)
const PORT = process.env.PORT || 3000;

// 기본 GET 요청 처리
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/webpages/front.html');
});

app.get('/create', (req, res) => {
    res.sendFile(__dirname + '/webpages/create.js');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 정상 작동 중입니다.`);
});
