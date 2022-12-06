const router = require('express').Router()

const userRoute = require('./userRoutes.js')


router.use('/users', userRoute)

module.exports = router;