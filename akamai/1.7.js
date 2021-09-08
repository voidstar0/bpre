/*
  Akamai version 1.7 grabbed from YeezySupply
*/
var _cf = _cf || [],
  bmak = bmak && bmak.hasOwnProperty("ver") && bmak.hasOwnProperty("sed") ? bmak : {
    ver: 1.7, // Akamai version 1.7
    ke_cnt_lmt: 150, // Max keyboard event limit
    mme_cnt_lmt: 100, // Max mouse move event limit
    mduce_cnt_lmt: 75, // Max mouse down/up event limit
    pme_cnt_lmt: 25,
    pduce_cnt_lmt: 25, // Max pointer event limit
    tme_cnt_lmt: 25, // Touch move event limit
    tduce_cnt_lmt: 25, // Other touch event limit
    doe_cnt_lmt: 10, // Device orientation event limit
    dme_cnt_lmt: 10, // Device motion event limit
    vc_cnt_lmt: 100, // Visibility change count limit
    doa_throttle: 0, 
    dma_throttle: 0,
    session_id: "default_session",
    js_post: !1,
    loc: "",
    cf_url: "https:" === document.location.protocol ? "https://" : "http://",
    params_url: ("https:" === document.location.protocol ? "https://" : "http://") + document.location.hostname + "/get_params",
    auth: "",
    api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
    aj_lmt_doact: 1,
    aj_lmt_dmact: 1,
    aj_lmt_tact: 1,
    ce_js_post: 0,
    init_time: 0,
    informinfo: "",
    prevfid: -1,
    fidcnt: 0,
    sensor_data: 0,
    ins: null,
    cns: null,
    enGetLoc: 0,
    enReadDocUrl: 1,
    disFpCalOnTimeout: 0,
    xagg: -1,
    pen: -1,
    brow: "",
    browver: "",
    psub: "-",
    lang: "-",
    prod: "-",
    plen: -1,
    doadma_en: 0,
    sdfn: [],
    d2: 0,
    d3: 0,
    thr: 0,
    cs: "0a46G5m17Vrp4o4c",
    hn: "unk",
    z1: 0,
    o9: 0,
    vc: "",
    y1: 2016,
    ta: 0,
    tst: -1,
    t_tst: 0,
    ckie: "_abck",
    n_ck: "0",
    ckurl: 0,
    bm: !1,
    mr: "-1",
    altFonts: !1,
    rst: !1,
    runFonts: !1,
    fsp: !1,
    firstLoad: !0,
    pstate: !1,
    mn_mc_lmt: 10,
    mn_state: 0,
    mn_mc_indx: 0,
    mn_sen: 0,
    mn_tout: 100,
    mn_stout: 1e3,
    mn_ct: 1,
    mn_cc: "",
    mn_cd: 1e4,
    mn_lc: [],
    mn_ld: [],
    mn_lcl: 0,
    mn_al: [],
    mn_il: [],
    mn_tcl: [],
    mn_r: [],
    mn_rt: 0,
    mn_wt: 0,
    mn_abck: "",
    mn_psn: "",
    mn_ts: "",
    mn_lg: [],
    loap: 1,
    dcs: 0,
    
    /**
     * Initialize / Reset variables.
     * One of the first functions to get called.
     * Also gets called in get_telemetry
     */
    ir: function() {
      bmak.start_ts = Date.now ? Date.now() : +new Date();
      bmak.kact = "";
      bmak.ke_cnt = 0;
      bmak.ke_vel = 0;
      bmak.mact = "";
      bmak.mme_cnt = 0;
      bmak.mduce_cnt = 0;
      bmak.me_vel = 0;
      bmak.pact = "";
      bmak.pme_cnt = 0;
      bmak.pduce_cnt = 0;
      bmak.pe_vel = 0;
      bmak.tact = "";
      bmak.tme_cnt = 0;
      bmak.tduce_cnt = 0;
      bmak.te_vel = 0;
      bmak.doact = "";
      bmak.doe_cnt = 0;
      bmak.doe_vel = 0;
      bmak.dmact = "";
      bmak.dme_cnt = 0;
      bmak.dme_vel = 0;
      bmak.vcact = "";
      bmak.vc_cnt = 0;
      bmak.aj_indx = 0;
      bmak.aj_ss = 0;
      bmak.aj_type = -1;
      bmak.aj_indx_doact = 0;
      bmak.aj_indx_dmact = 0;
      bmak.aj_indx_tact = 0;
      bmak.me_cnt = 0;
      bmak.pe_cnt = 0;
      bmak.te_cnt = 0;
      bmak.nav_perm = "";
      bmak.brv = 0;
      bmak.hbCalc = !1;
      bmak.fmh = "";
      bmak.fmz = "";
      bmak.ssh = "";
      bmak.wv = "";
      bmak.wr = "";
      bmak.weh = "";
      bmak.wl = 0;
    },
    
    /**
     * Returns the Date in a Unix time format 
     * https://en.wikipedia.org/wiki/Unix_time
     * @returns {number} Unix time (timestamp), e.g: 1631080958
     */
    get_cf_date: function() {
      return Date.now ? Date.now() : +new Date();
    },

    sd_debug: function(t) {
      if (!bmak.js_post) {
        var a = t;
        "string" == typeof _sd_trace ? _sd_trace += a : _sd_trace = a;
      }
    },
    
    /**
     * Convert a string to a number
     * @param {string} t string to convert to number, e.g: "23"
     * @returns string converted to a number
     */
    pi: function(t) {
      return parseInt(t);
    },
    
    /**
     * Returns the User-Agent of the current browser window 
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent
     * @returns {string} a User-Agent string stripped from every \\|" string, e.g: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15
     */
    uar: function() {
      return window.navigator.userAgent.replace(/\\|"/g, "");
    },

    gd: function() {
      var t = bmak.uar(), // user agent
        a = "" + bmak.ab(t), // Accumulate all char codes in the user agent and return number
        e = bmak.start_ts / 2, // Start time / 2
        n = -1,
        o = -1,
        m = -1,
        r = -1,
        i = -1,
        c = -1,
        b = -1;

      // Gets the available width
      try {
        n = window.screen ? window.screen.availWidth : -1;
      } catch (t) {
        n = -1;
      }

      // Gets the available height
      try {
        o = window.screen ? window.screen.availHeight : -1;
      } catch (t) {
        o = -1;
      }

      // Get screen width
      try {
        m = window.screen ? window.screen.width : -1;
      } catch (t) {
        m = -1;
      }

      // Get screen height
      try {
        r = window.screen ? window.screen.height : -1;
      } catch (t) {
        r = -1;
      }

      try {
        i = window.innerHeight || (document.body && "clientHeight" in document.body ? document.body.clientHeight : document.documentElement && "clientHeight" in document.documentElement ? document.documentElement.clientHeight : -1);
      } catch (t) {
        i = -1;
      }

      try {
        c = window.innerWidth || (document.body && "clientWidth" in document.body ? document.body.clientWidth : document.documentElement && "clientWidth" in document.documentElement ? document.documentElement.clientWidth : -1);
      } catch (t) {
        c = -1;
      }

      try {
        b = "outerWidth" in window && void 0 !== window.outerWidth ? window.outerWidth : -1;
      } catch (t) {
        b = -1;
      }

      
      /*
        parseInt(start timestamp / 4064256)
        
        Creates a rough estimate of the hour identifier for start timestamp(bmak.start_ts).

        "dividing by 4064256 and parsing as an int gives you a number that should be constant for all valid sensor datas, 
        but changes every ~hour (4064256ms is 67 minutes 44.256 seconds, 
        not sure why this wouldnt be exactly 60 min but close enough i guess)"
        - xssc

        see: https://github.com/char/bpre/issues/1#issuecomment-914575546
      */
      bmak.z1 = bmak.pi(bmak.start_ts / (bmak.y1 * bmak.y1));
      var d = Math.random(),
        s = bmak.pi(1e3 * d / 2),
        k = d + "";
      return k = k.slice(0, 11) + s, bmak.gbrv(), bmak.get_browser(), bmak.bc(), bmak.bmisc(), t + ",uaend," + bmak.xagg + "," + bmak.psub + "," + bmak.lang + "," + bmak.prod + "," + bmak.plen + "," + bmak.pen + "," + bmak.wen + "," + bmak.den + "," + bmak.z1 + "," + bmak.d3 + "," + n + "," + o + "," + m + "," + r + "," + c + "," + i + "," + b + "," + bmak.bd() + "," + a + "," + k + "," + e + "," + bmak.brv + ",loc:" + bmak.loc;
    },
    
    /*

    Original Function:
      get_browser: function() {
        navigator.productSub && (bmak.psub = navigator.productSub), navigator.language && (bmak.lang = navigator.language), navigator.product && (bmak.prod = navigator.product), bmak.plen = void 0 !== navigator.plugins ? navigator.plugins.length : -1;
      }
    */
    get_browser: function() {
      // Safari and Chrome will always return "20030107"
      // Firefox returns "20100101" and this doesn't exist on IE
      if (navigator.productSub) {
        bmak.psub = navigator.productSub
      }

      // User's browser's preferred language. This can be represented
      // differently depending on the browser. For example,
      // English is stylized as en-US in Chrome but en-us in Safari
      if(navigator.language) {
        bmak.lang = navigator.language
      }

      // All browsers return "Gecko" for compatibility reasons.
      if (navigator.product) {
        bmak.prod = navigator.product
      }

      // Legacy browser plugins. Not to be confused with extensions.
      // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/plugins
      if (navigator.plugins !== undefined) {
        bmak.plen = navigator.plugins.length;
      } else {
        bmak.plen = -1;
      }
    },
    
    /*
      Check if the user is using the Brave browser.
      The navigator.brave property only exists on
      Brave browsers.

      Brave is a Chromium basedprivacy browser that 
      blocks trackers and enables some privacy settings.

      They can potentially use this check to loosen
      fingerprinting requirements if Brave is detected.
    */
    gbrv: function() {
      navigator.brave && navigator.brave.isBrave().then(function(t) {
        bmak.brv = t ? 1 : 0;
      })["catch"](function(t) {
        bmak.brv = 0;
      });
    },
    
    /*
      Function crafts a bit field that determines whether
      various window functions exist.

      0:  window.addEventListener
      1:  window.XMLHttpRequest
      2:  window.XDomainRequest
      3:  window.emit
      4:  window.DeviceOrientationEvent
      5:  window.DeviceMotionEvent
      6:  window.TouchEvent
      7:  window.spawn
      8:  window.innerWidth
      9:  window.outerWidth
      10: window.chrome
      11: Function.prototype.bind
      12: window.Buffer
      13: window.PointerEvent

      Running this in my Chrome 91 returns 12147 whiile Safari returns 11011.
      Converting these to binary allow us to see which properties do and don't exist on these browsers.

      The 4th bit from the left represents window.chrome and we can see 
      Chrome returns true (1) while Safari is false (0)

      12147: 1 0 1 1 1 1 0 1 1 1 0 0 1 1
      11011: 1 0 1 0 1 1 0 0 0 0 0 0 1 1

    */
    bc: function() {
      var t = window.addEventListener ? 1 : 0,
        a = window.XMLHttpRequest ? 1 : 0,
        // Only exists for Internet Explorer
        e = window.XDomainRequest ? 1 : 0,
        n = window.emit ? 1 : 0,
        // Not supported on Safari and IE
        o = window.DeviceOrientationEvent ? 1 : 0,
        // Not supported on Safari and IE
        m = window.DeviceMotionEvent ? 1 : 0,
        // Not supported on Safari and IE
        r = window.TouchEvent ? 1 : 0,
        // Doesnt exist in browsers. Maybe used as a check to see if its running in a Node environment.
        i = window.spawn ? 1 : 0,
        // Check to see if running in Chrome
        c = window.chrome ? 1 : 0,
        b = Function.prototype.bind ? 1 : 0,
        // Doesnt exist in browsers. Maybe used as a check to see if its running in a Node environment (global.Buffer).
        d = window.Buffer ? 1 : 0,
        s = window.PointerEvent ? 1 : 0;

      try {
        var k = window.innerWidth ? 1 : 0;
      } catch (t) {
        var k = 0;
      }

      try {
        var l = window.outerWidth ? 1 : 0;
      } catch (t) {
        var l = 0;
      }

      bmak.xagg = t + (a << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (k << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (s << 13);
    },
    
    /*
      Check for browser driver automation:
      https://www.selenium.dev/selenium
    */
    bmisc: function() {
      // _phantom https://phantomjs.org/
      bmak.pen = window._phantom ? 1 : 0;
      
      /*
        window.webdriver property is true when in:
      Chrome
        The --enable-automation or the --headless flag or the --remote-debugging-port is used.
      Firefox
        The marionette.enabled preference or --marionette flag is passed.
      */
      bmak.wen = window.webdriver ? 1 : 0;
      // Headless chrome property
      bmak.den = window.domAutomation ? 1 : 0;
    },
    bd: function() {
      var t = [],
      // Check for callback function for phantomJS (https://phantomjs.org/api/webpage/handler/on-callback.html)
      a = window.callPhantom ? 1 : 0;
      t.push(",cpen:" + a);
      var e = 0;
      // "The ActiveXObject object is used to create instances of OLE Automation objects in Internet Explorer on Windows operating systems."
      // http://help.dottoro.com/ljiujjib.php#:~:text=The%20ActiveXObject%20object%20is%20used,to%20allow%20communication%20with%20them.
      window.ActiveXObject && "ActiveXObject" in window && (e = 1), t.push("i1:" + e);
      // Property only exists on IE. Prob an IE check 
      var n = "number" == typeof document.documentMode ? 1 : 0;
      t.push("dm:" + n);
      // Chrome check
      var o = window.chrome && window.chrome.webstore ? 1 : 0;
      t.push("cwen:" + o);
      // Returns the online status of the browser. The property returns a boolean value, with true meaning online and false meaning offline
      var m = navigator.onLine ? 1 : 0;
      t.push("non:" + m);
      // Opera browser check
      var r = window.opera ? 1 : 0;
      t.push("opc:" + r);
      // Firefox check. InstallTrigger only exists on firefox and typeof InstallTrigger will return "object" on firefox based browsers. "undefined" otherwise
      var i = "undefined" != typeof InstallTrigger ? 1 : 0;
      t.push("fc:" + i);
      // Early safari check (https://stackoverflow.com/questions/15470777/what-does-this-statement-object-prototype-do)
      var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0;
      t.push("sc:" + c);
      var b = "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0;
      t.push("wrc:" + b);
      var d = "mozInnerScreenY" in window ? window.mozInnerScreenY : 0;
      t.push("isc:" + d);
      
      /*
        Rough day identifier for start timestamp(bmak.start_ts).

        "d2 now divides by 23, which gives us, again roughly, 
        a day marker, as diving the "hour marker" by 23, 
        will result in a number that changes roughly every day 
        (maybe this is 23 not 24 because our 7 extra minutes is 
        now an extra 2.96608 hours in the timeframe)"
        - xssc

        see: https://github.com/char/bpre/issues/1#issuecomment-914575546
      */
      bmak.d2 = bmak.pi(bmak.z1 / 23);
      var s = "function" == typeof navigator.vibrate ? 1 : 0;
      t.push("vib:" + s);
      var k = "function" == typeof navigator.getBattery ? 1 : 0;
      t.push("bat:" + k);
      var l = Array.prototype.forEach ? 0 : 1;
      t.push("x11:" + l);
      var u = "FileReader" in window ? 1 : 0;
      return t.push("x12:" + u), t.join(",");
    },
    
    /*
      Create a bit field checking for the existence of the following properties
      0: navigator.credentials
      1: navigator.appMinorVersion
      2: navigator.bluetooth
      3: navigator.storage
      4: Math.imul
      5: navigator.getGamepads
      6: navigator.getStorageUpdates
      7: navigator.getStorageUpdates
      8: navigator.hardwareConcurrency
      9: navigator.mediaDevices
      10: navigator.mozAlarms
      11: navigator.mozConnection
      12: navigator.mozIsLocallyAvailable
      13: navigator.mozPhoneNumberService
      14: navigator.msManipulationViewsEnabled
      15: navigator.permissions
      16: navigator.registerProtocolHandler
      17: navigator.requestMediaKeySystemAccess
      18: navigator.requestWakeLock
      19: navigator.sendBeacon
      20: navigator.serviceWorker
      21: navigator.storeWebWideTrackingException
      22: navigator.webkitGetGamepads
      23: navigator.webkitTemporaryStorage
      24: Number.parseInt
      25: Math.hypot

      Running this function on my current machine on Chrome
      returns the number 30261693 while on Safari returns 26018161

      Converting these numbers to binary allows you to see which properties
      exist and don't in your browser.

      (The first bit from the left specifies whether Math.hypot exists and the last bit is navigator.credentials)
      30261693: 1 1 1 0 0 1 1 0 1 1 1 0 0 0 0 0 1 1 0 1 1 1 1 0 1
      26018161: 1 1 0 0 0 1 1 0 1 0 0 0 0 0 0 0 1 0 1 1 1 0 0 0 1

    */
    fas: function() {
      try {
        return Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24);
      } catch (t) {
        return 0;
      }
    },
    
    /*
    This function gets an average of performance metrics by
    running various Math and JSON functions several times.
    */
    getmr: function() {
      try {
        if ("undefined" == typeof performance || void 0 === performance.now || "undefined" == typeof JSON) return void(bmak.mr = "undef");

        for (var t = "", a = 1e3, e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse], n = 0; n < e.length; n++) {
          var o = [],
            m = 0,
            r = performance.now(),
            i = 0,
            c = 0;

          if (void 0 !== e[n]) {
            for (i = 0; i < a && m < .6; i++) {
              for (var b = performance.now(), d = 0; d < 4e3; d++) e[n](3.14);

              var s = performance.now();
              o.push(Math.round(1e3 * (s - b))), m = s - r;
            }

            var k = o.sort();
            c = k[Math.floor(k.length / 2)] / 5;
          }

          t = t + c + ",";
        }

        bmak.mr = t;
      } catch (t) {
        bmak.mr = "exception";
      }
    },
    
    /*
      Checks for a series of properties that only exist while using
      browser driver automation libraries. 

      see: https://themerkle.com/selenium-java-how-to-avoid-bot-detection-by-websites-when-using-chromedriver-exe/
      see: https://stackoverflow.com/a/24965280
    */
    sed: function() {
      var t;
      // Property that exists when using chromedriver
      t = window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? "1" : "0";
      var a;
      // Selenium webdriver
      a = null != window.document.documentElement.getAttribute("webdriver") ? "1" : "0";
      var e;
      // Selenium webdriver
      e = void 0 !== navigator.webdriver && navigator.webdriver ? "1" : "0";
      var n;
      // Selenium webdriver
      n = void 0 !== window.webdriver ? "1" : "0";
      var o;
      o = void 0 !== window.XPathResult || void 0 !== document.XPathResult ? "1" : "0";
      var m;
      // Selenium webdriver
      m = null != window.document.documentElement.getAttribute("driver") ? "1" : "0";
      var r;
      // Selenium webdriver
      return r = null != window.document.documentElement.getAttribute("selenium") ? "1" : "0", [t, a, e, n, o, m, r].join(",");

      // default values to avoid being detected as a bot
      // return "0,0,0,0,1,0,0"
    },
    
    /*
      Mouse events.

      This function gets triggered on:
      
      hmm: "mousemove", "onmousemove" (a = 1)
      hc: "click", "onclick" (a = 2)
      hmd: "mousedown", "onmousedown" (a = 3)
      hmu: "mouseup", "onmouseup" (a = 4)
    */
    cma: function(t, a) {
      try {
        
        /*
          If this function is being triggered by: 
          a mousemove event and the mouse events is less than the mouse move event limit (100)
          OR any click/mousedown/mouseup events and the event count is less than the mouse click event limit (75)
        */
        if (1 == a && bmak.mme_cnt < bmak.mme_cnt_lmt || 1 != a && bmak.mduce_cnt < bmak.mduce_cnt_lmt) {
          var e = t || window.event,
            n = -1,
            o = -1;

          
          e && e.pageX && e.pageY ? (n = Math.floor(e.pageX), o = Math.floor(e.pageY)) : e && e.clientX && e.clientY && (n = Math.floor(e.clientX), o = Math.floor(e.clientY));
          var m = e.toElement;
          null == m && (m = e.target);
          var r = bmak.gf(m),
            i = bmak.get_cf_date() - bmak.start_ts,
            c = bmak.me_cnt + "," + a + "," + i + "," + n + "," + o;

          if (1 != a) {
            c = c + "," + r;
            var b = void 0 !== e.which ? e.which : e.button;
            null != b && 1 != b && (c = c + "," + b);
          }

          void 0 !== e.isTrusted && !1 === e.isTrusted && (c += ",it0"), c += ";", bmak.me_vel = bmak.me_vel + bmak.me_cnt + a + i + n + o, bmak.mact = bmak.mact + c, bmak.ta += i;
        }

        1 == a ? bmak.mme_cnt++ : bmak.mduce_cnt++, bmak.me_cnt++, bmak.js_post && 3 == a && (bmak.aj_type = 1, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
      } catch (t) {}
    },
    
    /*
      Another one of Akamai's obfuscated ways of
      return current timestamp in milliseconds.

      It calls bmak.get_cf_date which returns Date.now()
    */
    x2: function() {
        // bmak.ff = String.fromCharCode
        var t = bmak.ff,
        // "bmak"
        a = t(98) + t(109) + t(97) + t(107),
        // "get_cf_date"
        e = t(103) + t(101) + t(116) + t(95) + t(99) + t(102) + t(95) + t(100) + t(97) + t(116) + t(101),
        n = window[a][e], // window.bmak.get_cf_date
        o = 0;
      return "function" == typeof n && (o = n()), o;
    },
    
    /*
      Queries a bunch of permissions and maps into an array that
      states whether the permission was
      prompted (1)
      granted (2)
      denied (0)
      invalid permission name (4)
      Other error (3)

      The array is then joined together to become a stringified number.

      On my Chrome this function sets bmak.nav_perm to 
      "11321144241322243122" but if navigator.permissions 
      does not exist like on Safari nav_perm is set to 6

      If the function fails for another reason then nav_perm
      is set to 7

      This can be used as a browser & fingerprinting check because:
      -  Permissions don't exist on safari
      -  Different browser's / users will have different permission configurations
    */
    np: function() {
      var t = [],
        a = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];

      try {
        if (!navigator.permissions) return void(bmak.nav_perm = 6);
        bmak.nav_perm = 8;

        var e = function(a, e) {
            return navigator.permissions.query({
              name: a
            }).then(function(a) {
              switch (a.state) {
                case "prompt":
                  t[e] = 1;
                  break;

                case "granted":
                  t[e] = 2;
                  break;

                case "denied":
                  t[e] = 0;
                  break;

                default:
                  t[e] = 5;
              }
            })["catch"](function(a) {
              t[e] = -1 !== a.message.indexOf("is not a valid enum value of type PermissionName") ? 4 : 3;
            });
          },
          n = a.map(function(t, a) {
            return e(t, a);
          });

        Promise.all(n).then(function() {
          bmak.nav_perm = t.join("");
        });
      } catch (t) {
        bmak.nav_perm = 7;
      }
    },
    
    /*
      This function handles pointer events.
      Pointer events can be triggered by pen/stylus
      or touch devices (see: https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)

      The events that trigger this function:

      hpd: "pointerdown", "onpointerdown" (a = 3)
      hpu: "pointerup", "onpointerup" (a = 4)
    */
    cpa: function(t, a) {
      try {
        var e = !1;

        if (1 == a && bmak.pme_cnt < bmak.pme_cnt_lmt || 1 != a && bmak.pduce_cnt < bmak.pduce_cnt_lmt) {
          var n = t || window.event;

          
          /*
            Only run this if the user is not using a mouse
            (is using a pen or touchscreen)
          */
          if (n && "mouse" != n.pointerType) {
            e = !0;
            var o = -1,
              m = -1;
            n && n.pageX && n.pageY ? (o = Math.floor(n.pageX), m = Math.floor(n.pageY)) : n && n.clientX && n.clientY && (o = Math.floor(n.clientX), m = Math.floor(n.clientY));
            // get time elapsed since the script first ran.
            var r = bmak.get_cf_date() - bmak.start_ts,
            // i = pointer event count, event type, time elapsed, x, y
              i = bmak.pe_cnt + "," + a + "," + r + "," + o + "," + m;
            void 0 !== n.isTrusted && !1 === n.isTrusted && (i += ",0"), bmak.pe_vel = bmak.pe_vel + bmak.pe_cnt + a + r + o + m, bmak.pact = bmak.pact + i + ";", bmak.ta += r, 1 == a ? bmak.pme_cnt++ : bmak.pduce_cnt++;
          }
        }

        1 == a ? bmak.pme_cnt++ : bmak.pduce_cnt++, bmak.pe_cnt++, bmak.js_post && 3 == a && e && (bmak.aj_type = 2, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
      } catch (t) {}
    },
    
    /*
      Takes in a string as a parameter
      Iterates over the string
      and returns an accumulator of the
      character codes less than 128
      (non-extended ASCII codes)

      Example:
        bmak.ab("a")   // 97
        bmak.ab("b")   // 98
        bmak.ab("c")   // 99
        bmak.ab("abc") // 294 (97 + 98 + 99)

      https://www.rapidtables.com/code/text/ascii-table.html
    */
    ab: function(t) {
      if (null == t) return -1;

      try {
        for (var a = 0, e = 0; e < t.length; e++) {
          var n = t.charCodeAt(e);
          n < 128 && (a += n);
        }

        return a;
      } catch (t) {
        return -2;
      }
    },
    // fromCharCode alias
    ff: function(t) {
      return String.fromCharCode(t);
    },
    
    /*
      Distance formula
      https://www.varsitytutors.com/hotmath/hotmath_help/topics/distance-formula-in-3d

    */
    cal_dis: function(t) {
      var a = t[0] - t[1],
        e = t[2] - t[3],
        n = t[4] - t[5],
        o = Math.sqrt(a * a + e * e + n * n);
      return Math.floor(o);
    },
    to: function() {
      var t = bmak.x2() % 1e7;
      bmak.d3 = t;

      // e = parseInt("7") -> 7
      for (var a = t, e = bmak.pi(bmak.ff(51)), n = 0; n < 5; n++) {
        // parseInt(Date.now() % 1e7 / Math.pow(10, n)) % 10
        var o = bmak.pi(t / Math.pow(10, n)) % 10;
        m = o + 1;
        op = bmak.cc(o);
        a = op(a, m);
      }

      bmak.o9 = a * e;
    },
    
    /*
      The t parameter is the start timestamp (start_ts)
      Original function:
      jrs: function(t) {
        for (var a = Math.floor(1e5 * Math.random() + 1e4), e = String(t * a), n = 0, o = [], m = e.length >= 18; o.length < 6;) o.push(parseInt(e.slice(n, n + 2))), n = m ? n + 3 : n + 2;

        return [a, bmak.cal_dis(o)];
      }
    */
    jrs: function(t) {
      // Generate a number between 10,000 and 110,000
      var a = Math.floor(1e5 * Math.random() + 1e4);
      var e = String(t * a); // start_ts * the random number stringified
      var n = 0;
      var o = [];
      var m = e.length >= 18;
      while (o.length < 6){
        o.push(parseInt(e.slice(n, n + 2)));
        if (m) {
          n += 3;
        } else {
          n += 2;
        }
      }

      return [a, bmak.cal_dis(o)];
    },
    
    /*
      Text rendering based fingerprinting.
      By rendering various fonts and taking note of device pixel ratio
      we're able to build a fingerprint on the user.

      On my M1 Macbook Air on Safari the fmh hash returns "4d624c99ce55b315c4f2eddf110ab32c60f386cf5ccf175f66d4b8ecaf332b09"
      while my Windows machine returns "b89fb7541ffbbc3a0c9e37f0c9e6b56019c29c7a0c8644f8f587d8af18fc2426"
    */
    fm: function() {
      var t = ["Monospace", "Wingdings 2", "ITC Bodoni 72 Bold", "Menlo", "Gill Sans MT", "Lucida Sans", "Bodoni 72", "Serif", "Shree Devanagari 714", "Microsoft Tai Le", "Nimbus Roman No 9 L", "Candara", "Press Start 2P", "Waseem"],
        a = document.createElement("span");
      a.innerHTML = "mmmmmmmmlli", a.style.fontSize = "192px";
      var e = "",
        n = document.getElementsByTagName("body")[0];

      // If the body element exists (it should)
      if (n) {
        // Iterate through all the fonts above and change the span
        // element to the font while appending the name:offsetWidth,offsetHeight
        for (var o in t) a.style.fontFamily = t[o], n.appendChild(a), e += t[o] + ":" + a.offsetWidth + "," + a.offsetHeight + ";", n.removeChild(a);

        // Once done iterating through all of the fonts to try
        // SHA256 hash the final string and set bmak.fmh 
        bmak.fmh = bmak.ats(bmak.mn_s(e));
      } else bmak.fmh = "";

      // Device pixel ratio can be used to fingerprint the user.
      // window.devicePixelRatio returning 1 indicates 96 DPI
      // whereas 2 indicates HiDPI/Retina.
      bmak.fmz = "devicePixelRatio" in window && void 0 !== window.devicePixelRatio ? window.devicePixelRatio : -1;
    },
    
    /*
    WebGL based detections through the capturing of GPU and vendor
    + the collection of hashed supported web extensions.

    Original function:
      wgl: function() {
        try {
          var t = document.createElement("canvas"),
            a = t.getContext("webgl");
          bmak.wv = "n", bmak.wr = "n", bmak.weh = "n", bmak.wl = 0, a && (bmak.wv = "b", bmak.wr = "b", bmak.weh = "b", a.getSupportedExtensions() && (bmak.weh = bmak.ats(bmak.mn_s(JSON.stringify(a.getSupportedExtensions().sort()))), bmak.wl = a.getSupportedExtensions().length, a.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0 && (bmak.wv = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL), bmak.wr = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL))));
        } catch (t) {
          bmak.wv = "e", bmak.wr = "e", bmak.weh = "e", bmak.wl = 0;
        }
      }
    */
    wgl: function() {
      try {
        var t = document.createElement("canvas");
        var a = t.getContext("webgl");
        bmak.wv = "n";
        bmak.wr = "n";
        bmak.weh = "n";
        bmak.wl = 0;
        if (a) {
          bmak.wv = "b";
          bmak.wr = "b";
          bmak.weh = "b";
          if (a.getSupportedExtensions()) {
            // SHA256 hash of all the supported webgl extensions.
            // This can be used to distinguish hardware based rendering
            // from software based rendering (headless browsers.)
            bmak.weh = bmak.ats(bmak.mn_s(JSON.stringify(a.getSupportedExtensions().sort())));
            bmak.wl = a.getSupportedExtensions().length;
            if (a.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0) {

              // Fetch the vendor (In my case: "Apple Inc.")
              bmak.wv = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL);
              // Fetch the GPU (In my case: "Apple GPU")
              // In the case of Headless Chrome this may return
              // "Google SwiftShader" (Google's software renderer)
              // and thus you would potentially be flagged.
              bmak.wr = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL);
            }
          }
        }
      } catch (t) {
        bmak.wv = "e";
        bmak.wr = "e";
        bmak.weh = "e";
        bmak.wl = 0;
      }
    },
    
    /*
      Can be used to fingerprint and determine what device/browser
      a user is using.

      The voices provided in the Web Speech API is different
      depending on the browser.

      My Chrome 92 reports 67 voices while Safari reports 48.
      The voices are also completely different with none of the
      voiceURIs matching.

      Each voice is turned into a string with the following format:
      "voiceURI_lang" and the final string is SHA256 hashed and stored
      in bmak.ssh.
      
      If no voices exist "0" is stored in bmak.ssh.
      If speech synthesis is not available "n" is stored in bmak.ssh.
    */
    csh: function() {
      if (window.speechSynthesis) {
        var t = window.speechSynthesis.getVoices();

        if (t.length > 0) {
          for (var a = "", e = 0; e < t.length; e++) a += t[e].voiceURI + "_" + t[e].lang;

          bmak.ssh = bmak.ats(bmak.mn_s(a));
        } else bmak.ssh = "0";
      } else bmak.ssh = "n";
    },
    
    /*
      Create a bit field checking for the existence of any
      browser automation drivers

      0:  window.__nightmare
      1:  window.cdc_adoQpoasnfa76pfcZLmcfl_Array
      2:  window.cdc_adoQpoasnfa76pfcZLmcfl_Promise
      3:  window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol
      4:  window.OSMJIF
      5:  window._Selenium_IDE_Recorder
      6:  window.__$webdriverAsyncExecutor
      7:  window.__driver_evaluate
      8:  window.__driver_unwrapped
      9:  window.__fxdriver_evaluate
      10: window.__fxdriver_unwrapped
      11: window.__lastWatirAlert
      12: window.__lastWatirConfirm
      13: window.__lastWatirPrompt
      14: window.__phantomas
      15: window.__selenium_evaluate
      16: window.__selenium_unwrapped
      17: window.__webdriverFuncgeb
      18: window.__webdriver__chr
      19: window.__webdriver_evaluate
      20: window.__webdriver_script_fn
      21: window.__webdriver_script_func
      22: window.__webdriver_script_function
      23: window.__webdriver_unwrapped
      24: window.awesomium
      25: window.callSelenium
      26: window.calledPhantom
      27: window.calledSelenium
      28: window.domAutomationController
      29: window.watinExpressionError
      30: window.watinExpressionResult
      31: window.spynner_additional_js_loaded
      32: document.$chrome_asyncScriptInfo
      33: window.fmget_targets
      34: window.geb


      Running this function on my current machine on Chrome
      returns the number 0.

      Converting these numbers to binary allows you to see which properties
      exist and don't in your browser.

      (The first bit from the left specifies whether window.geb exists and the last bit is window.__nightmare)
    */
    hbs: function() {
      try {
        return Boolean(window.__nightmare) + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Array) << 1) + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Promise) << 2) + (Boolean(window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol) << 3) + (Boolean(window.OSMJIF) << 4) + (Boolean(window._Selenium_IDE_Recorder) << 5) + (Boolean(window.__$webdriverAsyncExecutor) << 6) + (Boolean(window.__driver_evaluate) << 7) + (Boolean(window.__driver_unwrapped) << 8) + (Boolean(window.__fxdriver_evaluate) << 9) + (Boolean(window.__fxdriver_unwrapped) << 10) + (Boolean(window.__lastWatirAlert) << 11) + (Boolean(window.__lastWatirConfirm) << 12) + (Boolean(window.__lastWatirPrompt) << 13) + (Boolean(window.__phantomas) << 14) + (Boolean(window.__selenium_evaluate) << 15) + (Boolean(window.__selenium_unwrapped) << 16) + (Boolean(window.__webdriverFuncgeb) << 17) + (Boolean(window.__webdriver__chr) << 18) + (Boolean(window.__webdriver_evaluate) << 19) + (Boolean(window.__webdriver_script_fn) << 20) + (Boolean(window.__webdriver_script_func) << 21) + (Boolean(window.__webdriver_script_function) << 22) + (Boolean(window.__webdriver_unwrapped) << 23) + (Boolean(window.awesomium) << 24) + (Boolean(window.callSelenium) << 25) + (Boolean(window.calledPhantom) << 26) + (Boolean(window.calledSelenium) << 27) + (Boolean(window.domAutomationController) << 28) + (Boolean(window.watinExpressionError) << 29) + (Boolean(window.watinExpressionResult) << 30) + (Boolean(window.spynner_additional_js_loaded) << 31) + (Boolean(document.$chrome_asyncScriptInfo) << 32) + (Boolean(window.fmget_targets) << 33) + (Boolean(window.geb) << 34);
      } catch (t) {
        return 0;
      }
    },
    
    /*
      Checks if navigator.webdriver is true.
      https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver

      This property is true when in:
      Chrome
        The --enable-automation or the --headless flag or the --remote-debugging-port is used.
      Firefox
        The marionette.enabled preference or --marionette flag is passed.
    */
    gwd: function() {
      try {
        return navigator.webdriver ? navigator.webdriver : -1;
      } catch (t) {
        return 0;
      }
    },
    
    /*
      Accumulate the ascii values of each character of 
      "name" or "id" attribute
      (uses name if it exists, id otherwise, returns -1 if none exists)

      if the parameter is null it will use document.activeElement
    */
    gf: function(t) {
      var a;
      if (a = null == t ? document.activeElement : t, null == document.activeElement) return -1;
      var e = a.getAttribute("name");

      // If the name attribute does not exist on the element
      // accumulate the ascii values of each character
      // in the id attribute of the passed in element
      if (null == e) {
        var n = a.getAttribute("id");
        return null == n ? -1 : bmak.ab(n);
      }

      // Accumulate the ascii values of each character
      // in the name attribute of the passed in element
      return bmak.ab(e);
    },
    cc: function(t) {
      var a = t % 4;
      2 == a && (a = 3);

      var e = 42 + a,
        n = function(t, a) {
          return 0;
        };

      if (42 == e) var n = function(t, a) {
        return t * a;
      };
      else if (43 == e) var n = function(t, a) {
        return t + a;
      };
      else var n = function(t, a) {
        return t - a;
      };
      return n;
    },
    isIgn: function(t) {
      var a = document.activeElement;
      if (null == document.activeElement) return 0;
      var e = a.getAttribute("type");
      return 1 == (null == e ? -1 : bmak.get_type(e)) && bmak.fidcnt > 12 && -2 == t ? 1 : 0;
    },
    
    /*
      Key event function
      Gets called on 
      "keydown", "onkeydown", (a = 1)
      "keyup", "onkeyup", (a = 2)
      "keypress", "onkeypress" (a = 3)
    */
    cka: function(t, a) {
      try {
        var e = t || window.event,
          n = -1,
          o = 1;

        if (bmak.ke_cnt < bmak.ke_cnt_lmt && e) {
          n = e.keyCode;
          var m = e.charCode,
            r = e.shiftKey ? 1 : 0,
            i = e.ctrlKey ? 1 : 0,
            c = e.metaKey ? 1 : 0,
            b = e.altKey ? 1 : 0,
            d = 8 * r + 4 * i + 2 * c + b,
            s = bmak.get_cf_date() - bmak.start_ts,
            k = bmak.gf(null),
            l = 0;
          m && n && (n = 0 != m && 0 != n && m != n ? -1 : 0 != n ? n : m), 0 == i && 0 == c && 0 == b && n >= 32 && (n = 3 == a && n >= 32 && n <= 126 ? -2 : n >= 33 && n <= 47 ? -3 : n >= 112 && n <= 123 ? -4 : -2), k != bmak.prevfid ? (bmak.fidcnt = 0, bmak.prevfid = k) : bmak.fidcnt = bmak.fidcnt + 1;

          if (0 == bmak.isIgn(n)) {
            var u = bmak.ke_cnt + "," + a + "," + s + "," + n + "," + l + "," + d + "," + k;
            void 0 !== e.isTrusted && !1 === e.isTrusted && (u += ",0"), u += ";", bmak.kact = bmak.kact + u, bmak.ke_vel = bmak.ke_vel + bmak.ke_cnt + a + s + n + d + k, bmak.ta += s;
          } else o = 0;
        }

        o && e && bmak.ke_cnt++, !bmak.js_post || 1 != a || 13 != n && 9 != n || (bmak.aj_type = 3, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1);
      } catch (t) {}
    },
    
    /*
      Touch events function
      Get called on:
      "touchmove" (a = 1)
      "touchstart" (a = 2)
      "touchend" (a = 3)
      "touchcancel" (a = 4)
    */
    cta: function(t, a) {
      try {
        if (1 == a && bmak.tme_cnt < bmak.tme_cnt_lmt || 1 != a && bmak.tduce_cnt < bmak.tduce_cnt_lmt) {
          var e = t || window.event,
            n = -1,
            o = -1;
          e && e.pageX && e.pageY ? (n = Math.floor(e.pageX), o = Math.floor(e.pageY)) : e && e.clientX && e.clientY && (n = Math.floor(e.clientX), o = Math.floor(e.clientY));
          var m = bmak.get_cf_date() - bmak.start_ts,
            r = bmak.te_cnt + "," + a + "," + m + "," + n + "," + o;
          void 0 !== e.isTrusted && !1 === e.isTrusted && (r += ",0"), bmak.tact = bmak.tact + r + ";", bmak.ta += m, bmak.te_vel = bmak.te_vel + bmak.te_cnt + a + m + n + o, bmak.doa_throttle = 0, bmak.dma_throttle = 0;
        }

        1 == a ? bmak.tme_cnt++ : bmak.tduce_cnt++, bmak.te_cnt++, bmak.js_post && 2 == a && bmak.aj_indx_tact < bmak.aj_lmt_tact && (bmak.aj_type = 5, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1, bmak.aj_indx_tact++);
      } catch (t) {}
    },
    
    /*
      Parse the parameter as a float and only
      return the float with a precision of 2
      decimal spaces.

      Return -1 if it can't be properly parsed
      as a float.
    */
    getFloatVal: function(t) {
      try {
        if (-1 != bmak.chknull(t) && !isNaN(t)) {
          var a = parseFloat(t);
          if (!isNaN(a)) return a.toFixed(2);
        }
      } catch (t) {}

      return -1;
    },
    cdoa: function(t) {
      try {
        if (bmak.doe_cnt < bmak.doe_cnt_lmt && bmak.doa_throttle < 2 && t) {
          var a = bmak.get_cf_date() - bmak.start_ts,
            e = bmak.getFloatVal(t.alpha),
            n = bmak.getFloatVal(t.beta),
            o = bmak.getFloatVal(t.gamma),
            m = bmak.doe_cnt + "," + a + "," + e + "," + n + "," + o;
          void 0 !== t.isTrusted && !1 === t.isTrusted && (m += ",0"), bmak.doact = bmak.doact + m + ";", bmak.ta += a, bmak.doe_vel = bmak.doe_vel + bmak.doe_cnt + a, bmak.doe_cnt++;
        }

        bmak.js_post && bmak.doe_cnt > 1 && bmak.aj_indx_doact < bmak.aj_lmt_doact && (bmak.aj_type = 6, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1, bmak.aj_indx_doact++), bmak.doa_throttle++;
      } catch (t) {}
    },
    cdma: function(t) {
      try {
        if (bmak.dme_cnt < bmak.dme_cnt_lmt && bmak.dma_throttle < 2 && t) {
          var a = bmak.get_cf_date() - bmak.start_ts,
            e = -1,
            n = -1,
            o = -1;
          t.acceleration && (e = bmak.getFloatVal(t.acceleration.x), n = bmak.getFloatVal(t.acceleration.y), o = bmak.getFloatVal(t.acceleration.z));
          var m = -1,
            r = -1,
            i = -1;
          t.accelerationIncludingGravity && (m = bmak.getFloatVal(t.accelerationIncludingGravity.x), r = bmak.getFloatVal(t.accelerationIncludingGravity.y), i = bmak.getFloatVal(t.accelerationIncludingGravity.z));
          var c = -1,
            b = -1,
            d = 1;
          t.rotationRate && (c = bmak.getFloatVal(t.rotationRate.alpha), b = bmak.getFloatVal(t.rotationRate.beta), d = bmak.getFloatVal(t.rotationRate.gamma));
          var s = bmak.dme_cnt + "," + a + "," + e + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + d;
          void 0 !== t.isTrusted && !1 === t.isTrusted && (s += ",0"), bmak.dmact = bmak.dmact + s + ";", bmak.ta += a, bmak.dme_vel = bmak.dme_vel + bmak.dme_cnt + a, bmak.dme_cnt++;
        }

        bmak.js_post && bmak.dme_cnt > 1 && bmak.aj_indx_dmact < bmak.aj_lmt_dmact && (bmak.aj_type = 7, bmak.bpd(), bmak.pd(!0), bmak.ce_js_post = 1, bmak.aj_indx_dmact++), bmak.dma_throttle++;
      } catch (t) {}
    },
    
    /*
      Get type of HTML input element
      return 0 for: "text", "search", "url", "email", "tel", "number"
      return 1 for: "password"
      return 2 for: anything else
    */
    get_type: function(t) {
      return t = t.toLowerCase(), "text" == t || "search" == t || "url" == t || "email" == t || "tel" == t || "number" == t ? 0 : "password" == t ? 1 : 2;
    },
    
    /*
      Return -1 if null otherwise return parameter
    */
    chknull: function(t) {
      return null == t ? -1 : t;
    },
    getforminfo: function() {
      for (var t = "", a = "", e = document.getElementsByTagName("input"), n = -1, o = 0; o < e.length; o++) {
        var m = e[o],
          r = bmak.ab(m.getAttribute("name")),
          i = bmak.ab(m.getAttribute("id")),
          c = m.getAttribute("required"),
          b = null == c ? 0 : 1,
          d = m.getAttribute("type"),
          s = null == d ? -1 : bmak.get_type(d),
          k = m.getAttribute("autocomplete");
        null == k ? n = -1 : (k = k.toLowerCase(), n = "off" == k ? 0 : "on" == k ? 1 : 2);
        var l = m.defaultValue,
          u = m.value,
          _ = 0,
          f = 0;
        l && 0 != l.length && (f = 1), !u || 0 == u.length || f && u == l || (_ = 1), 2 != s && (t = t + s + "," + n + "," + _ + "," + b + "," + i + "," + r + "," + f + ";"), a = a + _ + ";";
      }

      return null == bmak.ins && (bmak.ins = a), bmak.cns = a, t;
    },
    
    /*
      Adds event listeners for device orientation & device motion
    */
    startdoadma: function() {
      0 == bmak.doadma_en && window.addEventListener && (window.addEventListener("deviceorientation", bmak.cdoa, !0), window.addEventListener("devicemotion", bmak.cdma, !0), bmak.doadma_en = 1), bmak.doa_throttle = 0, bmak.dma_throttle = 0;
    },
    updatet: function() {
      return bmak.get_cf_date() - bmak.start_ts;
    },
    // "touchmove" event
    htm: function(t) {
      bmak.cta(t, 1);
    },
    // "touchstart" event
    hts: function(t) {
      bmak.cta(t, 2);
    },
    // "touchend" event
    hte: function(t) {
      bmak.cta(t, 3);
    },
    // "touchcancel" event
    htc: function(t) {
      bmak.cta(t, 4);
    },
    // "mousemove" event
    hmm: function(t) {
      bmak.cma(t, 1);
    },
    // "click" event
    hc: function(t) {
      bmak.cma(t, 2);
    },
    // "mousedown" event
    hmd: function(t) {
      bmak.cma(t, 3);
    },
    // "mouseup" event
    hmu: function(t) {
      bmak.cma(t, 4);
    },
    // "pointerdown" event
    hpd: function(t) {
      bmak.cpa(t, 3);
    },
    // "pointerup" event
    hpu: function(t) {
      bmak.cpa(t, 4);
    },
    // "keydown" event
    hkd: function(t) {
      bmak.cka(t, 1);
    },
    // "keyup" event
    hku: function(t) {
      bmak.cka(t, 2);
    },
    // "keypress" event
    hkp: function(t) {
      bmak.cka(t, 3);
    },
    form_submit: function() {
      try {
        if (bmak.bpd(), 0 == bmak.sdfn.length) {
          if (document.getElementById("bm-telemetry") && (document.getElementById("bm-telemetry").value = bmak.sensor_data), void 0 !== document.getElementsByName("bm-telemetry"))
            for (var t = document.getElementsByName("bm-telemetry"), a = 0; a < t.length; a++) t[a].value = bmak.sensor_data;
        } else
          for (var a = 0; a < bmak.sdfn.length; a++) document.getElementById(bmak.sdfn[a]) && (document.getElementById(bmak.sdfn[a]).value = bmak.sensor_data);
      } catch (t) {
        bmak.sd_debug(",s7:" + t + "," + bmak.sensor_data);
      }
    },
    get_telemetry: function() {
      return bmak.bpd(), bmak.ir(), bmak.sensor_data;
    },
    
    /*
      Get the document URL and remove escape / quotation mark if exists.
      Return empty string if bmak.enReadDocUrl is false
    */
    getdurl: function() {
      return bmak.enReadDocUrl ? document.URL.replace(/\\|"/g, "") : "";
    },
    
    /*
      Returns a random 5 character sequence of numbers and letters
    */
    x1: function() {
      return Math.floor(16777216 * (1 + Math.random())).toString(36);
    },
    gck: function() {
      var t = bmak.x1() + bmak.x1() + bmak.x1() + bmak.x1();
      return bmak.set_cookie(bmak.ckie, t + "_" + bmak.ab(t)), t;
    },
    set_cookie: function(t, a) {
      void 0 !== document.cookie && (document.cookie = t + "=" + a + "; path=/; expires=Fri, 01 Feb 2025 08:00:00 GMT;");
    },
    get_cookie: function() {
      var t = "0";

      try {
        var t = bmak.cookie_chk_read(bmak.ckie);
        t || (bmak.n_ck = 1, t = bmak.bm ? "2" : "1");
      } catch (t) {}

      return t;
    },
    
    /*
      Used to return the value of the cookie name stored in bmak.ckie (_abck cookie)

      Traverses all cookies and if the cookie name matches the parameter and if
      the cookie value contains a ~ then return the cookie value.

      Return false otherwise
    */
    cookie_chk_read: function(t) {
      if (document.cookie)
        var a = t + "=";
        var e = document.cookie.split("; ");
        for (var n = 0; n < e.length; n++) {
          var o = e[n];

          if (0 === o.indexOf(a)) {
            var m = o.substring(a.length, o.length);
            if (-1 != m.indexOf("~") || -1 != decodeURIComponent(m).indexOf("~")) return m;
          }
        }
      return !1;
    },
    
    /*
      This functions is where the sensor_data for the outgoing cookie
      gets crafted.
    */
    bpd: function() {
      bmak.sd_debug("<bpd>");
      var t = 0;

      try {
        t = bmak.get_cf_date(); // Current time in milliseconds (Date.now)
        var a = bmak.updatet(), // Difference between now and the start timestamp of the script in milliseconds
          e = "3";
        bmak.ckie && (e = bmak.get_cookie());
        var n = bmak.gd(),
          // This property does not exist on Safari or IE (will return do_dis)
          o = window.DeviceOrientationEvent ? "do_en" : "do_dis",
          // This property does not exist on Safari or IE (will return dm_dis)
          m = window.DeviceMotionEvent ? "dm_en" : "dm_dis",
          // This property does not exist on Safari or IE (will return t_dis)
          r = window.TouchEvent ? "t_en" : "t_dis",
          i = o + "," + m + "," + r,
          c = bmak.getforminfo(),
          b = bmak.getdurl(),
          d = bmak.aj_type + "," + bmak.aj_indx;
        !bmak.fpcf.fpValCalculated && (0 == bmak.js_post || bmak.aj_indx > 0) && bmak.fpcf.fpVal();

        var s = bmak.ke_vel + bmak.me_vel + bmak.doe_vel + bmak.dme_vel + bmak.te_vel + bmak.pe_vel,
          k = bmak.ff, // bmak.ff = String.fromCharCode
          l = k(80) + k(105) + k(90) + k(116) + k(69), // PiZtE
          u = bmak.jrs(bmak.start_ts),
          _ = bmak.get_cf_date() - bmak.start_ts,
          
          /*
            Week identifier for start timestamp(bmak.start_ts).

            "this is the "week identifier", the number changes roughly once every week 
            (maybe 6 because now the extra room in the timeframe is hour 17.79648 hours)"
            - xssc

            see: https://github.com/char/bpre/issues/1#issuecomment-914575546
          */
          f = bmak.pi(bmak.d2 / 6),
          p = bmak.fas(),
          v = bmak.hbs(),
          h = bmak.gwd(),
          g = [bmak.ke_vel + 1, bmak.me_vel + 32, bmak.te_vel + 32, bmak.doe_vel, bmak.dme_vel, bmak.pe_vel, s, a, bmak.init_time, bmak.start_ts, bmak.fpcf.td, bmak.d2, bmak.ke_cnt, bmak.me_cnt, f, bmak.pe_cnt, bmak.te_cnt, _, bmak.ta, bmak.n_ck, e, bmak.ab(e), bmak.fpcf.rVal, bmak.fpcf.rCFP, p, l, u[0], u[1], v, h],
          w = g.join(","),
          y = "" + bmak.ab(bmak.fpcf.fpValstr);

        bmak.firstLoad ? bmak.np() : bmak.csh(), !bmak.hbCalc && (0 == bmak.js_post || bmak.aj_indx > 0) && (bmak.fm(), bmak.wgl(), bmak.hbCalc = !0);
        var E = "";
        bmak.hbCalc && (E = bmak.fmh + "," + bmak.fmz + "," + bmak.ssh + "," + bmak.wv + "," + bmak.wr + "," + bmak.weh + "," + bmak.wl);
        var S = bmak.sed(),
          C = bmak.mn_get_current_challenges(),
          B = "",
          x = "",
          M = "";

        if (void 0 !== C[1]) {
          var j = C[1];
          void 0 !== bmak.mn_r[j] && (B = bmak.mn_r[j]);
        }

        if (void 0 !== C[2]) {
          var A = C[2];
          void 0 !== bmak.mn_r[A] && (x = bmak.mn_r[A]);
        }

        if (void 0 !== C[3]) {
          var L = C[3];
          void 0 !== bmak.mn_r[L] && (M = bmak.mn_r[L]);
        }

        bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + bmak.informinfo + "-1,2,-94,-102," + c + "-1,2,-94,-108," + bmak.kact + "-1,2,-94,-110," + bmak.mact + "-1,2,-94,-117," + bmak.tact + "-1,2,-94,-111," + bmak.doact + "-1,2,-94,-109," + bmak.dmact + "-1,2,-94,-114," + bmak.pact + "-1,2,-94,-103," + bmak.vcact + "-1,2,-94,-112," + b + "-1,2,-94,-115," + w + "-1,2,-94,-106," + d, bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-119," + bmak.mr + "-1,2,-94,-122," + S + "-1,2,-94,-123," + B + "-1,2,-94,-124," + x + "-1,2,-94,-126," + M + "-1,2,-94,-127," + bmak.nav_perm;
        var P = 24 ^ bmak.ab(bmak.sensor_data);
        bmak.sensor_data = bmak.sensor_data + "-1,2,-94,-70," + bmak.fpcf.fpValstr + "-1,2,-94,-80," + y + "-1,2,-94,-116," + bmak.o9 + "-1,2,-94,-118," + P + "-1,2,-94,-129," + E + "-1,2,-94,-121,", bmak.sd_debug(",s1:" + bmak.sensor_data.slice(0, 10));
      } catch (t) {
        var T = "";

        try {
          t.stack && "string" == typeof t.stack ? T = t.stack.replace(/\"/g, "\\'") : "string" == typeof t && (T = t.replace(/\"/g, "\\'")), T = T.slice(0, 1e3), bmak.sd_debug(",s2:" + T), bmak.sensor_data = bmak.ver + "-1,2,-94,-100," + bmak.uar() + "-1,2,-94,-120," + T;
        } catch (t) {
          t.stack && "string" == typeof t.stack ? T = t.stack.replace(/\"/g, "\\'") : "string" == typeof t && (T = t.replace(/\"/g, "\\'")), T = T.slice(0, 1e3), bmak.sd_debug(",s3:" + T), bmak.sensor_data = bmak.ver + bmak.sensor_data + ",s3:" + T;
        }
      }

      try {
        var F = bmak.od(bmak.cs, bmak.api_public_key).slice(0, 16),
          D = Math.floor(bmak.get_cf_date() / 36e5),
          R = bmak.get_cf_date(),
          N = F + bmak.od(D, F) + bmak.sensor_data;
        bmak.sensor_data = N + ";" + (bmak.get_cf_date() - t) + ";" + bmak.tst + ";" + (bmak.get_cf_date() - R);
      } catch (t) {}

      bmak.sd_debug("</bpd>");
    },
    // t = bmak.cs, a = api_public_key
    // t = 0a46G5m17Vrp4o4c
    // a = afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq
    od: function(t, a) {
      try {
        t = String(t), a = String(a);
        var e = [],
          n = a.length;

        if (n > 0) {
          // Iterate over all characters in
          // bmak.cs
          for (var o = 0; o < t.length; o++) {
            var m = t.charCodeAt(o), // get current character code from bmak.cs
              r = t.charAt(o), // get the actual current character 
              i = a.charCodeAt(o % n); // get char code from api_public_key wrap index
            m = bmak.rir(m, 47, 57, i), m != t.charCodeAt(o) && (r = String.fromCharCode(m)), e.push(r);
          }

          if (e.length > 0) return e.join("");
        }
      } catch (t) {}

      return t;
    },
    
    /*

    Original Function:
      rir: function(t, a, e, n) {
        return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
      }
    */
    rir: function(t, a, e, n) {
      return t > a && t <= e && (t += n % (e - a)) > e && (t = t - e + a), t;
    },
    
    /*
      Triggered on visibility change.
    */
    lvc: function(t) {
      try {
        // If visibility change count is less than the limit (100)
        if (bmak.vc_cnt < bmak.vc_cnt_lmt) {
          // Get the elapsed time since script started
          var a = bmak.get_cf_date() - bmak.start_ts,
            e = t + "," + a + ";";
            // t = 1 if document.hidden == false t = 0 otherwise
            // append t and elapsed time to vcact
          bmak.vcact = bmak.vcact + e;
        }

        // increase the count
        bmak.vc_cnt++;
      } catch (t) {}
    },
    
    /*
      Gets triggered on "visibilitychange", "mozvisibilitychange", "msvisibilitychange", and "webkitvisibilitychange"
    */
    hvc: function() {
      try {
        var t = 1;
        document[bmak.hn] && (t = 0), bmak.lvc(t);
      } catch (t) {}
    },
    hb: function(t) {
      bmak.lvc(2);
    },
    hf: function(t) {
      bmak.lvc(3);
    },
    rve: function() {
      void 0 !== document.hidden ? (bmak.hn = "hidden", bmak.vc = "visibilitychange") : void 0 !== document.mozHidden ? (bmak.hn = "mozHidden", bmak.vc = "mozvisibilitychange") : void 0 !== document.msHidden ? (bmak.hn = "msHidden", bmak.vc = "msvisibilitychange") : void 0 !== document.webkitHidden && (bmak.hn = "webkitHidden", bmak.vc = "webkitvisibilitychange"), document.addEventListener ? "unk" != bmak.hn && document.addEventListener(bmak.vc, bmak.hvc, !0) : document.attachEvent && "unk" != bmak.hn && document.attachEvent(bmak.vc, bmak.hvc), window.onblur = bmak.hb, window.onfocus = bmak.hf;
    },
    
    /*
      Start tracking device orientation and device motion
      and then setup event listeners for other event
      tracking (e.g: key tracking, mouse tracking)

      This function calls the startdoadma function initially
      and then on a 3 second interval.
    */
    startTracking: function() {
      bmak.startdoadma();

      try {
        bmak.to();
      } catch (t) {
        bmak.o9 = -654321;
      }

      setInterval(function() {
        bmak.startdoadma();
      }, 3e3);

      if (document.addEventListener) {
        document.addEventListener("touchmove", bmak.htm, !0);
        document.addEventListener("touchstart", bmak.hts, !0);
        document.addEventListener("touchend", bmak.hte, !0);
        document.addEventListener("mousemove", bmak.hmm, !0);
        document.addEventListener("click", bmak.hc, !0);
        document.addEventListener("mousedown", bmak.hmd, !0);
        document.addEventListener("mouseup", bmak.hmu, !0);
        document.addEventListener("pointerdown", bmak.hpd, !0);
        document.addEventListener("pointerup", bmak.hpu, !0);
        document.addEventListener("keydown", bmak.hkd, !0);
        document.addEventListener("keyup", bmak.hku, !0);
        document.addEventListener("keypress", bmak.hkp, !0);
      } else if (document.attachEvent) {
        document.attachEvent("touchmove", bmak.htm);
        document.attachEvent("touchstart", bmak.hts);
        document.attachEvent("touchend", bmak.hte);
        document.attachEvent("touchcancel", bmak.htc);
        document.attachEvent("onmousemove", bmak.hmm);
        document.attachEvent("onclick", bmak.hc);
        document.attachEvent("onmousedown", bmak.hmd);
        document.attachEvent("onmouseup", bmak.hmu);
        document.attachEvent("onpointerdown", bmak.hpd);
        document.attachEvent("onpointerup", bmak.hpu);
        document.attachEvent("onkeydown", bmak.hkd);
        document.attachEvent("onkeyup", bmak.hku);
        document.attachEvent("onkeypress", bmak.hkp);
      }
      bmak.rve();
      bmak.informinfo = bmak.getforminfo();
      if (bmak.js_post) {
        bmak.aj_type = 0;
        bmak.bpd();
        bmak.pd(!0);
      }
      bmak.firstLoad = !1;
    },
    
    /*
      Checks if a character is a part of the extended
      ASCII code range. If it isn't return 0 otherwise
      return the character code.

      see: https://www.ascii-code.com/

      t: String to check
      a: Index of character you want to check
    */
    gb: function(t, a) {
      var e = t.charCodeAt(a);
      return e = e > 255 ? 0 : e;
    },
    
    /*
      Base64 encode a string.

      If the btoa function doesn't exist then it uses
      its own.

      see: https://developer.mozilla.org/en-US/docs/Web/API/btoa
    */
    encode: function(t) {
      if ("undefined" != typeof btoa) return btoa(t);

      for (var a, e, n, o, m, r, i, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", d = 3 * Math.floor(t.length / 3), s = 0; s < d; s += 3) a = bmak.gb(t, s), e = bmak.gb(t, s + 1), n = bmak.gb(t, s + 2), o = a >> 2, m = ((3 & a) << 4) + (e >> 4), r = ((15 & e) << 2) + (n >> 6), i = 63 & n, b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + c.charAt(i);

      return t.length % 3 == 1 && (a = bmak.gb(t, s), o = a >> 2, m = (3 & a) << 4, b = b + c.charAt(o) + c.charAt(m) + "=="), t.length % 3 == 2 && (a = bmak.gb(t, s), e = bmak.gb(t, s + 1), o = a >> 2, m = ((3 & a) << 4) + (e >> 4), r = (15 & e) << 2, b = b + c.charAt(o) + c.charAt(m) + c.charAt(r) + "="), b;
    },
    // IE 9 or less check.
    ie9OrLower: function() {
      try {
        if ("string" == typeof navigator.appVersion && -1 != navigator.appVersion.indexOf("MSIE")) {
          if (parseFloat(navigator.appVersion.split("MSIE")[1]) <= 9) return !0;
        }
      } catch (t) {}

      return !1;
    },
    // Returns nothing.
    parse_gp: function(t) {},
    // Not called in script.
    call_gp: function() {
      var t;
      void 0 !== window.XMLHttpRequest ? t = new XMLHttpRequest() : void 0 !== window.XDomainRequest ? (t = new XDomainRequest(), t.onload = function() {
        this.readyState = 4, this.onreadystatechange instanceof Function && this.onreadystatechange();
      }) : t = new ActiveXObject("Microsoft.XMLHTTP"), t.open("GET", bmak.params_url, !0), t.onreadystatechange = function() {
        t.readyState > 3 && bmak.parse_gp && bmak.parse_gp(t);
      }, t.send();
    },
    // Not called in script.
    apicall: function(t, a) {
      var e;
      e = window.XDomainRequest ? new XDomainRequest() : window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"), e.open("POST", t, a);
      var n = bmak.encode(bmak.api_public_key + ":");
      bmak.auth = ",\"auth\" : \"" + n + "\"", e.setRequestHeader && (e.setRequestHeader("Content-type", "application/json"), e.setRequestHeader("Authorization", "Basic " + n), bmak.auth = "");
      var o = "{\"session_id\" : \"" + bmak.session_id + "\",\"sensor_data\" : \"" + bmak.sensor_data + "\"" + bmak.auth + "}";
      e.send(o);
    },
    // Main function for sending Sensor Data to API.
    apicall_bm: function(t, a, e) {
      var n;
      void 0 !== window.XMLHttpRequest ? n = new XMLHttpRequest() : void 0 !== window.XDomainRequest ? (n = new XDomainRequest(), n.onload = function() {
        this.readyState = 4, this.onreadystatechange instanceof Function && this.onreadystatechange();
      }) : n = new ActiveXObject("Microsoft.XMLHTTP"), n.open("POST", t, a), void 0 !== n.withCredentials && (n.withCredentials = !0);
      var o = "{\"sensor_data\":\"" + bmak.sensor_data + "\"}";
      n.onreadystatechange = function() {
        n.readyState > 3 && e && e(n);
      }, n.send(o), bmak.dcs = 0;
    },
    pd: function(t) {
      bmak.check_stop_protocol() ? (bmak.apicall_bm(bmak.cf_url, t, bmak.patp), bmak.aj_indx = bmak.aj_indx + 1) : bmak.loap && bmak.dcs && bmak.apicall_bm(bmak.cf_url, t, bmak.patp);
    },
    check_stop_protocol: function() {
      var t = bmak.get_stop_signals(),
        a = t[0];
      !bmak.rst && a > -1 && (bmak.ir(), bmak.rst = !0);
      var e = t[1];
      return -1 == e || bmak.aj_ss < e;
    },
    get_stop_signals: function() {
      var t = [-1, -1],
        a = bmak.cookie_chk_read(bmak.ckie);
      if (!1 !== a) try {
        var e = decodeURIComponent(a).split("~");

        if (e.length >= 4) {
          var n = bmak.pi(e[1]),
            o = bmak.pi(e[3]);
          n = isNaN(n) ? -1 : n, o = isNaN(o) ? -1 : o, t = [o, n];
        }
      } catch (t) {}
      return t;
    },
    patp: function(t) {
      bmak.aj_ss++, bmak.rst = !1;
    },
    get_mn_params_from_abck: function() {
      var t = [
        []
      ];

      try {
        var a = bmak.cookie_chk_read(bmak.ckie);

        if (!1 !== a) {
          var e = decodeURIComponent(a).split("~");

          if (e.length >= 5) {
            var n = e[0],
              o = e[4],
              m = o.split("||");
            if (m.length > 0)
              for (var r = 0; r < m.length; r++) {
                var i = m[r],
                  c = i.split("-");

                if (c.length >= 5) {
                  var b = bmak.pi(c[0]),
                    d = c[1],
                    s = bmak.pi(c[2]),
                    k = bmak.pi(c[3]),
                    l = bmak.pi(c[4]),
                    u = 1;
                  c.length >= 6 && (u = bmak.pi(c[5]));
                  var _ = [b, n, d, s, k, l, u];
                  2 == u ? t.splice(0, 0, _) : t.push(_);
                }
              }
          }
        }
      } catch (t) {}

      return t;
    },
    mn_get_current_challenges: function() {
      var t = bmak.get_mn_params_from_abck(),
        a = [];
      if (null != t)
        for (var e = 0; e < t.length; e++) {
          var n = t[e];

          if (n.length > 0) {
            var o = n[1] + n[2],
              m = n[6];
            a[m] = o;
          }
        }
      return a;
    },
    mn_update_challenge_details: function(t) {
      bmak.mn_sen = t[0], bmak.mn_abck = t[1], bmak.mn_psn = t[2], bmak.mn_cd = t[3], bmak.mn_tout = t[4], bmak.mn_stout = t[5], bmak.mn_ct = t[6], bmak.mn_ts = bmak.start_ts, bmak.mn_cc = bmak.mn_abck + bmak.start_ts + bmak.mn_psn;
    },
    mn_get_new_challenge_params: function(t) {
      var a = null,
        e = null,
        n = null;
      if (null != t)
        for (var o = 0; o < t.length; o++) {
          var m = t[o];

          if (m.length > 0) {
            for (var r = m[0], i = bmak.mn_abck + bmak.start_ts + m[2], c = (m[3], m[6]), b = 0; b < bmak.mn_lcl && 1 == r && bmak.mn_lc[b] != i; b++);

            b == bmak.mn_lcl && (a = o, 2 == c && (e = o), 3 == c && (n = o));
          }
        }
      return null != n && bmak.pstate ? t[n] : null == e || bmak.pstate ? null == a || bmak.pstate ? null : t[a] : t[e];
    },
    mn_poll: function() {
      if (0 == bmak.mn_state) {
        var t = bmak.get_mn_params_from_abck(),
          a = bmak.mn_get_new_challenge_params(t);
        null != a && (bmak.mn_update_challenge_details(a), bmak.mn_sen && (bmak.mn_state = 1, bmak.mn_mc_indx = 0, bmak.mn_al = [], bmak.mn_il = [], bmak.mn_tcl = [], bmak.mn_lg = [], bmak.mn_rts = bmak.get_cf_date(), bmak.mn_rt = bmak.mn_rts - bmak.start_ts, bmak.mn_wt = 0, setTimeout(bmak.mn_w, bmak.mn_tout)));
      }
    },
    rotate_right: function(t, a) {
      return t >>> a | t << 32 - a;
    },
    encode_utf8: function(t) {
      return unescape(encodeURIComponent(t));
    },
    
    /*
      Mini SHA 256 function.
      Takes in the string to hash
      Returns the hashed output as a byte array
    */
    mn_s: function(t) {
      var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        e = 1779033703,
        n = 3144134277,
        o = 1013904242,
        m = 2773480762,
        r = 1359893119,
        i = 2600822924,
        c = 528734635,
        b = 1541459225,
        d = bmak.encode_utf8(t),
        s = 8 * d.length;
      d += String.fromCharCode(128);

      for (var k = d.length / 4 + 2, l = Math.ceil(k / 16), u = new Array(l), _ = 0; _ < l; _++) {
        u[_] = new Array(16);

        for (var f = 0; f < 16; f++) u[_][f] = d.charCodeAt(64 * _ + 4 * f) << 24 | d.charCodeAt(64 * _ + 4 * f + 1) << 16 | d.charCodeAt(64 * _ + 4 * f + 2) << 8 | d.charCodeAt(64 * _ + 4 * f + 3) << 0;
      }

      var p = s / Math.pow(2, 32);
      u[l - 1][14] = Math.floor(p), u[l - 1][15] = s;

      for (var v = 0; v < l; v++) {
        for (var h, g = new Array(64), w = e, y = n, E = o, S = m, C = r, h = i, B = c, x = b, _ = 0; _ < 64; _++) {
          var M, j, A, L, P, T;
          _ < 16 ? g[_] = u[v][_] : (M = bmak.rotate_right(g[_ - 15], 7) ^ bmak.rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3, j = bmak.rotate_right(g[_ - 2], 17) ^ bmak.rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10, g[_] = g[_ - 16] + M + g[_ - 7] + j), j = bmak.rotate_right(C, 6) ^ bmak.rotate_right(C, 11) ^ bmak.rotate_right(C, 25), A = C & h ^ ~C & B, L = x + j + A + a[_] + g[_], M = bmak.rotate_right(w, 2) ^ bmak.rotate_right(w, 13) ^ bmak.rotate_right(w, 22), P = w & y ^ w & E ^ y & E, T = M + P, x = B, B = h, h = C, C = S + L >>> 0, S = E, E = y, y = w, w = L + T >>> 0;
        }

        e += w, n += y, o += E, m += S, r += C, i += h, c += B, b += x;
      }

      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, 255 & b];
    },
    // Initializes Akamai Proof of Work challenges
    mn_init: function() {
      var t = 200;
      bmak.pstate && (t = 100), setInterval(bmak.mn_poll, t);
    },
    bdm: function(t, a) {
      for (var e = 0, n = 0; n < t.length; ++n) {
        e = (e << 8 | t[n]) >>> 0, e %= a;
      }

      return e;
    },
    mn_w: function() {
      try {
        for (var t = 0, a = 0, e = 0, n = "", o = bmak.get_cf_date(), m = bmak.mn_cd + bmak.mn_mc_indx; 0 == t;) {
          n = Math.random().toString(16);
          var r = bmak.mn_cc + m.toString() + n,
            i = bmak.mn_s(r);
          if (0 == bmak.bdm(i, m)) t = 1, e = bmak.get_cf_date() - o, bmak.mn_al.push(n), bmak.mn_tcl.push(e), bmak.mn_il.push(a), 0 == bmak.mn_mc_indx && (bmak.mn_lg.push(bmak.mn_abck), bmak.mn_lg.push(bmak.mn_ts), bmak.mn_lg.push(bmak.mn_psn), bmak.mn_lg.push(bmak.mn_cc), bmak.mn_lg.push(bmak.mn_cd.toString()), bmak.mn_lg.push(m.toString()), bmak.mn_lg.push(n), bmak.mn_lg.push(r), bmak.mn_lg.push(i), bmak.mn_lg.push(bmak.mn_rt));
          else if ((a += 1) % 1e3 == 0 && (e = bmak.get_cf_date() - o) > bmak.mn_stout) return bmak.mn_wt += e, void setTimeout(bmak.mn_w, bmak.mn_stout);
        }

        bmak.mn_mc_indx += 1, bmak.mn_mc_indx < bmak.mn_mc_lmt ? setTimeout(bmak.mn_w, e) : (bmak.mn_mc_indx = 0, bmak.mn_lc[bmak.mn_lcl] = bmak.mn_cc, bmak.mn_ld[bmak.mn_lcl] = bmak.mn_cd, bmak.mn_lcl = bmak.mn_lcl + 1, bmak.mn_state = 0, bmak.mn_lg.push(bmak.mn_wt), bmak.mn_lg.push(bmak.get_cf_date()), bmak.mn_r[bmak.mn_abck + bmak.mn_psn] = bmak.mn_pr(), bmak.js_post && (bmak.aj_type = 8, 2 == bmak.mn_ct && (bmak.dcs = 1), bmak.bpd(), bmak.pd(!0)));
      } catch (t) {
        bmak.sd_debug(",mn_w:" + t);
      }
    },
    mn_pr: function() {
      return bmak.mn_al.join(",") + ";" + bmak.mn_tcl.join(",") + ";" + bmak.mn_il.join(",") + ";" + bmak.mn_lg.join(",") + ";";
    },
    
    /*
    This function takes in an array of numbers and converts it to a hex string.
    All instances of this function are called with the result of bmak.mn_s (SHA256) as the parameter

    Example:
      const hashed_abc = bmak.mn_s("abc"); // [186,120,22,191,143,1,207,234,65,65,64,222,93,174,34,35,176,3,97,163,150,23,122,156,180,16,255,97,242,0,21,173]
      const hashed_abc_hex = bmak.ats(hashed_abc); // ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad

    Original Function:
      ats: function(t) {
        for (var a = "", e = 0; e < t.length; e++) a += 2 == t[e].toString(16).length ? t[e].toString(16) : "0" + t[e].toString(16);

        return a;
      }
    */
    ats: function(t) {
      var a = "";
      for (var e = 0; e < t.length; e++) {
        if (t[e].toString(16).length == 2) {
          a += t[e].toString(16);
        } else {
          a += "0" + t[e].toString(16);
        }
      }

      return a;
    },
    calc_fp: function() {
      bmak.fpcf.fpVal(), bmak.js_post && (bmak.aj_type = 9, bmak.bpd(), bmak.pd(!0));
    },
    listFunctions: {
      _setJsPost: function(t) {
        bmak.js_post = t, bmak.js_post && (bmak.enReadDocUrl = 1);
      },
      _setSessionId: function(t) {
        bmak.session_id = t;
      },
      _setJavaScriptKey: function(t) {
        bmak.api_public_key = t;
      },
      _setEnAddHidden: function(t) {
        bmak.enAddHidden = t;
      },
      _setInitTime: function(t) {
        bmak.init_time = t;
      },
      _setApiUrl: function(t) {
        bmak.cf_url = t;
      },
      _setEnGetLoc: function(t) {
        bmak.enGetLoc = t;
      },
      _setEnReadDocUrl: function(t) {
        bmak.enReadDocUrl = t;
      },
      _setDisFpCalOnTimeout: function(t) {
        bmak.disFpCalOnTimeout = t;
      },
      _setCookie: function(t) {
        bmak.ckie = t;
      },
      _setCS: function(t) {
        bmak.cs = (String(t) + bmak.cs).slice(0, 16);
      },
      _setFsp: function(t) {
        bmak.fsp = t, bmak.fsp && (bmak.cf_url = bmak.cf_url.replace(/^http:\/\//i, "https://"));
      },
      _setBm: function(t) {
        bmak.bm = t, bmak.bm ? (bmak.cf_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + "/_bm/_data", bmak.js_post = !0) : bmak.params_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + "/get_params";
      },
      _setAu: function(t) {
        "string" == typeof t && (0 === t.lastIndexOf("/", 0) ? bmak.cf_url = (bmak.fsp ? "https:" : document.location.protocol) + "//" + document.location.hostname + t : bmak.cf_url = t);
      },
      _setSDFieldNames: function() {
        try {
          var t;

          for (t = 0; t < arguments.length; t += 1) bmak.sdfn.push(arguments[t]);
        } catch (t) {
          bmak.sd_debug(",setSDFN:" + t);
        }
      },
      _setUseAltFonts: function(t) {
        bmak.altFonts = t;
      },
      _setPowState: function(t) {
        bmak.pstate = t;
      },
      _setPow: function(t) {
        bmak.pstate = t;
      },
      _setLOAP: function(t) {
        bmak.loap = t;
      }
    },
    applyFunc: function() {
      var t, a, e;

      for (t = 0; t < arguments.length; t += 1) e = arguments[t];

      a = e.shift(), bmak.listFunctions[a] && bmak.listFunctions[a].apply(bmak.listFunctions, e);
    },
    getStateField: function(t) {
      for (var a = "", e = "aeiouy13579", n = 0, o = t.toLowerCase(); n < o.length;) e.indexOf(o[n]) >= 0 || e.indexOf(o[n + 1]) >= 0 ? a += 1 : a += 0, n += 2;

      return a;
    }
  };

if (function(t) {
    var a = {};
    t.fpcf = a, 
    a.sf4 = function() {
      var t = bmak.uar();
      return !(!~t.indexOf("Version/4.0") || !(~t.indexOf("iPad;") || ~t.indexOf("iPhone") || ~t.indexOf("Mac OS X 10_5")));
    }, a.fpValstr = "-1", a.fpValCalculated = !1, a.rVal = "-1", a.rCFP = "-1", a.cache = {}, a.td = -999999, a.clearCache = function() {
      a.cache = {};
    }, a.fpVal = function() {
      a.fpValCalculated = !0;

      try {
        var t = 0;
        t = Date.now ? Date.now() : +new Date();
        var e = a.data();
        a.fpValstr = e.replace(/\"/g, "\\\\\"");
        var n = 0;
        n = Date.now ? Date.now() : +new Date(), a.td = n - t;
      } catch (t) {}
    }, a.timezoneOffsetKey = function() {
      return new Date().getTimezoneOffset();
    }, a.data = function() {
      var t = screen.colorDepth ? screen.colorDepth : -1,
        e = screen.pixelDepth ? screen.pixelDepth : -1,
        n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
        o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
        m = navigator.doNotTrack ? navigator.doNotTrack : -1,
        r = "default";
      r = bmak.runFonts ? bmak.altFonts ? a.fonts_optm() : a.fonts() : "dis";
      return [a.canvas("<@nv45. F1n63r,Pr1n71n6!"), a.canvas("m,Ev!xV67BaU> eh2m<f3AG3@"), r, a.pluginInfo(), a.sessionStorageKey(), a.localStorageKey(), a.indexedDbKey(), a.timezoneOffsetKey(), a.webrtcKey(), t, e, n, o, m].join(";");
    }, a.PLUGINS = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"], a.pluginInfo = function() {
      if (void 0 === navigator.plugins) return null;

      for (var t = a.PLUGINS.length, e = "", n = 0; n < t; n++) {
        var o = a.PLUGINS[n];
        void 0 !== navigator.plugins[o] && (e = e + "," + n);
      }

      return e;
    }, 
    
    /*
      Canvas Fingerprinting
      see: https://browserleaks.com/canvas#how-does-it-work
    */
    a.canvas = function(t) {
      try {
        if (void 0 !== a.cache.canvas) return a.cache.canvas;
        var e = -1;

        if (!a.sf4()) {
          var n = document.createElement("canvas");

          if (n.width = 280, n.height = 60, n.style.display = "none", "function" == typeof n.getContext) {
            var o = n.getContext("2d");
            o.fillStyle = "rgb(102, 204, 0)", o.fillRect(100, 5, 80, 50), o.fillStyle = "#f60", o.font = "16pt Arial", o.fillText(t, 10, 40), o.strokeStyle = "rgb(120, 186, 176)", o.arc(80, 10, 20, 0, Math.PI, !1), o.stroke();
            var m = n.toDataURL();
            e = 0;

            for (var r = 0; r < m.length; r++) {
              e = (e << 5) - e + m.charCodeAt(r), e &= e;
            }

            e = e.toString();
            var i = document.createElement("canvas");
            i.width = 16, i.height = 16;
            var c = i.getContext("2d");
            c.font = "6pt Arial", a.rVal = Math.floor(1e3 * Math.random()).toString(), c.fillText(a.rVal, 1, 12);

            for (var b = i.toDataURL(), d = 0, s = 0; s < b.length; s++) {
              d = (d << 5) - d + b.charCodeAt(s), d &= d;
            }

            a.rCFP = d.toString();
          }
        }

        return e;
      } catch (t) {
        return "exception";
      }
    }, 
    
    a.fonts_optm = function() {
      var t = 200,
        e = bmak.get_cf_date(),
        n = [];

      if (!a.sf4() && document.body) {
        var o = ["sans-serif", "monospace"],
          m = [0, 0],
          r = [0, 0],
          i = document.createElement("div");
        i.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";
        var c;

        for (c = 0; c < o.length; c++) {
          var b = document.createElement("span");
          b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = o[c], i.appendChild(b);
        }

        for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++) b = i.childNodes[c], m[c] = b.offsetWidth, r[c] = b.offsetHeight;

        if (document.body.removeChild(i), bmak.get_cf_date() - e > t) return "";
        var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"],
          s = document.createElement("div");
        s.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";

        for (var k = [], l = 0; l < d.length; l++) {
          var u = document.createElement("div");

          for (c = 0; c < o.length; c++) {
            var b = document.createElement("span");
            b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = d[l] + "," + o[c], u.appendChild(b);
          }

          s.appendChild(u);
        }

        if (bmak.get_cf_date() - e > t) return "";
        document.body.appendChild(s);

        for (var l = 0; l < s.childNodes.length; l++) {
          var _ = !1,
            u = s.childNodes[l];

          for (c = 0; c < u.childNodes.length; c++) {
            var b = u.childNodes[c];

            if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
              _ = !0;
              break;
            }
          }

          if (_ && k.push(l), bmak.get_cf_date() - e > t) break;
        }

        document.body.removeChild(s), n = k.sort();
      }

      return n.join(",");
    },
    
    /*
      Font fingerprinting.

      Render serif, sans-serif, and monospace font
      in a span and collect the offsetWidth and
      offsetHeights.

      Once we gather this information, we can render
      a list of various fonts with serif, sans-serif,
      and monospace as fallbacks.

      If we compare the offsetWidth and offsetHeights
      of these new elements to the ones we collected
      initially we can determine if the user has the
      font installed on their system.
      
      Example from my M1 13 inch Macbook Air:
      
      serif:
        offsetWidth: 1653
        offsetHeight: 105

      sans-serif:
        offsetWidth: 1779
        offsetHeight: 104

      monospace:
        offsetWidth: 2160
        offsetHeight: 104

      If we test a font we already have, lets say Geneva, we would define the CSS as:
      font-family: "Geneva", serif; or 
      font-family: "Geneva", sans-serif; or
      font-family: "Geneva", monospace;
      
      Geneva:
        offsetWidth: 2005
        offsetHeight: 113

      These numbers don't align with any of the fallback values so that means the font exists
      on our machine..

      However, let's try a font we don't have:

      Lobster:
        offsetWidth: 1653
        offsetHeight: 105

      These values match the serif font values which means it fell back because the font doesn't exist.

      If this happens, push the index of the font into an array, sort it, join it by commas and
      that's what this function returns.

      see: https://digitalworks.union.edu/cgi/viewcontent.cgi?article=3374&context=theses
    */
    a.fonts = function() {
      var t = [];

      if (!a.sf4() && document.body) {
        var e = ["serif", "sans-serif", "monospace"];
        var n = [0, 0, 0];
        var o = [0, 0, 0];
        var m = document.createElement("span");
        m.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.";
        m.style.fontSize = "90px";
        var r;

        for (r = 0; r < e.length; r++) {
          m.style.fontFamily = e[r];
          document.body.appendChild(m);
          n[r] = m.offsetWidth;
          o[r] = m.offsetHeight;
          document.body.removeChild(m);
        }

        var i = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"];
        var c = [];
        for (var b = 0; b < i.length; b++) {
          var d = !1;

          for (r = 0; r < e.length; r++)
          m.style.fontFamily = i[b] + "," + e[r];
          document.body.appendChild(m);
          if (m.offsetWidth === n[r] && m.offsetHeight === o[r] || (d = !0), document.body.removeChild(m), d) {
              c.push(b);
              break;
            }
        }

        t = c.sort();
      }

      return t.join(",");
    },
    
    /*
      Check for WebRTC.
      Doesn't exist in IE. Added in Safari 11
    */
    a.webrtcKey = function() {
      return "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection;
    }, a.indexedDbKey = function() {
      return !!a.hasIndexedDB();
    }, a.sessionStorageKey = function() {
      return !!a.hasSessionStorage();
    }, a.localStorageKey = function() {
      return !!a.hasLocalStorage();
    }, a.hasSessionStorage = function() {
      try {
        return !!window.sessionStorage;
      } catch (t) {
        return !1;
      }
    }, a.hasLocalStorage = function() {
      try {
        return !!window.localStorage;
      } catch (t) {
        return !1;
      }
    }, a.hasIndexedDB = function() {
      return !!window.indexedDB;
    };
  }(bmak), bmak.firstLoad) {
  if (bmak.sd_debug("<init/>"), _cf.length > 0) {
    for (var bm_counter = 0; bm_counter < _cf.length; bm_counter++) bmak.applyFunc(_cf[bm_counter]);

    bmak.sd_debug("<setSDFN>" + bmak.sdfn.join() + "</setSDFN>"), _cf = {
      push: bmak.applyFunc
    };
  } else {
    var bm_script;

    if (document.currentScript && (bm_script = document.currentScript), !bm_script) {
      var scripts = document.getElementsByTagName("script");
      scripts.length && (bm_script = scripts[scripts.length - 1]);
    }

    if (bm_script.src) {
      var bm_url = bm_script.src,
        url_split = bm_url.split("/"),
        obfus_state_field;

      if (url_split.length >= 4 && (obfus_state_field = bm_url.split("/").slice(-4)[0]), obfus_state_field && obfus_state_field.length % 2 == 0) {
        var state_field_str = bmak.getStateField(obfus_state_field);
        state_field_str.length >= 3 && (bmak.listFunctions._setFsp("1" == state_field_str[0]), bmak.listFunctions._setBm("1" == state_field_str[1]), bmak.listFunctions._setPowState("1" == state_field_str[2]), bmak.listFunctions._setAu(bm_url));
      }
    }
  }

  try {
    // Initialize and reset some akamai variables
    bmak.ir();
    // Get current time in milliseconds (Date.now) and store it into t_tst as a start timestamp
    bmak.t_tst = bmak.get_cf_date();
    bmak.startTracking();
    bmak.tst = bmak.get_cf_date() - bmak.t_tst;
    bmak.disFpCalOnTimeout || setTimeout(bmak.calc_fp, 500);

    /*
      Run the performance metric function 3 times.

      First run: 400ms after loading
      Second run: 5400ms(~5s) after loading
      Third run: 10400ms(~10s) after loading
    */
    for (var bm_counter = 0; bm_counter < 3; bm_counter++)
      setTimeout(bmak.getmr, 400 + 5e3 * bm_counter);

    // Initializes Akamai Proof of Work challenges
    bmak.mn_init();
  } catch (t) {}
}