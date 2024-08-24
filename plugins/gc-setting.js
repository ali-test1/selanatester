let handler = async (m, { conn, args, usedPrefix, command }) => {
  let isClose = {
    // Switch Case Like :v
    open: 'not_announcement',
    close: 'announcement',
  }[args[0] || '']
  if (isClose === undefined)
    throw `
*✳️ choose an option:*
  *▢ ${usedPrefix + command} off*
  *▢ ${usedPrefix + command} on*
`.trim()
  await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open/close*']
handler.tags = ['group']
handler.command = ['group', 'جروب']
handler.admin = true
handler.botAdmin = true

export default handler
