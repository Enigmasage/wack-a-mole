## 🎮 Super Mario Whack-a-Mole\!

This is a fun, browser-based **Whack-a-Mole** game re-imagined with characters and elements from the *Super Mario* universe. Test your reflexes by trying to hit the good targets while avoiding the dangerous ones\!

### 🎯 Gameplay Goal

The main objective is to score the highest possible points before you make a mistake:

  * **Hit the Target:** Click on **Monty Mole** (the good target) as it briefly pops out of the green pipes to score points.
  * **Avoid the Danger:** Do *not* click on the dangerous **Piranha Plants** (the red and green ones). Hitting a plant results in an instant **GAME OVER**\!
  * **Restart:** After a Game Over, a **RePlay 🔁** button appears, allowing you to quickly reset the score and start a new game.

### ✨ Features

  * **Mario Theme:** The game uses familiar assets, including **Piranha Plants**, **Monty Mole**, green pipes, and a background inspired by the *Super Mario Maker* art style.
  * **Dynamic Scoring:** Track your score in real-time at the top of the screen.
  * **Randomized Targets:** The Mole and the two Piranha Plants appear randomly across the $3 \times 3$ grid of pipes.
  * **Set Intervals:** The Mole appears every **1000 milliseconds (1 second)**, and the two Plants appear every **2000 milliseconds (2 seconds)**, keeping the action fast-paced.
  * **Simple Web Tech:** Built entirely using HTML, CSS, and vanilla JavaScript.

### 🛠️ Technologies Used

  * **HTML5:** For the game structure (board, score, and restart button).
  * **CSS3:** For all styling, including the grid layout, background images (soil, pipes), and responsiveness.
  * **JavaScript (ES6):** For the core game logic, including:
      * Setting the game board and tile click events.
      * Handling target placement using `setInterval()` and `Math.random()`.
      * Updating the score and managing the **GAME OVER** state.

### 🚀 How to Play Locally

1.  **Clone the Repository:**
    ```bash
    git clone [Your Repository URL]
    ```
2.  **Open the File:**
    Locate the `mole.html` file in the cloned folder and open it with any web browser (Chrome, Firefox, Edge, etc.).
3.  **Start Whacking\!**
    The game will begin automatically. Click quickly to score points\!

-----
