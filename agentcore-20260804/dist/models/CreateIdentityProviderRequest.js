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
exports.CreateIdentityProviderRequest = exports.CreateIdentityProviderRequestBody = exports.CreateIdentityProviderRequestBodySyncScope = exports.CreateIdentityProviderRequestBodyMetadata = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateIdentityProviderRequestBodyMetadata extends $dara.Model {
    static names() {
        return {
            appId: 'appId',
            appKey: 'appKey',
            appSecret: 'appSecret',
            corpId: 'corpId',
            encryptKey: 'encryptKey',
            verificationToken: 'verificationToken',
        };
    }
    static types() {
        return {
            appId: 'string',
            appKey: 'string',
            appSecret: 'string',
            corpId: 'string',
            encryptKey: 'string',
            verificationToken: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateIdentityProviderRequestBodyMetadata = CreateIdentityProviderRequestBodyMetadata;
class CreateIdentityProviderRequestBodySyncScope extends $dara.Model {
    static names() {
        return {
            departmentIds: 'departmentIds',
            mode: 'mode',
        };
    }
    static types() {
        return {
            departmentIds: { 'type': 'array', 'itemType': 'string' },
            mode: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.departmentIds)) {
            $dara.Model.validateArray(this.departmentIds);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateIdentityProviderRequestBodySyncScope = CreateIdentityProviderRequestBodySyncScope;
class CreateIdentityProviderRequestBody extends $dara.Model {
    static names() {
        return {
            identityProviderType: 'identityProviderType',
            loginEnabled: 'loginEnabled',
            metadata: 'metadata',
            syncEnabled: 'syncEnabled',
            syncOnBind: 'syncOnBind',
            syncScope: 'syncScope',
        };
    }
    static types() {
        return {
            identityProviderType: 'string',
            loginEnabled: 'boolean',
            metadata: CreateIdentityProviderRequestBodyMetadata,
            syncEnabled: 'boolean',
            syncOnBind: 'boolean',
            syncScope: CreateIdentityProviderRequestBodySyncScope,
        };
    }
    validate() {
        if (this.metadata && typeof this.metadata.validate === 'function') {
            this.metadata.validate();
        }
        if (this.syncScope && typeof this.syncScope.validate === 'function') {
            this.syncScope.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateIdentityProviderRequestBody = CreateIdentityProviderRequestBody;
class CreateIdentityProviderRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
        };
    }
    static types() {
        return {
            body: CreateIdentityProviderRequestBody,
        };
    }
    validate() {
        if (this.body && typeof this.body.validate === 'function') {
            this.body.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateIdentityProviderRequest = CreateIdentityProviderRequest;
//# sourceMappingURL=CreateIdentityProviderRequest.js.map