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
exports.CreateIdentityProviderSCIMCredentialResponseBody = exports.CreateIdentityProviderSCIMCredentialResponseBodyData = exports.CreateIdentityProviderSCIMCredentialResponseBodyDataCredential = exports.CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration extends $dara.Model {
    static names() {
        return {
            baseUrl: 'baseUrl',
            status: 'status',
        };
    }
    static types() {
        return {
            baseUrl: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration = CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration;
class CreateIdentityProviderSCIMCredentialResponseBodyDataCredential extends $dara.Model {
    static names() {
        return {
            createTime: 'createTime',
            credentialId: 'credentialId',
            expireTime: 'expireTime',
            status: 'status',
        };
    }
    static types() {
        return {
            createTime: 'string',
            credentialId: 'string',
            expireTime: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateIdentityProviderSCIMCredentialResponseBodyDataCredential = CreateIdentityProviderSCIMCredentialResponseBodyDataCredential;
class CreateIdentityProviderSCIMCredentialResponseBodyData extends $dara.Model {
    static names() {
        return {
            configuration: 'configuration',
            credential: 'credential',
            token: 'token',
        };
    }
    static types() {
        return {
            configuration: CreateIdentityProviderSCIMCredentialResponseBodyDataConfiguration,
            credential: CreateIdentityProviderSCIMCredentialResponseBodyDataCredential,
            token: 'string',
        };
    }
    validate() {
        if (this.configuration && typeof this.configuration.validate === 'function') {
            this.configuration.validate();
        }
        if (this.credential && typeof this.credential.validate === 'function') {
            this.credential.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateIdentityProviderSCIMCredentialResponseBodyData = CreateIdentityProviderSCIMCredentialResponseBodyData;
class CreateIdentityProviderSCIMCredentialResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            data: 'data',
            httpStatusCode: 'httpStatusCode',
            message: 'message',
            requestId: 'requestId',
            success: 'success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: CreateIdentityProviderSCIMCredentialResponseBodyData,
            httpStatusCode: 'number',
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
exports.CreateIdentityProviderSCIMCredentialResponseBody = CreateIdentityProviderSCIMCredentialResponseBody;
//# sourceMappingURL=CreateIdentityProviderScimcredentialResponseBody.js.map