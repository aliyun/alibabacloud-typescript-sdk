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
exports.GetWorkspacePluginResponseBody = exports.GetWorkspacePluginResponseBodyData = exports.GetWorkspacePluginResponseBodyDataConfig = exports.GetWorkspacePluginResponseBodyDataConfigNetwork = exports.GetWorkspacePluginResponseBodyDataConfigNetworkVpc = exports.GetWorkspacePluginResponseBodyDataConfigNetworkInternet = exports.GetWorkspacePluginResponseBodyDataConfigAgentLoop = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetWorkspacePluginResponseBodyDataConfigAgentLoop extends $dara.Model {
    static names() {
        return {
            agentSpaceName: 'agentSpaceName',
            createdAt: 'createdAt',
            regionId: 'regionId',
        };
    }
    static types() {
        return {
            agentSpaceName: 'string',
            createdAt: 'string',
            regionId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetWorkspacePluginResponseBodyDataConfigAgentLoop = GetWorkspacePluginResponseBodyDataConfigAgentLoop;
class GetWorkspacePluginResponseBodyDataConfigNetworkInternet extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetWorkspacePluginResponseBodyDataConfigNetworkInternet = GetWorkspacePluginResponseBodyDataConfigNetworkInternet;
class GetWorkspacePluginResponseBodyDataConfigNetworkVpc extends $dara.Model {
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
exports.GetWorkspacePluginResponseBodyDataConfigNetworkVpc = GetWorkspacePluginResponseBodyDataConfigNetworkVpc;
class GetWorkspacePluginResponseBodyDataConfigNetwork extends $dara.Model {
    static names() {
        return {
            internet: 'internet',
            vpc: 'vpc',
        };
    }
    static types() {
        return {
            internet: GetWorkspacePluginResponseBodyDataConfigNetworkInternet,
            vpc: GetWorkspacePluginResponseBodyDataConfigNetworkVpc,
        };
    }
    validate() {
        if (this.internet && typeof this.internet.validate === 'function') {
            this.internet.validate();
        }
        if (this.vpc && typeof this.vpc.validate === 'function') {
            this.vpc.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetWorkspacePluginResponseBodyDataConfigNetwork = GetWorkspacePluginResponseBodyDataConfigNetwork;
class GetWorkspacePluginResponseBodyDataConfig extends $dara.Model {
    static names() {
        return {
            agentLoop: 'agentLoop',
            network: 'network',
        };
    }
    static types() {
        return {
            agentLoop: GetWorkspacePluginResponseBodyDataConfigAgentLoop,
            network: GetWorkspacePluginResponseBodyDataConfigNetwork,
        };
    }
    validate() {
        if (this.agentLoop && typeof this.agentLoop.validate === 'function') {
            this.agentLoop.validate();
        }
        if (this.network && typeof this.network.validate === 'function') {
            this.network.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetWorkspacePluginResponseBodyDataConfig = GetWorkspacePluginResponseBodyDataConfig;
class GetWorkspacePluginResponseBodyData extends $dara.Model {
    static names() {
        return {
            config: 'config',
            enabled: 'enabled',
            pluginName: 'pluginName',
            status: 'status',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            config: GetWorkspacePluginResponseBodyDataConfig,
            enabled: 'boolean',
            pluginName: 'string',
            status: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.config && typeof this.config.validate === 'function') {
            this.config.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetWorkspacePluginResponseBodyData = GetWorkspacePluginResponseBodyData;
class GetWorkspacePluginResponseBody extends $dara.Model {
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
            data: GetWorkspacePluginResponseBodyData,
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
exports.GetWorkspacePluginResponseBody = GetWorkspacePluginResponseBody;
//# sourceMappingURL=GetWorkspacePluginResponseBody.js.map