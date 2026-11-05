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
exports.GetExternalAgentBootstrapOptionsResponseBody = exports.GetExternalAgentBootstrapOptionsResponseBodyData = exports.GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions extends $dara.Model {
    static names() {
        return {
            available: 'available',
            networkType: 'networkType',
        };
    }
    static types() {
        return {
            available: 'boolean',
            networkType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions = GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions;
class GetExternalAgentBootstrapOptionsResponseBodyData extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            networkOptions: 'networkOptions',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            networkOptions: { 'type': 'array', 'itemType': GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions },
            workspaceId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.networkOptions)) {
            $dara.Model.validateArray(this.networkOptions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetExternalAgentBootstrapOptionsResponseBodyData = GetExternalAgentBootstrapOptionsResponseBodyData;
class GetExternalAgentBootstrapOptionsResponseBody extends $dara.Model {
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
            data: GetExternalAgentBootstrapOptionsResponseBodyData,
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
exports.GetExternalAgentBootstrapOptionsResponseBody = GetExternalAgentBootstrapOptionsResponseBody;
//# sourceMappingURL=GetExternalAgentBootstrapOptionsResponseBody.js.map