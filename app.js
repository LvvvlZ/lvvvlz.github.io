let currentData = [];

function loadRegion(region){

    const insects = window.REGIONS[region];

    if(!insects){
        alert("暂无数据");
        return;
    }

    currentData = insects;

    document
        .getElementById("homePage")
        .classList.add("hidden");

    document
        .getElementById("regionPage")
        .classList.remove("hidden");

    document
        .getElementById("regionTitle")
        .innerText = region;

    renderInsects(insects);
}

function renderInsects(data){

    const grid =
    document.getElementById("insectGrid");

    grid.innerHTML = "";

    data.forEach(insect=>{

        const card =
        document.createElement("div");

        card.className = "card";

        card.innerHTML = `

        <img
        src="${insect.images.adult}"
        onerror="
        this.src='assets/no-image.jpg'
        ">

        <div class="card-body">

            <div class="card-title">
                ${insect.name}
            </div>

            <div class="card-sub">
                ${insect.scientificName}
            </div>

        </div>
        `;

        card.addEventListener(
            "click",
            () => showDetail(insect)
        );

        grid.appendChild(card);
    });
}

function searchInsects(){

    const keyword =
    document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered =
    currentData.filter(item=>{

        return (

            item.name
            .toLowerCase()
            .includes(keyword)

            ||

            item.scientificName
            .toLowerCase()
            .includes(keyword)

            ||

            item.englishName
            .toLowerCase()
            .includes(keyword)

        );

    });

    renderInsects(filtered);
}

function imgTag(src){

    return `
    <img
        src="${src}"
        referrerpolicy="no-referrer"
        onerror="this.src='assets/no-image.jpg'">
    `;
}

function showDetail(insect){

    const body =
    document.getElementById("modalBody");

    body.innerHTML = `

    <h1>${insect.name}</h1>

    <p>
        <strong>${insect.englishName}</strong>
    </p>

    <p>
        <em>${insect.scientificName}</em>
    </p>

    <div class="info-section">

        <h2>基本信息</h2>

        <table class="info-table">

            <tr>
                <td>中文名</td>
                <td>${insect.name}</td>
            </tr>

            <tr>
                <td>英文名</td>
                <td>${insect.englishName}</td>
            </tr>

            <tr>
                <td>学名</td>
                <td>${insect.scientificName}</td>
            </tr>

            <tr>
                <td>体长</td>
                <td>${insect.size}</td>
            </tr>

            <tr>
                <td>寿命</td>
                <td>${insect.lifespan}</td>
            </tr>

        </table>

    </div>

    <div class="info-section">

        <h2>分类学</h2>

        <table class="info-table">
            <tr>
                <td>界</td>
                <td>
                    ${insect.taxonomy.kingdomCn}
                    <br>
                    <small><em>${insect.taxonomy.kingdom}</em></small>
                </td>
            </tr>
            <tr>
                <td>门</td>
                <td>
                    ${insect.taxonomy.phylumCn}
                    <br>
                    <small><em>${insect.taxonomy.phylumCn}</em></small>
                </td>
            </tr>
            <tr>
                <td>纲</td>
                <td>
                    ${insect.taxonomy.classCn}
                    <br>
                    <small><em>${insect.taxonomy.classCn}</em></small>
                </td>
            </tr>

            <tr>
                <td>目</td>
                <td>
                    ${insect.taxonomy.orderCn}
                    <br>
                    <small><em>${insect.taxonomy.order}</em></small>
                </td>
            </tr>

            <tr>
                <td>科</td>
                <td>
                    ${insect.taxonomy.familyCn}
                    <br>
                    <small><em>${insect.taxonomy.family}</em></small>
                </td>
            </tr>

            <tr>
                <td>属</td>
                <td>
                    ${insect.taxonomy.genusCn}
                    <br>
                    <small><em>${insect.taxonomy.genus}</em></small>
                </td>
            </tr>

            <tr>
                <td>种</td>
                <td>
                    ${insect.taxonomy.speciesCn}
                    <br>
                    <small><em>${insect.taxonomy.species}</em></small>
                </td>
            </tr>

        </table>

    </div>

    <div class="info-section">

        <h2>形态特征</h2>

        <p>${insect.description}</p>

    </div>

    <div class="info-section">

        <h2>生活习性</h2>

        <p>${insect.behavior}</p>

    </div>

    <div class="info-section">

        <h2>食性</h2>

        <p>${insect.food.join("、")}</p>

    </div>

    <div class="info-section">

        <h2>繁殖信息</h2>

        <p>${insect.reproduction}</p>

    </div>

    <div class="info-section">

        <h2>分布区域</h2>

        <p>${insect.distribution.join("、")}</p>

    </div>

    <div class="info-section">

        <h2>栖息环境</h2>

        <p>${insect.habitat.join("、")}</p>

    </div>

    <div class="info-section">

        <h2>保护状态</h2>

        <p>${insect.status}</p>

    </div>

    <div class="info-section">

        <h2>图片库</h2>

        <div class="gallery">

            ${imgTag(insect.images.adult)}

            ${imgTag(insect.images.detail)}

            ${imgTag(insect.images.larva)}

            ${imgTag(insect.images.egg)}

            ${imgTag(insect.images.habitat)}

        </div>

    </div>

    `;

    document
        .getElementById("modal")
        .classList.remove("hidden");
}

function closeModal(){

    document
        .getElementById("modal")
        .classList.add("hidden");
}

function backHome(){

    document
        .getElementById("regionPage")
        .classList.add("hidden");

    document
        .getElementById("homePage")
        .classList.remove("hidden");
}