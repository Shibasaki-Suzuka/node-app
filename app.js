// expressの読み込み
const express = require('express');
const app = express();

// publicフォルダ内のファイル読み込み
app.use(express.static('public'));

// ルーティング
app.get('/top', (req, res) => {
  res.render('top.ejs');
});


app.listen(3000);