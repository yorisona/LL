SET NAMES UTF8;
DROP DATABASE IF EXISTS LL;
CREATE DATABASE LL CHARSET=UTF8;
USE LL;
#用户表
CREATE TABLE ll_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(32)
);
INSERT INTO ll_user VALUES(NULL,"123456","654321","554940144@qq.com");
#管理员表
CREATE TABLE ll_admin(
	aid INT PRIMARY KEY AUTO_INCREMENT,
	admin_name VARCHAR(32),
	admin_upwd VARCHAR(32)
);
INSERT INTO ll_admin VALUES(NULL,"1","1");

#轮播图
CREATE TABLE ll_slider_item(
	id INT PRIMARY KEY AUTO_INCREMENT,
	info VARCHAR(32),
	video_src VARCHAR(328),
	up_info VARCHAR(32),
	lid INT
);
INSERT INTO ll_slider_item VALUES(NULL,"【2019东方华灯宴单品】东方幻想嘉年华","//player.bilibili.com/player.html?aid=43283609&cid=75874625&page=1","up主：姬海棠羽笠果",43283609);







#视频表
CREATE TABLE ll_index_video(
	video_id INT PRIMARY KEY AUTO_INCREMENT,
	video_info VARCHAR(128),
	video_href VARCHAR(128)
);
INSERT INTO ll_index_video VALUES(null,"【MMD】辉夜月+α中戏剧四大天王【1080P60】","http://imgs.aixifan.com/FqDnCABOslGRkuRlhIZGybLO1on-?imageView2/1/w/320/h/180"),
(null,"[动画Shorts] Time to school","http://imgs.aixifan.com/FlRoI9P7VK-UmxgWgSCxThrayqOk?imageView2/1/w/320/h/180"),
(null,"【MAD/综漫】我们仰望着同一片星空，却身在不同的地方","http://imgs.aixifan.com/FvwQUZGhx7UUov5vLB2gDxOxkECh?imageView2/1/w/320/h/180"),
(null,"康纳回来啦！《龙女仆》第二季会是几月番呢？","http://imgs.aixifan.com/Fi6DIuz2AuZ5oIfJ07bwG6XBmH5R?imageView2/1/w/320/h/180"),
(null,"灭霸VS埼玉的全面战争（拳击手对疯狂泰坦）合集","http://imgs.aixifan.com/FqoIjoGWuTM8B1EAgXtsxKEwsfLT?imageView2/1/w/320/h/180"),
(null,"我们仍记得那天所历过的事","http://imgs.aixifan.com/FpenCSQUH9UqA0LnlTI3v-TgvAuz?imageView2/1/w/320/h/180"),
(null,"你们的欧叔又来了！    「我的英雄学院   二人的英雄」","http://imgs.aixifan.com/content/2019_2_12/1.5499368992928896E9.png?imageView2/1/w/320/h/180"),
(null,"书记热舞的时候 忽然有人推门进来了 当时气氛就很尴尬了 怎么办在线等挺急的","http://imgs.aixifan.com/FoghmVUZYIOCMpssb2XCvt-jyqql?imageView2/1/w/320/h/180"),
(null,"Fate-Grand Order MAD①","http://imgs.aixifan.com/content/2019_2_12/1.5499617682176666E9.png?imageView2/1/w/320/h/180"),
(null,"我泪目了~你呢？还爱着ac娘么？《爱就大声说出来》【2019从春晚】","http://imgs.aixifan.com/FjPK7XshVm2NMKDQ90BStHEiJs0M?imageView2/1/w/320/h/180");

#番剧周期
CREATE TABLE ll_zhouqi(
	id INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),
	title VARCHAR(64),
	href VARCHAR(128),
	updata VARCHAR(32)
);
INSERT INTO ll_zhouqi VALUES(null,"http://127.0.0.1:3000/image/smimg/zx10","多罗罗",null,"6话"),
(null,"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3873573767,3324428479&fm=58&bpow=400&bpoh=615","路人超能100 II(灵能百分百 第二季)",null,"6话"),
(null,"http://127.0.0.1:3000/image/smimg/zx11","笨拙之极的上野",null,"6话"),
(null,"http://127.0.0.1:3000/image/smimg/zx12","弦音 -风舞高中弓道部-",null,"13话"),
(null,"http://127.0.0.1:3000/image/smimg/zx17.jpg","Mysteria Friends（巴哈姆特之怒） / 玛娜利亚魔法学院",null,"4话"),
(null,"https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=2396146526,3264138986&fm=85&s=E4402EF7C052C7EFDD19966203006075","琴之森 第二季",null,"3话"),
(null,"http://127.0.0.1:3000/image/smimg/zx13","智龙迷城",null,"45话");

INSERT INTO ll_zhouqi VALUES(null,"http://127.0.0.1:3000/image/smimg/a01.png","关于我转生变成史莱姆这档事",null,"19话"),
(null,"http://127.0.0.1:3000/image/smimg/zx06","黑色四叶草",null,"70话"),
(null,"http://127.0.0.1:3000/image/smimg/zx19","天使降临到我身边",null,"6话"),
(null,"http://127.0.0.1:3000/image/smimg/zx03","环战公主 CIRCLET PRINCESS",null,"6话"),
(null,"http://127.0.0.1:3000/image/smimg/zx20","宇宙战舰提拉米斯II",null,"EX04"),
(null,"http://127.0.0.1:3000/image/smimg/zx21","兽娘动物园 2",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx05","少年阿贝 GO!GO!小芝麻 第三季",null,"30话");

INSERT INTO ll_zhouqi VALUES(null,"http://127.0.0.1:3000/image/smimg/zx22","盾之勇者成名录",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx01","强风吹拂",null,"17话"),
(null,"http://127.0.0.1:3000/image/smimg/zx08","烟草",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx23","明治东京恋伽",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx02.jpg","雨色可可side G",null,"6话");

INSERT INTO ll_zhouqi VALUES(null,"http://127.0.0.1:3000/image/smimg/zx14","青春猪头少年不会梦到兔女郎学姐",null,"13话"),
(null,"http://127.0.0.1:3000/image/smimg/zx24","同居人是猫",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx25","魔偶马戏团",null,"16话"),
(null,"http://127.0.0.1:3000/image/smimg/zx26","BanG Dream! 第二季",null,"6话");

INSERT INTO ll_zhouqi VALUES(null,"http://127.0.0.1:3000/image/smimg/zx27","魔法禁书目录 第三季",null,"18话"),
(null,"http://127.0.0.1:3000/image/smimg/zx28","五等分的新娘",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx29","约会大作战 第三季",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx07","约定的梦幻岛",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx30","不吉波普不笑",null,"7话"),
(null,"http://127.0.0.1:3000/image/smimg/zx31","格林笔记 The Animation",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx32","笑容的代价",null,"6话"),
(null,"http://127.0.0.1:3000/image/smimg/zx33","火之丸相扑",null,"17话");

INSERT INTO ll_zhouqi VALUES(null,"http://127.0.0.1:3000/image/smimg/zx34","JOJO的奇妙冒险 黄金之风",null,"18话"),
(null,"http://127.0.0.1:3000/image/smimg/zx35","不愉快的怪物庵 续",null,"6话"),
(null,"http://127.0.0.1:3000/image/smimg/zx36","逆转裁判 第二季",null,"16话"),
(null,"http://127.0.0.1:3000/image/smimg/zx37"," B-PROJECT～绝顶＊Emotion～",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx38","暖暖日记 3rd",null,"45话");

INSERT INTO ll_zhouqi VALUES(null,"http://127.0.0.1:3000/image/smimg/zx39","刀剑神域 Alicization",null,"声优SP"),
(null,"http://127.0.0.1:3000/image/smimg/zx40","辉夜大小姐想让我告白~天才们的恋爱头脑战~",null,"5话"),
(null,"http://127.0.0.1:3000/image/smimg/zx41","博人传 火影忍者新时代",null,"93话"),
(null,"http://127.0.0.1:3000/image/smimg/zx42","W'Z",null,"6话"),
(null,"http://127.0.0.1:3000/image/smimg/zx43","Double Decker! 道格&基里爾（僅限港澳台地區）",null,"EX01"),
(null,"http://127.0.0.1:3000/image/smimg/zx44","爱玩怪兽",null,"18话");


#排行1
CREATE TABLE ll_video_list1(
	id INT PRIMARY KEY AUTO_INCREMENT,
	info VARCHAR(32),
	img VARCHAR(128),
	video_src VARCHAR(328),
	up_info VARCHAR(32),
	sort VARCHAR(32),
	lid INT
);
INSERT INTO ll_video_list1 VALUES
(null,"开场倒贴同居，被老外疯狂吐槽的动画竟甜到肾虚","http://127.0.0.1:3000/image/ll_video_list1/sc01","//player.bilibili.com/player.html?aid=43210213&cid=75756046&page=1","鲁过一下","donghua",1),
(null,"【FGO】人理之光【迦勒底拜年祭单品】","http://127.0.0.1:3000/image/ll_video_list1/sc02","//player.bilibili.com/player.html?aid=42969828&cid=75341961&page=1","-SHIRA-","donghua",2),
(null,"【布料解算/书记舞/C4D/场景还原向】awsl，高度场景还原唯一有蟑螂的版本","http://127.0.0.1:3000/image/ll_video_list1/sc03","//player.bilibili.com/player.html?aid=43207581&cid=75750542&page=1","徐大大哟i","donghua",3),
(NULL,"【2019东方华灯宴单品】东方幻想嘉年华",null,"//player.bilibili.com/player.html?aid=43283609&cid=75874625&page=1","up主：姬海棠羽笠果",null,43283609),
(NULL,"【2019东方华灯宴单品】mc音乐秀~小人族表演曲",null,"//player.bilibili.com/player.html?aid=43234672&cid=75796810&page=1","up主：1U_s",null,43234672),
(NULL,"【东方逆转裁判】东方华灯宴特别法庭",null,"//player.bilibili.com/player.html?aid=43207500&cid=75750940&page=1","up主：1U_s",null,43207500),
(NULL,"【神楽めあ】黎明与萤火/夜明けと蛍【PV付】",null,"//player.bilibili.com/player.html?aid=43351298&cid=75987606&page=1","up主：神楽めあOfficial",null,43351298),
(NULL,"2019年H萌贺年祭 属于你我的二次元春晚",null,"//player.bilibili.com/player.html?aid=42889485&cid=75208119&page=1","up主：神楽めあOfficial",null,42889485),
(NULL,"九九八十一《碧蓝航线》填词版",null,"//player.bilibili.com/player.html?aid=43077661&cid=75527015&page=1","up主：神楽めあOfficial",null,43077661);






#排行2
CREATE TABLE ll_video_list2(
	id INT PRIMARY KEY AUTO_INCREMENT,
	info VARCHAR(32),
	video_src VARCHAR(328),
	sort VARCHAR(32),
	lid INT
);
INSERT INTO ll_video_list2 VALUES
(null,"【JOJO/短片】温泉的奇妙冒险","//player.bilibili.com/player.html?aid=43128575&cid=75617487&page=1","donghua",4),
(null,"名侦探柯南十大名场面","//player.bilibili.com/player.html?aid=43183325&cid=75709874&page=1","donghua",5),
(null,"【恶搞配音】结婚后米莉姆发现史莱姆出轨的对象后……","//player.bilibili.com/player.html?aid=43126676&cid=75614236&page=1","donghua",6),
(null,"五姐妹人气逆袭？！盾勇竟被打出最差评？史莱姆被删哪些..【新番猛料】","//player.bilibili.com/player.html?aid=43154753&cid=75660747&page=1","donghua",7),
(null,"【渣妹】亲眼目睹单纯妻子被欺负，彻底丧失为人资格《人间失格4》","//player.bilibili.com/player.html?aid=42498415&cid=74571501&page=1","donghua",8),
(null,"自制的刀剑第二个op与官方的对比","//player.bilibili.com/player.html?aid=43092288&cid=75555028&page=1","donghua",9),
(null,"【漫评】一部“标题党”治愈青春片，简评我想吃掉你的胰脏","//player.bilibili.com/player.html?aid=43222114&cid=76024859&page=1","donghua",10);










#详情页details
CREATE TABLE ll_details_video(
	video_id INT PRIMARY KEY AUTO_INCREMENT,
	video_name VARCHAR(128),
	video_info VARCHAR(128),
	video_src  VARCHAR(128),
	video_upuser INT,
	video_uptime INT,
	video_type INT,
	video_playsum INT,
	video_uid INT
);

#详情推荐视频
CREATE TABLE ll_details_tuijian(
	video_id INT PRIMARY KEY AUTO_INCREMENT,
	video_info VARCHAR(128),
	video_src  VARCHAR(128),
	video_upuser INT,
	video_uptime INT,
	video_playsum INT
);