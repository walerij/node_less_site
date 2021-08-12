const http = require('http')

const server = http.createServer((req, res)=>{
  if(req.method==='GET')
  {
    res.writeHead(200,{
      'Content-type':'text/html'
    })
    res.end('<form method="POST" action="/" >'+
    '   <input type="text" name="title" /> '+
      '<button type="submit">SEND</button>   </form>'

)
 

  }
  else if(req.method==="POST")
  {
    let body =[]
    res.writeHead(
      200,{'Content-type':'text/html; charset=utf-8'
      })
    req.on('data',data=>{
      body.push(Buffer.from(data))
    })
    req.on('end',()=>{
    
     const message=body.toString().split('=')[1]
     res.end(`<h2>Ваше сообщение: ${message}</h2>`)
    })
    
  }

})

server.listen(3000, ()=>{
    console.log('server started')
})