function Play() {
    const audio = new Audio("Song.mp3");

    audio.play().catch(console.error);
}
    