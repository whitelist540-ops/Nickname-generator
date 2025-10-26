// Create Custom Name JavaScript - FIXED VERSION

// All the font styles from your main generator
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
    },
    smallSuperscript: {
        name: "Small Superscript",
        map: {
            a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ₑ", f: "𝒻", g: "ᵍ", h: "ₕ", i: "ᵢ", j: "ʲ",
            k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ", o: "ₒ", p: "ₚ", q: "𝓆", r: "ᵣ", s: "ₛ", t: "ₜ",
            u: "ᵤ", v: "ᵥ", w: "𝓌", x: "ₓ", y: "ᵧ", z: "𝓏",
            A: "ᴬ", B: "ᴮ", C: "ᶜ", D: "ᴰ", E: "ᴱ", F: "ᶠ", G: "ᴳ", H: "ᴴ", I: "ᴵ", J: "ᴶ",
            K: "ᴷ", L: "ᴸ", M: "ᴹ", N: "ᴺ", O: "ᴼ", P: "ᴾ", Q: "ᵠ", R: "ᴿ", S: "ˢ", T: "ᵀ",
            U: "ᵁ", V: "ⱽ", W: "ᵂ", X: "ˣ", Y: "ʸ", Z: "ᶻ"
        }
    },
    squareAsian: {
        name: "Square Asian",
        map: {
            a: "卂", b: "乃", c: "匚", d: "ᗪ", e: "乇", f: "下", g: "Ꮆ", h: "卄", i: "丨", j: "ﾌ",
            k: "Ӿ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩", q: "Ҝ", r: "尺", s: "丂", t: "ｲ",
            u: "ㄩ", v: "ㄩᐯ", w: "山", x: "乂", y: "ㄚ", z: "乙",
            A: "卂", B: "乃", C: "匚", D: "ᗪ", E: "乇", F: "下", G: "Ꮆ", H: "卄", I: "丨", J: "ﾌ",
            K: "Ӿ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩", Q: "Ҝ", R: "尺", S: "丂", T: "ｲ",
            U: "ㄩ", V: "ㄩᐯ", W: "山", X: "乂", Y: "ㄚ", Z: "乙"
        }
    },
    boldOutline: {
        name: "Bold Outline",
        map: {
            a: "ᗩ", b: "ᗷ", c: "ᑕ", d: "ᗪ", e: "ᗴ", f: "ᖴ", g: "ᘜ", h: "ᕼ", i: "Ꭵ", j: "ᒍ",
            k: "ᛕ", l: "ᒪ", m: "ᗰ", n: "ᑎ", o: "ᗝ", p: "ᑭ", q: "ᑫ", r: "ᖇ", s: "ᔕ", t: "丅",
            u: "ᑌ", v: "ᐯ", w: "ᗯ", x: "᙭", y: "ᖻ", z: "ᘔ",
            A: "ᗩ", B: "ᗷ", C: "ᑕ", D: "ᗪ", E: "ᗴ", F: "ᖴ", G: "ᘜ", H: "ᕼ", I: "Ꭵ", J: "ᒍ",
            K: "ᛕ", L: "ᒪ", M: "ᗰ", N: "ᑎ", O: "ᗝ", P: "ᑭ", Q: "ᑫ", R: "ᖇ", S: "ᔕ", T: "丅",
            U: "ᑌ", V: "ᐯ", W: "ᗯ", X: "᙭", Y: "ᖻ", Z: "ᘔ"
        }
    },
    greekMixed: {
        name: "Greek Mixed",
        map: {
            a: "Δ", b: "β", c: "ᄃ", d: "Đ", e: "Ξ", f: "Ғ", g: "G", h: "Ή", i: "Ϊ", j: "J",
            k: "Ҝ", l: "Ł", m: "M", n: "И", o: "Ø", p: "P", q: "Ҩ", r: "Я", s: "Ѕ", t: "Γ",
            u: "Ƭ", v: "Ц", w: "V", x: "Ɯ", y: "X", z: "Ϋ",
            A: "Δ", B: "β", C: "ᄃ", D: "Đ", E: "Ξ", F: "Ғ", G: "G", H: "Ή", I: "Ϊ", J: "J",
            K: "Ҝ", L: "Ł", M: "M", N: "И", O: "Ø", P: "P", Q: "Ҩ", R: "Я", S: "Ѕ", T: "Γ",
            U: "Ƭ", V: "Ц", W: "V", X: "Ɯ", Y: "X", Z: "Ϋ"
        }
    },
    bracketStyle1: {
        name: "Bracket Style 1",
        map: {
            a: "【a】", b: "【b】", c: "【c】", d: "【d】", e: "【e】", f: "【f】", g: "【g】", h: "【h】", i: "【i】", j: "【j】",
            k: "【k】", l: "【l】", m: "【m】", n: "【n】", o: "【o】", p: "【p】", q: "【q】", r: "【r】", s: "【s】", t: "【t】",
            u: "【u】", v: "【v】", w: "【w】", x: "【x】", y: "【y】", z: "【z】",
            A: "【A】", B: "【B】", C: "【C】", D: "【D】", E: "【E】", F: "【F】", G: "【G】", H: "【H】", I: "【I】", J: "【J】",
            K: "【K】", L: "【L】", M: "【M】", N: "【N】", O: "【O】", P: "【P】", Q: "【Q】", R: "【R】", S: "【S】", T: "【T】",
            U: "【U】", V: "【V】", W: "【W】", X: "【X】", Y: "【Y】", Z: "【Z】"
        }
    },
    bracketStyle2: {
        name: "Bracket Style 2",
        map: {
            a: "『a』", b: "『b』", c: "『c』", d: "『d』", e: "『e』", f: "『f』", g: "『g』", h: "『h』", i: "『i』", j: "『j】",
            k: "『k』", l: "『l』", m: "『m』", n: "『n』", o: "『o』", p: "『p』", q: "『q』", r: "『r』", s: "『s』", t: "『t』",
            u: "『u』", v: "『v』", w: "『w』", x: "『x』", y: "『y』", z: "『z』",
            A: "『A』", B: "『B』", C: "『C』", D: "『D』", E: "『E』", F: "『F』", G: "『G』", H: "『H』", I: "『I』", J: "『J】",
            K: "『K』", L: "『L』", M: "『M』", N: "『N』", O: "『O』", P: "『P』", Q: "『Q』", R: "『R』", S: "『S』", T: "『T』",
            U: "『U』", V: "『V』", W: "『W』", X: "『X』", Y: "『Y』", Z: "『Z』"
        }
    },
    doubleBracketStyle: {
        name: "Double Bracket Style",
        map: {
            a: "⦑a⦒", b: "⦑b⦒", c: "⦑c⦒", d: "⦑d⦒", e: "⦑e⦒", f: "⦑f⦒", g: "⦑g⦒", h: "⦑h⦒", i: "⦑i⦒", j: "⦑j⦒",
            k: "⦑k⦒", l: "⦑l⦒", m: "⦑m⦒", n: "⦑n⦒", o: "⦑o⦒", p: "⦑p⦒", q: "⦑q⦒", r: "⦑r⦒", s: "⦑s⦒", t: "⦑t⦒",
            u: "⦑u⦒", v: "⦑v⦒", w: "⦑w⦒", x: "⦑x⦒", y: "⦑y⦒", z: "⦑z⦒",
            A: "⦑A⦒", B: "⦑B⦒", C: "⦑C⦒", D: "⦑D⦒", E: "⦑E⦒", F: "⦑F⦒", G: "⦑G⦒", H: "⦑H⦒", I: "⦑I⦒", J: "⦑J⦒",
            K: "⦑K⦒", L: "⦑L⦒", M: "⦑M⦒", N: "⦑N⦒", O: "⦑O⦒", P: "⦑P⦒", Q: "⦑Q⦒", R: "⦑R⦒", S: "⦑S⦒", T: "⦑T⦒",
            U: "⦑U⦒", V: "⦑V⦒", W: "⦑W⦒", X: "⦑X⦒", Y: "⦑Y⦒", Z: "⦑Z⦒"
        }
    }
};

// ... (keep all your existing specialChars, prefixWords, additionalSymbols, symbols, complexDecorations)

// Global variables
let activeInputField = null;

// Initialize the virtual keyboard with all new tabs
function initializeVirtualKeyboard() {
    const keyboardTabs = document.getElementById('keyboardTabs');
    const keyboardContainer = document.getElementById('keyboardContainer');
    
    // Create tabs
    const tabs = [
        { id: 'fonts', name: 'Basic', content: generateFontsKeyboard },
        { id: 'symbols', name: 'Symbols', content: generateSymbolsKeyboard },
        { id: 'emoji', name: 'Emoji', content: generateEmojiKeyboard }
    ];
    
    tabs.forEach((tab, index) => {
        const tabElement = document.createElement('div');
        tabElement.className = `keyboard-tab ${index === 0 ? 'active' : ''}`;
        tabElement.textContent = tab.name;
        tabElement.dataset.tab = tab.id;
        
        tabElement.addEventListener('click', () => {
            // Remove active class from all tabs
            document.querySelectorAll('.keyboard-tab').forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tabElement.classList.add('active');
            // Generate content for this tab
            keyboardContainer.innerHTML = '';
            tab.content();
        });
        
        keyboardTabs.appendChild(tabElement);
    });
    
    // Generate initial content for the first tab
    tabs[0].content();
}

// Generate basic fonts keyboard (alphabet and numbers)
function generateFontsKeyboard() {
    const keyboardContainer = document.getElementById('keyboardContainer');
    const keyboardGrid = document.createElement('div');
    keyboardGrid.className = 'keyboard-grid';
    
    // Add regular alphabet first
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let char of alphabet) {
        const key = document.createElement('div');
        key.className = 'keyboard-key';
        key.textContent = char;
        key.addEventListener('click', () => insertCharacter(char));
        keyboardGrid.appendChild(key);
    }
    
    // Add numbers
    for (let i = 0; i <= 9; i++) {
        const key = document.createElement('div');
        key.className = 'keyboard-key';
        key.textContent = i;
        key.addEventListener('click', () => insertCharacter(i.toString()));
        keyboardGrid.appendChild(key);
    }
    
    // Add space key
    const spaceKey = document.createElement('div');
    spaceKey.className = 'keyboard-key';
    spaceKey.textContent = 'Space';
    spaceKey.style.gridColumn = 'span 2';
    spaceKey.addEventListener('click', () => insertCharacter(' '));
    keyboardGrid.appendChild(spaceKey);
    
    // Add backspace key
    const backspaceKey = document.createElement('div');
    backspaceKey.className = 'keyboard-key';
    backspaceKey.innerHTML = '<i class="fas fa-backspace"></i>';
    backspaceKey.style.gridColumn = 'span 2';
    backspaceKey.addEventListener('click', backspaceCharacter);
    keyboardGrid.appendChild(backspaceKey);
    
    // Add clear key
    const clearKey = document.createElement('div');
    clearKey.className = 'keyboard-key';
    clearKey.innerHTML = '<i class="fas fa-trash"></i> Clear';
    clearKey.style.gridColumn = 'span 2';
    clearKey.addEventListener('click', clearInputField);
    keyboardGrid.appendChild(clearKey);
    
    keyboardContainer.appendChild(keyboardGrid);
}

// Generate symbols keyboard
function generateSymbolsKeyboard() {
    const keyboardContainer = document.getElementById('keyboardContainer');
    const keyboardGrid = document.createElement('div');
    keyboardGrid.className = 'keyboard-grid';
    
    const basicSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'];
    
    basicSymbols.forEach(symbol => {
        const key = document.createElement('div');
        key.className = 'keyboard-key symbol';
        key.textContent = symbol;
        key.addEventListener('click', () => insertCharacter(symbol));
        keyboardGrid.appendChild(key);
    });
    
    // Add special keys
    const spaceKey = document.createElement('div');
    spaceKey.className = 'keyboard-key';
    spaceKey.textContent = 'Space';
    spaceKey.style.gridColumn = 'span 2';
    spaceKey.addEventListener('click', () => insertCharacter(' '));
    keyboardGrid.appendChild(spaceKey);
    
    const backspaceKey = document.createElement('div');
    backspaceKey.className = 'keyboard-key';
    backspaceKey.innerHTML = '<i class="fas fa-backspace"></i>';
    backspaceKey.style.gridColumn = 'span 2';
    backspaceKey.addEventListener('click', backspaceCharacter);
    keyboardGrid.appendChild(backspaceKey);
    
    keyboardContainer.appendChild(keyboardGrid);
}

// Generate emoji keyboard
function generateEmojiKeyboard() {
    const keyboardContainer = document.getElementById('keyboardContainer');
    const keyboardGrid = document.createElement('div');
    keyboardGrid.className = 'keyboard-grid';
    
    const emojis = ['😀', '😂', '🥰', '😎', '🤩', '😍', '🙂', '🤗', '😊', '😇', '👍', '👎', '👏', '🙌', '🤝', '✌️', '🤞', '🤟', '👌', '🤙', '❤️', '💕', '🔥', '⭐', '✨', '🎉', '💯', '🎂', '🏆', '🎁'];
    
    emojis.forEach(emoji => {
        const key = document.createElement('div');
        key.className = 'keyboard-key emoji';
        key.textContent = emoji;
        key.addEventListener('click', () => insertCharacter(emoji));
        keyboardGrid.appendChild(key);
    });
    
    // Add special keys
    const spaceKey = document.createElement('div');
    spaceKey.className = 'keyboard-key';
    spaceKey.textContent = 'Space';
    spaceKey.style.gridColumn = 'span 2';
    spaceKey.addEventListener('click', () => insertCharacter(' '));
    keyboardGrid.appendChild(spaceKey);
    
    const backspaceKey = document.createElement('div');
    backspaceKey.className = 'keyboard-key';
    backspaceKey.innerHTML = '<i class="fas fa-backspace"></i>';
    backspaceKey.style.gridColumn = 'span 2';
    backspaceKey.addEventListener('click', backspaceCharacter);
    keyboardGrid.appendChild(backspaceKey);
    
    keyboardContainer.appendChild(keyboardGrid);
}

// Insert character into active input field - FIXED VERSION
function insertCharacter(character) {
    if (activeInputField) {
        const start = activeInputField.selectionStart;
        const end = activeInputField.selectionEnd;
        const value = activeInputField.value;
        
        // Insert the character at cursor position
        activeInputField.value = value.substring(0, start) + character + value.substring(end);
        
        // Move cursor to after inserted character
        const newPosition = start + character.length;
        activeInputField.selectionStart = activeInputField.selectionEnd = newPosition;
        
        // Focus back to input field
        activeInputField.focus();
        
        // Trigger input event
        const inputEvent = new Event('input', { bubbles: true });
        activeInputField.dispatchEvent(inputEvent);
    }
}

// Backspace character from active input field - FIXED VERSION
function backspaceCharacter() {
    if (activeInputField) {
        const start = activeInputField.selectionStart;
        const end = activeInputField.selectionEnd;
        const value = activeInputField.value;
        
        if (start === end && start > 0) {
            // Delete single character before cursor
            activeInputField.value = value.substring(0, start - 1) + value.substring(end);
            activeInputField.selectionStart = activeInputField.selectionEnd = start - 1;
        } else if (start !== end) {
            // Delete selected text
            activeInputField.value = value.substring(0, start) + value.substring(end);
            activeInputField.selectionStart = activeInputField.selectionEnd = start;
        }
        
        // Focus back to input field
        activeInputField.focus();
        
        // Trigger input event
        const inputEvent = new Event('input', { bubbles: true });
        activeInputField.dispatchEvent(inputEvent);
    }
}

// Clear input field
function clearInputField() {
    if (activeInputField) {
        activeInputField.value = '';
        activeInputField.focus();
        
        // Trigger input event
        const inputEvent = new Event('input', { bubbles: true });
        activeInputField.dispatchEvent(inputEvent);
    }
}

// Copy to clipboard function
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    showNotification(`✓ Copied: ${text.substring(0, 20)}${text.length > 20 ? '...' : ''}`);
}

// Show notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Set the default active input field
    activeInputField = document.getElementById('userName');
    
    // Initialize virtual keyboard
    initializeVirtualKeyboard();
    
    // Add event listeners to input fields
    const inputFields = document.querySelectorAll('.keyboard-input');
    inputFields.forEach(input => {
        input.addEventListener('focus', function() {
            // Remove active class from all inputs
            inputFields.forEach(field => field.classList.remove('active-field'));
            // Add active class to focused input
            this.classList.add('active-field');
            activeInputField = this;
        });
    });
    
    // Initially focus the userName input
    if (document.getElementById('userName')) {
        document.getElementById('userName').focus();
    }
});
