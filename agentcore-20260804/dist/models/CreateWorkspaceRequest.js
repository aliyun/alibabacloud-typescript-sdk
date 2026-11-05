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
exports.CreateWorkspaceRequest = exports.CreateWorkspaceRequestBody = exports.CreateWorkspaceRequestBodyNetworkConfiguration = exports.CreateWorkspaceRequestBodyNetworkConfigurationVpc = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateWorkspaceRequestBodyNetworkConfigurationVpc extends $dara.Model {
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
exports.CreateWorkspaceRequestBodyNetworkConfigurationVpc = CreateWorkspaceRequestBodyNetworkConfigurationVpc;
class CreateWorkspaceRequestBodyNetworkConfiguration extends $dara.Model {
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
            vpc: CreateWorkspaceRequestBodyNetworkConfigurationVpc,
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
exports.CreateWorkspaceRequestBodyNetworkConfiguration = CreateWorkspaceRequestBodyNetworkConfiguration;
class CreateWorkspaceRequestBody extends $dara.Model {
    static names() {
        return {
            agentSpace: 'agentSpace',
            cmsWorkspace: 'cmsWorkspace',
            name: 'name',
            networkConfiguration: 'networkConfiguration',
            storageType: 'storageType',
        };
    }
    static types() {
        return {
            agentSpace: 'string',
            cmsWorkspace: 'string',
            name: 'string',
            networkConfiguration: CreateWorkspaceRequestBodyNetworkConfiguration,
            storageType: 'string',
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
exports.CreateWorkspaceRequestBody = CreateWorkspaceRequestBody;
class CreateWorkspaceRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: CreateWorkspaceRequestBody,
            clientToken: 'string',
        };
    }
    validate() {
        if (this.body && typeof this.body.validate === 'function') {
            this.body.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateWorkspaceRequest = CreateWorkspaceRequest;
//# sourceMappingURL=CreateWorkspaceRequest.js.map