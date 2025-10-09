// Additional Unicode character maps for more text styles
const extendedStyles = {
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

// Merge extended styles with main styles
Object.assign(styles, extendedStyles);

// Enhanced special characters with more variations
const enhancedSpecialChars = {
    ...specialChars,
    // Additional special characters
    a: [...specialChars.a, "ǟ", "ǡ", "ã", "â", "ä", "å", "ą", "ɑ"],
    e: [...specialChars.e, "ė", "ë", "ê", "ě", "ę", "è", "é", "ē"],
    i: [...specialChars.i, "ï", "î", "ì", "í", "ī", "į", "ı"],
    o: [...specialChars.o, "ö", "ô", "õ", "ø", "ō", "ò", "ó", "œ"],
    u: [...specialChars.u, "ü", "û", "ù", "ú", "ū", "ů"],
    s: [...specialChars.s, "ṩ", "ṡ", "ṣ", "ŝ", "š", "ś", "ş"],
    r: [...specialChars.r, "ŗ", "ř", "ŕ", "ṙ", "ṛ", "ṝ"],
    n: [...specialChars.n, "ń", "ň", "ñ", "ņ", "ṅ", "ṇ"],
    // New characters for specific sounds
    th: ["þ", "ð", "ṯ", "ṱ"],
    sh: ["š", "ṩ", "ṣ", "ŝ"],
    ch: ["č", "ć", "ç", "ĉ", "ḉ"]
};

// Advanced complex decorations with more variations
const advancedDecorations = [
    // Mythical and magical themes
    { prefix: "♚✦", suffix: "✦♚" },
    { prefix: "♛♔", suffix: "♔♛" },
    { prefix: "☤⚚", suffix: "⚚☤" },
    { prefix: "𓂀", suffix: "𓂀" },
    { prefix: "ꕤ", suffix: "ꕤ" },
    { prefix: "𒊹", suffix: "𒊹" },
    
    // Modern and tech themes
    { prefix: "⟢⊶", suffix: "⊷⟣" },
    { prefix: "⌬", suffix: "⌬" },
    { prefix: "⍟", suffix: "⍟" },
    { prefix: "⎈", suffix: "⎈" },
    { prefix: "⚙️", suffix: "⚙️" },
    
    // Nature and elemental themes
    { prefix: "⋆⭒˚", suffix: "˚⭒⋆" },
    { prefix: "༄", suffix: "༄" },
    { prefix: "⊹₊⋆", suffix: "⋆₊⊹" },
    { prefix: "𖤓", suffix: "𖤓" },
    { prefix: "꧁𓋼", suffix: "𓋼꧂" },
    
    // Gaming and anime themes
    { prefix: "『★』", suffix: "『★』" },
    { prefix: "≪☆≫", suffix: "≪☆≫" },
    { prefix: "「■」", suffix: "「■」" },
    { prefix: "〖✦〗", suffix: "〖✦〗" },
    { prefix: "◈", suffix: "◈" },
    
    // Cultural and symbolic themes
    { prefix: "卐", suffix: "卐" },
    { prefix: "ᛟ", suffix: "ᛟ" },
    { prefix: "𒀱", suffix: "𒀱" },
    { prefix: "ꕥ", suffix: "ꕥ" },
    { prefix: "𖣘", suffix: "𖣘" }
];

// Merge with existing decorations
complexDecorations.push(...advancedDecorations);

// Extended symbols collection
const extendedSymbols = [
    ...symbols,
    "♚", "♛", "⚚", "𓂀", "ꕤ", "𒊹", "⟢", "⌬", "⍟", "⎈", "⋆", "༄", "𖤓", 
    "𓋼", "★", "☆", "■", "✦", "◈", "卐", "ᛟ", "𒀱", "ꕥ", "𖣘", "♠", "♣", "♦", "♥",
    "⚡", "🔥", "💧", "🌪️", "❄️", "🌙", "☀️", "⭐", "🌟", "✨", "💫", "☄️"
];

// Advanced special designs with more complexity
const advancedSpecialDesigns = [
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

// Merge with existing special designs
specialDesigns.push(...advancedSpecialDesigns);

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

// Enhanced generation functions
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
        const symbol = extendedSymbols[Math.floor(Math.random() * extendedSymbols.length)];
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

// Update the main generation function
function generateVariation(userName) {
    const randomValue = Math.random();
    
    if (randomValue < 0.25) {
        return generateSimpleName(userName);
    } else if (randomValue < 0.6) {
        return generatePremiumName(userName);
    } else if (randomValue < 0.75) {
        return generateAdvancedName(userName);
    } else if (randomValue < 0.85) {
        return generateExampleStyle(userName);
    } else if (randomValue < 0.95) {
        return generateSpecialDesign(userName);
    } else {
        return generateUltimateName(userName);
    }
}

// Add filtering and search functionality
let allGeneratedNames = [];

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

function sortResults(criteria) {
    const cards = Array.from(resultsContainer.querySelectorAll('.result-card'));
    
    cards.sort((a, b) => {
        const nameA = a.querySelector('.result-name').textContent;
        const nameB = b.querySelector('.result-name').textContent;
        
        switch (criteria) {
            case 'length':
                return nameA.length - nameB.length;
            case 'complexity':
                const complexityA = nameA.replace(/[a-zA-Z]/g, '').length;
                const complexityB = nameB.replace(/[a-zA-Z]/g, '').length;
                return complexityB - complexityA;
            default: // alphabetical
                return nameA.localeCompare(nameB);
        }
    });
    
    // Re-append sorted cards
    cards.forEach(card => resultsContainer.appendChild(card));
}

// Add these functions to your existing code
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

// Update the generateNames function to track all generated names
const originalGenerateNames = generateNames;
generateNames = function(initial = false) {
    originalGenerateNames(initial);
    
    if (initial) {
        allGeneratedNames = [];
    }
    
    // Track newly generated names
    const newCards = resultsContainer.querySelectorAll('.result-card');
    newCards.forEach(card => {
        const name = card.querySelector('.result-name').textContent;
        if (!allGeneratedNames.includes(name)) {
            allGeneratedNames.push(name);
        }
    });
    
    // Initialize advanced features after first generation
    if (initial) {
        setTimeout(initializeAdvancedFeatures, 100);
    }
};

// Enhanced copy functionality with history
const copyHistory = [];

function copyToClipboard(text) {
    // Original copy functionality
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
    
    // Show enhanced notification
    notification.textContent = `✓ Copied: ${text.substring(0, 20)}${text.length > 20 ? '...' : ''}`;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Export functionality
function exportNames() {
    const names = allGeneratedNames.join('\n');
    const blob = new Blob([names], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fancy-names.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Initialize enhanced features when page loads
window.addEventListener('load', function() {
    // Add export button
    const exportBtn = document.createElement('button');
    exportBtn.textContent = '📥 Export All Names';
    exportBtn.className = 'export-btn';
    exportBtn.style.cssText = `
        padding: 10px 20px;
        margin: 10px;
        background: #28a745;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    `;
    exportBtn.addEventListener('click', exportNames);
    
    // Insert export button near generate button
    generateBtn.parentNode.appendChild(exportBtn);
    
    // Enhanced notification styling
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    document.querySelector('.show').style.cssText = `
        opacity: 1;
        transform: translateX(0);
    `;
});

console.log('Enhanced Unicode Name Generator loaded with advanced features!');