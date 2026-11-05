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
exports.GetUserTmpIdentityForPartnerResponseBody = exports.GetUserTmpIdentityForPartnerResponseBodyData = exports.GetUserTmpIdentityForPartnerResponseBodyDataCredentials = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetUserTmpIdentityForPartnerResponseBodyDataCredentials extends $dara.Model {
    static names() {
        return {
            encryptedAccessKeyId: 'EncryptedAccessKeyId',
            encryptedAccessKeySecret: 'EncryptedAccessKeySecret',
            encryptedSecurityToken: 'EncryptedSecurityToken',
            expiration: 'Expiration',
        };
    }
    static types() {
        return {
            encryptedAccessKeyId: 'string',
            encryptedAccessKeySecret: 'string',
            encryptedSecurityToken: 'string',
            expiration: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetUserTmpIdentityForPartnerResponseBodyDataCredentials = GetUserTmpIdentityForPartnerResponseBodyDataCredentials;
class GetUserTmpIdentityForPartnerResponseBodyData extends $dara.Model {
    static names() {
        return {
            credentials: 'Credentials',
            hasCustomRoleAuth: 'HasCustomRoleAuth',
        };
    }
    static types() {
        return {
            credentials: GetUserTmpIdentityForPartnerResponseBodyDataCredentials,
            hasCustomRoleAuth: 'boolean',
        };
    }
    validate() {
        if (this.credentials && typeof this.credentials.validate === 'function') {
            this.credentials.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetUserTmpIdentityForPartnerResponseBodyData = GetUserTmpIdentityForPartnerResponseBodyData;
class GetUserTmpIdentityForPartnerResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            errorCode: 'ErrorCode',
            errorMsg: 'ErrorMsg',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            data: GetUserTmpIdentityForPartnerResponseBodyData,
            errorCode: 'string',
            errorMsg: 'string',
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
exports.GetUserTmpIdentityForPartnerResponseBody = GetUserTmpIdentityForPartnerResponseBody;
//# sourceMappingURL=GetUserTmpIdentityForPartnerResponseBody.js.map