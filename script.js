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
    },
    river: {
        title: "Pip and the Little Blue Shell",
        pages: [
            {
                kicker: "A journey from forest to sea",
                title: "Pip and the Little Blue Shell",
                lines: ["A little shell has lost its way.", "Pip sets out to help it find the sea."],
                scene: "river-cover"
            },
            {
                kicker: "Page 1",
                title: "A Find in the Forest",
                lines: ["Pip finds a small blue shell beneath a fern.", "“The sea is my home,” it whispers."],
                scene: "river-forest-find"
            },
            {
                kicker: "Page 2",
                title: "Follow the Stream",
                lines: ["A silver stream curls through the trees.", "“This water knows the way,” says Pip."],
                scene: "river-forest-stream"
            },
            {
                kicker: "Page 3",
                title: "Up, Up the Mountain",
                lines: ["The stream leads Pip up a green mountain.", "He climbs slowly, step by step."],
                scene: "river-mountain"
            },
            {
                kicker: "Page 4",
                title: "Clouds on the Peak",
                lines: ["At the top, clouds brush the quiet rocks.", "Pip hears a tiny trickle below."],
                scene: "river-peak"
            },
            {
                kicker: "Page 5",
                title: "Down the Waterfall",
                lines: ["The trickle tumbles down the mountain.", "Pip follows its bright, bubbly song."],
                scene: "river-waterfall"
            },
            {
                kicker: "Page 6",
                title: "A Busy Little Town",
                lines: ["The stream runs past a town with red roofs.", "Pip asks a baker, “Does this water reach the sea?”"],
                scene: "river-town"
            },
            {
                kicker: "Page 7",
                title: "The Town Bridge",
                lines: ["“Keep going,” says the baker with a smile.", "Pip waves as he crosses the old stone bridge."],
                scene: "river-town-bridge"
            },
            {
                kicker: "Page 8",
                title: "A Shady Green Path",
                lines: ["Past the town, tall trees make a cool tunnel.", "The stream hurries along beside Pip."],
                scene: "river-woods"
            },
            {
                kicker: "Page 9",
                title: "A River at Last",
                lines: ["The little stream joins a wide, shining river.", "Pip sets the shell on a big green leaf."],
                scene: "river-wide"
            },
            {
                kicker: "Page 10",
                title: "Sailing on a Leaf",
                lines: ["The leaf floats past reeds and yellow flowers.", "Pip walks along the bank to keep it safe."],
                scene: "river-reeds"
            },
            {
                kicker: "Page 11",
                title: "The Long Bend",
                lines: ["Round a bend, the river grows calm and broad.", "Little silver fish dart beneath the leaf."],
                scene: "river-bend"
            },
            {
                kicker: "Page 12",
                title: "A First Look at the Sea",
                lines: ["The air smells salty. The sky opens wide.", "“I think we are nearly there!” calls Pip."],
                scene: "river-estuary"
            },
            {
                kicker: "Page 13",
                title: "The Sandy Shore",
                lines: ["The river meets the blue, blue sea.", "Pip steps onto the warm and sandy beach."],
                scene: "river-beach"
            },
            {
                kicker: "Page 14",
                title: "Home Again",
                lines: ["A gentle wave carries the shell into the sea.", "“Thank you, Pip!” it sings."],
                scene: "river-home"
            },
            {
                kicker: "Page 15",
                title: "A Shell's Song",
                lines: ["The shell sings softly with the waves.", "Pip listens as the sun turns the water gold."],
                scene: "river-sunset"
            },
            {
                kicker: "The end",
                title: "The Way Home",
                lines: ["Pip follows the river back to the forest.", "Now he knows: every little stream has a story."],
                scene: "river-night"
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
    cover: { place: "forest", prop: "book" },
    "falling-star": { place: "night-forest", prop: "falling-star" },
    "little-friend": { place: "forest", prop: "sad-star" },
    "up-the-hill": { place: "mountain", prop: "hill-star" },
    "the-lift": { place: "mountain", prop: "lift-star" },
    "starry-home": { place: "night-forest", prop: "home-star" },
    "good-night": { place: "night-forest", prop: "good-night" },
    "seed-cover": { place: "garden", character: "rabbit", prop: "flowerpot" },
    "seed-found": { place: "garden", character: "rabbit", prop: "seed" },
    "seed-planted": { place: "garden", character: "rabbit", prop: "planted-seed" },
    "seed-watered": { place: "garden", character: "rabbit", prop: "watering" },
    "seed-waiting": { place: "garden", character: "rabbit", prop: "sunshine" },
    "seed-sprout": { place: "garden", character: "rabbit", prop: "sprout" },
    "seed-flower": { place: "garden", character: "rabbit", prop: "flower" },
    "river-cover": { place: "forest", prop: "river-book" },
    "river-forest-find": { place: "forest", prop: "shell" },
    "river-forest-stream": { place: "forest", prop: "river-stones" },
    "river-mountain": { place: "mountain", prop: "river-stones" },
    "river-peak": { place: "mountain", prop: "river-stones" },
    "river-waterfall": { place: "mountain", prop: "river-flow" },
    "river-town": { place: "town", prop: "river-pail" },
    "river-town-bridge": { place: "town", prop: "river-bridge" },
    "river-woods": { place: "forest", prop: "river-flowers" },
    "river-wide": { place: "river", prop: "river-pebbles" },
    "river-reeds": { place: "river", prop: "river-flowers" },
    "river-bend": { place: "river", prop: "river-flow" },
    "river-estuary": { place: "sea", prop: "river-flow" },
    "river-beach": { place: "sea", prop: "shell" },
    "river-home": { place: "sea", prop: "shell" },
    "river-sunset": { place: "sea", prop: "river-moon" },
    "river-night": { place: "night-forest", prop: "river-moon" }
};

function illustrationFor(scene) {
    const details = sceneDetails[scene];
    const landscapes = {
        forest: `<g class="scene-context forest-context">
            <path d="M0 253Q98 230 175 257T331 252T480 243V360H0Z" fill="#92b47e" opacity=".48"/>
            <path d="M16 267V118m0 3L-13 171m29-50 30 54M459 269V102m0 2-31 56m31-56 30 58" fill="none" stroke="#77654c" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M-13 177Q-25 119 16 93Q50 111 47 171Q21 154-13 177M428 160Q425 99 459 78Q495 104 489 167Q457 147 428 160" fill="#769b71" stroke="#64845f" stroke-width="4"/>
            <path d="M71 287q4-22 12-27m-12 27q-10-13-17-13m280 13q5-20 13-25m-13 25q-10-12-17-12" fill="none" stroke="#638c68" stroke-width="4" stroke-linecap="round"/>
        </g>`,
        "night-forest": `<g class="scene-context forest-context">
            <path d="M0 253Q98 230 175 257T331 252T480 243V360H0Z" fill="#536b68" opacity=".66"/>
            <path d="M16 267V118m0 3L-13 171m29-50 30 54M459 269V102m0 2-31 56m31-56 30 58" fill="none" stroke="#514d56" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M-13 177Q-25 119 16 93Q50 111 47 171Q21 154-13 177M428 160Q425 99 459 78Q495 104 489 167Q457 147 428 160" fill="#546d6b" stroke="#485f60" stroke-width="4"/>
        </g>`,
        mountain: `<g class="scene-context mountain-context">
            <path d="M-28 281 103 94l104 151 91-128 216 171v72H-28Z" fill="#91ad91" opacity=".68"/>
            <path d="m67 147 36-53 34 49-27-15-13 15-11-10Z" fill="#edf0dc" opacity=".88"/>
            <path d="m268 156 30-39 34 46-27-17-12 12-10-9Z" fill="#f4f0dc" opacity=".9"/>
            <path d="M0 283Q98 252 195 286T390 278T480 270V360H0Z" fill="#789b70" opacity=".65"/>
            <path d="M0 306q76-42 146-10t145 5q59-8 129-39" fill="none" stroke="#d8c38e" stroke-width="11" opacity=".75"/>
        </g>`,
        town: `<g class="scene-context town-context">
            <path d="M0 245H480V360H0Z" fill="#c5b78f" opacity=".48"/>
            <g stroke="#9a755a" stroke-width="3" stroke-linejoin="round">
                <path d="M26 184h75v91H26Z" fill="#edc88f"/><path d="m18 185 45-42 47 42Z" fill="#bd7966"/>
                <path d="M122 164h81v111h-81Z" fill="#e8d5ae"/><path d="m114 165 49-44 49 44Z" fill="#7e8491"/>
                <path d="M220 195h78v80h-78Z" fill="#e5b981"/><path d="m213 196 45-39 47 39Z" fill="#c78068"/>
                <path d="M321 172h94v103h-94Z" fill="#ead1a6"/><path d="m313 173 55-48 55 48Z" fill="#9a7f70"/>
            </g>
            <g fill="#8b9ca0"><path d="M45 207h15v21H45zm34 0h15v21H79zm64-14h16v22h-16zm28 0h16v22h-16zm-54 45h17v37h-17zm134-18h14v19h-14zm28 0h14v19h-14zm60-28h17v22h-17zm34 0h17v22h-17z"/></g>
            <path d="M0 295q94-15 179 0t164 0q80-13 137 0v65H0Z" fill="#bea982" opacity=".55"/>
        </g>`,
        river: `<g class="scene-context river-context">
            <path d="M0 176Q80 163 154 190T308 197T480 171V360H0Z" fill="#9fba8a" opacity=".52"/>
            <path d="M-20 275Q65 236 140 267T286 263T500 213L500 299Q387 321 301 310T131 313T-20 345Z" fill="#78b9bd" opacity=".9"/>
            <path d="M-15 291Q68 257 139 286T285 281T496 233" fill="none" stroke="#e2f0d8" stroke-width="7" opacity=".75"/>
            <path d="M28 243v-35m0 10q-17-21-25-8m25 4q17-22 25-9m367 25v-40m0 15q-18-23-27-9m27 4q19-22 29-8" fill="none" stroke="#6f946e" stroke-width="5" stroke-linecap="round"/>
        </g>`,
        sea: `<g class="scene-context sea-context">
            <path d="M0 184Q77 177 158 184T317 181T480 186V278Q405 268 336 282T183 276T0 291Z" fill="#78b9ca" opacity=".9"/>
            <path d="M0 201q43-12 82 0t82 0 82 0 82 0 82 0 82 0" fill="none" stroke="#e3f3e7" stroke-width="5" opacity=".86"/>
            <path d="M0 231q42-11 81 0t82 0 82 0 82 0 82 0 82 0" fill="none" stroke="#a8d9d5" stroke-width="4" opacity=".8"/>
            <path d="M0 268Q91 251 174 267T328 264T480 276V360H0Z" fill="#e0c58f"/>
            <path d="M0 281q97-16 181 0t160-2q71-8 139 1" fill="none" stroke="#f3dfad" stroke-width="7" opacity=".8"/>
            <path d="M35 274q4-18 10-23m-10 23q-8-12-14-11m382 13q4-20 11-26m-11 26q-8-12-15-11" fill="none" stroke="#72956d" stroke-width="4" stroke-linecap="round"/>
        </g>`,
        garden: `<g class="scene-context meadow-context" fill="none" stroke="#769966" stroke-width="3" stroke-linecap="round">
            <path d="M0 279Q81 254 161 277T320 277T480 266V360H0Z" fill="#a4c57e" stroke="none" opacity=".46"/>
            <path d="M74 306q-6-18-14-22m14 22q2-18 11-25m254 22q-4-16-12-20m12 20q4-18 13-23m44 26q-1-12 8-18"/>
            <path d="M125 311q22-8 39-1m156 3q18-9 31-3" stroke="#c0d893" stroke-width="4"/>
        </g>`
    };
    const sceneContext = landscapes[details.place];
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
        "river-book": `<path d="M314 285q28-36 60 0" fill="none" stroke="#6799a0" stroke-width="8" stroke-linecap="round"/><path d="M339 263l6-14 6 14 15 1-12 9 4 14-13-8-12 8 4-14-11-9Z" fill="#ffe077" stroke="#a77c4d" stroke-width="3" stroke-linejoin="round"/>`,
        "river-stones": `<path d="M306 289q36-26 73-1" fill="none" stroke="#77aeb1" stroke-width="8" stroke-linecap="round"/><ellipse cx="329" cy="287" rx="15" ry="8" fill="#b8a58c" stroke="#806d59" stroke-width="3"/><ellipse cx="361" cy="286" rx="12" ry="7" fill="#d0bd9e" stroke="#806d59" stroke-width="3"/>`,
        "river-flowers": `<path d="M328 298v-35m33 35v-48" stroke="#668858" stroke-width="4" stroke-linecap="round"/><g fill="#f3a69b" stroke="#a77c4d" stroke-width="2.5"><circle cx="328" cy="255" r="8"/><circle cx="321" cy="262" r="8"/><circle cx="335" cy="262" r="8"/><circle cx="328" cy="269" r="8"/><circle cx="361" cy="243" r="8"/><circle cx="354" cy="250" r="8"/><circle cx="368" cy="250" r="8"/><circle cx="361" cy="257" r="8"/></g><circle cx="328" cy="262" r="4" fill="#f5d16f"/><circle cx="361" cy="250" r="4" fill="#f5d16f"/>`,
        "river-bridge": `<path d="M299 253q40-41 83 0v13h-83Z" fill="#c18b60" stroke="#806249" stroke-width="4"/><path d="M309 251v15m18-25v25m19-25v25m19-15v15" stroke="#f0c08b" stroke-width="4"/><path d="M301 279q37-22 75 0" fill="none" stroke="#74aeb2" stroke-width="8" stroke-linecap="round"/>`,
        "river-branch": `<path d="M301 248q34 15 72-16m-38 13-14-19m20 11 16 18" fill="none" stroke="#896447" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="310" cy="282" rx="17" ry="9" fill="#b8a58c" stroke="#806d59" stroke-width="3"/><ellipse cx="357" cy="282" rx="15" ry="8" fill="#d0bd9e" stroke="#806d59" stroke-width="3"/><path d="M300 300q34-19 75 0" fill="none" stroke="#77aeb1" stroke-width="7" stroke-linecap="round"/>`,
        "river-pail": `<g transform="translate(347 269)" stroke="#638698" stroke-width="4" stroke-linejoin="round"><path d="M-23-4h47l-6 41h-35Z" fill="#a9d7df"/><path d="M-16-5q0-28 19-28t19 28" fill="none"/><path d="M-13 10h28" stroke="#e8f2e8" stroke-width="3"/></g>`,
        "river-gap": `<path d="M302 282q17-24 32 0t34 0" fill="none" stroke="#74aeb2" stroke-width="8" stroke-linecap="round"/><path d="M310 251l8 10m18-13 7 12m14-16 7 10" stroke="#896447" stroke-width="8" stroke-linecap="round"/><path d="M365 225l4 9 10 1-7 6 2 10-9-5-8 5 2-10-7-6 10-1Z" fill="#ffe077" stroke="#a77c4d" stroke-width="2.5" stroke-linejoin="round"/>`,
        "river-pebbles": `<path d="M300 281q22-18 42 0t39 0" fill="none" stroke="#74aeb2" stroke-width="8" stroke-linecap="round"/><ellipse cx="312" cy="285" rx="12" ry="6" fill="#d0bd9e" stroke="#806d59" stroke-width="2"/><ellipse cx="354" cy="285" rx="13" ry="6" fill="#b8a58c" stroke="#806d59" stroke-width="2"/><path d="M330 249l7 9m13-15 6 10" stroke="#896447" stroke-width="7" stroke-linecap="round"/>`,
        "river-flow": `<path d="M299 273q20-18 40 0t40 0m-75 18q20-18 40 0t40 0" fill="none" stroke="#6eb6c0" stroke-width="7" stroke-linecap="round"/><path d="M320 246l5 8m16-11 5 8" stroke="#896447" stroke-width="8" stroke-linecap="round"/><path d="M328 264l6 5 6-5m5 18 6 5 6-5" fill="none" stroke="#eaf7ec" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
        "river-moon": `<path d="M354 106a34 34 0 1 0 34 46 28 28 0 0 1-34-46Z" fill="#ffe6a0" stroke="#a77c4d" stroke-width="4"/><path d="M305 281q35-21 74 0" fill="none" stroke="#79b4bd" stroke-width="7" stroke-linecap="round"/><path d="M321 222l4 9 10 1-7 6 2 10-9-5-8 5 2-10-7-6 10-1Z" fill="#fff2c6" stroke="#a77c4d" stroke-width="2.5" stroke-linejoin="round"/>`,
        shell: `<g transform="translate(351 276)" stroke="#6d8fa0" stroke-width="4" stroke-linejoin="round"><path d="M-29 11Q-25-19 0-28Q25-19 29 11Q17 24 0 22Q-17 24-29 11Z" fill="#9fd6d8"/><path d="M-19 9Q-13-6-8-17m8 36V-22m8 31Q13-6 19-17" fill="none" stroke="#e7f0d4" stroke-width="3" stroke-linecap="round"/></g>`,
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
            ${sceneContext || ""}
            <g class="scene-props">${props[details.prop]}</g>
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
    const scene = sceneDetails[page.scene];

    stopReading();
    art.dataset.scene = page.scene;
    art.dataset.place = scene.place;
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
