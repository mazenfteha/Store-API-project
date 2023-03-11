//connect to db
require('dotenv').config()

const express =require('express')
const app = express();

const connectDB =require('./db/connect')
const productsRouter =require('./routes/products')

const notFoundMiddleware =require('./middleware/not-found')
const errorMiddleware =require('./middleware/error-handler')


//middlewar
app.use(express.json())


//routes
app.get('/', (req,res)=>{
    res.send('<h1>Store API</h1>')
})

app.use('/api/v1/products',productsRouter)

//product route
app.use(notFoundMiddleware)
app.use(errorMiddleware)


const port =process.env.PORT || 80

const start =async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , console.log(`Server is listrning port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()