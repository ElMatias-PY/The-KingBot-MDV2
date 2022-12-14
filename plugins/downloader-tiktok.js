/* Comando adaptado por
     unptoadrih15 */

import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!args[0]) throw `*[βππππβ] π΄π½π»π°π²π΄ π³π΄ ππΈπΊππΎπΊ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π½ π΄π½π»π°π²π΄/π»πΈπ½πΊ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[βππππβ] π΄π½π»π°π²π΄ π³π΄ ππΈπΊππΎπΊ πΈπ½π²πΎπππ΄π²ππΎ, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π½ π΄π½π»π°π²π΄/π»πΈπ½πΊ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vSnn/*`
    if (!url) throw 'No pude descargar el audio!'
await m.reply('*[βππππβ] π°πΆππ°ππ³π΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*')
    conn.sendHydrated(m.chat, ` α΄α΄sα΄α΄ΚΙ’α΄α΄α΄Κ α΄α΄ α΄Ιͺα΄α΄α΄α΄ `, `β α΄sα΄α΄ΚΙͺα΄: ${nickname}${description ? `\nβ α΄α΄sα΄ΚΙͺα΄α΄Ιͺα΄Ι΄:\n${description}` : ''}`, await (await fetch(url)).buffer(),
        `${args}`, 'TikTok', null, null, [
        ['α΄α΄Ι΄α΄ α΄Κα΄ΙͺΚ α΄Ι΄ α΄α΄α΄Ιͺα΄', `.tomp3 ${args}`],
        ['Stalkear', `.ttstalk ${nickname}`],
        [null, null]], m)
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(dl|nowm)?$/i

export default handler
