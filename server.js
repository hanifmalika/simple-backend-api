require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req,res) =>{
    res.send('Halo backend udah jalan')
})
app.get('/api/users',(req,res) => {
    const users = [
        {id: 1, name: 'Rozak', role:'Admin'},
        {id: 2, name: 'Siti', role:'User'},
        {id: 3, name: 'mario', role:'User'}

    ];
    res.json({
        status :'success',
        data: users
    })
})

app.post('/api/login', (req,res) =>{
    const {username, password} = req.body

    const ADMIN_USER = process.env.ADMIN_USERNAME
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

    if(username === ADMIN_USER && password === ADMIN){
        res.json({massage: 'Login Berhasil'})
    }else{
        res.status(401).json({massage:"Username atau password salah"})
    }
})



app.listen(PORT,() =>{
    console.log(`Server berjalan di http//localhost:${PORT}`)
})

