!function(n){function Q(i){if(e[i])return e[i].exports;var F=e[i]={i:i,l:!1,exports:{}};return n[i].call(F.exports,F,F.exports,Q),F.l=!0,F.exports}var e={};Q.m=n,Q.c=e,Q.d=function(n,e,i){Q.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},Q.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return Q.d(e,"a",e),e},Q.o=function(n,Q){return Object.prototype.hasOwnProperty.call(n,Q)},Q.p="",Q(Q.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _app = __webpack_require__(1);\n\nvar _app2 = _interopRequireDefault(_app);\n\nvar _gigiHeadshotCropped = __webpack_require__(2);\n\nvar _gigiHeadshotCropped2 = _interopRequireDefault(_gigiHeadshotCropped);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar headshot = document.getElementById('gigi-headshot');\nheadshot.src = _gigiHeadshotCropped2.default;\n\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  var menu = document.getElementsByClassName('menu-nav-list')[0];\n  var menuBtns = document.querySelectorAll('.menu-button');\n  var menuLinks = document.querySelectorAll('nav li a');\n  var main = document.getElementsByTagName('main')[0];\n\n  // match these media queries as per the variables.scss file\n  var mediumLayoutMin = matchMedia('(min-width: 48rem)');\n\n  var toggleMenu = function toggleMenu() {\n    if (mediumLayoutMin.matches) return;\n    if (menu.classList.contains('visible')) {\n      menu.classList.remove('visible');\n      main.classList.remove('nav-open');\n    } else {\n      menu.classList.add('visible');\n      main.classList.add('nav-open');\n    }\n  };\n\n  mediumLayoutMin.onchange = function () {\n    if (mediumLayoutMin.matches) {\n      menu.classList.remove('visible');\n      main.classList.remove('nav-open');\n    }\n  };\n\n  main.addEventListener('click', function () {\n    menu.classList.remove('visible');\n    main.classList.remove('nav-open');\n  });\n\n  var setUpMenuToggle = function setUpMenuToggle() {\n    return [].forEach.call(menuBtns, function (btn) {\n      return btn.addEventListener('click', toggleMenu);\n    });\n  };\n  var setUpNavLinks = function setUpNavLinks() {\n    return [].forEach.call(menuLinks, function (link) {\n      return link.addEventListener('click', toggleMenu);\n    });\n  };\n\n  setUpMenuToggle();\n  setUpNavLinks();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJoZWFkc2hvdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJtZW51IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1lbnVCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lbnVMaW5rcyIsIm1haW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIm1lZGl1bUxheW91dE1pbiIsIm1hdGNoTWVkaWEiLCJ0b2dnbGVNZW51IiwibWF0Y2hlcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwib25jaGFuZ2UiLCJzZXRVcE1lbnVUb2dnbGUiLCJmb3JFYWNoIiwiY2FsbCIsImJ0biIsInNldFVwTmF2TGlua3MiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFNBQVNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBakI7QUFDQUYsU0FBU0csR0FBVDs7QUFFQUYsU0FBU0csZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQUNDLEtBQUQsRUFBVztBQUN2RCxNQUFNQyxPQUFPTCxTQUFTTSxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRCxDQUFqRCxDQUFiO0FBQ0EsTUFBTUMsV0FBV1AsU0FBU1EsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBakI7QUFDQSxNQUFNQyxZQUFZVCxTQUFTUSxnQkFBVCxDQUEwQixVQUExQixDQUFsQjtBQUNBLE1BQU1FLE9BQU9WLFNBQVNXLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWI7O0FBRUE7QUFDQSxNQUFNQyxrQkFBa0JDLFdBQVcsb0JBQVgsQ0FBeEI7O0FBR0EsTUFBTUMsYUFBYSxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSUYsZ0JBQWdCRyxPQUFwQixFQUE2QjtBQUM3QixRQUFJVixLQUFLVyxTQUFMLENBQWVDLFFBQWYsQ0FBd0IsU0FBeEIsQ0FBSixFQUF3QztBQUN0Q1osV0FBS1csU0FBTCxDQUFlRSxNQUFmLENBQXNCLFNBQXRCO0FBQ0FSLFdBQUtNLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixVQUF0QjtBQUNELEtBSEQsTUFHTztBQUNMYixXQUFLVyxTQUFMLENBQWVHLEdBQWYsQ0FBbUIsU0FBbkI7QUFDQVQsV0FBS00sU0FBTCxDQUFlRyxHQUFmLENBQW1CLFVBQW5CO0FBQ0Q7QUFDRixHQVREOztBQVdBUCxrQkFBZ0JRLFFBQWhCLEdBQTJCLFlBQU07QUFDL0IsUUFBSVIsZ0JBQWdCRyxPQUFwQixFQUE2QjtBQUMzQlYsV0FBS1csU0FBTCxDQUFlRSxNQUFmLENBQXNCLFNBQXRCO0FBQ0FSLFdBQUtNLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixVQUF0QjtBQUNEO0FBQ0YsR0FMRDs7QUFPRlIsT0FBS1AsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNuQ0UsU0FBS1csU0FBTCxDQUFlRSxNQUFmLENBQXNCLFNBQXRCO0FBQ0FSLFNBQUtNLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixVQUF0QjtBQUNELEdBSEQ7O0FBS0EsTUFBTUcsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFdBQU0sR0FBR0MsT0FBSCxDQUFXQyxJQUFYLENBQWdCaEIsUUFBaEIsRUFBMEI7QUFBQSxhQUFPaUIsSUFBSXJCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCVyxVQUE5QixDQUFQO0FBQUEsS0FBMUIsQ0FBTjtBQUFBLEdBQXhCO0FBQ0EsTUFBTVcsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLFdBQU0sR0FBR0gsT0FBSCxDQUFXQyxJQUFYLENBQWdCZCxTQUFoQixFQUEyQjtBQUFBLGFBQVFpQixLQUFLdkIsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0JXLFVBQS9CLENBQVI7QUFBQSxLQUEzQixDQUFOO0FBQUEsR0FBdEI7O0FBR0FPO0FBQ0FJO0FBQ0MsQ0F2Q0QiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3JjL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0IGhlYWRzaG90U3JjIGZyb20gJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2dpZ2ktaGVhZHNob3QtY3JvcHBlZC5qcGcnO1xuXG5jb25zdCBoZWFkc2hvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaWdpLWhlYWRzaG90Jyk7XG5oZWFkc2hvdC5zcmMgPSBoZWFkc2hvdFNyYztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChldmVudCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudS1uYXYtbGlzdCcpWzBdO1xuICBjb25zdCBtZW51QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWJ1dHRvbicpO1xuICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgbGkgYScpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVswXTtcblxuICAvLyBtYXRjaCB0aGVzZSBtZWRpYSBxdWVyaWVzIGFzIHBlciB0aGUgdmFyaWFibGVzLnNjc3MgZmlsZVxuICBjb25zdCBtZWRpdW1MYXlvdXRNaW4gPSBtYXRjaE1lZGlhKCcobWluLXdpZHRoOiA0OHJlbSknKTtcblxuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgaWYgKG1lZGl1bUxheW91dE1pbi5tYXRjaGVzKSByZXR1cm47XG4gICAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXNpYmxlJykpIHtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbmF2LW9wZW4nKTtcbiAgICB9IFxuICB9O1xuXG4gIG1lZGl1bUxheW91dE1pbi5vbmNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAobWVkaXVtTGF5b3V0TWluLm1hdGNoZXMpIHtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtb3BlbicpO1xuICAgIH1cbiAgfTtcblxubWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbmF2LW9wZW4nKTtcbn0pO1xuXG5jb25zdCBzZXRVcE1lbnVUb2dnbGUgPSAoKSA9PiBbXS5mb3JFYWNoLmNhbGwobWVudUJ0bnMsIGJ0biA9PiBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51KSk7XG5jb25zdCBzZXRVcE5hdkxpbmtzID0gKCkgPT4gW10uZm9yRWFjaC5jYWxsKG1lbnVMaW5rcywgbGluayA9PiBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSkpO1xuXG5cbnNldFVwTWVudVRvZ2dsZSgpO1xuc2V0VXBOYXZMaW5rcygpO1xufSk7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,exports){eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84NDQ4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n")},function(module,exports,__webpack_require__){eval('module.exports = {srcSet:__webpack_require__.p + "4d494301a1a11a3e3fa1ed8c3128c509-455.jpg 455w",images:[{path:__webpack_require__.p + "4d494301a1a11a3e3fa1ed8c3128c509-455.jpg",width:455,height:455}],src:__webpack_require__.p + "4d494301a1a11a3e3fa1ed8c3128c509-455.jpg",toString:function(){return __webpack_require__.p + "4d494301a1a11a3e3fa1ed8c3128c509-455.jpg"},placeholder: undefined,width:455,height:455};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9naWdpLWhlYWRzaG90LWNyb3BwZWQuanBnPzlhMWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCLHdGQUEwRiw2RkFBK0YsNkZBQStGLDBFQUE0RSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7c3JjU2V0Ol9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZDQ5NDMwMWExYTExYTNlM2ZhMWVkOGMzMTI4YzUwOS00NTUuanBnIDQ1NXdcIixpbWFnZXM6W3twYXRoOl9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0ZDQ5NDMwMWExYTExYTNlM2ZhMWVkOGMzMTI4YzUwOS00NTUuanBnXCIsd2lkdGg6NDU1LGhlaWdodDo0NTV9XSxzcmM6X193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRkNDk0MzAxYTFhMTFhM2UzZmExZWQ4YzMxMjhjNTA5LTQ1NS5qcGdcIix0b1N0cmluZzpmdW5jdGlvbigpe3JldHVybiBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGQ0OTQzMDFhMWExMWEzZTNmYTFlZDhjMzEyOGM1MDktNDU1LmpwZ1wifSxwbGFjZWhvbGRlcjogdW5kZWZpbmVkLHdpZHRoOjQ1NSxoZWlnaHQ6NDU1fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hc3NldHMvaW1hZ2VzL2dpZ2ktaGVhZHNob3QtY3JvcHBlZC5qcGdcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n')}]);