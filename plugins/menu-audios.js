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
ππππ‘π©ππ‘πππ’ ππ π ππ‘π¨ ππ¨πππ’π¦

*<π ππ‘π¨ ππ¨πππ’π¦>*
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)*

Β° ΰΆ¬βπ _Quien es tu sempai botsito 7w7_
Β° ΰΆ¬βπ _A nadie le importa_
Β° ΰΆ¬βπ _Vivan los novios_
Β° ΰΆ¬βπ _Feliz cumpleaΓ±os_
Β° ΰΆ¬βπ _Buenos dias_
Β° ΰΆ¬βπ _Audio hentai_
Β° ΰΆ¬βπ _Feliz navidad_
Β° ΰΆ¬βπ _Vete a la vrg_
Β° ΰΆ¬βπ _Pasa pack Bot_
Β° ΰΆ¬βπ _Marica quien_
Β° ΰΆ¬βπ _Murio el grupo_
Β° ΰΆ¬βπ _Oh me vengo_
Β° ΰΆ¬βπ _Baneado_
Β° ΰΆ¬βπ _Sexo_
Β° ΰΆ¬βπ _Hola_
Β° ΰΆ¬βπ _Te amo_
Β° ΰΆ¬βπ _BaΓ±ate_
Β° ΰΆ¬βπ _La biblia_
Β° ΰΆ¬βπ _Onichan_
Β° ΰΆ¬βπ _Bot callate_
Β° ΰΆ¬βπ _Siuuu_
Β° ΰΆ¬βπ _Nico nico_
Β° ΰΆ¬βπ _Bruh_
Β° ΰΆ¬βπ _Contexto_
Β° ΰΆ¬βπ _Masivo_
Β° ΰΆ¬βπ _Fino seΓ±ores_
Β° ΰΆ¬βπ _Entiendo_
Β° ΰΆ¬βπ _Raluka_
Β° ΰΆ¬βπ _Una pregunta_
Β° ΰΆ¬βπ _Yoshi_
Β° ΰΆ¬βπ _Linda noche_ (video)
Β° ΰΆ¬βπ _Linda chica_ (video)
Β° ΰΆ¬βπ _Te meto una ostia_
Β° ΰΆ¬βπ _Mami ven aqui_
Β° ΰΆ¬βπ _hola pinche putita_
Β° ΰΆ¬βπ _Te meto con la teta_
Β° ΰΆ¬βπ _Yo por ahi no paso_
Β° ΰΆ¬βπ _Todo bien todo correto_
Β° ΰΆ¬βπ _Bocadillo chorizo messi_
Β° ΰΆ¬βπ _Ankara messi_
Β° ΰΆ¬βπ _Me llaman romeo_
Β° ΰΆ¬βπ _Que no me tires cosas_
Β° ΰΆ¬βπ _Semen_
Β° ΰΆ¬βπ _Te pincho_
Β° ΰΆ¬βπ _Violin_
Β° ΰΆ¬βπ _buscando mikey_ (video)
Β° ΰΆ¬βπ _Mikey muerto_ (video)
Β° ΰΆ¬βπ _Cucacharra_
Β° ΰΆ¬βπ _tumadre_ (video)
Β° ΰΆ¬βπ _Sos puto_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, null, null, null, null, [
['ποΈπ ππ‘π¨ πππ¦π§πποΈ', '.menu'],
['π₯΅ππ₯ππππ’π₯π₯΅', '.menu'],
['π?ππ’π‘ππ₯π?', '.donar']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menuaudio|menuaudios|memuaudios|memuaudio|audios)$/i
handler.fail = null
handler.register = true
export default  handler
