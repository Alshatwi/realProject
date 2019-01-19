const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8181 });
var Client=[];


function search(id){
  for(var i =0; i < Client.length; i++){
    //console.log(Client.length);
    if (Client[i].upgradeReq.url == id){
      return i;
    }
  }
  return -1;
}
wss.on('connection', function connection(ws , req) {
    ws.upgradeReq = req;
    //ws.upgradeReq.url;
    var num = search(ws.upgradeReq.url);
    if( num !== -1){
      Client[num].close();
      Client[num] = ws;
    } else {
      Client.push(ws);
    }




  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    //ws.send(message);
    num = search("/Meshal");
    if(num !== -1){
      Client[num].send(message);
    }


  });




});