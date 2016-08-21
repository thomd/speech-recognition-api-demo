import express from 'express'
import expressLogging from 'express-logging'
import logger from 'logops'
import accepts from 'accepts'

const app = express()
app.set('views', './views')
app.set('view engine', 'jade')
app.use(require('express-status-monitor')())
app.use(express.static('./public'))
app.use(expressLogging(logger))
app.get('/', (req, res) => {
  let languages = accepts(req).languages()
  let language = languages[0]
  res.render('index', {language})
})
app.listen(3000)

