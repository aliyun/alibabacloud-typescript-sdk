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
exports.ListContextDatabaseSyncJobsResponseBody = exports.ListContextDatabaseSyncJobsResponseBodyData = exports.ListContextDatabaseSyncJobsResponseBodyDataJobs = exports.ListContextDatabaseSyncJobsResponseBodyDataJobsFilters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListContextDatabaseSyncJobsResponseBodyDataJobsFilters extends $dara.Model {
    static names() {
        return {
            exclude: 'Exclude',
            excludedDocumentIds: 'ExcludedDocumentIds',
            include: 'Include',
            sizeLimit: 'SizeLimit',
            typeAllowlist: 'TypeAllowlist',
        };
    }
    static types() {
        return {
            exclude: { 'type': 'array', 'itemType': 'string' },
            excludedDocumentIds: { 'type': 'array', 'itemType': 'string' },
            include: { 'type': 'array', 'itemType': 'string' },
            sizeLimit: 'number',
            typeAllowlist: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.exclude)) {
            $dara.Model.validateArray(this.exclude);
        }
        if (Array.isArray(this.excludedDocumentIds)) {
            $dara.Model.validateArray(this.excludedDocumentIds);
        }
        if (Array.isArray(this.include)) {
            $dara.Model.validateArray(this.include);
        }
        if (Array.isArray(this.typeAllowlist)) {
            $dara.Model.validateArray(this.typeAllowlist);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncJobsResponseBodyDataJobsFilters = ListContextDatabaseSyncJobsResponseBodyDataJobsFilters;
class ListContextDatabaseSyncJobsResponseBodyDataJobs extends $dara.Model {
    static names() {
        return {
            autoPauseReason: 'AutoPauseReason',
            autoPaused: 'AutoPaused',
            configVersion: 'ConfigVersion',
            enabled: 'Enabled',
            filters: 'Filters',
            id: 'Id',
            knowledgeBaseId: 'KnowledgeBaseId',
            name: 'Name',
            nextRunAt: 'NextRunAt',
            scheduleType: 'ScheduleType',
            sourceId: 'SourceId',
            targetId: 'TargetId',
        };
    }
    static types() {
        return {
            autoPauseReason: 'string',
            autoPaused: 'boolean',
            configVersion: 'number',
            enabled: 'boolean',
            filters: ListContextDatabaseSyncJobsResponseBodyDataJobsFilters,
            id: 'string',
            knowledgeBaseId: 'string',
            name: 'string',
            nextRunAt: 'string',
            scheduleType: 'string',
            sourceId: 'string',
            targetId: 'string',
        };
    }
    validate() {
        if (this.filters && typeof this.filters.validate === 'function') {
            this.filters.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncJobsResponseBodyDataJobs = ListContextDatabaseSyncJobsResponseBodyDataJobs;
class ListContextDatabaseSyncJobsResponseBodyData extends $dara.Model {
    static names() {
        return {
            jobs: 'Jobs',
            page: 'Page',
            pageSize: 'PageSize',
            total: 'Total',
        };
    }
    static types() {
        return {
            jobs: { 'type': 'array', 'itemType': ListContextDatabaseSyncJobsResponseBodyDataJobs },
            page: 'number',
            pageSize: 'number',
            total: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.jobs)) {
            $dara.Model.validateArray(this.jobs);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncJobsResponseBodyData = ListContextDatabaseSyncJobsResponseBodyData;
class ListContextDatabaseSyncJobsResponseBody extends $dara.Model {
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
            data: ListContextDatabaseSyncJobsResponseBodyData,
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
exports.ListContextDatabaseSyncJobsResponseBody = ListContextDatabaseSyncJobsResponseBody;
//# sourceMappingURL=ListContextDatabaseSyncJobsResponseBody.js.map