const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended:true}));

app.use(express.static('../HTML/uhinterludemenu.html'));

app.get('/',(req,res)=>{res.sendFile(__dirname + '../HTML/uhinterludemenu.html');});

app.post('/submit',(req,res)=>{
    const{name,number,meal,amount} = req.body;

    res.render('Order Confirmation',{name,number,meal,amount});
});

app.listen(PORT,()=>{
    console.log('Server running on http://localhost:${PORT}');
});