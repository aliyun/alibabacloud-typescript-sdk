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
exports.ListServiceEndpointsResponseBody = exports.ListServiceEndpointsResponseBodyItems = exports.ListServiceEndpointsResponseBodyItemsTarget = exports.ListServiceEndpointsResponseBodyItemsElasticityPolicy = exports.ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicy = exports.ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPolicies = exports.ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPoliciesTimePoints = exports.ListServiceEndpointsResponseBodyItemsAuthentication = exports.ListServiceEndpointsResponseBodyItemsAccessUrls = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListServiceEndpointsResponseBodyItemsAccessUrls extends $dara.Model {
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
exports.ListServiceEndpointsResponseBodyItemsAccessUrls = ListServiceEndpointsResponseBodyItemsAccessUrls;
class ListServiceEndpointsResponseBodyItemsAuthentication extends $dara.Model {
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
exports.ListServiceEndpointsResponseBodyItemsAuthentication = ListServiceEndpointsResponseBodyItemsAuthentication;
class ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPoliciesTimePoints extends $dara.Model {
    static names() {
        return {
            maxInstances: 'maxInstances',
            minInstances: 'minInstances',
            monthDays: 'monthDays',
            time: 'time',
            weekdays: 'weekdays',
        };
    }
    static types() {
        return {
            maxInstances: 'number',
            minInstances: 'number',
            monthDays: { 'type': 'array', 'itemType': 'number' },
            time: 'string',
            weekdays: { 'type': 'array', 'itemType': 'number' },
        };
    }
    validate() {
        if (Array.isArray(this.monthDays)) {
            $dara.Model.validateArray(this.monthDays);
        }
        if (Array.isArray(this.weekdays)) {
            $dara.Model.validateArray(this.weekdays);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPoliciesTimePoints = ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPoliciesTimePoints;
class ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPolicies extends $dara.Model {
    static names() {
        return {
            endTime: 'endTime',
            id: 'id',
            priority: 'priority',
            repeat: 'repeat',
            startTime: 'startTime',
            timePoints: 'timePoints',
            timeZone: 'timeZone',
            validity: 'validity',
        };
    }
    static types() {
        return {
            endTime: 'string',
            id: 'string',
            priority: 'number',
            repeat: 'string',
            startTime: 'string',
            timePoints: { 'type': 'array', 'itemType': ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPoliciesTimePoints },
            timeZone: 'string',
            validity: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.timePoints)) {
            $dara.Model.validateArray(this.timePoints);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPolicies = ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPolicies;
class ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicy extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
            policies: 'policies',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
            policies: { 'type': 'array', 'itemType': ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicyPolicies },
        };
    }
    validate() {
        if (Array.isArray(this.policies)) {
            $dara.Model.validateArray(this.policies);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicy = ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicy;
class ListServiceEndpointsResponseBodyItemsElasticityPolicy extends $dara.Model {
    static names() {
        return {
            dynamicPolicy: 'dynamicPolicy',
            enabled: 'enabled',
            maxSandboxCount: 'maxSandboxCount',
            minSandboxCount: 'minSandboxCount',
        };
    }
    static types() {
        return {
            dynamicPolicy: ListServiceEndpointsResponseBodyItemsElasticityPolicyDynamicPolicy,
            enabled: 'boolean',
            maxSandboxCount: 'number',
            minSandboxCount: 'number',
        };
    }
    validate() {
        if (this.dynamicPolicy && typeof this.dynamicPolicy.validate === 'function') {
            this.dynamicPolicy.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListServiceEndpointsResponseBodyItemsElasticityPolicy = ListServiceEndpointsResponseBodyItemsElasticityPolicy;
class ListServiceEndpointsResponseBodyItemsTarget extends $dara.Model {
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
exports.ListServiceEndpointsResponseBodyItemsTarget = ListServiceEndpointsResponseBodyItemsTarget;
class ListServiceEndpointsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            accessUrls: 'accessUrls',
            authentication: 'authentication',
            createdAt: 'createdAt',
            currentInstances: 'currentInstances',
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
            accessUrls: { 'type': 'array', 'itemType': ListServiceEndpointsResponseBodyItemsAccessUrls },
            authentication: ListServiceEndpointsResponseBodyItemsAuthentication,
            createdAt: 'string',
            currentInstances: 'number',
            effectivePublicAccessEnabled: 'boolean',
            elasticityPolicy: ListServiceEndpointsResponseBodyItemsElasticityPolicy,
            endpointType: 'string',
            name: 'string',
            publicAccessEnabled: 'boolean',
            regionId: 'string',
            serviceEndpointId: 'string',
            status: 'string',
            statusReason: 'string',
            target: ListServiceEndpointsResponseBodyItemsTarget,
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
exports.ListServiceEndpointsResponseBodyItems = ListServiceEndpointsResponseBodyItems;
class ListServiceEndpointsResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            httpStatusCode: 'httpStatusCode',
            items: 'items',
            maxResults: 'maxResults',
            message: 'message',
            nextToken: 'nextToken',
            requestId: 'requestId',
            success: 'success',
            totalCount: 'totalCount',
        };
    }
    static types() {
        return {
            code: 'string',
            httpStatusCode: 'number',
            items: { 'type': 'array', 'itemType': ListServiceEndpointsResponseBodyItems },
            maxResults: 'number',
            message: 'string',
            nextToken: 'string',
            requestId: 'string',
            success: 'boolean',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListServiceEndpointsResponseBody = ListServiceEndpointsResponseBody;
//# sourceMappingURL=ListServiceEndpointsResponseBody.js.map