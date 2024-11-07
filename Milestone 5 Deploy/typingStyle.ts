document.addEventListener("DOMContentLoaded", function () {
    const link: HTMLElement | null = document.getElementById("linkedin-link");
    const texts: string[] = ["mshsheikh", "click me"];
    let index: number = 0;
    let typingIndex: number = 0;
    const typingSpeed: number = 100; // Speed of typing effect
    const delay: number = 2000; // Delay between text changes

    function typeText(text: string): void {
        if (!link) return;
        link.textContent = '';
        typingIndex = 0;
        const interval = setInterval(() => {
            if (link) {
                link.textContent += text[typingIndex];
                typingIndex++;
                if (typingIndex >= text.length) {
                    clearInterval(interval);
                    setTimeout(() => {
                        deleteText();
                    }, delay);
                }
            }
        }, typingSpeed);
    }

    function deleteText(): void {
        const interval = setInterval(() => {
            if (link && link.textContent) {
                link.textContent = link.textContent.slice(0, -1);
                if (link.textContent === '') {
                    clearInterval(interval);
                    changeText();
                }
            }
        }, typingSpeed);
    }

    function changeText(): void {
        index = (index + 1) % texts.length;
        typeText(texts[index]);
    }

    if (link) {
        typeText(texts[index]);
    }
});
