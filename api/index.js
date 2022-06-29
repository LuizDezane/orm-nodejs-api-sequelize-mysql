// const express = require('express')
// const bodyParser = require('body-parser')
import express from 'express'
import bodyParser from 'body-parser'
import nodemon from 'nodemon'

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/', (req, res) => res
  .status(200)
  .send({ mensagem: 'boas-vindas à API'
}))

app.get('/test', (req, res) => res
  .status(200)
  .send({ mensagem: 'Essa é a página de teste'
}))

app.listen(port, () => console.log(`servidor está conectado 
na porta: http://localhost:${port} `))

export default app;