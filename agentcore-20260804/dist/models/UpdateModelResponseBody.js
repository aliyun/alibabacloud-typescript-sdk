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
exports.UpdateModelResponseBody = exports.UpdateModelResponseBodyData = exports.UpdateModelResponseBodyDataCapabilities = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateModelResponseBodyDataCapabilities extends $dara.Model {
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
exports.UpdateModelResponseBodyDataCapabilities = UpdateModelResponseBodyDataCapabilities;
class UpdateModelResponseBodyData extends $dara.Model {
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
            capabilities: UpdateModelResponseBodyDataCapabilities,
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
exports.UpdateModelResponseBodyData = UpdateModelResponseBodyData;
class UpdateModelResponseBody extends $dara.Model {
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
            data: UpdateModelResponseBodyData,
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
exports.UpdateModelResponseBody = UpdateModelResponseBody;
//# sourceMappingURL=UpdateModelResponseBody.js.map