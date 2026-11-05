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
exports.CreateExternalAgentBootstrapTokenResponseBody = exports.CreateExternalAgentBootstrapTokenResponseBodyData = exports.CreateExternalAgentBootstrapTokenResponseBodyDataCms = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateExternalAgentBootstrapTokenResponseBodyDataCms extends $dara.Model {
    static names() {
        return {
            endpoint: 'endpoint',
            licenseKey: 'licenseKey',
            workspace: 'workspace',
        };
    }
    static types() {
        return {
            endpoint: 'string',
            licenseKey: 'string',
            workspace: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateExternalAgentBootstrapTokenResponseBodyDataCms = CreateExternalAgentBootstrapTokenResponseBodyDataCms;
class CreateExternalAgentBootstrapTokenResponseBodyData extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            bootstrapToken: 'bootstrapToken',
            cms: 'cms',
            networkType: 'networkType',
            tokenFingerprint: 'tokenFingerprint',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            bootstrapToken: 'string',
            cms: CreateExternalAgentBootstrapTokenResponseBodyDataCms,
            networkType: 'string',
            tokenFingerprint: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.cms && typeof this.cms.validate === 'function') {
            this.cms.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateExternalAgentBootstrapTokenResponseBodyData = CreateExternalAgentBootstrapTokenResponseBodyData;
class CreateExternalAgentBootstrapTokenResponseBody extends $dara.Model {
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
            data: CreateExternalAgentBootstrapTokenResponseBodyData,
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
exports.CreateExternalAgentBootstrapTokenResponseBody = CreateExternalAgentBootstrapTokenResponseBody;
//# sourceMappingURL=CreateExternalAgentBootstrapTokenResponseBody.js.map