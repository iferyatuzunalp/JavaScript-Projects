window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.floating-note').style.left = '20px';
    }, 800);
    
    // Create more bubbles dynamically
    for (let i = 0; i < 5; i++) {
        let bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.width = Math.random() * 60 + 30 + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.top = Math.random() * 100 + '%';
        bubble.style.left = Math.random() * 100 + '%';
        document.body.appendChild(bubble);
    }
});