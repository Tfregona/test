import app from './app.js'

export default app.listen(process.env.PORT || 3100,() => {console.log(`Listenning to ${process.env.PORT || 3100} for ${process.env.ENV}`)})
