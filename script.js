let currentIndex = 0;

    function moveSlide(direction) {
        const slider = document.getElementById('slider');
        const slides = slider.children.length;
        const slideWidth = slider.children[0].offsetWidth;

        // Update current index based on the direction
        currentIndex += direction;

        // Prevent out-of-bound indices
        if (currentIndex < 0) {
            currentIndex = slides - 1; // Go to the last slide if clicking left at the first slide
        } else if (currentIndex >= slides) {
            currentIndex = 0; // Go to the first slide if clicking right at the last slide
        }

        // Move the slider
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }