import express from 'express'
import expressLogging from 'express-logging'
import logger from 'logops'
import accepts from 'accepts'

const app = express()
app.set('views', './views')
app.set('view engine', 'jade')
app.use(express.static('./public'))
app.use(expressLogging(logger))
app.get('/', (request, response) => {
  let languages = accepts(request).languages()
  let language = languages[0]
  response.render('index', {language})
})
app.listen(3000)

