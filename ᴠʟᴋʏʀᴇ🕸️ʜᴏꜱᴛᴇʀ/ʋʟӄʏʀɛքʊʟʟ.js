`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Kolor = require("chalk");
const git = require("simple-git")();
const exec = require("child_process").exec;
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const ʋʟӄʏʀɛքʊʟʟ = async () => {
try {
await git.fetch();
var Commits = await git.log(["KryTek..origin/KryTek"]);
if (Commits.total) {
console.log(
Kolor.blue(`
╔◇║ ⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟
║
║💡 𝐈𝐧𝐟𝐨⬰ New Update pending, updating...
║💡 𝐈𝐧𝐟𝐨⬰ Vlkyre System Synced Latest Patch...
╚════════════༻꧂`)
);
await git.pull("origin", "KryTek", (e, update) => {
if (update && update.summary.changes) {
exec("npm i --force").stderr.pipe(process.stderr);
}
if (e) {
console.log(e);
var ᴠʟᴋʟ = require(`child_process`).exec(
`git config --global user.name "kryknz" && git config --global user.email "kryknz@yandex.com" && git config --global pull.rebase false`
);
ᴠʟᴋʟ.stdout.pipe(process.stdout);
ᴠʟᴋʟ.on(`exit`, async function () {
process.exitCode = 1;
});
}
});
}
} catch (e) {
console.log(e);
var ᴠʟᴋʟ = require(`child_process`).exec(
`git config --global user.name "kryknz" && git config --global user.email "kryknz@yandex.com" && git config --global pull.rebase false`
);
ᴠʟᴋʟ.stdout.pipe(process.stdout);
ᴠʟᴋʟ.on(`exit`, async function () {
process.exitCode = 1;
});
}
};
module.exports = ʋʟӄʏʀɛքʊʟʟ;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
