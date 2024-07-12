const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="colombo,srilanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Gfi7jRzPu8jC2L8B1XvM0j";
global.website=process.env.GURL || "https://chat.whatsapp.com/Gfi7jRzPu8jC2L8B1XvM0j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/4322352fa9cc5780bc524.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙰𝙰𝚂𝙷𝙸𝙵_𝚂𝙴𝚁 𝙸𝚃 𝙵𝙸𝙴𝙻𝙳²²¹-ᴍᴅ" 


global.devs = "94760769124" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760769124";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx,94760769124";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx,94703155023";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx,94703155023";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_52_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY1LFxuICAgICAgICA3MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE1LFxuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDkxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MyxcbiAgICAgICAgNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDg4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTExLFxuICAgICAgICA5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMlZ3eENvWXpkblVvQ0ZYNE9ScmhYSWJCVGw0OFdrdmlsRE9zQnhKU0lGND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcwMzE1NTAyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTU5OUM0Q0I2MTQxRDNDNDY3ODZBNThFRDZBMjg1NDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzgxNTMxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MDMxNTUwMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFGREJGMDgwQjgxNTRBNjQwNjI2MkYyNzU2OEZBOTM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDc4MTUzMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGRVl6aFhZQlRHTzUtU2puU2NPcUpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxOTVhZDg3LWY3M2YtNGJjYi04NmVhLWUwNmQxMjJkOGNkZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAxNzQsXG4gICAgICAyMzAsXG4gICAgICAyMjMsXG4gICAgICA0MyxcbiAgICAgIDcwLFxuICAgICAgNzIsXG4gICAgICAyNTIsXG4gICAgICAyMTUsXG4gICAgICAxNTEsXG4gICAgICAyMzUsXG4gICAgICA2NCxcbiAgICAgIDE1NyxcbiAgICAgIDE1MyxcbiAgICAgIDgsXG4gICAgICAxMTMsXG4gICAgICA2MSxcbiAgICAgIDE3MixcbiAgICAgIDIxOCxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDc4LFxuICAgICAgMTk4LFxuICAgICAgMTk0LFxuICAgICAgMjI1LFxuICAgICAgODUsXG4gICAgICA5OSxcbiAgICAgIDE4NyxcbiAgICAgIDI0NSxcbiAgICAgIDIxNyxcbiAgICAgIDIzNCxcbiAgICAgIDE0NSxcbiAgICAgIDExNSxcbiAgICAgIDE3LFxuICAgICAgMTk4LFxuICAgICAgOTIsXG4gICAgICAyMDcsXG4gICAgICAzLFxuICAgICAgMTkxLFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ4SEFQRENWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMzE1NTAyMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWFzaGlmX1NFUlwiLFxuICAgIFwibGlkXCI6IFwiMTcwNTYyMTk0MjkyOTE0OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1d3dXZRSEVOYVZ4TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0Y0Q3ZG5nQ2NRZmgrVkgvTGUxd1J5RDNHRTdKK01lcVNUUUtlblZaNmg4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZrVlVqQXQ0aUF0UXdXL1FpWW84bVRqQ2Z3Mlh5SW1aODFZWEtGQ2w3eHo1R05CaWhuaWlUa24xd2YxMTRqUmZwSG4rYW9kSkpMclJ5UGVJaDF0R0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpHb1F1VnJDRGNUdm02dVVHZ3BCUXNPNHFoS3p4M0UxYnRST3I1MzQzQkZVMWtCMEdjVjBBeWdoNU5KdVczSkxFb29tK3poMmV1ZUlFR3IzbDhjNWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzAzMTU1MDIzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3ODE1MjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJTmJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlOYi5qc29uIjogIntcImtleURhdGFcIjpcInhVUTFqbkV3SXpXWVJiVHl5SjRSajdpREFZMHFUNVR2RjlTSTZLU2lCbGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEyMzI3NDM0MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNzgxNTMxMzUwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙰𝙰𝚂𝙷𝙸𝙵_𝚂𝙴𝚁 𝙸𝚃 𝙵𝙸𝙴𝙻𝙳²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n tiktok.com/@fraud_paiyan_fp"),
 
  author : process.env.PACK_AUTHER|| "AASHIF_SER",
  packname: process.env.PACK_NAME || "🥰",
  botname : process.env.BOT_NAME  || "𝘾𝞘𝙏𝙏𝞘 𝙏𝞖𝞢 𝞒𝞗𝞑𝞗𝙏",
  ownername:process.env.OWNER_NAME|| "AASHIF_SER😇",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| ""all,
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
