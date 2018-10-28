// Constants
const Discord = require('discord.js')
const fs      = require('fs')
const client = new Discord.Client()
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

// Ready event
client.on('ready', function() {
    if (!client.user.username != '3v4l3r') {
        client.user.setUsername('3v4l3r');
    }
    console.log("3v4l3r is ready");
    setInterval(function() {
        client.user.setActivity('Prefix: ' + config.prefix, { type: 'WATCHING' });
        setTimeout(function() {
            client.user.setActivity('A simple eval Bot made by error2507', { type: 'PLAYING' });
        }, 30000);
        setTimeout(function() {
            client.user.setActivity('https://github.com/error2507/3v4l3r', { type: 'PLAYING' });
        }, 30000);
    }, 90000)
})

// Message event
client.on('message', function(msg){
    var cont   = msg.content
    if (cont.startsWith(config.prefix)) {
        var invoke = cont.split(' ')[0].substr(config.prefix.length),
            args   = cont.split(' ').slice(1);

        if (invoke in cmdmap) {
            cmdmap[invoke](msg, args);
        }
    }   
});

// CMD map with both eval CMDs
var cmdmap = {
    oeval: cmd_oeval,
    eval: cmd_eval
}

// Output eval CMD
function cmd_oeval(msg, args) {
    if (msg.author.id == config.ownerID) {
        try{
            msg.channel.send("**Input:**\n```" + args.join(" ") + "```\n\n**Output:**\n```" + eval(args.join("")) + "```")
        } catch(err) {
            msg.channel.send("**Input:**\n```" + args.join(" ") + "```\n\n**Output:**\n```" + err + "```")
        }
    }
}

// Normal eval without output CMD
function cmd_eval(msg, args) {
    if (msg.author.id == config.ownerID) {
        try{
            eval(args.join(" "))
        } catch(err) {
            msg.channel.send("**Input:**\n```" + args.join(" ") + "```\n\n**Output:**\n```" + err + "```")
        }
    }
}

// Login
client.login(config.token)