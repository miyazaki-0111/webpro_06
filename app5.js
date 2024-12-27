const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';

let judgement = '';
if ((hand === 'グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')) {
    judgement = '勝ち';
    win += 1;
} else if (hand === cpu) {
    judgement = 'あいこ';
} else {
    judgement = '負け';
}
total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';

let judgement = '';
if ((hand === 'グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')) {
    judgement = '勝ち';
    win += 1;
} else if (hand === cpu) {
    judgement = 'あいこ';
} else {
    judgement = '負け';
}
total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );

});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';

let judgement = '';
if ((hand === 'グー' && cpu === 'チョキ') ||
    (hand === 'チョキ' && cpu === 'パー') ||
    (hand === 'パー' && cpu === 'グー')) {
    judgement = '勝ち';
    win += 1;
} else if (hand === cpu) {
    judgement = 'あいこ';
} else {
    judgement = '負け';
}
total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});

app.get("/aisyou", (req, res) => {
  let zokusei = req.query.zokusei;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {zokusei, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = '炎';
  else if( num==2 ) cpu = '森';
  else cpu = '水';

let judgement = '';
if ((zokusei === '炎' && cpu === '森') ||
    (zokusei === '森' && cpu === '水') ||
    (zokusei === '水' && cpu === '炎')) {
    judgement = '勝ち';
    win += 1;
} else if (zokusei === cpu) {
    judgement = 'あいこ';
} else {
    judgement = '負け';
}
total += 1;

  const display = {
    your: zokusei,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'aisyou', display );
});

app.get("/seisi", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 2 + 1 );
  let cpu = '';
  if( num==1 ) cpu = '王様';
  else cpu = '奴隷';

let judgement = '';
if (hand === '奴隷' && cpu === '王様' ){
    judgement = '勝ち';
    win += 1;
} else if (hand === cpu) {
    judgement = 'あいこ';
} else {
    judgement = '負け';
}
total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'seisi', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));