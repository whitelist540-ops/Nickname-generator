// Unicode Name Generator - Complete Enhanced Version
// Includes all font styles, infinite scroll, and comprehensive blog section

// ==================== UNICODE CHARACTER MAPS ====================
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

 fancyFont: {
     name: "fancy",
      map: {
         'A': '么', 'B': '乃', 'C': '匚', 'D': 'ⅅ', 'E': '乇', 'F': '千', 'G': 'Ꮆ',
         'H': '卄', 'I': '丨', 'J': 'ﾌ', 'K': 'Ҝ', 'L': 'ㄥ', 'M': '爪', 'N': 'ℕ',
         'O': '口', 'P': 'ℙ', 'Q': 'Ꝗ', 'R': '尺', 'S': '丂', 'T': 'ㄒ', 'U': 'ㄩ',
         'V': '√', 'W': '山', 'X': '乂', 'Y': 'ㄚ', 'Z': '乙',
         'a': '么', 'b': '乃', 'c': '亡', 'd': 'り', 'e': '乇', 'f': 'ｷ', 'g': 'Ǥ',
         'h': 'ん', 'i': 'ﾉ', 'j': 'ʝ', 'k': 'қ', 'l': 'ﾚ', 'm': 'м', 'n': 'η',
         'o': 'の', 'p': 'ρ', 'q': 'φ', 'r': 'я', 's': '丂', 't': 'ｲ', 'u': 'ひ',
         'v': '√', 'w': 'ω', 'x': 'ﾒ', 'y': 'ﾘ', 'z': '乙'
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

// ==================== SPECIAL CHARACTER SUBSTITUTIONS ====================
const specialChars = {
    a: ["ą", "ค", "ά", "ặ", "ꫀ", "α", "ａ", "₳", "ᴀ", "ᵃ", "ǟ", "ǡ", "ã", "â", "ä", "å", "ą", "ɑ"],
    b: ["ḃ", "β", "ḅ", "ḇ", "ｂ", "ʙ", "ᵇ"],
    c: ["č", "ć", "ç", "ĉ", "ḉ", "ｃ", "ᴄ", "ᶜ"],
    d: ["ď", "ḋ", "ḍ", "ḑ", "ｄ", "ᴅ", "ᵈ"],
    e: ["ē", "ė", "ę", "ع", "ɇ", "ε", "ｅ", "ᴇ", "ᵉ", "Ɛ", "ė", "ë", "ê", "ě", "ę", "è", "é", "ē", "𝜚" },],
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
    v: ["ṽ", "ṿ", "ｖ", "ᴠ", "ᵛ", "ʋ", "ⱽ", "𝜗"],
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
    th: ["þ", "ð", "ṯ", "ṱ"],
    sh: ["š", "ṩ", "ṣ", "ŝ"],
    ch: ["č", "ć", "ç", "ĉ", "ḉ"]
};

// ==================== PREFIX WORDS ====================
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

// ==================== COMPLEX DECORATIONS ====================
const complexDecorations = [
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
    { prefix: "━ 𝗚ҽϞυ𝑖Ϟҽ :･ﾟ✧", suffix: "" },
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
    { prefix: "ᴵᴬᴹ", suffix: "ᥫ᭡" },
    { prefix: "⋆. 𐙚˚࿔", suffix: "𝜗𝜚˚⋆" },
    { prefix: "⚚", suffix: "ᶠᶸᶜᵏᵧₒᵤ" },
    { prefix: "𓂃 𓈒𓏸", suffix: "ᶻ 𝘇 𐰁" },
    { prefix: "ᡕᠵデᡁ᠊╾━", suffix: "𐙚⋆" },
    { prefix: "˖ ֹ੭୧", suffix: "⊹ ࣪ ⑅" },
    { prefix: "ᥫ᭡.ִֶָ𓂃", suffix: "𐙚⋆" },
    { prefix: "︵", suffix: "◌Ⳋ𝅄" },
];

// ==================== SYMBOLS AND EMOJIS ====================
const symbols = ["☯", "⚡", "🔥", "💫", "🌟", "⭐", "✨", "🎮", "⚔️", "🛡️", "💎", "🕊️", "💀", "🐉", "🐲", "🌙", "☀️", "🌺", "🌼", "🍀", "🦋", "🦅", "🦁", "🐺", "メ", "ツ", "亗", "♚", "♛", "⚚", "𓂀", "ꕤ", "𒊹", "⟢", "⌬", "⍟", "⎈", "⋆", "༄", "𖤓", "𓋼", "★", "☆", "■", "✦", "◈", "卐", "ᛟ", "𒀱", "ꕥ", "𖣘", "♠", "♣", "♦", "♥", "⚡", "🔥", "💧", "🌪️", "❄️", "🌙", "☀️", "⭐", "🌟", "✨", "💫", "☄️"];

// ==================== SOCIAL MEDIA PLATFORMS ====================
const socialMedia = {
    facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u=https://www.stylenick.com",
        color: "#1877f2"
    },
    twitter: {
        name: "Twitter",
        url: "https://twitter.com/intent/tweet?url=https://www.stylenick.com&text=Check%20out%20StyleNick!",
        color: "#1da1f2"
    },
    whatsapp: {
        name: "WhatsApp",
        url: "https://api.whatsapp.com/send?text=Check%20out%20StyleNick!%20https://www.stylenick.com",
        color: "#25d366"
    },
    instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/",
        color: "#e4405f"
    },
    telegram: {
        name: "Telegram",
        url: "https://t.me/share/url?url=https://www.stylenick.com&text=Check%20out%20StyleNick%20-%20Stylish%20Name%20Generator!",
        color: "#0088cc"
    },
    reddit: {
        name: "Reddit",
        url: "https://www.reddit.com/submit?url=https://www.stylenick.com&title=StyleNick%20-%20Stylish%20Name%20Generator",
        color: "#ff4500"
    }
};

// ==================== DOM ELEMENTS ====================
const nameInput = document.getElementById('nameInput');
const generateBtn = document.getElementById('generateBtn');
const resultsContainer = document.getElementById('resultsContainer');
const notification = document.getElementById('notification');
const loadingIndicator = document.getElementById('loadingIndicator');
const infiniteScrollIndicator = document.getElementById('infiniteScrollIndicator');

// ==================== GLOBAL VARIABLES ====================
let isGenerating = false;
let currentName = "";
let generatedCount = 0;
let allGeneratedNames = [];
const copyHistory = [];
let nameReactions = JSON.parse(localStorage.getItem('nameReactions')) || {};
let usedStyles = new Set();
let usedProfessionalStyles = new Set();
let usedSpecialDesigns = new Set();

// ==================== CORE FUNCTIONS ====================

// Apply style to a word - preserves case
function applyStyle(word, style) {
    let result = '';
    for (let char of word) {
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            result += style.map[char] || char;
        } else {
            result += style.map[char] || char;
        }
    }
    return result;
}

// Apply special characters to a word
function applySpecialChars(word, chance) {
    let result = '';
    for (let char of word) {
        if (Math.random() < chance && specialChars[char]) {
            const options = specialChars[char];
            result += options[Math.floor(Math.random() * options.length)];
        } else {
            result += char;
        }
    }
    return result;
}

// Advanced text transformations
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

// Style management functions
function getRandomStyle() {
    const styleKeys = Object.keys(styles);
    if (usedStyles.size >= styleKeys.length * 0.7) {
        usedStyles.clear();
    }
    
    let availableStyles = styleKeys.filter(key => !usedStyles.has(key));
    if (availableStyles.length === 0) {
        availableStyles = styleKeys;
    }
    
    const randomStyleKey = availableStyles[Math.floor(Math.random() * availableStyles.length)];
    usedStyles.add(randomStyleKey);
    
    return styles[randomStyleKey];
}

// Different name generation types
function generateSimpleName(userName) {
    const randomStyle = getRandomStyle();
    let styledName = applyStyle(userName, randomStyle);
    styledName = applySpecialChars(styledName, 0.2);
    
    if (Math.random() < 0.3) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        styledName = Math.random() < 0.5 ? symbol + " " + styledName : styledName + " " + symbol;
    }
    
    return styledName;
}

function generatePremiumName(userName) {
    const numStyles = Math.floor(Math.random() * 3) + 2;
    const selectedStyles = [];
    
    for (let i = 0; i < numStyles; i++) {
        const randomStyle = getRandomStyle();
        if (!selectedStyles.includes(randomStyle)) {
            selectedStyles.push(randomStyle);
        }
    }
    
    let styledName = "";
    for (let i = 0; i < userName.length; i++) {
        const char = userName[i];
        const styleIndex = i % selectedStyles.length;
        const selectedStyle = selectedStyles[styleIndex];
        styledName += applyStyle(char, selectedStyle);
    }
    
    styledName = applySpecialChars(styledName, 0.3);
    
    if (Math.random() < 0.5) {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        styledName = Math.random() < 0.5 ? symbol + " " + styledName : styledName + " " + symbol;
    }
    
    if (Math.random() < 0.3) {
        const decoration = complexDecorations[Math.floor(Math.random() * complexDecorations.length)];
        styledName = decoration.prefix + styledName + decoration.suffix;
    }
    
    return styledName;
}

function generateAdvancedName(userName) {
    const baseStyle = getRandomStyle();
    let styledName = applyStyle(userName, baseStyle);
    
    if (Math.random() < 0.3) styledName = applyMixedCase(styledName);
    if (Math.random() < 0.2) styledName = applyRandomSpacing(styledName);
    if (Math.random() < 0.25) styledName = applySymbolReplacement(styledName);
    
    const specialChance = 0.3 + (Math.random() * 0.3);
    styledName = applySpecialChars(styledName, specialChance);
    
    const useDecoration = Math.random() < 0.6;
    if (useDecoration) {
        const decoration = complexDecorations[Math.floor(Math.random() * complexDecorations.length)];
        styledName = decoration.prefix + styledName + decoration.suffix;
    }
    
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

function generateExampleStyle(userName) {
    let mixedName = "";
    for (let i = 0; i < userName.length; i++) {
        const char = userName[i];
        mixedName += Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase();
    }
    
    if (userName.length >= 2) {
        const firstTwo = userName.substring(0, 2);
        mixedName = applyStyle(firstTwo, styles.smallCaps) + mixedName.substring(2);
    }
    
    const japaneseSymbols = ["メ", "ツ"];
    const symbol = japaneseSymbols[Math.floor(Math.random() * japaneseSymbols.length)];
    mixedName = Math.random() < 0.5 ? symbol + " " + mixedName : mixedName + " " + symbol;
    
    const emojis = ["☂️", "✨", "🌟", "⚡", "🔥"];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    mixedName += " " + emoji;
    
    return mixedName;
}

function generateUltimateName(userName) {
    const styleCount = Math.floor(Math.random() * 3) + 2;
    const selectedStyles = [];
    
    for (let i = 0; i < styleCount; i++) {
        const style = getRandomStyle();
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
            case 0:
                for (let i = 0; i < word.length; i++) {
                    const style = selectedStyles[i % selectedStyles.length];
                    styledWord += applyStyle(word[i], style);
                }
                break;
            case 1:
                for (let i = 0; i < word.length; i++) {
                    const style = selectedStyles[Math.floor(Math.random() * selectedStyles.length)];
                    styledWord += applyStyle(word[i], style);
                }
                break;
            case 2:
                for (let i = 0; i < word.length; i++) {
                    const progress = i / (word.length - 1);
                    const styleIndex = Math.floor(progress * (selectedStyles.length - 1));
                    const style = selectedStyles[styleIndex];
                    styledWord += applyStyle(word[i], style);
                }
                break;
        }
        
        if (Math.random() < 0.4) {
            styledWord = applySpecialChars(styledWord, 0.5);
        }
        
        result += styledWord;
        if (index < words.length - 1) {
            result += ' ';
        }
    });
    
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

function generateNewStyleName(userName) {
    const newStyleKeys = ['smallSuperscript', 'squareAsian', 'boldOutline', 'greekMixed', 'bracketStyle1', 'bracketStyle2', 'doubleBracketStyle'];
    const randomStyleKey = newStyleKeys[Math.floor(Math.random() * newStyleKeys.length)];
    const selectedStyle = styles[randomStyleKey];
    
    let styledName = applyStyle(userName, selectedStyle);
    
    if (Math.random() < 0.4) {
        const decoration = complexDecorations[Math.floor(Math.random() * complexDecorations.length)];
        styledName = decoration.prefix + styledName + decoration.suffix;
    }
    
    return styledName;
}

// Main variation generator
function generateVariation(userName) {
    const randomValue = Math.random();
    
    if (randomValue < 0.35) {
        return generatePremiumName(userName);
    } else if (randomValue < 0.55) {
        return generateSimpleName(userName);
    } else if (randomValue < 0.70) {
        return generateAdvancedName(userName);
    } else if (randomValue < 0.85) {
        return generateNewStyleName(userName);
    } else if (randomValue < 0.95) {
        return generateExampleStyle(userName);
    } else {
        return generateUltimateName(userName);
    }
}

// ==================== REACTION AND INTERACTION FUNCTIONS ====================

function getReactions(name) {
    if (!nameReactions[name]) {
        nameReactions[name] = {
            likes: Math.floor(Math.random() * 50),
            dislikes: Math.floor(Math.random() * 20),
            userLiked: false,
            userDisliked: false
        };
    }
    return nameReactions[name];
}

function saveReactions() {
    localStorage.setItem('nameReactions', JSON.stringify(nameReactions));
}

function handleLike(name, likeBtn, dislikeBtn, likeCount, dislikeCount) {
    const reactions = getReactions(name);
    
    if (reactions.userLiked) {
        reactions.likes--;
        reactions.userLiked = false;
        likeBtn.classList.remove('active');
    } else {
        reactions.likes++;
        reactions.userLiked = true;
        likeBtn.classList.add('active');
        
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

function handleDislike(name, likeBtn, dislikeBtn, likeCount, dislikeCount) {
    const reactions = getReactions(name);
    
    if (reactions.userDisliked) {
        reactions.dislikes--;
        reactions.userDisliked = false;
        dislikeBtn.classList.remove('active');
    } else {
        reactions.dislikes++;
        reactions.userDisliked = true;
        dislikeBtn.classList.add('active');
        
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

// ==================== SHARING FUNCTIONS ====================

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
            copyToClipboard(name);
            showNotification('Name copied to clipboard! You can now share it anywhere.');
            return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

function showShareOptions(name) {
    const shareModal = document.createElement('div');
    shareModal.className = 'share-modal';
    
    const shareContent = document.createElement('div');
    
    const title = document.createElement('h3');
    title.textContent = 'Share Name';
    
    const namePreview = document.createElement('div');
    namePreview.className = 'name-preview';
    namePreview.textContent = name;
    
    const platformsContainer = document.createElement('div');
    platformsContainer.className = 'share-platforms';
    
    Object.keys(socialMedia).forEach(platform => {
        const platformBtn = document.createElement('button');
        platformBtn.className = 'share-platform-btn';
        platformBtn.textContent = socialMedia[platform].name;
        platformBtn.style.backgroundColor = socialMedia[platform].color;
        platformBtn.addEventListener('click', () => {
            shareName(name, platform);
            document.body.removeChild(shareModal);
        });
        platformsContainer.appendChild(platformBtn);
    });
    
    const modalActions = document.createElement('div');
    modalActions.className = 'modal-actions';
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'modal-btn';
    copyBtn.textContent = 'Copy to Clipboard';
    copyBtn.style.backgroundColor = '#007bff';
    copyBtn.addEventListener('click', () => {
        copyToClipboard(name);
        document.body.removeChild(shareModal);
    });
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-btn';
    closeBtn.textContent = 'Close';
    closeBtn.style.backgroundColor = '#6c757d';
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(shareModal);
    });
    
    modalActions.appendChild(copyBtn);
    modalActions.appendChild(closeBtn);
    
    shareContent.appendChild(title);
    shareContent.appendChild(namePreview);
    shareContent.appendChild(platformsContainer);
    shareContent.appendChild(modalActions);
    shareModal.appendChild(shareContent);
    
    document.body.appendChild(shareModal);
    
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
            document.body.removeChild(shareModal);
        }
    });
}

// ==================== UI COMPONENTS ====================

function createResultCard(variation) {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    const nameElement = document.createElement('div');
    nameElement.className = 'result-name';
    nameElement.textContent = variation;
    
    const reactions = getReactions(variation);
    
    const reactionContainer = document.createElement('div');
    reactionContainer.className = 'reaction-container';
    
    const likeBtn = document.createElement('button');
    likeBtn.className = `reaction-btn like-btn ${reactions.userLiked ? 'active' : ''}`;
    likeBtn.innerHTML = '👍';
    
    const likeCount = document.createElement('span');
    likeCount.className = 'like-count';
    likeCount.textContent = reactions.likes;
    
    const dislikeBtn = document.createElement('button');
    dislikeBtn.className = `reaction-btn dislike-btn ${reactions.userDisliked ? 'active' : ''}`;
    dislikeBtn.innerHTML = '👎';
    
    const dislikeCount = document.createElement('span');
    dislikeCount.className = 'dislike-count';
    dislikeCount.textContent = reactions.dislikes;
    
    likeBtn.addEventListener('click', () => {
        handleLike(variation, likeBtn, dislikeBtn, likeCount, dislikeCount);
    });
    
    dislikeBtn.addEventListener('click', () => {
        handleDislike(variation, likeBtn, dislikeBtn, likeCount, dislikeCount);
    });
    
    likeBtn.appendChild(likeCount);
    dislikeBtn.appendChild(dislikeCount);
    reactionContainer.appendChild(likeBtn);
    reactionContainer.appendChild(dislikeBtn);
    
    const actionContainer = document.createElement('div');
    actionContainer.className = 'action-container';
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy';
    
    copyBtn.addEventListener('click', () => {
        copyToClipboard(variation);
    });
    
    const shareBtn = document.createElement('button');
    shareBtn.className = 'share-btn';
    shareBtn.innerHTML = '<i class="fas fa-share-alt"></i> Share';
    
    shareBtn.addEventListener('click', () => {
        showShareOptions(variation);
    });
    
    actionContainer.appendChild(copyBtn);
    actionContainer.appendChild(shareBtn);
    
    card.appendChild(nameElement);
    card.appendChild(reactionContainer);
    card.appendChild(actionContainer);
    
    return card;
}

// ==================== CORE APPLICATION FUNCTIONS ====================

function generateNames(initial = false) {
    const userName = nameInput.value.trim() || "User";
    
    if (initial) {
        resultsContainer.innerHTML = '';
        generatedCount = 0;
        currentName = userName;
        allGeneratedNames = [];
        usedStyles.clear();
        usedProfessionalStyles.clear();
        usedSpecialDesigns.clear();
        
        // Show loading indicator
        loadingIndicator.style.display = 'block';
        
        // Scroll to results after a short delay
        setTimeout(() => {
            resultsContainer.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    
    // Generate names
    for (let i = 0; i < 6; i++) {
        const variation = generateVariation(userName);
        
        if (!allGeneratedNames.includes(variation)) {
            const card = createResultCard(variation);
            resultsContainer.appendChild(card);
            generatedCount++;
            allGeneratedNames.push(variation);
        } else {
            i--;
        }
    }
    
    // Hide loading indicator when enough names are generated
    if (generatedCount >= 30) {
        loadingIndicator.style.display = 'none';
    } else {
        loadingIndicator.style.display = 'block';
    }
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    copyHistory.unshift({
        text: text,
        timestamp: new Date().toLocaleTimeString()
    });
    
    if (copyHistory.length > 10) {
        copyHistory.pop();
    }
    
    showNotification(`✓ Copied: ${text.substring(0, 20)}${text.length > 20 ? '...' : ''}`);
}

function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

function checkScroll() {
    if (isGenerating) return;
    
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const threshold = 500;
    
    if (scrollPosition >= pageHeight - threshold) {
        isGenerating = true;
        setTimeout(() => {
            generateNames();
            isGenerating = false;
        }, 500);
    }
}

// ==================== EVENT LISTENERS ====================

generateBtn.addEventListener('click', () => {
    generateNames(true);
});

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateNames(true);
    }
});

window.addEventListener('scroll', checkScroll);

// ==================== INITIALIZATION ====================

window.addEventListener('load', () => {
    // nameInput.value = ""; // Keep input empty
    addBlogSection();
    
    // Show blog section initially
    const blogSection = document.getElementById('blogSection');
    if (blogSection) {
        blogSection.classList.remove('hidden');
    }
});

// Blog section function
function addBlogSection() {
    const blogSection = document.createElement('div');
    blogSection.id = 'blogSection';
    blogSection.className = 'blog-section';
    blogSection.innerHTML = `
        <div style="max-width: 1000px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 30px; font-size: 2.5em; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">📝 Creative Name Generation Guide</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 10px; backdrop-filter: blur(10px);">
                    <h3 style="color: #ffd700; margin-bottom: 15px;">🎯 What is a Nickname?</h3>
                    <p style="line-height: 1.6; font-size: 16px;">
                        A nickname is a substitute for the proper name of a familiar person, place, or thing. 
                        In the digital age, nicknames have evolved into creative usernames and gamertags that 
                        represent your identity online across various platforms.
                    </p>

                    </div>


<div style="max-width: 1000px; margin: 0 auto;">
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 10px; backdrop-filter: blur(10px);">
                    <h3 style="color: #ffd700; margin-bottom: 15px;">✨ How to Enjoy Infinite Stylish Nicknames</h3>
    <p style="line-height: 1.6; font-size: 16px;">
        It's super easy! Just type your name in the <strong>input bar</strong> above, click <strong>Generate</strong>, 
        and enjoy <strong>infinite stylish nicknames</strong> instantly. Each click gives you new, unique, 
        and creative nickname ideas for gaming, social media, or fun.
    </p>
    <p style="line-height: 1.6; font-size: 16px;">
        You can <strong>copy</strong> your favorite nicknames, <strong>save</strong> them for later, 
        or <strong>share</strong> with friends. The possibilities are endless!
    </p>
    <p style="line-height: 1.6; font-size: 16px;">
        Try it now on our <a href="https://www.stylenick.com" style="color: #ffd700; text-decoration: underline;">Nickname Generator</a> and see how many creative nicknames you can discover!
    </p>

                    
                </div>
                
                <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 10px; backdrop-filter: blur(10px);">
                    <h3 style="color: #ffd700; margin-bottom: 15px;">🚀 How to Use This Generator</h3>
                    <ol style="line-height: 1.8; font-size: 15px; padding-left: 20px;">
                        <li><strong>Enter</strong> your name in the input field</li>
                        <li><strong>Click</strong> "Generate Names" button</li>
                        <li><strong>Scroll</strong> to see infinite variations</li>
                        <li><strong>Rate</strong> names with 👍/👎 buttons</li>
                        <li><strong>Copy</strong> your favorite names instantly</li>
                        <li><strong>Share</strong> directly to social media</li>
                    </ol>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 10px; backdrop-filter: blur(10px);">
                    <h3 style="color: #ffd700; margin-bottom: 15px;">🎮 Where to Use Creative Names</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <div>
                            <h4 style="color: #4cd964; margin: 10px 0;">Gaming</h4>
                            <ul style="font-size: 14px;">
                                <li>Fortnite, PUBG</li>
                                <li>Minecraft, Roblox</li>
                                <li>Steam, Epic Games</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: #007aff; margin: 10px 0;">Social Media</h4>
                            <ul style="font-size: 14px;">
                                <li>Instagram, TikTok</li>
                                <li>Discord, Twitter</li>
                                <li>YouTube, Twitch</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 10px; backdrop-filter: blur(10px); grid-column: 1 / -1;">
                    <h3 style="color: #ffd700; margin-bottom: 15px;">✨ Pro Tips for Best Results</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        <div style="text-align: center;">
                            <div style="font-size: 2em; margin-bottom: 10px;">🎨</div>
                            <p>Mix different font styles for unique looks</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; margin-bottom: 10px;">⚡</div>
                            <p>Add symbols and emojis for extra flair</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; margin-bottom: 10px;">📱</div>
                            <p>Ensure your name is memorable and readable</p>
                        </div>
                        <div style="text-align: center;">
                            <div style="font-size: 2em; margin-bottom: 10px;">🌟</div>
                            <p>Create a name that truly represents you</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid rgba(255,255,255,0.3);">
                <p style="font-size: 1.2em; font-style: italic; margin: 0;">
                    "Your username is your digital identity - make it unforgettable!"
                </p>
            </div>
        </div>
    `;
    
    const container = document.querySelector('.container');
    const resultsSection = document.getElementById('resultsContainer');
    container.insertBefore(blogSection, resultsSection);
}

console.log('Enhanced Unicode Name Generator loaded successfully!');



// Sidebar functionality
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebarClose = document.querySelector('.sidebar-close');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

// Toggle sidebar
sidebarToggle.addEventListener('click', function() {
    sidebar.classList.add('active');
});

sidebarClose.addEventListener('click', function() {
    sidebar.classList.remove('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Modal functionality
modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
});

// Close modal when clicking outside
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

// Sidebar content functions
function showContact() {
    modalTitle.textContent = 'Contact Us';
    modalBody.innerHTML = `
        <h4>Get In Touch</h4>
        <p>We'd love to hear from you! Here's how you can reach us:</p>
        
        <h4>Email</h4>
        <p>notmy8623@gmail.com</p>
        
        <h4>Response Time</h4>
        <p>We typically respond within 24-48 hours.</p>
        
        <h4>Feedback</h4>
        <p>Your feedback helps us improve our name generator. Let us know what features you'd like to see!</p>
    `;
    modal.classList.add('active');
    sidebar.classList.remove('active');
}

function showPrivacy() {
    modalTitle.textContent = 'Privacy Policy';
    modalBody.innerHTML = `
        <h4>Information We Collect</h4>
        <p>We value your privacy. Our name generator operates with minimal data collection:</p>
        <ul>
            <li>Names you input for generation (not stored)</li>
            <li>Usage statistics for improvement</li>
            <li>Browser information for compatibility</li>
        </ul>
        
        <h4>Data Usage</h4>
        <p>Your data is used solely for:</p>
        <ul>
            <li>Generating nickname variations</li>
            <li>Improving our service quality</li>
            <li>Ensuring proper functionality</li>
        </ul>
        
        <h4>Third Parties</h4>
        <p>We don't sell or share your personal information with third parties.</p>
    `;
    modal.classList.add('active');
    sidebar.classList.remove('active');
}

function showTerms() {
    modalTitle.textContent = 'Terms & Conditions';
    modalBody.innerHTML = `
        <h4>Service Usage</h4>
        <p>By using our nickname generator, you agree to:</p>
        <ul>
            <li>Use the service for personal purposes only</li>
            <li>Not abuse or overload our servers</li>
            <li>Respect our intellectual property</li>
        </ul>
        
        <h4>Generated Content</h4>
        <p>All generated names are suggestions only. We're not responsible for:</p>
        <ul>
            <li>Name availability on platforms</li>
            <li>Name appropriateness for your use case</li>
            <li>Any issues arising from name usage</li>
        </ul>
        
        <h4>Service Availability</h4>
        <p>We strive for 99.9% uptime but can't guarantee uninterrupted service.</p>
    `;
    modal.classList.add('active');
    sidebar.classList.remove('active');
}

function showAbout() {
    modalTitle.textContent = 'About Us';
    modalBody.innerHTML = `
        <h4>Our Mission</h4>
        <p>We created this stylish name generator to help people express their creativity and find unique identities online.</p>
        
        <h4>What We Offer</h4>
        <ul>
            <li>100+ font styles and variations</li>
            <li>Unicode character support</li>
            <li>Real-time name generation</li>
            <li>Mobile-friendly design</li>
            <li>Completely free service</li>
        </ul>
        
        <h4>Technology</h4>
        <p>Built with modern web technologies including HTML5, CSS3, and JavaScript for the best user experience.</p>
        
        <h4>Always Improving</h4>
        <p>We regularly update our generator with new styles and features based on user feedback.</p>
    `;
    modal.classList.add('active');
    sidebar.classList.remove('active');
}
