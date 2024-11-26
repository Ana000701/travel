const items = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
  {
    id: 3,
    name: "綠島自由行套裝行程",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
    area: "台北",
    description:
      "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
    rate: 8.6,
    price: 1280,
    group: 8,
  },
  {
    id: 4,
    name: "清境高空觀景步道二日遊",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",
    area: "台北",
    description:
      "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
    rate: 8.2,
    price: 2580,
    group: 12,
  },
  {
    id: 5,
    name: "南庄度假村露營車二日遊",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_6.png?raw=true",
    area: "台中",
    description:
      "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！<br>一泊一食，輕鬆享受露營車樂趣。<br>獨立衛浴與私人戶外露臺。<br>入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
    rate: 9.2,
    price: 2480,
    group: 2,
  },
  {
    id: 6,
    name: "山林悠遊雙人套票",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",
    area: "台中",
    description:
      "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
    rate: 9.3,
    price: 880,
    group: 100,
  },
  {
    id: 7,
    name: "漁樂碼頭釣魚體驗套票",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_2.png?raw=true",
    area: "台中",
    description:
      "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
    rate: 8.2,
    price: 1280,
    group: 5,
  },
  {
    id: 8,
    name: "熊森公園親子二日遊套票",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_5.png?raw=true",
    area: "高雄",
    description:
      "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
    rate: 8.6,
    price: 2480,
    group: 3,
  },
];
// 初始化表單
const list = document.querySelector(".card-list");
const filter = document.querySelector("#filter");
const filterResult = document.querySelector(".filter-result");

function renderList(arr) {
  arr.forEach((item, index) => {
    const card = `<li class="card flex flex-col">
            <div class="card-area">${item.area}</div>
            <div class="card-rate">${item.rate}</div>
            <img src="${
              item.imgUrl
            }" alt="image" class="rounded-sm h-[180px] object-cover" />
            <div class="flex flex-col h-full px-5 pt-5 pb-3.5">
              <h2 class="card-title">${item.name}</h2>
              <p class="card-description">${item.description}</p>
              <div class="flex justify-between items-center mt-auto">
                <p class="leading-snug">
                  <i class="fa-solid fa-circle-exclamation mr-[6px]"></i
                  >${item.group > 20 ? "限時搶購" : `剩下最後 ${item.group} 組`}
                </p>
                <span class="ml-auto mr-1">TWD</span>
                <span class="card-price">$${Number(
                  item.price
                ).toLocaleString()}</span>
              </div>
            </div>
          </li>`;
    list.innerHTML += card;
  });
  filterResult.textContent = `本次搜尋共 ${items.length} 筆資料`;
}
renderList(items);

// 篩選功能
function filterItem(e) {
  if (e.target.value === "all") {
    list.innerHTML = "";
    renderList(items);
  }
  if (e.target.value === "台北") {
    list.innerHTML = "";
    const result = items.filter((item) => item.area === "台北");
    renderList(result);
    filterResult.textContent = `本次搜尋共 ${result.length} 筆資料`;
  }
  if (e.target.value === "台中") {
    list.innerHTML = "";
    const result = items.filter((item) => item.area === "台中");
    renderList(result);
    filterResult.textContent = `本次搜尋共 ${result.length} 筆資料`;
  }
  if (e.target.value === "高雄") {
    list.innerHTML = "";
    const result = items.filter((item) => item.area === "高雄");
    renderList(result);
    filterResult.textContent = `本次搜尋共 ${result.length} 筆資料`;
  }
}
filter.addEventListener("change", filterItem);

// 取得輸入值
const name = document.querySelector("#name");
const imgUrl = document.querySelector("#imgUrl");
const area = document.querySelector("#area");
const price = document.querySelector("#price");
const group = document.querySelector("#group");
const rate = document.querySelector("#rate");
const description = document.querySelector("#description");
const p = document.querySelectorAll("form p");
console.log(p);
// 驗證輸入符合條件
rate.addEventListener("change", (e) => {
  if (e.target.value > 10 || e.target.value < 0) {
    e.target.value = "";
    alert("套票星級為1-10分");
  }
});

function changeColor(item) {
  if (item.value === "") {
    item.classList.add("bg-red1", "border-red2", "placeholder:text-red2");
    p.forEach((item) => item.classList.remove("hidden"));
  } else {
    item.classList.remove("bg-red1", "border-red2", "placeholder:text-red2");
    p.forEach((item) => item.classList.add("hidden"));
  }
}
// 新增項目
const submitBtn = document.querySelector("#submit");
const initialDonutChart = document.querySelector("#donutChart");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  changeColor(name);
  changeColor(imgUrl);
  changeColor(price);
  changeColor(area);
  changeColor(group);
  changeColor(rate);
  changeColor(description);

  const newItem = {
    id: items.length + 1,
    name: name.value,
    imgUrl: imgUrl.value,
    area: area.value,
    description: description.value,
    rate: rate.value,
    price: price.value,
    group: group.value,
  };
  for (let key in newItem) {
    if (newItem[key] === "") return;
  }
  items.push(newItem);
  list.innerHTML = "";
  initialDonutChart.innerHTML = "";
  renderList(items);
  donutChart();
  filter.value = "";
});

// axios取資料
async function getData() {
  try {
    const response = await axios
      .get(
        "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json"
      )
      .then((res) => {
        res.data.data.forEach((item) => items.push(item));
        list.innerHTML = "";
        renderList(items);
        donutChart();
      });
  } catch (error) {
    console.error(error);
  }
}
getData();

// 畫圖
function donutChart() {
  let data1 = items.filter((item) => item.area === "台北").length;
  let data2 = items.filter((item) => item.area === "台中").length;
  let data3 = items.filter((item) => item.area === "高雄").length;
  let donutChart = c3.generate({
    bindto: "#donutChart",
    size: {
      height: 200,
      width: 200,
    },
    data: {
      columns: [
        ["台北", data1],
        ["台中", data2],
        ["高雄", data3],
      ],
      type: "donut",
      colors: {
        台北: "#26C0C7",
        台中: "#5151D3",
        高雄: "#E68618",
      },
    },
    donut: {
      title: "套票地區比重",
      label: {
        show: false,
      },
      width: 10,
    },
  });
}
