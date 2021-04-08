(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("gsap.to('.main-banner__headline--animation', {\n  duration: 3,\n  ease: 'back'\n});\ngsap.from('.main-banner__headline--animation', {\n  opacity: 0,\n  duration: 2,\n  y: -300,\n  ease: 'back'\n});\ngsap.from('.webdev', {\n  opacity: 0,\n  delay: 2.5,\n  duration: 2,\n  ease: 'back'\n});\ngsap.from('.main-banner__headline--contact-btn', {\n  opacity: 0,\n  delay: 3,\n  duration: 2,\n  ease: 'back'\n});\ngsap.from('.nav', {\n  duration: 6,\n  opacity: 0\n});\ngsap.from('.about', {\n  opacity: 0,\n  duration: 1.5,\n  scrollTrigger: {\n    trigger: '.about',\n    start: 'top center'\n  }\n});\ngsap.from('.what-i-do', {\n  scrollTrigger: {\n    trigger: '.what-i-do',\n    start: 'top center',\n    marker: true\n  },\n  duration: 1,\n  opacity: 0,\n  stagger: 0.2,\n  x: -15\n});\ngsap.from('.competencies', {\n  scrollTrigger: {\n    trigger: '.competencies',\n    start: 'top center'\n  },\n  duration: 2,\n  opacity: 0,\n  stagger: 0.2,\n  x: -15\n});\ngsap.from('.experience', {\n  scrollTrigger: {\n    trigger: '.experience',\n    start: 'top center'\n  },\n  duration: 2,\n  opacity: 0,\n  stagger: 0.5\n});\ngsap.from('.fab', {\n  scrollTrigger: {\n    trigger: '.fab',\n    start: 'top center'\n  },\n  duration: 1,\n  opacity: 0,\n  stagger: 0.2,\n  y: -150,\n  ease: 'back'\n});\ngsap.from('.my-projects', {\n  opacity: 0,\n  duration: 1.5,\n  scrollTrigger: {\n    trigger: '.my-projects',\n    start: 'top 70%'\n  }\n}); // Filter Buttons======\n// let htmlEmail = document.getElementById('html-email');\n// let landingPage = document.getElementById('landing-page');\n// let inProgress = document.getElementById('in-progress');\n// let projects = document.querySelector(\n// \t'.my-projects__project-container--project'\n// );\n//Modal=================\n\nlet modalBtn1 = document.getElementById('hbo-btn');\nlet modal1 = document.querySelector('.hbo-modal');\nlet closeBtn1 = document.querySelector('.hbo-close-btn');\n\nmodalBtn1.onclick = function () {\n  modal1.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn1.onclick = function () {\n  modal1.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function () {\n  if (event.target == modal) {\n    modal1.style.display = 'none';\n  }\n};\n\nlet modalBtn2 = document.getElementById('dribbble-btn');\nlet modal2 = document.querySelector('.dribbble-modal');\nlet closeBtn2 = document.querySelector('.dribbble-close-btn');\n\nmodalBtn2.onclick = function () {\n  modal2.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn2.onclick = function () {\n  modal2.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function () {\n  if (event.target == modal) {\n    modal2.style.display = 'none';\n  }\n};\n\nlet modalBtn3 = document.getElementById('bayside-btn');\nlet modal3 = document.querySelector('.bayside-modal');\nlet closeBtn3 = document.querySelector('.bayside-close-btn');\n\nmodalBtn3.onclick = function () {\n  modal3.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn3.onclick = function () {\n  modal3.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function () {\n  if (event.target == modal) {\n    modal3.style.display = 'none';\n  }\n};\n\nlet modalBtn4 = document.getElementById('target-btn');\nlet modal4 = document.querySelector('.target-modal');\nlet closeBtn4 = document.querySelector('.target-close-btn');\n\nmodalBtn4.onclick = function () {\n  modal4.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn4.onclick = function () {\n  modal4.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function () {\n  if (event.target == modal) {\n    modal4.style.display = 'none';\n  }\n};\n\nlet modalBtn5 = document.getElementById('kayak-btn');\nlet modal5 = document.querySelector('.kayak-modal');\nlet closeBtn5 = document.querySelector('.kayak-close-btn');\n\nmodalBtn5.onclick = function () {\n  modal5.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn5.onclick = function () {\n  modal5.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function () {\n  if (event.target == modal) {\n    modal5.style.display = 'none';\n  }\n};\n\nlet modalBtn6 = document.getElementById('kim-btn');\nlet modal6 = document.querySelector('.kim-modal');\nlet closeBtn6 = document.querySelector('.close-btn');\n\nmodalBtn6.onclick = function () {\n  modal6.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn6.onclick = function () {\n  modal6.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function () {\n  if (event.target == modal) {\n    modal6.style.display = 'none';\n  }\n};\n\nlet modalBtn7 = document.getElementById('sushi-btn');\nlet modal7 = document.querySelector('.sushi-modal');\nlet closeBtn7 = document.querySelector('.sushi-close-btn');\n\nmodalBtn7.onclick = function () {\n  modal7.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn7.onclick = function () {\n  modal7.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function (e) {\n  if (event.target == modal) {\n    modal7.style.display = 'none';\n  }\n};\n\nlet modalBtn8 = document.getElementById('medical-btn');\nlet modal8 = document.querySelector('.medical-modal');\nlet closeBtn8 = document.querySelector('.medical-close-btn');\n\nmodalBtn8.onclick = function () {\n  modal8.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn8.onclick = function () {\n  modal8.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function (e) {\n  if (event.target == modal) {\n    modal8.style.display = 'none';\n  }\n};\n\nlet modalBtn9 = document.getElementById('fb-btn');\nlet modal9 = document.querySelector('.fb-modal');\nlet closeBtn9 = document.querySelector('.fb-close-btn');\n\nmodalBtn9.onclick = function () {\n  modal9.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn9.onclick = function () {\n  modal9.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function (e) {\n  if (event.target == modal) {\n    modal9.style.display = 'none';\n  }\n};\n\nlet modalBtn10 = document.getElementById('lol-btn');\nlet modal10 = document.querySelector('.lol-modal');\nlet closeBtn10 = document.querySelector('.lol-close-btn');\n\nmodalBtn10.onclick = function () {\n  modal10.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn10.onclick = function () {\n  modal10.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function (e) {\n  if (event.target == modal) {\n    modal10.style.display = 'none';\n  }\n};\n\nlet modalBtn11 = document.getElementById('verizon-btn');\nlet modal11 = document.querySelector('.verizon-modal');\nlet closeBtn11 = document.querySelector('.verizon-close-btn');\n\nmodalBtn11.onclick = function () {\n  modal11.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn11.onclick = function () {\n  modal11.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function (e) {\n  if (event.target == modal) {\n    modal11.style.display = 'none';\n  }\n};\n\nlet modalBtn12 = document.getElementById('parkmobile-btn');\nlet modal12 = document.querySelector('.parkmobile-modal');\nlet closeBtn12 = document.querySelector('.parkmobile-close-btn');\n\nmodalBtn12.onclick = function () {\n  modal12.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn12.onclick = function () {\n  modal12.style.display = 'none';\n  overlay.classList.remove('active');\n};\n\nwindow.onclick = function (e) {\n  if (event.target == modal) {\n    modal12.style.display = 'none';\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});