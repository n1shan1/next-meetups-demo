"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 8742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js


async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        // Ensure required data is present
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({
                message: "Invalid data provided!"
            });
        }
        const client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://root1:root1@node-app-cluster.hr7clpl.mongodb.net/test?retryWrites=true&w=majority&appName=node-app-cluster", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB");
        const db = client.db();
        const meetupsCollection = db.collection("test");
        const response = await meetupsCollection.insertOne(data);
        console.log("Document Inserted:", response);
        await client.close(); // Ensure the connection is properly closed
        res.status(201).json({
            message: "Meetup Inserted!",
            id: response.insertedId
        });
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8742));
module.exports = __webpack_exports__;

})();