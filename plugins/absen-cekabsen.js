let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*π½π πππ’ ππππππππππ ππ ππππ πππππ!*_\n\n*${usedPrefix}asistencia* - πΏπππ πππππ£ππ ππππππππππ`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `β ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*γ ππππππππππ γ*

π΅ππππ: ${date}
${conn.absen[id][2]}

β *ππππ°ππΈπΎπ πΏππ΄ππ΄π½ππ΄π:*
β 
β Total: ${absen.length}
${list}
β 
βββββ

`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true
export default handler
