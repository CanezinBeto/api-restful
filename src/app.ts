import express from 'express'
import config from 'config'

const app = express()

// JSON Middleware
app.use(express.json())

// Banco de Dados
import db from '../config/db'

// Routes
import router from './router'

app.use('/api/', router)

// App port
const port = config.get<number>('port')

app.listen(port, async () => {
  await db()
  console.log(`Aplicação está funcionando na porta: ${port}`)
})
