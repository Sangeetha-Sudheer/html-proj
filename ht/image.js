const photos = 
{
    "LPU": ["lpu1.jpg", "lpu2.jpg", "lpu3.jpg", "lpu4.jpg", "lpu5.jpg", "lpu6.jpg", ],
    "Architecture": ["mon1.jpg", "mon2.jpg", "mon3.jpg", "mon4.jpg", "mon5.jpg", "mon6.jpg", "mon7.jpg", "mon8.jpg", "mon9.jpg", "mon10.jpg", ],
    "Food": ["food1.jpg", "food2.jpg", "food3.jpg", "food4.jpg", "food5.jpg", "food6.jpg", "food7.jpg", "food8.jpg", "food9.jpg", ],
    "Nature": ["place1.jpg", "place2.jpg", "place3.jpg", "place4.jpg", "place5.jpg", "place6.jpg", ],
    "Flowers": ["flower1.jpg", "flower2.jpg", "flower3.jpg", "flower4.jpg", "flower5.jpg", "flower6.jpg", "flower7.jpg", ],
    "Wildlife": ["w1.jpg", "w2.jpg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg", "w7.jpg", ],
}

function main() {
    const category = window.sessionStorage.getItem("category");
    let image = window.sessionStorage.getItem("image");
        document.getElementById("image-main").innerHTML += 
        `<div id="image-left">❮</div>
        <img id="image-zoom" src="./images/${image}"></img>
        <div id="image-right">❯</div>`
        
        const img = document.getElementById("image-zoom");
        img.addEventListener("wheel", (event) => {
            const scrollAmount = -Math.floor(event.deltaY);
            console.log(scrollAmount)
            const currWidth = parseInt(img.clientWidth)
            console.log(currWidth, img.style.width);
            img.style.width = Math.max(500, currWidth + scrollAmount) + "px";
        })
        const left = document.getElementById("image-left");
        const right = document.getElementById("image-right");

        left.addEventListener("click", () => {
            const ind = photos[category].indexOf(image) - 1;
            if (ind < 0) return;
            newImg = photos[category][ind];
            image = newImg;
            window.sessionStorage.setItem("image", newImg);
            img.setAttribute("src", `./images/${newImg}`)
        });

        right.addEventListener("click", () => {
            const ind = photos[category].indexOf(image) + 1;
            if (ind > photos[category].length - 1) return;
            newImg = photos[category][ind];
            image = newImg;
            window.sessionStorage.setItem("image", newImg);
            img.setAttribute("src", `./images/${newImg}`)
        });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
} else {
    main();
}