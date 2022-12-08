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
        document.getElementById("categories-main").innerHTML += `<h1 class="category-title">Categories</h1>`;
    for (let i in photos) {
        document.getElementById("categories-main").innerHTML += `<a class="category-tile" href="./gallery.html">${i}</a>`;
    }
    const tiles = document.getElementsByClassName("category-tile");
    for (let i of tiles) {
        i.addEventListener("click", () => {
            window.sessionStorage.setItem("category", i.innerHTML);
        })
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", main);
} else {
    main();
}