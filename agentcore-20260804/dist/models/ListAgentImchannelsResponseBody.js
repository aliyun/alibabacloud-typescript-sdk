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
exports.ListAgentIMChannelsResponseBody = exports.ListAgentIMChannelsResponseBodyItems = exports.ListAgentIMChannelsResponseBodyItemsCredentialSummary = exports.ListAgentIMChannelsResponseBodyItemsChannelConfig = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListAgentIMChannelsResponseBodyItemsChannelConfig extends $dara.Model {
    static names() {
        return {
            showThinking: 'showThinking',
            showToolCalls: 'showToolCalls',
        };
    }
    static types() {
        return {
            showThinking: 'boolean',
            showToolCalls: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAgentIMChannelsResponseBodyItemsChannelConfig = ListAgentIMChannelsResponseBodyItemsChannelConfig;
class ListAgentIMChannelsResponseBodyItemsCredentialSummary extends $dara.Model {
    static names() {
        return {
            configuredSecretFields: 'configuredSecretFields',
            nonSecretFields: 'nonSecretFields',
        };
    }
    static types() {
        return {
            configuredSecretFields: { 'type': 'array', 'itemType': 'string' },
            nonSecretFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.configuredSecretFields)) {
            $dara.Model.validateArray(this.configuredSecretFields);
        }
        if (this.nonSecretFields) {
            $dara.Model.validateMap(this.nonSecretFields);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAgentIMChannelsResponseBodyItemsCredentialSummary = ListAgentIMChannelsResponseBodyItemsCredentialSummary;
class ListAgentIMChannelsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            channelConfig: 'channelConfig',
            channelType: 'channelType',
            createTime: 'createTime',
            credentialSummary: 'credentialSummary',
            enabled: 'enabled',
            endpointUrl: 'endpointUrl',
            imChannelId: 'imChannelId',
            serviceEndpointId: 'serviceEndpointId',
            status: 'status',
            statusReason: 'statusReason',
            updateTime: 'updateTime',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            channelConfig: ListAgentIMChannelsResponseBodyItemsChannelConfig,
            channelType: 'string',
            createTime: 'string',
            credentialSummary: ListAgentIMChannelsResponseBodyItemsCredentialSummary,
            enabled: 'boolean',
            endpointUrl: 'string',
            imChannelId: 'string',
            serviceEndpointId: 'string',
            status: 'string',
            statusReason: 'string',
            updateTime: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.channelConfig && typeof this.channelConfig.validate === 'function') {
            this.channelConfig.validate();
        }
        if (this.credentialSummary && typeof this.credentialSummary.validate === 'function') {
            this.credentialSummary.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAgentIMChannelsResponseBodyItems = ListAgentIMChannelsResponseBodyItems;
class ListAgentIMChannelsResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': ListAgentIMChannelsResponseBodyItems },
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
exports.ListAgentIMChannelsResponseBody = ListAgentIMChannelsResponseBody;
//# sourceMappingURL=ListAgentImchannelsResponseBody.js.map