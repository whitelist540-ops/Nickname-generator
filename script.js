// Unicode character maps for different text styles
const styles = {
    bold: {
        name: "Bold",
        map: {
            a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣",
            k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭",
            u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳",
            A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈", J: "𝐉",
            K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍", O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓",
            U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙",
        }
    },
    italic: {
        name: "Italic",
        map: {
            a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫",
            k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵",
            u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
            A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑",
            K: "𝘒", L: "𝘓", M: "𝘔", N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛",
            U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
        }
    },
    boldItalic: {
        name: "Bold Italic",
        map: {
            a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟",
            k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩",
            u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯",
            A: "𝘼", B: "𝘽", C: "𝘾", D: "𝘿", E: "𝙀", F: "𝙁", G: "𝙂", H: "𝙃", I: "𝙄", J: "𝙅",
            K: "𝙆", L: "𝙇", M: "𝙈", N: "𝙉", O: "𝙊", P: "𝙋", Q: "𝙌", R: "𝙍", S: "𝙎", T: "𝙏",
            U: "𝙐", V: "𝙑", W: "𝙒", X: "𝙓", Y: "𝙔", Z: "𝙕",
        }
    },
    script: {
        name: "Script",
        map: {
            a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "𝑒", f: "𝒻", g: "𝑔", h: "𝒽", i: "𝒾", j: "𝒿",
            k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "𝑜", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉",
            u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓏",
            A: "𝒜", B: "𝐵", C: "𝒞", D: "𝒟", E: "𝐸", F: "𝐹", G: "𝒢", H: "𝐻", I: "𝐼", J: "𝒥",
            K: "𝒦", L: "𝐿", M: "𝑀", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "𝑅", S: "𝒮", T: "𝒯",
            U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵",
        }
    },
    fraktur: {
        name: "Fraktur",
        map: {
            a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧",
            k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱",
            u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷",
            A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
            K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
            U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
        }
    },
    doubleStruck: {
        name: "Double Struck",
        map: {
            a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛",
            k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥",
            u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
            A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁",
            K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋",
            U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
        }
    },
    monospace: {
        name: "Monospace",
        map: {
            a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓",
            k: "𝚔", l: "𝚕", m: "𝚖", n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝",
            u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
            A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹",
            K: "𝙺", L: "𝙻", M: "𝙼", N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃",
            U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉",
        }
    },
    circled: {
        name: "Circled",
        map: {
            a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ",
            k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ",
            u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
            A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ",
            K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ",
            U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
        }
    },
    squared: {
        name: "Squared",
        map: {
            a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴", f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
            k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾", p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
            u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
            A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴", F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
            K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾", P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
            U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
        }
    },
    inverted: {
        name: "Inverted",
        map: {
            a: "🅰", b: "🅱", c: "🅲", d: "🅳", e: "🅴", f: "🅵", g: "🅶", h: "🅷", i: "🅸", j: "🅹",
            k: "🅺", l: "🅻", m: "🅼", n: "🅽", o: "🅾", p: "🅿", q: "🆀", r: "🆁", s: "🆂", t: "🆃",
            u: "🆄", v: "🆅", w: "🆆", x: "🆇", y: "🆈", z: "🆉",
            A: "🅰", B: "🅱", C: "🅲", D: "🅳", E: "🅴", F: "🅵", G: "🅶", H: "🅷", I: "🅸", J: "🅹",
            K: "🅺", L: "🅻", M: "🅼", N: "🅽", O: "🅾", P: "🅿", Q: "🆀", R: "🆁", S: "🆂", T: "🆃",
            U: "🆄", V: "🆅", W: "🆆", X: "🆇", Y: "🆈", Z: "🆉",
        }
    },
    cursive: {
        name: "Cursive",
        map: {
            a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳",
            k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽",
            u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
            A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙",
            K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣",
            U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
        }
    },
    sansSerif: {
        name: "Sans Serif",
        map: {
            a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂", j: "𝗃",
            k: "𝗄", l: "𝗅", m: "𝗆", n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍",
            u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",
            A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨", J: "𝖩",
            K: "𝖪", L: "𝖫", M: "𝖬", N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱", S: "𝖲", T: "𝖳",
            U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹",
        }
    },
    sansSerifBold: {
        name: "Sans Serif Bold",
        map: {
            a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷",
            k: "𝗸", l: "𝗹", m: "𝗺", n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁",
            u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
            A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝",
            K: "𝗞", L: "𝗟", M: "𝗠", N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧",
            U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
        }
    },
    smallCaps: {
        name: "Small Caps",
        map: {
            a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ",
            k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ",
            u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
            A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ",
            K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ",
            U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ",
        }
    },
    hacker: {
        name: "Hacker",
        map: {
            a: "a҉", b: "b҉", c: "c҉", d: "d҉", e: "e҉", f: "f҉", g: "g҉", h: "h҉", i: "i҉", j: "j҉",
            k: "k҉", l: "l҉", m: "m҉", n: "n҉", o: "o҉", p: "p҉", q: "q҉", r: "r҉", s: "s҉", t: "t҉",
            u: "u҉", v: "v҉", w: "w҉", x: "x҉", y: "y҉", z: "z҉",
            A: "A҉", B: "B҉", C: "C҉", D: "D҉", E: "E҉", F: "F҉", G: "G҉", H: "H҉", I: "I҉", J: "J҉",
            K: "K҉", L: "L҉", M: "M҉", N: "N҉", O: "O҉", P: "P҉", Q: "Q҉", R: "R҉", S: "S҉", T: "T҉",
            U: "U҉", V: "V҉", W: "W҉", X: "X҉", Y: "Y҉", Z: "Z҉",
        }
    },
    specialUnicode: {
        name: "Special Unicode",
        map: {
            a: "ɑ", b: "ɓ", c: "ƈ", d: "ɗ", e: "ɛ", f: "ƒ", g: "ɠ", h: "ɦ", i: "ɩ", j: "ʝ",
            k: "ƙ", l: "ʅ", m: "ɱ", n: "ɲ", o: "ơ", p: "ƥ", q: "ʠ", r: "ɾ", s: "ʂ", t: "ƭ",
            u: "ʊ", v: "ʋ", w: "ɯ", x: "ҳ", y: "ʏ", z: "ʐ",
            A: "Ⱥ", B: "Ɓ", C: "Ƈ", D: "Ɗ", E: "Ɛ", F: "Ƒ", G: "Ɠ", H: "Ƕ", I: "Ɨ", J: "Ɉ",
            K: "Ƙ", L: "Ƚ", M: "Ɱ", N: "Ɲ", O: "Ø", P: "Ƥ", Q: "Ɋ", R: "Ʀ", S: "Ƨ", T: "Ƭ",
            U: "Ʋ", V: "Ɣ", W: "Ƿ", X: "Ҳ", Y: "Ƴ", Z: "Ȥ",
        }
    },
    gothic: {
        name: "Gothic",
        map: {
            a: "𝔄", b: "𝔅", c: "ℭ", d: "𝔇", e: "𝔈", f: "𝔉", g: "𝔊", h: "ℌ", i: "ℑ", j: "𝔍",
            k: "𝔎", l: "𝔏", m: "𝔐", n: "𝔑", o: "𝔒", p: "𝔓", q: "𝔔", r: "ℜ", s: "𝔖", t: "𝔗",
            u: "𝔘", v: "𝔙", w: "𝔚", x: "𝔛", y: "𝔜", z: "ℨ",
            A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍",
            K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗",
            U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
        }
    },
    medieval: {
        name: "Medieval",
        map: {
            a: "𝕬", b: "𝕭", c: "𝕮", d: "𝕯", e: "𝕰", f: "𝕱", g: "𝕲", h: "𝕳", i: "𝕴", j: "𝕵",
            k: "𝕶", l: "𝕷", m: "𝕸", n: "𝕹", o: "𝕺", p: "𝕻", q: "𝕼", r: "𝕽", s: "𝕾", t: "𝕿",
            u: "𝖀", v: "𝖁", w: "𝖂", x: "𝖃", y: "𝖄", z: "𝖅",
            A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵",
            K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿",
            U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅",
        }
    },
    magic: {
        name: "Magic",
        map: {
            a: "ꪖ", b: "ꪜ", c: "ꪀ", d: "ꪗ", e: "ꫀ", f: "ꪶ", g: "ᦔ", h: "ꫝ", i: "꠸", j: "ꪊ",
            k: "ꪶ", l: "ꪊ", m: "ꪑ", n: "ꪊ", o: "ꪮ", p: "ᖰ", q: "ꪇ", r: "ꪹ", s: "ꪊ", t: "ꪻ",
            u: "ꪊ", v: "ꪜ", w: "ꪹ", x: "ꪗ", y: "ꪗ", z: "ꪗ",
            A: "ꪖ", B: "ꪜ", C: "ꪀ", D: "ꪗ", E: "ꫀ", F: "ꪶ", G: "ᦔ", H: "ꫝ", I: "꠸", J: "ꪊ",
            K: "ꪶ", L: "ꪊ", M: "ꪑ", N: "ꪊ", O: "ꪮ", P: "ᖰ", Q: "ꪇ", R: "ꪹ", S: "ꪊ", T: "ꪻ",
            U: "ꪊ", V: "ꪜ", W: "ꪹ", X: "ꪗ", Y: "ꪗ", Z: "ꪗ",
        }
    },
    ancient: {
        name: "Ancient",
        map: {
            a: "α", b: "β", c: "ƈ", d: "∂", e: "ε", f: "ƒ", g: "ɠ", h: "ɦ", i: "ι", j: "ʝ",
            k: "ƙ", l: "ℓ", m: "ɱ", n: "ɳ", o: "σ", p: "ρ", q: "ϙ", r: "ɾ", s: "ʂ", t: "ƭ",
            u: "υ", v: "ʋ", w: "ω", x: "χ", y: "ყ", z: "ƶ",
            A: "Α", B: "Β", C: "Ƈ", D: "Δ", E: "Ε", F: "Ƒ", G: "Ɠ", H: "Η", I: "Ι", J: "ʝ",
            K: "Ƙ", L: "ℓ", M: "Μ", N: "Ν", O: "Ω", P: "Ρ", Q: "Ϙ", R: "Ʀ", S: "Ƨ", T: "Ƭ",
            U: "Ʋ", V: "Ɣ", W: "Ɯ", X: "Χ", Y: "Ƴ", Z: "Ƶ",
        }
    },
    cyber: {
        name: "Cyber",
        map: {
            a: "₳", b: "฿", c: "₵", d: "Đ", e: "Ɇ", f: "₣", g: "₲", h: "Ⱨ", i: "ł", j: "J",
            k: "₭", l: "Ⱡ", m: "₥", n: "₦", o: "Ø", p: "₱", q: "Q", r: "Ɽ", s: "₴", t: "₮",
            u: "Ʉ", v: "V", w: "₩", x: "Ӿ", y: "Ɏ", z: "Ⱬ",
            A: "₳", B: "฿", C: "₵", D: "Đ", E: "Ɇ", F: "₣", G: "₲", H: "Ⱨ", I: "ł", J: "J",
            K: "₭", L: "Ⱡ", M: "₥", N: "₦", O: "Ø", P: "₱", Q: "Q", R: "Ɽ", S: "₴", T: "₮",
            U: "Ʉ", V: "V", W: "₩", X: "Ӿ", Y: "Ɏ", Z: "Ⱬ",
        }
    }
};

// Special Unicode character substitutions
const specialChars = {
    a: ["ą", "ค", "ά", "ặ", "ꫀ", "α", "ａ", "₳", "ᴀ", "ᵃ", "ǟ", "ǡ", "ã", "â", "ä", "å", "ą", "ɑ"],
    b: ["ḃ", "β", "ḅ", "ḇ", "ｂ", "ʙ", "ᵇ"],
    c: ["č", "ć", "ç", "ĉ", "ḉ", "ｃ", "ᴄ", "ᶜ"],
    d: ["ď", "ḋ", "ḍ", "ḑ", "ｄ", "ᴅ", "ᵈ"],
    e: ["ē", "ė", "ę", "ع", "ɇ", "ε", "ｅ", "ᴇ", "ᵉ", "Ɛ", "ė", "ë", "ê", "ě", "ę", "è", "é", "ē"],
    f: ["ḟ", "ƒ", "ｆ", "ꜰ", "ᶠ", "Ƒ"],
    g: ["ğ", "ġ", "ģ", "ḡ", "ｇ", "ɢ", "ᵍ", "Ɠ"],
    h: ["ħ", "ђ", "ℏ", "ɦ", "ｈ", "ʜ", "ʰ", "ℋ"],
    i: ["ï", "ī", "į", "ι", "ɨ", "ł", "ｉ", "ɪ", "ⁱ", "ℐ", "ï", "î", "ì", "í", "ī", "į", "ı"],
    j: ["ĵ", "ј", "ｊ", "ᴊ", "ʲ", "Ɉ"],
    k: ["ķ", "ḳ", "ƙ", "ｋ", "ᴋ", "ᵏ", "ʞ"],
    l: ["ł", "ĺ", "ľ", "ļ", "ḷ", "ｌ", "ʟ", "ˡ", "ℒ"],
    m: ["ṁ", "ṃ", "ｍ", "ᴍ", "ᵐ", "ɱ", "ℳ"],
    n: ["ñ", "ń", "ň", "ή", "ɳ", "ₙ", "ｎ", "₦", "ɴ", "ⁿ", "ℕ", "ń", "ň", "ñ", "ņ", "ṅ", "ṇ"],
    o: ["ō", "ö", "ø", "ơ", "ǿ", "ο", "๏", "ₒ", "ᴏ", "ᵒ", "Ø", "ö", "ô", "õ", "ø", "ō", "ò", "ó", "œ"],
    p: ["ṗ", "ṕ", "ｐ", "ᴘ", "ᵖ"],
    q: ["ｑ", "ǫ", "ᑫ"],
    r: ["ř", "ŕ", "я", "ʀ", "ɾ", "ｒ", "ʳ", "Ř", "ŗ", "ř", "ŕ", "ṙ", "ṛ", "ṝ"],
    s: ["š", "ś", "ş", "ѕ", "ร", "ｓ", "ꜱ", "ˢ", "ʂ", "ṩ", "ṡ", "ṣ", "ŝ", "š", "ś", "ş"],
    t: ["ť", "ţ", "τ", "ŧ", "ƚ", "ｔ", "Ŧ", "ᴛ", "ᵗ", "ʈ", "₮"],
    u: ["ū", "ü", "ų", "ứ", "ᥙ", "υ", "ｕ", "ᴜ", "ᵘ", "ʊ", "ü", "û", "ù", "ú", "ū", "ů"],
    v: ["ṽ", "ṿ", "ｖ", "ᴠ", "ᵛ", "ʋ", "ⱽ"],
    w: ["ẃ", "ẅ", "ẇ", "ｗ", "ᴡ", "ʷ", "ʍ", "ᵂ"],
    x: ["ẋ", "ẍ", "ｘ", "ˣ", "ᵡ"],
    y: ["ý", "ÿ", "ұ", "ყ", "ү", "ｙ", "ʏ", "ʸ", "ʎ"],
    z: ["ž", "ź", "ż", "ʐ", "ｚ", "ᴢ", "ᶻ", "ʑ", "Ƶ"],
    A: ["Ą", "Ά", "Ꭺ", "ᗩ", "Ⱥ", "Ａ", "ᴬ", "₳"],
    B: ["Ḃ", "Ḅ", "Ḇ", "Ｂ", "ᴮ"],
    C: ["Č", "Ć", "Ç", "Ĉ", "Ｃ", "ᶜ"],
    D: ["Ď", "Ḋ", "Ḍ", "Ｄ", "ᴰ"],
    E: ["Ē", "Ė", "Ę", "Ɇ", "Ｅ", "ᴱ"],
    F: ["Ḟ", "Ｆ", "ᶠ", "₣"],
    G: ["Ğ", "Ġ", "Ģ", "Ḡ", "Ｇ", "ᴳ", "₲"],
    H: ["Ħ", "Ђ", "Ⱨ", "Ｈ", "ᴴ"],
    I: ["Ï", "Ī", "Į", "Ɨ", "ℑ", "Ｉ", "ᴵ"],
    J: ["Ĵ", "Ј", "Ｊ", "ᴶ"],
    K: ["Ķ", "Ḳ", "Ƙ", "Ｋ", "ᴷ", "₭"],
    L: ["Ł", "Ĺ", "Ľ", "Ļ", "Ḷ", "Ｌ", "ᴸ"],
    M: ["Ṁ", "Ṃ", "Ｍ", "ᴹ"],
    N: ["Ñ", "Ń", "Ň", "Ɲ", "Ｎ", "ᴺ"],
    O: ["Ō", "Ö", "Ø", "Ơ", "Ǿ", "Ｏ", "ᴼ"],
    P: ["Ṗ", "Ṕ", "Ｐ", "ᴾ", "₱"],
    Q: ["Ｑ", "ᵠ"],
    R: ["Ř", "Ŕ", "Я", "Ʀ", "Ɍ", "Ｒ", "ᴿ"],
    S: ["Š", "Ś", "Ş", "Ｓ", "ˢ", "₴"],
    T: ["Ť", "Ţ", "Ŧ", "Ｔ", "ᵀ"],
    U: ["Ū", "Ü", "Ų", "Ứ", "Ʉ", "Ｕ", "ᵁ"],
    V: ["Ṽ", "Ṿ", "Ｖ", "ⱽ"],
    W: ["Ẃ", "Ẅ", "Ẇ", "Ｗ", "ᵂ"],
    X: ["Ẋ", "Ẍ", "Ｘ", "ˣ"],
    Y: ["Ý", "Ÿ", "Ұ", "Ɏ", "Ү", "Ｙ", "ʸ"],
    Z: ["Ž", "Ź", "Ż", "Ｚ", "ᶻ", "Ȥ"],
    // Combined characters
    th: ["þ", "ð", "ṯ", "ṱ"],
    sh: ["š", "ṩ", "ṣ", "ŝ"],
    ch: ["č", "ć", "ç", "ĉ", "ḉ"]
};

// Add new prefix words for the small text before names
const prefixWords = {
    iam: "ᴵᴬᴹ",
    boss: "ᴮᴼˢˢ",
    badboy: "ᴮᴬᴰᴮᴼʸ",
    king: "ᴷᴵᴺᴳ",
    queen: "Qᴜᴇᴇɴ",
    legend: "ᴸᴱᴳᴱᴺᴰ",
    pro: "ᴾᴿᴼ",
    god: "ᴳᴼᴰ",
    demon: "ᴰᴱᴹᴼᴺ",
    angel: "ᴬᴺᴳᴱᴸ",
    warrior: "ᵂᴬᴿᴿᴵᴼᴿ",
    ghost: "ᴳᴴᴼˢᵀ",
    hacker: "ᴴᴬᶜᴷᴱᴿ",
    vampire: "ⱽᴬᴹᴾᴵᴿᴱ",
    wolf: "ᵂᴼᴸᶠ",
    tiger: "ᵀᴵᴳᴱᴿ",
    dragon: "ᴰᴿᴬᴳᴼᴺ",
    phoenix: "ᴾᴴᴼᴱᴺᴵˣ",
    shadow: "ˢᴴᴬᴰᴼᵂ",
    light: "ᴸᴵᴳᴴᵀ",
    dark: "ᴰᴬᴿᴷ",
    fire: "ᶠᴵᴿᴱ",
    ice: "ᴵᶜᴱ",
    storm: "ˢᵀᴼᴿᴹ",
    thunder: "ᵀᴴᵁᴺᴰᴱᴿ",
    cosmic: "ᶜᴼˢᴹᴵᶜ",
    neon: "ᴺᴱᴼᴺ",
    cyber: "ᶜʸᴮᴱᴿ",
    atomic: "ᴬᵀᴼᴹᴵᶜ",
    mega: "ᴹᴱᴳᴬ",
    ultra: "ᵁᴸᵀᴿᴬ",
    super: "ˢᵁᴾᴱᴿ",
    epic: "ᴱᴾᴵᶜ",
    myth: "ᴹʸᵀᴴ",
    royal: "ᴿᴼʸᴬᴸ",
    divine: "ᴰᴵⱽᴵᴺᴱ",
    eternal: "ᴱᵀᴱᴿᴺᴬᴸ"
};

// Professional name styles with exact character mappings from your examples
const professionalNameStyles = [
    {
        name: "Quote Bubble Style",
        template: {
            prefix: "°\"",
            suffix: "\"°",
            mapping: { r: "ℛ", a: "ค", y: "Ў", h: "ⲏ", n: "𐌽" }
        }
    },
    {
        name: "Elegant Border Style",
        template: {
            prefix: "꧁乂✰",
            suffix: "✰乂꧂",
            mapping: { r: "ⴽ", a: "ค", y: "𝕪", h: "𝓱", n: "ꫜ" }
        }
    },
    {
        name: "Simple Elegant Style",
        template: {
            prefix: "𑁍┊",
            suffix: "",
            mapping: { r: "℟", a: "𝔞", y: "ʸ", h: "Ꮵ", n: "𝑛" }
        }
    },
    {
        name: "Prefix Arrow Style",
        template: {
            prefix: "➳",
            suffix: "➳",
            mapping: { r: "ꋪ", a: "ą", y: "𐍅", h: "𝚑", n: "𝚗" },
            addPrefix: true
        }
    },
    {
        name: "Flower Decoration Style",
        template: {
            prefix: "✿.｡",
            suffix: ".:* ☆",
            mapping: { r: "Ꮢ", a: "ᤂ", y: "ℽ", h: "𝓱", n: "ⲡ" }
        }
    },
    {
        name: "Bubble Special Style",
        template: {
            prefix: "°🫧•𖨆٭ ",
            suffix: "꙳○𖨆°",
            mapping: { r: "ꋪ", a: "𝗮", y: "ץ", h: "ʱ", n: "η" }
        }
    },
    {
        name: "Arrow Star Style",
        template: {
            prefix: "⇶✴☞",
            suffix: "❈",
            mapping: { r: "ꭱ", a: "α", y: "ᵞ", h: "ĥ", n: "ᴻ" }
        }
    },
    {
        name: "Dot Border Style",
        template: {
            prefix: "•.•.",
            suffix: ".•.•",
            mapping: { r: "ℛ", a: "ⲗ", y: "ʸ", h: "𝕙", n: "𝗇" }
        }
    },
    {
        name: "Flower Symbol Style",
        template: {
            prefix: "𖥻៹",
            suffix: "🌻✨",
            mapping: { r: "𝑅", a: "ᥲ", y: "𝓎", h: "ħ", n: "ꫛ" }
        }
    },
    {
        name: "Cloud Heart Style",
        template: {
            prefix: "☁♡⭒",
            suffix: "⭒♡☁",
            mapping: { r: "𝗥", a: "ᤂ", y: "𝔂", h: "ʱ", n: "Ϟ" }
        }
    },
    {
        name: "Kaomoji Style",
        template: {
            prefix: "+｡:.ﾟ",
            suffix: "\\ (•◡•) /",
            mapping: { r: "𝐑", a: "ศ", y: "ᵞ", h: "𝚑", n: "𝖓" }
        }
    },
    {
        name: "Star Line Style",
        template: {
            prefix: "—͟͞͞★",
            suffix: "—͟͞͞★",
            mapping: { r: "𝑅", a: "ɑ", y: "𝚢", h: "𝐡", n: "ɳ" }
        }
    },
    {
        name: "Book Border Style",
        template: {
            prefix: "《.•°~[",
            suffix: "]~°•.》",
            mapping: { r: "ꭱ", a: "𝒶", y: "ᵞ", h: "𝘩", n: "𝓷" }
        }
    },
    {
        name: "Star Cluster Style",
        template: {
            prefix: "★⁂⁙",
            suffix: "⁙⁂★",
            mapping: { r: "Ｒ", a: "ẳ", y: "𝒚", h: "ℏ", n: "𝓃" }
        }
    },
    {
        name: "Heart Fire Style",
        template: {
            prefix: "❤️‍🔥♡",
            suffix: "♡❤️‍🔥",
            mapping: { r: "℟", a: "ᤂ", y: "𝚢", h: "𝘩", n: "ⲡ" }
        }
    },
    {
        name: "Rose Fire Style",
        template: {
            prefix: "🔥🥀",
            suffix: "🥀🔥",
            mapping: { r: "𝗥", a: "𝓪", y: "ʸ", h: "ʱ", n: "𝔫" }
        }
    },
    {
        name: "Heart Border Style",
        template: {
            prefix: "꧁⪻♥",
            suffix: "♥⪼꧂",
            mapping: { r: "ʀ", a: "ᵃ", y: "ყ", h: "𝚑", n: "𝘯" }
        }
    },
    {
        name: "Square Text Style",
        template: {
            prefix: "",
            suffix: "",
            mapping: { r: "🅁", a: "𝗮", y: "🅈", h: "𝗵", n: "𝗻" }
        }
    },
    {
        name: "Star Line Variant Style",
        template: {
            prefix: "—͟͞͞★ ",
            suffix: " ★",
            mapping: { r: "𝐑", a: "ꪋ", y: "ყ", h: "ʰ", n: "ก" }
        }
    },
    {
        name: "Butterfly Style",
        template: {
            prefix: "🦋✨",
            suffix: "✨🦋",
            mapping: { r: "Ɍ", a: "ᤂ", y: "ʸ", h: "Ꮵ", n: "ᶯ" }
        }
    },
    {
        name: "Heart Star Style",
        template: {
            prefix: "°♡✧*",
            suffix: "*✧♡°",
            mapping: { r: "ʀ", a: "ᤂ", y: "¥", h: "ĥ", n: "𝗻" }
        }
    },
    {
        name: "Chain Style",
        template: {
            prefix: "⛓ 💯",
            suffix: "⛓",
            mapping: { r: "ꭱ", a: "ศ", y: "Ў", h: "𝗵", n: "𝗇" }
        }
    },
    {
        name: "Sunflower Style",
        template: {
            prefix: "🌻x",
            suffix: "x🌻",
            mapping: { r: "ᚱ", a: "𝒂", y: "у", h: "ɦ", n: "ƞ" }
        }
    },
    {
        name: "Lightning Style",
        template: {
            prefix: "⚡",
            suffix: "|₂₂₀⚡",
            mapping: { r: "Ꮢ", a: "ǟ", y: "ᵞ", h: "𝕙", n: "ᶰ" }
        }
    },
    {
        name: "Wave Style",
        template: {
            prefix: "🌊 .·:*¨",
            suffix: "¨*:·. 🌊",
            mapping: { r: "℟", a: "ᵃ", y: "у", h: "ʰ", n: "ᶰ" }
        }
    },
    {
        name: "Arrow Heart Style",
        template: {
            prefix: "🔥💘⇨",
            suffix: "☔️",
            mapping: { r: "ᴿ", a: "ᥲ", y: "ℽ", h: "𝖍", n: "ท" }
        }
    }
];

// Function to apply professional name styling
function applyProfessionalStyle(userName, styleTemplate) {
    let styledName = "";
    const nameLower = userName.toLowerCase();
    
    for (let i = 0; i < nameLower.length; i++) {
        const char = nameLower[i];
        styledName += styleTemplate.mapping[char] || char;
    }
    
    let finalName = styleTemplate.prefix + styledName + styleTemplate.suffix;
    
    // Add prefix word if specified
    if (styleTemplate.addPrefix) {
        const prefixKey = Object.keys(prefixWords)[Math.floor(Math.random() * Object.keys(prefixWords).length)];
        finalName = prefixWords[prefixKey] + " " + finalName;
    }
    
    return finalName;
}

// Complex decorations
const complexDecorations = [
    // Professional styles from examples
    { prefix: "°\"", suffix: "\"°" },
    { prefix: "꧁乂✰", suffix: "✰乂꧂" },
    { prefix: "𑁍┊", suffix: "" },
    { prefix: "✿.｡", suffix: ".:* ☆" },
    { prefix: "°🫧•𖨆٭ ", suffix: "꙳○𖨆°" },
    { prefix: "⇶✴☞", suffix: "❈" },
    { prefix: "•.•.", suffix: ".•.•" },
    { prefix: "𖥻៹", suffix: "🌻✨" },
    { prefix: "☁♡⭒", suffix: "⭒♡☁" },
    { prefix: "+｡:.ﾟ", suffix: "\\ (•◡•) /" },
    { prefix: "—͟͞͞★", suffix: "—͟͞͞★" },
    { prefix: "《.•°~[", suffix: "]~°•.》" },
    { prefix: "★⁂⁙", suffix: "⁙⁂★" },
    { prefix: "❤️‍🔥♡", suffix: "♡❤️‍🔥" },
    { prefix: "🔥🥀", suffix: "🥀🔥" },
    { prefix: "꧁⪻♥", suffix: "♥⪼꧂" },
    { prefix: "—͟͞͞★ ", suffix: " ★" },
    { prefix: "🦋✨", suffix: "✨🦋" },
    { prefix: "°♡✧*", suffix: "*✧♡°" },
    { prefix: "⛓ 💯", suffix: "⛓" },
    { prefix: "🌻x", suffix: "x🌻" },
    { prefix: "⚡", suffix: "|₂₂₀⚡" },
    { prefix: "🌊 .·:*¨", suffix: "¨*:·. 🌊" },
    { prefix: "🔥💘⇨", suffix: "☔️" },
    
    // Keep original ones that work well
    { prefix: "━ 𝗚ҽϞυ𝑖Ϟҽ𝓓ҽℊḭ𝔫ʄ๏𝑟 :･ﾟ✧", suffix: "" },
    { prefix: "꧁☬⋆", suffix: "⋆☬꧂" },
    { prefix: "꧁༒", suffix: "༒꧂" },
    { prefix: "༺", suffix: "༻ᴳᵒᵈ" },
    { prefix: "꧁𓊈𒆜", suffix: "𒆜𓊉꧂" },
    { prefix: "❝ ", suffix: " ❞" },
    { prefix: "𓆩💜𓆪", suffix: "𓆩💜𓆪" },
    { prefix: "𓆩🔥𓆪", suffix: "𓆩🔥𓆪" },
    { prefix: "𓆩⚡𓆪", suffix: "𓆩⚡𓆪" },
    { prefix: "★彡", suffix: "彡★" },
    { prefix: "『", suffix: "』" },
    { prefix: "【", suffix: "】" },
    { prefix: "♛", suffix: "♛" },
    { prefix: "👑", suffix: "👑" },
];

// Special design templates
const specialDesigns = [
    {
        name: "Hacker Style",
        generate: function(userName) {
            const styledName = applyStyle(userName, styles.hacker);
            return "꧁" + styledName + "꧂";
        }
    },
    {
        name: "Lucifer Style",
        generate: function(userName) {
            const smallCapsPart = applyStyle(userName.substring(0, 2), styles.smallCaps);
            const boldPart = applyStyle(userName.substring(2), styles.bold);
            const spacedName = boldPart.split('').join(' ');
            return "➳" + smallCapsPart + "メ " + spacedName + "亗";
        }
    },
    {
        name: "Black Panther Style",
        generate: function(userName) {
            return userName.split('').map(char => applyStyle(char, styles.squared)).join('');
        }
    },
    {
        name: "Shark Badboy Style",
        generate: function(userName) {
            const smallCapsName = applyStyle(userName, styles.smallCaps);
            return "『" + smallCapsName + "』•ᴮᴬᴰʙᴏʏツ";
        }
    },
    {
        name: "Legends Style",
        generate: function(userName) {
            const specialName = applyStyle(userName, styles.specialUnicode);
            return "꧁༒" + specialName + "༒꧂";
        }
    },
    {
        name: "Dark Fire Style",
        generate: function(userName) {
            const specialName = applyStyle(userName, styles.specialUnicode);
            return "꧁࿇" + specialName + "࿇꧂";
        }
    },
    {
        name: "Royal Gothic",
        generate: function(userName) {
            const gothicName = applyStyle(userName, styles.gothic);
            return "♚ " + gothicName + " ♚";
        }
    },
    {
        name: "Cyber Warrior",
        generate: function(userName) {
            const cyberName = applyStyle(userName, styles.cyber);
            return "⚙️ " + cyberName + " ⚙️";
        }
    },
    {
        name: "Ancient Rune",
        generate: function(userName) {
            const ancientName = applyStyle(userName, styles.ancient);
            return "ᛟ " + ancientName + " ᛟ";
        }
    },
    {
        name: "Magic Spell",
        generate: function(userName) {
            const magicName = applyStyle(userName, styles.magic);
            return "☤ " + magicName + " ☤";
        }
    },
    {
        name: "Medieval Knight",
        generate: function(userName) {
            const medievalName = applyStyle(userName, styles.medieval);
            return "⚔️ " + medievalName + " 🛡️";
        }
    },
    {
        name: "Elemental Master",
        generate: function(userName) {
            const elements = ["🔥", "💧", "🌪️", "❄️", "⚡"];
            const element = elements[Math.floor(Math.random() * elements.length)];
            const styledName = applyStyle(userName, styles.bold);
            return element + " " + styledName + " " + element;
        }
    },
    {
        name: "Digital Ghost",
        generate: function(userName) {
            let ghostName = "";
            for (let char of userName) {
                if (Math.random() > 0.3) {
                    ghostName += applyStyle(char, styles.monospace);
                } else {
                    ghostName += "�";
                }
            }
            return "[" + ghostName + "]";
        }
    },
    {
        name: "Mythical Beast",
        generate: function(userName) {
            const beastName = applyStyle(userName, styles.fraktur);
            const beasts = ["🐉", "🐲", "🦁", "🐺", "🦅"];
            const beast = beasts[Math.floor(Math.random() * beasts.length)];
            return beast + " " + beastName + " " + beast;
        }
    }
];

// Emojis and symbols
const symbols = ["☯", "⚡", "🔥", "💫", "🌟", "⭐", "✨", "🎮", "⚔️", "🛡️", "💎", "🕊️", "💀", "🐉", "🐲", "🌙", "☀️", "🌺", "🌼", "🍀", "🦋", "🦅", "🦁", "🐺", "メ", "ツ", "亗", "♚", "♛", "⚚", "𓂀", "ꕤ", "𒊹", "⟢", "⌬", "⍟", "⎈", "⋆", "༄", "𖤓", "𓋼", "★", "☆", "■", "✦", "◈", "卐", "ᛟ", "𒀱", "ꕥ", "𖣘", "♠", "♣", "♦", "♥", "⚡", "🔥", "💧", "🌪️", "❄️", "🌙", "☀️", "⭐", "🌟", "✨", "💫", "☄️"];

// Social media platforms for sharing
const socialMedia = {
    facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u=",
        color: "#1877f2"
    },
    twitter: {
        name: "Twitter",
        url: "https://twitter.com/intent/tweet?text=",
        color: "#1da1f2"
    },
    whatsapp: {
        name: "WhatsApp",
        url: "https://api.whatsapp.com/send?text=",
        color: "#25d366"
    },
    instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/",
        color: "#e4405f"
    },
    telegram: {
        name: "Telegram",
        url: "https://t.me/share/url?url=",
        color: "#0088cc"
    },
    reddit: {
        name: "Reddit",
        url: "https://www.reddit.com/submit?title=",
        color: "#ff4500"
    }
};

// DOM elements
const nameInput = document.getElementById('nameInput');
const generateBtn = document.getElementById('generateBtn');
const resultsContainer = document.getElementById('resultsContainer');
const notification = document.getElementById('notification');
const loadingIndicator = document.getElementById('loadingIndicator');

// Variables for auto-generation
let isGenerating = false;
let currentName = "";
let generatedCount = 0;
let allGeneratedNames = [];
const copyHistory = [];

// Storage for likes and dislikes
let nameReactions = JSON.parse(localStorage.getItem('nameReactions')) || {};

// Apply style to a word - preserves case
function applyStyle(word, style) {
    let result = '';
    for (let char of word) {
        // Check if character is uppercase or lowercase and apply appropriate style
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            // Uppercase character
            result += style.map[char] || char;
        } else {
            // Lowercase character
            result += style.map[char] || char;
        }
    }
    return result;
}

// Apply special characters to a word - preserves case
function applySpecialChars(word, chance) {
    let result = '';
    for (let char of word) {
        // Apply special character substitution with given chance
        if (Math.random() < chance && specialChars[char]) {
            const options = specialChars[char];
            result += options[Math.floor(Math.random() * options.length)];
        } else {
            result += char;
        }
    }
    return result;
}

// Advanced text transformation functions
function applyMixedCase(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
            result += text[i].toUpperCase();
        } else {
            result += text[i].toLowerCase();
        }
    }
    return result;
}

function applyRandomSpacing(text) {
    let result = '';
    for (let char of text) {
        result += char;
        if (Math.random() < 0.3) {
            result += ' ';
        }
    }
    return result.trim();
}

function applySymbolReplacement(text) {
    const symbolMap = {
        'a': ['@', '4', 'ⱥ'],
        'e': ['3', '€', 'ɛ'],
        'i': ['1', '!', '|'],
        'o': ['0', '°', 'ꝋ'],
        's': ['5', '$', 'ꜱ'],
        't': ['7', '+', '†'],
        'b': ['8', 'ß'],
        'g': ['9', '&']
    };
    
    let result = '';
    for (let char of text.toLowerCase()) {
        if (symbolMap[char] && Math.random() < 0.4) {
            result += symbolMap[char][Math.floor(Math.random() * symbolMap[char].length)];
        } else {
            result += char;
        }
    }
    return result;
}

// Generate a simple name (15%)
function generateSimpleName(userName) {
    const styleKeys = Object.keys(styles);
    const randomStyle = styles[styleKeys[Math.floor(Math.random() * styleKeys.length)]];
    
    // Apply style to the name
    let styledName = applyStyle(userName, randomStyle);
    
    // Apply special characters with 20% chance per character
    styledName = applySpecialChars(styledName, 0.2);
    
    // 30% chance to add a symbol at the beginning or end (not in the middle)
    if (Math.random() < 0.3) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        if (Math.random() < 0.5) {
            styledName = symbol + " " + styledName;
        } else {
            styledName = styledName + " " + symbol;
        }
    }
    
    return styledName;
}

// Generate a premium name (25%) with 2-4 font styles
function generatePremiumName(userName) {
    const styleKeys = Object.keys(styles);
    
    // Choose a random decoration (optional)
    const decoration = complexDecorations[Math.floor(Math.random() * complexDecorations.length)];
    
    // Determine how many styles to use (2-4)
    const numStyles = Math.floor(Math.random() * 3) + 2;
    
    // Select random styles to use
    const selectedStyles = [];
    for (let i = 0; i < numStyles; i++) {
        const randomStyle = styles[styleKeys[Math.floor(Math.random() * styleKeys.length)]];
        if (!selectedStyles.includes(randomStyle)) {
            selectedStyles.push(randomStyle);
        }
    }
    
    // Apply different styles to different characters
    let styledName = "";
    for (let i = 0; i < userName.length; i++) {
        const char = userName[i];
        const styleIndex = i % selectedStyles.length;
        const selectedStyle = selectedStyles[styleIndex];
        
        styledName += applyStyle(char, selectedStyle);
    }
    
    // Apply special characters with 30% chance per character
    styledName = applySpecialChars(styledName, 0.3);
    
    // Add symbols at the beginning or end (not in the middle) with 50% chance
    if (Math.random() < 0.5) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        // Only add at the beginning or end
        if (Math.random() < 0.5) {
            styledName = symbol + " " + styledName;
        } else {
            styledName = styledName + " " + symbol;
        }
    }
    
    // 30% chance to use decoration
    if (Math.random() < 0.3) {
        styledName = decoration.prefix + styledName + decoration.suffix;
    }
    
    return styledName;
}

// Generate advanced name (10%)
function generateAdvancedName(userName) {
    const styleKeys = Object.keys(styles);
    const baseStyle = styles[styleKeys[Math.floor(Math.random() * styleKeys.length)]];
    
    let styledName = applyStyle(userName, baseStyle);
    
    // Apply advanced transformations
    if (Math.random() < 0.3) {
        styledName = applyMixedCase(styledName);
    }
    
    if (Math.random() < 0.2) {
        styledName = applyRandomSpacing(styledName);
    }
    
    if (Math.random() < 0.25) {
        styledName = applySymbolReplacement(styledName);
    }
    
    // Apply special characters with variable chance
    const specialChance = 0.3 + (Math.random() * 0.3);
    styledName = applySpecialChars(styledName, specialChance);
    
    // Add decorations
    const decoration = complexDecorations[Math.floor(Math.random() * complexDecorations.length)];
    const useDecoration = Math.random() < 0.6;
    
    if (useDecoration) {
        styledName = decoration.prefix + styledName + decoration.suffix;
    }
    
    // Add symbols with higher probability
    if (Math.random() < 0.7) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const position = Math.random();
        if (position < 0.4) {
            styledName = symbol + " " + styledName;
        } else if (position < 0.8) {
            styledName = styledName + " " + symbol;
        } else {
            styledName = symbol + " " + styledName + " " + symbol;
        }
    }
    
    return styledName;
}

// Generate the specific style from the example
function generateExampleStyle(userName) {
    // Convert to mixed case like the example: "ᴹᴿメY a h M a t i ☂️"
    let mixedName = "";
    for (let i = 0; i < userName.length; i++) {
        const char = userName[i];
        // Randomly make characters uppercase or lowercase
        if (Math.random() < 0.5) {
            mixedName += char.toUpperCase();
        } else {
            mixedName += char.toLowerCase();
        }
    }
    
    // Add small caps for first two characters if possible
    if (userName.length >= 2) {
        const firstTwo = userName.substring(0, 2);
        mixedName = applyStyle(firstTwo, styles.smallCaps) + mixedName.substring(2);
    }
    
    // Add Japanese symbol at the beginning or end (not in the middle)
    const japaneseSymbols = ["メ", "ツ"];
    const symbol = japaneseSymbols[Math.floor(Math.random() * japaneseSymbols.length)];
    
    // Only add at the beginning or end
    if (Math.random() < 0.5) {
        mixedName = symbol + " " + mixedName;
    } else {
        mixedName = mixedName + " " + symbol;
    }
    
    // Add emoji at the end
    const emojis = ["☂️", "✨", "🌟", "⚡", "🔥"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    mixedName += " " + emoji;
    
    return mixedName;
}

// Generate ultimate name (5%)
function generateUltimateName(userName) {
    // Combine multiple styles in creative ways
    const styleCount = Math.floor(Math.random() * 3) + 2;
    const selectedStyles = [];
    const styleKeys = Object.keys(styles);
    
    for (let i = 0; i < styleCount; i++) {
        const style = styles[styleKeys[Math.floor(Math.random() * styleKeys.length)]];
        if (!selectedStyles.includes(style)) {
            selectedStyles.push(style);
        }
    }
    
    let result = '';
    const words = userName.split(' ');
    
    words.forEach((word, index) => {
        let styledWord = '';
        const stylePattern = Math.floor(Math.random() * 3);
        
        switch (stylePattern) {
            case 0: // Alternate styles per character
                for (let i = 0; i < word.length; i++) {
                    const style = selectedStyles[i % selectedStyles.length];
                    styledWord += applyStyle(word[i], style);
                }
                break;
            case 1: // Random style per character
                for (let i = 0; i < word.length; i++) {
                    const style = selectedStyles[Math.floor(Math.random() * selectedStyles.length)];
                    styledWord += applyStyle(word[i], style);
                }
                break;
            case 2: // Gradient style (smooth transition)
                for (let i = 0; i < word.length; i++) {
                    const progress = i / (word.length - 1);
                    const styleIndex = Math.floor(progress * (selectedStyles.length - 1));
                    const style = selectedStyles[styleIndex];
                    styledWord += applyStyle(word[i], style);
                }
                break;
        }
        
        // Apply special effects
        if (Math.random() < 0.4) {
            styledWord = applySpecialChars(styledWord, 0.5);
        }
        
        result += styledWord;
        if (index < words.length - 1) {
            result += ' ';
        }
    });
    
    // Add ultimate decoration
    const ultimateDecorations = [
        { prefix: "♚✦♛", suffix: "♛✦♚" },
        { prefix: "꧁𓆩❀𓆪", suffix: "𓆩❀𓆪꧂" },
        { prefix: "«░▒▓█", suffix: "█▓▒░»" },
        { prefix: "≪☯≫", suffix: "≪☯≫" },
        { prefix: "〖█►", suffix: "◄█〗" }
    ];
    
    const decoration = ultimateDecorations[Math.floor(Math.random() * ultimateDecorations.length)];
    return decoration.prefix + result + decoration.suffix;
}

// Generate a special design name (5%)
function generateSpecialDesign(userName) {
    const design = specialDesigns[Math.floor(Math.random() * specialDesigns.length)];
    return design.generate(userName);
}

// Generate professional style name (40%)
function generateProfessionalName(userName) {
    const style = professionalNameStyles[Math.floor(Math.random() * professionalNameStyles.length)];
    return applyProfessionalStyle(userName, style.template);
}

// Generate a fancy name variation
function generateVariation(userName) {
    // 40% professional, 25% premium, 15% simple, 10% advanced, 5% example style, 5% special designs
    const randomValue = Math.random();
    
    if (randomValue < 0.4) {
        return generateProfessionalName(userName);
    } else if (randomValue < 0.65) {
        return generatePremiumName(userName);
    } else if (randomValue < 0.8) {
        return generateSimpleName(userName);
    } else if (randomValue < 0.9) {
        return generateAdvancedName(userName);
    } else if (randomValue < 0.95) {
        return generateExampleStyle(userName);
    } else {
        return generateSpecialDesign(userName);
    }
}

// Get reactions for a name
function getReactions(name) {
    if (!nameReactions[name]) {
        // Initialize with random likes and dislikes
        nameReactions[name] = {
            likes: Math.floor(Math.random() * 50),
            dislikes: Math.floor(Math.random() * 20),
            userLiked: false,
            userDisliked: false
        };
    }
    return nameReactions[name];
}

// Save reactions to localStorage
function saveReactions() {
    localStorage.setItem('nameReactions', JSON.stringify(nameReactions));
}

// Handle like action
function handleLike(name, likeBtn, dislikeBtn, likeCount, dislikeCount) {
    const reactions = getReactions(name);
    
    if (reactions.userLiked) {
        // Unlike
        reactions.likes--;
        reactions.userLiked = false;
        likeBtn.classList.remove('active');
    } else {
        // Like
        reactions.likes++;
        reactions.userLiked = true;
        likeBtn.classList.add('active');
        
        // If previously disliked, remove dislike
        if (reactions.userDisliked) {
            reactions.dislikes--;
            reactions.userDisliked = false;
            dislikeBtn.classList.remove('active');
        }
    }
    
    likeCount.textContent = reactions.likes;
    dislikeCount.textContent = reactions.dislikes;
    saveReactions();
}

// Handle dislike action
function handleDislike(name, likeBtn, dislikeBtn, likeCount, dislikeCount) {
    const reactions = getReactions(name);
    
    if (reactions.userDisliked) {
        // Remove dislike
        reactions.dislikes--;
        reactions.userDisliked = false;
        dislikeBtn.classList.remove('active');
    } else {
        // Dislike
        reactions.dislikes++;
        reactions.userDisliked = true;
        dislikeBtn.classList.add('active');
        
        // If previously liked, remove like
        if (reactions.userLiked) {
            reactions.likes--;
            reactions.userLiked = false;
            likeBtn.classList.remove('active');
        }
    }
    
    likeCount.textContent = reactions.likes;
    dislikeCount.textContent = reactions.dislikes;
    saveReactions();
}

// Share name to social media
function shareName(name, platform) {
    const encodedText = encodeURIComponent(`Check out this cool name: ${name}`);
    const encodedUrl = encodeURIComponent(window.location.href);
    
    let shareUrl = '';
    
    switch (platform) {
        case 'facebook':
            shareUrl = `${socialMedia.facebook.url}${encodedUrl}`;
            break;
        case 'twitter':
            shareUrl = `${socialMedia.twitter.url}${encodedText}`;
            break;
        case 'whatsapp':
            shareUrl = `${socialMedia.whatsapp.url}${encodedText}`;
            break;
        case 'telegram':
            shareUrl = `${socialMedia.telegram.url}${encodedText}`;
            break;
        case 'reddit':
            shareUrl = `${socialMedia.reddit.url}${encodedText}&url=${encodedUrl}`;
            break;
        default:
            // Default to copying to clipboard
            copyToClipboard(name);
            showNotification('Name copied to clipboard! You can now share it anywhere.');
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Show share options
function showShareOptions(name) {
    // Create share modal
    const shareModal = document.createElement('div');
    shareModal.className = 'share-modal';
    shareModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    
    const shareContent = document.createElement('div');
    shareContent.style.cssText = `
        background: white;
        padding: 20px;
        border-radius: 10px;
        max-width: 400px;
        width: 90%;
        text-align: center;
    `;
    
    const title = document.createElement('h3');
    title.textContent = 'Share Name';
    title.style.marginBottom = '15px';
    
    const namePreview = document.createElement('div');
    namePreview.textContent = name;
    namePreview.style.cssText = `
        background: #f5f5f5;
        padding: 10px;
        border-radius: 5px;
        margin: 10px 0;
        font-size: 1.2em;
        word-break: break-all;
    `;
    
    const platformsContainer = document.createElement('div');
    platformsContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin: 20px 0;
    `;
    
    // Create platform buttons
    Object.keys(socialMedia).forEach(platform => {
        const platformBtn = document.createElement('button');
        platformBtn.textContent = socialMedia[platform].name;
        platformBtn.style.cssText = `
            padding: 10px;
            border: none;
            border-radius: 5px;
            background: ${socialMedia[platform].color};
            color: white;
            cursor: pointer;
            font-size: 12px;
        `;
        platformBtn.addEventListener('click', () => {
            shareName(name, platform);
            document.body.removeChild(shareModal);
        });
        platformsContainer.appendChild(platformBtn);
    });
    
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy to Clipboard';
    copyBtn.style.cssText = `
        padding: 10px 20px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;
    `;
    copyBtn.addEventListener('click', () => {
        copyToClipboard(name);
        document.body.removeChild(shareModal);
    });
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Close';
    closeBtn.style.cssText = `
        padding: 10px 20px;
        background: #6c757d;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;
    `;
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(shareModal);
    });
    
    shareContent.appendChild(title);
    shareContent.appendChild(namePreview);
    shareContent.appendChild(platformsContainer);
    shareContent.appendChild(copyBtn);
    shareContent.appendChild(closeBtn);
    shareModal.appendChild(shareContent);
    
    document.body.appendChild(shareModal);
    
    // Close modal when clicking outside
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            document.body.removeChild(shareModal);
        }
    });
}

// Create a result card
function createResultCard(variation) {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    const nameElement = document.createElement('div');
    nameElement.className = 'result-name';
    nameElement.textContent = variation;
    
    // Get reactions for this name
    const reactions = getReactions(variation);
    
    // Create reaction buttons container
    const reactionContainer = document.createElement('div');
    reactionContainer.className = 'reaction-container';
    reactionContainer.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 10px 0;
    `;
    
    // Like button
    const likeBtn = document.createElement('button');
    likeBtn.className = `reaction-btn like-btn ${reactions.userLiked ? 'active' : ''}`;
    likeBtn.innerHTML = '👍';
    likeBtn.style.cssText = `
        padding: 5px 10px;
        border: 1px solid #ddd;
        background: ${reactions.userLiked ? '#e3f2fd' : 'white'};
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    `;
    
    const likeCount = document.createElement('span');
    likeCount.className = 'like-count';
    likeCount.textContent = reactions.likes;
    
    // Dislike button
    const dislikeBtn = document.createElement('button');
    dislikeBtn.className = `reaction-btn dislike-btn ${reactions.userDisliked ? 'active' : ''}`;
    dislikeBtn.innerHTML = '👎';
    dislikeBtn.style.cssText = `
        padding: 5px 10px;
        border: 1px solid #ddd;
        background: ${reactions.userDisliked ? '#ffebee' : 'white'};
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    `;
    
    const dislikeCount = document.createElement('span');
    dislikeCount.className = 'dislike-count';
    dislikeCount.textContent = reactions.dislikes;
    
    // Add event listeners for reactions
    likeBtn.addEventListener('click', () => {
        handleLike(variation, likeBtn, dislikeBtn, likeCount, dislikeCount);
    });
    
    dislikeBtn.addEventListener('click', () => {
        handleDislike(variation, likeBtn, dislikeBtn, likeCount, dislikeCount);
    });
    
    // Assemble reaction container
    likeBtn.appendChild(likeCount);
    dislikeBtn.appendChild(dislikeCount);
    reactionContainer.appendChild(likeBtn);
    reactionContainer.appendChild(dislikeBtn);
    
    // Create action buttons container
    const actionContainer = document.createElement('div');
    actionContainer.className = 'action-container';
    actionContainer.style.cssText = `
        display: flex;
        gap: 10px;
        margin-top: 10px;
    `;
    
    // Copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
    copyBtn.style.cssText = `
        padding: 8px 15px;
        border: none;
        background: #007bff;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        flex: 1;
    `;
    
    copyBtn.addEventListener('click', () => {
        copyToClipboard(variation);
    });
    
    // Share button
    const shareBtn = document.createElement('button');
    shareBtn.className = 'share-btn';
    shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> Share';
    shareBtn.style.cssText = `
        padding: 8px 15px;
        border: none;
        background: #28a745;
        color: white;
        border-radius: 5px;
        cursor: pointer;
        flex: 1;
    `;
    
    shareBtn.addEventListener('click', () => {
        showShareOptions(variation);
    });
    
    actionContainer.appendChild(copyBtn);
    actionContainer.appendChild(shareBtn);
    
    // Assemble card
    card.appendChild(nameElement);
    card.appendChild(reactionContainer);
    card.appendChild(actionContainer);
    
    return card;
}

// Generate multiple name variations
function generateNames(initial = false) {
    const userName = nameInput.value.trim() || "User";
    
    if (initial) {
        resultsContainer.innerHTML = '';
        generatedCount = 0;
        currentName = userName;
        allGeneratedNames = [];
    }
    
    // Generate 6 names at a time
    for (let i = 0; i < 6; i++) {
        const variation = generateVariation(userName);
        const card = createResultCard(variation);
        resultsContainer.appendChild(card);
        generatedCount++;
        allGeneratedNames.push(variation);
    }
    
    // Hide loading indicator if we have enough names
    if (generatedCount >= 30) {
        loadingIndicator.style.display = 'none';
    } else {
        loadingIndicator.style.display = 'block';
    }
}

// Copy text to clipboard
function copyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    // Add to copy history
    copyHistory.unshift({
        text: text,
        timestamp: new Date().toLocaleTimeString()
    });
    
    // Keep only last 10 items
    if (copyHistory.length > 10) {
        copyHistory.pop();
    }
    
    // Show notification
    showNotification(`✓ Copied: ${text.substring(0, 20)}${text.length > 20 ? '...' : ''}`);
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Check if we need to generate more names on scroll
function checkScroll() {
    if (isGenerating) return;
    
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const threshold = 500; // pixels from bottom
    
    if (scrollPosition >= pageHeight - threshold) {
        isGenerating = true;
        setTimeout(() => {
            generateNames();
            isGenerating = false;
        }, 500);
    }
}

// Search and filter functionality
function filterResults(searchTerm) {
    const cards = resultsContainer.querySelectorAll('.result-card');
    cards.forEach(card => {
        const name = card.querySelector('.result-name').textContent.toLowerCase();
        if (name.includes(searchTerm.toLowerCase())) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize advanced features
function initializeAdvancedFeatures() {
    // Add search input if it doesn't exist
    if (!document.getElementById('searchInput')) {
        const searchInput = document.createElement('input');
        searchInput.id = 'searchInput';
        searchInput.placeholder = 'Search generated names...';
        searchInput.className = 'search-input';
        searchInput.style.cssText = `
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #ccc;
        `;
        
        searchInput.addEventListener('input', (e) => {
            filterResults(e.target.value);
        });
        
        resultsContainer.parentNode.insertBefore(searchInput, resultsContainer);
    }
}

// Event listeners
generateBtn.addEventListener('click', () => {
    generateNames(true);
    setTimeout(initializeAdvancedFeatures, 100);
});

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateNames(true);
        setTimeout(initializeAdvancedFeatures, 100);
    }
});

// Scroll event listener for auto-generation
window.addEventListener('scroll', checkScroll);

// Generate initial names with a sample name
window.addEventListener('load', () => {
    nameInput.value = "Alex";
    generateNames(true);
    setTimeout(initializeAdvancedFeatures, 100);
});

console.log('Unicode Name Generator loaded successfully with professional styles!');
