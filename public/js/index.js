(function(){
    ajax({
        url:'http://127.0.0.1:3000/user/fanjulist',
        success:function(data){
            add(data);
        }
    });    
    function add(data){
        
        var list=document.querySelector(".videolist")
        var html = "";
       
        for(var item of data){
            var p=Math.floor(Math.random()*4)
     
            html +=`<li>
                    <div class="bannercn">
                            <a href="http://127.0.0.1:3000/video.html?uid=${item.video_id}">
                                <div class="bg">
                                    <img src="${item.video_href}" alt="">
                                    <i class='i${p}'></i>
                                </div>
                                <span>${item.video_info}</span>
                            </a>
                        </div>
                </li>`;
        }
        list.innerHTML=html;
        //console.log(list);
    }
    //周一
    ajax({
        url:'http://127.0.0.1:3000/user/zhouqi1',
        success:function(data){
            zhouqi1(data);
            //console.log(data)
        }
    });
    function zhouqi1(data){
        var list=document.querySelector("#zhouqi1")
        var html="";
        for(var item of data){
            html +=`<li class="timeline-item">
                        <a class="timeline-link" href="javascript:;">
                            <img src="${item.img}" alt="">
                        </a>
                        <div class="timeline-item-right">
                            <p class="t">
                                <a href="javascript:;" title="${item.title}">
                                    <span>${item.title}</span>
                                </a>
                            </p>
                            <p class="num">
                                更新至
                                <a href="javascript:;">${item.updata}</a>
                            </p>
                        </div>
                    </li>`
        }
        list.innerHTML=html
    }
    //周二
    ajax({
        url:'http://127.0.0.1:3000/user/zhouqi2',
        success:function(data){
            zhouqi2(data);
        }
    });
    function zhouqi2(data){
        var list=document.querySelector("#zhouqi2")
        var html="";
        for(var item of data){
            html +=`<li class="timeline-item">
                        <a class="timeline-link" href="javascript:;">
                            <img src="${item.img}" alt="">
                        </a>
                        <div class="timeline-item-right">
                            <p class="t">
                                <a href="javascript:;" title="${item.title}">
                                    <span>${item.title}</span>
                                </a>
                            </p>
                            <p class="num">
                                更新至
                                <a href="javascript:;">${item.updata}</a>
                            </p>
                        </div>
                    </li>`
        }
        list.innerHTML=html
    }
    //周三
    ajax({
        url:'http://127.0.0.1:3000/user/zhouqi3',
        success:function(data){
            zhouqi3(data);
        }
    });
    function zhouqi3(data){
        var list=document.querySelector("#zhouqi3")
        var html="";
        for(var item of data){
            html +=`<li class="timeline-item">
                        <a class="timeline-link" href="javascript:;">
                            <img src="${item.img}" alt="">
                        </a>
                        <div class="timeline-item-right">
                            <p class="t">
                                <a href="javascript:;" title="${item.title}">
                                    <span>${item.title}</span>
                                </a>
                            </p>
                            <p class="num">
                                更新至
                                <a href="javascript:;">${item.updata}</a>
                            </p>
                        </div>
                    </li>`
        }
        list.innerHTML=html
    }
     //周四
     ajax({
        url:'http://127.0.0.1:3000/user/zhouqi4',
        success:function(data){
            zhouqi4(data);
        }
    });
    function zhouqi4(data){
        var list=document.querySelector("#zhouqi4")
        var html="";
        for(var item of data){
            html +=`<li class="timeline-item">
                        <a class="timeline-link" href="javascript:;">
                            <img src="${item.img}" alt="">
                        </a>
                        <div class="timeline-item-right">
                            <p class="t">
                                <a href="javascript:;" title="${item.title}">
                                    <span>${item.title}</span>
                                </a>
                            </p>
                            <p class="num">
                                更新至
                                <a href="javascript:;">${item.updata}</a>
                            </p>
                        </div>
                    </li>`
        }
        list.innerHTML=html
    }
    //周五
    ajax({
        url:'http://127.0.0.1:3000/user/zhouqi5',
        success:function(data){
            zhouqi5(data);
        }
    });
    function zhouqi5(data){
        var list=document.querySelector("#zhouqi5")
        var html="";
        for(var item of data){
            html +=`<li class="timeline-item">
                        <a class="timeline-link" href="javascript:;">
                            <img src="${item.img}" alt="">
                        </a>
                        <div class="timeline-item-right">
                            <p class="t">
                                <a href="javascript:;" title="${item.title}">
                                    <span>${item.title}</span>
                                </a>
                            </p>
                            <p class="num">
                                更新至
                                <a href="javascript:;">${item.updata}</a>
                            </p>
                        </div>
                    </li>`
        }
        list.innerHTML=html
    }
    //周六
    ajax({
        url:'http://127.0.0.1:3000/user/zhouqi6',
        success:function(data){
            zhouqi6(data);
        }
    });
    function zhouqi6(data){
        var list=document.querySelector("#zhouqi6")
        var html="";
        for(var item of data){
            html +=`<li class="timeline-item">
                        <a class="timeline-link" href="javascript:;">
                            <img src="${item.img}" alt="">
                        </a>
                        <div class="timeline-item-right">
                            <p class="t">
                                <a href="javascript:;" title="${item.title}">
                                    <span>${item.title}</span>
                                </a>
                            </p>
                            <p class="num">
                                更新至
                                <a href="javascript:;">${item.updata}</a>
                            </p>
                        </div>
                    </li>`
        }
        list.innerHTML=html
    }
    //周日
    ajax({
        url:'http://127.0.0.1:3000/user/zhouqi7',
        success:function(data){
            zhouqi7(data);
        }
    });
    function zhouqi7(data){
        var list=document.querySelector("#zhouqi7")
        var html="";
        for(var item of data){
            html +=`<li class="timeline-item">
                        <a class="timeline-link" href="javascript:;">
                            <img src="${item.img}" alt="">
                        </a>
                        <div class="timeline-item-right">
                            <p class="t">
                                <a href="javascript:;" title="${item.title}">
                                    <span>${item.title}</span>
                                </a>
                            </p>
                            <p class="num">
                                更新至
                                <a href="javascript:;">${item.updata}</a>
                            </p>
                        </div>
                    </li>`
        }
        list.innerHTML=html
    }

    //动画排行1
    ajax({
        url:'http://127.0.0.1:3000/user/donghua_list',
        success:function(data){
            donghua_list1(data);
        }
    });
    function donghua_list1(data){
        var list=document.querySelector("#donghua_item1")
        var fanju=document.querySelector("#fanju_item1")
        var youxi=document.querySelector("#youxi_item1")
        var html="";
        var i=0
        for(var item of data){
            i++
            html +=`<li class="module-mainvideo">
                        <span><i>${i}</i></span>
                        <a href="http://127.0.0.1:3000/video.html?lid=${item.lid}">
                            <img src="${item.img}" alt="">
                        </a>
                        <b><a href="http://127.0.0.1:3000/video.html?lid=${item.lid}">${item.info}</a></b>
                    </li>`
        }
        fanju.innerHTML=html
        list.innerHTML=html
        youxi.innerHTML=html
    }

    ajax({
        url:'http://127.0.0.1:3000/user/donghua_list2',
        success:function(data){
            donghua_list2(data);
        }
    });
    function donghua_list2(data){
        var list=document.querySelector("#donghua_item2")
        var fanju=document.querySelector("#fanju_item2")
        var youxi=document.querySelector("#youxi_item2")
        var html="";
        var i=3
        for(var item of data){
            i++
            html +=`<li class="module-maintext">
            <span><i>${i}</i></span>
            <a href="http://127.0.0.1:3000/video.html?lid=${item.lid}">${item.info}</a>
        </li>`
        }
        fanju.innerHTML=html
        list.innerHTML=html
        youxi.innerHTML=html
    }

    window.addEventListener('load',function(){
        if(localStorage.getItem('uid')!=null){
            var topuser=document.querySelector(".topuser")
            var topuser1=document.querySelector(".topuser1")
            topuser.style.display="none"
            topuser1.style.display="flex"
        }
        var tui=document.querySelector(".btntui")
        tui.onclick=function(){
            localStorage.clear();
            location.reload();
        }
        var tou=document.querySelector(".user>img")
        var tuichu=document.querySelector(".tuichu")
        
        if(localStorage.getItem('uid')){
           topuser1.onmouseover=function(){
                tou.style.transform="scale(1.5)"
                tuichu.style.opacity="1"
            }
            topuser1.onmouseout=function(){
                tou.style.transform=""
                tuichu.style.opacity="0"
            } 
        }
        
    })

    // 百叶窗
    window.addEventListener("load",function(){
        var oul=document.getElementById("ul1")
        
            var inew=0
            var timer=null
            var btn=true
        toshow(oul)

        function toshow(obj){
            var odiv=obj.getElementsByTagName('div')

            setInterval(tochange,4000)
        

            function tochange(){
                timer=setInterval(function(){
                    if(inew==odiv.length){
                        clearInterval(timer)
                        inew=0
                        btn=!btn
                    }else if(btn){
                        startMove(odiv[inew],{top:0})
                        inew++
                    }else{
                        startMove(odiv[inew],{top:-30})
                        inew++
                    }
                },100)
            }
        }
    })
    
})()

