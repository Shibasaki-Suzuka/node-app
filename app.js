// expressの読み込み
const express = require('express');
const app = express();

// publicフォルダ内のファイル読み込み
app.use(express.static('public'));

// ルーティング
// 一番初めにアクセスするページはルートURL
app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000);
