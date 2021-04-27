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
    return __webpack_require__(__webpack_require__.s = "./assets/js/components/FirstComp.js");
})({
    "./assets/js/components/FirstComp.js": function(module, exports) {
        eval('// import React, { Component } from \'react\';\n// import ReactDOM from \'react-dom\';\n// class Layout extends Component {\n// \tconstructor() {\n// \t\tsuper();\n// \t\tthis.state = {\n// \t\t\tname: \'Joe\'\n// \t\t};\n// \t}\n// \tclickedBtn = () => {};\n// \tasync test() {}\n// \trender() {\n// \t\treturn (\n// \t\t\t<div className="home">\n// \t\t\t\t<div className="Aligner">\n// \t\t\t\t\t<div className="Aligner-item">\n// \t\t\t\t\t\t<img src="/img/logo.png" alt="codingphase logo" />\n// \t\t\t\t\t\t<h1>Dev-Starter-Kit</h1>\n// \t\t\t\t\t\t<div className="menu">\n// \t\t\t\t\t\t\t<ul>\n// \t\t\t\t\t\t\t\t<li>\n// \t\t\t\t\t\t\t\t\t<a href="http://starterkit.codingphase.com" target="new">\n// \t\t\t\t\t\t\t\t\t\tDocumentation\n// \t\t\t\t\t\t\t\t\t</a>\n// \t\t\t\t\t\t\t\t</li>\n// \t\t\t\t\t\t\t\t<li>\n// \t\t\t\t\t\t\t\t\t<a href="http://www.codingphase.com" target="new">\n// \t\t\t\t\t\t\t\t\t\tCodingPhase.Com\n// \t\t\t\t\t\t\t\t\t</a>\n// \t\t\t\t\t\t\t\t</li>\n// \t\t\t\t\t\t\t</ul>\n// \t\t\t\t\t\t</div>\n// \t\t\t\t\t\t<div className="version-num">version 4.0.0</div>\n// \t\t\t\t\t</div>\n// \t\t\t\t</div>\n// \t\t\t</div>\n// \t\t);\n// \t}\n// }\n// const app = document.getElementById(\'app\');\n// ReactDOM.render(<Layout />, app);\n\n//# sourceURL=webpack:///./assets/js/components/FirstComp.js?');
    }
});