import express from 'express';

const app = express();

//app.get('/', (req,res)=>{
   // res.send('server is ready');
//});

//get list of 5 joke
app.get('/api/jokes', (req,res)=>{
    const jokes =[
        {
            id:1,
            title:'A joke ',
            content:'this is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'this is another  joke'   
        },
        {
            id:3,
            title:'Third  joke',
            content:'this is third  joke'   

        },
        {
            id:4,
            title:'A fourt joke',
            content:'this is fourth  joke'   

        },
        {
            id:5,
            title:'fifth joke',
            content:'this is fifth joke'
        }
    ]
    res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`); 

});