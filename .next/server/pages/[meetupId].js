(() => {
var exports = {};
exports.id = 549;
exports.ids = [549];
exports.modules = {

/***/ 9395:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "MeetupDetails_details__yaYcQ"
};


/***/ }),

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SingleMeetupPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/meetups/MeetupDetails.module.css
var MeetupDetails_module = __webpack_require__(9395);
var MeetupDetails_module_default = /*#__PURE__*/__webpack_require__.n(MeetupDetails_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupDetails.js



function MeetupDetails(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetupDetails_module_default()).details,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title,
                layout: "fill"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    });
}

// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/[meetupId]/index.js






function SingleMeetupPage(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: `Meetups | ${props.meetupData.title}`
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MeetupDetails, {
                title: props.meetupData.title,
                image: props.meetupData.image,
                address: props.meetupData.address,
                description: props.meetupData.description
            })
        ]
    });
}
async function getStaticPaths() {
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://root1:root1@node-app-cluster.hr7clpl.mongodb.net/test?retryWrites=true&w=majority&appName=node-app-cluster");
    const db = client.db();
    const collection = db.collection("test");
    const meetupData = await collection.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: false,
        paths: meetupData.map((meetup)=>({
                params: {
                    meetupId: meetup._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://root1:root1@node-app-cluster.hr7clpl.mongodb.net/test?retryWrites=true&w=majority&appName=node-app-cluster");
    const db = client.db();
    const collection = db.collection("test");
    const meetupData = await collection.findOne({
        _id: new external_mongodb_.ObjectId(meetupId)
    });
    client.close();
    return {
        props: {
            meetupData: {
                // Changed from `meetupsData` to `meetupData` for consistency
                id: meetupData._id.toString(),
                title: meetupData.title,
                address: meetupData.address,
                description: meetupData.description,
                image: meetupData.image
            }
        }
    };
}


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675], () => (__webpack_exec__(3730)));
module.exports = __webpack_exports__;

})();