// Virtual Keyboard for Custom Name Creation - Complete Version
class VirtualKeyboard {
    constructor() {
        this.currentText = '';
        this.currentTab = 'fonts';
        this.currentFontCategory = 'basic';
        this.currentSymbolCategory = 'popular';
        this.currentEmojiCategory = 'faces';
        this.currentDecorationCategory = 'brackets';
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
                const categoryType = e.target.closest('.font-categories') ? 'font' :
                                  e.target.closest('.symbol-categories') ? 'symbol' :
                                  e.target.closest('.decoration-categories') ? 'decoration' : 'font';
                
                if (categoryType === 'font') {
                    this.switchFontCategory(e.target.dataset.category);
                } else if (categoryType === 'symbol') {
                    this.switchSymbolCategory(e.target.dataset.category);
                } else if (categoryType === 'decoration') {
                    this.switchDecorationCategory(e.target.dataset.category);
                }
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

        document.getElementById('clearBtn').addEventListener('click', () => {
            this.clearAll();
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

        // Direct text input
        document.getElementById('applyTextBtn').addEventListener('click', () => {
            const text = document.getElementById('directTextInput').value;
            if (text) {
                this.currentText = text;
                this.updatePreview();
                this.showNotification('Text applied successfully!');
            }
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

        document.querySelectorAll('.effect-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.applyEffect(e.target.dataset.effect);
            });
        });

        // Enter key for text inputs
        document.getElementById('directTextInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('applyTextBtn').click();
            }
        });

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
        
        document.querySelectorAll('.font-categories .category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.font-categories [data-category="${category}"]`).classList.add('active');
        
        this.generateFontKeys();
    }

    switchSymbolCategory(category) {
        this.currentSymbolCategory = category;
        
        document.querySelectorAll('.symbol-categories .category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.symbol-categories [data-category="${category}"]`).classList.add('active');
        
        this.generateSymbolKeys();
    }

    switchEmojiCategory(category) {
        this.currentEmojiCategory = category;
        
        document.querySelectorAll('.emoji-category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.generateEmojiKeys();
    }

    switchDecorationCategory(category) {
        this.currentDecorationCategory = category;
        
        document.querySelectorAll('.decoration-categories .category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`.decoration-categories [data-category="${category}"]`).classList.add('active');
        
        this.generateDecorationKeys();
    }

    generateFontKeys() {
        const container = document.getElementById('fontsKeyboard');
        container.innerHTML = '';

        // All font styles from main.js
        const fontCategories = {
            basic: [
                {
                    name: 'Normal Text',
                    chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
                },
                {
                    name: 'Bold',
                    chars: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳'
                },
                {
                    name: 'Italic',
                    chars: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻'
                }
            ],
            fancy: [
                {
                    name: 'Bold Italic',
                    chars: '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯'
                },
                {
                    name: 'Script',
                    chars: '𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏'
                },
                {
                    name: 'Cursive',
                    chars: '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃'
                }
            ],
            special: [
                {
                    name: 'Fraktur',
                    chars: '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷'
                },
                {
                    name: 'Double Struck',
                    chars: '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫'
                },
                {
                    name: 'Monospace',
                    chars: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣'
                }
            ],
            asian: [
                {
                    name: 'Square Asian',
                    chars: '卂乃匚ᗪ乇下Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ҝ尺丂ｲㄩᐯ山乂ㄚ乙'
                },
                {
                    name: 'Bold Outline',
                    chars: 'ᗩᗷᑕᗪᗴᖴᘜᕼᎥᒍᛕᒪᗰᑎᗝᑭᑫᖇᔕ丅ᑌᐯᗯ᙭ᖻᘔ'
                },
                {
                    name: 'Magic',
                    chars: 'ꪖꪜꪀꪗꫀꪶᦔꫝ꠸ꪊꪶꪊꪑꪊꪮᖰꪇꪹꪊꪻꪊꪜꪹꪗꪗꪗ'
                }
            ],
            all: [
                {
                    name: 'Small Caps',
                    chars: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ'
                },
                {
                    name: 'Circled',
                    chars: 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ'
                },
                {
                    name: 'Squared',
                    chars: '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'
                },
                {
                    name: 'Inverted',
                    chars: '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉'
                }
            ]
        };

        const currentSets = fontCategories[this.currentFontCategory] || fontCategories.basic;
        
        currentSets.forEach(fontSet => {
            // Add font set name as a header
            const header = document.createElement('div');
            header.className = 'font-header';
            header.textContent = fontSet.name;
            container.appendChild(header);

            // Add characters
            for (let char of fontSet.chars) {
                const key = this.createKeyButton(char, 'font-key');
                if (fontSet.name === 'Small Caps') {
                    key.classList.add('small-font');
                }
                container.appendChild(key);
            }
        });
    }

    generateSymbolKeys() {
        const container = document.getElementById('symbolsKeyboard');
        container.innerHTML = '';

        const symbolCategories = {
            popular: ['★', '☆', '✦', '✧', '♥', '♡', '❤', '☯', '⚡', '🔥', '💫', '🌟', '⭐', '✨', '🎮', '⚔️', '🛡️', '💎', '🕊️', '💀'],
            stars: ['★', '☆', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '⋆', '⭒', '⍟', '⌑'],
            hearts: ['♥', '♡', '❤', '❥', '❣', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '🖤', '🤍', '🤎'],
            arrows: ['←', '→', '↑', '↓', '↔', '↕', '⇒', '⇐', '⇑', '⇓', '➡', '⬅', '⬆', '⬇', '↗', '↘', '↙', '↖'],
            shapes: ['■', '□', '▢', '▣', '▤', '▥', '▦', '▧', '▨', '▩', '▪', '▫', '▬', '▭', '▮', '▯', '●', '○', '◎', '◉', '◐', '◑', '◒', '◓', '◔', '◕']
        };

        const currentSymbols = symbolCategories[this.currentSymbolCategory] || symbolCategories.popular;
        
        currentSymbols.forEach(symbol => {
            const key = this.createKeyButton(symbol, 'symbol-key');
            container.appendChild(key);
        });
    }

    generateEmojiKeys() {
        const container = document.getElementById('emojisKeyboard');
        container.innerHTML = '';

        const emojiCategories = {
            faces: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠'],
            animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗', '🕷', '🕸', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐈', '🐓', '🦃', '🦚', '🦜', '🦢', '🦩', '🐇', '🦝', '🦨', '🦡', '🦦', '🦥', '🐁', '🐀', '🐿', '🦔'],
            food: ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '🫖', '☕', '🍵', '🧃', '🥤', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🧊', '🥄', '🍴', '🍽', '🥣', '🥡', '🥢'],
            activities: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛼', '🛷', '⛸', '🥌', '🎿', '⛷', '🏂', '🪂', '🏋️', '🤼', '🤸', '⛹️', '🤾', '🏌️', '🏇', '🧘', '🏄', '🏊', '🤽', '🚣', '🧗', '🚵', '🚴', '🏆', '🥇', '🥈', '🥉', '🏅', '🎖', '🏵', '🎗', '🎫', '🎭', '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🪘', '🎷', '🎺', '🪗', '🎸', '🪕', '🎻', '🎲', '♟', '🎯', '🎳', '🎮', '🎰'],
            objects: ['⌚', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '🕹', '🗜', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽', '🎞', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙', '🎚', '🎛', '🧭', '⏱', '⏲', '⏰', '🕰', '⌛', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯', '🪔', '🧯', '🛢', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🪜', '🔧', '🔨', '⚒', '🛠', '⛏', '🔩', '⚙️', '🧰', '🧲', '🪛', '🔫', '💣', '🧨', '🪓', '🔪', '🗡', '⚔️', '🛡', '🚬', '⚰️', '🪦', '⚱️', '🏺', '🔮', '📿', '🧿', '💈', '⚗️', '🔭', '🔬', '🕳', '🪠', '🩹', '🩺', '💊', '💉', '🩸', '🧬', '🦠', '🧫', '🧪', '🌡', '🧹', '🧺', '🧻', '🚽', '🚰', '🚿', '🛁', '🔑', '🗝', '🛋', '🛏', '🛌', '🧸', '🪆', '🖼', '🪞', '🪟', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮', '🎐', '✉️', '📩', '📨', '📧', '💌', '📥', '📤', '📦', '🏷', '📪', '📫', '📬', '📭', '📮', '📯', '📜', '📃', '📄', '📑', '🧾', '📊', '📈', '📉', '🗒', '🗓', '📆', '📅', '🗑', '📇', '🗃', '🗳', '🗄', '📋', '📁', '📂', '🗂', '🗞', '📰', '📓', '📔', '📒', '📕', '📗', '📘', '📙', '📚', '📖', '🔖', '🧷', '🔗', '📎', '🖇', '📐', '📏', '🧮', '📌', '📍', '✂️', '🖊', '🖋', '✒️', '🖌', '🖍', '📝', '✏️', '🔍', '🔎', '🔏', '🔐', '🔒', '🔓']
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

        const decorationCategories = {
            brackets: [
                { name: 'Square Brackets', value: '[Text]' },
                { name: 'Curly Brackets', value: '{Text}' },
                { name: 'Angle Brackets', value: '⟨Text⟩' },
                { name: 'Double Brackets', value: '⦑Text⦒' },
                { name: 'White Brackets', value: '〚Text〛' },
                { name: 'Corner Brackets', value: '「Text」' },
                { name: 'Lenticular Brackets', value: '【Text】' },
                { name: 'Tortoise Brackets', value: '〔Text〕' },
                { name: 'Black Lenticular', value: '〖Text〗' },
                { name: 'Double Angle', value: '《Text》' },
                { name: 'White Corner', value: '『Text』' }
            ],
            stars: [
                { name: 'Simple Stars', value: '★Text★' },
                { name: 'Sparkle Stars', value: '✦Text✦' },
                { name: 'Circle Stars', value: '✧Text✧' },
                { name: 'Shadow Stars', value: '✰Text✰' },
                { name: 'Star Border', value: '☆⋆Text⋆☆' },
                { name: 'Double Stars', value: '✮Text✮' },
                { name: 'Star Outline', value: '✪Text✪' },
                { name: 'Heavy Stars', value: '✬Text✬' },
                { name: 'Pinwheel Stars', value: '✯Text✯' },
                { name: 'Open Center Stars', value: '✫Text✫' }
            ],
            flowers: [
                { name: 'Simple Flower', value: '✿Text✿' },
                { name: 'White Flower', value: '❀Text❀' },
                { name: 'Eight Flower', value: '❁Text❁' },
                { name: 'Open Flower', value: '❃Text❃' },
                { name: 'Shadow Flower', value: '❊Text❊' },
                { name: 'Four Flower', value: '✣Text✣' },
                { name: 'Flower Point', value: '✤Text✤' },
                { name: 'Six Flower', value: '✥Text✥' },
                { name: 'Circled Flower', value: '❉Text❉' },
                { name: 'Teardrop Flower', value: '❋Text❋' }
            ],

             prefix: [
                { name: 'i am', value: 'ᴵ ᴬᴹ' },
                { name: 'boss', value: 'ᴮᴼˢˢ' },
                { name: 'badboy', value: 'ᴮᴬᴰᴮᴼʸ' },
                { name: 'king', value: 'ᴷᴵᴺᴳ' },
                { name: 'queen', value: 'Qᴜᴇᴇɴ' },
                { name: 'legend', value: 'ᴸᴱᴳᴱᴺᴰ' },
                { name: 'pro', value: 'ᴾᴿᴼ' },
                { name: 'god', value: 'ᴳᴼᴰ' },
                { name: 'demon', value: 'ᴰᴱᴹᴼᴺ' },
                { name: 'angel', value: 'ᴬᴺᴳᴱᴸ' },
                { name: 'warior', value: 'ᵂᴬᴿᴿᴵᴼᴿ' },
                { name: 'ghost', value: 'ᴳᴴᴼˢᵀ' },
                { name: 'hacker', value: 'ᴴᴬᶜᴷᴱᴿ' },
                { name: 'vampire', value: 'ⱽᴬᴹᴾᴵᴿᴱ' },
                { name: 'wolf', value: 'ᵂᴼᴸᶠ' },
                { name: 'light', value: 'ᴸᴵᴳᴴᵀ' },
                { name: 'shadow', value: 'ˢᴴᴬᴰᴼᵂ' },
                { name: 'phoenix', value: 'ᴾᴴᴼᴱᴺᴵˣ' },
                { name: 'dragon', value: 'ᴰᴿᴬᴳᴼᴺ' },
                { name: 'tiger', value: 'ᵀᴵᴳᴱᴿ' },
                { name: 'thunder', value: 'ᵀᴴᵁᴺᴰᴱᴿ' },
                { name: 'storm', value: 'ˢᵀᴼᴿᴹ' },
                { name: 'ice', value: 'ᴵᶜᴱ' },
                { name: 'fire', value: 'ᶠᴵᴿᴱ' },
                { name: 'dark', value: 'ᴰᴬᴿᴷ' },
                { name: 'mega', value: 'ᴹᴱᴳᴬ' },
                { name: 'atomic', value: 'ᴬᵀᴼᴹᴵᶜ' },
                { name: 'cyber', value: 'ᶜʸᴮᴱᴿ' },
                { name: 'neon', value: 'ᴺᴱᴼᴺ' },
                { name: 'cosmic', value: 'ᶜᴼˢᴹᴵᶜ' },
                { name: 'eternal', value: 'ᴱᵀᴱᴿᴺᴬᴸ' },
                { name: 'divine', value: 'ᴰᴵⱽᴵᴺᴱ' },
                { name: 'royal', value: 'ᴿᴼʸᴬᴸ' },
                { name: 'myth', value: 'ᴹʸᵀᴴ' },
                { name: 'epic', value: 'ᴱᴾᴵᶜ' }
             ],
            
            misc: [
                { name: 'Heart Border', value: '♥Text♥' },
                { name: 'Music Notes', value: '♫Text♫' },
                { name: 'Infinity', value: '∞Text∞' },
                { name: 'Yin Yang', value: '☯Text☯' },
                { name: 'Peace', value: '☮Text☮' },
                { name: 'Ankh', value: '☥Text☥' },
                { name: 'Orthodox Cross', value: '☦Text☦' },
                { name: 'Chi Rho', value: '☧Text☧' },
                { name: 'Cross of Jerusalem', value: '☨Text☨' },
                { name: 'Farsi Symbol', value: '☫Text☫' },
                { name: 'Adi Shakti', value: '☬Text☬' },
                { name: 'Hammer and Sickle', value: '☭Text☭' },
                { name: 'Peace Symbol', value: '☮Text☮' },
                { name: 'Yin Yang', value: '☯Text☯' },
                { name: 'Farsi Symbol', value: '☫Text☫' },
                { name: 'Adi Shakti', value: '☬Text☬' }
            ]
        };

        const currentDecorations = decorationCategories[this.currentDecorationCategory] || decorationCategories.brackets;
        
        currentDecorations.forEach(deco => {
            const key = document.createElement('button');
            key.className = 'key-btn decoration-key';
            key.innerHTML = `
                <div style="font-weight: 600; font-size: 0.8rem;">${deco.name}</div>
                <div style="font-size: 0.7rem; opacity: 0.8;">${deco.value}</div>
            `;
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
        document.getElementById('directTextInput').value = '';
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
            case 'reverse':
                this.currentText = this.currentText.split('').reverse().join('');
                break;
        }

        this.updatePreview();
    }

    applyEffect(effectType) {
        if (!this.currentText) {
            this.showNotification('Please add some text first!');
            return;
        }

        switch (effectType) {
            case 'sparkles':
                this.currentText = `✨ ${this.currentText} ✨`;
                break;
            case 'hearts':
                this.currentText = `❤️ ${this.currentText} ❤️`;
                break;
            case 'flames':
                this.currentText = `🔥 ${this.currentText} 🔥`;
                break;
            case 'borders':
                this.currentText = `▞▚ ${this.currentText} ▞▚`;
                break;
        }

        this.updatePreview();
    }

    updatePreview() {
        const preview = document.getElementById('namePreview');
        if (this.currentText) {
            preview.textContent = this.currentText;
            preview.style.color = '#333';
            preview.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
        } else {
            preview.textContent = 'Your styled name will appear here...';
            preview.style.color = '#6c757d';
            preview.style.background = 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)';
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
    
    // Show welcome message
    setTimeout(() => {
        const virtualKeyboard = new VirtualKeyboard();
        virtualKeyboard.showNotification('Welcome! Use the keyboard or direct input to create your custom name.');
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
