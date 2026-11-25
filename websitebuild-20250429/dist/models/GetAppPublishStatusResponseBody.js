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
exports.GetAppPublishStatusResponseBody = exports.GetAppPublishStatusResponseBodyModule = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetAppPublishStatusResponseBodyModule extends $dara.Model {
    static names() {
        return {
            artifactDigest: 'ArtifactDigest',
            auditId: 'AuditId',
            bindingId: 'BindingId',
            canQuickRevert: 'CanQuickRevert',
            candidateId: 'CandidateId',
            candidateStatus: 'CandidateStatus',
            commitHash: 'CommitHash',
            currentStep: 'CurrentStep',
            currentStepCode: 'CurrentStepCode',
            deployChannel: 'DeployChannel',
            description: 'Description',
            errorStep: 'ErrorStep',
            errorStepCode: 'ErrorStepCode',
            isFinish: 'IsFinish',
            isSuccess: 'IsSuccess',
            msg: 'Msg',
            orderType: 'OrderType',
            orderTypeCode: 'OrderTypeCode',
            percent: 'Percent',
            platformAppid: 'PlatformAppid',
            pluginDeclarationHash: 'PluginDeclarationHash',
            pluginState: 'PluginState',
            privacyDraftId: 'PrivacyDraftId',
            privacyRevision: 'PrivacyRevision',
            publishDiagnostics: 'PublishDiagnostics',
            publishEnv: 'PublishEnv',
            publishNumber: 'PublishNumber',
            publishOrderId: 'PublishOrderId',
            publishTime: 'PublishTime',
            readbackStatus: 'ReadbackStatus',
            siteId: 'SiteId',
            stepCodes: 'StepCodes',
            steps: 'Steps',
            subchannel: 'Subchannel',
            submitIntentStatus: 'SubmitIntentStatus',
            updatedAt: 'UpdatedAt',
            uploadAttemptId: 'UploadAttemptId',
            uploadLeaseState: 'UploadLeaseState',
            uploadSequence: 'UploadSequence',
            uploadTicketState: 'UploadTicketState',
        };
    }
    static types() {
        return {
            artifactDigest: 'string',
            auditId: 'string',
            bindingId: 'string',
            canQuickRevert: 'string',
            candidateId: 'string',
            candidateStatus: 'string',
            commitHash: 'string',
            currentStep: 'string',
            currentStepCode: 'string',
            deployChannel: 'string',
            description: 'string',
            errorStep: 'string',
            errorStepCode: 'string',
            isFinish: 'boolean',
            isSuccess: 'boolean',
            msg: 'string',
            orderType: 'string',
            orderTypeCode: 'string',
            percent: 'number',
            platformAppid: 'string',
            pluginDeclarationHash: 'string',
            pluginState: 'string',
            privacyDraftId: 'string',
            privacyRevision: 'string',
            publishDiagnostics: 'string',
            publishEnv: 'string',
            publishNumber: 'string',
            publishOrderId: 'number',
            publishTime: 'string',
            readbackStatus: 'string',
            siteId: 'string',
            stepCodes: { 'type': 'array', 'itemType': 'string' },
            steps: { 'type': 'array', 'itemType': 'string' },
            subchannel: 'string',
            submitIntentStatus: 'string',
            updatedAt: 'number',
            uploadAttemptId: 'string',
            uploadLeaseState: 'string',
            uploadSequence: 'number',
            uploadTicketState: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.stepCodes)) {
            $dara.Model.validateArray(this.stepCodes);
        }
        if (Array.isArray(this.steps)) {
            $dara.Model.validateArray(this.steps);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppPublishStatusResponseBodyModule = GetAppPublishStatusResponseBodyModule;
class GetAppPublishStatusResponseBody extends $dara.Model {
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
            module: GetAppPublishStatusResponseBodyModule,
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
exports.GetAppPublishStatusResponseBody = GetAppPublishStatusResponseBody;
//# sourceMappingURL=GetAppPublishStatusResponseBody.js.map