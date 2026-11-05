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
exports.DescribeFingerPrintTemplatesResponseBody = exports.DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates extends $dara.Model {
    static names() {
        return {
            clientId: 'ClientId',
            creationTime: 'CreationTime',
            description: 'Description',
            endUserId: 'EndUserId',
            index: 'Index',
            loginTime: 'LoginTime',
            officeSiteId: 'OfficeSiteId',
        };
    }
    static types() {
        return {
            clientId: 'string',
            creationTime: 'string',
            description: 'string',
            endUserId: 'string',
            index: 'number',
            loginTime: 'string',
            officeSiteId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates = DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates;
class DescribeFingerPrintTemplatesResponseBody extends $dara.Model {
    static names() {
        return {
            fingerPrintTemplates: 'FingerPrintTemplates',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            fingerPrintTemplates: { 'type': 'array', 'itemType': DescribeFingerPrintTemplatesResponseBodyFingerPrintTemplates },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.fingerPrintTemplates)) {
            $dara.Model.validateArray(this.fingerPrintTemplates);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeFingerPrintTemplatesResponseBody = DescribeFingerPrintTemplatesResponseBody;
//# sourceMappingURL=DescribeFingerPrintTemplatesResponseBody.js.map