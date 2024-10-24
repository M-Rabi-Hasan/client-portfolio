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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// src/pages/contact.jsx\n\nvar _s = $RefreshSig$();\n\n\nconst Contact = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: '',\n        email: '',\n        message: ''\n    });\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post('/api/contact', formData);\n            alert('Message sent successfully!');\n            setFormData({\n                name: '',\n                email: '',\n                message: ''\n            });\n        } catch (error) {\n            alert('There was an error sending your message.');\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-x-hidden text-neutral-300 antialiased   selection:bg-cyan-300 selection:text-cyan-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 -z-10 h-full w-full \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 z-[-2] h-screen w-screen bg-neutral-950   bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),   rgba(255,255,255,0))]\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-12 py-20 md:flex md:justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-bold mb-4\",\n                                children: [\n                                    \"Contact\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"px-2 text-blue-500\",\n                                        children: \"Us\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 11\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"For questions, technical assistance, or collaboration opportunities via the contact information provided.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mt-4\",\n                                children: \"+ 123-456-7890\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mt-1\",\n                                children: \"hello@reallygreatsite.com \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 9\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"mt-1\",\n                                children: \"123 Anywhere St.,Any City, ST 12345\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 9\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:mr-40 sm:mt-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"name\",\n                                            value: formData.name,\n                                            onChange: handleChange,\n                                            required: true,\n                                            className: \"w-full px-12 py-3 border border-gray-300 rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: \"Email\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            value: formData.email,\n                                            onChange: handleChange,\n                                            required: true,\n                                            className: \"w-full px-12 py-3 border border-gray-300 rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            className: \"block text-sm font-medium\",\n                                            children: \"Message\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            name: \"message\",\n                                            value: formData.message,\n                                            onChange: handleChange,\n                                            required: true,\n                                            className: \"w-full px-12 py-10 border border-gray-300 rounded\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    disabled: isSubmitting,\n                                    className: \"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700\",\n                                    children: isSubmitting ? 'Sending...' : 'Send Message'\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Programming Languages\\\\next.js\\\\react-portfolio - Copy\\\\src\\\\pages\\\\contact.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"G15wqdHt+MsoAKwVxqNVUTniAuk=\");\n_c = Contact;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29udGFjdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0JBQXdCOzs7QUFDUztBQUNQO0FBRTFCLE1BQU1FLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDO1FBQUVLLE1BQU07UUFBSUMsT0FBTztRQUFJQyxTQUFTO0lBQUc7SUFDNUUsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUM7SUFFakQsTUFBTVUsZUFBZSxDQUFDQztRQUNwQlAsWUFBWTtZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDUSxFQUFFQyxNQUFNLENBQUNQLElBQUksQ0FBQyxFQUFFTSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFBQztJQUM3RDtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUJBLEVBQUVJLGNBQWM7UUFDaEJOLGdCQUFnQjtRQUVoQixJQUFJO1lBQ0YsTUFBTVIsa0RBQVUsQ0FBQyxnQkFBZ0JFO1lBQ2pDYyxNQUFNO1lBQ05iLFlBQVk7Z0JBQUVDLE1BQU07Z0JBQUlDLE9BQU87Z0JBQUlDLFNBQVM7WUFBRztRQUNqRCxFQUFFLE9BQU9XLE9BQU87WUFDZEQsTUFBTTtRQUNSLFNBQVU7WUFDUlIsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1U7UUFBSUMsV0FBVTs7MEJBR1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUViLDRFQUFDRDtvQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7MEJBTXJCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7O29DQUEwQjtrREFDdEMsOERBQUNFO3dDQUFLRixXQUFVO2tEQUFxQjs7Ozs7Ozs7Ozs7OzBDQUV2Qyw4REFBQ0c7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0M7Z0NBQUdKLFdBQVU7MENBQU87Ozs7OzswQ0FDckIsOERBQUNLO2dDQUFHTCxXQUFVOzBDQUFPOzs7Ozs7MENBQ3JCLDhEQUFDTTtnQ0FBR04sV0FBVTswQ0FBTzs7Ozs7Ozs7Ozs7O2tDQUV2Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNPOzRCQUFLQyxVQUFVZDs0QkFBY00sV0FBVTs7OENBQ3RDLDhEQUFDRDs7c0RBQ0MsOERBQUNVOzRDQUFNVCxXQUFVO3NEQUE0Qjs7Ozs7O3NEQUM3Qyw4REFBQ1U7NENBQ0NDLE1BQUs7NENBQ0wxQixNQUFLOzRDQUNMUSxPQUFPVixTQUFTRSxJQUFJOzRDQUNwQjJCLFVBQVV0Qjs0Q0FDVnVCLFFBQVE7NENBQ1JiLFdBQVU7Ozs7Ozs7Ozs7Ozs4Q0FHZCw4REFBQ0Q7O3NEQUNDLDhEQUFDVTs0Q0FBTVQsV0FBVTtzREFBNEI7Ozs7OztzREFDN0MsOERBQUNVOzRDQUNDQyxNQUFLOzRDQUNMMUIsTUFBSzs0Q0FDTFEsT0FBT1YsU0FBU0csS0FBSzs0Q0FDckIwQixVQUFVdEI7NENBQ1Z1QixRQUFROzRDQUNSYixXQUFVOzs7Ozs7Ozs7Ozs7OENBR2QsOERBQUNEOztzREFDQyw4REFBQ1U7NENBQU1ULFdBQVU7c0RBQTRCOzs7Ozs7c0RBQzdDLDhEQUFDYzs0Q0FDQzdCLE1BQUs7NENBQ0xRLE9BQU9WLFNBQVNJLE9BQU87NENBQ3ZCeUIsVUFBVXRCOzRDQUNWdUIsUUFBUTs0Q0FDUmIsV0FBVTs7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDZTtvQ0FDQ0osTUFBSztvQ0FDTEssVUFBVTVCO29DQUNWWSxXQUFVOzhDQUVUWixlQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pDO0dBM0ZNTjtLQUFBQTtBQTZGTixpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29udGFjdC5qc3g/YmNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvY29udGFjdC5qc3hcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoeyBuYW1lOiAnJywgZW1haWw6ICcnLCBtZXNzYWdlOiAnJyB9KTtcclxuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvY29udGFjdCcsIGZvcm1EYXRhKTtcclxuICAgICAgYWxlcnQoJ01lc3NhZ2Ugc2VudCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIHNldEZvcm1EYXRhKHsgbmFtZTogJycsIGVtYWlsOiAnJywgbWVzc2FnZTogJycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBhbGVydCgnVGhlcmUgd2FzIGFuIGVycm9yIHNlbmRpbmcgeW91ciBtZXNzYWdlLicpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWhpZGRlbiB0ZXh0LW5ldXRyYWwtMzAwIGFudGlhbGlhc2VkXHJcbiAgICAgc2VsZWN0aW9uOmJnLWN5YW4tMzAwIHNlbGVjdGlvbjp0ZXh0LWN5YW4tOTAwXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgLXotMTAgaC1mdWxsIHctZnVsbCBcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCB6LVstMl0gaC1zY3JlZW4gdy1zY3JlZW4gYmctbmV1dHJhbC05NTBcclxuICAgICAgICAgIGJnLVtyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZV84MCVfODAlX2F0XzUwJV8tMjAlLHJnYmEoMTIwLDExOSwxOTgsMC4zKSxcclxuICAgICAgICAgIHJnYmEoMjU1LDI1NSwyNTUsMCkpXVwiPiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0xMiBweS0yMCBtZDpmbGV4IG1kOmp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4LXctbWQnPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPkNvbnRhY3RcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ncHgtMiB0ZXh0LWJsdWUtNTAwJz5Vczwvc3Bhbj5cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwPkZvciBxdWVzdGlvbnMsIHRlY2huaWNhbCBhc3Npc3RhbmNlLCBvciBjb2xsYWJvcmF0aW9uIG9wcG9ydHVuaXRpZXMgdmlhIHRoZSBjb250YWN0IGluZm9ybWF0aW9uIHByb3ZpZGVkLjwvcD5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPSdtdC00Jz4rIDEyMy00NTYtNzg5MDwvaDI+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nbXQtMSc+aGVsbG9AcmVhbGx5Z3JlYXRzaXRlLmNvbSA8L2gzPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9J210LTEnPjEyMyBBbnl3aGVyZSBTdC4sQW55IENpdHksIFNUIDEyMzQ1PC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDptci00MCBzbTptdC04Jz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMTIgcHktMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMTIgcHktMyBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5tZXNzYWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMTIgcHktMTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTcwMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzU3VibWl0dGluZyA/ICdTZW5kaW5nLi4uJyA6ICdTZW5kIE1lc3NhZ2UnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJDb250YWN0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJhbGVydCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwicCIsImgyIiwiaDMiLCJoNCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/contact.jsx\n"));

/***/ })

});