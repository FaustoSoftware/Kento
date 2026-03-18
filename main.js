import './style.css'

const i18n = {
    es: {
        tapHint: "Toca la pantalla y descubre otra razón para superarte",
        settingsTitle: "Mis Bases (Kento)",
        languageTitle: "Idioma",
        languageDesc: "Cambia el idioma de la aplicación",
        langToggle: "Español",
        phrasesTitle: "Frases de Paz y Autoayuda",
        phrasesDesc: "Escribe recordatorios, anclas o pensamientos que te tranquilicen.",
        phrasesPlaceholder: "Ej: Respira profundo...",
        imagesTitle: "Fotografías o Recuerdos",
        imagesDesc: "Sube fotos desde tu teléfono o pega un enlace de internet.",
        uploadLabel: "📷 Seleccionar imagen del dispositivo",
        or: "O",
        urlPlaceholder: "https://ejemplo.com/mifoto.jpg",
        defaultMsg1: "Cálmate, tú puedes.",
        defaultMsg2: "Respira profundo. Piensa en tu tranquilidad.",
        defaultMsg3: "Todo pasa. Concéntrate en el presente.",
        defaultMsg4: "Eres capaz, no dejes que el momento te gane.",
        loadingText: "Procesando imagen...",
        emptyMessage: "Ve a ajustes y añade un mensaje."
    },
    en: {
        tapHint: "Tap the screen to see another reason to be better",
        settingsTitle: "My Foundations (Kento)",
        languageTitle: "Language",
        languageDesc: "Change the application language",
        langToggle: "English",
        phrasesTitle: "Peace & Self-Help Phrases",
        phrasesDesc: "Write reminders, anchors, or thoughts that calm you.",
        phrasesPlaceholder: "Ex: Take a deep breath...",
        imagesTitle: "Photographs or Memories",
        imagesDesc: "Upload photos from your phone or paste a web link.",
        uploadLabel: "📷 Select image from device",
        or: "OR",
        urlPlaceholder: "https://example.com/myphoto.jpg",
        defaultMsg1: "Calm down, you can do this.",
        defaultMsg2: "Take a deep breath. Focus on your peace.",
        defaultMsg3: "This too shall pass. Focus on the present.",
        defaultMsg4: "You are capable, don't let the moment overwhelm you.",
        loadingText: "Processing image...",
        emptyMessage: "Go to settings and add a message."
    }
};

class AnchorApp {
    // Keep track of the last shown indices to prevent immediate repetition
    constructor() {
        this.storageKey = 'anchor_data';
        this.langKey = 'kento_lang';
        
        this.lang = localStorage.getItem(this.langKey) || 'es';
        if (!i18n[this.lang]) this.lang = 'es';
        
        this.data = this.loadData();
        this.msgEl = document.getElementById('anchor-message');
        this.imgEl = document.getElementById('bg-image');
        
        this.lastMsgIndex = -1;
        this.lastImgIndex = -1;
        
        this.init();
    }

    loadData() {
        const defaultData = {
            messages: [
                i18n.es.defaultMsg1,
                i18n.es.defaultMsg2,
                i18n.es.defaultMsg3,
                i18n.es.defaultMsg4
            ],
            images: [
                "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
            ]
        };
        
        const stored = localStorage.getItem(this.storageKey);
        // Ensure migration to Kento default strings if first time logic requires it
        return stored ? JSON.parse(stored) : defaultData;
    }

    saveData() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
            this.renderLists();
        } catch (e) {
            alert(this.lang === 'es' ? 'Error: Límite de almacenamiento alcanzado. Borra algunas imágenes.' : 'Error: Storage limit reached. Please delete some images.');
        }
    }

    init() {
        this.applyTranslations();
        this.renderLists();
        this.showNextAnchor();
        
        // Expose to window so onclick handlers work
        window.app = this;
    }

    toggleLanguage() {
        this.lang = this.lang === 'es' ? 'en' : 'es';
        localStorage.setItem(this.langKey, this.lang);
        this.applyTranslations();
        
        // Refresh if empty
        if(this.data.messages.length === 0) {
            this.msgEl.innerText = i18n[this.lang].emptyMessage;
        }
    }

    applyTranslations() {
        const t = i18n[this.lang];
        document.documentElement.lang = this.lang;
        
        // Static elements via attributes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.innerText = t[key];
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) el.placeholder = t[key];
        });

        // dynamic UI
        document.getElementById('lang-toggle').innerText = t.langToggle;
        document.getElementById('loading-text').innerText = t.loadingText;
        
        this.renderLists(); // Rebuild custom lists for text translations if any
    }

    // Animate changing anchor messages and background images
    showNextAnchor() {
        this.msgEl.classList.remove('show');
        this.imgEl.classList.remove('loaded');
        
        setTimeout(() => {
            if (this.data.messages.length > 0) {
                let msgIdx = Math.floor(Math.random() * this.data.messages.length);
                // Prevent identical consecutive messages if there's more than 1 option
                if (this.data.messages.length > 1 && msgIdx === this.lastMsgIndex) {
                    msgIdx = (msgIdx + 1) % this.data.messages.length;
                }
                this.lastMsgIndex = msgIdx;
                this.msgEl.innerText = this.data.messages[msgIdx];
            } else {
                this.msgEl.innerText = i18n[this.lang].emptyMessage;
            }

            if (this.data.images.length > 0) {
                let imgIdx = Math.floor(Math.random() * this.data.images.length);
                // Prevent identical consecutive images if there's more than 1 option
                if (this.data.images.length > 1 && imgIdx === this.lastImgIndex) {
                    imgIdx = (imgIdx + 1) % this.data.images.length;
                }
                this.lastImgIndex = imgIdx;
                this.imgEl.src = this.data.images[imgIdx];
            } else {
                this.imgEl.src = "";
                this.imgEl.classList.add('loaded');
            }
            
            this.msgEl.classList.add('show');
        }, 400);
    }

    toggleSettings() {
        const anchorView = document.getElementById('anchor-view');
        const settingsView = document.getElementById('settings-view');
        
        if (settingsView.classList.contains('active')) {
            settingsView.classList.remove('active');
            anchorView.classList.add('active');
            this.showNextAnchor();
        } else {
            anchorView.classList.remove('active');
            settingsView.classList.add('active');
        }
    }

    addItem(type, inputId) {
        const input = document.getElementById(inputId);
        const value = input.value.trim();
        
        if (value !== '') {
            this.data[type].push(value);
            input.value = '';
            this.saveData();
        }
    }
    
    async handleFileUpload(inputElement) {
        const file = inputElement.files[0];
        if (!file) return;
        
        inputElement.value = ''; // reset immediately
        
        const overlay = document.getElementById('loading-overlay');
        overlay.classList.add('active');
        
        try {
            const base64Img = await this.compressImage(file);
            this.data.images.push(base64Img);
            this.saveData();
        } catch(err) {
            console.error(err);
            alert(this.lang === 'es' ? 'Error procesando la imagen' : 'Error processing image');
        } finally {
            overlay.classList.remove('active');
        }
    }
    
    // Compressor using Canvas to avoid huge Base64 limits
    compressImage(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    
                    // Max dimensions (e.g. 1200px)
                    const MAX_WIDTH = 1200;
                    const MAX_HEIGHT = 1200;
                    
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height = Math.round((height *= MAX_WIDTH / width));
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width = Math.round((width *= MAX_HEIGHT / height));
                            height = MAX_HEIGHT;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    // Adjust compression ratio (0.6 is good for keeping files under a few hundred KB)
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
                    resolve(dataUrl);
                };
                img.src = event.target.result;
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    deleteItem(type, index) {
        this.data[type].splice(index, 1);
        this.saveData();
    }

    renderLists() {
        const msgList = document.getElementById('list-messages');
        const imgList = document.getElementById('list-images');

        msgList.innerHTML = this.data.messages.map((m, i) => `
            <li>
                <div class="li-content">
                    <div class="text-preview">${m}</div>
                </div>
                <button class="btn-delete" onclick="app.deleteItem('messages', ${i})">X</button>
            </li>
        `).join('');

        imgList.innerHTML = this.data.images.map((img, i) => {
            const isImgUrl = img.startsWith('http') || img.startsWith('data:image');
            const previewHtml = isImgUrl ? `<img src="${img}" class="img-preview" alt="preview">` : '';
            const displayTxt = img.startsWith('data:image') ? (this.lang === 'es' ? 'Imagen de galería' : 'Gallery image') : img;
            
            return `
            <li>
                <div class="li-content">
                    ${previewHtml}
                    <div class="text-preview">${displayTxt}</div>
                </div>
                <button class="btn-delete" onclick="app.deleteItem('images', ${i})">X</button>
            </li>
            `
        }).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AnchorApp();
    
    // Inject version from package.json via Vite globals
    const versionEl = document.getElementById('app-version-display');
    if (versionEl && typeof __APP_VERSION__ !== 'undefined') {
        versionEl.textContent = `v${__APP_VERSION__}`;
    }
});
