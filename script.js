const stories = {
    pip: {
        title: "Pip and the Little Light",
        pages: [
            {
                kicker: "A tiny adventure",
                title: "Pip and the Little Light",
                lines: ["A little story about helping a friend."],
                emoji: "🐭📖",
                scene: "cover"
            },
            {
                kicker: "Page 1",
                title: "A Starry Night",
                lines: ["Pip the mouse looks up.", "A little star falls down!"],
                emoji: "🐭🌠",
                scene: "falling-star"
            },
            {
                kicker: "Page 2",
                title: "A Tiny Hello",
                lines: ["The star is sad.", "“I can't fly home,” it says."],
                emoji: "🐭🥺⭐",
                scene: "little-friend"
            },
            {
                kicker: "Page 3",
                title: "Up the Hill",
                lines: ["“I can help!” says Pip.", "They walk up the big hill."],
                emoji: "🐭⛰️⭐",
                scene: "up-the-hill"
            },
            {
                kicker: "Page 4",
                title: "One, Two, Three!",
                lines: ["Pip gives the star a lift.", "One, two, three… up it goes!"],
                emoji: "🐭🤲✨",
                scene: "the-lift"
            },
            {
                kicker: "Page 5",
                title: "Back with Friends",
                lines: ["The star is home at last.", "“Thank you, Pip!”"],
                emoji: "🐭🌟🌙",
                scene: "starry-home"
            },
            {
                kicker: "The end",
                title: "A Bright Good Night",
                lines: ["Pip smiles at the sky.", "A kind friend makes the night bright."],
                emoji: "🐭💛✨",
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
                emoji: "🐰🌱",
                scene: "seed-cover"
            },
            {
                kicker: "Page 1",
                title: "A Tiny Surprise",
                lines: ["Mia finds a tiny seed.", "“I will help you grow!”"],
                emoji: "🐰🌰",
                scene: "seed-found"
            },
            {
                kicker: "Page 2",
                title: "Into the Earth",
                lines: ["Mia digs a little hole.", "The seed goes in. Good night, seed!"],
                emoji: "🐰🕳️🌰",
                scene: "seed-planted"
            },
            {
                kicker: "Page 3",
                title: "A Little Drink",
                lines: ["Mia gives the seed some water.", "Drip, drop, drip!"],
                emoji: "🐰💧🌱",
                scene: "seed-watered"
            },
            {
                kicker: "Page 4",
                title: "Wait and See",
                lines: ["The sun shines down.", "Mia waits… and waits."],
                emoji: "🐰☀️🌧️",
                scene: "seed-waiting"
            },
            {
                kicker: "Page 5",
                title: "Hello, Little Sprout!",
                lines: ["Pop! A green sprout says hello.", "“You did it!” Mia cheers."],
                emoji: "🐰🌱🎉",
                scene: "seed-sprout"
            },
            {
                kicker: "The end",
                title: "A Flower for Mia",
                lines: ["The sprout grows into a flower.", "Mia and her flower are friends."],
                emoji: "🐰🌼🦋",
                scene: "seed-flower"
            }
        ]
    }
};

const art = document.querySelector("#page-art");
const emoji = document.querySelector("#page-emoji");
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
    emoji.textContent = page.emoji;
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
