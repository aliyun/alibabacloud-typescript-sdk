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
exports.ResetApiKeyResponseBody = exports.ResetApiKeyResponseBodyData = exports.ResetApiKeyResponseBodyDataCustomKeyList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ResetApiKeyResponseBodyDataCustomKeyList extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            keyName: 'KeyName',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            keyName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ResetApiKeyResponseBodyDataCustomKeyList = ResetApiKeyResponseBodyDataCustomKeyList;
class ResetApiKeyResponseBodyData extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            baseUrl: 'BaseUrl',
            customKeyList: 'CustomKeyList',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            baseUrl: 'string',
            customKeyList: { 'type': 'array', 'itemType': ResetApiKeyResponseBodyDataCustomKeyList },
        };
    }
    validate() {
        if (Array.isArray(this.customKeyList)) {
            $dara.Model.validateArray(this.customKeyList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ResetApiKeyResponseBodyData = ResetApiKeyResponseBodyData;
class ResetApiKeyResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            data: ResetApiKeyResponseBodyData,
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ResetApiKeyResponseBody = ResetApiKeyResponseBody;
//# sourceMappingURL=ResetApiKeyResponseBody.js.map