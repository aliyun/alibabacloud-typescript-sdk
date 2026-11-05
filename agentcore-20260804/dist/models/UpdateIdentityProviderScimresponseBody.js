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
exports.UpdateIdentityProviderSCIMResponseBody = exports.UpdateIdentityProviderSCIMResponseBodyData = exports.UpdateIdentityProviderSCIMResponseBodyDataSaml = exports.UpdateIdentityProviderSCIMResponseBodyDataMetadata = exports.UpdateIdentityProviderSCIMResponseBodyDataConfiguration = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
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
exports.UpdateIdentityProviderSCIMResponseBodyDataConfiguration = UpdateIdentityProviderSCIMResponseBodyDataConfiguration;
class UpdateIdentityProviderSCIMResponseBodyDataMetadata extends $dara.Model {
    static names() {
        return {
            binding: 'binding',
            certificates: 'certificates',
            entityId: 'entityId',
            loginUrl: 'loginUrl',
        };
    }
    static types() {
        return {
            binding: 'string',
            certificates: 'string',
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
exports.UpdateIdentityProviderSCIMResponseBodyDataMetadata = UpdateIdentityProviderSCIMResponseBodyDataMetadata;
class UpdateIdentityProviderSCIMResponseBodyDataSaml extends $dara.Model {
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
exports.UpdateIdentityProviderSCIMResponseBodyDataSaml = UpdateIdentityProviderSCIMResponseBodyDataSaml;
class UpdateIdentityProviderSCIMResponseBodyData extends $dara.Model {
    static names() {
        return {
            configuration: 'configuration',
            createdAt: 'createdAt',
            eventSubscriptionCallbackUrl: 'eventSubscriptionCallbackUrl',
            identityProviderType: 'identityProviderType',
            loginCallbackUrl: 'loginCallbackUrl',
            loginEnabled: 'loginEnabled',
            metadata: 'metadata',
            operationStatus: 'operationStatus',
            protocol: 'protocol',
            saml: 'saml',
            scimStatus: 'scimStatus',
            status: 'status',
            syncEnabled: 'syncEnabled',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            configuration: UpdateIdentityProviderSCIMResponseBodyDataConfiguration,
            createdAt: 'string',
            eventSubscriptionCallbackUrl: 'string',
            identityProviderType: 'string',
            loginCallbackUrl: 'string',
            loginEnabled: 'boolean',
            metadata: UpdateIdentityProviderSCIMResponseBodyDataMetadata,
            operationStatus: 'string',
            protocol: 'string',
            saml: UpdateIdentityProviderSCIMResponseBodyDataSaml,
            scimStatus: 'string',
            status: 'string',
            syncEnabled: 'boolean',
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
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateIdentityProviderSCIMResponseBodyData = UpdateIdentityProviderSCIMResponseBodyData;
class UpdateIdentityProviderSCIMResponseBody extends $dara.Model {
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
            data: UpdateIdentityProviderSCIMResponseBodyData,
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
exports.UpdateIdentityProviderSCIMResponseBody = UpdateIdentityProviderSCIMResponseBody;
//# sourceMappingURL=UpdateIdentityProviderScimresponseBody.js.map