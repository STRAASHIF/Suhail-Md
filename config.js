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


global.SESSION_ID = process.env.SESSION_ID "SUHAIL_01_40_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNixcbiAgICAgICAgMTkzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA3LFxuICAgICAgICA5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICA3NixcbiAgICAgICAgMjksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDgwLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjUyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA4LFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCU0licFZhdTF1RnhRYldrUE1paThqcm9UZXRHdVdURlFNaTVka0IyWGs4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTZ29MeDA0ZFNXYXFoQzlES1ZzVkR3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlZWZkMDBiLTE1OTAtNGE0ZS1hNjkzLTRmOTI2NTY1YzM4MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAxMixcbiAgICAgIDY2LFxuICAgICAgMjQwLFxuICAgICAgMzAsXG4gICAgICAxNTcsXG4gICAgICA5OSxcbiAgICAgIDE2NSxcbiAgICAgIDIzMCxcbiAgICAgIDEzMSxcbiAgICAgIDI0NCxcbiAgICAgIDk0LFxuICAgICAgMjUxLFxuICAgICAgMjMwLFxuICAgICAgMjA5LFxuICAgICAgMTkyLFxuICAgICAgNjUsXG4gICAgICAyMTgsXG4gICAgICA2NSxcbiAgICAgIDYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDIzOCxcbiAgICAgIDE0LFxuICAgICAgMjE1LFxuICAgICAgMjE5LFxuICAgICAgNzcsXG4gICAgICAyMjksXG4gICAgICAxNjksXG4gICAgICAyNixcbiAgICAgIDIzNyxcbiAgICAgIDMxLFxuICAgICAgMjE0LFxuICAgICAgMTE5LFxuICAgICAgMjE4LFxuICAgICAgMjMsXG4gICAgICAxODAsXG4gICAgICA1MixcbiAgICAgIDkxLFxuICAgICAgNjgsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIV04xWEpLWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3Njg2NTU3OTQ6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU3MDQxNTg2ODg4ODgzOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2VsMHNVQkVKUzNnYlVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaai9CaERGdE81TXM1eGFsa21XektnU0xsTWR1QklhaWRvVlE5di9Yc2hnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIloxR0VDNjl2ZHkxaklDZzBxZDBnSDZuelRSVEh0Sm1kbUxZWkwzbFg1L3YyWmtWUlhKZW9QK2RpNms1djFlNTAwMWhsVTk3RzVwbzgzZlliajcwbUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlYrMjV3QlFHbW55TzRiZUtlOWpwUWlTQmpRSVc5ZjlETVJsUjNFc3U3SlZSUWowVkZKek9pTlpMZzk1emVweUIvTFJyVlR4NXZFekxOK29PUXRTK2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY4NjU1Nzk0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3ODUyMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBaUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFpRy5qc29uIjogIntcImtleURhdGFcIjpcImRwQ21Qc3VVOUR4SWM4d1MzOXlMY3NFVk9NUUxWcDRBb2dHTWhBUEtUZkk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDE0NDg3MjcxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
