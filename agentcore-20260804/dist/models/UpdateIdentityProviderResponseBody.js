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
exports.UpdateIdentityProviderResponseBody = exports.UpdateIdentityProviderResponseBodyData = exports.UpdateIdentityProviderResponseBodyDataSyncScope = exports.UpdateIdentityProviderResponseBodyDataSaml = exports.UpdateIdentityProviderResponseBodyDataOidc = exports.UpdateIdentityProviderResponseBodyDataConfiguration = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateIdentityProviderResponseBodyDataConfiguration extends $dara.Model {
    static names() {
        return {
            bindingType: 'bindingType',
            entityId: 'entityId',
            loginUrl: 'loginUrl',
            ssoStatus: 'ssoStatus',
        };
    }
    static types() {
        return {
            bindingType: 'string',
            entityId: 'string',
            loginUrl: 'string',
            ssoStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateIdentityProviderResponseBodyDataConfiguration = UpdateIdentityProviderResponseBodyDataConfiguration;
class UpdateIdentityProviderResponseBodyDataOidc extends $dara.Model {
    static names() {
        return {
            authorizationEndpoint: 'authorizationEndpoint',
            clientAuthMethod: 'clientAuthMethod',
            clientId: 'clientId',
            discoveryEndpoint: 'discoveryEndpoint',
            issuer: 'issuer',
            jwksUri: 'jwksUri',
            pkceRequired: 'pkceRequired',
            scopes: 'scopes',
            ssoMappingClaim: 'ssoMappingClaim',
            tokenEndpoint: 'tokenEndpoint',
            userinfoEndpoint: 'userinfoEndpoint',
        };
    }
    static types() {
        return {
            authorizationEndpoint: 'string',
            clientAuthMethod: 'string',
            clientId: 'string',
            discoveryEndpoint: 'string',
            issuer: 'string',
            jwksUri: 'string',
            pkceRequired: 'boolean',
            scopes: { 'type': 'array', 'itemType': 'string' },
            ssoMappingClaim: 'string',
            tokenEndpoint: 'string',
            userinfoEndpoint: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.scopes)) {
            $dara.Model.validateArray(this.scopes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateIdentityProviderResponseBodyDataOidc = UpdateIdentityProviderResponseBodyDataOidc;
class UpdateIdentityProviderResponseBodyDataSaml extends $dara.Model {
    static names() {
        return {
            bindingType: 'bindingType',
            entityId: 'entityId',
            loginUrl: 'loginUrl',
            x509Certificates: 'x509Certificates',
        };
    }
    static types() {
        return {
            bindingType: 'string',
            entityId: 'string',
            loginUrl: 'string',
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
exports.UpdateIdentityProviderResponseBodyDataSaml = UpdateIdentityProviderResponseBodyDataSaml;
class UpdateIdentityProviderResponseBodyDataSyncScope extends $dara.Model {
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
exports.UpdateIdentityProviderResponseBodyDataSyncScope = UpdateIdentityProviderResponseBodyDataSyncScope;
class UpdateIdentityProviderResponseBodyData extends $dara.Model {
    static names() {
        return {
            configuration: 'configuration',
            identityProviderType: 'identityProviderType',
            loginEnabled: 'loginEnabled',
            oidc: 'oidc',
            protocol: 'protocol',
            saml: 'saml',
            status: 'status',
            syncEnabled: 'syncEnabled',
            syncScope: 'syncScope',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            configuration: UpdateIdentityProviderResponseBodyDataConfiguration,
            identityProviderType: 'string',
            loginEnabled: 'boolean',
            oidc: UpdateIdentityProviderResponseBodyDataOidc,
            protocol: 'string',
            saml: UpdateIdentityProviderResponseBodyDataSaml,
            status: 'string',
            syncEnabled: 'boolean',
            syncScope: UpdateIdentityProviderResponseBodyDataSyncScope,
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.configuration && typeof this.configuration.validate === 'function') {
            this.configuration.validate();
        }
        if (this.oidc && typeof this.oidc.validate === 'function') {
            this.oidc.validate();
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
exports.UpdateIdentityProviderResponseBodyData = UpdateIdentityProviderResponseBodyData;
class UpdateIdentityProviderResponseBody extends $dara.Model {
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
            data: UpdateIdentityProviderResponseBodyData,
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
exports.UpdateIdentityProviderResponseBody = UpdateIdentityProviderResponseBody;
//# sourceMappingURL=UpdateIdentityProviderResponseBody.js.map