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
exports.VerifyAgenticDBTenantApiKeyResponseBody = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class VerifyAgenticDBTenantApiKeyResponseBody extends $dara.Model {
    static names() {
        return {
            apiKeyId: 'ApiKeyId',
            DBClusterId: 'DBClusterId',
            expireTime: 'ExpireTime',
            reason: 'Reason',
            regionId: 'RegionId',
            requestId: 'RequestId',
            tenantId: 'TenantId',
            tenantName: 'TenantName',
            valid: 'Valid',
        };
    }
    static types() {
        return {
            apiKeyId: 'string',
            DBClusterId: 'string',
            expireTime: 'string',
            reason: 'string',
            regionId: 'string',
            requestId: 'string',
            tenantId: 'string',
            tenantName: 'string',
            valid: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.VerifyAgenticDBTenantApiKeyResponseBody = VerifyAgenticDBTenantApiKeyResponseBody;
//# sourceMappingURL=VerifyAgenticDbtenantApiKeyResponseBody.js.map