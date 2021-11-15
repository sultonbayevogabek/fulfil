const fs = require('fs/promises')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const router = require('express').Router()

router.post('/contact', async (req, res) => {
   let contacts = await fs.readFile(path.join(__dirname, '..', 'data', 'contact.json'), { encoding: 'utf-8'})
   contacts = JSON.parse(contacts)
   contacts.push({
      id: uuidv4(),
      time: new Date().toLocaleDateString(),
      ...req.body
   })
   await fs.writeFile(path.join(__dirname, '..', 'data', 'contact.json'), JSON.stringify(contacts))
   res.send({
      ok: true
   })
})

module.exports = {
   path: '/',
   router
}