//base by JAANITH❗
//re-upload? recode? copy code? give credit ya :)
//YouTube: @Nowry77
//Instagram: Nowry77
//Telegram: t.me/JANITHZ
//GitHub: @Nowry77
//WhatsApp: +94741721159


const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Nowry77" //ur yt chanel name
global.socialm = "GitHub: Nowry77" //ur github or insta name
global.location = "Unknown" //ur location

//new
global.botname = 'Cheems Bot MD V11' //ur bot name
global.ownernumber = '94741721159' //ur owner number
global.ownername = 'JANITH❗ ' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "JANITH❗\n\n+94741721159"
global.creator = "94741721159@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["94741721159"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
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
