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
exports.PrecheckSkillUploadViaOssResponseBody = exports.PrecheckSkillUploadViaOssResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class PrecheckSkillUploadViaOssResponseBodyData extends $dara.Model {
    static names() {
        return {
            draftMode: 'draftMode',
            editingVersion: 'editingVersion',
            entryPath: 'entryPath',
            exists: 'exists',
            headRevision: 'headRevision',
            headStatus: 'headStatus',
            maxPublishedVersion: 'maxPublishedVersion',
            owner: 'owner',
            parsedVersion: 'parsedVersion',
            precheckCode: 'precheckCode',
            reason: 'reason',
            reviewingVersion: 'reviewingVersion',
            skillName: 'skillName',
            targetVersion: 'targetVersion',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            draftMode: 'string',
            editingVersion: 'string',
            entryPath: 'string',
            exists: 'boolean',
            headRevision: 'string',
            headStatus: 'string',
            maxPublishedVersion: 'string',
            owner: 'string',
            parsedVersion: 'string',
            precheckCode: 'string',
            reason: 'string',
            reviewingVersion: 'string',
            skillName: 'string',
            targetVersion: 'string',
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
exports.PrecheckSkillUploadViaOssResponseBodyData = PrecheckSkillUploadViaOssResponseBodyData;
class PrecheckSkillUploadViaOssResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'data',
            requestId: 'requestId',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': PrecheckSkillUploadViaOssResponseBodyData },
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
exports.PrecheckSkillUploadViaOssResponseBody = PrecheckSkillUploadViaOssResponseBody;
//# sourceMappingURL=PrecheckSkillUploadViaOssResponseBody.js.map