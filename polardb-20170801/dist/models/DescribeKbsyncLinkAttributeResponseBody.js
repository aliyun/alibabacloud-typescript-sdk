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
exports.DescribeKBSyncLinkAttributeResponseBody = exports.DescribeKBSyncLinkAttributeResponseBodyConfig = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeKBSyncLinkAttributeResponseBodyConfig extends $dara.Model {
    static names() {
        return {
            feishuChatMemberStaleTtlSeconds: 'FeishuChatMemberStaleTtlSeconds',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            feishuChatMemberStaleTtlSeconds: 'number',
            userId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKBSyncLinkAttributeResponseBodyConfig = DescribeKBSyncLinkAttributeResponseBodyConfig;
class DescribeKBSyncLinkAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            clientId: 'ClientId',
            config: 'Config',
            creationTime: 'CreationTime',
            description: 'Description',
            imPlatform: 'ImPlatform',
            linkId: 'LinkId',
            linkName: 'LinkName',
            requestId: 'RequestId',
            sourceDir: 'SourceDir',
            syncIntervalMinutes: 'SyncIntervalMinutes',
            syncStatus: 'SyncStatus',
        };
    }
    static types() {
        return {
            clientId: 'string',
            config: DescribeKBSyncLinkAttributeResponseBodyConfig,
            creationTime: 'string',
            description: 'string',
            imPlatform: 'string',
            linkId: 'string',
            linkName: 'string',
            requestId: 'string',
            sourceDir: 'string',
            syncIntervalMinutes: 'number',
            syncStatus: 'string',
        };
    }
    validate() {
        if (this.config && typeof this.config.validate === 'function') {
            this.config.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeKBSyncLinkAttributeResponseBody = DescribeKBSyncLinkAttributeResponseBody;
//# sourceMappingURL=DescribeKbsyncLinkAttributeResponseBody.js.map