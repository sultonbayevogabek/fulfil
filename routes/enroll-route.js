const fs = require('fs/promises')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const router = require('express').Router()

router.post('/enroll', async (req, res) => {
   let enrolls = await fs.readFile(path.join(__dirname, '..', 'data', 'enrolls.json'), { encoding: 'utf-8'})
   enrolls = JSON.parse(enrolls)
   enrolls.push({
      id: uuidv4(),
      time: new Date().toLocaleDateString(),
      ...req.body
   })
   await fs.writeFile(path.join(__dirname, '..', 'data', 'enrolls.json'), JSON.stringify(enrolls))
   res.send({
      ok: true
   })
})

module.exports = {
   path: '/',
   router
}