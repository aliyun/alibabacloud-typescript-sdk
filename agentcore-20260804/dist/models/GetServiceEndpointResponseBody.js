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
exports.GetServiceEndpointResponseBody = exports.GetServiceEndpointResponseBodyData = exports.GetServiceEndpointResponseBodyDataTarget = exports.GetServiceEndpointResponseBodyDataElasticityPolicy = exports.GetServiceEndpointResponseBodyDataAuthentication = exports.GetServiceEndpointResponseBodyDataAccessUrls = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetServiceEndpointResponseBodyDataAccessUrls extends $dara.Model {
    static names() {
        return {
            accessType: 'accessType',
            status: 'status',
            statusReason: 'statusReason',
            url: 'url',
        };
    }
    static types() {
        return {
            accessType: 'string',
            status: 'string',
            statusReason: 'string',
            url: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetServiceEndpointResponseBodyDataAccessUrls = GetServiceEndpointResponseBodyDataAccessUrls;
class GetServiceEndpointResponseBodyDataAuthentication extends $dara.Model {
    static names() {
        return {
            type: 'type',
        };
    }
    static types() {
        return {
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetServiceEndpointResponseBodyDataAuthentication = GetServiceEndpointResponseBodyDataAuthentication;
class GetServiceEndpointResponseBodyDataElasticityPolicy extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
            maxSandboxCount: 'maxSandboxCount',
            minSandboxCount: 'minSandboxCount',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
            maxSandboxCount: 'number',
            minSandboxCount: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetServiceEndpointResponseBodyDataElasticityPolicy = GetServiceEndpointResponseBodyDataElasticityPolicy;
class GetServiceEndpointResponseBodyDataTarget extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            agentVersion: 'agentVersion',
            collaborationComponent: 'collaborationComponent',
            resourceBindingId: 'resourceBindingId',
            targetType: 'targetType',
        };
    }
    static types() {
        return {
            agentId: 'string',
            agentVersion: 'string',
            collaborationComponent: 'string',
            resourceBindingId: 'string',
            targetType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetServiceEndpointResponseBodyDataTarget = GetServiceEndpointResponseBodyDataTarget;
class GetServiceEndpointResponseBodyData extends $dara.Model {
    static names() {
        return {
            accessUrls: 'accessUrls',
            authentication: 'authentication',
            createdAt: 'createdAt',
            effectivePublicAccessEnabled: 'effectivePublicAccessEnabled',
            elasticityPolicy: 'elasticityPolicy',
            endpointType: 'endpointType',
            name: 'name',
            publicAccessEnabled: 'publicAccessEnabled',
            regionId: 'regionId',
            serviceEndpointId: 'serviceEndpointId',
            status: 'status',
            statusReason: 'statusReason',
            target: 'target',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            accessUrls: { 'type': 'array', 'itemType': GetServiceEndpointResponseBodyDataAccessUrls },
            authentication: GetServiceEndpointResponseBodyDataAuthentication,
            createdAt: 'string',
            effectivePublicAccessEnabled: 'boolean',
            elasticityPolicy: GetServiceEndpointResponseBodyDataElasticityPolicy,
            endpointType: 'string',
            name: 'string',
            publicAccessEnabled: 'boolean',
            regionId: 'string',
            serviceEndpointId: 'string',
            status: 'string',
            statusReason: 'string',
            target: GetServiceEndpointResponseBodyDataTarget,
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.accessUrls)) {
            $dara.Model.validateArray(this.accessUrls);
        }
        if (this.authentication && typeof this.authentication.validate === 'function') {
            this.authentication.validate();
        }
        if (this.elasticityPolicy && typeof this.elasticityPolicy.validate === 'function') {
            this.elasticityPolicy.validate();
        }
        if (this.target && typeof this.target.validate === 'function') {
            this.target.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetServiceEndpointResponseBodyData = GetServiceEndpointResponseBodyData;
class GetServiceEndpointResponseBody extends $dara.Model {
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
            data: GetServiceEndpointResponseBodyData,
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
exports.GetServiceEndpointResponseBody = GetServiceEndpointResponseBody;
//# sourceMappingURL=GetServiceEndpointResponseBody.js.map