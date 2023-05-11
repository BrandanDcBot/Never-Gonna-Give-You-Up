const selfbot = require("discord.js-selfbot-v13")

const client = new selfbot.Client({
    checkUpdate: false
})

client.login(":)")

client.on('ready', async() => {
    console.log(`Succesfully hosted ${client.user.tag}`)
})
