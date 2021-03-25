const express = require('express')
app = express()
server = require('http').createServer(app)
path = require('path')
const port = 3000

// leer archivos estáticos

app.use("/", express.static("source"));

app.get('/', (req, res) => {
    res.render("index")
})


// descargar cv

app.get("/descargar/MatiasOrcajoCV", (req, res) => {
    res.download(__dirname + "/source/MatiasOrcajoCV.pdf")
})



// escuchamos el puerto

app.listen(port, () => {
    console.log(`localhost:${port}`);
})