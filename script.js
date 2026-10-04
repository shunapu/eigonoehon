const stories = {
    pip: {
        title: "Pip and the Little Light",
        pages: [
            {
                kicker: "A tiny adventure",
                title: "Pip and the Little Light",
                lines: ["A little story about helping a friend."],
                scene: "cover"
            },
            {
                kicker: "Page 1",
                title: "A Starry Night",
                lines: ["Pip the mouse looks up.", "A little star falls down!"],
                scene: "falling-star"
            },
            {
                kicker: "Page 2",
                title: "A Tiny Hello",
                lines: ["The star is sad.", "“I can't fly home,” it says."],
                scene: "little-friend"
            },
            {
                kicker: "Page 3",
                title: "Up the Hill",
                lines: ["“I can help!” says Pip.", "They walk up the big hill."],
                scene: "up-the-hill"
            },
            {
                kicker: "Page 4",
                title: "One, Two, Three!",
                lines: ["Pip gives the star a lift.", "One, two, three… up it goes!"],
                scene: "the-lift"
            },
            {
                kicker: "Page 5",
                title: "Back with Friends",
                lines: ["The star is home at last.", "“Thank you, Pip!”"],
                scene: "starry-home"
            },
            {
                kicker: "The end",
                title: "A Bright Good Night",
                lines: ["Pip smiles at the sky.", "A kind friend makes the night bright."],
                scene: "good-night"
            }
        ]
    },
    seed: {
        title: "Mia and the Tiny Seed",
        pages: [
            {
                kicker: "A growing adventure",
                title: "Mia and the Tiny Seed",
                lines: ["A little story about patience and care."],
                scene: "seed-cover"
            },
            {
                kicker: "Page 1",
                title: "A Tiny Surprise",
                lines: ["Mia finds a tiny seed.", "“I will help you grow!”"],
                scene: "seed-found"
            },
            {
                kicker: "Page 2",
                title: "Into the Earth",
                lines: ["Mia digs a little hole.", "The seed goes in. Good night, seed!"],
                scene: "seed-planted"
            },
            {
                kicker: "Page 3",
                title: "A Little Drink",
                lines: ["Mia gives the seed some water.", "Drip, drop, drip!"],
                scene: "seed-watered"
            },
            {
                kicker: "Page 4",
                title: "Wait and See",
                lines: ["The sun shines down.", "Mia waits… and waits."],
                scene: "seed-waiting"
            },
            {
                kicker: "Page 5",
                title: "Hello, Little Sprout!",
                lines: ["Pop! A green sprout says hello.", "“You did it!” Mia cheers."],
                scene: "seed-sprout"
            },
            {
                kicker: "The end",
                title: "A Flower for Mia",
                lines: ["The sprout grows into a flower.", "Mia and her flower are friends."],
                scene: "seed-flower"
            }
        ]
    }
};

const art = document.querySelector("#page-art");
const illustration = document.querySelector("#page-illustration");
const kicker = document.querySelector("#page-kicker");
const title = document.querySelector("#page-title");
const storyText = document.querySelector("#story-text");
const storySelect = document.querySelector("#story-select");
const readButton = document.querySelector("#read-aloud");
const readLabel = document.querySelector("#read-label");
const previousButton = document.querySelector("#previous-page");
const nextButton = document.querySelector("#next-page");
const nextLabel = document.querySelector("#next-label");
const pageCount = document.querySelector("#page-count");
const progress = document.querySelector("#progress");
const progressFill = document.querySelector("#progress-fill");

let currentStory = stories.pip;
let currentPage = 0;

const sceneDetails = {
    cover: { prop: "book" },
    "falling-star": { prop: "falling-star" },
    "little-friend": { prop: "sad-star" },
    "up-the-hill": { prop: "hill-star" },
    "the-lift": { prop: "lift-star" },
    "starry-home": { prop: "home-star" },
    "good-night": { prop: "good-night" },
    "seed-cover": { character: "rabbit", prop: "flowerpot" },
    "seed-found": { character: "rabbit", prop: "seed" },
    "seed-planted": { character: "rabbit", prop: "planted-seed" },
    "seed-watered": { character: "rabbit", prop: "watering" },
    "seed-waiting": { character: "rabbit", prop: "sunshine" },
    "seed-sprout": { character: "rabbit", prop: "sprout" },
    "seed-flower": { character: "rabbit", prop: "flower" }
};

function illustrationFor(scene) {
    const details = sceneDetails[scene];
    const character = details.character === "rabbit"
        ? `<g class="character rabbit" stroke="#705447">
            <path d="M216 175 C195 119 201 67 225 78 C247 88 239 137 239 174Z" fill="#f3dfbd" stroke-width="5"/>
            <path d="M220 145 C207 101 211 81 222 88 C234 99 230 128 232 149Z" fill="#e9a3a0" stroke="none"/>
            <path d="M250 170 C245 119 255 76 276 83 C298 91 276 140 268 176Z" fill="#f3dfbd" stroke-width="5"/>
            <path d="M260 145 C262 106 273 91 281 96 C286 105 271 133 267 151Z" fill="#e9a3a0" stroke="none"/>
            <ellipse cx="244" cy="252" rx="54" ry="65" fill="#f3dfbd" stroke-width="5"/>
            <ellipse cx="242" cy="199" rx="58" ry="53" fill="#f7e8cc" stroke-width="5"/>
            <ellipse cx="223" cy="208" rx="5" ry="7" fill="#493c38" stroke="none"/>
            <ellipse cx="261" cy="208" rx="5" ry="7" fill="#493c38" stroke="none"/>
            <path d="M237 220 Q242 216 247 220 Q242 228 237 220Z" fill="#db8f8a" stroke-width="2"/>
            <path d="M242 227 Q237 234 230 231 M242 227 Q248 234 255 231" fill="none" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M208 244 Q179 258 187 280 Q194 296 214 286 M278 243 Q306 255 300 278 Q296 290 279 284" fill="none" stroke-width="8" stroke-linecap="round"/>
            <ellipse cx="216" cy="311" rx="25" ry="12" fill="#e8cda9" stroke-width="4"/>
            <ellipse cx="269" cy="311" rx="25" ry="12" fill="#e8cda9" stroke-width="4"/>
            <path d="M291 267 C328 269 330 298 311 303" fill="none" stroke-width="4" stroke-linecap="round"/>
            <path d="M194 223 Q204 229 213 226 M271 226 Q281 229 290 222" fill="none" stroke="#d99a8c" stroke-width="3" stroke-linecap="round"/>
        </g>`
        : `<g class="character mouse" stroke="#705447">
            <path d="M204 185 C178 157 177 120 199 119 C223 118 228 151 223 183Z" fill="#e9b99b" stroke-width="5"/>
            <path d="M190 157 C184 139 190 127 199 129 C210 132 213 151 214 166Z" fill="#d88f83" stroke="none"/>
            <path d="M257 181 C254 147 268 119 289 128 C310 138 295 170 276 192Z" fill="#e9b99b" stroke-width="5"/>
            <path d="M272 160 C279 140 291 136 296 144 C299 153 286 166 276 175Z" fill="#d88f83" stroke="none"/>
            <ellipse cx="243" cy="254" rx="54" ry="64" fill="#dca982" stroke-width="5"/>
            <ellipse cx="241" cy="201" rx="60" ry="52" fill="#f1c6a7" stroke-width="5"/>
            <ellipse cx="221" cy="205" rx="5" ry="7" fill="#493c38" stroke="none"/>
            <ellipse cx="259" cy="205" rx="5" ry="7" fill="#493c38" stroke="none"/>
            <ellipse cx="242" cy="220" rx="23" ry="15" fill="#f8e2ca" stroke="none"/>
            <path d="M236 217 Q242 212 248 217 Q243 226 236 217Z" fill="#bd716e" stroke-width="2"/>
            <path d="M242 224 Q237 231 229 228 M242 224 Q249 231 256 228" fill="none" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M217 246 Q193 260 199 281 M267 246 Q292 258 285 281" fill="none" stroke-width="8" stroke-linecap="round"/>
            <ellipse cx="216" cy="310" rx="25" ry="12" fill="#e9b99b" stroke-width="4"/>
            <ellipse cx="269" cy="310" rx="25" ry="12" fill="#e9b99b" stroke-width="4"/>
            <path d="M293 264 C328 270 328 300 307 304 C294 306 290 296 299 290" fill="none" stroke-width="4" stroke-linecap="round"/>
            <path d="M194 220 L166 215 M195 227 L168 232 M276 220 L304 215 M276 227 L303 232" fill="none" stroke="#8c6856" stroke-width="2" stroke-linecap="round"/>
            <path d="M202 228 Q209 234 216 231 M268 231 Q276 233 282 227" fill="none" stroke="#d68f83" stroke-width="3" stroke-linecap="round"/>
        </g>`;
    const props = {
        book: `<g transform="translate(326 263) rotate(-9)" stroke="#806249" stroke-width="4" stroke-linejoin="round"><path d="M0 5 Q25 -3 47 8 L47 55 Q25 44 0 52Z" fill="#f4d477"/><path d="M47 8 Q69 -1 92 7 L92 53 Q68 44 47 55Z" fill="#fff0b5"/><path d="M47 8V55" fill="none"/><path d="M10 18Q25 13 37 19M57 18Q73 13 84 18" fill="none" stroke="#be8f62" stroke-width="2"/></g>`,
        "falling-star": `<g transform="translate(329 123) rotate(19)"><path d="M-58 20L-5 -3" stroke="#fff4cc" stroke-width="10" stroke-linecap="round" opacity=".65"/><path d="M0 -24L8 -7 27 -5 13 8 16 27 0 18 -17 27 -13 8 -27 -5 -8 -7Z" fill="#ffd66e" stroke="#a77c4d" stroke-width="4" stroke-linejoin="round"/></g>`,
        "sad-star": `<g transform="translate(337 227)"><path d="M0 -52L15 -18 51 -16 24 8 32 44 0 25 -32 44 -24 8 -51 -16 -15 -18Z" fill="#ffd66e" stroke="#a77c4d" stroke-width="4" stroke-linejoin="round"/><path d="M-11 -8v3M11 -8v3M-9 11q9 -8 18 0" fill="none" stroke="#73534b" stroke-width="3" stroke-linecap="round"/><path d="M-1 -2q6 7 11 0" fill="none" stroke="#8ab8c2" stroke-width="3" stroke-linecap="round"/></g>`,
        "hill-star": `<path d="M336 177L346 200 371 202 352 219 357 244 336 231 315 244 320 219 301 202 327 200Z" fill="#ffd66e" stroke="#a77c4d" stroke-width="4" stroke-linejoin="round"/><path d="M310 291 Q340 269 376 281" fill="none" stroke="#806249" stroke-width="4" stroke-linecap="round"/>`,
        "lift-star": `<g transform="translate(246 101)"><path d="M0 -44L13 -14 45 -13 21 8 28 39 0 23 -28 39 -21 8 -45 -13 -13 -14Z" fill="#ffe077" stroke="#a77c4d" stroke-width="4" stroke-linejoin="round"/><path d="M-10 -3v3M10 -3v3M-8 12q8 7 16 0" fill="none" stroke="#73534b" stroke-width="3" stroke-linecap="round"/></g><path d="M201 154Q219 131 237 143M262 143Q279 129 294 151" fill="none" stroke="#806249" stroke-width="5" stroke-linecap="round"/>`,
        "home-star": `<path d="M338 112L349 138 377 140 356 159 362 187 338 173 314 187 320 159 299 140 327 138Z" fill="#ffe077" stroke="#a77c4d" stroke-width="4" stroke-linejoin="round"/><path d="M327 150q4 4 8 0m7 0q4 4 8 0m-15 12q7 6 14 0" fill="none" stroke="#73534b" stroke-width="2.5" stroke-linecap="round"/>`,
        "good-night": `<path d="M353 108a34 34 0 1 0 34 46 28 28 0 0 1-34-46Z" fill="#ffe6a0" stroke="#a77c4d" stroke-width="4"/><path d="M327 216l5 11 12 1-9 8 3 12-11-6-10 6 2-12-9-8 12-1Z" fill="#fff2c6" stroke="#a77c4d" stroke-width="3"/>`,
        flowerpot: `<g transform="translate(344 256)" stroke="#806249" stroke-width="4" stroke-linejoin="round"><path d="M-34 0H35L25 53H-24Z" fill="#d98969"/><path d="M-40 -6H41V5H-40Z" fill="#e9a17a"/><path d="M0 -8V-68M0 -42Q-33 -65 -35 -42Q-26 -23 0 -33M0 -50Q26 -76 37 -56Q34 -37 0 -40" fill="#8eb978" stroke="#648356"/></g>`,
        seed: `<g transform="translate(345 280)"><ellipse cx="0" cy="0" rx="19" ry="28" transform="rotate(35)" fill="#9a704a" stroke="#694f3d" stroke-width="4"/><path d="M-4 -12q14 6 14 20" fill="none" stroke="#d9b582" stroke-width="3"/></g>`,
        "planted-seed": `<path d="M322 284H377" stroke="#795d48" stroke-width="7" stroke-linecap="round"/><ellipse cx="350" cy="278" rx="10" ry="6" fill="#9a704a" stroke="#694f3d" stroke-width="3"/><path d="M350 272q-3-15 7-21" fill="none" stroke="#78985d" stroke-width="4" stroke-linecap="round"/>`,
        watering: `<g transform="translate(346 228)" stroke="#638698" stroke-width="4" stroke-linejoin="round"><path d="M-27 4H22L14 42H-20Z" fill="#a9d7df"/><path d="M-21 2Q-21-25 8-18Q28-14 21 5M22 7l24 7-7 8-26-6" fill="none" stroke-linecap="round"/><path d="M40 27l-4 8m13-8l-4 8" stroke-width="3" stroke-linecap="round"/></g>`,
        sunshine: `<circle cx="345" cy="164" r="32" fill="#ffd36f" stroke="#a77c4d" stroke-width="4"/><path d="M345 117v-13m0 107v-13m47-34h13m-107 0h13m67-33 10-10m-76 76 10-10m56 0 10 10m-76-76 10 10" stroke="#a77c4d" stroke-width="4" stroke-linecap="round"/>`,
        sprout: `<path d="M347 291v-69" stroke="#668858" stroke-width="6" stroke-linecap="round"/><path d="M346 251q-42-33-49-7 11 23 49 18m1-21q24-44 43-24-4 25-43 35" fill="#91bf7e" stroke="#668858" stroke-width="4" stroke-linejoin="round"/>`,
        flower: `<path d="M345 294v-63m0 40q-29-28-39-8 9 21 39 18" fill="#91bf7e" stroke="#668858" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><g transform="translate(345 216)" fill="#ef9b91" stroke="#a77c4d" stroke-width="3"><ellipse cy="-17" rx="10" ry="17"/><ellipse cy="-17" rx="10" ry="17" transform="rotate(60)"/><ellipse cy="-17" rx="10" ry="17" transform="rotate(120)"/><ellipse cy="-17" rx="10" ry="17" transform="rotate(180)"/><ellipse cy="-17" rx="10" ry="17" transform="rotate(240)"/><ellipse cy="-17" rx="10" ry="17" transform="rotate(300)"/><circle r="10" fill="#f5d16f"/></g>`
    };

    return `<svg viewBox="0 0 480 360" role="presentation" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="paper-grain" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence type="fractalNoise" baseFrequency=".75" numOctaves="2" seed="8"/>
                <feColorMatrix values="0 0 0 0 .38 0 0 0 0 .29 0 0 0 0 .19 0 0 0 .16 0"/>
            </filter>
        </defs>
        <g fill="none" stroke-linecap="round" stroke-linejoin="round">
            ${props[details.prop]}
            ${character}
        </g>
        <rect x="0" y="0" width="480" height="360" filter="url(#paper-grain)" opacity=".22" pointer-events="none"/>
    </svg>`;
}

function stopReading() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        readLabel.textContent = "Read to me";
    }
}

function showPage(index) {
    currentPage = index;
    const page = currentStory.pages[currentPage];

    stopReading();
    art.dataset.scene = page.scene;
    illustration.innerHTML = illustrationFor(page.scene);
    kicker.textContent = page.kicker;
    title.textContent = page.title;
    storyText.replaceChildren(...page.lines.map((line) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = line;
        return paragraph;
    }));
    pageCount.textContent = `${currentPage + 1} / ${currentStory.pages.length}`;
    progress.setAttribute("aria-valuemax", String(currentStory.pages.length));
    progress.setAttribute("aria-valuenow", String(currentPage + 1));
    progressFill.style.width = `${((currentPage + 1) / currentStory.pages.length) * 100}%`;
    previousButton.disabled = currentPage === 0;
    nextLabel.textContent = currentPage === currentStory.pages.length - 1 ? "Read again" : "Next";
}

function readPageAloud() {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
        readLabel.textContent = "Audio not available";
        readButton.disabled = true;
        return;
    }

    if (window.speechSynthesis.speaking) {
        stopReading();
        return;
    }

    const page = currentStory.pages[currentPage];
    const speech = new SpeechSynthesisUtterance(`${page.title}. ${page.lines.join(" ")}`);
    speech.lang = "en-US";
    speech.rate = 0.82;
    speech.onstart = () => {
        readLabel.textContent = "Stop reading";
    };
    speech.onend = () => {
        readLabel.textContent = "Read to me";
    };
    speech.onerror = () => {
        readLabel.textContent = "Read to me";
    };
    window.speechSynthesis.speak(speech);
}

previousButton.addEventListener("click", () => {
    if (currentPage > 0) showPage(currentPage - 1);
});

nextButton.addEventListener("click", () => {
    showPage(currentPage === currentStory.pages.length - 1 ? 0 : currentPage + 1);
});

storySelect.addEventListener("change", () => {
    currentStory = stories[storySelect.value];
    document.title = `${currentStory.title} | A Little English Story`;
    showPage(0);
});

readButton.addEventListener("click", readPageAloud);

document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target === storySelect) return;
    if (event.key === "ArrowLeft" && currentPage > 0) showPage(currentPage - 1);
    if (event.key === "ArrowRight") showPage(currentPage === currentStory.pages.length - 1 ? 0 : currentPage + 1);
});

showPage(0);
