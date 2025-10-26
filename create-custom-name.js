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
    // ... (keep all your existing styles here - they're too long to include fully)
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
