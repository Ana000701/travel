(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();const o=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7},{id:3,name:"綠島自由行套裝行程",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",area:"台北",description:"嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",rate:8.6,price:1280,group:8},{id:4,name:"清境高空觀景步道二日遊",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",area:"台北",description:"清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",rate:8.2,price:2580,group:12},{id:5,name:"南庄度假村露營車二日遊",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_6.png?raw=true",area:"台中",description:"南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！<br>一泊一食，輕鬆享受露營車樂趣。<br>獨立衛浴與私人戶外露臺。<br>入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",rate:9.2,price:2480,group:2},{id:6,name:"山林悠遊雙人套票",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",area:"台中",description:"山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",rate:9.3,price:880,group:100},{id:7,name:"漁樂碼頭釣魚體驗套票",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_2.png?raw=true",area:"台中",description:"台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",rate:8.2,price:1280,group:5},{id:8,name:"熊森公園親子二日遊套票",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_5.png?raw=true",area:"高雄",description:"來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",rate:8.6,price:2480,group:3}],c=document.querySelector(".card-list"),x=document.querySelector("#filter"),u=document.querySelector(".filter-result");function s(t){t.forEach((e,a)=>{const n=`<li class="card flex flex-col">
            <div class="card-area">${e.area}</div>
            <div class="card-rate">${e.rate}</div>
            <img src="${e.imgUrl}" alt="image" class="rounded-sm h-[180px] object-cover" />
            <div class="flex flex-col h-full px-5 pt-5 pb-3.5">
              <h2 class="card-title">${e.name}</h2>
              <p class="card-description">${e.description}</p>
              <div class="flex justify-between items-center mt-auto">
                <p class="leading-snug">
                  <i class="fa-solid fa-circle-exclamation mr-[6px]"></i
                  >${e.group>20?"限時搶購":`剩下最後 ${e.group} 組`}
                </p>
                <span class="ml-auto mr-1">TWD</span>
                <span class="card-price">$${Number(e.price).toLocaleString()}</span>
              </div>
            </div>
          </li>`;c.innerHTML+=n}),u.textContent=`本次搜尋共 ${o.length} 筆資料`}s(o);function L(t){if(t.target.value==="all"&&(c.innerHTML="",s(o)),t.target.value==="台北"){c.innerHTML="";const e=o.filter(a=>a.area==="台北");s(e),u.textContent=`本次搜尋共 ${e.length} 筆資料`}if(t.target.value==="台中"){c.innerHTML="";const e=o.filter(a=>a.area==="台中");s(e),u.textContent=`本次搜尋共 ${e.length} 筆資料`}if(t.target.value==="高雄"){c.innerHTML="";const e=o.filter(a=>a.area==="高雄");s(e),u.textContent=`本次搜尋共 ${e.length} 筆資料`}}x.addEventListener("change",L);const g=document.querySelector("#name"),f=document.querySelector("#imgUrl"),m=document.querySelector("#area"),h=document.querySelector("#price"),b=document.querySelector("#group"),p=document.querySelector("#rate"),w=document.querySelector("#description"),v=document.querySelectorAll("form p");p.addEventListener("change",t=>{(t.target.value>10||t.target.value<0)&&(t.target.value="",alert("套票星級為1-10分"))});function l(t){t.value===""?(t.classList.add("bg-red1","border-red2","placeholder:text-red2"),v.forEach(e=>e.classList.remove("hidden"))):(t.classList.remove("bg-red1","border-red2","placeholder:text-red2"),v.forEach(e=>e.classList.add("hidden")))}const M=document.querySelector("#submit"),H=document.querySelector("#donutChart");M.addEventListener("click",t=>{t.preventDefault(),l(g),l(f),l(h),l(m),l(b),l(p),l(w);const e={id:o.length+1,name:g.value,imgUrl:f.value,area:m.value,description:w.value,rate:p.value,price:h.value,group:b.value};for(let a in e)if(e[a]==="")return;o.push(e),c.innerHTML="",H.innerHTML="",s(o),y(),x.value=""});async function q(){try{const t=await axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json").then(e=>{e.data.data.forEach(a=>o.push(a)),c.innerHTML="",s(o),y()})}catch(t){console.error(t)}}q();function y(){let t=o.filter(n=>n.area==="台北").length,e=o.filter(n=>n.area==="台中").length,a=o.filter(n=>n.area==="高雄").length;c3.generate({bindto:"#donutChart",size:{height:200,width:200},data:{columns:[["台北",t],["台中",e],["高雄",a]],type:"donut",colors:{台北:"#26C0C7",台中:"#5151D3",高雄:"#E68618"}},donut:{title:"套票地區比重",label:{show:!1},width:10}})}console.log("Hello world!");