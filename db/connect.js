const monoogse = require('mongoose')

const connectDB =(url) =>{
    return monoogse.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports =connectDB