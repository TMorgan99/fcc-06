// Bank some good vibe options
const vibes = [
  "...and you are awesome!",
  "...have a wonderful day!",
  "...and you've got this!",
  "...and so is this puppy!"
];

// choose a random good vibe
const vibe = vibes[Math.floor(Math.random() * vibes.length)];

// display a good vibe
document.querySelector(".vibe").append(vibe);
