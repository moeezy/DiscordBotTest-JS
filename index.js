const Discord = require("discord.js")


const client = new Discord.Client()



const badWords = ["fuck", "shit", "bitch", "damn"]

const reprimands = [
  "Watch your language.",
  "Calm down.",
  "No bad words on my server!"
]


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if(msg.author.bot) return

  if(msg.content === "AS") {
    msg.reply("Walaikumsalaam")
  }

  if(badWords.some(word => msg.content.includes(word))){
    const reprimand = reprimands[Math.floor(Math.random() * reprimands.length)]
    msg.reply(reprimand)
  }


})

client.login(process.env.TOKEN)


