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
exports.GetMessagesResponseBody = exports.GetMessagesResponseBodyData = exports.GetMessagesResponseBodyDataMessageFiles = exports.GetMessagesResponseBodyDataEvents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetMessagesResponseBodyDataEvents extends $dara.Model {
    static names() {
        return {
            approvalStatus: 'ApprovalStatus',
            callId: 'CallId',
            conversationId: 'ConversationId',
            description: 'Description',
            messageId: 'MessageId',
            roundId: 'RoundId',
            toolArguments: 'ToolArguments',
            toolName: 'ToolName',
            answer: 'answer',
            event: 'event',
        };
    }
    static types() {
        return {
            approvalStatus: 'string',
            callId: 'string',
            conversationId: 'string',
            description: 'string',
            messageId: 'string',
            roundId: 'string',
            toolArguments: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            toolName: 'string',
            answer: 'string',
            event: 'string',
        };
    }
    validate() {
        if (this.toolArguments) {
            $dara.Model.validateMap(this.toolArguments);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMessagesResponseBodyDataEvents = GetMessagesResponseBodyDataEvents;
class GetMessagesResponseBodyDataMessageFiles extends $dara.Model {
    static names() {
        return {
            id: 'Id',
            previewUrl: 'PreviewUrl',
            type: 'Type',
            uploadFileId: 'UploadFileId',
        };
    }
    static types() {
        return {
            id: 'string',
            previewUrl: 'string',
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
exports.GetMessagesResponseBodyDataMessageFiles = GetMessagesResponseBodyDataMessageFiles;
class GetMessagesResponseBodyData extends $dara.Model {
    static names() {
        return {
            answer: 'Answer',
            conversationId: 'ConversationId',
            createdAt: 'CreatedAt',
            events: 'Events',
            feedback: 'Feedback',
            generationFinishedAt: 'GenerationFinishedAt',
            generationStartedAt: 'GenerationStartedAt',
            generationStatus: 'GenerationStatus',
            id: 'Id',
            lastSentEntryId: 'LastSentEntryId',
            messageFiles: 'MessageFiles',
            query: 'Query',
            retrieverResources: 'RetrieverResources',
            streamKey: 'StreamKey',
        };
    }
    static types() {
        return {
            answer: 'string',
            conversationId: 'string',
            createdAt: 'string',
            events: { 'type': 'array', 'itemType': GetMessagesResponseBodyDataEvents },
            feedback: 'string',
            generationFinishedAt: 'string',
            generationStartedAt: 'string',
            generationStatus: 'string',
            id: 'string',
            lastSentEntryId: 'string',
            messageFiles: { 'type': 'array', 'itemType': GetMessagesResponseBodyDataMessageFiles },
            query: 'string',
            retrieverResources: { 'type': 'array', 'itemType': 'any' },
            streamKey: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.events)) {
            $dara.Model.validateArray(this.events);
        }
        if (Array.isArray(this.messageFiles)) {
            $dara.Model.validateArray(this.messageFiles);
        }
        if (Array.isArray(this.retrieverResources)) {
            $dara.Model.validateArray(this.retrieverResources);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMessagesResponseBodyData = GetMessagesResponseBodyData;
class GetMessagesResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            hasMore: 'HasMore',
            limit: 'Limit',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': GetMessagesResponseBodyData },
            hasMore: 'boolean',
            limit: 'number',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMessagesResponseBody = GetMessagesResponseBody;
//# sourceMappingURL=GetMessagesResponseBody.js.map