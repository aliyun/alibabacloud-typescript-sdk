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
exports.DescribeInstanceAuthInfoResponseBody = exports.DescribeInstanceAuthInfoResponseBodyConfigList = exports.DescribeInstanceAuthInfoResponseBodyApiKeys = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeInstanceAuthInfoResponseBodyApiKeys extends $dara.Model {
    static names() {
        return {
            anonKey: 'AnonKey',
            e2bApiKey: 'E2bApiKey',
            serviceKey: 'ServiceKey',
        };
    }
    static types() {
        return {
            anonKey: 'string',
            e2bApiKey: 'string',
            serviceKey: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeInstanceAuthInfoResponseBodyApiKeys = DescribeInstanceAuthInfoResponseBodyApiKeys;
class DescribeInstanceAuthInfoResponseBodyConfigList extends $dara.Model {
    static names() {
        return {
            name: 'Name',
            value: 'Value',
        };
    }
    static types() {
        return {
            name: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeInstanceAuthInfoResponseBodyConfigList = DescribeInstanceAuthInfoResponseBodyConfigList;
class DescribeInstanceAuthInfoResponseBody extends $dara.Model {
    static names() {
        return {
            apiKeys: 'ApiKeys',
            branchName: 'BranchName',
            configList: 'ConfigList',
            instanceName: 'InstanceName',
            jwtSecret: 'JwtSecret',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            apiKeys: DescribeInstanceAuthInfoResponseBodyApiKeys,
            branchName: 'string',
            configList: { 'type': 'array', 'itemType': DescribeInstanceAuthInfoResponseBodyConfigList },
            instanceName: 'string',
            jwtSecret: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (this.apiKeys && typeof this.apiKeys.validate === 'function') {
            this.apiKeys.validate();
        }
        if (Array.isArray(this.configList)) {
            $dara.Model.validateArray(this.configList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeInstanceAuthInfoResponseBody = DescribeInstanceAuthInfoResponseBody;
//# sourceMappingURL=DescribeInstanceAuthInfoResponseBody.js.map