const pages = [
    {
        kicker: "A tiny adventure",
        title: "Pip and the Little Light",
        lines: ["A little story about helping a friend."],
        emoji: "🐭📖",
        sky: "#c5e9e5",
        land: "#abd68e"
    },
    {
        kicker: "Page 1",
        title: "A Starry Night",
        lines: ["Pip the mouse looks up.", "A little star falls down!"],
        emoji: "🐭🌠",
        sky: "#7e9ac5",
        land: "#88a77f"
    },
    {
        kicker: "Page 2",
        title: "A Tiny Hello",
        lines: ["The star is sad.", "“I can't fly home,” it says."],
        emoji: "🐭🥺⭐",
        sky: "#859bc2",
        land: "#97b582"
    },
    {
        kicker: "Page 3",
        title: "Up the Hill",
        lines: ["“I can help!” says Pip.", "They walk up the big hill."],
        emoji: "🐭⛰️⭐",
        sky: "#f3c98e",
        land: "#92bb7c"
    },
    {
        kicker: "Page 4",
        title: "One, Two, Three!",
        lines: ["Pip gives the star a lift.", "One, two, three… up it goes!"],
        emoji: "🐭🤲✨",
        sky: "#efb6a2",
        land: "#aacd88"
    },
    {
        kicker: "Page 5",
        title: "Back with Friends",
        lines: ["The star is home at last.", "“Thank you, Pip!”"],
        emoji: "🐭🌟🌙",
        sky: "#737fac",
        land: "#829778"
    },
    {
        kicker: "The end",
        title: "A Bright Good Night",
        lines: ["Pip smiles at the sky.", "A kind friend makes the night bright."],
        emoji: "🐭💛✨",
        sky: "#a3bdd0",
        land: "#9bc489"
    }
];

const art = document.querySelector("#page-art");
const emoji = document.querySelector("#page-emoji");
const kicker = document.querySelector("#page-kicker");
const title = document.querySelector("#page-title");
const storyText = document.querySelector("#story-text");
const readButton = document.querySelector("#read-aloud");
const readLabel = document.querySelector("#read-label");
const previousButton = document.querySelector("#previous-page");
const nextButton = document.querySelector("#next-page");
const nextLabel = document.querySelector("#next-label");
const pageCount = document.querySelector("#page-count");
const progress = document.querySelector("#progress");
const progressFill = document.querySelector("#progress-fill");

let currentPage = 0;

function stopReading() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        readLabel.textContent = "Read to me";
    }
}

function showPage(index) {
    currentPage = index;
    const page = pages[currentPage];

    stopReading();
    art.style.setProperty("--sky", page.sky);
    art.style.setProperty("--land", page.land);
    emoji.textContent = page.emoji;
    kicker.textContent = page.kicker;
    title.textContent = page.title;
    storyText.replaceChildren(...page.lines.map((line) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = line;
        return paragraph;
    }));
    pageCount.textContent = `${currentPage + 1} / ${pages.length}`;
    progress.setAttribute("aria-valuemax", String(pages.length));
    progress.setAttribute("aria-valuenow", String(currentPage + 1));
    progressFill.style.width = `${((currentPage + 1) / pages.length) * 100}%`;
    previousButton.disabled = currentPage === 0;
    nextLabel.textContent = currentPage === pages.length - 1 ? "Read again" : "Next";
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

    const page = pages[currentPage];
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
    showPage(currentPage === pages.length - 1 ? 0 : currentPage + 1);
});

readButton.addEventListener("click", readPageAloud);

document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowLeft" && currentPage > 0) showPage(currentPage - 1);
    if (event.key === "ArrowRight") showPage(currentPage === pages.length - 1 ? 0 : currentPage + 1);
});

showPage(0);
