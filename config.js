const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="fraudpaiyan824@gmail.com"
global.location="Colombo,srilanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://call.whatsapp.com/voice/lyNV2WxvmXrY5mb9RHyChg";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©🦋💕AASHIF_SER ✨️❤️‍🩹" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760769124";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_18_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgOTIsXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICA3NixcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4MixcbiAgICAgICAgNDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQxLFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICA4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRdEtITVMwMmZzRlJhQ01TUk1POTI0WFBXWnc0TWNuakUzZ2MzR0lhVVlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEclpJYlBjclQzT05CajNIaUItSzVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5NzBhNmVkLTllZmUtNDNhOC04YzNlLTI1ODExYTEyM2ZlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICA1LFxuICAgICAgOCxcbiAgICAgIDI1MyxcbiAgICAgIDE4MixcbiAgICAgIDU4LFxuICAgICAgNTgsXG4gICAgICAxNjAsXG4gICAgICAxNTcsXG4gICAgICA0MSxcbiAgICAgIDExNSxcbiAgICAgIDE0MSxcbiAgICAgIDE5LFxuICAgICAgMjcsXG4gICAgICAzMixcbiAgICAgIDEwNyxcbiAgICAgIDQsXG4gICAgICAxODEsXG4gICAgICAxODUsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxNDAsXG4gICAgICAyMzMsXG4gICAgICAxNjMsXG4gICAgICAxNzAsXG4gICAgICAxMjEsXG4gICAgICAxODcsXG4gICAgICAxMTUsXG4gICAgICAzMSxcbiAgICAgIDc1LFxuICAgICAgMTkzLFxuICAgICAgMTg4LFxuICAgICAgNjYsXG4gICAgICAxNTAsXG4gICAgICAxMjcsXG4gICAgICAxMSxcbiAgICAgIDE1NSxcbiAgICAgIDEwOCxcbiAgICAgIDIxNyxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU5SFdUU0hQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MDc2OTEyNDo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE1NjU0OTA0OTEwMDc2OjYyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05tYm1jQUZFSUNyeWJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVWFZMHZTejhyQkNha21TZTdYNHJXQjBoUkw5R2tqRVcvS0k0ZTA5MUV5WT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIweGVlV0x3cXV3ZlFBeFBicDFzK2QvUjczVjc3eFZVNzZ5ZlhqTmlMU2l2eml2WlpRWEJ3U3VtUGdBSkt0Zk84Y0srVE41VWZMNWtUd2FSVGtxZHdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFYTdlT0VOZjVtUVM3VnZrVTJJVDR2alJ5cUorVm9lUWtnZWF3U1RKYU5oZWdleHdacGFnb2g3R3pUQVQyeld4cnAzMlVIUEVJZU5tZDNub0s2S0VDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2MDc2OTEyNDo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjcxODc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSEF3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIQXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNUkF4Qmk5Yk5SVDJmV0hDN1N1Zm5ONllRdXpUcmhSRlIvQ0ZSckxYZGtzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzY4MDgxNTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ʏ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©🦋💕AASHIF_SER ✨️❤️‍🩹』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "A",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Monkey-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Aashif_ser",


  errorChat : process.env.ERROR_CHAT || "",as
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
