const express = require('express');
const app = express();
const path = require('node:path');
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
app.set('view engine', 'ejs');
// publicディレクトリ以下のファイルを静的ファイルとして配信
app.use('/static', express.static(path.join(__dirname, 'public')));

const logMiddleware = (req, res, next) => {
    console.log(req.method, req.path);
    next();
  }  
  
// GET '/user/:id' に一致するGETの挙動
app.get(
    '/user/:id',
    logMiddleware,
    ('/user/:id', (req, res) => {
    // :idをreq.params.idとして受け取る
    res.status(200).send(req.params.id);
  }));

async function main() {
  // サーバーのlisten前に接続する
  await client.connect();

  const db = client.db('my-app');

  // GET '/' （トップ）アクセス時の挙動
  // ルーティングとミドルウェア
  app.get(
    '/',
    // 追加したミドルウェア
    logMiddleware,
    // 元のミドルウェア
    async (req, res) => {
        //const users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const users = await db.collection('user').find().toArray();
        const names = users.map((user) => { return user.name });
        res.render(path.resolve(__dirname, 'views/index.ejs'), {users: names});
    }
  )

  app.post('/api/user', express.json(), async (req, res) => {
    const name = req.body.name;
    if (!name) {
      res.status(400).send('Bad Request');
      return;
    }
    await db.collection('user').insertOne({ name: name });
    res.status(200).send('Created');
  });  

  app.delete('/api/user', express.json(), async (req, res) => {
    await db.collection('user').drop();
    res.status(200).send('Created');
  });

  // ポート: 3000でサーバーを起動
  app.listen(3000, () => {
    // サーバー起動後に呼び出されるCallback
    console.log('start listening');
  });
}
main()