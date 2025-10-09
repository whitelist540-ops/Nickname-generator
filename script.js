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
    }
};

// Special Unicode character substitutions
const specialChars = {
    a: ["ą", "ค", "ά", "ặ", "ꫀ", "α", "ａ", "₳", "ᴀ", "ᵃ"],
    b: ["ḃ", "β", "ḅ", "ḇ", "ｂ", "ʙ", "ᵇ"],
    c: ["č", "ć", "ç", "ĉ", "ḉ", "ｃ", "ᴄ", "ᶜ"],
    d: ["ď", "ḋ", "ḍ", "ḑ", "ｄ", "ᴅ", "ᵈ"],
    e: ["ē", "ė", "ę", "ع", "ɇ", "ε", "ｅ", "ᴇ", "ᵉ", "Ɛ"],
    f: ["ḟ", "ƒ", "ｆ", "ꜰ", "ᶠ", "Ƒ"],
    g: ["ğ", "ġ", "ģ", "ḡ", "ｇ", "ɢ", "ᵍ", "Ɠ"],
    h: ["ħ", "ђ", "ℏ", "ɦ", "ｈ", "ʜ", "ʰ", "ℋ"],
    i: ["ï", "ī", "į", "ι", "ɨ", "ł", "ｉ", "ɪ", "ⁱ", "ℐ"],
    j: ["ĵ", "ј", "ｊ", "ᴊ", "ʲ", "Ɉ"],
    k: ["ķ", "ḳ", "ƙ", "ｋ", "ᴋ", "ᵏ", "ʞ"],
    l: ["ł", "ĺ", "ľ", "ļ", "ḷ", "ｌ", "ʟ", "ˡ", "ℒ"],
    m: ["ṁ", "ṃ", "ｍ", "ᴍ", "ᵐ", "ɱ", "ℳ"],
    n: ["ñ", "ń", "ň", "ή", "ɳ", "ₙ", "ｎ", "₦", "ɴ", "ⁿ", "ℕ"],
    o: ["ō", "ö", "ø", "ơ", "ǿ", "ο", "๏", "ₒ", "ᴏ", "ᵒ", "Ø"],
    p: ["ṗ", "ṕ", "ｐ", "ᴘ", "ᵖ"],
    q: ["ｑ", "ǫ", "ᑫ"],
    r: ["ř", "ŕ", "я", "ʀ", "ɾ", "ｒ", "ʳ", "Ř"],
    s: ["š", "ś", "ş", "ѕ", "ร", "ｓ", "ꜱ", "ˢ", "ʂ"],
    t: ["ť", "ţ", "τ", "ŧ", "ƚ", "ｔ", "Ŧ", "ᴛ", "ᵗ", "ʈ", "₮"],
    u: ["ū", "ü", "ų", "ứ", "ᥙ", "υ", "ｕ", "ᴜ", "ᵘ", "ʊ"],
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
};

// Complex decorations - Updated with your examples
const complexDecorations = [
    { prefix: "━ 𝗚ҽϞυ𝑖Ϟҽ𝓓ҽℊḭ𝔫ʄ๏𝑟 :･ﾟ✧", suffix: "" },
    { prefix: "", suffix: "|₂₂₀" },
    { prefix: "꧁☬⋆", suffix: "⋆☬꧂" },
    { prefix: "꧁༒", suffix: "༒꧂" },
    { prefix: "༺", suffix: "༻ᴳᵒᵈ" },
    { prefix: "꧁༺", suffix: "༻꧂" },
    { prefix: "꧁༺", suffix: "༻꧂" },
    { prefix: "꧁༺", suffix: "༻꧂" },
    { prefix: "꧁☬", suffix: "☬꧂" },
    { prefix: "꧁༒☬", suffix: "☬༒꧂" },
    { prefix: "꧁༺༒༻", suffix: "༺༒༻꧂" },
    { prefix: "꧁𓊈𒆜", suffix: "𒆜𓊉꧂" },
    { prefix: "꧁☯༺", suffix: "༻☯꧂" },
    { prefix: "꧁☬✞", suffix: "✞☬꧂" },
    { prefix: "❝ ", suffix: " ❞" },
    { prefix: "❝★", suffix: "★❞" },
    { prefix: "❝☆", suffix: "☆❞" },
    { prefix: "꧁🕊️⃝", suffix: "🕊️⃝࿐" },
    { prefix: "🎃⟫", suffix: "⟪🎃" },
    { prefix: "🦋⟫", suffix: "⟪🦋" },
    { prefix: "⭐⟫", suffix: "⟪⭐" },
    { prefix: "🔥⟫", suffix: "⟪🔥" },
    { prefix: "~♥~", suffix: "~♥~" },
    { prefix: "♡⋆", suffix: "⋆♡" },
    { prefix: "♡💫", suffix: "💫♡" },
    { prefix: "𓆩💜𓆪", suffix: "𓆩💜𓆪" },
    { prefix: "𓆩🖤𓆪", suffix: "𓆩🖤𓆪" },
    { prefix: "𓆩💎𓆪", suffix: "𓆩💎𓆪" },
    { prefix: "𓆩🔥𓆪", suffix: "𓆩🔥𓆪" },
    { prefix: "𓆩⚡𓆪", suffix: "𓆩⚡𓆪" },
    { prefix: "☬🎮", suffix: "🎮☬" },
    { prefix: "⚔️", suffix: "⚔️" },
    { prefix: "🎯⟫", suffix: "⟪🎯" },
    { prefix: "★彡(", suffix: ")彡★" },
    { prefix: "★彡", suffix: "彡★" },
    { prefix: "☆彡", suffix: "彡☆" },
    { prefix: "✦✧", suffix: "✧✦" },
    { prefix: "『", suffix: "』" },
    { prefix: "《", suffix: "》" },
    { prefix: "⎝", suffix: "⎠" },
    { prefix: "【", suffix: "】" },
    { prefix: "⌜", suffix: "⌝" },
    { prefix: "⧼", suffix: "⧽" },
    { prefix: "♛👑", suffix: "👑♛" },
    { prefix: "♛", suffix: "♛" },
    { prefix: "♕", suffix: "♕" },
    { prefix: "👑", suffix: "👑" },
    { prefix: "✿", suffix: "✿" },
    { prefix: "🌸", suffix: "🌸" },
    { prefix: "🌹", suffix: "🌹" },
    { prefix: "《.•°~[", suffix: "]~°•.》" },
    { prefix: "◦•○•◦", suffix: "◦•○•◦" },
    { prefix: "✧･ﾟ", suffix: "ﾟ･✧" },
    { prefix: "⪻⪼", suffix: "⪻⪼" },
];

// Emojis and symbols - Only for beginning/end
const symbols = ["☯", "⚡", "🔥", "💫", "🌟", "⭐", "✨", "🎮", "⚔️", "🛡️", "💎", "🕊️", "💀", "🐉", "🐲", "🌙", "☀️", "🌺", "🌼", "🍀", "🦋", "🦅", "🦁", "🐺", "メ", "ツ"];

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

// Generate a simple name (30%)
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

// Generate a premium name (70%) with 2-4 font styles
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

// Generate a fancy name variation
function generateVariation(userName) {
    // 30% simple, 60% premium, 10% example style
    const randomValue = Math.random();
    
    if (randomValue < 0.3) {
        return generateSimpleName(userName);
    } else if (randomValue < 0.9) {
        return generatePremiumName(userName);
    } else {
        return generateExampleStyle(userName);
    }
}

// Create a result card
function createResultCard(variation) {
    const card = document.createElement('div');
    card.className = 'result-card';
    
    const nameElement = document.createElement('div');
    nameElement.className = 'result-name';
    nameElement.textContent = variation;
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i class="far fa-copy"></i> Copy Name';
    
    copyBtn.addEventListener('click', () => {
        copyToClipboard(variation);
    });
    
    card.appendChild(nameElement);
    card.appendChild(copyBtn);
    
    return card;
}

// Generate multiple name variations
function generateNames(initial = false) {
    const userName = nameInput.value.trim() || "User";
    
    if (initial) {
        resultsContainer.innerHTML = '';
        generatedCount = 0;
        currentName = userName;
    }
    
    // Generate 6 names at a time
    for (let i = 0; i < 6; i++) {
        const variation = generateVariation(userName);
        const card = createResultCard(variation);
        resultsContainer.appendChild(card);
        generatedCount++;
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
    
    // Show notification
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

// Event listeners
generateBtn.addEventListener('click', () => {
    generateNames(true);
});

nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateNames(true);
    }
});

// Scroll event listener for auto-generation
window.addEventListener('scroll', checkScroll);

// Generate initial names with a sample name
window.addEventListener('load', () => {
    nameInput.value = "Alex";
    generateNames(true);
});