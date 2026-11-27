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
exports.UpdateKBSyncLinkRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateKBSyncLinkRequest extends $dara.Model {
    static names() {
        return {
            aiTableMcpEndpoint: 'AiTableMcpEndpoint',
            chatMemberStaleTtlSeconds: 'ChatMemberStaleTtlSeconds',
            clientId: 'ClientId',
            clientSecret: 'ClientSecret',
            feishuChatMemberStaleTtlSeconds: 'FeishuChatMemberStaleTtlSeconds',
            knowledgeBaseId: 'KnowledgeBaseId',
            linkId: 'LinkId',
            mcpEndpoint: 'McpEndpoint',
            regionId: 'RegionId',
            selectionMode: 'SelectionMode',
            selectionRules: 'SelectionRules',
            sheetMcpEndpoint: 'SheetMcpEndpoint',
            sourceDeleteSyncEnabled: 'SourceDeleteSyncEnabled',
            syncEnabled: 'SyncEnabled',
            syncIntervalMinutes: 'SyncIntervalMinutes',
            userAccessToken: 'UserAccessToken',
            userId: 'UserId',
            userRefreshToken: 'UserRefreshToken',
        };
    }
    static types() {
        return {
            aiTableMcpEndpoint: 'string',
            chatMemberStaleTtlSeconds: 'number',
            clientId: 'string',
            clientSecret: 'string',
            feishuChatMemberStaleTtlSeconds: 'number',
            knowledgeBaseId: 'string',
            linkId: 'string',
            mcpEndpoint: 'string',
            regionId: 'string',
            selectionMode: 'string',
            selectionRules: 'string',
            sheetMcpEndpoint: 'string',
            sourceDeleteSyncEnabled: 'boolean',
            syncEnabled: 'boolean',
            syncIntervalMinutes: 'number',
            userAccessToken: 'string',
            userId: 'string',
            userRefreshToken: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateKBSyncLinkRequest = UpdateKBSyncLinkRequest;
//# sourceMappingURL=UpdateKbsyncLinkRequest.js.map