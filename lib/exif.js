/*╭━═[🎫𝒂𝒗𝒊𝒔𝒐 𝒅𝒐 𝒗𝒆𝒏𝒐𝒎🎫]═━━⪨

  𝒃𝒂𝒔𝒆 𝒇𝒆𝒊𝒕𝒂 𝒑𝒐𝒓: 𝑽𝒆𝒏𝒐𝒎 𝑴𝒐𝒅𝒔
  
  𝒎𝒆𝒖 𝒄𝒂𝒏𝒂𝒍: https://youtube.com/channel/UCOoc5DOT_M6foZa1jSOI6JQ
  𝒎𝒆𝒖 𝒘𝒉𝒂𝒕𝒔𝒑𝒂𝒑: https://wa.me/559784388524
  𝒎𝒆𝒖 𝒈𝒓𝒖𝒑𝒐: https://chat.whatsapp.com/LtjFqe7AEKtKMLeyyHWqrY
  𝒎𝒆𝒖 𝒓𝒆𝒔𝒕 𝒂𝒑𝒊𝒔 𝒇𝒓𝒆𝒆: https://venom-apis.herokuapp.com/api
  
  𝒆𝒔𝒕𝒂 𝒃𝒂𝒔𝒆 𝒇𝒐𝒊 𝒇𝒂𝒊𝒕𝒂 𝒑𝒂𝒓𝒂 𝒅𝒆𝒗𝒔 𝒆 𝒊𝒏𝒊𝒄𝒊𝒂𝒏𝒕𝒆𝒔 
  𝒒𝒖𝒆 𝒒𝒖𝒆𝒊𝒓𝒂𝒎 𝒇𝒂𝒛𝒆𝒓 𝒔𝒆𝒖 𝒑𝒓𝒐𝒑𝒓𝒊𝒐 𝒃𝒐𝒕 𝒆𝒎 𝒎𝒖𝒍𝒕 𝒅𝒆𝒗𝒊𝒄𝒆
  𝒃𝒐𝒕 100% 𝒆𝒅𝒊𝒕𝒂𝒗𝒆𝒍 𝒆 𝒍𝒊𝒃𝒆𝒓𝒂𝒅𝒐 𝒑𝒂𝒓𝒂 𝒄𝒍𝒊𝒆𝒏𝒕𝒔
  𝒄𝒂𝒔𝒐 𝒇𝒐𝒓 𝒇𝒂𝒛𝒆𝒓 𝒔𝒆𝒖𝒃𝒐𝒕 𝒅𝒆𝒊𝒙𝒂 𝒐𝒔 𝒄𝒓𝒆𝒅𝒊𝒕𝒐𝒔 𝒅𝒐 𝒅𝒐𝒏𝒐 𝒅𝒂 𝒃𝒂𝒔𝒆
  𝒆𝒔𝒕𝒆 𝒃𝒐𝒕 𝒑𝒐𝒅𝒆 𝒂𝒑𝒂𝒓𝒆𝒄𝒆 𝒆𝒓𝒓𝒐𝒔 𝒑𝒐𝒊𝒔 𝒆𝒔𝒕𝒂 𝒆𝒎 𝒃𝒆𝒕𝒂
  𝒅𝒆𝒊𝒙𝒆𝒊 𝒆𝒙𝒆𝒎𝒑𝒍𝒐𝒔 𝒅𝒆 𝒄𝒂𝒔𝒆𝒔 𝒂𝒅𝒊𝒄𝒊𝒐𝒏𝒂𝒅𝒂𝒔 𝒑𝒂𝒓𝒂 𝒑𝒐𝒓 𝒐𝒖𝒕𝒓𝒐𝒔
  
  𝒕𝒐𝒅𝒐𝒔 𝒎𝒐𝒅𝒖𝒍𝒆𝒔 𝒆𝒔𝒕𝒂 𝒊𝒏𝒔𝒕𝒂𝒍𝒂𝒅𝒐𝒔 𝒏𝒂𝒐 𝒑𝒓𝒆𝒄𝒊𝒔𝒂 𝒅𝒆 𝒃𝒂𝒔𝒉 𝒊𝒏𝒔𝒕𝒂𝒍𝒍
  𝒆𝒔𝒑𝒆𝒓𝒐 𝒕𝒆 𝒂𝒋𝒖𝒅𝒂𝒅𝒐 𝒂 𝒄𝒂𝒅𝒂 𝒖𝒎 𝒅𝒆 𝒗𝒐𝒄𝒆𝒔 𝒒𝒖𝒆 𝒒𝒖𝒆𝒓𝒊𝒂 𝒎𝒖𝒅𝒂𝒓 𝒑𝒂𝒓𝒂 𝒖𝒎 𝒃𝒐𝒕 𝒎𝒅
  𝒇𝒂𝒄𝒂 𝒖𝒎 𝒃𝒐𝒎 𝒖𝒔𝒐 𝒃𝒐𝒂 𝒔𝒐𝒓𝒕𝒆 💞
  
╰━━━━━━━━━━━⪨*/

const fs = require('fs')
const { tmpdir } = require("os")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")


async function imageToWebp (media) {

    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.jpg`)

    fs.writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

async function videoToWebp (media) {

    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.mp4`)

    fs.writeFileSync(tmpFileIn, media)

    await new Promise((resolve, reject) => {
        ff(tmpFileIn)
            .on("error", reject)
            .on("end", () => resolve(true))
            .addOutputOptions([
                "-vcodec",
                "libwebp",
                "-vf",
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
                "-loop",
                "0",
                "-ss",
                "00:00:00",
                "-t",
                "00:00:05",
                "-preset",
                "default",
                "-an",
                "-vsync",
                "0"
            ])
            .toFormat("webp")
            .save(tmpFileOut)
    })

    const buff = fs.readFileSync(tmpFileOut)
    fs.unlinkSync(tmpFileOut)
    fs.unlinkSync(tmpFileIn)
    return buff
}

async function writeExifImg (media, metadata) {
    let wMedia = await imageToWebp(media)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)

    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

async function writeExifVid (media, metadata) {
    let wMedia = await videoToWebp(media)
    const tmpFileIn = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    const tmpFileOut = path.join(tmpdir(), `${Crypto.randomBytes(6).readUIntLE(0, 6).toString(36)}.webp`)
    fs.writeFileSync(tmpFileIn, wMedia)

    if (metadata.packname || metadata.author) {
        const img = new webp.Image()
        const json = { "sticker-pack-id": `https://github.com/DikaArdnt/Hisoka-Morou`, "sticker-pack-name": metadata.packname, "sticker-pack-publisher": metadata.author, "emojis": metadata.categories ? metadata.categories : [""] }
        const exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
        const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
        const exif = Buffer.concat([exifAttr, jsonBuff])
        exif.writeUIntLE(jsonBuff.length, 14, 4)
        await img.load(tmpFileIn)
        fs.unlinkSync(tmpFileIn)
        img.exif = exif
        await img.save(tmpFileOut)
        return tmpFileOut
    }
}

module.exports = { imageToWebp, videoToWebp, writeExifImg, writeExifVid }
