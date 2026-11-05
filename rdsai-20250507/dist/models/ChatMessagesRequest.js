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
exports.ChatMessagesRequest = exports.ChatMessagesRequestInputs = exports.ChatMessagesRequestFiles = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ChatMessagesRequestFiles extends $dara.Model {
    static names() {
        return {
            transferMethod: 'TransferMethod',
            type: 'Type',
            uploadFileId: 'UploadFileId',
        };
    }
    static types() {
        return {
            transferMethod: 'string',
            type: 'string',
            uploadFileId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ChatMessagesRequestFiles = ChatMessagesRequestFiles;
class ChatMessagesRequestInputs extends $dara.Model {
    static names() {
        return {
            customAgentId: 'CustomAgentId',
            enableThinking: 'EnableThinking',
            language: 'Language',
            modelId: 'ModelId',
            regionId: 'RegionId',
            resumeCallId: 'ResumeCallId',
            thinkEffort: 'ThinkEffort',
            timezone: 'Timezone',
            toolApprovalMode: 'ToolApprovalMode',
            workspaceId: 'WorkspaceId',
        };
    }
    static types() {
        return {
            customAgentId: 'string',
            enableThinking: 'string',
            language: 'string',
            modelId: 'string',
            regionId: 'string',
            resumeCallId: 'string',
            thinkEffort: 'string',
            timezone: 'string',
            toolApprovalMode: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ChatMessagesRequestInputs = ChatMessagesRequestInputs;
class ChatMessagesRequest extends $dara.Model {
    static names() {
        return {
            conversationId: 'ConversationId',
            eventMode: 'EventMode',
            files: 'Files',
            inputs: 'Inputs',
            parentMessageId: 'ParentMessageId',
            query: 'Query',
        };
    }
    static types() {
        return {
            conversationId: 'string',
            eventMode: 'string',
            files: { 'type': 'array', 'itemType': ChatMessagesRequestFiles },
            inputs: ChatMessagesRequestInputs,
            parentMessageId: 'string',
            query: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.files)) {
            $dara.Model.validateArray(this.files);
        }
        if (this.inputs && typeof this.inputs.validate === 'function') {
            this.inputs.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ChatMessagesRequest = ChatMessagesRequest;
//# sourceMappingURL=ChatMessagesRequest.js.map