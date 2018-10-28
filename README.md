# 3v4l3r
3v4l3r (Evaler) is a very simple NodeJS Discord Bot that evals NodeJS (discord.js)

# Commands
 - `prefix + eval + space + code to eval` evals code without output.
 - `prefix + oeval + space + code to eval` evals code with output.

## Sample commands
 - `prefix + eval msg.channel.send('Hey! I am 3v4l3r!');` -> Sends "Hey! I am 3v4l3r!" to the channel where the command was send.
 - `prefix + oeval msg.guild.memmbers.size` -> Outputs the actual membercount.
 
 # How to install:
1. Install NodeJS to your computer.
2. Download this repo on / Clone this repo to your computer and put the folder anywhere you want.
3. Put everything needed into config.json. (Make sure you don't remove any `"` or `,`)
4. Open your terminal.
5. Navigate to the folder using `cd PATH`.
6. Type `npm install` and press enter.
7. Now you can type `node main.js` and press enter.
#### Note: When you shutdown your PC or close the terminal the bot will be offline. To host it 24/7 you need a server.

# Make sure you enter the right owner ID. When someone else gets access to eval, it could be very dangerous. In addition I am not responsible for what you do with the bot. For example if you hit ratelimits or get banned.
