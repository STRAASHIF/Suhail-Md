const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="fraudpaiyan824@gmail.com"
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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null"; "94760769124"
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760769124";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx,94760769124";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx,94703155023";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "9231844741xx,923xxxxxxxx,94703155023";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID "SUHAIL_00_00_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICA5LFxuICAgICAgICA0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICAzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NixcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA2LFxuICAgICAgICAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDgwLFxuICAgICAgICA4MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3MW9HeUpuQ3NxcktPMlp5KzFsWFM0aVdSNnFwOXVDRG5CdzVUVW9hR0dJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKSkpCYkdnLVJueThNTjBVVHJLRWVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImViMmJmMGRmLWEwMzAtNDgzNC1hNDIxLTFlNDI4MjE5YWVhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzAsXG4gICAgICAxNTEsXG4gICAgICA3MyxcbiAgICAgIDgxLFxuICAgICAgOTEsXG4gICAgICA5MSxcbiAgICAgIDExMCxcbiAgICAgIDEyOSxcbiAgICAgIDEyNyxcbiAgICAgIDU4LFxuICAgICAgOTMsXG4gICAgICAxNjUsXG4gICAgICAyNDksXG4gICAgICAyMDAsXG4gICAgICAxNCxcbiAgICAgIDE1MixcbiAgICAgIDEzMCxcbiAgICAgIDU4LFxuICAgICAgNDYsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgMjQ0LFxuICAgICAgMTA1LFxuICAgICAgMTM5LFxuICAgICAgMTQyLFxuICAgICAgMTgxLFxuICAgICAgNDQsXG4gICAgICAxNzgsXG4gICAgICAxNDksXG4gICAgICAxMDUsXG4gICAgICAxMjAsXG4gICAgICA4MSxcbiAgICAgIDEyNCxcbiAgICAgIDIzNCxcbiAgICAgIDY5LFxuICAgICAgMjA0LFxuICAgICAgMTIwLFxuICAgICAgMjUxLFxuICAgICAgMTU2LFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2VsMHNVQkVMRGwrN1FHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaai9CaERGdE81TXM1eGFsa21XektnU0xsTWR1QklhaWRvVlE5di9Yc2hnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxKYUIzMGJBOVBWQTFZTkZjZEFCMlZiUmx2anFMNzNsY3oyTUdoK0ttdGU0Z1NNeFY5TWN5NjdFWE9GWCsyMjhkaVhPZWQ1bm5RRFdQQ0lGT0Vtb0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRKQXZ0SnFUdjdmQ1RwbkhQWDVZalpNS29RMituMTFyUWxVU042NDAvMHk0Mi9sVjF3OUJGZ0RGYm81eVVKRjh4dUpHd05ad3Fnb1VYK3IvSXF4akFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Njg2NTU3OTQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU3MDQxNTg2ODg4ODgzOjRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2ODY1NTc5NDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjkyODUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWlHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBaUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkcENtUHN1VTlEeEljOHdTMzl5TGNzRVZPTVFMVnA0QW9nR01oQVBLVGZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNDQ4NzI3MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWlILmpzb24iOiAie1wia2V5RGF0YVwiOlwiSFhiNjJ1b0lqSU1hSXd6Y0RvMTNzYUxKdXdTRWtTS0dDOVpKUDZ4cGxKcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTQ0ODcyNzEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjQ1NTQ4NTc1MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFpSS5qc29uIjogIntcImtleURhdGFcIjpcInNiM2MwS3l0eG9mYnVFRVNuaXZQSTBacmk5VWZ4Y21sVmZ5RG1DYzVUYTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDE0NDg3MjcxLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwNjg0Njg0MDNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBaUouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3dmhWVnhaTU15ZUNzTXo4L1FMbEk3SjhFckl5aDhlT3ByTGZQZE8wYk9JPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxNDQ4NzI3MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIxNjkxODY0MDI1XCJ9Igp9"  // PUT your SESSION_ID 


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
