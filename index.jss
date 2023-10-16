<script>
        const keyboard = document.getElementById("keyboard");
        const keys = keyboard.querySelectorAll(".key");

        document.addEventListener("keydown", (e) => {
            const keyPressed = e.key.toUpperCase();

            keys.forEach((key) => {
                const keyData = key.getAttribute("data-key");
                if (keyData === keyPressed) {
                    key.classList.add("highlighted");
                }
            });
        });

        document.addEventListener('keyup', (e) => {
            const keyPressed = e.key.toUpperCase();

            keys.forEach((key) => {
                const keyData = key.getAttribute('data-key');
                if (keyData === keyPressed) {
                    key.classList.remove('highlighted');
                }
            });
        });
    </script>