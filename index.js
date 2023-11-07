const express = require("express");
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))
const films = require('./data/films.json')

//Pour pouvoir recupérer les valeurs du formulaire en POST
app.use (express.urlencoded({ extended:true }))


////////// Première route //////////
app.get('/',(requete, response) => {
    response.status(200)
    response.render('home', {})
})


////////// Deuxième route //////////
app.get('/films',(requete, response) => {
    response.status(200)
    response.render('filmList', {films})
})

///////// Troisième route /////////
app.get('/films/:id',(requete, response) => {
    const id = Number(requete.params.id)
    const filmFound = films.find(film => film.id === id) //Il me sort l'objet
    response.status(200)
    // Si l'id n'est pas trouvé dans le json, ma variable retourne undefined
    if (filmFound == undefined){
        response.status(404).send("Sorry, we can't find that page...But you have lots of other movies to explore !")
    }
    response.render('filmPage', {filmFound})
})

////////// Quatrième route /////////
app.get('/search',(requete, response) => {
    const title = requete.query.title
    response.status(200)
    const searchTerm = films.filter(film => film.title.includes(title))
    response.render('filmForm', {searchTerm, films, title})
})

///////// Cinquième route ////////

/// -> On accède à la page où se trouve le formulaire
app.get('/login',(requete, response) => {
    response.status(200)
    let pseudo = null;
    let welcomeMessage= "";
    response.render('loginForm', {welcomeMessage, pseudo})
})
/// -> On accede aux valeurs du formulaire
app.post('/login',(requete, response) => {
    response.status(200)
    const pseudo = requete.body.pseudo
    let welcomeMessage = `Youkoso ${pseudo} :)! `
    response.render('loginForm', {welcomeMessage, pseudo})
})

////////// Middlewares //////////
app.use((err, requete, response, next)=> {
    response.status(500).send('Sorry, something broke!')
})

app.use((requete, response, next)=> {
   response.status(404).render('404')
})


const port = 3000;
app.listen(port)