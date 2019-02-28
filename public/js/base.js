//ajax函数开始-----start
(function(window){
    function ajax(obj){
      //创建一个默认数据,当用于不填写数据的时候可以默认使用该数据
      var defaults = {
          type: "get",
          url: "#",
          data: {},
          datatype: "json",
          isAsyn: true,
          success: function(result) {
              console.log(result);
          }
      };
      //-------解决数据问题---------------
      //将传入的数据覆盖默认数据
      for (var key in obj) {
          defaults[key] = obj[key];
      }
      //console.log(defaults);
      //将传入的数据进行连接
      var data = "";
      for (var x in defaults.data) {
          data += x + "=" + defaults.data[x] + "&";
      }
      data = data.slice(0, data.length - 1);
      //console.log(data);
      //----------进入ajax步骤----------
      //创建ajax对象
      var xhr = null;
      //判断window是否存在XMLRequestHttp对象
      if (window.XMLHttpRequest) {
          xhr = new XMLHttpRequest();
      } else {
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      //打开连接
      //判断方式是不是get
      if (data) {
          if (defaults.type == "get") {
              defaults.url += "?" + data;
          }
      }
      xhr.open(defaults.type, defaults.url, defaults.isAsyn);
      if (defaults.type == "get") {
          xhr.send(null);
      } else if (defaults.type == "post") {
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          xhr.send(data);
      }
      //------------解决数据返回问题----------
      //判断是否同步
      if (defaults.isAsyn) {  
          //监听对象
          xhr.onreadystatechange = function() {
              if (xhr.readyState == 4 && xhr.status == 200) {
                  var result = null;
                  //判断数据类型
                  if (defaults.datatype == "json") {
                      result = xhr.responseText;
                      result = JSON.parse(result);
                  } else if (defaults.datatype == 'xml') {
                      result = xhr.responseXML;
                  } else {
                      result = xhr.responseText;
                  }
                  defaults.success(result);
              }
          };
      }
      else {
      	if (xhr.readyState == 4 && xhr.status == 200) {
              var result = null;
              //判断数据类型
              if (defaults.datatype == "json") {
                  result = xhr.responseText;
                  result = JSON.parse(result);
              } else if (defaults.datatype == 'xml') {
                  result = xhr.responseXML;
              } else {
                  result = xhr.responseText;
              }
              defaults.success(result);
          }
      }
    }
    window.ajax = ajax;
})(window);
// ajax 函数结束 ----END

// 导航栏商品添加-----start
(function(){
        // 获取元素
        var top = document.querySelectorAll('.m-b-title>li>a');
        var down = document.querySelector('.nav-menu-bar');
    if(down!=null){
        var item = document.querySelectorAll('.menu-bar-box>ul');
        var arr = ['小米手机','红米','电视','笔记本','家电','新品','路由器','智能硬件'];
        var n = [4,5,6,6,6,4,5,4];
        function menu(data){
            for(let i=0;i<top.length-2;i++){
                (function(i){
                    top[i].onmouseover = function() {
                        var index = arr.indexOf(this.innerHTML);
                        if(item[index].children.length == 0){
                            addItem(item[index],n[index],data[i]);
                        }
                        for(var key of item){
                            key.className = ' ';
                        }
                        item[i].className = 'm-s-show';
                            down.style.cssText = "height:230px;";
                        }
                    top[i].onmouseout = function() {
                        down.style.cssText = "height:0px";
                    }
                })(i)
            }
        }
        // 绑定下拉栏，用户鼠标移到时不会变小
        down.addEventListener('mouseover',function(){
            down.style.cssText = "height:230px;";
        });
        down.addEventListener('mouseout',function(){
            down.style.cssText = "height:0px;";
        });


        ajax({
            url:'http://127.0.0.1:3000/product/menu',
            success: function(data) {
                menu(data);
            }
        });

        function addItem(item,count,data){
        var html = '';
        for(let i=0;i<count;i++){
            html += `<li>
                    <a href="javascript:;" class="nav-list">
                        <img src="${data.imgpath}" width="160px" height="110px">
                        <p class="nav-title">${data.title}</p>
                    </a>
                    <p class="price">${data.price}元起</p>
                </li>`
        }
        item.innerHTML = html;
        }
    }
})();
// 导航栏商品添加-----END

// 切换登录+购物车增添---------start
(function(){
    // 获取用户名 并将用户名添加到HTML中
    var info = localStorage.getItem('name');
    var not = document.querySelector('[data-login="false"]');
    if(not != null){
        var login = document.querySelector('[data-login="true"]');
        var uname = document.querySelector('[data-user="name"]');
        // 根据内容切换登录模块
        if(info){
            not.style.cssText = "display:none;";
            login.style.cssText = "display:block;";
            uname.innerHTML = info;
            ajax({
                url:'/product/only',
                success:function(data){
                    allShop(data);
                }
            });
        }else{
            not.style.cssText = "display:blcok;";
            login.style.cssText = "display:none;";
        }
    }

    function allShop(data){
        var shopCount = document.querySelector('[data-shop="count"]');
        var shopItem = document.querySelector('[data-shop="list"]');
        if(shopItem !=null){
            var n = parseInt(shopCount.innerHTML);
            for(let i =0;i<data.length;i++){
                if(localStorage.getItem(data[i].id)){
                    let li = document.createElement('li');   
                    n++;
                    li.innerHTML = `<dl>
                                        <dt>
                                            <dd class="car-img"><img src="${data[i].imgpath}" width="60px" height="60px"></dd>
                                            <dd class="shop-name">
                                                <span>${data[i].title}</span>
                                            </dd>
                                            <dd class="s-price">
                                                <span>${data[i].price}元</span>
                                            </dd>
                                        </dt>
                                        <span class="s-c-del" data-id="${data[i].id}">X</span>
                                    </dl>`;
                    shopItem.appendChild(li);
                }
            }
            shopCount.innerHTML = n;
        }
    }
    
    var shopCar = document.querySelector('[data-shop="list"]');
    var shopCount = document.querySelector('[data-shop="count"]');
    if(shopCar!=null){
        shopCar.addEventListener('mouseover',function(e){
            if(e.target.nodeName=='LI'){
                var i = parseInt(shopCount.innerHTML);
                var del = e.target.querySelector('dl>span');
                del.onclick = function(){
                    localStorage.removeItem(this.dataset.id);
                    shopCar.removeChild(e.target);
                    shopCount.innerHTML = --i;
                }
            }
        });      
    }
})();
// 切换登录+购物车增添---------END

// 退出登录---------start
(function(){
  var menu = document.querySelectorAll('.info-down>li');
  if(menu.length>0){
    menu[0].addEventListener('click',function(){
        location.href = 'http://127.0.0.1:3000/personal.html';
    })
    menu[4].addEventListener('click',function login(){
        localStorage.clear();
        location.reload();
    })
  }
})();
// 退出登录---------END

//轮播图侧边导航栏的预加载---start
(function(){
    var imgs = document.querySelectorAll('.allshop-nav>ul>li');
    var src = [];
    //将自定义行为里的值进行保存
    for(let i=0;i<imgs.length;i++){
        src[i] = [];
        // 获取每个列表项中的图片路径
        let img = imgs[i].querySelectorAll('img');
        for(let n=0;n<img.length;n++){
            src[i][n] = img[n].dataset.src;
        }
    }
    // 鼠标移动到目标时触发函数
    for(let i=0; i<imgs.length;i++){
        //当移动到任意一个列表项时触发鼠标移入事件
        (function(i){
            imgs[i].onmouseover = function(){
                //传入被触发事件的列表项的下下标
                addSrc(i);
            }
        })(i);
    }
    // 给每个img属性添加图片路径
    function addSrc(index){
        //根据传入的列表下标进行，图片个数匹配以及给图片的src赋值
        for(let i =0;i<imgs[index].querySelectorAll('img').length;i++){
            let img = imgs[index].querySelectorAll('img')[i];
            img.src = src[index][i];
        }
    }
})();
//轮播图侧边导航栏的预加载---END

// 一般页面的懒加载方法-------start
// (function(){
//     var lazy = document.querySelectorAll("[data-lazy^='http']");
//     var wHeight = window.innerHeight;    //获取图片显示窗口的高度
//     var img = [];
//     // 页面滚动时，判断图片位置动态加载图片
//     window.onscroll = function(){
//         for(let i=0;i<lazy.length;i++){
//             // 动态获取每个图片的高度
//             img[i] = lazy[i].getBoundingClientRect().top;
//             if(img[i] < (wHeight+100) && img[i]> -100){
//                 lazy[i].src = lazy[i].dataset.lazy;
//             }
//         }
//     }
//     // 当页面加载时，加载在显示窗口中的图片
//     window.addEventListener('load',function load(){
//         for(let i=0;i<img.length;i++){
//             if(img[i]+300 > 0 && img[i] < wHeight){
//                 lazy[i].src = lazy[i].dataset.lazy;
//             }
//         }
//         window.removeEventListener('load',load);
//     })
// })();
// 一般页面的懒加载方法-------END

// 搜索框查询-------start
(function(){
    var s_box = document.querySelector('[data-serch="box"]');
    var s_on = document.querySelector('[data-serch="on"]');
    if(s_box!=null){
        s_box.onkeyup = function(e){
            if(e.keyCode==13){
                if(s_box.value==" "){
                    location.href = `http://127.0.0.1:3000/product_all.html`;
                }else{
                    location.href = `http://127.0.0.1:3000/product_all.html?title=${s_box.value}`;
                }
            }
        }
        s_on.addEventListener('click',function(){
            console.log(1);
            console.log(s_box.value);
            if(s_box.value==""){
                console.log(s_box.value);
                location.href = `http://127.0.0.1:3000/product_all.html`;
            }else{
                location.href = `http://127.0.0.1:3000/product_all.html?title=${s_box.value}`;
            }
        })
    }
})();
// 搜索框查询-------END

