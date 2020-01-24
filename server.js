const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// serve static files(html,css, js,images,videos)
app.use(express.static(__dirname + '/dist/ngproject'));//distribution

//backend route
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/dist/ngproject/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))