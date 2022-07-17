      
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
const { UploadFileUgu, webp2mp4File, TelegraPh} = require('./lib/uploader')


const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json')) 
const dinheiro = JSON.parse(fs.readFileSync('./database/dinheiro.json')) 
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/nivel.json'))
let db = JSON.parse(fs.readFileSync('./database/database.json'))
 
const {
 ytDonlodMp3,
 ytDonlodMp4,
 ytPlayMp3,
 ytPlayMp4,
 ytSearch
} = require('./lib/youtube')
 
nomedobot =  '「 NEZUKO-MD 」' //nom do bot
nomedodono = 'The AloneX Ofc'
numerododono = '+55 88 9820-4406'
sc = 'ainda em desenvolvimento'
const prefix = '!' //prefixo
const  sp = '⭔'
const dono = ['558898204406','559492988170'] //dono
const nezukoapis = 'https://nezuko-rest-api.herokuapp.com/docs' 
const apikey  = [ 'alonezxkk' ]
ntilinkall = [] 
wlcm = [] 
ntnsfw = []
public = true 
antipv = false

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
       (id == null || id == undefined || id == false) ? nezuko.sendMessage(m.chat, {text: teks.trim(), mentions: memberr}) : nezuko.sendMessage(m.chat, {text: teks.trim(), mentions: memberr})
        }
        const replyc = (txt) => {
 		      return nezuko.sendMessage('558898204406@s.whatsapp.net', 'bot on ', { text: txt }, { quoted: freply })
     		}
//EXPORTA MODULOS DOIDEX E FUNCOES
module.exports = nezuko = async (nezuko, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
       // var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? prefix
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "sem nome"
        const isCreator = [nezuko.user.id, ...dono].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == nezuko.user.id ? true : false
        const text = q = args.join(" ")
      //  const insom = m.endsWith('@g.us')		
        const c = args.join(' ')
        const botNumber = nezuko.user.id.split(':')[0] + '@s.whatsapp.net'
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.m || quoted).mimetype || ''
       	const isMedia = /image|video|sticker|audio/.test(mime)
	
var replys = ["[ ! ] Aguarde amigo, estou fazendo...", "Vai beber uma água, ja estou terminando de enviar..", "㋡ Opa, calma ae, tô enviando já!!", "❬❗❭ Aguarde 5 segundos", "☬ Seu pedido é uma ordem companheiro(a), Enviando...", "ههههه𓅂 Oi filho de Deus, calma ae, tô terminando de fazer..", "Oi princesa, já estou preparando pra enviar, Aguarde..", "Salve mano, só aguarde um pouquinho que já estou enviando!!", "Aquieta o coração amigo, já estou enviando!", "Espere sentado que estou enviando!", "Pisa no freio aí amigo, tô enviando já!", "Foi daqui que pediram comando? Ta chegando...", "Oq vc ñ pede chorando, que eu não faço sorrindo, enviando já!", "Em 365 dias úteis termino o comando kkkk meme, to enviando!", "Aproveita que tô terminando aqui e beba água, hidrate-se!", "Seu pedido é uma ordem, terminando patrão!", "Manda quem pode, obedece quem tem juízo. Já tô enviando...", "Jaja está na mão amigo, aguarde um instante!", "Quem espera, sempre alcança","Tô enviando já amigão!"]
var replys_aiai = replys[Math.floor(Math.random() * (replys.length))]

	
//CONST DERESPOSTAS	
	const resposta = {
    admin: 'Membro comum não tem autoridade para usar este comando 🤣',
    dono: '❗Somente meu criador pode usar este comando 📌',
    group: 'Este recurso só funciona em grupos 😕',
    aguarde: `${replys_aiai}`,
    erro: 'acorreu um erro tente dnv🧑‍🔧',
    marqueoarquivo: 'marque o arquivo é use:',
    marquesticker: 'marque a figurinha',
    marquest: 'marque a figurinha',
    convertmsgimg: 'figurinha convertida para foto',
    convertmsgvideo: 'figurinha convertida para vídeo',
    nsfw: 'O recurso nsfw não foi ativado, entre em contato com o administrador para ativar',
    botAdmin: 'para executar este comando o bot precisa ser adm'
    
}
        //DEFINICOES DE GRUPO
    const groupMetadata = m.isGroup ? await nezuko.groupMetadata(m.chat) : ''
	const groupName = m.isGroup ? groupMetadata.subject : ''
	const groupId = m.isGroup ? groupMetadata.id : ''
	const groupMembers = m.isGroup ? groupMetadata.participants : ''
	const groupAdmins = m.isGroup ? getGroupAdmins(groupMembers) : ''
	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
	const isGroupAdmins = groupAdmins.includes(m.sender) || false
	const welcm = m.isGroup ? wlcm.includes(from) : true
	const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
	const isAutoSticker = m.isGroup ? autosticker.includes(from) : true
    const isLevelingOn = m.isGroup ? _leveling.includes(m.chat) : false	   
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false     
	

//COLOUE SEU NUMERO
    const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = nezuko.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "lista","listType": "SINGLE_SELECT","sections": list}}, {})
            return nezuko.relayWAMessage(po, {waitForAck: true})
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
		pporang = await nezuko.profilePictureUrl(`${m.sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://telegra.ph/file/5ec45a3342684235fb209.jpg'
		      }
		const pperfil = await getBuffer(pporang)
		//enviar
		const enviar = (txt) => {
 		     nezuko.sendMessage(m.chat, {text: txt, quoted: m, thumbnail: img, contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply:{ advertiserName: "https://wa.me/558898204406" , mediaType: 0, thumbnail: pperfil, caption:"https://wa.me/558898204406"}}})
    		}		
		          

        const enviarArquivoDoLink = async (from, url, caption, msg, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return nezuko.sendMessage(m.chat, { video: await convertGif(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: freply})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime.split("/")[0] === "image"){
                return nezuko.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: freply})
            } else if(mime.split("/")[0] === "video"){
                return nezuko.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: freply})
            } else if(mime.split("/")[0] === "audio"){
                return nezuko.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg'}, {quoted: freply })
            } else {
                return nezuko.sendMessage(m.chat, { document: await getBuffer(url), mimetype: mime, caption: caption, mentions: men ? men : []}, {quoted: freply })
            }
        }
        
        
const mek = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${nomedobot}`,"title": "hmm" }}}

        const enviarbutao = (from, text, footer, buttons) => {
            return nezuko.sendMessage(m.chat, { text: text, footer: footer, templateButtons: buttons, quoted: freply })
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

await nezuko.relayMessage(m.chat, list, {messageId: m.key.id})
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
await nezuko.relayMessage(m.chat, list, {messageId: m.key.id})
}

const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": nomedobot, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`./lib/nezuko.jpg`)} } }

if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotGroupAdmins) return
bvl = `\`\`\`「 Link Detectado 」\`\`\`\n\nO administrador enviou um link, o administrador é livre para enviar qualquer link😇`
if (isGroupAdmins) return enviar(bvl)
if (m.key.fromMe) return enviar(bvl)
if (isCreator) return enviar(bvl)
kice = m.sender
await nezuko.groupParticipantsUpdate(m.chat, [kice], 'remove')
nezuko.sendMessage(from, {text:`\`\`\`「 Link Detectado 」\`\`\`\n\n@${kice.split("@")[0]} Foi expulso por enviar link neste grupo`, contextInfo:{mentionedJid:[kice]}}, {quoted: freply})
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
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	  
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    enviar({
	    '-3': 'O jogo terminou😥',
	    '-2': 'Inválido❌',
	    '-1': 'Posição inválida❌',
	    0: 'Posição inválida❌',
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
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')} 
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Ganhou` : isTie? `Fim de jogo` : `Turno ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

digite ${prefix}delttt para excluir a sessão do jogo`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await nezuko.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await nezuko.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
 	    }
	    
 //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|aceitar|Sim|okay?|reject|no|later|nope(k.)?Sim|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(rejeitar|no|later|n|nope(k.)?Sim)/i.test(m.text)) {
	    nezuko.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Recuse Suit, Suit Cancelado❌`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    nezuko.sendText(m.chat, `O terno foi enviado para conversar

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Por favor, escolha um terno no respectivo bate-papo"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) nezuko.sendText(roof.p, `Por favor selecione❗ \n\Rock🗿\nPaper📄\nTesoura✂️`, m)
	    if (!roof.pilih2) nezuko.sendText(roof.p2, `Por favor selecione❗ \n\nRock🗿\nPaper??\nTesoura✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) nezuko.sendText(m.chat, `Ambos os jogadores não querem jogar,\nProcesso cancelado❄`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    nezuko.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Não Escolhi Terno, Fim de Jogo❗`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    enviar(`Você escolheu ${m.text} ${!roof.pilih2 ? `\n\nEsperando o oponente escolher` : ''}`)
	    if (!roof.pilih2) nezuko.sendText(roof.p2, '_O oponente escolheu_\nAgora é a sua vez', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    enviar(`Você escolheu  ${m.text} ${!roof.pilih ? `\n\nEsperando o oponente escolher` : ''}`)
	    if (!roof.pilih) nezuko.sendText(roof.p, '_O oponente escolheu_\nAgora é a sua vez', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    nezuko.sendText(roof.asal, `_*Resultados*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Vencer \n` : ` Perder \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Vencer \n` : ` Perder \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }	    
if (antipv && !isCreator && !m.isGroup) {
enviar(`🚫 O PV ESTÁ BLOQUEADO 🚫`)
//akame.updateBlockStatus(sender, 'block')
}

const add_dinheiro_padrão = (sender) => {
        	const obj = {id: sender, dinheiro : 0}
            dinheiro.push(obj)
            fs.writeFileSync('./database/dinheiro.json', JSON.stringify(dinheiro))
        }
                const add_dinheiro = (sender, amount) => {
            let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro += amount
                fs.writeFileSync('./database/dinheiro.json', JSON.stringify(dinheiro))
            }
        }        
        const verificar_dinheiro = (sender) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return dinheiro[position].dinheiro
            }
        }
          const confirma_dinheiro = (sender, amount) => {
        	let position = false
            Object.keys(dinheiro).forEach((i) => {
                if (dinheiro[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                dinheiro[position].dinheiro -= amount
                fs.writeFileSync('./database/dinheiro.json', JSON.stringify(dinheiro))
            }
        }
         const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = { id: sender, xp: 1, level: 1 }
	_level.push(obj)
	fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
} 



const levelRole = getLevelingLevel(m.sender, _level)
         var role = 'Bronze I🥉'
   	     if (levelRole <= 3) {
   	         role = 'Bronze  I🥉'
   	     } else if (levelRole <= 5) {
   	         role = 'Bronze II🥉'
   	     } else if (levelRole <= 7) {
   	         role = 'Bronze  III🥉'
   	     } else if (levelRole <= 8) {
   	         role = 'Bronze  IV🥉'
   	     } else if (levelRole <= 9) {
   	         role = 'Bronze  V🥉'
   	     } else if (levelRole <= 10) {
   	         role = 'Prata I🥈'
   	     } else if (levelRole <= 11) {
   	         role = 'Prata II🥈'
   	     } else if (levelRole <= 12) {
   	         role = 'Prata III🥈'
   	     } else if (levelRole <= 13) {
   	         role = 'Prata IV🥈'
   	     } else if (levelRole <= 14) {
   	         role = 'Prata V🥈'
   	     } else if (levelRole <= 14) {
   	         role = 'Ouro I🥇'
   	     } else if (levelRole <= 15) {
   	         role = 'Ouro II🥇'
   	     } else if (levelRole <= 16) {
   	         role = 'Ouro III🥇'
   	     } else if (levelRole <= 17) {
   	         role = 'Ouro IV🥇'
   	     } else if (levelRole <= 18) {
   	         role = 'Ouro V🥇'
   	     } else if (levelRole <= 19) {
   	         role = 'Campeão I🏆'
   	     } else if (levelRole <= 20) {
   	         role = 'Campeão II🏆'
   	     } else if (levelRole <= 21) {
   	         role = 'Campeão III🏆'
   	     } else if (levelRole <= 22) {
   	         role = 'Campeão IV🏆'
   	     } else if (levelRole <= 23) {
   	         role = 'Campeão V🏆'
   	     } else if (levelRole <= 24) {
   	         role = 'Diamante I 💎'   	         
   	     } else if (levelRole <= 25) {
   	         role = 'Diamante II 💎'    
   	     } else if (levelRole <= 26) {
   	         role = 'Diamante III 💎'   	     
   	     } else if (levelRole <= 27) {
   	         role = 'Diamante IV 💎️'   	         
   	     } else if (levelRole <= 28) {
   	         role = 'Diamante V 💎️'    
   	     } else if (levelRole <= 29) {
   	         role = 'Mestre I 🐂️'     
   	     } else if (levelRole <= 30) {
   	         role = 'Mestre II 🐂️'         
   	     } else if (levelRole <= 31) {
   	         role = 'Mestre III 🐂'   	         
   	     } else if (levelRole <= 32) {
   	         role = 'Mestre IV 🐂'    
   	     } else if (levelRole <= 33) {
   	         role = 'Mestre V 🐂'     
   	     } else if (levelRole <= 34) {
    	        role = 'Mítico I 🔮'            
    	    } else if (levelRole <= 31) {
   	         role = 'Mítico II 🔮'   	         
   	     } else if (levelRole <= 32) {
   	         role = 'Mítico III 🔮'    
   	     } else if (levelRole <= 33) {
   	         role = 'Mítico IV 🔮'     
   	     } else if (levelRole <= 34) {
    	        role = 'Mítico V 🔮'                   	    
   	    } else if (levelRole <= 35) {
    	        role = 'Lenda I ⚡'                
 	      } else if (levelRole <= 36) {
    	        role = 'Lenda II ⚡'                
        } else if (levelRole <= 37) {
    	        role = 'Lenda III ⚡'                
	       } else if (levelRole <= 38) {
    	        role = 'Lenda IV ⚡'                
        } else if (levelRole <= 39) {
    	        role = 'Lenda V ⚡'                
        } else if (levelRole <= 40) {
            role = 'Lendário 🔥'      
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
       }
                 	    
		
		//>> Porcentagem do nivel
		var per = '□□□□□□□□□□ 0%'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
			const perl = peri-getLevelingXp(m.sender) 
			const resl = Math.round(100-((perl/getLevelingXp(m.sender))*100))
			if (resl <= 10) {
				per = `■□□□□□□□□□ ${resl}%`
			} else if (resl <= 20) {
				per = `■■□□□□□□□□ ${resl}%`
			} else if (resl <= 30) {
				per = `■■■□□□□□□□ ${resl}%`
			} else if (resl <= 40) {
				per = `■■■■□□□□□□ ${resl}%`
			} else if (resl <= 50) {
				per = `■■■■■□□□□□ ${resl}%`
			} else if (resl <= 60) {
				per = `■■■■■■□□□□ ${resl}%`
			} else if (resl <= 70) {
				per = `■■■■■■■□□□ ${resl}%`
			} else if (resl <= 80) {
				per = `■■■■■■■■□□ ${resl}%`
			} else if (resl <= 90) {
				per = `■■■■■■■■■□ ${resl}%`
			} else if (resl <= 100) {
				per = `■■■■■■■■■■ ${resl}%`
			}
		
//>> Nivel farm
			if (m.isGroup && isLevelingOn) {
				const currentLevel = getLevelingLevel(m.sender)
				const checkId = getLevelingId(m.sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
					  const verificardinheiro = verificar_dinheiro(m.sender, dinheiro)
       if (verificardinheiro === undefined) confirma_dinheiro(m.sender, dinheiro)
       const dinheirodado = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       add_dinheiro(m.sender, dinheirodado, dinheiro)
					const amountXp = Math.floor(Math.random() * 50) + 1000
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(m.sender)
					addLevelingXp(m.sender, amountXp)					
					if (requiredXp <= getLevelingXp(m.sender)) {
						addLevelingLevel(m.sender, 1)						
						console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"));
				        console.log('\x1b[1;31m', color("➛ ", "red"), color("Estado: "), color("Subiu de nivel", "yellow"))
				        console.log('\x1b[1;31m', color("➛ ", "red"), color("Nro: "), color(`${m.sender.split("@")[0]}`, "pink"))
				        console.log('\x1b[1;31m', color("➛ ", "red"), color("Nivel: "), color(`${getLevel} ➪ ${getLevelingLevel(m.sender)}`, "pink"))
				        try {
               ppimg = await nezuko.profilePictureUrl(m.sender, 'image')
               } catch {
               ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                ran = getRandom('.jpg')
                rano = getRandom('.jpg')
                buff = await getBuffer(ppimg)
                fs.writeFileSync(ran, buff)
                anu = await TelegraPh(ran)
                //${util.format(anu)}               
			          		add_dinheiro(m.sender, 1000, dinheiro)         
levelup = `*Olá humano ${pushname}, boas notícias, você acaba de subir de nível, parabéns!*

⎔ *✨Exp* : ${getLevelingXp(m.sender)}
⎔ *🆙Nível* : ${getLevel} ➪ ${getLevelingLevel(m.sender)}
⎔ *💵 Dinheiro* : ${verificardinheiro}
⎔ *🧮Porcentagem* : ${per}
⎔ *🏅Patente* : ${role}

*Parabéns 🎉🎉*` 
nezuko.sendMessage(m.chat, {text: levelup, mentions:[m.sender]}, {quoted: freply})
					}
				} catch (err) {
					console.error(err)
				}
			}			
			
			//Estasticas
			let Leveling_ = 'desativado'
			if (isLevelingOn) {
			Leveling_ = 'ativado'
			}
			


//IA

 if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await nezuko.sendImageAsSticker(from, mediac, m, { packname: 'nezuko-md', author: 'The AloneX Ofc' })
              //  enviar(`Foto/video detectado, fazendo sua figu em instantes, aguarde.`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await nezuko.sendVideoAsSticker(from, mediac, m, { packname: 'nezuko-md', author: 'The AloneX Ofc' })
            }
        }
        //Autosticker pc
        		//antispa
        
        // Public & Self
        if (!nezuko.public) {
            if (!m.key.fromMe) return
        }

        // Mensagem no console
        if (m.message) {
            console.log(chalk.black(chalk.magenta('|| MENSAGEM')),  chalk.black(chalk.green(budy || m.mtype)) + '' +chalk.black(chalk.magenta('\n|| TIPO')),  chalk.black(chalk.green(text || m.mtype)) + '' + chalk.magenta('\n|| Em'), chalk.green(m.isGroup ? pushname : 'Pv', m.chat), + '' + chalk.magenta('\n|| DO NÚMERO'), chalk.green(pushname))
        }        
                     
      
       		
		nezuko.sendPresenceUpdate('available', m.chat)
	

        switch(command) {

	    case 'comprabot': {	    
                enviar(`Para comprar o bot, fale com o meu criador:\n\nhttps://wa.me/558898204406?text=quero+comprar+a+nezukobot`)
            }
            
            break
            case 'readmore': {
                if (!text) return enviar(`Example : ${prefix + command} halo gaes`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               enviar(`${anu.result}`)
            }
            break
              case 'tinyurl': {
            enviar(resposta.aguarde)
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              enviar(`${anu.data} here you go!`)
              } catch (e) {
              emror = String(e)
              enviar(`${e}`)
            }
        }
        break
            case 'public': case 'publico': case 'modpublic': {          
                if (!isCreator) throw resposta.dono
                nezuko.public = true
                enviar('Mod mudado para publico')
            }
            break
            case 'self': case 'privado': case 'modself': {
                if (!isCreator) throw resposta.dono
                nezuko.public = false
                enviar('Mod mudado para privado')
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
                nezuko.sendMessage(m.chat, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: freply })
                }
                break
               case 'antipv':
            	   
            if (!isCreator) throw resposta.dono
            if (c === 'on'){
           antipv = true
           enviar(`Anti pv foi ativado com sucesso`)
            } else if (c === 'off'){
            antipv = false
            enviar(`Anti pv foi desativado com sucesso`)
             } else if (!c) {
            enviarbutao(m.chat, `📍 *_ANTI PV_* ❌`, `Selecione abaixo`,  [{ quickReplyButton: { displayText: `✅ON`, id: `${prefix + command} on` } }, { quickReplyButton: { displayText: `⭕OFF`, id: `${prefix + command} off` } }])
            }            
            break
            case 'leveling': case 'farm': case 'levelingfarm': {    	    
               if (!m.isGroup) return enviar(resposta.group)
                if (!isBotGroupAdmins) return enviar(resposta.botAdmin)
                  if (!isGroupAdmins) return enviar(resposta.admin)
                    if (c === 'on'){
                    if (isLevelingOn) return enviar('✳️ *Já esta ativado*')
                    _leveling.push(m.chat)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                   enviar(`sucesso ao ativar o sistema de level`)
                  } else if (c === 'off'){
                    _leveling.splice(m.chat, 1)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                     enviar('✅ Leveling foi desativado')
              } else if (!c) {
            enviarbutao(m.chat, `🆙 *_LEVELING_*  🆙`, `Selecione abaixo`,  [{ quickReplyButton: { displayText: `✅ON`, id: `${prefix + command} on` } }, { quickReplyButton: { displayText: `⭕OFF`, id: `${prefix + command} off` } }])            
            }
            }
            break
            case 'setreply': {
               if (!isGroupAdmins && !isCreator) return enviar(resposta.admin)
			    if (args.length < 1) return enviar('*onde ta o texto irmão?*')
					if (args.length < 1) return
					nomedobot = body.slice(10)
					nezuko.sendMessage(from, { text: `a resposta foi alterada com sucesso para : ${nomedobot}`}, {quoted : freply})
					}
				break 
				case 'hidetag':                	   
               if (!m.isGroup) return enviar(resposta.group)
                if (!isBotGroupAdmins) return enviar(resposta.botAdmin)
                if (!isGroupAdmins) return enviar(resposta.admin)
                nezuko.sendMessage(m.chat, { text : c ? c : '' , mentions: groupMembers.map(r => r.id)})
               break
                case 'ephemeral': {
if (!m.isGroup) return enviar(resposta.group)
if (!isBotGroupAdmins) return enviar(resposta.botAdmin)
if (!isGroupAdmins && !isCreator) return enviar(resposta.admin)
if (args[0] === 'enable') {
await nezuko.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
} else if (args[0] === 'disable') {
await nezuko.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'ephemeral enable', buttonText: { displayText: 'Ativar' }, type: 1 },
{ buttonId: 'ephemeral disable', buttonText: { displayText: 'Desativar' }, type: 1 }
]
let buttonMessage = {
caption: `*「 NEZUKO-MD 」*\n\nSelecione umas das opções abaixo.`,
footer: `「 NEZUKO-MD 」`,
buttons: buttons,
headerType: 4
}
nezuko.sendMessage(m.chat, buttonMessage, { quoted: freply })
}
}
break
                case 'autosticker': {
if (!m.isGroup) return enviar(resposta.group)
if (!isBotGroupAdmins) return enviar(resposta.botAdmin)
if (!isGroupAdmins && !isCreator) return enviar(resposta.admin)
if (args[0]  === 'on'){
if (isAutoSticker) return enviar(`Já esta ativo.`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
enviar('autosticker ativado')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
} else {
             let buttons = [
                        { buttonId: 'autosticker on', buttonText: { displayText: '✅ON' }, type: 1 },
                        { buttonId: 'autosticker off', buttonText: { displayText: '⭕OFF' }, type: 1 }
                    ]
                    await nezuko.sendButtonText(m.chat, buttons, `escolha uma das opções.`, `${nomedobot}`, m)

            }
            }
break
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (!m.isGroup) return enviar(resposta.group)
if (!AntiNsfw) return enviar(resposta.nsfw)
try{
enviar(resposta.aguarde)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
nezuko.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Error")}	
break
case 'nsfw': {
if (!m.isGroup) return enviar(resposta.group)
if (!isBotGroupAdmins) return enviar(resposta.botAdmin)
if (!isGroupAdmins && !isCreator) return enviar(resposta.admin)
if (args[0] === "on") {
if (AntiNsfw) return enviar(`já está ativado`)
ntnsfw.push(from)
enviar('Sucesso ao ativar o nsfw neste grupo')
var groupe = await nezuko.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
nezuko.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return enviar(`já está desativado`)
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
enviar('Sucesso ao desativar o nsfw neste grupo')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: '✅ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: '⭕OFF' }, type: 1 }
  ]
  await nezuko.sendButtonText(m.chat, buttonsntnsfw, `Clique no botão abaixo\n\nAtivar para ativar\nDesativar para desativar`, `${nomedobot}`, m)
  }
  }
  break
case 'quando':
				if (!text) return enviar(`Use Txt, Exemplo : ${prefix + command} quando irei casar `)
					const kapan = ['daqui 5 dias', 'daqui 10 dias', 'daqui 15 dias','daqui 20 dias', 'daqui 25 dias','daqui 30 dias','daqui 35 dias','daqui 40 dias','45 daqui Dias','daqui 50 Dias','daqui 55 Dias','daqui 60 Dias','65 daqui Dias','daqui 70 Dias','75 daqui Dias','daqui 80 Dias','85 daqui Dias' ,'daqui 90 Dias','daqui 100 Dias','daqui 5 Meses', 'daqui 10 Meses', 'daqui 15 Meses','daqui 20 Meses', 'daqui 25 Meses','daqui 30 Meses',' 35 Meses daqui','40 Meses daqui','45 Meses daqui','50 Meses daqui','55 Meses daqui','60 Meses daqui','65 Meses daqui','70 Meses daqui','75 Meses daqui','daqui 80 Meses','daqui 85 Meses','daqui 90 Meses','daqui 100 Meses','daqui 1 Ano','daqui 2 Anos','daqui 3 Anos','daqui 4 Anos' ,'daqui 5 anos','Amanhã','O dia depois de amanhã',`Depois deste comando, você também ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
nezuko.sendMessage(from, { text: `Questão : ${q}\nResposta : *${kapankah}*` }, { quoted: freply })
					break
					case 'checkdeath':
             if (!text) return enviar(`Use o nome de alguém, Exemplo : ${prefix + command} alone`)
              predea = await axios.get(`https://api.agify.io/?Nome=${q}`)
              enviar(`Nome : ${predea.data.Nome}\n*Morto na idade :* ${predea.data.age} Ano.\n\n_Rápido, Rápido, Arrependa-se Mano, Porque Ninguém Sabe Sobre a Morte_`)
              break
               case 'tourl': {
                enviar(resposta.aguarde)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await nezuko.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    enviar(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    enviar(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
                case 'group': case 'grup': case 'gp': case 'grupo': {            	    
                if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
                if (c === 'abrir'){
              await nezuko.groupSettingUpdate(m.chat, 'not_announcement').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
              } else if (c === 'fechar'){
              await nezuko.groupSettingUpdate(m.chat, 'announcement').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
             } else if (!c) {
            enviarbutao(m.chat, `🔒 *_COFIGURAÇÃO DO GRUPO_* 🔓`, `Selecione abaixo`,  [{ quickReplyButton: { displayText: `🔓ABRIR`, id: `${prefix}gp abrir` } }, { quickReplyButton: { displayText: `🔒FECHAR`, id: `${prefix}gp fechar` } }])           
            }
            }
            break            
            case 'join': case 'entrar': case 'entrargp': case 'aceitarconvite': case 'joingp': {
            	    
		    		
                if (!isCreator) throw resposta.dono
                if (!text) throw 'Preciso do link do grupo!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Preciso de um link que seja do whatsapp!'
                enviar(resposta.aguarde)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await nezuko.acceptInvite(result).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
            }
            
            break
            case 'leave': case 'sair': case 'exit': case 'sairgp': case 'sairdogp': {
            	    
		    		
                if (!isCreator) throw resposta.dono
                await nezuko.groupLeave(m.chat).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
            }
            
            break
	case 'kick': case 'ban': case 'banir': case 'chutar': case 'tirardogp': {
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nezuko.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
	case 'add': case 'adicionar': case 'addgp': case 'adicionarnogp': {
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nezuko.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
	case 'promote': case 'promover': case 'daadm': case 'daradm': case 'addadmin': {
	
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nezuko.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	enviar(`usuário se tornou um adm deste grupo`)
	}
	break
	case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return enviar(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.Nome === text : true))
            if (room) {
            enviar('Parceiro encontrado❗')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
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
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

digite ${prefix}delttt para excluir a sessão do jogo`
            if (room.x !== room.o) await nezuko.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await nezuko.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.Nome = text
            enviar('Esperando o parceiro' + (text ? ` Digite o comando abaixo ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            nezuko.sendText(m.chat, `A Sessão TicTacToe foi excluída com sucesso`, m)
            } else if (!this.game) {
            enviar(`Sessão TicTacToe🎮 Não Existe`)
            } else enviar('?')
            } catch (e) {
            enviar('Damaged')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return enviar(`Complete seu terno anterior`)
	    if (m.mentionedJid[0] === m.sender) return enviar(`Não posso jogar comigo mesmo❗`)
            if (!m.mentionedJid[0]) return enviar(`_Quem você quer desafiar❓_\nMarque a pessoa..\n\nExemplo : ${prefix}suit @558898204406`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  enviar(`A pessoa que você está desafiando está jogando terno com outra pessoa :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} está desafiando @${m.mentionedJid[0].split`@`[0]} Para jogar terno

@${m.mentionedJid[0].split`@`[0]} use aceitar para aceitar o desafio ou use rejeitar para rejeitar o desafio`
            this.suit[id] = {
            chat: await nezuko.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) nezuko.sendText(m.chat, `_Tempo limite do traje_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return enviar(resposta.dono)
                if (!q) return enviar(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === '--mudo') {
                    nezuko.chatModify({ mute: 'Infinidade' }, m.chat, []).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
                } else if (args[0] === '--ativar o som') {
                    nezuko.chatModify({ mute: null }, m.chat, []).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
                } else if (args[0] === '--arquivar') {
                    nezuko.chatModify({  archive: true }, m.chat, []).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
                } else if (args[0] === '--desarquivar') {
                    nezuko.chatModify({ archive: false }, m.chat, []).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
                } else if (args[0] === '--ler') {
                    nezuko.chatModify({ markRead: true }, m.chat, []).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
                } else if (args[0] === '--Não lida') {
                    nezuko.chatModify({ markRead: false }, m.chat, []).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
                } else if (args[0] === '--delete') {
                    nezuko.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
                }
            }
            break 
            case 'morte': {
idde = ["30", "76", "90", "72", "83", "73", "83", "74", "92", "100", "94", "48", "37", "53", "63"]
idadez = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idadez} anos de idade.`
enviar(morte)
}
break

case 'gay': {
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'você é gay??'
}
hasil = `Você é ${random}% gay\n\n${bo}`
enviar(hasil)
}
break
case 'pau': {
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
enviar(hasil)
}
break
	case 'editinfo': {
                if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
             if (args[0] === 'open'){
                await nezuko.groupSettingUpdate(m.chat, 'unlocked').then((res) => enviar(`Agora todos podem alterar as informações do grupo.`)).catch((err) => enviar(jsonformat(err)))
             } else if (args[0] === 'close'){
                await nezuko.groupSettingUpdate(m.chat, 'locked').then((res) => enviar(`Agora apenas adms podem alterar as informações do grupo.`)).catch((err) => enviar(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'abrir' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'fechar' }, type: 1 }
                    ]
                    await nezuko.sendButtonText(m.chat, buttons, `escolha uma das opções.`, nezuko.user.name, m)

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
                enviar(`adicionando efeito ${command} no audio, aguarde.`)
                let media = await nezuko.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return console.log(err)
                let buff = fs.readFileSync(ran)
                nezuko.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg', 'ptt': true }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else enviar(`Marque um audio com *${prefix + command}*`)
                } catch (e) {
                enviar(e)
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
                    footer: nezuko.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                nezuko.sendMessage(m.chat, buttonMessage, { quoted: freply })
        })
        }
        break
        case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'A mensagem não foi enviada pelo bot'
                nezuko.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    nezuko.sendText(m.chat, 'Lista de membros online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
              case 'emojimix': {
	        if (!text) return enviar(`Exemplo : ${prefix + command} 😡+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await nezuko.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break  
	case 'demote': case 'rebaixar': case 'tiraadm': case 'tiraradm': case 'deladm': {
		    
		    		
		if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nezuko.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
        enviar(`usuário se tornou um membro comum`)
	}
	
	break
        case 'block': 	case 'bloquear': case 'dablock': case 'addblock': {
        	    
		    		
		if (!isCreator) throw resposta.dono
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nezuko.updateBlockStatus(users, 'block').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
        case 'unblock': 	case 'desbloquear': case 'tirarblock': case 'delblock': {
        	    
		    		
		if (!isCreator) throw resposta.dono
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await nezuko.updateBlockStatus(users, 'unblock').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
	}
	
	break
	  case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
                if (!text) throw 'Text ?'
                await nezuko.groupUpdateDescription(m.chat, text).then((res) => enviar(`descrição do grupo alterada com sucesso!!`)).catch((err) => enviar(jsonformat(err)))
            }
            break
	    case 'setname': case 'setsubject': 	case 'mudarnome': case 'mudanome': case 'setnome': {
	    	    
		    		
                if (!m.isGroup) throw resposta.group
                if (!isBotGroupAdmins) throw resposta.botAdmin
                if (!isGroupAdmins) throw resposta.admin
                if (!text) throw 'Insira o nome por favor'
                await nezuko.groupUpdateSubject(m.chat, text).then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
            }
            
            break
            case 'setprofile': case 'setpp': 	case 'mudarft': case 'mudarfotobot': case 'setppbot':{
            	    
		    		
                if (!isCreator) throw resposta.dono
                if (!quoted) throw 'Marque a imagem'
                if (/image/.test(mime)) throw `resposta.marqueoarquivo` + `*${prefix + command}*`
                let media = await nezuko.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotGroupAdmins && !isGroupAdmins) {
                    await nezuko.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await nezuko.updateProfilePicture(nezuko.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
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
		    let encmedia = await nezuko.sendImageAsSticker(m.chat, media, m, { packname: 'nezuko-md', author: `${pushname}` })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return enviar(resposta.mxm10s)
		    let media = await quoted.download()
		    let encmedia = await nezuko.sendVideoAsSticker(m.chat, media, m, { packname: 'nezuko-md', author: `${pushname}`})
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
                let media = await nezuko.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    nezuko.sendMessage(m.chat, { image: buffer, caption: resposta.convertmsgimg }, { quoted: freply })
                    fs.unlinkSync(ran)
                })
            }
             
            break	    
             case 'togif': {
                if (!quoted) return enviar(`Marque a figurinha`)
                if (!/webp/.test(mime)) return enviar(`Responder adesivo com legenda *${prefix + command}*`)
                enviar(resposta.aguarde)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await nezuko.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await nezuko.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Covertido de um webp' }, gifPlayback: true }, { quoted: freply })
                await fs.unlinkSync(media)
            }
            break
case 'attp':
try{ 
if (!c) return enviar(`preciso do text krl`)
url = encodeURI(`https://api.xteam.xyz/attp?file&text=${c}`)
nezukokkk = await getBuffer(url)
nezuko.sendMessage(m.chat, {sticker: nezukokkk}, {quoted: freply})
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
                nezuko.sendMessage(m.chat, { contacts: { displayName: 'The AloneX Ofc.', contacts: [{ vcard }] } }, { quoted: freply })
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
                nezuko.sendMessage(m.chat, buttonMessage, { quoted: freply })
            }            
            break
            case 'welcome': {
if (!m.isGroup) return enviar(resposta.group)
if (!isBotGroupAdmins) return enviar(resposta.botAdmin)
if (!isGroupAdmins && !isCreator) return enviar(resposta.admin)
if (args[0] === "on") {
if (welcm) return enviar('Já Esta Ativado.')
wlcm.push(from)
enviar('Sucesso ao ativar a mensagem de boas-vindas neste grupo')
} else if (args[0] === "off") {
if (!welcm) return enviar('Já desativado')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
enviar('Sucesso ao desativar a mensagem de boas-vindas neste grupo')
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Ativar' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Desativar' }, type: 1 }
  ]
  await nezuko.sendButtonText(m.chat, buttonswlcm, `Clique no botão abaixo\n\nAtivar para ativar\nDesativar para desativar`, `${nomedobot}`, m)
  }
  } 
  break
  case 'dinheiro': case 'meupix':
dindin = verificar_dinheiro(m.sender)
sayo = `*┏⊱ 「 💰 *_BANCO_* 💰 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Saldo* : ${dindin}\n┗━━━━━━━━━━`
enviar(sayo)
break
 case 'react': { 
XeonBotInc.sendMessage(m.chat, reactionMessage)} 
break
case 'swm': case 'take': case 'stickerwm': {
if (!args.join(" ")) return enviar(`Exemplo :\nswm nezuko-md|The AloneX`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
nezuko.downloadAndSaveMediaMessage(quoted, "gifee")
nezuko.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted: freply})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await nezuko.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return enviar('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await nezuko.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
enviar(`Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 1-9 segundos`)
}
}
break
case 'translate': case 'trans': {
if (!args.join(" ")) return enviar("kd o texto?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=pt&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
enviar(`📘Resultado : ${Infoo}`)
}
break
case 'resetlink': {
if (!m.isGroup) return enviar(resposta.group)
if (!isBotGroupAdmins) return enviar(resposta.botAdmin)
if (!isGroupAdmins && !isCreator) return enviar(resposta.admin)
nezuko.groupRevokeInvite(m.chat)
let buttons = [
                        { buttonId: `${prefix}linkgp`, buttonText: { displayText: `Novo link` }, type: 1 },                       
                    ]
                    await nezuko.sendButtonText(m.chat, buttons, ` link do grupo resetado com sucesso, clique no botão abaixo para conferir o novo link`, `${nomedobot}`, m)
}
break
case 'tomp3': {
if (/document/.test(mime)) return enviar(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return enviar(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
if (!m.quoted) return enviar(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
enviar(resposta.aguarde)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
nezuko.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By nezuko-md (${m.id}).mp3`}, { quoted : m })
}
break 
case 'linkgroup': case 'linkgc': case 'linkgp': case 'linkgrupo': case 'grupolink': case 'getlinkgp': {            	                	    
                if (!m.isGroup) throw resposta.group
                let response = await nezuko.groupInviteCode(m.chat)
            //    nezuko.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Do grupo : ${groupMetadata.subject}`, m, { detectLink: true })
                 let buttons = [
                        { buttonId: `${prefix}resetlink`, buttonText: { displayText: `RESETAR O LINK` }, type: 1 },                       
                    ]
                    await nezuko.sendButtonText(m.chat, buttons, `https://chat.whatsapp.com/${response}\n\nLink Do grupo : ${groupMetadata.subject}`, `${nomedobot}`, m)
            }            
            break
 case 'antilinkall': {
if (!m.isGroup) return enviar(resposta.group)
if (!isBotGroupAdmins) return enviar(resposta.botAdmin)
if (!isGroupAdmins && !isCreator) return enviar(resposta.admin)
if (args[0] === "on") {
if (AntiLinkAll) return enviar('Ja Esta Ativado.')
ntilinkall.push(from)
enviar('Sucesso em ativar o antilink neste grupo')
var groupe = await nezuko.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
nezuko.sendMessage(from, {text: `\`\`\`「 ⚠️ATENÇÃO⚠️ 」\`\`\`\n\nSe você não é um administrador, não envie nenhum link neste grupo ou você será expulso imediatamente!`, contextInfo: { mentionedJid : mems }}, {quoted: freply})
} else if (args[0] === "off") {
if (!AntiLinkAll) return enviar('Ja desativado.')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
enviar('Sucesso ao desativar o antilink no grupo.')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 },
  { buttonId: `Delete`, buttonText: { displayText: 'apagar' }, type: 1 }
  ]
  await nezuko.sendButtonText(m.chat, buttonsntilink, `Escolha uma das opções abaixo.\n\nOn para ativar\nOff para desativar`, `${nomedobot}`, m)
  }
  }
  break 
  
//𝒄𝒂𝒔𝒆𝒔 𝒅𝒆 𝒎𝒆𝒏𝒖 𝒅𝒐 𝒃𝒐𝒕            
            
case 'menu1': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    Título: `olá humano ${pushname}`,
                    Descrição: `Seja bem vindo ao meu menu\n\n`,
                    buttonText: "Menu",
                    footerText: `NEZUKO BOT MD`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"Título": "Main Features",
								"rows": [
									{
										"Título": "MENU COMPLETO ",
										"Descrição": "Exibe a lista completa de comandos",
										"rowId": `${prefix}allmenu`
									}
								]
							},
							{
								"Título": "Bot Features",
								"rows": [
									{
										"Título": "MENU DO CRIADOR",
										"Descrição": "Ela exibe o menu do criador",
										"rowId": `${prefix}menudono`
									},
									{
										"Título": "MENU DE GRUPOS",
										"Descrição": "Ela exibe o menu de grupos",
										"rowId": `${prefix}menugp`
										},
									{
										"Título": "MENU DE PESQUISAS",
										"Descrição": "Ela exibe o menu de pesquisas",
										"rowId": `${prefix}menupesq`
										},
									{
										"Título": "MENU DE DIVERSÃO",
										"Descrição": "Ela exibe o menu de brincadeiras",
										"rowId": `${prefix}menudiv`
									},
									{
										"Título": "MENU DE ALTERADORES",
										"Descrição": "Ela exibe o menu alteradores",
										"rowId": `${prefix}menualt`
									},
									{
										"Título": "MENU DE CONVERSÃO",
										"Descrição": "Ela exibe o menu de conversão",
										"rowId": `${prefix}menuconv`
									}
								]
							},					
							{							        
								"Título": "Credit",
								"rows": [
									{
										"Título": "AGRADECIMENTOS",
										"Descrição": "Exibe a lista de crédito do bot ",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            nezuko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break                                    
                  case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return enviar(resposta.dono)
                if (!text) return enviar(`Onde está o texto❓\n\nExemplo : ${prefix + command} `)
                let anu = await store.chats.all().map(v => v.id)
                enviar(`Enviar transmissão para ${anu.length} Bate-papos\nTempo de término ${anu.length * 1.5} Segundos`)
		for (let yoi of anu) { 
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'SCRIPT🔖',
                                    url: `${sc}`
                                }                           
                            }, {
                                quickReplyButton: {
                                    displayText: '🎀MENU🎀',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤CRIADOR👤',
                                    id: 'owner'
                                }
                            }]
                      let txt = `TRANSMISSÃO \n\n${text}`
                      nezuko.send5ButImg(yoi, txt, `${nomedobot}`, thumb, btn)
		}
		enviar('Sucesso de transmissão') 
            }
            break 
             case 'chatinfo': case 'infochat': {
                if (!isCreator) throw resposta.dono
                if (!m.quoted) return enviar(`marque a msg`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return enviar(`A mensagem não foi enviada por mim❗`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += ` @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━ *Tempo :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}  *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                nezuko.sendTextWithMentions(m.chat, teks, m)
            }
            break
                   
case 'menu': {
let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
             let buttons = [
                        { buttonId: 'kahaks', buttonText: { displayText: `OK ${nomedobot}` }, type: 1 },                       
                    ]
                    await nezuko.sendButtonText(m.chat, buttons, `${replys_aiai}`, `${nomedobot}`, m)


nezukokkk = `

┌──⊰「 _*INFO USER*_ 」
│
│⊳ nome: ${pushname}
│⊳ patente: ${role}
│⊳ level: ${getLevelingLevel(m.sender)}
│
└──⊰

┌──⊰「 _*INFO BOT*_ 」
│
│⊳ nome do bot: ${nomedobot}
│⊳ nome do dono: ${nomedodono}
│⊳ numero do dono: ${numerododono}
│⊳ tempo ativo: ${latensi.toFixed(4)}
│
└──⊰


┌──⊰「 _*GRUPOS*_ 」
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
│⊳ ${prefix}resetlink
│
├──⊰「 _*CONVERTER*_ 」
│
│⊳ ${prefix}take nome1|nome2
│⊳ ${prefix}toimage
│⊳ ${prefix}sticker
│⊳ ${prefix}togif
│⊳ ${prefix}tomp3
│⊳ ${prefix}tourl
│⊳ ${prefix}tovideo
│⊳ ${prefix}tinyurl
│⊳ ${prefix}readmore
│
├──⊰「 _*PESQUISA*_ 」
│
│⊳ ${prefix}pinterest
│⊳ ${prefix}anime
│⊳ ${prefix}play
│⊳ ${prefix}playvideo
│⊳ ${prefix}metadinha
│⊳ ${prefix}nick
│⊳ ${prefix}gimage
│
├──⊰「 _*DIVERSÃO*_ 」
│
│⊳ ${prefix}ttt [@]
│⊳ ${prefix}quando
│⊳ ${prefix}morte
│⊳ ${prefix}pau
│⊳ ${prefix}gay
│
├──⊰「 _*ALTERADORES*_ 」
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
├──⊰「 _*+18*_ 」
│
│⊳ ${prefix}tentacles
│⊳ ${prefix}yuri
│⊳ ${prefix}thighs
│⊳ ${prefix}bdsm
│⊳ ${prefix}foot
│⊳ ${prefix}gangbang
│⊳ ${prefix}blowjob
│⊳ ${prefix}pussy
│⊳ ${prefix}panties
│⊳ ${prefix}cuckold
│⊳ ${prefix}orgy
│⊳ ${prefix}ero
│⊳ ${prefix}ass
│⊳ ${prefix}cum
│⊳ ${prefix}ahegao
│⊳ ${prefix}femdom
│⊳ ${prefix}glasses
│⊳ ${prefix}hentai
│⊳ ${prefix}jahy
│⊳ ${prefix}masturbation
│
├──⊰「 _*CRIADOR*_ 」
│
│⊳ ${prefix}sair
│⊳ ${prefix}setpp
│⊳ ${prefix}bloquear
│⊳ ${prefix}desbloquear
│⊳ ${prefix}bc 
│⊳ ${prefix}chatinfo
│
└──⊰ _*${nomedobot}*_`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/nezuko.jpg') }, { upload: nezuko.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: nezukokkk,
                            hydratedButtons: [{                  
                            	urlButton: {
                                    displayText: 'GRUPO OFICIAL 💠',
                                    url: `https://chat.whatsapp.com/LLb8wOouFyoDWbHcaDsNwA`
                                }
                            }, {
                                callButton: {
                                    displayText: 'LIGUE-ME ✳️',
                                    phoneNumber: '+55 88 99820-4406'
                                }
                            }, {
                               quickReplyButton: {
                                    displayText: 'VELOCIDADE ⚡',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'CRIADOR 💪🏻',
                                    id: 'dono'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'APAGAR 🗑️',
                                    id: 'delete'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: freply })
                nezuko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break       
 case 'tomp4': case 'tovideo': {	    	    
                if (!quoted) throw resposta.marquest
                if (!/webp/.test(mime)) throw `marque o arquivo com` + `*${prefix + command}*`
                enviar(resposta.aguarde)
                let media = await nezuko.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await nezuko.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: resposta.convertmsgvideo } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break             
            
case 'menudono': {

lone1 = `
┌──⊰「 _*CRIADOR*_ 」
│
│⊳ ${prefix}sair
│⊳ ${prefix}setreply 
│⊳ ${prefix}setpp
│⊳ ${prefix}bloquear
│⊳ ${prefix}desbloquear
│
└──⊰
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/nezuko.jpg') }, { upload: nezuko.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: lone1,
                            hydratedButtons: [{                  
                            	urlButton: {
                                    displayText: 'GRUPO OFICIAL 💠',
                                    url: `https://chat.whatsapp.com/LLb8wOouFyoDWbHcaDsNwA`
                                }
                            }, {
                                callButton: {
                                    displayText: 'LIGUE-ME ✳️',
                                    phoneNumber: '+55 88 99820-4406'
                                }
                            }, {
                               quickReplyButton: {
                                    displayText: 'VELOCIDADE ⚡',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'CRIADOR 💪🏻',
                                    id: 'dono'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'APAGAR 🗑️',
                                    id: 'delete'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: freply })
                nezuko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break         
            
case 'menugp': {           

lone2 = `
┌──⊰「 _*GRUPOS*_ 」
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
│⊳ ${prefix}resetlink
│
└──⊰
`

let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/nezuko.jpg') }, { upload: nezuko.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: lone2,
                            hydratedButtons: [{                  
                            	urlButton: {
                                    displayText: 'GRUPO OFICIAL 💠',
                                    url: `https://chat.whatsapp.com/LLb8wOouFyoDWbHcaDsNwA`
                                }
                            }, {
                                callButton: {
                                    displayText: 'LIGUE-ME ✳️',
                                    phoneNumber: '+55 88 99820-4406'
                                }
                            }, {
                               quickReplyButton: {
                                    displayText: 'VELOCIDADE ⚡',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'CRIADOR 💪🏻',
                                    id: 'dono'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'APAGAR 🗑️',
                                    id: 'delete'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: freply })
                nezuko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break         
            
case 'menualt': {

lone3 =`

┌──⊰「 _*ALTERADORES*_ 」
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
└──⊰`

let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/nezuko.jpg') }, { upload: nezuko.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: lone3,
                            hydratedButtons: [{                  
                            	urlButton: {
                                    displayText: 'GRUPO OFICIAL 💠',
                                    url: `https://chat.whatsapp.com/LLb8wOouFyoDWbHcaDsNwA`
                                }
                            }, {
                                callButton: {
                                    displayText: 'LIGUE-ME ✳️',
                                    phoneNumber: '+55 88 99820-4406'
                                }
                            }, {
                               quickReplyButton: {
                                    displayText: 'VELOCIDADE ⚡',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'CRIADOR 💪🏻',
                                    id: 'dono'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'APAGAR 🗑️',
                                    id: 'delete'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: freply })
                nezuko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }                                
break

case 'menudiv': {

lone4 = `
┌──⊰「 _*DIVERSÃO*_ 」
│
│⊳ ${prefix}ttt [@]
│⊳ ${prefix}quando
│⊳ ${prefix}morte
│⊳ ${prefix}pau
│⊳ ${prefix}gay
│
└──⊰`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/nezuko.jpg') }, { upload: nezuko.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: lone4,
                            hydratedButtons: [{                  
                            	urlButton: {
                                    displayText: 'GRUPO OFICIAL 💠',
                                    url: `https://chat.whatsapp.com/LLb8wOouFyoDWbHcaDsNwA`
                                }
                            }, {
                                callButton: {
                                    displayText: 'LIGUE-ME ✳️',
                                    phoneNumber: '+55 88 99820-4406'
                                }
                            }, {
                               quickReplyButton: {
                                    displayText: 'VELOCIDADE ⚡',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'CRIADOR 💪🏻',
                                    id: 'dono'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'APAGAR 🗑️',
                                    id: 'delete'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: freply })
                nezuko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break         

case 'menuconv': {

lone5 = `
┌──⊰「 _*CONVERTER*_ 」
│
│⊳ ${prefix}take nome1|nome2
│⊳ ${prefix}toimage
│⊳ ${prefix}sticker
│⊳ ${prefix}togif
│⊳ ${prefix}tomp3
│⊳ ${prefix}tourl
│⊳ ${prefix}tovideo
│
└──⊰`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/nezuko.jpg') }, { upload: nezuko.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: lone5,
                            hydratedButtons: [{                  
                            	urlButton: {
                                    displayText: 'GRUPO OFICIAL 💠',
                                    url: `https://chat.whatsapp.com/LLb8wOouFyoDWbHcaDsNwA`
                                }
                            }, {
                                callButton: {
                                    displayText: 'LIGUE-ME ✳️',
                                    phoneNumber: '+55 88 99820-4406'
                                }
                            }, {
                               quickReplyButton: {
                                    displayText: 'VELOCIDADE ⚡',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'CRIADOR 💪🏻',
                                    id: 'dono'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'APAGAR 🗑️',
                                    id: 'delete'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: freply })
                nezuko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break         

case 'menupesq': {

lone6 = `
┌──⊰「 _*PESQUISA*_ 」
│
│⊳ ${prefix}pinterest
│⊳ ${prefix}anime
│⊳ ${prefix}play
│⊳ ${prefix}playvideo
│⊳ ${prefix}metadinha
│⊳ ${prefix}nick
│⊳ ${prefix}gimage
│
└──⊰
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/nezuko.jpg') }, { upload: nezuko.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: lone6,
                            hydratedButtons: [{                  
                            	urlButton: {
                                    displayText: 'GRUPO OFICIAL 💠',
                                    url: `https://chat.whatsapp.com/LLb8wOouFyoDWbHcaDsNwA`
                                }
                            }, {
                                callButton: {
                                    displayText: 'LIGUE-ME ✳️',
                                    phoneNumber: '+55 88 99820-4406'
                                }
                            }, {
                               quickReplyButton: {
                                    displayText: 'VELOCIDADE ⚡',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'CRIADOR 💪🏻',
                                    id: 'dono'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'APAGAR 🗑️',
                                    id: 'delete'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: freply })
                nezuko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            
            break                     

//cases de fotos
case 'nick': case 'styletext': {
	  
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
                    footer: `${nomedobot}`,
                    buttons: buttons,
                    headerType: 4
                }
                nezuko.sendMessage(m.chat, buttonMessage, { quoted: freply })
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
                    footer: `${nomedobot}`,
                    buttons: buttons,
                    headerType: 4
                }
                nezuko.sendMessage(m.chat, buttonMessage, { quoted: freply })
            }
break
case 'playvideo': case 'video2':
                if (!c) throw resposta.erro_c
                 enviar(resposta.aguarde)
                ytPlayMp4(q).then(async (data) => {
                    let txt = `*----「 YOUTUBE PLAY 」----*\n\n`
                    txt += `*📄 Título :* ${data.título}\n`
                    txt += `*🎞️ Canal :* ${data.canal}\n`
                    txt += `*👁️ visualizações :* ${data.visualizações}\n`
                    txt += `*⏱️ Publicado :* ${data.publicado}\n`                    
                    txt += `*Aguarde estou processando o download...*`
                    enviarArquivoDoLink(m.chat, data.thumb, txt, m)
                    enviarArquivoDoLink(m.chat, data.url, '', m)
                })
            break 
case 'play': case 'audio3':               	  
                if (!c) throw resposta.erro_c
                 enviar(resposta.aguarde)
                 pesquisa = await yts(c);
                 pesquisa2 = pesquisa.all 
                 resultado = pesquisa2[0].url                            
                ytPlay(q).then(async (data) => {
                    let txt = `*----「 YOUTUBE PLAY 」----*\n\n`
                    txt += `*📄 Título :* ${data.título}\n`
                    txt += `*⚖️ Tamanho :* ${data.tamanho}\n`
                    txt += `*👁️ visualizações :* ${data.visualizações}\n`
                    txt += `*👍🏻Likes :* ${data.likes}\n`                    
                    txt += `*👎🏻Deslikes :* ${data.deslikes}\n`                                        
                    txt += `*⏱️ Publicado :* ${data.data_de_upload}\n`                    
                    txt += `*Aguarde estou processando o download...*`
                    enviarArquivoDoLink(m.chat, data.capa, txt, m)
//                    enviarArquivoDoLink(m.chat, data.resultado, '', m)
//                    nezuko.sendMessage(m.chat, { audio: { url: data.resultado } }, {mimetype: 'audio/mp4', duration: 359996400, ptt:false, quoted: m,thumbnail: thumb, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:data.título,body:"",mediaType:"2",thumbnail:thumb,mediaUrl:resultado}}}).catch(() => enviar(resposta.erro))        
                  nezuko.sendMessage(m.chat, { audio: { url: data.resultado } }, {mimetype: 'audio/mpeg'}, {quoted: m })
                })             
            break
	    case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return enviar('Arquivo acima do limite'+util.format(media))
                nezuko.sendImage(m.chat, thumbnail, `💬 Titulo: ${title}\n\n⭔ Tamanho do Arquivo: ${media[0].formattedSize}\n\n🔗 Link: ${url}\n\n📲  Tipo: MP3\n\n🎞 Resolução: ${args[1] || '128kbps'}\n\n*Enviando Audio, aguarde...*`, m)
                nezuko.sendMessage(m.chat, { audio: { url: media[0].url }, mimetype: 'audio/mp4', fileName: `${title}.mp3` }, { quoted: freply })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                if (!text) throw `Exemplo de Uso: ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
		let { aiovideodl } = require('./lib/scraper')
                let result = await aiovideodl(isUrl(text)[0])
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'                
                let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return enviar('Arquivo acima do limite'+util.format(media))
                nezuko.sendMessage(m.chat, { video: { url: media[0].url }, fileName: `${title}.mp4`, mimetype: 'video/mp4', caption: `💬 Titulo: ${title}\n\n⭔ Tamanho do Arquivo: ${media[0].formattedSize}\n\n🔗 Link: ${url}\n\n📲  Tipo: MP3\n\n🎞 Resolução: ${args[1] || '360p'}` }, { quoted: freply })
            }
            break
case 'metadinha': {
                enviar(resposta.aguarde)
                let cuecadonezuko = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let nezukopikakkk = cuecadonezuko[Math.floor(Math.random() * cuecadonezuko.length)]
                nezuko.sendMessage(m.chat, { image: { url: nezukopikakkk.male }, caption: `Menino` }, { quoted: freply })
                nezuko.sendMessage(m.chat, { image: { url: nezukopikakkk.female }, caption: `Menina` }, { quoted: freply })
            }
	    break            

            default:
            
if (prefix && isCmd) {
alonekj = `
┌──⊰「 _*ERRO!*_ 」
│
│⊳ o comando: ${command}
│⊳ não existe ou foi digitado errado,
│⊳ clique no botão abaixo para ver o menu.
│
└──⊰`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/nezuko.jpg') }, { upload: nezuko.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: alonekj,
                            hydratedButtons: [{                  
                            	urlButton: {
                                    displayText: 'GRUPO OFICIAL 💠',
                                    url: `https://chat.whatsapp.com/LLb8wOouFyoDWbHcaDsNwA`
                                }
                           }, {
                                quickReplyButton: {
                                    displayText: 'MENU ✳',
                                    id: 'menu'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'APAGAR 🗑️',
                                    id: 'delete'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: freply })
                nezuko.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
          }           
          
 if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(resposta.dono)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            enviar(bang)
                    }
                    try {
                        enviar(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        enviar(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(resposta.dono)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await enviar(evaled)
                    } catch (err) {
                        await enviar(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(resposta.dono)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return enviar(err)
                        if (stdout) return enviar(stdout)
                    })
                }
          
         

 if (budy.startsWith('alone')) {
                     enviar('oq vc quer com o meu criador ?')
                     console.log(color('AUTO RESPOSTA', 'blue'))

              
           
                }                       
                                                               
 } catch (e) {
console.log(e)
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
