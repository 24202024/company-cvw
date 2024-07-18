document.addEventListener('DOMContentLoaded', function () {
    const animTextElements = document.querySelectorAll('.anim-text1');
    animTextElements.forEach((element, index) => {
        const textLength = element.textContent.length;
        element.style.setProperty('--num-steps', textLength * 40); // Увеличение количества шагов
        element.style.setProperty('--ch-width', `${textLength}ch`);
        
        const delay = index * 10; // Задержка между анимациями для каждого элемента
        element.style.animationDelay = `${delay}s`;
    });
});
