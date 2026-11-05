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
exports.UpdateAppChatMessageResponseBody = exports.UpdateAppChatMessageResponseBodyModule = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateAppChatMessageResponseBodyModule extends $dara.Model {
    static names() {
        return {
            botId: 'BotId',
            chatId: 'ChatId',
            chatStatus: 'ChatStatus',
            content: 'Content',
            contentType: 'ContentType',
            conversationId: 'ConversationId',
            gmtCreateTime: 'GmtCreateTime',
            gmtModifiedTime: 'GmtModifiedTime',
            messageId: 'MessageId',
            metaData: 'MetaData',
            no: 'No',
            role: 'Role',
            sectionId: 'SectionId',
            siteId: 'SiteId',
            type: 'Type',
        };
    }
    static types() {
        return {
            botId: 'string',
            chatId: 'string',
            chatStatus: 'string',
            content: 'string',
            contentType: 'string',
            conversationId: 'string',
            gmtCreateTime: 'string',
            gmtModifiedTime: 'string',
            messageId: 'string',
            metaData: 'string',
            no: 'number',
            role: 'string',
            sectionId: 'string',
            siteId: 'string',
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateAppChatMessageResponseBodyModule = UpdateAppChatMessageResponseBodyModule;
class UpdateAppChatMessageResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            allowRetry: 'AllowRetry',
            appName: 'AppName',
            dynamicCode: 'DynamicCode',
            dynamicMessage: 'DynamicMessage',
            errorArgs: 'ErrorArgs',
            module: 'Module',
            requestId: 'RequestId',
            rootErrorCode: 'RootErrorCode',
            rootErrorMsg: 'RootErrorMsg',
            synchro: 'Synchro',
        };
    }
    static types() {
        return {
            accessDeniedDetail: 'string',
            allowRetry: 'boolean',
            appName: 'string',
            dynamicCode: 'string',
            dynamicMessage: 'string',
            errorArgs: { 'type': 'array', 'itemType': 'any' },
            module: UpdateAppChatMessageResponseBodyModule,
            requestId: 'string',
            rootErrorCode: 'string',
            rootErrorMsg: 'string',
            synchro: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.errorArgs)) {
            $dara.Model.validateArray(this.errorArgs);
        }
        if (this.module && typeof this.module.validate === 'function') {
            this.module.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateAppChatMessageResponseBody = UpdateAppChatMessageResponseBody;
//# sourceMappingURL=UpdateAppChatMessageResponseBody.js.map