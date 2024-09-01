const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download ",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url 

let desc = `
*GHOST-MD SONG DOWNLOADING....*

title: ${data.title}
description :${data.description}
time:${data.timestamp}
ago:${data.ago}
views:${data.views}

POWERD BY GHOST-MD
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{qouted:mek});
  
//download audio 
  
let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message 
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype: "audio/mpeg"},{qouted:mek});
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype: "audio/mpeg",fileName:data.tatle + ".mp3",caption:"POWERD BY GHOST-MD"},{qouted:mek})


  

  
}catch(e){
console.log(e)
reply('s{e}' )
}
})

//==========video-dl==========

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download ",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url 

let desc = `
*GHOST-MD VIDEO DOWNLOADING....*

title: ${data.title}
description :${data.description}
time:${data.timestamp}
ago:${data.ago}
views:${data.views}

POWERD BY GHOST-MD
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{qouted.mek});
  
//download video
  
let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document message 
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype: "video/mp4"},{qouted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype: "video/mp4",fileName:data.tatle + ".mp4",caption:"POWERD BY GHOST-MD" },{qouted:mek})



  

  
}catch(e){
console.log(e)
reply('s{e}' )
}
})

