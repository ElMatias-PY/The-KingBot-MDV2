const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let username = await conn.getName(m.sender)
let str = `
*ใ๐ ๐๐ข๐๐ _${username}_ ๐ๅฝก*
๐๐๐๐ก๐ฉ๐๐ก๐๐๐ข ๐๐ ๐ ๐๐ก๐จ ๐๐๐ฅ๐ฅ๐๐ ๐๐๐ก๐ง๐๐ฆ

โโโโโโโโโโโโโโโ
โ *<๐๐จ๐ฆ๐ค๐จ๐๐๐๐ฆ/>*
โโกโกโกโกโกโกโกโกโกโกโกโกโกโก
โฃ เถฌโโ๏ธ _${usedPrefix}tag *nรบmero*_
โฃ เถฌโโ๏ธ _${usedPrefix}say *texto*_
โฃ เถฌโโ๏ธ _${usedPrefix}tiempo *sitio*_
โฃ เถฌโโ๏ธ _${usedPrefix}aรฑos *responder a foto*_
โฃ เถฌโโ๏ธ _${usedPrefix}qmusicaes *responder audio/video*_
โฃ เถฌโโ๏ธ _${usedPrefix}leerimagen *responder imagen*_
โฃ เถฌโโ๏ธ _${usedPrefix}repetir *texto*_
โฃ เถฌโโ๏ธ _${usedPrefix}repetir2 *texto*_
โฃ เถฌโโ๏ธ _${usedPrefix}spamchat *texto*_
โฃ เถฌโโ๏ธ _${usedPrefix}spamchat *numero*|*texto*|*nยฐ de veces*_
โฃ เถฌโโ๏ธ _${usedPrefix}traducir *texto*/ *responder mensaje*_
โฃ เถฌโโ๏ธ _${usedPrefix}reaccionar *emoji* *responder mensaje*_
โฃ เถฌโโ๏ธ _${usedPrefix}leermas *texto*|*texto*_
โฃ เถฌโโ๏ธ _${usedPrefix}rdvo *responder a viewonce*_
โฃ เถฌโโ๏ธ _${usedPrefix}fake *msg del bot* *@user* *msg fake*_
โฃ เถฌโโ๏ธ _${usedPrefix}acortar *link*_
โฃ เถฌโโ๏ธ _${usedPrefix}calc_
โฃ เถฌโโ๏ธ _${usedPrefix}del *borrar mensaje del bot respondiendo*_
โฃ เถฌโโ๏ธ _${usedPrefix}qrcode *texto*_
โฃ เถฌโโ๏ธ _${usedPrefix}styletext *texto*_
โโโโโโโโโโโโโโโ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['๐๏ธ๐ ๐๐ก๐จ ๐๐๐ฆ๐ง๐๐๏ธ', '.menu'],
['๐ฅต๐๐ฅ๐๐๐๐ข๐ฅ๐ฅต', '.menu'],
['๐ฎ๐๐ข๐ก๐๐ฅ๐ฎ', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuherramientas|menuherra|memuherramientas|menuherramientas|menรบherramientas)$/i
handler.fail = null
handler.register = true
export default  handler
