import { Express,Request, Response } from 'express';

function route(app: Express): void {
    app.get('/', (req: Request, res: Response)=>{
        return res.send('welcome to chat app backend')
    })
}

export default route