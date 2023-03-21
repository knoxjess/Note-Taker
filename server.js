const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const htmlRoutes = require('./routes/html-routes')
const apiRoutes = require('./routes/api-routes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () =>
console.log(`App listening at http://localhost${PORT}`))