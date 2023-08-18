const express = require('express'); // express 임포트
const app = express(); // app생성
const port = 5000;

app.listen(port, () => console.log(`${port}포트입니다.`));

// 몽구스 연결
const mongoose = require('mongoose');
mongoose
  .connect('mongodb+srv://Eunseok:01098210604@eunseok.xasjrjc.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB conected'))
  .catch((err) => {
    console.log(err);
  });