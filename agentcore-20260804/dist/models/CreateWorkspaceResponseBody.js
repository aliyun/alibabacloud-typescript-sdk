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
exports.CreateWorkspaceResponseBody = exports.CreateWorkspaceResponseBodyData = exports.CreateWorkspaceResponseBodyDataTags = exports.CreateWorkspaceResponseBodyDataNetworkConfiguration = exports.CreateWorkspaceResponseBodyDataNetworkConfigurationVpc = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateWorkspaceResponseBodyDataNetworkConfigurationVpc extends $dara.Model {
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
exports.CreateWorkspaceResponseBodyDataNetworkConfigurationVpc = CreateWorkspaceResponseBodyDataNetworkConfigurationVpc;
class CreateWorkspaceResponseBodyDataNetworkConfiguration extends $dara.Model {
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
            vpc: CreateWorkspaceResponseBodyDataNetworkConfigurationVpc,
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
exports.CreateWorkspaceResponseBodyDataNetworkConfiguration = CreateWorkspaceResponseBodyDataNetworkConfiguration;
class CreateWorkspaceResponseBodyDataTags extends $dara.Model {
    static names() {
        return {
            key: 'key',
            value: 'value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateWorkspaceResponseBodyDataTags = CreateWorkspaceResponseBodyDataTags;
class CreateWorkspaceResponseBodyData extends $dara.Model {
    static names() {
        return {
            aiRegistryNamespaceId: 'aiRegistryNamespaceId',
            authorizationStatus: 'authorizationStatus',
            bucketName: 'bucketName',
            cmsWorkspaceId: 'cmsWorkspaceId',
            createTime: 'createTime',
            name: 'name',
            networkConfiguration: 'networkConfiguration',
            regionId: 'regionId',
            resourceGroupId: 'resourceGroupId',
            status: 'status',
            statusReason: 'statusReason',
            storageType: 'storageType',
            tags: 'tags',
            tenantId: 'tenantId',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            aiRegistryNamespaceId: 'string',
            authorizationStatus: 'string',
            bucketName: 'string',
            cmsWorkspaceId: 'string',
            createTime: 'string',
            name: 'string',
            networkConfiguration: CreateWorkspaceResponseBodyDataNetworkConfiguration,
            regionId: 'string',
            resourceGroupId: 'string',
            status: 'string',
            statusReason: 'string',
            storageType: 'string',
            tags: { 'type': 'array', 'itemType': CreateWorkspaceResponseBodyDataTags },
            tenantId: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.networkConfiguration && typeof this.networkConfiguration.validate === 'function') {
            this.networkConfiguration.validate();
        }
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateWorkspaceResponseBodyData = CreateWorkspaceResponseBodyData;
class CreateWorkspaceResponseBody extends $dara.Model {
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
            data: CreateWorkspaceResponseBodyData,
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
exports.CreateWorkspaceResponseBody = CreateWorkspaceResponseBody;
//# sourceMappingURL=CreateWorkspaceResponseBody.js.map