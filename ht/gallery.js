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
    const p = photos[category];

    for (let i of p) {
        document.getElementById("gallery-main").innerHTML += 
        `<a class="gallery-image-click" href="image.html"><img class="gallery-image" src="./images/${i}"></img></a>`
    }
    const images = document.getElementsByClassName("gallery-image-click");
    for (let i of images) {
        console.log("a")
        i.addEventListener("click", () => {
        const im = i.children[0].getAttribute("src").split("/").pop();
            window.sessionStorage.setItem("image", im );
        })
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
} else {
    main();
}