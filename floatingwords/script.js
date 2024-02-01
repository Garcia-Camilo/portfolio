const info_btn = document.querySelector('#info_btn');
const info_text = document.querySelector('#text_info');
const drawings_btn = document.querySelector('#drawings_btn');
const drawings_section = document.querySelector('#drawings_section');



var info_state = false;

info_btn.addEventListener('click', () => {
    if (info_state == true){
        info_text.style.display = 'none';
        return info_state = false;
    }
    if (info_state ==false){
        info_text.style.display = 'block';
        return info_state = true;
    }
});

var drawings_state = false;

drawings_btn.addEventListener('click', () => {
    if (drawings_state == true){
        drawings_section.style.display = 'none';
        return drawings_state = false;
    }
    if (drawings_state ==false){
        drawings_section.style.display = 'block';
        return drawings_state = true;
    }
});


const shop_section = document.querySelector('.shop');
const text_section = document.querySelector('.text');

function handleScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // Get the scroll position
    shop_section.style.transform = `translateY(${scrollTop*2}px)`; // Translate div in the opposite direction
};

window.addEventListener('scroll', handleScroll);



var state_title = false;

const garments = document.querySelectorAll('.garment');

console.log(garments);
// Function to handle mouseover event
function handleMouseOver() {
    if (state_title == false) {
        shop_section.style.mixBlendMode = 'unset';
        shop_section.style.filter = 'none';
        this.nextElementSibling.style.display = 'block';
        state_title = true;
    }
}

// Function to handle mouseout event
function handleMouseOut() {
    if (state_title == true) {
        shop_section.style.mixBlendMode = 'screen';
        shop_section.style.filter = 'invert(1)';
        this.nextElementSibling.style.display = 'none';
        state_title = false;
    }
}

// Loop through all garments and add event listeners
for (const garment of garments) {
    garment.children[0].addEventListener('mouseover', handleMouseOver);
    garment.children[0].addEventListener('mouseout', handleMouseOut);
}


// click on the outside of the img and it goes back to the first style 

// Function to change the style of the image
function changeImageStyle() {
    if (state_title == true){
    shop_section.style.mixBlendMode = 'screen';
    shop_section.style.filter = 'invert(1)';
    for (const garment of garments){
        garment.children[0].nextElementSibling.style.display = 'none';
    }
    }
}

// Check if the device is a mobile device using media query
if (window.matchMedia("(max-width: 800px)").matches) {
    // Attach a click event listener to the document
    document.addEventListener('click', function (event) {
        // Check if the clicked element is not the image
        if (event.target.tagName !== 'IMG') {
            // Change the style of the image
            changeImageStyle();
        }
    });
}


//// Longs sleeve 

const lonsleeve_img = document.getElementById('longsleeve-img');
 // Declare clickCount outside the event listener
 let clickCount = 0;
// Add a click event listener to the image
lonsleeve_img.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (lonsleeve_img.src.endsWith('images/white-longsleeve.png')) {
                // If it's the first image, change it to the second image
                lonsleeve_img.src = 'images/white-longsleeve-2.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                lonsleeve_img.src = 'images/white-longsleeve.png';
            }

            // Reset click count after the second click
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (lonsleeve_img.src.endsWith('images/white-longsleeve.png')) {
            // If it's the first image, change it to the second image
            lonsleeve_img.src = 'images/white-longsleeve-2.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            lonsleeve_img.src = 'images/white-longsleeve.png';
        }
    }
});

/// Pants 

const pants = document.querySelector('#pants-img');

pants.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (pants.src.endsWith('images/pants.png')) {
                // If it's the first image, change it to the second image
                pants.src = 'images/pants-1.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                pants.src = 'images/pants.png';
            }

            // Reset click count after the second click
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (pants.src.endsWith('images/pants.png')) {
            // If it's the first image, change it to the second image
            pants.src = 'images/pants-1.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            pants.src = 'images/pants.png';
        }
    }
});


/// square - black

const square_black = document.querySelector('#square-black-img');

square_black.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (square_black.src.endsWith('images/square-black.png')) {
                // If it's the first image, change it to the second image
                square_black.src = 'images/square-black-1.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                square_black.src = 'images/square-black.png';
            }

            // Reset click count after the second click
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (square_black.src.endsWith('images/square-black.png')) {
            // If it's the first image, change it to the second image
            square_black.src = 'images/square-black-1.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            square_black.src = 'images/square-black.png';
        }
    }
});

/// Muji 


const muji = document.querySelector('#muji-img');

muji.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (muji.src.endsWith('images/muji.png')) {
                // If it's the first image, change it to the second image
                muji.src = 'images/muji-frente.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                muji.src = 'images/muji.png';
            }

            // Reset click count after the second click
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (muji.src.endsWith('images/muji.png')) {
            // If it's the first image, change it to the second image
            muji.src = 'images/muji-frente.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            muji.src = 'images/muji.png';
        }
    }
});

/// Humbro 

const humbro = document.querySelector('#humbro-img');

humbro.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (humbro.src.endsWith('images/humbro.png')) {
                // If it's the first image, change it to the second image
                humbro.src = 'images/humbro-back.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                humbro.src = 'images/humbro.png';
            }

            // Reset click count after the second click
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (humbro.src.endsWith('images/humbro.png')) {
            // If it's the first image, change it to the second image
            humbro.src = 'images/humbro-back.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            humbro.src = 'images/humbro.png';
        }
    }
});


// hat 

const hat = document.querySelector('#hat-img');

hat.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (hat.src.endsWith('images/hat.png')) {
                // If it's the first image, change it to the second image
                hat.src = 'images/hat-flash.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                hat.src = 'images/hat.png';
            }

            // Reset click count after the second click
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (hat.src.endsWith('images/hat.png')) {
            // If it's the first image, change it to the second image
            hat.src = 'images/hat-flash.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            hat.src = 'images/hat.png';
        }
    }
});

// Flowers shirt


const flowers = document.querySelector('#flowers-img');

flowers.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (flowers.src.endsWith('images/flowers-front.png')) {
                // If it's the first image, change it to the second image
                flowers.src = 'images/flowers-back.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                flowers.src = 'images/flowers-front.png';
            }

            // Reset click count after the second click
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (flowers.src.endsWith('images/flowers-front.png')) {
            // If it's the first image, change it to the second image
            flowers.src = 'images/flowers-back.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            flowers.src = 'images/flowers-front.png';
        }
    }
});

/// brown-shirt


const brown = document.querySelector('#brown-img');

brown.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (brown.src.endsWith('images/brown-shirt.png')) {
                // If it's the first image, change it to the second image
                brown.src = 'images/brown-shirt-1.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                brown.src = 'images/brown-shirt.png';
            }

            // Reset click count after the second click
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (brown.src.endsWith('images/brown-shirt.png')) {
            // If it's the first image, change it to the second image
            brown.src = 'images/brown-shirt-1.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            brown.src = 'images/brown-shirt.png';
        }
    }
});


/// mini sweatshirt

const mini_sweatshirt = document.querySelector('#mini-img');

mini_sweatshirt.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (mini_sweatshirt.src.endsWith('images/mini-sweatshirt.png')) {
                // If it's the first image, change it to the second image
                mini_sweatshirt.src = 'images/mini_sweatshirt-1.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                mini_sweatshirt.src = 'images/mini_sweatshirt.png';
            }

            // Reset click count after the second click
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (mini_sweatshirt.src.endsWith('images/mini_sweatshirt.png')) {
            // If it's the first image, change it to the second image
            mini_sweatshirt.src = 'images/mini_sweatshirt-1.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            mini_sweatshirt.src = 'images/mini_sweatshirt.png';
        }
    }
});

/// Black-shirt

const black_shirt = document.querySelector('#black-img');

black_shirt.addEventListener('click', function() {
    
    // Check the current src attribute
    if (window.matchMedia("(max-width: 800px)").matches) {
        if (clickCount === 2) {
            if (black_shirt.src.endsWith('images/black-shirt.png')) {
                // If it's the first image, change it to the second image
                black_shirt.src = 'images/black-shirt-1.png';
            } else {
                // If it's the second image (or any other), change it back to the first image
                black_shirt.src = 'images/black-shirt.png';
            }

            // Reset click count after the second clicks
            clickCount = 0;
        }

        // Increment clickCount for each click
        clickCount++;
    } else {
        if (black_shirt.src.endsWith('images/black-shirt.png')) {
            // If it's the first image, change it to the second image
            black_shirt.src = 'images/black_shirt-1.png';
        } else {
            // If it's the second image (or any other), change it back to the first image
            black_shirt.src = 'images/black-shirt.png';
        }
    }
});
