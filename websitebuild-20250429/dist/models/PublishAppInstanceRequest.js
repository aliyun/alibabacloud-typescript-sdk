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
exports.PublishAppInstanceRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class PublishAppInstanceRequest extends $dara.Model {
    static names() {
        return {
            artifactDigest: 'ArtifactDigest',
            bizId: 'BizId',
            candidateId: 'CandidateId',
            deployChannel: 'DeployChannel',
            description: 'Description',
            ext: 'Ext',
            idempotencyKey: 'IdempotencyKey',
            logicalNumber: 'LogicalNumber',
            platformAppid: 'PlatformAppid',
            pluginDeclarationHash: 'PluginDeclarationHash',
            privacyDraftId: 'PrivacyDraftId',
            privacyRevision: 'PrivacyRevision',
            publishNumber: 'PublishNumber',
            publishOrderId: 'PublishOrderId',
            uploadSequence: 'UploadSequence',
            weappAction: 'WeappAction',
        };
    }
    static types() {
        return {
            artifactDigest: 'string',
            bizId: 'string',
            candidateId: 'string',
            deployChannel: 'string',
            description: 'string',
            ext: 'string',
            idempotencyKey: 'string',
            logicalNumber: 'number',
            platformAppid: 'string',
            pluginDeclarationHash: 'string',
            privacyDraftId: 'string',
            privacyRevision: 'string',
            publishNumber: 'string',
            publishOrderId: 'number',
            uploadSequence: 'number',
            weappAction: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.PublishAppInstanceRequest = PublishAppInstanceRequest;
//# sourceMappingURL=PublishAppInstanceRequest.js.map