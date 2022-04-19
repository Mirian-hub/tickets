import express from 'express'
import { json } from 'body-parser'
import { currentUserRouter } from './routes/current-user'
import { singinRouter } from './routes/signin'
import { singoutRouter } from './routes/signout'
import { singupRouter } from './routes/singup'

const app = express()
app.use(json())
app.use(currentUserRouter)
app.use(singinRouter)
app.use(singoutRouter)
app.use(singupRouter)
app.listen(3000, ()=> {
    console.log('listening on port 3000 !!!!!!!!!!')
})