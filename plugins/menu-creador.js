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
*γπ ππ’ππ _${username}_ πε½‘*
ππππ‘π©ππ‘πππ’ ππ π ππ‘π¨ ππ₯ππππ’π₯

βββββββββββββββ
β *<COMANDOS CREADOR/>*
ββ‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘β‘
β£ ΰΆ¬βπ _${usedPrefix}cajafuerte_
β£ ΰΆ¬βπ _${usedPrefix}enable *restrict*_
β£ ΰΆ¬βπ _${usedPrefix}disable *restrict*_
β£ ΰΆ¬βπ _${usedPrefix}enable *autoread*_
β£ ΰΆ¬βπ _${usedPrefix}disable *autoread*_
β£ ΰΆ¬βπ _${usedPrefix}enable *public*_
β£ ΰΆ¬βπ _${usedPrefix}disable *public*_
β£ ΰΆ¬βπ _${usedPrefix}enable *pconly*_
β£ ΰΆ¬βπ _${usedPrefix}disable *pconly*_
β£ ΰΆ¬βπ _${usedPrefix}enable *gconly*_
β£ ΰΆ¬βπ _${usedPrefix}disable *gconly*_
β£ ΰΆ¬βπ _${usedPrefix}banchat2_
β£ ΰΆ¬βπ _${usedPrefix}unbanchat2_
β£ ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
β£ ΰΆ¬βπ _${usedPrefix}unbanuser *<@tag>*_
β£ ΰΆ¬βπ _${usedPrefix}banuser *<@tag>*_
β£ ΰΆ¬βπ _${usedPrefix}bc *<texto>*_
β£ ΰΆ¬βπ _${usedPrefix}bcchats *<texto>*_
β£ ΰΆ¬βπ _${usedPrefix}bcgc *<texto>*_
β£ ΰΆ¬βπ _${usedPrefix}cleartpm_
β£ ΰΆ¬βπ _${usedPrefix}restart_
β£ ΰΆ¬βπ _${usedPrefix}update_
β£ ΰΆ¬βπ _${usedPrefix}addprem *<@tag>*_
β£ ΰΆ¬βπ _${usedPrefix}delprem *<@tag>*_
β£ ΰΆ¬βπ _${usedPrefix}listprem_
β£ ΰΆ¬βπ _${usedPrefix}aΓ±adirdiamantes *<@tag> <cantidad>*_
β£ ΰΆ¬βπ _${usedPrefix}aΓ±adirxp *<@tag> <cantidad>*_
β£ ΰΆ¬βπ _${usedPrefix}resetuser_
β£ ΰΆ¬βπ _${usedPrefix}block_
β£ ΰΆ¬βπ _${usedPrefix}unblock_
β£ ΰΆ¬βπ _${usedPrefix}spamgp *link*_
β£ ΰΆ¬βπ _${usedPrefix}deldiamantes *@tag* *numero*_
β£ ΰΆ¬βπ _${usedPrefix}delxp *@tag* *numero*_
β£ ΰΆ¬βπ _${usedPrefix}addtoken *@tag* *numero*_
βββββββββββββββ
βββββββββββββββ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['ποΈπ ππ‘π¨ πππ¦π§πποΈ', '.menu'],
['π₯΅ππ₯ππππ’π₯π₯΅', '.menu'],
['π?ππ’π‘ππ₯π?', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuowner|menucreador|memuowner|memucreador|omenu|omemu)$/i
handler.fail = null
handler.register = true
export default  handler
