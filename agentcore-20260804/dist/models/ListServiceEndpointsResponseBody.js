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
exports.ListServiceEndpointsResponseBody = exports.ListServiceEndpointsResponseBodyItems = exports.ListServiceEndpointsResponseBodyItemsTarget = exports.ListServiceEndpointsResponseBodyItemsAuthentication = exports.ListServiceEndpointsResponseBodyItemsAccessUrls = void 0;
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
            endpointType: 'endpointType',
            name: 'name',
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
            endpointType: 'string',
            name: 'string',
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