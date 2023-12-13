const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 4000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://tlhmluvcejowlgzfmrcz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsaG1sdXZjZWpvd2xnemZtcmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0MzY5NTYsImV4cCI6MjAxODAxMjk1Nn0.7P1REufezQ5tpDYQZ_cL-IGtyraY9Mx0zISjqkbTUCc'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);


app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname})
})

app.get('/users', async (req, res) => {
    console.log('Getting User')

    const{data, error} = await supabase
        .from('Users')
        .select();
    
    if(error) {
        console.log(error)
        } else if(data){
        res.send(data)
        }
    })

app.post('/user', async (req, res) => {
    console.log('Adding User')

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;

    const{data, error} = await supabase
        .from('Users')
        .insert([
            {'user_first_name' : firstName, 'user_last_name' : lastName}
        ])
        .select();

    console.log(data)
    res.header('Content-type', 'application/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('APP IS ALIVEEEEEE')
})