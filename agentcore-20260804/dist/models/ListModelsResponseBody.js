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
exports.ListModelsResponseBody = exports.ListModelsResponseBodyItems = exports.ListModelsResponseBodyItemsCapabilities = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListModelsResponseBodyItemsCapabilities extends $dara.Model {
    static names() {
        return {
            audio: 'audio',
            document: 'document',
            multiToolCall: 'multiToolCall',
            reasoning: 'reasoning',
            streamToolCall: 'streamToolCall',
            toolCall: 'toolCall',
            video: 'video',
            vision: 'vision',
        };
    }
    static types() {
        return {
            audio: 'boolean',
            document: 'boolean',
            multiToolCall: 'boolean',
            reasoning: 'boolean',
            streamToolCall: 'boolean',
            toolCall: 'boolean',
            video: 'boolean',
            vision: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListModelsResponseBodyItemsCapabilities = ListModelsResponseBodyItemsCapabilities;
class ListModelsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            capabilities: 'capabilities',
            connectionId: 'connectionId',
            contextSize: 'contextSize',
            createdAt: 'createdAt',
            description: 'description',
            maxTokens: 'maxTokens',
            modelId: 'modelId',
            modelName: 'modelName',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            capabilities: ListModelsResponseBodyItemsCapabilities,
            connectionId: 'string',
            contextSize: 'number',
            createdAt: 'string',
            description: 'string',
            maxTokens: 'number',
            modelId: 'string',
            modelName: 'string',
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.capabilities && typeof this.capabilities.validate === 'function') {
            this.capabilities.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListModelsResponseBodyItems = ListModelsResponseBodyItems;
class ListModelsResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': ListModelsResponseBodyItems },
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
exports.ListModelsResponseBody = ListModelsResponseBody;
//# sourceMappingURL=ListModelsResponseBody.js.map