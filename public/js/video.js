(function(){
    var id = location.search.split('=')[1];
    //console.log(id);
    ajax({
        url:`http://127.0.0.1:3000/user/videolist?lid=${id}`,
        //data:{lid:lid},
        success:function(data){
            add(data);
            //console.log(data)
        }
    });

    function add(data){
        var list=document.querySelector(".player-wrap")
        var html = "";
        var title=document.querySelector(".video-title")
        var html1=""
        var up=document.querySelector(".zuo-name")
        var html2=""
        for(var item of data){
            //console.log(item.video_src)
            html +=`<iframe id="ifvideo" src="${item.video_src}" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>`;
            html1 +=`<span>${item.info}</span>`
            html2 +=`<a href="#" class="username">${item.up_info}</a>`
        }
        list.innerHTML=html;
        title.innerHTML=html1
        up.innerHTML=html2
        //console.log(list);
        
    }
})()