
const fs = require("fs")
const chalk = require("chalk")
/*Ubah Nama & Dll Cukup Dari sini(Udah Di set biar smua nama & wm Bisa diubah dari sini) 
Biar Newbie Gapusing ubah nama² 
Other*/
global.rapidkey = `463dbc2754msh0edcce776730996p15e089jsnb8a3a15ca92d`

global.thum = fs.readFileSync("./worker/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./worker/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./worker/media/image/thumb.jpg")
global.owner = ['62895704151428','6288297357055']
global.owner1 = ['62895704151428']
//-[Dari sini]
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntitoxic = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us'] 
//-[Sampai sini jangan di otak atik]
global.footer = "Aka-Bot"
global.fake = "Aka-Bot"
global.namebot = "Aka-Bot"
global.packname = "Aka"
global.packname2 = "BY Riz ~ Ardana"
global.author = "AKa-bot"
global.email = "dyudhistira51@gmail.com"
global.game = "AKa-Game"
global.nameown = "~ Riz ~"
global.resultwibu = "Nih kak Resultnya, Dasar Wibu"
global.nameyt = "AKA R.A"
global.instagram = "https://instagram.com/"
global.sessionName = "session"
global.linkgrupss = "https://chat.whatsapp.com/H59XJsXCOt0DAGM3oaCadC"
global.antitags = true
global.themeemoji = ["😺","😸","😹","😻","😼","😽","🙀","😿","😾"] //ur theme emoji
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    error: 'Error!!',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu Dibanned Blok Banyak Tingkah Sih\nHubungi Owner ketik .tanya unban owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})