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
exports.ListAccessKeysInRecycleBinResponseBody = exports.ListAccessKeysInRecycleBinResponseBodyAccessKeys = exports.ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey extends $dara.Model {
    static names() {
        return {
            accessKeyId: 'AccessKeyId',
            createDate: 'CreateDate',
            deleteDate: 'DeleteDate',
            recycleDate: 'RecycleDate',
        };
    }
    static types() {
        return {
            accessKeyId: 'string',
            createDate: 'string',
            deleteDate: 'string',
            recycleDate: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey = ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey;
class ListAccessKeysInRecycleBinResponseBodyAccessKeys extends $dara.Model {
    static names() {
        return {
            accessKey: 'AccessKey',
        };
    }
    static types() {
        return {
            accessKey: { 'type': 'array', 'itemType': ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey },
        };
    }
    validate() {
        if (Array.isArray(this.accessKey)) {
            $dara.Model.validateArray(this.accessKey);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAccessKeysInRecycleBinResponseBodyAccessKeys = ListAccessKeysInRecycleBinResponseBodyAccessKeys;
class ListAccessKeysInRecycleBinResponseBody extends $dara.Model {
    static names() {
        return {
            accessKeys: 'AccessKeys',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            accessKeys: ListAccessKeysInRecycleBinResponseBodyAccessKeys,
            requestId: 'string',
        };
    }
    validate() {
        if (this.accessKeys && typeof this.accessKeys.validate === 'function') {
            this.accessKeys.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAccessKeysInRecycleBinResponseBody = ListAccessKeysInRecycleBinResponseBody;
//# sourceMappingURL=ListAccessKeysInRecycleBinResponseBody.js.map