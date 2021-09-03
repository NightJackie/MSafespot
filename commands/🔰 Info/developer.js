const {
	MessageEmbed
} = require("discord.js")
const config = require("../../botconfig/config.json")
const ee = require("../../botconfig/embed.json")
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
	name: "developer",
	category: "🔰 Info",
	aliases: ["dev", "Jack"],
	description: "Shows Information about the Developer",
	useage: "developer",
	run: async (client, message, args) => {
		try {
			message.channel.send(new MessageEmbed()
				.setColor(ee.color)
				.setFooter(ee.footertext + " | Sponsor: Your Mom | Code  'x10'  == -5%", ee.footericon)
				.setTimestamp()
				.setThumbnail("https://tinyurl.com/59b3cjcv")
				.setTitle("NoobMaster69#8856 | Dev| Developer of Monika")
				.setURL("https://tinyurl.com/r2rf79s6")
				.setDescription(`
> Hello I am **Jack** <@611662253606830120> *(\`NoobMaster69#8856\`)*, and i am a lazy person: [click this](https://tinyurl.com/4mr3nryj)

> I am very proud of MonikaV3: [**MonikaV3** | \`2021\'s Best Music Bot\`](https://tinyurl.com/dc778ttm) <@611662253606830120>

> I made this Bot, Darling: [Noob](https://tinyurl.com/5cvywpwd)

> I am trying to learn to make  a **Website** and **Plugin** dev. [SEE IT](https://tinyurl.com/hrr96x4)

> Yeah i hope you like my stuff <3`)
			).catch(error => console.log(error));
		} catch (e) {
			console.log(String(e.stack).bgRed)
			return message.channel.send(new MessageEmbed()
				.setColor(ee.wrongcolor)
				.setFooter(ee.footertext, ee.footericon)
				.setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
				.setDescription(`\`\`\`${e.message}\`\`\``)
			);
		}
	}
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
