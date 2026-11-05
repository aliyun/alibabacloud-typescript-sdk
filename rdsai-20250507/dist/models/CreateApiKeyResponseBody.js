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
exports.CreateApiKeyResponseBody = exports.CreateApiKeyResponseBodyData = exports.CreateApiKeyResponseBodyDataCustomKeyList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateApiKeyResponseBodyDataCustomKeyList extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            dailyTokenQuota: 'DailyTokenQuota',
            keyName: 'KeyName',
            limitRate: 'LimitRate',
            limitType: 'LimitType',
            roleArn: 'RoleArn',
            tokenQuota: 'TokenQuota',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            dailyTokenQuota: 'number',
            keyName: 'string',
            limitRate: 'number',
            limitType: 'string',
            roleArn: 'string',
            tokenQuota: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateApiKeyResponseBodyDataCustomKeyList = CreateApiKeyResponseBodyDataCustomKeyList;
class CreateApiKeyResponseBodyData extends $dara.Model {
    static names() {
        return {
            baseUrl: 'BaseUrl',
            customKeyList: 'CustomKeyList',
            systemApiKey: 'SystemApiKey',
        };
    }
    static types() {
        return {
            baseUrl: 'string',
            customKeyList: { 'type': 'array', 'itemType': CreateApiKeyResponseBodyDataCustomKeyList },
            systemApiKey: 'string',
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
exports.CreateApiKeyResponseBodyData = CreateApiKeyResponseBodyData;
class CreateApiKeyResponseBody extends $dara.Model {
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
            data: CreateApiKeyResponseBodyData,
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
exports.CreateApiKeyResponseBody = CreateApiKeyResponseBody;
//# sourceMappingURL=CreateApiKeyResponseBody.js.map