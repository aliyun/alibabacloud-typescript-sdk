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
exports.GetContextDatabaseSyncRunResponseBody = exports.GetContextDatabaseSyncRunResponseBodyData = exports.GetContextDatabaseSyncRunResponseBodyDataSummary = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetContextDatabaseSyncRunResponseBodyDataSummary extends $dara.Model {
    static names() {
        return {
            cancelled: 'Cancelled',
            deferred: 'Deferred',
            failed: 'Failed',
            metadataUpdated: 'MetadataUpdated',
            processing: 'Processing',
            skipped: 'Skipped',
            unchanged: 'Unchanged',
            uploadAccepted: 'UploadAccepted',
            uploaded: 'Uploaded',
        };
    }
    static types() {
        return {
            cancelled: 'number',
            deferred: 'number',
            failed: 'number',
            metadataUpdated: 'number',
            processing: 'number',
            skipped: 'number',
            unchanged: 'number',
            uploadAccepted: 'number',
            uploaded: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetContextDatabaseSyncRunResponseBodyDataSummary = GetContextDatabaseSyncRunResponseBodyDataSummary;
class GetContextDatabaseSyncRunResponseBodyData extends $dara.Model {
    static names() {
        return {
            attempt: 'Attempt',
            cancelRequestedAt: 'CancelRequestedAt',
            dryRun: 'DryRun',
            finishedAt: 'FinishedAt',
            jobConfigVersion: 'JobConfigVersion',
            jobId: 'JobId',
            jobName: 'JobName',
            knowledgeBaseId: 'KnowledgeBaseId',
            lastError: 'LastError',
            pluginRef: 'PluginRef',
            requestId: 'RequestId',
            runId: 'RunId',
            scheduledAt: 'ScheduledAt',
            startedAt: 'StartedAt',
            status: 'Status',
            summary: 'Summary',
            trigger: 'Trigger',
        };
    }
    static types() {
        return {
            attempt: 'number',
            cancelRequestedAt: 'string',
            dryRun: 'boolean',
            finishedAt: 'string',
            jobConfigVersion: 'number',
            jobId: 'string',
            jobName: 'string',
            knowledgeBaseId: 'string',
            lastError: 'string',
            pluginRef: 'string',
            requestId: 'string',
            runId: 'string',
            scheduledAt: 'string',
            startedAt: 'string',
            status: 'string',
            summary: GetContextDatabaseSyncRunResponseBodyDataSummary,
            trigger: 'string',
        };
    }
    validate() {
        if (this.summary && typeof this.summary.validate === 'function') {
            this.summary.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetContextDatabaseSyncRunResponseBodyData = GetContextDatabaseSyncRunResponseBodyData;
class GetContextDatabaseSyncRunResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            data: 'Data',
            httpStatusCode: 'HttpStatusCode',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: GetContextDatabaseSyncRunResponseBodyData,
            httpStatusCode: 'number',
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetContextDatabaseSyncRunResponseBody = GetContextDatabaseSyncRunResponseBody;
//# sourceMappingURL=GetContextDatabaseSyncRunResponseBody.js.map