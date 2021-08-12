const http = require('http')

const server = http.createServer((req, res)=>{
 //console.log(req.url)
  res.write('<h1>hello fron Node JS</h1>')
  res.write('<h3>hello fron Node JS</h3>')
  res.end()
})

server.listen(3000, ()=>{
    console.log('server started')
})