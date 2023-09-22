import express from 'express';

const app = express();

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async function sleepThree() {
//   await sleep(3);
//   return 'we slept so little';
// }

// same signature + behavior!
// function sleepThree() {
//   return sleep(3).then(() => 'we slept so little');
// }

app.get('/', (_req, res) => {
  res.send('HELLO WORLD!');
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.get('/delay', async (_req, res) => {
  await sleep(5000);
  res.send('FINALLY AWAKEN');
});

const port = 3000;

app.listen(port, () => {
  console.log('Listening to port ', port);
});

// import fs from 'fs';

// const PATH = 'test.txt';

// fs.readFile(PATH, 'utf8', (err, data) => {
//   if (err) {
//     console.log('ERRORORORORORO');
//   } else {
//     console.log('Data: ', data);
//   }
// });

// fs.readFileSync()
