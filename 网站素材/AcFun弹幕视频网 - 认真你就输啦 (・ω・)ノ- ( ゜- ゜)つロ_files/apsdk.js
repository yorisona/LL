(function () {
    var tNum = 0;
    window.AD = {

        callBack: null,
        ADKEY: {},
        userInfo: {},
        //adZoneId:null,
        adZoneIdKey: {},
        focusAdzoneIdArr: ["1", "9", "10", "21", "22", "18", "19", "12", "13", "15", "16", "24", "25", "27", "28", "30", "31"],
        textAdzoneArr: ["41", "42", "43", "44", "45", "46", "47", "48"],
        getADData: function (pl, adzoneId, info, callback) {
            var ad_qs = {
                "r": this.getQuery("r"),
                "o": this.getQuery("o"),
                "d": this.getQuery("d"),
                "w": this.getQuery("w"),
                "x": this.getQuery("x"),
                "y": this.getQuery("y"),
                "z": this.getQuery("z")
            };
            var isFocus = false;
            for (var i = 0; i < AD.focusAdzoneIdArr.length; i++) {
                if (AD.focusAdzoneIdArr[i] == adzoneId) {
                    isFocus = true;
                }
            }
            var isText = false;
            for (var i = 0; i < AD.textAdzoneArr.length; i++) {
                if (AD.textAdzoneArr[i] == adzoneId) {
                    isText = true;
                }
            }

            var ct = 0;
            var dataUrl = 'http://aes.acfun.cn/s?vid=&n=1&ct=0';
            if (isFocus) {
                dataUrl = 'http://aes.acfun.cn/s?vid=&n=1&ct=14';
                ct = 14;
            }
            if (isText) {
                dataUrl = 'http://aes.acfun.cn/s?vid=&n=1&ct=18';
                ct = 18;
            }

            //广告预览地址
            var preViewUrl = "http://aes.acfun.cn/p?vid=&n=1&";
            if (ad_qs.w && ad_qs.x && ad_qs.y && ad_qs.z) {
                dataUrl = preViewUrl + 'ct=' + ct + '&' + $.param(ad_qs);
            }

            AD.userInfo = info;
            //AD.adZoneId = adzoneId;
            var uuid;
            if (info && info.uuid) {
                uuid = info.uuid;
            }
            if (!uuid || uuid == "undefined") {
                uuid = AD.getUUid();
            }
            var pl = pl;
            if (!pl) {
                pl = 22;
            }
            var mt = new Date().getTime()
                , t = parseInt(mt / 1000);

            var splitChar = '?';

            if (dataUrl && dataUrl.indexOf('?') > -1) {
                splitChar = '&';
            }

            tNum++;
            var timer = 'timer' + tNum;
            $.ajaxSettings.async = false;
            $.getJSON(dataUrl + splitChar + 'pl=' + pl + '&adzones=' + adzoneId + '&vvid=' + uuid + '_' + mt + '&cuid=' + uuid + '&t=' + t + '&timer=' + timer + '&res=json&j=AD.resolveAD&callback=?');
            AD[timer] = setTimeout(this._connecttoFail(pl, adzoneId, timer), 3000);
            $.ajaxSettings.async = true;
            AD.callBack = callback;
        },

        getQuery: function (name) {
            var paramList = location.search.replace("?", "").split("&");
            for (var i = 0; i < paramList.length; i++) {
                if (paramList[i].split("=")[0] == name) {
                    return paramList[i].substring(paramList[i].indexOf("=") + 1, paramList[i].length);
                }
            }
            return null;
        },

        connecttoFail: function (pl, adzoneId, timer) {
            var adDataInfo = [];
            adDataInfo.push({
                pl: pl,
                adZoneId: adzoneId,
                errorId: 501
            });
            AD.callBack(adDataInfo);
            clearTimeout(AD[timer]);
            //alert("请求引擎超时errorId=" + adDataInfo[0].errorId);
        },

        _connecttoFail: function (pl, adzoneId, timer) {
            var _self = this;
            return function () {
                _self.connecttoFail(pl, adzoneId, timer);
            }
        },
        //解析JSONP
        resolveAD: function (vast) {
            this.resonJsonp(vast);
        },

        resonJsonp: function (data) {
            var vast = data.vast;
            if (vast) {
                var timer = vast.timer;
                clearTimeout(AD[timer]);
                AD.config.triggerData = {
                    origintime: vast.stime,
                    pl: vast.player,
                    areaid: vast.area_id,
                    clienttime: new Date().getTime(),
                    ip: vast.ip,
                    ipaddr: vast.ipaddr,
                    cuid: vast.cuid,
                    vvid: vast.vvid
                };
                this.loadData(vast, true);
            }
        },

        loadData: function (options) {
            var _self = this;
            var adMark = "1";
            var adTitle = "";
            var adStyle = "";
            var textContent = "";
            if (true) {
                var inLineItem, impressItem, clickTracking, nonLinearAdsItem, imageUrl, clickUrl, adZoneId,
                    companionAdsItem, AdParameters;
                var adDataInfo = [];
                var ct = "0";
                var aAds = options.Ad;
                var policy = options.Policy;
                if (!aAds || aAds.length == 0) {
                    //无广告数据时处理
                    ct = policy.CuePoint[0].type;
                    if (adDataInfo.length > 0) {
                        adDataInfo.splice(0, adDataInfo.length);
                    }
                    adDataInfo.push({
                        pl: options.player,
                        adZoneId: options.adzones,
                        ct: ct,
                        errorId: 401
                    });
                    AD.callBack(adDataInfo);
                    return;
                }
                $.each(aAds, function (i, item) {
                    if (!item) return;
                    inLineItem = item.InLine;
                    impressItem = inLineItem.Impression;
                    adZoneId = item.adzone;
                    nonLinearAdsItem = inLineItem.Creatives.Creative[0].NonLinearAds; //主广告实体
                    clickTracking = nonLinearAdsItem.NonLinear[0].NonLinearClickTracking;
                    //companionAdsItem = inLineItem.Creatives.Creative[0].CompanionAds.Companion; //伴随广告实体
                    adZoneId = nonLinearAdsItem.NonLinear[0].adzone_id || ((new Date().getTime()) + (Math.random() * 1000));
                    clickUrl = nonLinearAdsItem.NonLinear[0].NonLinearClickThrough;
                    AdParameters = nonLinearAdsItem.NonLinear[0].AdParameters;
                    if (typeof JSON != 'undefined' && JSON.parse) {
                        if (AdParameters) {
                            imageUrl = JSON.parse(AdParameters).displayURL;
                            adMark = JSON.parse(AdParameters).adMark || adMark;
                            if (JSON.parse(AdParameters).adTitle) {
                                adTitle = JSON.parse(AdParameters).adTitle;
                            }
                            if (JSON.parse(AdParameters).adStyle) {
                                adStyle = JSON.parse(AdParameters).adStyle;
                            }
                            if (JSON.parse(AdParameters).textContent) {
                                textContent = JSON.parse(AdParameters).textContent;
                            }
                        }
                    }
                    if (adDataInfo.length > 0 && adDataInfo[i].errorId) {
                        adDataInfo.splice(i, 1);
                    }
                    AD.ADKEY[adZoneId] = {
                        'stime': (new Date()).getTime(), //请求开始时间
                        'cuid': options.cuid,
                        'vvid': options.vvid,
                        'adId': item.id,
                        'orderid': item.order_id,
                        'ct': item.cuepoint_type,
                        'lc': item.lc,
                        'sub': item.sub,
                        'oid': item.order_item_id,
                        'Impression': impressItem, //呈现时触发数据
                        'NonLinearAds': nonLinearAdsItem,
                        'uid': adZoneId
                    };
                    clickUrl = AD.getAttachParamsUrl(clickUrl, adZoneId, 2, options.player);
                    adDataInfo.push({
                        pl: options.player,
                        adZoneId: adZoneId,
                        adMark: adMark,
                        adStyle: adStyle,
                        adTitle: adTitle,
                        textContent: textContent,
                        imageUrl: imageUrl,
                        clickUrl: clickUrl,
                        impressItem: impressItem,
                        clickTracking: clickTracking
                    });
                });
                //alert("clickUrl="+clickUrl);
                AD.callBack(adDataInfo);
            }

        },

        /* 发送tracking时附加参数
         * @param data
         * pl: 播放器id
         * uid 当前广告位Id
         * type：1，2，3，4
         */
        sendMonitoringStatisticsByType: function (data, uid, type, pl) {
            var _self = this;
            var withCdata = false;
            data = (data instanceof Array) ? data : [data];
            if (data.length > 0) {
                withCdata = !!data[0].cdata;
            }

            for (var i = 0, l = data.length; i < l; i++) {
                if (data[i].length > 0 || (withCdata && data[i].cdata.length > 0)) {
                    (function (index) {
                        var iSrc = withCdata ? data[index].cdata : data[index];
                        //console.log("uid:"+uid+";type:"+type+";trigger:"+iSrc);
                        iSrc = _self.getAttachParamsUrl(iSrc, uid, type, pl);
                        _self.sendLogByQueue(iSrc);
                    })(i);
                }
            }
        },

        getAttachParamsUrl: function (url, uid, type, pl) {
            var isSub = 0;
            var im = 1;
            if (!url || url === 'javascript:void(0)')
                return 'javascript:void(0)';
            if (url.indexOf(AD.config.hostDomain) > -1 || url.indexOf("http://aes.acfun.cn") > -1) {
                var adItem = AD.ADKEY[uid];
                if (!adItem) return;
                if (adItem.sub) {
                    isSub = adItem.sub;
                }
                if (adItem.oid == undefined || adItem.orderid == undefined && _self.curBgData) {
                    adItem = _self.curBgData;
                }
                var now = new Date().getTime();
                //var cuid = adItem.cuid;
                var tc = adItem.stime + Math.ceil((now - adItem.stime) / 1000);
                var param = {
                    rt: type,
                    oid: adItem.oid,
                    im: im === undefined ? 1 : im,
                    t: tc,
                    cuid: adItem.cuid,
                    data: [uid, pl || AD.config.triggerData.pl, adItem.vvid, adItem.adId, adItem.orderid, adItem.lc, adItem.ct, '1', now].join(",")
                };

                if (isNaN(param.t)) {
                    param.t = adItem.stime || now;
                }

                param.s = this.getSecurityKey(param);

                if (type === 2) {
                    if (url.indexOf("[randnum]") > -1) {
                        url = url.replace("[randnum]", new Date().getTime());
                    }
                    if (url.indexOf("[M_IESID]") > -1) {
                        url = url.replace("[M_IESID]", "ACFUN_" + uid);
                    }
                    if (url.indexOf("[M_ADIP]") > -1) {
                        url = url.replace("[M_ADIP]", AD.config.triggerData.ip);
                    }
                    if (url.indexOf("[A_ADIP]") > -1) {
                        url = url.replace("[A_ADIP]", AD.config.triggerData.ip);
                    }
                    var arrParam = url.split('&u=');
                    url = [arrParam[0], $.param(param), "u=" + arrParam[1]].join('&');
                } else {
                    url += "&" + $.param(param);
                }
            } else {
                if (url.indexOf("[randnum]") > -1) {
                    url = url.replace("[randnum]", new Date().getTime());
                }
                if (url.indexOf("[M_IESID]") > -1) {
                    url = url.replace("[M_IESID]", "ACFUN_" + uid);
                }
                if (url.indexOf("[M_ADIP]") > -1) {
                    url = url.replace("[M_ADIP]", AD.config.triggerData.ip);
                }
                if (url.indexOf("http://v.admaster.com.cn") > -1) {
                    url = url + ",f" + AD.config.triggerData.ip;
                }
                //console.log(url);
            }
            return url;
        },

        getUUid: function () {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 32; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4";
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
            //s[8] = s[13] = s[18] = s[23] = "-";
            var uuid = s.join("");
            return uuid;
        },

        sendLogQueue: [],
        sendLogLock: false,
        sendLogByQueue: function (src) {
            var iSrc = src,
                uId = "img_" + Math.random(),
                isIE67 = true;//$.browser.msie && ($.browser.version == "7.0" || $.browser.version == "6.0");
            uId = uId.replace('.', '');
            if (isIE67 && AD.sendLogLock === true) {
                AD.sendLogQueue.push(iSrc);
                return;
            }

            if (!iSrc) {
                AD.sendLogLock = false;
                return;
            }
            AD.sendLogLock = true;
            var sendLog = function (uId, iSrc, callback) {
                window[uId] = $('<img>');
                window[uId].one('load', function () {
                    callback(1);
                }).attr('src', iSrc).one('error', function () {
                    callback(2);
                }).one('abort', function () {
                    callback(3);
                });
            };
            (function (uId, iSrc) {
                sendLog(uId, iSrc, function (data) {
                    console.log(data + ":" + iSrc);
                    if (window[uId]) {
                        window[uId] = null;
                        AD.sendLogLock = false;
                        if (isIE67) {
                            setTimeout(function () {
                                var newUrl = AD.sendLogQueue.shift();
                                AD.sendLogByQueue(newUrl);
                            }, 0);
                        }
                    }
                });

            })(uId, iSrc);
        },
        /*  根据Tracking字符串参数运算安全验证码
         *  @param data 所有要附加的地址参数
         *  @return 返回16进制加密码
         */
        "getSecurityKey": function (data) {
            var crc_table = AD.config.crc_table;
            var index = 0,
                crcIndex = 0,
                tableEntry = 0,
                contentLength = "",
                content = "";
            for (var index in AD.config.securityKeys) {
                content += data[AD.config.securityKeys[index]];
                if (index == (AD.config.securityKeys).length - 1) {
                    break;
                }
            }
            contentLength = content.length;

            for (index = 0x0; index < contentLength; index++) {
                var charHex = content.charCodeAt(index);
                var tempIdx = (crcIndex & 0xF) | (charHex & 0xF) << 0x4;
                tableEntry = crc_table[tempIdx];
                crcIndex = crcIndex >> 0x4 ^ tableEntry;
                tableEntry = crc_table[(crcIndex & 0xF) | (charHex & 0xF0)];
                crcIndex = crcIndex >> 0x4 ^ tableEntry;
            }
            return crcIndex.toString(16);
        },

        config: {
            'timelong': 1, //加载过长判断阈值 单位秒
            'timeout': 3, //加载超时判断阈值 单位秒
            'currentURL': location.href, //当前页面地址值,
            'reportURL': 'http://www.acfun.com', //上报接口
            'queue': false, //广告位默认是否使用队列加载形式
            'commamdExe': false, //此开关开启后，loadData的方法数据会先缓存起来不执行，指导调用commond('do')时才全部执行

            //加密的时候需要的Key
            'securityKeys': ['rt', 'oid', 'im', 't', 'data'],
            'hostDomain': 'http://aes.acfun.cn/',
            'DC_AD_URL': 'http://apple.www.acfun.com/op/?',
            //trigger信息实体
            'triggerData': {},
            //生成tricking加密字典表
            'crc_table': [0xf1c0, 0xf248, 0x553e, 0xae68, 0xc753, 0x6269, 0x9a19, 0x7fed,
                0xb010, 0x4d44, 0x6d07, 0x9ec0, 0x578c, 0xbb57, 0x07f1, 0x3d1f,
                0x6944, 0x1f29, 0x014d, 0xce4a, 0x08b5, 0x6f29, 0xdb33, 0x0c96,
                0x1e8b, 0x2045, 0x90b0, 0x676f, 0xb3c1, 0x9316, 0xcc1f, 0x8e54,
                0xc1ea, 0x65a2, 0xa28b, 0xe271, 0x5801, 0x9c97, 0x636e, 0x31f1,
                0xc563, 0x06cb, 0x1145, 0xac9b, 0x38ed, 0xeadc, 0xbecb, 0xc577,
                0xf853, 0x49f0, 0x25e6, 0x7cbf, 0x9424, 0xd1b9, 0xa882, 0x71b2,
                0x571b, 0x45f9, 0x58ed, 0x4545, 0x33b1, 0xd356, 0xf677, 0xd606,
                0xb103, 0x10bb, 0xcc60, 0x53ef, 0x608f, 0x5bcb, 0x6458, 0xa920,
                0x485a, 0xb492, 0xd323, 0x5cc6, 0xf96f, 0x9c72, 0x5d16, 0x3655,
                0xd0e1, 0x89c5, 0x198d, 0xe965, 0xb1b7, 0x1c39, 0x6790, 0x44f9,
                0x7069, 0x103f, 0x4338, 0xc585, 0xbcce, 0x8327, 0x2a91, 0x661d,
                0xa5b9, 0xcac7, 0x1218, 0x6e6b, 0x6996, 0xe1b2, 0x3bfc, 0x79b6,
                0x39b6, 0xd112, 0x6ace, 0x81cf, 0x7239, 0xcc8d, 0x2f46, 0x1518,
                0x9ebd, 0x1f35, 0xca3e, 0x7b97, 0x0428, 0xb3db, 0x9723, 0xa54b,
                0x6253, 0x0a2e, 0x005e, 0x6517, 0xc461, 0xbd05, 0xee83, 0xf766,
                0x9500, 0x87f5, 0x4451, 0x261e, 0x53f0, 0x7980, 0x9cbf, 0xbad8,
                0x4c77, 0x20bb, 0xf5b3, 0xfd02, 0x18b7, 0x3e5a, 0x890f, 0x84d0,
                0xa3fa, 0xc444, 0x9f36, 0xe02e, 0x4e70, 0xc951, 0xf13f, 0x7bea,
                0xdefc, 0x647e, 0x0e6d, 0xa714, 0xa3f3, 0xb406, 0x77a2, 0xb725,
                0x9207, 0x034f, 0x94e7, 0x5abd, 0xe8b4, 0xe576, 0x9c46, 0x4e42,
                0xf5df, 0xdfc3, 0xc680, 0xd4d5, 0x8e90, 0x7123, 0x1569, 0x5b4f,
                0xc8e8, 0x0c3f, 0x48f3, 0x504d, 0x03c8, 0xda9b, 0xbb2a, 0xb03f,
                0x62c4, 0x066e, 0x88b2, 0x05d5, 0x294d, 0x7f9e, 0xfa83, 0xafd5,
                0xde40, 0xe0be, 0x66f9, 0xb991, 0x693d, 0x7b30, 0x0376, 0xa964,
                0x7d70, 0x465e, 0x3520, 0xebda, 0x31ad, 0xecb4, 0x2686, 0xdae9,
                0xac17, 0x9c32, 0x9130, 0x6e08, 0xd7a9, 0x780d, 0x1568, 0x1792,
                0x444d, 0xdd86, 0xf7b9, 0x8315, 0x2678, 0x9ae3, 0xfafa, 0x392f,
                0xf95b, 0x9833, 0x1ee2, 0x9be5, 0x1f23, 0x27ae, 0x9e74, 0x64f4,
                0x0ce9, 0xc452, 0x6ec1, 0xa54c, 0xac38, 0xadbd, 0x05dc, 0xa5f1,
                0xb25b, 0xad01, 0x2aed, 0xd3df, 0x4dcb, 0xa5a7, 0x4bbf, 0x05b7,
                0xc477, 0xed46, 0x2150, 0xc427, 0x01bd, 0x0059, 0x9c1d, 0xa457
            ],
        },

    }
})();