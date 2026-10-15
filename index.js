import express  from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('user are coming soon')
})

const users = [
    { id: 1, name: 'joan', email: 'joan1@gamil.com' },
    { id: 2, name: 'sunny', email: 'sunny@gamil.com' },
    { id: 3, name: 'manny', email: 'manny@gamil.com' },
    { id: 4, name: 'panny', email: 'panny@gamil.com' }
];

app.get('/users', (req, res) => {
  res.send(users)
})
// app.get('/dashboard', (req, res) => {
//   res.send('dashboard page')
// })
// app.get('/contact', (req, res) => {
//   res.send('contact page')
// })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})