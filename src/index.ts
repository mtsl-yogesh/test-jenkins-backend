import express, { Request, Response } from 'express'
const app =  express()

app.get("/",(req:Request,res:Response)=>{
    try {
        return res.status(200).send({
            users:[
                {
                    name:"Yogesh",
                    email:"Yogesh@gmail.com"
                },
                {
                    name:"Ramesh",
                    email:"Ramesh@gmail.com"
                },
                {
                    name:"Hitesh",
                    email:"Hitesh@gmail.com"
                },
                {
                    name:"Dinesh",
                    email:"Dinesh@gmail.com"
                }
            ]
        })
    } catch (error) {
        console.log("Global Error : ",error)
    }
})

app.listen(3000)


