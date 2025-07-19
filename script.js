function generateWelcomeMessage() {
    const chime = new Audio('assets/audio/chime.mp3');
    chime.volume = 0.2;
    chime.play();
  
    const messages = {
      joyful: [
        "Today is your chance to bloom beautifully 🌸",
        "Let your heart dance to its own rhythm 💃",
        "Joy hides in the smallest things — find it!"
      ],
      peaceful: [
        "You are allowed to rest. You are allowed to breathe 🌿",
        "Peace is not around you. It's within you 🕊",
        "Let the world slow down. Just for a while."
      ],
      healing: [
        "Healing isn’t always loud — sometimes it’s just gentle survival 💫",
        "Even broken stars still shine ✨",
        "Your story is not over yet; it's unfolding."
      ]
    };
  
    const chance = Math.random() * 100;
    let category;
    if (chance < 40) {
      category = 'joyful';
    } else if (chance < 75) {
      category = 'peaceful';
    } else {
      category = 'healing';
    }
  
    const selected = messages[category];
    const randomMessage = selected[Math.floor(Math.random() * selected.length)];
    document.getElementById('message').textContent = randomMessage;
  }
  