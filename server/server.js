const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000;
// const cors = require('cors')
const client = require('./connections/pgConn.js')


app.get('/', (req, res) => {
    res.send('Hello')
})

app.post('api/test', (req, res) => {

})







app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


// const express = require('express')
// const app = express()


// const cors = require('cors')

// app.use(express.json())

// app.use(cors())

// const PORT = 3000

// const userRouter = require('./routes/users')

// app.use('/users', userRouter)


// app.get('/', (req, res) => {
//     res.send('Hello World')
// })
// app.get('/api/test', (req, res) => {
//     res.send('Hello on api test') 
// })
// app.post('/api/games', (req, res) => {
//     const body = req.body
//     console.log(body)
//     // body.name = 'product 2'
//     res.json(body)
// });


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })