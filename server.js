const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { intercepter } = require('./middleware/logMiddleware')

app.use(bodyParser.json())
app.use(intercepter)


// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.get('/bye', function (req, res) {
//     res.send('Good bye')
// })

// app.post('/', function (req, res) {
//     res.send('Got a POST request')
// })

// app.put('/put', function (req, res) {
//     res.send('Got a PUT request')
// })

// app.delete('/delete', function (req, res) {
//     res.send('Got a DELETE request')
// })


//---------------------------------------------

// const userRoute = require('./userRoute.js')
// app.use('/user', userRoute)

//---------------------------------------------


// app.post('/user', function (req, res) {
//     res.send('Got a POST request')
//     console.log('body:', req.body)
// })

// --------------------------------------------

// const dogRoute = require('./dogRoute.js')
// app.use('/dog', dogRoute)

// const catRoute = require('./catRoute.js')
// app.use('/cat', catRoute)

// --------------------------------------------

// app.use(express.static('./public/'))

// const userRoute = require('./userRoute')
// app.use('/user', userRoute, function (req, res) {
//     res.status(404).send('404 User Not Found')
// })


// app.use(function (req, res) {
//     res.status(404).send('404 Not Found')
// })

// --------------------------------------------

// app.get('/student/:id/:age', function (req, res) {
//     console.log(req.params.id)
//     console.log(req.params.age)
//     res.send(`id ${req.params.id}, age ${req.params.age}`)
// })

// --------------------------------------------

const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

app.use('/api/user', userRoute)
app.use('/api/post', postRoute)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))