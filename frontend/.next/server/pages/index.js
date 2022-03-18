/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"postsWrapper\": \"Home_postsWrapper__Jkf8t\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctZnJvbnRlbmQvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwicG9zdHNXcmFwcGVyXCI6IFwiSG9tZV9wb3N0c1dyYXBwZXJfX0prZjh0XCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./db/apollo.js":
/*!**********************!*\
  !*** ./db/apollo.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apollo\": () => (/* binding */ apollo)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apollo = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: \"http://localhost:1337/graphql\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYi9hcG9sbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTREO0FBRXJELEtBQUssQ0FBQ0UsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Ysd0RBQVksQ0FBQyxDQUFDO0lBQ3RDRyxHQUFHLEVBQUUsQ0FBK0I7SUFDcENDLEtBQUssRUFBRSxHQUFHLENBQUNILHlEQUFhO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWZyb250ZW5kLy4vZGIvYXBvbGxvLmpzPzNhOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXBvbGxvID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9ncmFwaHFsXCIsXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsImFwb2xsbyIsInVyaSIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./db/apollo.js\n");

/***/ }),

/***/ "./graphql/queries.js":
/*!****************************!*\
  !*** ./graphql/queries.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_ALL_POSTS\": () => (/* binding */ GET_ALL_POSTS)\n/* harmony export */ });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_ALL_POSTS = (graphql_tag__WEBPACK_IMPORTED_MODULE_0___default())`\n  query {\n    articles {\n      data {\n        id\n        attributes {\n          title\n          content\n          description\n          createdAt\n          updatedAt\n          publishedAt\n          image {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          slug\n          category {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          author {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL3F1ZXJpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBRXRCLEtBQUssQ0FBQ0MsYUFBYSxHQUFHRCxvREFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLWZyb250ZW5kLy4vZ3JhcGhxbC9xdWVyaWVzLmpzPzYyYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX1BPU1RTID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGFydGljbGVzIHtcclxuICAgICAgZGF0YSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBhdHRyaWJ1dGVzIHtcclxuICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICB1cGRhdGVkQXRcclxuICAgICAgICAgIHB1Ymxpc2hlZEF0XHJcbiAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICBjYXRlZ29yeSB7XHJcbiAgICAgICAgICAgIGRhdGEge1xyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXV0aG9yIHtcclxuICAgICAgICAgICAgZGF0YSB7XHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwibmFtZXMiOlsiZ3FsIiwiR0VUX0FMTF9QT1NUUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./graphql/queries.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/apollo */ \"./db/apollo.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home({ posts  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Welcome to the blog app with strapi-graphql and nextjs\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\carol\\\\Downloads\\\\blog-frontend\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\carol\\\\Downloads\\\\blog-frontend\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\carol\\\\Downloads\\\\blog-frontend\\\\pages\\\\index.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\carol\\\\Downloads\\\\blog-frontend\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().postsWrapper),\n                    children: posts && Array.isArray(posts.data) && posts.data.map((post)=>{\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: post.attributes.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\carol\\\\Downloads\\\\blog-frontend\\\\pages\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 19\n                            }, this)\n                        }, post.id, false, {\n                            fileName: \"C:\\\\Users\\\\carol\\\\Downloads\\\\blog-frontend\\\\pages\\\\index.js\",\n                            lineNumber: 21,\n                            columnNumber: 17\n                        }, this));\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\carol\\\\Downloads\\\\blog-frontend\\\\pages\\\\index.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\carol\\\\Downloads\\\\blog-frontend\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\carol\\\\Downloads\\\\blog-frontend\\\\pages\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n};\nasync function getStaticProps(context) {\n    const { data  } = await _db_apollo__WEBPACK_IMPORTED_MODULE_2__.apollo.query({\n        query: _graphql_queries__WEBPACK_IMPORTED_MODULE_3__.GET_ALL_POSTS\n    });\n    return {\n        props: {\n            posts: data.articles\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNTO0FBQ2E7QUFDSjtBQUUvQixRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN2QyxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBRUosMEVBQWdCOzt3RkFDN0JILGtEQUFJOztnR0FDRlMsQ0FBSztrQ0FBQyxDQUFzRDs7Ozs7O2dHQUM1REMsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQWE7d0JBQUNDLE9BQU8sRUFBQyxDQUE4Qjs7Ozs7O2dHQUM5REMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjOzs7Ozs7Ozs7Ozs7d0ZBR3JDQyxDQUFJO2dCQUFDVCxTQUFTLEVBQUVKLHFFQUFXO3NHQUN6QkcsQ0FBRztvQkFBQ0MsU0FBUyxFQUFFSiw2RUFBbUI7OEJBQ2hDRSxLQUFLLElBQ0phLEtBQUssQ0FBQ0MsT0FBTyxDQUFDZCxLQUFLLENBQUNlLElBQUksS0FDeEJmLEtBQUssQ0FBQ2UsSUFBSSxDQUFDQyxHQUFHLEVBQUVDLElBQUksR0FBSyxDQUFDO3dCQUN4QixNQUFNLDZFQUNIaEIsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFFSixxRUFBVztrSEFDeEJxQixDQUFDOzBDQUFFRixJQUFJLENBQUNHLFVBQVUsQ0FBQ2hCLEtBQUs7Ozs7OzsyQkFET2EsSUFBSSxDQUFDSSxFQUFFOzs7OztvQkFJN0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYixDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUM3QyxLQUFLLENBQUMsQ0FBQyxDQUFDUixJQUFJLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ25CLG9EQUFZLENBQUMsQ0FBQztRQUNuQzRCLEtBQUssRUFBRTNCLDJEQUFhO0lBQ3RCLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQztRQUNONEIsS0FBSyxFQUFFLENBQUM7WUFDTnpCLEtBQUssRUFBRWUsSUFBSSxDQUFDVyxRQUFRO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2ctZnJvbnRlbmQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGFwb2xsbyB9IGZyb20gXCIuLi9kYi9hcG9sbG9cIjtcbmltcG9ydCB7IEdFVF9BTExfUE9TVFMgfSBmcm9tIFwiLi4vZ3JhcGhxbC9xdWVyaWVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XZWxjb21lIHRvIHRoZSBibG9nIGFwcCB3aXRoIHN0cmFwaS1ncmFwaHFsIGFuZCBuZXh0anM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdHNXcmFwcGVyfT5cbiAgICAgICAgICB7cG9zdHMgJiZcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkocG9zdHMuZGF0YSkgJiZcbiAgICAgICAgICAgIHBvc3RzLmRhdGEubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuYXR0cmlidXRlcy50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBvbGxvLnF1ZXJ5KHtcbiAgICBxdWVyeTogR0VUX0FMTF9QT1NUUyxcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBkYXRhLmFydGljbGVzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsImFwb2xsbyIsIkdFVF9BTExfUE9TVFMiLCJzdHlsZXMiLCJIb21lIiwicG9zdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsInBvc3RzV3JhcHBlciIsIkFycmF5IiwiaXNBcnJheSIsImRhdGEiLCJtYXAiLCJwb3N0IiwiY2FyZCIsInAiLCJhdHRyaWJ1dGVzIiwiaWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsInByb3BzIiwiYXJ0aWNsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();