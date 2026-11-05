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
exports.GetWorkspaceResponseBody = exports.GetWorkspaceResponseBodyData = exports.GetWorkspaceResponseBodyDataNetworkConfiguration = exports.GetWorkspaceResponseBodyDataNetworkConfigurationVpc = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetWorkspaceResponseBodyDataNetworkConfigurationVpc extends $dara.Model {
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
exports.GetWorkspaceResponseBodyDataNetworkConfigurationVpc = GetWorkspaceResponseBodyDataNetworkConfigurationVpc;
class GetWorkspaceResponseBodyDataNetworkConfiguration extends $dara.Model {
    static names() {
        return {
            privateIngressEnabled: 'privateIngressEnabled',
            publicEgressEnabled: 'publicEgressEnabled',
            publicEgressIp: 'publicEgressIp',
            publicIngressEnabled: 'publicIngressEnabled',
            vpc: 'vpc',
        };
    }
    static types() {
        return {
            privateIngressEnabled: 'boolean',
            publicEgressEnabled: 'boolean',
            publicEgressIp: 'string',
            publicIngressEnabled: 'boolean',
            vpc: GetWorkspaceResponseBodyDataNetworkConfigurationVpc,
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
exports.GetWorkspaceResponseBodyDataNetworkConfiguration = GetWorkspaceResponseBodyDataNetworkConfiguration;
class GetWorkspaceResponseBodyData extends $dara.Model {
    static names() {
        return {
            authorizationStatus: 'authorizationStatus',
            bucketName: 'bucketName',
            createTime: 'createTime',
            name: 'name',
            networkConfiguration: 'networkConfiguration',
            regionId: 'regionId',
            status: 'status',
            statusReason: 'statusReason',
            storageType: 'storageType',
            tenantId: 'tenantId',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            authorizationStatus: 'string',
            bucketName: 'string',
            createTime: 'string',
            name: 'string',
            networkConfiguration: GetWorkspaceResponseBodyDataNetworkConfiguration,
            regionId: 'string',
            status: 'string',
            statusReason: 'string',
            storageType: 'string',
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
exports.GetWorkspaceResponseBodyData = GetWorkspaceResponseBodyData;
class GetWorkspaceResponseBody extends $dara.Model {
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
            data: GetWorkspaceResponseBodyData,
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
exports.GetWorkspaceResponseBody = GetWorkspaceResponseBody;
//# sourceMappingURL=GetWorkspaceResponseBody.js.map