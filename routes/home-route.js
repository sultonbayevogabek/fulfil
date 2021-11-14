const router = require('express').Router()

router.get('/', async (req, res) => {
   res.render('index', {
      title: 'Fulfil Education'
   })
})

module.exports = {
   path: '/',
   router
}