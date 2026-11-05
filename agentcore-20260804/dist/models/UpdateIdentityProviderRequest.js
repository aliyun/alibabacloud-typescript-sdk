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
exports.UpdateIdentityProviderRequest = exports.UpdateIdentityProviderRequestBody = exports.UpdateIdentityProviderRequestBodySyncScope = exports.UpdateIdentityProviderRequestBodySaml = exports.UpdateIdentityProviderRequestBodyMetadata = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateIdentityProviderRequestBodyMetadata extends $dara.Model {
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
exports.UpdateIdentityProviderRequestBodyMetadata = UpdateIdentityProviderRequestBodyMetadata;
class UpdateIdentityProviderRequestBodySaml extends $dara.Model {
    static names() {
        return {
            bindingType: 'bindingType',
            entityId: 'entityId',
            loginUrl: 'loginUrl',
            metadataXml: 'metadataXml',
            x509Certificates: 'x509Certificates',
        };
    }
    static types() {
        return {
            bindingType: 'string',
            entityId: 'string',
            loginUrl: 'string',
            metadataXml: 'string',
            x509Certificates: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.x509Certificates)) {
            $dara.Model.validateArray(this.x509Certificates);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateIdentityProviderRequestBodySaml = UpdateIdentityProviderRequestBodySaml;
class UpdateIdentityProviderRequestBodySyncScope extends $dara.Model {
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
exports.UpdateIdentityProviderRequestBodySyncScope = UpdateIdentityProviderRequestBodySyncScope;
class UpdateIdentityProviderRequestBody extends $dara.Model {
    static names() {
        return {
            loginEnabled: 'loginEnabled',
            metadata: 'metadata',
            protocol: 'protocol',
            saml: 'saml',
            syncEnabled: 'syncEnabled',
            syncScope: 'syncScope',
        };
    }
    static types() {
        return {
            loginEnabled: 'boolean',
            metadata: UpdateIdentityProviderRequestBodyMetadata,
            protocol: 'string',
            saml: UpdateIdentityProviderRequestBodySaml,
            syncEnabled: 'boolean',
            syncScope: UpdateIdentityProviderRequestBodySyncScope,
        };
    }
    validate() {
        if (this.metadata && typeof this.metadata.validate === 'function') {
            this.metadata.validate();
        }
        if (this.saml && typeof this.saml.validate === 'function') {
            this.saml.validate();
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
exports.UpdateIdentityProviderRequestBody = UpdateIdentityProviderRequestBody;
class UpdateIdentityProviderRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
        };
    }
    static types() {
        return {
            body: UpdateIdentityProviderRequestBody,
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
exports.UpdateIdentityProviderRequest = UpdateIdentityProviderRequest;
//# sourceMappingURL=UpdateIdentityProviderRequest.js.map