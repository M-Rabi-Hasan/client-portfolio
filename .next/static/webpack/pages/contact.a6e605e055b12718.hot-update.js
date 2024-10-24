"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./src/pages/contact.jsx":
/*!*******************************!*\
  !*** ./src/pages/contact.jsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.jsx\");\n// src/pages/contact.jsx\n\nvar _s = $RefreshSig$();\n\n\n\nconst Contact = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: '',\n        email: '',\n        message: ''\n    });\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('/api/contact', formData);\n            alert('Message sent successfully!');\n            setFormData({\n                name: '',\n                email: '',\n                message: ''\n            });\n        } catch (error) {\n            alert('There was an error sending your message.');\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-hidden text-neutral-300 antialiased   selection:bg-cyan-300 selection:text-cyan-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 -z-10 h-full w-full \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 z-[-2] h-screen w-screen bg-neutral-950   bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),   rgba(255,255,255,0))]\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-12 py-20 md:flex md:justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-bold mb-4\",\n                                children: [\n                                    \"Contact\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"px-2 text-blue-500\",\n                                        children: \"Us\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-slate-300\",\n                                children: \"For questions, technical assistance, or collaboration opportunities via the contact information provided.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mt-4 text-slate-300\",\n                                children: \"+ 123-456-7890\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mt-1 text-slate-300\",\n                                children: \"hello@reallygreatsite.com \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"mt-1 text-slate-300\",\n                                children: \"123 Anywhere St.,Any City, ST 12345\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:mr-40\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium mt-8\",\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"name\",\n                                            value: formData.name,\n                                            onChange: handleChange,\n                                            required: true,\n                                            className: \"w-full px-12 py-3 border border-gray-300 rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            value: formData.email,\n                                            onChange: handleChange,\n                                            required: true,\n                                            className: \"w-full px-12 py-3 border border-gray-300 rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: \"Message\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            name: \"message\",\n                                            value: formData.message,\n                                            onChange: handleChange,\n                                            required: true,\n                                            className: \"w-full px-12 py-10 border border-gray-300 rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: isSubmitting,\n                                    className: \"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700\",\n                                    children: isSubmitting ? 'Sending...' : 'Send Message'\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"G15wqdHt+MsoAKwVxqNVUTniAuk=\");\n_c = Contact;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGFjdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUF3Qjs7O0FBQ1M7QUFDUDtBQUNnQjtBQUUxQyxNQUFNRyxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFFTSxNQUFNO1FBQUlDLE9BQU87UUFBSUMsU0FBUztJQUFHO0lBQzVFLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1XLGVBQWUsQ0FBQ0M7UUFDcEJQLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ1EsRUFBRUMsTUFBTSxDQUFDUCxJQUFJLENBQUMsRUFBRU0sRUFBRUMsTUFBTSxDQUFDQyxLQUFLO1FBQUM7SUFDN0Q7SUFFQSxNQUFNQyxlQUFlLE9BQU9IO1FBQzFCQSxFQUFFSSxjQUFjO1FBQ2hCTixnQkFBZ0I7UUFFaEIsSUFBSTtZQUNGLE1BQU1ULGtEQUFVLENBQUMsZ0JBQWdCRztZQUNqQ2MsTUFBTTtZQUNOYixZQUFZO2dCQUFFQyxNQUFNO2dCQUFJQyxPQUFPO2dCQUFJQyxTQUFTO1lBQUc7UUFDakQsRUFBRSxPQUFPVyxPQUFPO1lBQ2RELE1BQU07UUFDUixTQUFVO1lBQ1JSLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUdYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OzBCQU1qQiw4REFBQ0Q7MEJBQ0QsNEVBQUNsQiwwREFBTUE7Ozs7Ozs7Ozs7MEJBRVgsOERBQUNrQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7O29DQUEwQjtrREFDdEMsOERBQUNFO3dDQUFLRixXQUFVO2tEQUFxQjs7Ozs7Ozs7Ozs7OzBDQUV2Qyw4REFBQ0c7Z0NBQUVILFdBQVU7MENBQWlCOzs7Ozs7MENBQzlCLDhEQUFDSTtnQ0FBR0osV0FBVTswQ0FBc0I7Ozs7OzswQ0FDcEMsOERBQUNLO2dDQUFHTCxXQUFVOzBDQUFzQjs7Ozs7OzBDQUNwQyw4REFBQ007Z0NBQUdOLFdBQVU7MENBQXNCOzs7Ozs7Ozs7Ozs7a0NBRXRDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ087NEJBQUtDLFVBQVVkOzRCQUFjTSxXQUFVOzs4Q0FDdEMsOERBQUNEOztzREFDQyw4REFBQ1U7NENBQU1ULFdBQVU7c0RBQWlDOzs7Ozs7c0RBQ2xELDhEQUFDVTs0Q0FDQ0MsTUFBSzs0Q0FDTDFCLE1BQUs7NENBQ0xRLE9BQU9WLFNBQVNFLElBQUk7NENBQ3BCMkIsVUFBVXRCOzRDQUNWdUIsUUFBUTs0Q0FDUmIsV0FBVTs7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDRDs7c0RBQ0MsOERBQUNVOzRDQUFNVCxXQUFVO3NEQUE0Qjs7Ozs7O3NEQUM3Qyw4REFBQ1U7NENBQ0NDLE1BQUs7NENBQ0wxQixNQUFLOzRDQUNMUSxPQUFPVixTQUFTRyxLQUFLOzRDQUNyQjBCLFVBQVV0Qjs0Q0FDVnVCLFFBQVE7NENBQ1JiLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FHZCw4REFBQ0Q7O3NEQUNDLDhEQUFDVTs0Q0FBTVQsV0FBVTtzREFBNEI7Ozs7OztzREFDN0MsOERBQUNjOzRDQUNDN0IsTUFBSzs0Q0FDTFEsT0FBT1YsU0FBU0ksT0FBTzs0Q0FDdkJ5QixVQUFVdEI7NENBQ1Z1QixRQUFROzRDQUNSYixXQUFVOzs7Ozs7Ozs7Ozs7OENBR2QsOERBQUNlO29DQUNDSixNQUFLO29DQUNMSyxVQUFVNUI7b0NBQ1ZZLFdBQVU7OENBRVRaLGVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPekM7R0E5Rk1OO0tBQUFBO0FBZ0dOLGlFQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb250YWN0LmpzeD9iY2RjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlcy9jb250YWN0LmpzeFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcic7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoeyBuYW1lOiAnJywgZW1haWw6ICcnLCBtZXNzYWdlOiAnJyB9KTtcclxuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvY29udGFjdCcsIGZvcm1EYXRhKTtcclxuICAgICAgYWxlcnQoJ01lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIHNldEZvcm1EYXRhKHsgbmFtZTogJycsIGVtYWlsOiAnJywgbWVzc2FnZTogJycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIHNlbmRpbmcgeW91ciBtZXNzYWdlLicpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWhpZGRlbiB0ZXh0LW5ldXRyYWwtMzAwIGFudGlhbGlhc2VkXHJcbiAgICAgc2VsZWN0aW9uOmJnLWN5YW4tMzAwIHNlbGVjdGlvbjp0ZXh0LWN5YW4tOTAwXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgLXotMTAgaC1mdWxsIHctZnVsbCBcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCB6LVstMl0gaC1zY3JlZW4gdy1zY3JlZW4gYmctbmV1dHJhbC05NTBcclxuICAgICAgICAgIGJnLVtyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZV84MCVfODAlX2F0XzUwJV8tMjAlLHJnYmEoMTIwLDExOSwxOTgsMC4zKSxcclxuICAgICAgICAgIHJnYmEoMjU1LDI1NSwyNTUsMCkpXVwiPiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTEyIHB5LTIwIG1kOmZsZXggbWQ6anVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1tZCc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBtYi00XCI+Q29udGFjdFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdweC0yIHRleHQtYmx1ZS01MDAnPlVzPC9zcGFuPlxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNsYXRlLTMwMCc+Rm9yIHF1ZXN0aW9ucywgdGVjaG5pY2FsIGFzc2lzdGFuY2UsIG9yIGNvbGxhYm9yYXRpb24gb3Bwb3J0dW5pdGllcyB2aWEgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gcHJvdmlkZWQuPC9wPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J210LTQgdGV4dC1zbGF0ZS0zMDAnPisgMTIzLTQ1Ni03ODkwPC9oMj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdtdC0xIHRleHQtc2xhdGUtMzAwJz5oZWxsb0ByZWFsbHlncmVhdHNpdGUuY29tIDwvaDM+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT0nbXQtMSB0ZXh0LXNsYXRlLTMwMCc+MTIzIEFueXdoZXJlIFN0LixBbnkgQ2l0eSwgU1QgMTIzNDU8L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21kOm1yLTQwJz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIG10LThcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0xMiBweS0zIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0xMiBweS0zIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0xMiBweS0xMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNzAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gJ1NlbmRpbmcuLi4nIDogJ1NlbmQgTWVzc2FnZSd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsIk5hdmJhciIsIkNvbnRhY3QiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicG9zdCIsImFsZXJ0IiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJwIiwiaDIiLCJoMyIsImg0IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/contact.jsx\n"));

/***/ })

});