import express from 'express'
import nunjucks from 'nunjucks'

const app = express();
const port = 3000;


nunjucks.configure('views', { autoescape: true, express: app });


app.get('/',(req,res)=>{
    res.render('index.html',{
        name:"World",
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})