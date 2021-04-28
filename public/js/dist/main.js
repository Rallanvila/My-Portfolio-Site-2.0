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
        eval("gsap.to('.main-banner__headline--animation', {\n  duration: 3,\n  ease: 'back'\n});\ngsap.from('.main-banner__headline--animation', {\n  opacity: 0,\n  duration: 2,\n  y: -300,\n  ease: 'back'\n});\ngsap.from('.webdev', {\n  opacity: 0,\n  delay: 2.5,\n  duration: 2,\n  ease: 'back'\n});\ngsap.from('.main-banner__headline--contact-btn', {\n  opacity: 0,\n  delay: 3,\n  duration: 2,\n  ease: 'back'\n});\ngsap.from('nav', {\n  duration: 3,\n  opacity: 0\n});\ngsap.from('.about', {\n  opacity: 0,\n  duration: 1.5,\n  scrollTrigger: {\n    trigger: '.about',\n    start: 'top center'\n  }\n});\ngsap.from('.what-i-do', {\n  scrollTrigger: {\n    trigger: '.what-i-do',\n    start: 'top center',\n    marker: true\n  },\n  duration: 1,\n  opacity: 0,\n  stagger: 0.2,\n  x: -15\n});\ngsap.from('.experience', {\n  scrollTrigger: {\n    trigger: '.experience',\n    start: 'top center'\n  },\n  duration: 2,\n  opacity: 0,\n  stagger: 0.5\n});\ngsap.from('.fab', {\n  scrollTrigger: {\n    trigger: '.fab',\n    start: 'top center'\n  },\n  duration: 1,\n  opacity: 0,\n  stagger: 0.2,\n  y: -150,\n  ease: 'back'\n});\ngsap.from('.my-projects', {\n  opacity: 0,\n  duration: 1.5,\n  scrollTrigger: {\n    trigger: '.my-projects',\n    start: 'top 70%'\n  }\n}); //Modal=================\n\nlet modalBtn1 = document.getElementById('hbo-btn');\nlet modal1 = document.querySelector('.hbo-modal');\nlet closeBtn1 = document.querySelector('.hbo-close-btn');\n\nmodalBtn1.onclick = function () {\n  modal1.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn1.onclick = function () {\n  modal1.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function() {\n// \tif (event.target == modal) {\n// \t\tmodal1.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn2 = document.getElementById('dribbble-btn');\nlet modal2 = document.querySelector('.dribbble-modal');\nlet closeBtn2 = document.querySelector('.dribbble-close-btn');\n\nmodalBtn2.onclick = function () {\n  modal2.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn2.onclick = function () {\n  modal2.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function() {\n// \tif (event.target == modal) {\n// \t\tmodal2.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn3 = document.getElementById('bayside-btn');\nlet modal3 = document.querySelector('.bayside-modal');\nlet closeBtn3 = document.querySelector('.bayside-close-btn');\n\nmodalBtn3.onclick = function () {\n  modal3.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn3.onclick = function () {\n  modal3.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function() {\n// \tif (event.target == modal) {\n// \t\tmodal3.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn4 = document.getElementById('target-btn');\nlet modal4 = document.querySelector('.target-modal');\nlet closeBtn4 = document.querySelector('.target-close-btn');\n\nmodalBtn4.onclick = function () {\n  modal4.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn4.onclick = function () {\n  modal4.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function() {\n// \tif (event.target == modal) {\n// \t\tmodal4.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn5 = document.getElementById('kayak-btn');\nlet modal5 = document.querySelector('.kayak-modal');\nlet closeBtn5 = document.querySelector('.kayak-close-btn');\n\nmodalBtn5.onclick = function () {\n  modal5.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn5.onclick = function () {\n  modal5.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function() {\n// \tif (event.target == modal) {\n// \t\tmodal5.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn6 = document.getElementById('kim-btn');\nlet modal6 = document.querySelector('.kim-modal');\nlet closeBtn6 = document.querySelector('.close-btn');\n\nmodalBtn6.onclick = function () {\n  modal6.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn6.onclick = function () {\n  modal6.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function() {\n// \tif (event.target == modal) {\n// \t\tmodal6.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn7 = document.getElementById('sushi-btn');\nlet modal7 = document.querySelector('.sushi-modal');\nlet closeBtn7 = document.querySelector('.sushi-close-btn');\n\nmodalBtn7.onclick = function () {\n  modal7.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn7.onclick = function () {\n  modal7.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal7.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn8 = document.getElementById('medical-btn');\nlet modal8 = document.querySelector('.medical-modal');\nlet closeBtn8 = document.querySelector('.medical-close-btn');\n\nmodalBtn8.onclick = function () {\n  modal8.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn8.onclick = function () {\n  modal8.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal8.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn9 = document.getElementById('fb-btn');\nlet modal9 = document.querySelector('.fb-modal');\nlet closeBtn9 = document.querySelector('.fb-close-btn');\n\nmodalBtn9.onclick = function () {\n  modal9.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn9.onclick = function () {\n  modal9.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal9.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn10 = document.getElementById('lol-btn');\nlet modal10 = document.querySelector('.lol-modal');\nlet closeBtn10 = document.querySelector('.lol-close-btn');\n\nmodalBtn10.onclick = function () {\n  modal10.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn10.onclick = function () {\n  modal10.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal10.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn11 = document.getElementById('verizon-btn');\nlet modal11 = document.querySelector('.verizon-modal');\nlet closeBtn11 = document.querySelector('.verizon-close-btn');\n\nmodalBtn11.onclick = function () {\n  modal11.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn11.onclick = function () {\n  modal11.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal11.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn12 = document.getElementById('parkmobile-btn');\nlet modal12 = document.querySelector('.parkmobile-modal');\nlet closeBtn12 = document.querySelector('.parkmobile-close-btn');\n\nmodalBtn12.onclick = function () {\n  modal12.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn12.onclick = function () {\n  modal12.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal12.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn13 = document.getElementById('auto-btn');\nlet modal13 = document.querySelector('.auto-modal');\nlet closeBtn13 = document.querySelector('.auto-close-btn');\n\nmodalBtn13.onclick = function () {\n  modal13.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn13.onclick = function () {\n  modal13.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal12.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn14 = document.getElementById('mtg-btn');\nlet modal14 = document.querySelector('.mtg-modal');\nlet closeBtn14 = document.querySelector('.mtg-close-btn');\n\nmodalBtn14.onclick = function () {\n  modal14.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn14.onclick = function () {\n  modal14.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal12.style.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn15 = document.getElementById('splash-btn');\nlet modal15 = document.querySelector('.splash-modal');\nlet closeBtn15 = document.querySelector('.splash-close-btn');\n\nmodalBtn15.onclick = function () {\n  modal15.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn15.onclick = function () {\n  modal15.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal12.stsplashyle.display = 'none';\n// \t}\n// };\n\n\nlet modalBtn16 = document.getElementById('gsap-btn');\nlet modal16 = document.querySelector('.gsap-modal');\nlet closeBtn16 = document.querySelector('.gsap-close-btn');\n\nmodalBtn16.onclick = function () {\n  modal16.style.display = 'block';\n  overlay.classList.add('active');\n};\n\ncloseBtn16.onclick = function () {\n  modal16.style.display = 'none';\n  overlay.classList.remove('active');\n}; // window.onclick = function(e) {\n// \tif (event.target == modal) {\n// \t\tmodal12.stsplashyle.display = 'none';\n// \t}\n// };\n//Email Capture========================\n\n\nwindow.onload = function () {\n  //VARIABLES=====\n  let emailState = false;\n  let emailModal = document.getElementsByClassName('email-modal')[0];\n  let overlay = document.getElementsByClassName('overlay')[0];\n  let emailCloseBtn = document.getElementsByClassName('email-modal__close-btn')[0];\n  let emailError = document.getElementsByClassName('email-error')[0];\n  let emailFormGroup = document.getElementsByClassName('email-modal__form-group')[0];\n  let emailInput = document.getElementsByClassName('email-modal__form-group--email')[0];\n  let emailSubmit = document.getElementsByClassName('email-modal__form-group--submit')[0];\n  let showThankYou = document.getElementsByClassName('thank-you')[0];\n  let decline = document.getElementsByClassName('decline')[0]; //FUNCTIONS=====\n\n  let emailIsValid = email => {\n    return /\\S+@\\S+\\.\\S+/.test(email);\n  };\n\n  let showModal = () => {\n    document.body.addEventListener('mouseleave', () => {\n      if (emailState == false) {\n        emailModal.classList.add('active');\n        overlay.classList.add('active');\n        emailState = true;\n      }\n    });\n  };\n\n  let closeModal = () => {\n    emailModal.classList.remove('active');\n    overlay.classList.remove('active');\n  };\n\n  let removeErrors = () => {\n    emailError.classList.remove('active');\n    emailFormGroup.classList.remove('active');\n  };\n\n  let errors = () => {\n    emailError.classList.add('active');\n    emailFormGroup.classList.add('active');\n  };\n\n  let success = () => {\n    showThankYou.classList.add('active');\n    setTimeout(() => {\n      closeModal();\n    }, 3000);\n  }; //EVENT LISTENERS====\n\n\n  decline.addEventListener('click', () => {\n    closeModal();\n  });\n  emailInput.addEventListener('click', () => {\n    removeErrors();\n  });\n  showModal();\n  emailSubmit.addEventListener('click', () => {\n    if (emailIsValid(emailInput.value)) {\n      success();\n    } else {\n      errors();\n    }\n  });\n}; //Filter Projects===================\n\n\nfilterSelection('all');\n\nfunction filterSelection(c) {\n  var x, i;\n  x = document.getElementsByClassName('my-projects__project-container--project');\n  if (c == 'all') c = ''; // Add the \"show\" class (display:block) to the filtered elements, and remove the \"show\" class from the elements that are not selected\n\n  for (i = 0; i < x.length; i++) {\n    RemoveClass(x[i], 'show');\n    if (x[i].className.indexOf(c) > -1) AddClass(x[i], 'show');\n  }\n} // Show filtered elements\n\n\nfunction AddClass(element, name) {\n  var i, arr1, arr2;\n  arr1 = element.className.split(' ');\n  arr2 = name.split(' ');\n\n  for (i = 0; i < arr2.length; i++) {\n    if (arr1.indexOf(arr2[i]) == -1) {\n      element.className += ' ' + arr2[i];\n    }\n  }\n} // Hide elements that are not selected\n\n\nfunction RemoveClass(element, name) {\n  var i, arr1, arr2;\n  arr1 = element.className.split(' ');\n  arr2 = name.split(' ');\n\n  for (i = 0; i < arr2.length; i++) {\n    while (arr1.indexOf(arr2[i]) > -1) {\n      arr1.splice(arr1.indexOf(arr2[i]), 1);\n    }\n  }\n\n  element.className = arr1.join(' ');\n} // Add active class to the current control button (highlight it)\n\n\nvar btnContainer = document.getElementById('my-projects-filter');\nvar btns = btnContainer.getElementsByClassName('filter-btn');\n\nfor (var i = 0; i < btns.length; i++) {\n  btns[i].addEventListener('click', function () {\n    var current = document.getElementsByClassName('active');\n    current[0].className = current[0].className.replace(' active', '');\n    this.className += ' active';\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});