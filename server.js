// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'


// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()


// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())


// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')


app.get('/', async function (request, response) {



  // Klas data

  const apiResponseClasses = await fetch('https://api.frd-delta.nl/klassen.json');

  const classDataJSON = await apiResponseClasses.json()



  // Card data

  const apiResponseCardInfo = await fetch('https://api.frd-delta.nl/statistieken.json');

  const cardInfoDataJSON = await apiResponseCardInfo.json()



  response.render('main.liquid', { classes: classDataJSON, statistics: cardInfoDataJSON, });

})


app.get('/progressdata', async function (request, response) {



  try {

    // Klas data percentages

    const apiResponseprogressData = await fetch('https://api.frd-delta.nl/klassen.json');

    const progressDataJSON = await apiResponseprogressData.json()

    console.log(progressDataJSON);



    const progressPink = progressDataJSON[0].voortgang

    const progressPurple = progressDataJSON[1].voortgang

    const progressBlue = progressDataJSON[2].voortgang

    const progressYellow = progressDataJSON[3].voortgang



    console.log(progressDataJSON[0]);



    console.log(progressPink, progressPurple, progressBlue, progressYellow)



    response.json({ progressPink, progressPurple, progressBlue, progressYellow });

  }

  catch {

    console.error("error")

  }

})


app.get('/details/:id', async function (request, response) {

  const test = "testing testing!"
  
  response.render('details.liquid', { details: test });

});

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {

  console.log('Onyx is up & running!')
  console.log(`http://localhost:${app.get('port')}`)
})
