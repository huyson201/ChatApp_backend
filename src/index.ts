import "reflect-metadata";
import cors from 'cors'
import responseTime from 'response-time'
import compression from 'compression'
import {createConnection} from "typeorm";
import express , { Express } from "express";
import http from 'http'
import 'dotenv/config'
import route from "./routes";

const app:Express = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 3001

/* middleware */
app.use(cors())
app.use(responseTime())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(compression())

/* add route */
route(app)

server.listen(PORT, ()=>{
    createConnection().then( connection => {
        console.log('connect database success!')
    }).catch(error => console.log(error));
    
    console.log('server is running on port '  + PORT )
})