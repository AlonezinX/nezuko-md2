 
//const { default: makeWASocket, useSingleFileAuthState, DisconnectReason } = require("@venom-md/baileys-md")
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage } = require("@Venom-Md/baileys-md")
const { Boom } = require('./node_modules/@hapi/boom')
const pino = require('pino')
//const { smsg, isUrl, generateMessageTag, getBuffer, getRandom } = require('./lib/myfunc')
const { state, saveState } = useSingleFileAuthState('./VenomBot.json')
//const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const util = require('util')
const fetch = require('node-fetch')
const FileType = require('file-type')
const { color, DashaLog } = require("./lib/color");
const figlet = require("figlet");
const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const res = JSON.parse(fs.readFileSync('./res/data.json'))
const { smsg, isUrl, generateMessageTag, getBuffer, getRandom } = require('./lib/myfunc')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')

doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
doc4 = 'application/zip'
doc5 = 'application/pdf'
doc6 = 'application/vnd.android.package-archive'

//iniciar atividades de conexao do bot
async function startNezuko() {
    const nezuko = makeWASocket({
       logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['nezukoBot-md','Safari','1.0.0'],
        auth: state
    }); 
  
//funcao propia da script    
 nezuko.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!nezuko.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(nezuko, mek)
        require("./Nezuko")(nezuko, m, chatUpdate)
        } catch (err) {
            console.log(err)
        }
    })
//    
nezuko.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await nezuko.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://shortlink.XeonBotIncarridho.my.id/rg1oT'
       }
       let lolXeon = { url : ppgc }
       if (pea[0].announce == true) {
       nezuko.send5ButImg(pea[0].id, `「 Configurações do grupo alteradas 」\n\nO grupo foi fechado pelo administrador, agora apenas o administrador pode enviar mensagens!`, `${nomedobot}`, lolXeon, [])
       } else if(pea[0].announce == false) {
       nezuko.send5ButImg(pea[0].id, `「 Configurações do grupo alteradas 」\n\nO grupo foi aberto pelo administrador, agora os participantes podem enviar mensagens!`, `${nomedobot}`, lolXeon, [])
       } else if (pea[0].restrict == true) {
       nezuko.send5ButImg(pea[0].id, `「 Configurações do grupo alteradas 」\n\nAs informações do grupo foram restritas, agora apenas o administrador pode editar as informações do grupo!`, `${nomedobot}`, lolXeon, [])
       } else if (pea[0].restrict == false) {
       nezuko.send5ButImg(pea[0].id, `「 Configurações do grupo alteradas 」\n\nAs informações do grupo foram abertas, agora os participantes podem editar as informações do grupo!`, `${nomedobot}`, lolXeon, [])
       } else {
       nezuko.send5ButImg(pea[0].id, `「 Configurações do grupo alteradas 」\n\nAssunto do grupo foi alterado para*${pea[0].subject}*`, `${nomedobot}`, lolXeon, [])
     }
    })
    
nezuko.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
   // let xeonfek = await nezuko.sendContact(callerId, global.owner)
 //   nezuko.sendMessage(callerId, { text: `Automatic Block System!\nDon't Call Bot!\nPlease Ask Or Contact The Owner To Unblock You!`}, { quoted : xeonfek })
    await sleep(8000)
    await nezuko.updateBlockStatus(callerId, "block")
    }
    })    

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

nezuko.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        if (!wlcm.includes(anu.id)) return //remove forwad slashes to make it welcome on off
        try {
            let metadata = await nezuko.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await nezuko.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await nezuko.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                if (anu.action == 'add') {
                const buffer = await getBuffer(ppuser)
                const xtime = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
	            const xdate = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
	            const xmembers = metadata.participants.length
                let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'NEZUKO-MD', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                xeonbody = `
Olá humano @${num.split("@")[0]}
Bem vindo ao gp: ${metadata.subject}
Numero de membros: ${xmembers}th
Data & Hora: ${xtime} ${xdate}`
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'Bem Vindo👋'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/cheems.xlsx'),
mimetype: docs,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: xeonbody,
footer: `NEZUKO-MD`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `The AloneX Ofc`,
body: `Não se esqueça de ler a descrição do grupo.`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `https://nezuko-rest-apis.herokuapp.com/docs`,
mediaUrl: `https://nezuko-rest-apis.herokuapp.com/docs`
}}
}
nezuko.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                } else if (anu.action == 'remove') {
                	const buffer = await getBuffer(ppuser)
                    const xeontime = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
	                const xeondate = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')                	
                    const xeonmembers = metadata.participants.length
                    let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'NEZUKO-MD', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    xeonbody = `
Adeus @${num.split("@")[0]}
Saiu do gp: ${metadata.subject}
Membros restantes: ${xeonmembers}th
Dia & Hora: ${xeontime} ${xeondate}`
let buttons = [
{buttonId: `wkwkwk`, buttonText: {displayText: 'Adeus👋'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/cheems.xlsx'),
mimetype: docs,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: xeonbody,
footer: `NEZUKO-MD`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `The AloneX Ofc`,
body: `adeus amigo(a)`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `https://nezuko-rest-apis.herokuapp.com/docs`,
mediaUrl: `https://nezuko-rest-apis.herokuapp.com/docs`
}}
}
nezuko.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
                }
            }
        } catch (err) {
            console.log(err)
        }
    })

	   
//console de conexao do bot
nezuko.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startNezuko() : console.log('Conexão desconectada...')
        }
        console.log('Conexão Conectada...', update)
    })

    nezuko.ev.on('creds.update', saveState)
    
       nezuko.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        nezuko.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    
    nezuko.sendText = (jid, text, quoted = '', options) => nezuko.sendMessage(jid, { text: text, ...options }, { quoted })
//enviar textos
    
    nezuko.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await nezuko.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
//emviar imagem
    
    nezuko.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await nezuko.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }
//enviar videos
    
    nezuko.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await nezuko.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }
//enviar audios
    
    nezuko.sendTextWithMentions = async (jid, text, quoted, options = {}) => nezuko.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
//enviar textos e marcações

    nezuko.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await nezuko.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
 nezuko.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: nezuko.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            nezuko.relayMessage(jid, template.message, { messageId: template.key.id })
    }    
    
//enviar sticker e fotos
 
    nezuko.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await nezuko.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
//enviar video e sticker    
    nezuko.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
// e dados e arquivo podem ser salvos e baixados        
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
//tipos    
    nezuko.sendMedia = async (jid, path, quoted, options = {}) => {
	 let { ext, mime, data } = await nezuko.getFile(path)
	 messageType = mime.split("/")[0]
	 pase = messageType.replace('application', 'document') || messageType
	 return await nezuko.sendMessage(m.chat, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
    }
//enviar midas
    nezuko.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
//força encaminhada
        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await nezuko.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }
//conversas e contexto
   
    nezuko.getFile = async (path) => {
        let res
		let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
		if (!Buffer.isBuffer(data)) throw new TypeError('resultado')
		let type = await FileType.fromBuffer(data) || {
			mime: 'application/octet-stream',
			ext: '.bin'
		}

		return {
			res,
			...type,
			data
		}
    }

    return nezuko
}

   // return nezuko.js
// run in main file (`${dataVenom}`)
startNezuko()
//fim da script
