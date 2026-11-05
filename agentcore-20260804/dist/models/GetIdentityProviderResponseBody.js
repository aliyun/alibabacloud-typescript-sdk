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
exports.GetIdentityProviderResponseBody = exports.GetIdentityProviderResponseBodyData = exports.GetIdentityProviderResponseBodyDataSyncScope = exports.GetIdentityProviderResponseBodyDataSaml = exports.GetIdentityProviderResponseBodyDataMetadata = exports.GetIdentityProviderResponseBodyDataConfiguration = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetIdentityProviderResponseBodyDataConfiguration extends $dara.Model {
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
exports.GetIdentityProviderResponseBodyDataConfiguration = GetIdentityProviderResponseBodyDataConfiguration;
class GetIdentityProviderResponseBodyDataMetadata extends $dara.Model {
    static names() {
        return {
            appId: 'appId',
            appKey: 'appKey',
            binding: 'binding',
            certificates: 'certificates',
            corpId: 'corpId',
            entityId: 'entityId',
            loginUrl: 'loginUrl',
        };
    }
    static types() {
        return {
            appId: 'string',
            appKey: 'string',
            binding: 'string',
            certificates: 'string',
            corpId: 'string',
            entityId: 'string',
            loginUrl: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetIdentityProviderResponseBodyDataMetadata = GetIdentityProviderResponseBodyDataMetadata;
class GetIdentityProviderResponseBodyDataSaml extends $dara.Model {
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
exports.GetIdentityProviderResponseBodyDataSaml = GetIdentityProviderResponseBodyDataSaml;
class GetIdentityProviderResponseBodyDataSyncScope extends $dara.Model {
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
exports.GetIdentityProviderResponseBodyDataSyncScope = GetIdentityProviderResponseBodyDataSyncScope;
class GetIdentityProviderResponseBodyData extends $dara.Model {
    static names() {
        return {
            configuration: 'configuration',
            createdAt: 'createdAt',
            eventSubscriptionCallbackUrl: 'eventSubscriptionCallbackUrl',
            identityProviderType: 'identityProviderType',
            loginCallbackUrl: 'loginCallbackUrl',
            loginEnabled: 'loginEnabled',
            metadata: 'metadata',
            protocol: 'protocol',
            saml: 'saml',
            status: 'status',
            syncEnabled: 'syncEnabled',
            syncScope: 'syncScope',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            configuration: GetIdentityProviderResponseBodyDataConfiguration,
            createdAt: 'string',
            eventSubscriptionCallbackUrl: 'string',
            identityProviderType: 'string',
            loginCallbackUrl: 'string',
            loginEnabled: 'boolean',
            metadata: GetIdentityProviderResponseBodyDataMetadata,
            protocol: 'string',
            saml: GetIdentityProviderResponseBodyDataSaml,
            status: 'string',
            syncEnabled: 'boolean',
            syncScope: GetIdentityProviderResponseBodyDataSyncScope,
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.configuration && typeof this.configuration.validate === 'function') {
            this.configuration.validate();
        }
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
exports.GetIdentityProviderResponseBodyData = GetIdentityProviderResponseBodyData;
class GetIdentityProviderResponseBody extends $dara.Model {
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
            data: GetIdentityProviderResponseBodyData,
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
exports.GetIdentityProviderResponseBody = GetIdentityProviderResponseBody;
//# sourceMappingURL=GetIdentityProviderResponseBody.js.map