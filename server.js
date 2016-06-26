import express from 'express'
import expressLogging from 'express-logging'
import logger from 'logops'

const app = express()
app.set('views', './views')
app.set('view engine', 'jade')
//app.use(express.static('./public'))
app.use(expressLogging(logger))
app.get('/', (req, res) => {
  res.render('index')
})
app.listen(3000)

