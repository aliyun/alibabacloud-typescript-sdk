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
exports.ChatMessagesResponseBody = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ChatMessagesResponseBody extends $dara.Model {
    static names() {
        return {
            answer: 'Answer',
            approvalStatus: 'ApprovalStatus',
            callId: 'CallId',
            conversationId: 'ConversationId',
            createdAt: 'CreatedAt',
            description: 'Description',
            event: 'Event',
            id: 'Id',
            messageId: 'MessageId',
            mode: 'Mode',
            requestId: 'RequestId',
            roundId: 'RoundId',
            taskId: 'TaskId',
            toolArguments: 'ToolArguments',
            toolName: 'ToolName',
        };
    }
    static types() {
        return {
            answer: 'string',
            approvalStatus: 'string',
            callId: 'string',
            conversationId: 'string',
            createdAt: 'number',
            description: 'string',
            event: 'string',
            id: 'string',
            messageId: 'string',
            mode: 'string',
            requestId: 'string',
            roundId: 'string',
            taskId: 'string',
            toolArguments: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            toolName: 'string',
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
exports.ChatMessagesResponseBody = ChatMessagesResponseBody;
//# sourceMappingURL=ChatMessagesResponseBody.js.map