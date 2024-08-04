//base by Mr Joker
//re-upload? recode? copy code? give credit ya :)
//YouTube: @CYBERTRON
//Instagram: seijurolionel
//Telegram: t.me/Dark_Lionel
//GitHub: @Joker15-tech
//WhatsApp: +2250500107362
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@cybertron-x_1?si=rODXWW-sLcXXkwoQ

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Mr Joker Tech" //ur yt chanel name
global.socialm = "GitHub: Joker 15-tech" //ur github or insta name
global.location = "United states,New york" //ur location

//new
global.botname = 'Joker Bug Bot V1' //ur bot name
global.ownernumber = '2250500107362' //ur owner number
global.ownername = '𝛭𝑅 𝐽𝛩𝛫𝛯𝑅 𝛥𝛲𝛩𝐶𝛥𝐿𝑌𝛲𝑆𝛯' //ur owner name
global.websitex = "https://youtube.com/@cybertron-x_1?si=rODXWW-sLcXXkwoQ"
global.wagc = "https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41"
global.themeemoji = '🎭'
global.wm = "Joker Tech."
global.botscript = 'https://github.com/Joker15-tech/CheemsBot-MD11' //script link
global.packname = "𝛭𝑅 𝐽𝛩𝛫𝛯𝑅 𝛥𝛲𝛩𝐶𝛥𝐿𝑌𝛲𝑆𝛯"
global.author = "𝛭𝑅 𝐽𝛩𝛫𝛯𝑅 𝛥𝛲𝛩𝐶𝛥𝐿𝑌𝛲𝑆𝛯\n\n+2250500107362"
global.creator = "2250500107362@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2250500107362,22657221461,2250141523296"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
