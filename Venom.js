
//UNICIAR CONEXAO COM O MULT DEVICE
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, WAProto, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia, Mimetype } = require("@Venom-Md/baileys-md")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const moment = require("moment-timezone") 
const os = require('os')
const crypto = require('crypto')
const speed = require('performance-now')
const encodeUrl = require('encodeurl')
const request = require('request');
const { color, bgcolor } = require("./lib/color");
const { performance } = require('perf_hooks')
const yts = require('yt-search')


const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, fetchText, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')


const nomedobot =  'NEZUKO-MD' //nom do bot
const prefa = ['/','!','.','*','#','$'] //prefixo
const  sp = '⭔'
const dono = ['558898204406','558898204406'] //dono
const venomapis = 'https://nezuko-rest-api.herokuapp.com/docs' 
const apikey  = [ 'alonezxkk' ]
ntilinkall = []
wlcm = []

APIs = {
	zenz: 'https://nezuko-rest-api.herokuapp.com/docs',
}

// Apikey Website Api
APIKeys = {
	'https://nezuko-rest-api.herokuapp.com/docs': 'alonezxkk',
}

api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const {
 ytMp4,
 ytMp3,
 ytPlay
} = require('./lib/youtubev2')

const img = fs.readFileSync('./lib/nezuko.jpg') //imagem do menu


const mentions = (teks, memberr, id) => {
       (id == null || id == undefined || id == false) ? venom.sendMessage(m.chat, {text: teks.trim(), mentions: memberr}) : venom.sendMessage(m.chat, {text: teks.trim(), mentions: memberr})
        }
        const replyc = (txt) => {
 		      return venom.sendMessage('558898204406@s.whatsapp.net', 'bot on ', { text: txt }, { quoted: m })
     		}
//EXPORTA MODULOS DOIDEX E FUNCOES
module.exports = venom = async (venom, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? prefix
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "sem nome"
        const isCreator = [venom.user.id, ...dono].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == venom.user.id ? true : false
        const text = q = args.join(" ")
      //  const insom = m.endsWith('@g.us')		
        const c = args.join(' ')
        const botNumber = venom.user.id.split(':')[0] + '@s.whatsapp.net'
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.m || quoted).mimetype || ''
       	const isMedia = /image|video|sticker|audio/.test(mime)
	
//CONST DERESPOSTAS	
	const resposta = {
    admin: 'Membro comum não tem autoridade para usar este comando 🤣',
    dono: '❗Somente meu criador pode usar este comando 📌',
    group: 'Este recurso só funciona em grupos 😕',
    aguarde: '⌛Aguarde enquanto isso tome um café☕',
    erro: 'acorreu um erro tente dnv🧑‍🔧',
    marqueoarquivo: 'marque o arquivo é use:',
    marquesticker: 'marque a figurinha',
    convertmsgimg: 'figurinha convertida para foto',
    botAdmin: 'para executar este comando o bot precisa ser adm'
    
}
        //DEFINICOES DE GRUPO
    const groupMetadata = m.isGroup ? await venom.groupMetadata(m.chat) : ''
	const groupName = m.isGroup ? groupMetadata.subject : ''
	const groupId = m.isGroup ? groupMetadata.id : ''
	const groupMembers = m.isGroup ? groupMetadata.participants : ''
	const groupAdmins = m.isGroup ? getGroupAdmins(groupMembers) : ''
	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	const isGroupAdmins = groupAdmins.includes(m.sender) || false
	const welcm = m.isGroup ? wlcm.includes(from) : true
	const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
	

//COLOUE SEU NUMERO
    const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = venom.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "lista","listType": "SINGLE_SELECT","sections": list}}, {})
            return venom.relayWAMessage(po, {waitForAck: true})
        }             

        // STATUS DO BOT
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
       		const math = (teks) => {
				return Math.floor(teks)
		}
//		externalAdReply:{title:`prefix: ${prefix}`,body:"",mediaType:"2",thumbnail:getBuffer(img),mediaUrl:`${instagramkk}`

		//enviar fotos de perfil
				try {
		pporang = await venom.profilePictureUrl(`${m.sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://telegra.ph/file/5ec45a3342684235fb209.jpg'
		      }
		const pperfil = await getBuffer(pporang)
		//enviar
		const enviar = (txt) => {
 		     venom.sendMessage(m.chat, {text: txt, quoted: m, thumbnail: img, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{ advertiserName: "https://wa.me/558898204406" , mediaType: 0, thumbnail: pperfil, caption:"https://wa.me/558898204406"}}})
    		}		
		        

        const enviarArquivoDoLink = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return venom.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return venom.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "video"){
                return venom.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            } else if(mime.split("/")[0] === "audio"){
                return venom.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: m })
            } else {
                return venom.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: m })
            }
        }
        
        
const mek = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `nezuko-md`,"title": "hmm" }}}

        const enviarbutao = (from, text, footer, buttons) => {
            return venom.sendMessage(m.chat, { text: text, footer: footer, templateButtons: buttons, quoted: m })
        }
        
const enviarButaoMsg = async (text, footer, button) => {
var list = WAProto.Message.fromObject({
buttonsMessage: WAProto.ButtonsMessage.fromObject({
contentText:text,
footerText: footer,
buttons: button,
headerType: 1
})
})

await venom.relayMessage(m.chat, list, {messageId: m.key.id})
}

const sendListMsg = async (title, description, textButton, sections) => {
var list = WAProto.Message.fromObject({
listMessage: WAProto.ListMessage.fromObject({title: title,
buttonText: textButton,
description: description,
listType: 1,
sections: sections
})
})
await venom.relayMessage(m.chat, list, {messageId: m.key.id})
}

if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotGroupAdmins) return
bvl = `\`\`\`「 Link Detectado 」\`\`\`\n\nO administrador enviou um link, o administrador é livre para enviar qualquer link😇`
if (isGroupAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await venom.groupParticipantsUpdate(m.chat, [kice], 'remove')
venom.sendMessage(from, {text:`\`\`\`「 Link Detectado 」\`\`\`\n\n@${kice.split("@")[0]} Foi expulso por enviar link neste grupo`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'JOGANDO')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?giveup|surr?ender|off|skip|surrender)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { //sender
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
reply({
'-3': 'O jogo terminou',
'-2': 'Invalido',
'-1': 'Posição invalida',
0: 'Posição invalida',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Venceu!` : isTie ? `Fim de jogo.` : `Virar ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Digite *Surrender* para se render e admitir a derrota`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await venom.sendText(room.x, str, m, { mentions: parseMention(str) } )
await venom.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}                

//IA


        		//antispa
        
        // Public & Self
        if (!venom.public) {
            if (!m.key.fromMe) return
        }

        // Mensagem no console
        if (m.message) {
            console.log(chalk.black(chalk.magenta('|| MENSAGEM')),  chalk.black(chalk.green(budy || m.mtype)) + '' +chalk.black(chalk.magenta('\n|| TIPO')),  chalk.black(chalk.green(text || m.mtype)) + '' + chalk.magenta('\n|| Em'), chalk.green(m.isGroup ? pushname : 'Pv', m.chat), + '' + chalk.magenta('\n|| DO NÚMERO'), chalk.green(pushname))
        }        
                     
      
       		
		venom.sendPresenceUpdate('available', m.chat)
		

        switch(command) {

	    case 'comprabot': {	    
                enviar(`Para comprar o bot, fale com o meu criador:\n\nhttps://wa.me/558898204406?text=quero+comprar+a+nezukobot`)
            }
            
            break
//teste           
case 'tst' : {
enviarc(' ')
}
//𝒄𝒂𝒔𝒆𝒔 𝒅𝒆 𝒈𝒓𝒖𝒑𝒐
            break
case 'marcar': {
if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
               // if (!m.isGroup) return enviar (resposta.grup)
//if (!isCreator) return enviar (resposta.dono)
              //  if (!isBotAdmins) throw resposta.botAdmin
           // if (!isGroupAdmins) throw resposta.admin
let teks = `══ *👥membros!* ══
 
 ➲ *Mensagem: ${q ? q : 'Em Branco'}*\n\n`
                for (let mem of groupMembers) {
                teks += ` @${mem.id.split('@')[0]}\n`
                }
                venom.sendMessage(m.chat, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
                }
                break
                case 'group': case 'grup': case 'gp': case 'grupo': {            	    
                if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
                if (c === 'abrir'){
              await venom.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
              } else if (c === 'fechar'){
              await venom.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
             } else if (!c) {
            enviarbutao(m.chat, `🔒 *_COFIGURAÇÃO DO GRUPO_* 🔓`, `Selecione abaixo`,  [{ displayText: `💠 Api`, url : `http://nezuko-rest-api.herokuapp.com/docs`},{ quickReplyButton: { displayText: `🔓ABRIR`, id: `${prefix}gp abrir` } }, { quickReplyButton: { displayText: `🔒FECHAR`, id: `${prefix}gp fechar` } }])           
            }
            }
            break            
            case 'join': case 'entrar': case 'entrargp': case 'aceitarconvite': case 'joingp': {
            	    
		    		
                if (!isCreator) throw resposta.dono
                if (!text) throw 'Preciso do link do grupo!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Preciso de um link que seja do whatsapp!'
                enviar(resposta.aguarde)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await venom.acceptInvite(result).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
            }
            
            break
            case 'leave': case 'sair': case 'exit': case 'sairgp': case 'sairdogp': {
            	    
		    		
                if (!isCreator) throw resposta.dono
                await venom.groupLeave(m.chat).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
            }
            
            break
	case 'kick': case 'ban': case 'banir': case 'chutar': case 'tirardogp': {
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
	case 'add': case 'adicionar': case 'addgp': case 'adicionarnogp': {
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
	case 'promote': case 'promover': case 'daadm': case 'daradm': case 'addadmin': {
	
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	enviar(`usuário se tornou um adm deste grupo`)
	}
	break
	case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply('Você ainda está no jogo')
let room = Object.values(this.game).find(room => room.state === 'ESPERA' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
m.reply('Parceiro encontrado!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'JOGANDO'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

aguardando @${room.game.currentTurn.split('@')[0]}

Digite *Surrender* para se render e admitir a derrota`
if (room.x !== room.o) await venom.sendText(room.x, str, m, { mentions: parseMention(str) } )
await venom.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'ESPERA'
}
if (args.join(" ")) room.name = args.join(" ")
m.reply('Esperando o parceiro' + (args.join(" ") ? ` digite o comando abaixo ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
venom.sendText(m.chat, `Excluiu com sucesso a sessão do TicTacToe`, m)
} else if (!this.game) {
m.reply(`Sessão TicTacToe🎮 não existe`)
} else throw '?'
} catch (e) {
m.reply('error!')
}
}
break
	case 'editinfo': {
                if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
             if (args[0] === 'open'){
                await venom.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Agora todos podem alterar as informações do grupo.`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await venom.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Agora apenas adms podem alterar as informações do grupo.`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'abrir' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'fechar' }, type: 1 }
                    ]
                    await venom.sendButtonText(m.chat, buttons, `escolha uma das opções.`, venom.user.name, m)

            }
            }
            break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(`adicionando efeito ${command} no audio, aguarde.`)
                let media = await venom.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return console.log(err)
                let buff = fs.readFileSync(ran)
                venom.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', 'ptt': true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Marque um audio com *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break	
                case 'gimage': {
        if (!text) throw `Exemplo : ${prefix + command} naruto`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Proxima imagem'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *pedido* : ${text}
🔗 *url* : ${images}`,
                    footer: venom.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                venom.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'A mensagem não foi enviada pelo bot'
                venom.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    venom.sendText(m.chat, 'Lista de membros online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
              case 'emojimix': {
	        if (!text) return m.reply(`Exemplo : ${prefix + command} 😡+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await venom.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break  
	case 'demote': case 'rebaixar': case 'tiraadm': case 'tiraradm': case 'deladm': {
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
        enviar(`usuário se tornou um membro comum`)
	}
	
	break
        case 'block': 	case 'bloquear': case 'dablock': case 'addblock': {
        	    
		    		
		if (!isCreator) throw resposta.dono
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.updateBlockStatus(users, 'block').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
        case 'unblock': 	case 'desbloquear': case 'tirarblock': case 'delblock': {
        	    
		    		
		if (!isCreator) throw resposta.dono
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await venom.updateBlockStatus(users, 'unblock').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
	  case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
                if (!text) throw 'Text ?'
                await venom.groupUpdateDescription(m.chat, text).then((res) => m.reply(`descrição do grupo alterada com sucesso!!`)).catch((err) => m.reply(jsonformat(err)))
            }
            break
	    case 'setname': case 'setsubject': 	case 'mudarnome': case 'mudanome': case 'setnome': {
	    	    
		    		
                if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
                if (!text) throw 'Insira o nome por favor'
                await venom.groupUpdateSubject(m.chat, text).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
            }
            
            break
            case 'setprofile': case 'setpp': 	case 'mudarft': case 'mudarfotobot': case 'setppbot':{
            	    
		    		
                if (!isCreator) throw resposta.dono
                if (!quoted) throw 'Marque a imagem'
                if (/image/.test(mime)) throw `resposta.marqueoarquivo` + `*${prefix + command}*`
                let media = await venom.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotGroupAdmins && !isGroupAdmins) {
                    await venom.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await venom.updateProfilePicture(venom.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            
            break

            case 'ping': case 'botstatus': case 'statusbot': case 'status': {
            	    
		    		
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `🏓Velocidade de Resposta ${latensi.toFixed(4)}  _Segundos_\n\n\n⏰Tempo online : ${runtime(process.uptime())}`.trim()
                enviar(respon)
            }
            
            break
            
	    case 'sticker': case 's': case 'stickergif': case 'sgif': {
	    	    
		    		
		if (!quoted) throw 'marque a foto'
		enviar(resposta.aguarde)
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await venom.sendImageAsSticker(m.chat, media, m, { packname: 'nezuko-md', author: `${pushname}` })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return enviar(resposta.mxm10s)
		    let media = await quoted.download()
		    let encmedia = await venom.sendVideoAsSticker(m.chat, media, m, { packname: 'nezuko-md', author: `${pushname}`})
		    await fs.unlinkSync(encmedia)
		} else {
            	    throw resposta.errofigu
        	}
	    }
	    
	    break
//𝑵𝒐𝒗𝒂𝒔 𝒄𝒂𝒔𝒆𝒔 𝒂𝒅𝒊𝒄𝒊𝒐𝒏𝒂𝒅𝒂𝒔 𝒑𝒐𝒓 𝒗𝒆𝒏𝒐𝒎
break
	    case 'toimage': case 'toimg': {
	    	    
		    		
                if (!quoted) throw resposta.marquesticker
                if (!/webp/.test(mime)) throw `resposta.marqueoarquivo` + `*${prefix + command}*`
                enviar(resposta.aguarde)
                let media = await venom.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    venom.sendMessage(m.chat, { image: buffer, caption: resposta.convertmsgimg }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            
            break	    
             case 'togif': {
                if (!quoted) return enviar(`Marque a figurinha`)
                if (!/webp/.test(mime)) return enviar(`Responder adesivo com legenda *${prefix + command}*`)
                enviar(resposta.aguarde)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await venom.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await venom.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Covertido de um webp' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
case 'attp':
try{ 
if (!c) return enviar(`preciso do text krl`)
url = encodeURI(`https://api.xteam.xyz/attp?file&text=${c}`)
venomkkk = await getBuffer(url)
venom.sendMessage(m.chat, {sticker: venomkkk}, {quoted: m})
} catch(e) {
console.log(e)
enviar('deu erro na api filho')
}
break
            case 'owner': case 'creator': case 'criador': case 'dono': {
            	    
		    		
                let vcard = 'BEGIN:VCARD\n' // metadata do ctt
                    + 'VERSION:3.0\n' 
                    + 'N:;Alone.;;;'
                    + 'FN:Alone.\n' // nome todo
                    + 'ORG:Alone;\n' // organização
                    + 'TEL;type=CELL;type=VOICE;waid=558898204406:+55 88 9820-4406\n' // WhatsApp ID + número
                    + 'END:VCARD' // finalização
                venom.sendMessage(m.chat, { contacts: { displayName: 'The AloneX Ofc.', contacts: [{ vcard }] } }, { quoted: m })
            }
            
            
           
            break
            tes
            case 'teste2': {            	    		    		
                enviar(resposta.aguarde)
                let buttons = [
                    {buttonId: 'ping', buttonText: {displayText: 'PING'}, type: 1}
                ]
                let buttonMessage = {
                    image: {url: 'https://telegra.ph/file/692385eb5225c1be33900.jpg' },
                    caption: `Olá @${m.sender.split("@")[0]}`,
                    footerText: '𝐄𝐯𝐨𝐥𝐮𝐭𝐢𝐨𝐧-𝐦𝐝',
                    buttons: buttons,
                    headerType: 4
                }
                venom.sendMessage(m.chat, buttonMessage, { quoted: m })
            }            
            break
            case 'welcome': {
if (!m.isGroup) return m.reply(resposta.group)
if (!isBotGroupAdmins) return m.reply(resposta.botAdmin)
if (!isGroupAdmins && !isCreator) return m.reply(resposta.admin)
if (args[0] === "on") {
if (welcm) return m.reply('Já Esta Ativado.')
wlcm.push(from)
m.reply('Sucesso ao ativar a mensagem de boas-vindas neste grupo')
} else if (args[0] === "off") {
if (!welcm) return m.reply('Já desativado')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sucesso ao desativar a mensagem de boas-vindas neste grupo')
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Ativar' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Desativar' }, type: 1 }
  ]
  await venom.sendButtonText(m.chat, buttonswlcm, `Clique no botão abaixo\n\nAtivar para ativar\nDesativar para desativar`, `NEZUKO-MD`, m)
  }
  }
  break
 case 'react': { 
venom.sendMessage(m.chat, reactionMessage)} 
break  
case 'swm': case 'take': case 'stickerwm': {
if (!args.join(" ")) return m.reply(`Exemplo :\nswm nezuko-md|The AloneX`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
venom.downloadAndSaveMediaMessage(quoted, "gifee")
venom.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await venom.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await venom.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 1-9 segundos`)
}
}
break
case 'translate': case 'trans': {
if (!args.join(" ")) return m.reply("kd o texto?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Traduzir: ${Detek}\n📘Resultado : ${Infoo}`)
}
break
case 'resetgruplink': {
if (!m.isGroup) return m.reply(resposta.group)
if (!isBotGroupAdmins) return m.reply(resposta.botAdmin)
if (!isGroupAdmins && !isCreator) return m.reply(resposta.admin)
venom.groupRevokeInvite(m.chat)
}
break
 case 'antilinkall': {
if (!m.isGroup) return m.reply(resposta.group)
if (!isBotGroupAdmins) return m.reply(resposta.botAdmin)
if (!isGroupAdmins && !isCreator) return m.reply(resposta.admin)
if (args[0] === "on") {
if (AntiLinkAll) return m.reply('Ja Esta Ativado.')
ntilinkall.push(from)
m.reply('Sucesso em ativar o antilink neste grupo')
var groupe = await venom.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
venom.sendMessage(from, {text: `\`\`\`「 ⚠️ATENÇÃO⚠️ 」\`\`\`\n\nSe você não é um administrador, não envie nenhum link neste grupo ou você será expulso imediatamente!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('Ja desativado.')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
m.reply('Sucesso ao desativar o antilink no grupo.')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await venom.sendButtonText(m.chat, buttonsntilink, `Escolha uma das opções abaixo.\n\nOn para ativar\nOff para desativar`, `NEZUKO-MD`, m)
  }
  }
  break 
  
//𝒄𝒂𝒔𝒆𝒔 𝒅𝒆 𝒎𝒆𝒏𝒖 𝒅𝒐 𝒃𝒐𝒕            
            
case 'menu': {
venom.sendMessage(from, { react: { text: `🗿`, key: m.key }})
            
venomkkk = `

┌──⊰ _*GRUPOS*_
│
│⊳ ${prefix}promover [@]
│⊳ ${prefix}rebaixar [@]
│⊳ ${prefix}banir [@]
│⊳ ${prefix}adicionar [@]
│⊳ ${prefix}grupo [opção]
│⊳ ${prefix}welcome [opção]
│⊳ ${prefix}antilink [opção]
│⊳ ${prefix}marcar 
│⊳ ${prefix}join
│⊳ ${prefix}setdesc
│⊳ ${prefix}editinfo [opção]
│⊳ ${prefix}delete
│⊳ ${prefix}listonline
│⊳ ${prefix}setname [texto]
│⊳ ${prefix}hidetag [texto]
│
├──⊰ _*DIVERSÃO*_
│
│⊳ ${prefix}embreve
│⊳ ${prefix}embreve
│⊳ ${prefix}embreve
│⊳ ${prefix}embreve
│
├──⊰ _*CONVERTER*_
│
│⊳ ${prefix}take nome1|nome2
│⊳ ${prefix}toimage
│⊳ ${prefix}sticker
│⊳ ${prefix}togif
│
├──⊰ _*PESQUISA*_
│
│⊳ ${prefix}pinterest
│⊳ ${prefix}anime
│⊳ ${prefix}play (off)
│⊳ ${prefix}metadinha
│⊳ ${prefix}nick
│⊳ ${prefix}gimage
│
├──⊰ _*ALTERADORES*_
│
│⊳ ${prefix}bass
│⊳ ${prefix}blown
│⊳ ${prefix}deep
│⊳ ${prefix}earrape
│⊳ ${prefix}fast
│⊳ ${prefix}fat
│⊳ ${prefix}nightcore
│⊳ ${prefix}reverse
│⊳ ${prefix}robot
│⊳ ${prefix}slow
│⊳ ${prefix}smooth
│⊳ ${prefix}tupai
│
├──⊰ _*CRIADOR*_
│
│⊳ ${prefix}sair
│⊳ ${prefix}setpp
│⊳ ${prefix}bloquear
│⊳ ${prefix}desbloquear
│
└──⊰ _*${nomedobot}*_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/nezuko.jpg') }, { upload: venom.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: venomkkk,
                            hydratedButtons: [{                  
                            	urlButton: {
                                    displayText: 'Grupo Ofc',
                                    url: `https://chat.whatsapp.com/LvOvnyL173FEzdKMZZx7q4`
                                }
                            }, {
                                callButton: {
                                    displayText: 'Ligue-Me',
                                    phoneNumber: '+55 88 99820-4406'
                                }
                            }, {
                               quickReplyButton: {
                                    displayText: 'Velocidade',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Criador',
                                    id: 'dono'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Comprar O Bot',
                                    id: 'comprabot'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                venom.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break         

//cases de fotos
case 'nick': case 'styletext': {
	      //  if (!isPremium && global.db.users[m.sender].limit < 1) return m.reply(resposta.endLimit) // respon ketika limit habis
		//db.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Digite seu nick!'
                let anu = await styletext(text)
                let teks = `𝑵𝒊𝒄𝒌𝒔 𝒋𝒆𝒓𝒂𝒅𝒐𝒔 𝒄𝒐𝒎 𝒔𝒖𝒄𝒆𝒔𝒔𝒐 𝒏𝒊𝒄𝒌= ${text}\n\n`
                for (let i of anu) {
                    teks += `➥𝑭𝒐𝒏𝒕𝒆𝒔 *${i.name}* : ${i.result}\n\n`
                }
                enviar(teks)
	    }
	    break
case 'anime': {
enviar(resposta.aguarde)
                if (!text) throw 'Digite o nome do anime'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `anime ${text}`, buttonText: {displayText: '🌠Proxima Imagem🌠'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ titulo : ${result.title}\n⭔ categoria : ${result.type}\n⭔ detalhe : ${result.source}\n⭔ Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `nezuko-md`,
                    buttons: buttons,
                    headerType: 4
                }
                venom.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'pinterest': {
                enviar(resposta.aguarde)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                   {buttonId: `pinterest`, buttonText: {displayText: '🌠Proxima Imagem🌠'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },
                    caption: 'Url: '+result,
                    footer: `nezuko-md`,
                    buttons: buttons,
                    headerType: 4
                }
                venom.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
case 'play': // ©Blacĸzιn
blkzin = args.join(' ')
if(!blkzin) return m.reply(`*❗Modo Certo: ${prefix + comando} Mc Poze❗*`)
try {
blackk = await fetchJson(`https://blkzin.herokuapp.com/download/play?&nome=${blkzin}&apikey=blackzin`)
m.reply(mess.wait)
pla = `❗мυѕιca pedιda por @${sender.split('@')[0]}❗ 
título:${blackk.resultado.título}
views: ${blackk.resultado.visualizações}
canal: ${blackk.resultado.canal}
publicado: ${blackk.resultado.publicado}`
img = await getBuffer(blackk.resultado.thumb)
venom.sendMessage(from,{image: img,thumbnail:null , caption: pla,contextInfo:{ mentionedJid:[sender]}})
aud = await getBuffer(blackk.resultado.link)
venom.sendMessage(from,{audio: aud, mimetype: 'audio/mp4'})
} catch {
m.reply('Api Do Blkzin Ta Off!!')}
break
	    case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                venom.sendImage(m.chat, thumbnail, `💬 Titulo: ${title}\n\n⭔ Tamanho do Arquivo: ${media[0].formattedSize}\n\n🔗 Link: ${url}\n\n📲  Tipo: MP3\n\n🎞 Resolução: ${args[1] || '128kbps'}\n\n*Enviando Audio, aguarde...*`, m)
                venom.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return m.reply('Arquivo acima do limite'+util.format(media))
                venom.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `💬 Titulo: ${title}\n\n⭔ Tamanho do Arquivo: ${media[0].formattedSize}\n\n🔗 Link: ${url}\n\n📲  Tipo: MP3\n\n🎞 Resolução: ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'metadinha': {
                m.reply(resposta.aguarde)
                let cuecadovenom = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let venompikakkk = cuecadovenom[Math.floor(Math.random() * cuecadovenom.length)]
                venom.sendMessage(m.chat, { image: { url: venompikakkk.male }, caption: `Menino` }, { quoted: m })
                venom.sendMessage(m.chat, { image: { url: venompikakkk.female }, caption: `Menina` }, { quoted: m })
            }
	    break            

            default:
            
if (prefix && isCmd) {
m.reply(`
╭━━━━━━━━━━━
┊ (comando: ${command} não registrado digite ${prefix}menu)
╰───────────────────`)
console.log(color('COMANDO NAO REGISTRADO', 'green'))
}            

 if (budy.startsWith('alone')) {
                     m.reply('oq vc quer com o meu criador ?')
                     console.log(color('AUTO RESPOSTA', 'blue'))

              
           
                }
                }       
                                                               
 } catch (err) {
      m.reply(util.format(err))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})


/*fim da acript todos direitos resevados ao criado venom mods
base feita para usuarios bot whatasapp
💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞💞*/
