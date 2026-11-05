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
exports.ListWorkspacesResponseBody = exports.ListWorkspacesResponseBodyItems = exports.ListWorkspacesResponseBodyItemsNetworkConfiguration = exports.ListWorkspacesResponseBodyItemsNetworkConfigurationVpc = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListWorkspacesResponseBodyItemsNetworkConfigurationVpc extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
            vSwitchIds: 'vSwitchIds',
            vpcId: 'vpcId',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
            vSwitchIds: { 'type': 'array', 'itemType': 'string' },
            vpcId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.vSwitchIds)) {
            $dara.Model.validateArray(this.vSwitchIds);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListWorkspacesResponseBodyItemsNetworkConfigurationVpc = ListWorkspacesResponseBodyItemsNetworkConfigurationVpc;
class ListWorkspacesResponseBodyItemsNetworkConfiguration extends $dara.Model {
    static names() {
        return {
            publicEgressEnabled: 'publicEgressEnabled',
            publicIngressEnabled: 'publicIngressEnabled',
            vpc: 'vpc',
        };
    }
    static types() {
        return {
            publicEgressEnabled: 'boolean',
            publicIngressEnabled: 'boolean',
            vpc: ListWorkspacesResponseBodyItemsNetworkConfigurationVpc,
        };
    }
    validate() {
        if (this.vpc && typeof this.vpc.validate === 'function') {
            this.vpc.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListWorkspacesResponseBodyItemsNetworkConfiguration = ListWorkspacesResponseBodyItemsNetworkConfiguration;
class ListWorkspacesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            createTime: 'createTime',
            name: 'name',
            networkConfiguration: 'networkConfiguration',
            regionId: 'regionId',
            status: 'status',
            tenantId: 'tenantId',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            createTime: 'string',
            name: 'string',
            networkConfiguration: ListWorkspacesResponseBodyItemsNetworkConfiguration,
            regionId: 'string',
            status: 'string',
            tenantId: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.networkConfiguration && typeof this.networkConfiguration.validate === 'function') {
            this.networkConfiguration.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListWorkspacesResponseBodyItems = ListWorkspacesResponseBodyItems;
class ListWorkspacesResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyItems },
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
exports.ListWorkspacesResponseBody = ListWorkspacesResponseBody;
//# sourceMappingURL=ListWorkspacesResponseBody.js.map