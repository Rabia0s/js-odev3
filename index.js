
const menuData = {
    appetizers: [
        { name: "Bruschetta", description: "Kızarmış ekmek üzerine domates ve fesleğen.", image: "https://cdn.yemek.com/mnresize/1250/833/uploads/2024/03/bruschetta-yemekcom.jpg" },
        { name: "Avokadolu Dip", description: "Avokadolu dip sos, yanına çıtır.", image: "https://ideacdn.net/idea/bf/88/myassets/products/273/avocadodip.jpg?revision=1701613233" } ,

        { name: "Şarküteri Peynir Kutusu", description: "peynir topları (beyaz susam, haşhaş, ve maydanoz kaplanmış), parmesan peyniri, kars gravyeri, isli çerkez peyniri, dana breasola, dana jambon, kuru kayısı, mor üzüm, ceviz, simit kıtırları.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYb3HFX4wyGQytwdDpQ_NvcxGC-wnXF1AKUg&s" },

        { name: "Yeşil Elmalı Ispanak Salatası", description: "Ispanak, yeşil elma yanında tulum peyniri sosu ile.", image: "https://ideacdn.net/idea/bf/88/myassets/products/917/misafirliq-ispanak-salatasi.jpg?revision=1697143329" },

        { name: "Falafel", description: "Nohutla yapılmış falafel topları yanında tahin sosu ile.", image: "https://static01.nyt.com/images/2024/01/10/multimedia/10Felafel-wqbp/10Felafel-wqbp-superJumbo.jpg" }
    ],
    'main-courses': [
        { name: "Izgara Tavuk", description: "Izgara tavuk göğsü, sebzeler ile servis edilir.", image: "https://cdn.yemek.com/mncrop/940/625/uploads/2023/04/izgara-tavuk-onecikan.jpg" },



        { name: "Izgara Bonfile", description: "Patates püresi üzerine mühürlenmiş bonfile.", image: "https://ideacdn.net/idea/bf/88/myassets/products/026/misafirliq-bonfile.jpg?revision=1697143329" },




        { name: "Kuzu Pirzola Kafes", description: "Kuzu kafes içine iç pilavıyla.", image: "https://ideacdn.net/idea/bf/88/myassets/products/027/misafirliq-kuzu-pirzola-kafes.jpg?revision=1704278739" },




        { name: "Pazıya Sarılı Levrek", description: "Taze pazı ve deniz levreği üstüne şefin özel sosuyla..", image: "https://www.sahrapsoysal.com/resim-pazili-levrek-buglama-tarifi-3464.jpg" }



    ],
    desserts: [
        { name: "Tiramisu", description: "Kahve ve mascarpone peyniri ile yapılan klasik İtalyan tatlısı.", image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/tiramisu_40_11zon.webp" },



        { name: "Tarçınlı Çörek", description: "taze taçından ve milföy hamurundan kremasıyla sunulmaktadır.", image: "https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-gluten-free-cinnamon-rolls-1630931163.jpg" },



        { name: "Meyveli Rulo Pasta", description: "mevsim meyveleri yumuşacık pandispanya kekiyle.", image: "https://ideacdn.net/idea/bf/88/myassets/products/690/misafirliq-meyveli-rulo-pasta.jpg?revision=1716313503" },




        { name: "Sufle", description: "Sıcak çikolata suflesi.", image: "https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/sufle_21_11zon.webp" }



    ],
    drinks: [
        { name: "Ev Yapımı Limonata", description: "Soğuk ve taze.", image: "https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-konsantre-limonata-01e50b99-5890-411f-a4c2-997a71e8a5cc.jpg" },


        { name: "Meyveli Punch", description: "Taze sıkılmış elma suyu ve mevsim meyveleri.", image: "https://ideacdn.net/idea/fk/95/myassets/products/006/whatsapp-image-2021-11-26-at-13-06-38.jpeg?revision=1697143329" }
    ]
};

function showCategory(category) {
    const menuContent = document.getElementById("menu-content");
    menuContent.innerHTML = '';
    
    menuData[category].forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "menu-item";
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;
        
        menuContent.appendChild(itemElement);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    showCategory('appetizers');
});
