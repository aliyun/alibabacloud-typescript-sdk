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
exports.UpdateWorkspaceResponseBody = exports.UpdateWorkspaceResponseBodyData = exports.UpdateWorkspaceResponseBodyDataNetworkConfiguration = exports.UpdateWorkspaceResponseBodyDataNetworkConfigurationVpc = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateWorkspaceResponseBodyDataNetworkConfigurationVpc extends $dara.Model {
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
exports.UpdateWorkspaceResponseBodyDataNetworkConfigurationVpc = UpdateWorkspaceResponseBodyDataNetworkConfigurationVpc;
class UpdateWorkspaceResponseBodyDataNetworkConfiguration extends $dara.Model {
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
            vpc: UpdateWorkspaceResponseBodyDataNetworkConfigurationVpc,
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
exports.UpdateWorkspaceResponseBodyDataNetworkConfiguration = UpdateWorkspaceResponseBodyDataNetworkConfiguration;
class UpdateWorkspaceResponseBodyData extends $dara.Model {
    static names() {
        return {
            authorizationStatus: 'authorizationStatus',
            bucketName: 'bucketName',
            name: 'name',
            networkConfiguration: 'networkConfiguration',
            regionId: 'regionId',
            status: 'status',
            storageType: 'storageType',
            tenantId: 'tenantId',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            authorizationStatus: 'string',
            bucketName: 'string',
            name: 'string',
            networkConfiguration: UpdateWorkspaceResponseBodyDataNetworkConfiguration,
            regionId: 'string',
            status: 'string',
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
exports.UpdateWorkspaceResponseBodyData = UpdateWorkspaceResponseBodyData;
class UpdateWorkspaceResponseBody extends $dara.Model {
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
            data: UpdateWorkspaceResponseBodyData,
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
exports.UpdateWorkspaceResponseBody = UpdateWorkspaceResponseBody;
//# sourceMappingURL=UpdateWorkspaceResponseBody.js.map