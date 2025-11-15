const btn = document.getElementById("pickBtn");
const result = document.getElementById("result");
const loading = document.getElementById("loading");

const options = [
    "🎬 Movie: 'The Guy Who Said He'd Sleep Early' — Horror",
    "🍿 Episode 1: When You Press 'Skip Intro' But It Skips Too Much",
    "🤣 Documentary: People Who Say 'I'm Not Hungry' Then Eat Your Food",
    "📺 Show: 'WiFi Drops For 0.2 Seconds' — Drama",
    "😐 Reality TV: Your Life When You Forget Your Charger",
    "🔥 Action: The Remote Is On The Other Side Of The Couch",
    "🧠 Sci-Fi: You Trying To Understand Math At 2AM",
    "🤡 Comedy: Group Project But Only One Person Works",
    "🕵️‍♂️ Mystery: Where Did All My Money Go?",
    "⚡ Thriller: Phone Battery 1% And No Charger Anywhere",
    "🍩 Special: The Snack You Saved For Later… Gone.",
    "😴 Episode: Falling Asleep After Saying 'One More Episode'",
    "💀 Documentary: When Autocorrect Embarrasses You",
    "😂 Stand-up: The Teacher Calling You When You're Not Ready",
    "📢 Breaking News: You Open The Fridge For The 10th Time"
];

btn.addEventListener("click", () => {
    result.style.opacity = 0;
    loading.style.display = "block";

    setTimeout(() => {
        const random = Math.floor(Math.random() * options.length);
        result.textContent = options[random];
        result.style.opacity = 1;
        loading.style.display = "none";
    }, 1000);
});
