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
exports.InstallWorkspacePluginRequest = exports.InstallWorkspacePluginRequestBody = exports.InstallWorkspacePluginRequestBodyConfig = exports.InstallWorkspacePluginRequestBodyConfigNetwork = exports.InstallWorkspacePluginRequestBodyConfigNetworkVpc = exports.InstallWorkspacePluginRequestBodyConfigNetworkInternet = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class InstallWorkspacePluginRequestBodyConfigNetworkInternet extends $dara.Model {
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
exports.InstallWorkspacePluginRequestBodyConfigNetworkInternet = InstallWorkspacePluginRequestBodyConfigNetworkInternet;
class InstallWorkspacePluginRequestBodyConfigNetworkVpc extends $dara.Model {
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
exports.InstallWorkspacePluginRequestBodyConfigNetworkVpc = InstallWorkspacePluginRequestBodyConfigNetworkVpc;
class InstallWorkspacePluginRequestBodyConfigNetwork extends $dara.Model {
    static names() {
        return {
            internet: 'internet',
            vpc: 'vpc',
        };
    }
    static types() {
        return {
            internet: InstallWorkspacePluginRequestBodyConfigNetworkInternet,
            vpc: InstallWorkspacePluginRequestBodyConfigNetworkVpc,
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
exports.InstallWorkspacePluginRequestBodyConfigNetwork = InstallWorkspacePluginRequestBodyConfigNetwork;
class InstallWorkspacePluginRequestBodyConfig extends $dara.Model {
    static names() {
        return {
            network: 'network',
        };
    }
    static types() {
        return {
            network: InstallWorkspacePluginRequestBodyConfigNetwork,
        };
    }
    validate() {
        if (this.network && typeof this.network.validate === 'function') {
            this.network.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.InstallWorkspacePluginRequestBodyConfig = InstallWorkspacePluginRequestBodyConfig;
class InstallWorkspacePluginRequestBody extends $dara.Model {
    static names() {
        return {
            config: 'config',
        };
    }
    static types() {
        return {
            config: InstallWorkspacePluginRequestBodyConfig,
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
exports.InstallWorkspacePluginRequestBody = InstallWorkspacePluginRequestBody;
class InstallWorkspacePluginRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: InstallWorkspacePluginRequestBody,
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
exports.InstallWorkspacePluginRequest = InstallWorkspacePluginRequest;
//# sourceMappingURL=InstallWorkspacePluginRequest.js.map