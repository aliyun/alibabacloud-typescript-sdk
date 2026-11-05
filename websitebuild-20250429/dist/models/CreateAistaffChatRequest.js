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
exports.CreateAIStaffChatRequest = exports.CreateAIStaffChatRequestMessages = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateAIStaffChatRequestMessages extends $dara.Model {
    static names() {
        return {
            content: 'Content',
            contentType: 'ContentType',
            metaData: 'MetaData',
            role: 'Role',
            type: 'Type',
        };
    }
    static types() {
        return {
            content: 'string',
            contentType: 'string',
            metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            role: 'string',
            type: 'string',
        };
    }
    validate() {
        if (this.metaData) {
            $dara.Model.validateMap(this.metaData);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateAIStaffChatRequestMessages = CreateAIStaffChatRequestMessages;
class CreateAIStaffChatRequest extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            chatId: 'ChatId',
            conversationId: 'ConversationId',
            messages: 'Messages',
            metaData: 'MetaData',
        };
    }
    static types() {
        return {
            bizId: 'string',
            chatId: 'string',
            conversationId: 'string',
            messages: { 'type': 'array', 'itemType': CreateAIStaffChatRequestMessages },
            metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.messages)) {
            $dara.Model.validateArray(this.messages);
        }
        if (this.metaData) {
            $dara.Model.validateMap(this.metaData);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateAIStaffChatRequest = CreateAIStaffChatRequest;
//# sourceMappingURL=CreateAistaffChatRequest.js.map