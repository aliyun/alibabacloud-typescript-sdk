"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppCommoditySpecificationsV2ForPartnerResponse = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const ListAppCommoditySpecificationsV2forPartnerResponseBody_1 = require("./ListAppCommoditySpecificationsV2forPartnerResponseBody");
class ListAppCommoditySpecificationsV2ForPartnerResponse extends $dara.Model {
    static names() {
        return {
            headers: 'headers',
            statusCode: 'statusCode',
            body: 'body',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            statusCode: 'number',
            body: ListAppCommoditySpecificationsV2forPartnerResponseBody_1.ListAppCommoditySpecificationsV2ForPartnerResponseBody,
        };
    }
    validate() {
        if (this.headers) {
            $dara.Model.validateMap(this.headers);
        }
        if (this.body && typeof this.body.validate === 'function') {
            this.body.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppCommoditySpecificationsV2ForPartnerResponse = ListAppCommoditySpecificationsV2ForPartnerResponse;
//# sourceMappingURL=ListAppCommoditySpecificationsV2forPartnerResponse.js.map