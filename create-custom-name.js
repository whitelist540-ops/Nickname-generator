// Virtual Keyboard for Custom Name Creation
class VirtualKeyboard {
    constructor() {
        this.currentText = '';
        this.currentTab = 'fonts';
        this.currentFontCategory = 'basic';
        this.currentEmojiCategory = 'faces';
        this.init();
    }

    init() {
        this.bindEvents();
        this.generateFontKeys();
        this.generateSymbolKeys();
        this.generateEmojiKeys();
        this.generateDecorationKeys();
        this.updatePreview();
    }

    bindEvents() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // Category switching
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchFontCategory(e.target.dataset.category);
            });
        });

        document.querySelectorAll('.emoji-category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchEmojiCategory(e.target.dataset.category);
            });
        });

        // Control buttons
        document.getElementById('backspaceBtn').addEventListener('click', () => {
            this.backspace();
        });

        document.getElementById('spaceBtn').addEventListener('click', () => {
            this.addText(' ');
        });

        document.getElementById('enterBtn').addEventListener('click', () => {
            this.addText('\n');
        });

        document.getElementById('clearAllBtn').addEventListener('click', () => {
            this.clearAll();
        });

        document.getElementById('copyPreviewBtn').addEventListener('click', () => {
            this.copyToClipboard();
        });

        document.getElementById('resetPreviewBtn').addEventListener('click', () => {
            this.clearAll();
        });

        // Advanced controls
        document.getElementById('addTextBtn').addEventListener('click', () => {
            const text = document.getElementById('textInput').value;
            if (text) {
                this.addText(text);
                document.getElementById('textInput').value = '';
            }
        });

        document.querySelectorAll('.transform-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.applyTransform(e.target.dataset.transform);
            });
        });

        // Enter key for text input
        document.getElementById('textInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('addTextBtn').click();
            }
        });
    }

    switchTab(tabName) {
        this.currentTab = tabName;
        
        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        
        // Show active tab content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        document.getElementById(`${tabName}Tab`).classList.add('active');
    }

    switchFontCategory(category) {
        this.currentFontCategory = category;
        
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.generateFontKeys();
    }

    switchEmojiCategory(category) {
        this.currentEmojiCategory = category;
        
        document.querySelectorAll('.emoji-category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.generateEmojiKeys();
    }

    generateFontKeys() {
        const container = document.getElementById('fontsKeyboard');
        container.innerHTML = '';

        const fontSets = {
            basic: [
                { name: 'Bold', chars: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳' },
                { name: 'Italic', chars: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻' },
                { name: 'Script', chars: '𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏' }
            ],
            fancy: [
                { name: 'Cursive', chars: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃' },
                { name: 'Fraktur', chars: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷' },
                { name: 'Double', chars: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫' }
            ],
            special: [
                { name: 'Monospace', chars: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣' },
                { name: 'Circled', chars: 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ' },
                { name: 'Squared', chars: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉' }
            ],
            asian: [
                { name: 'Square', chars: '卂乃匚ᗪ乇下Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ҝ尺丂ｲㄩᐯ山乂ㄚ乙' },
                { name: 'Bold', chars: 'ᗩᗷᑕᗪᗴᖴᘜᕼᎥᒍᛕᒪᗰᑎᗝᑭᑫᖇᔕ丅ᑌᐯᗯ᙭ᖻᘔ' },
                { name: 'Magic', chars: 'ꪖꪜꪀꪗꫀꪶᦔꫝ꠸ꪊꪶꪊꪑꪊꪮᖰꪇꪹꪊꪻꪊꪜꪹꪗꪗꪗ' }
            ]
        };

        const currentSet = fontSets[this.currentFontCategory] || fontSets.basic;
        
        currentSet.forEach(fontSet => {
            // Add font set name as a header
            const header = document.createElement('div');
            header.className = 'key-btn';
            header.style.gridColumn = '1 / -1';
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            header.style.color = 'white';
            header.style.fontSize = '0.8rem';
            header.textContent = fontSet.name;
            header.onclick = null;
            container.appendChild(header);

            // Add characters
            for (let char of fontSet.chars) {
                const key = this.createKeyButton(char, 'font-key');
                container.appendChild(key);
            }
        });
    }

    generateSymbolKeys() {
        const container = document.getElementById('symbolsKeyboard');
        container.innerHTML = '';

        const symbols = [
            '★', '☆', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰',
            '♥', '♡', '❤', '❥', '❣', '♤', '♢', '♧', '♠', '♣', '♦', '♢',
            '☯', '⚡', '🔥', '💫', '🌟', '⭐', '✨', '🎮', '⚔️', '🛡️', '💎', '🕊️',
            '💀', '🐉', '🐲', '🌙', '☀️', '🌺', '🌼', '🍀', '🦋', '🦅', '🦁', '🐺',
            'メ', 'ツ', '亗', '♚', '♛', '⚚', '𓂀', 'ꕤ', '𒊹', '⟢', '⌬', '⍟',
            '⎈', '⋆', '༄', '𖤓', '𓋼', '■', '◈', '卐', 'ᛟ', '𒀱', 'ꕥ', '𖣘',
            '☂️', '🎵', '🎶', '🌈', '🌊', '🌪️', '❄️', '💧', '☄️', '🌑', '🌒', '🌓'
        ];

        symbols.forEach(symbol => {
            const key = this.createKeyButton(symbol, 'symbol-key');
            container.appendChild(key);
        });
    }

    generateEmojiKeys() {
        const container = document.getElementById('emojisKeyboard');
        container.innerHTML = '';

        const emojiCategories = {
            faces: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏'],
            animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗'],
            objects: ['⌚', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️', '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭'],
            symbols: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈']
        };

        const currentEmojis = emojiCategories[this.currentEmojiCategory] || emojiCategories.faces;
        
        currentEmojis.forEach(emoji => {
            const key = this.createKeyButton(emoji, 'emoji-key');
            key.classList.add('emoji-key');
            container.appendChild(key);
        });
    }

    generateDecorationKeys() {
        const container = document.getElementById('decorationsKeyboard');
        container.innerHTML = '';

        const decorations = [
            { name: 'Brackets 1', value: '【Text】' },
            { name: 'Brackets 2', value: '『Text』' },
            { name: 'Double Brackets', value: '⦑Text⦒' },
            { name: 'Stars', value: '★彡 Text 彡★' },
            { name: 'Crown', value: '♛ Text ♛' },
            { name: 'Royal', value: '👑 Text 👑' },
            { name: 'Flower', value: '✿.｡ Text .:* ☆' },
            { name: 'Bubble', value: '°🫧• Text •🫧°' },
            { name: 'Arrow', value: '⇶✴ Text ❈' },
            { name: 'Cloud', value: '☁♡ Text ♡☁' },
            { name: 'Fire', value: '🔥 Text 🔥' },
            { name: 'Dragon', value: '꧁𓊈 Text 𓊉꧂' },
            { name: 'Gothic', value: '༺ Text ༻' },
            { name: 'Modern', value: '《 Text 》' },
            { name: 'Elegant', value: '❝ Text ❞' },
            { name: 'Magic', value: '✦ Text ✦' }
        ];

        decorations.forEach(deco => {
            const key = document.createElement('button');
            key.className = 'key-btn decoration-key';
            key.innerHTML = `<div style="font-size: 0.8rem; line-height: 1.2;">${deco.name}</div><div style="font-size: 0.7rem; opacity: 0.8;">${deco.value}</div>`;
            key.addEventListener('click', () => {
                this.wrapWithDecoration(deco.value);
            });
            container.appendChild(key);
        });
    }

    createKeyButton(content, className) {
        const key = document.createElement('button');
        key.className = `key-btn ${className}`;
        key.textContent = content;
        key.addEventListener('click', () => {
            this.addText(content);
        });
        return key;
    }

    addText(text) {
        this.currentText += text;
        this.updatePreview();
    }

    backspace() {
        this.currentText = this.currentText.slice(0, -1);
        this.updatePreview();
    }

    clearAll() {
        this.currentText = '';
        this.updatePreview();
        this.showNotification('Text cleared!');
    }

    wrapWithDecoration(template) {
        if (!this.currentText) {
            this.showNotification('Please add some text first!');
            return;
        }

        const placeholder = 'Text';
        if (template.includes(placeholder)) {
            this.currentText = template.replace(placeholder, this.currentText);
        } else {
            this.currentText = template + this.currentText;
        }
        
        this.updatePreview();
    }

    applyTransform(transformType) {
        if (!this.currentText) {
            this.showNotification('Please add some text first!');
            return;
        }

        switch (transformType) {
            case 'uppercase':
                this.currentText = this.currentText.toUpperCase();
                break;
            case 'lowercase':
                this.currentText = this.currentText.toLowerCase();
                break;
            case 'titlecase':
                this.currentText = this.currentText.replace(/\w\S*/g, txt => 
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
                break;
            case 'alternating':
                this.currentText = this.currentText.split('').map((char, i) => 
                    i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
                ).join('');
                break;
        }

        this.updatePreview();
    }

    updatePreview() {
        const preview = document.getElementById('namePreview');
        if (this.currentText) {
            preview.textContent = this.currentText;
            preview.style.color = '#333';
        } else {
            preview.textContent = 'Type something...';
            preview.style.color = '#6c757d';
        }
    }

    copyToClipboard() {
        if (!this.currentText) {
            this.showNotification('Please create a name first!');
            return;
        }

        navigator.clipboard.writeText(this.currentText).then(() => {
            this.showNotification('Name copied to clipboard!');
            
            // Track the copy event
            if (typeof gtag !== 'undefined') {
                gtag('event', 'custom_name_copied', {
                    'event_category': 'user_action',
                    'event_label': this.currentText.substring(0, 20)
                });
            }
        }).catch(err => {
            console.error('Failed to copy: ', err);
            this.showNotification('Failed to copy. Please try again.');
        });
    }

    showNotification(message) {
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        
        notificationText.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// Initialize the virtual keyboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new VirtualKeyboard();
    
    // Add some sample text to get started
    setTimeout(() => {
        const virtualKeyboard = new VirtualKeyboard();
        virtualKeyboard.addText('Your Name');
        virtualKeyboard.showNotification('Welcome! Start creating your custom name.');
    }, 1000);
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'c':
                e.preventDefault();
                document.getElementById('copyPreviewBtn').click();
                break;
            case 'Backspace':
                e.preventDefault();
                document.getElementById('clearAllBtn').click();
                break;
        }
    }
    
    // Backspace key
    if (e.key === 'Backspace' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        document.getElementById('backspaceBtn').click();
    }
    
    // Space key
    if (e.key === ' ' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('spaceBtn').click();
    }
});
