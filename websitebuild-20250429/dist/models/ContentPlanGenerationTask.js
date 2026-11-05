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
exports.ContentPlanGenerationTask = exports.ContentPlanGenerationTaskAnalysis = exports.ContentPlanGenerationTaskAnalysisModules = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ContentPlanGenerationTaskAnalysisModules extends $dara.Model {
    static names() {
        return {
            content: 'Content',
            keyQuestions: 'KeyQuestions',
            title: 'Title',
        };
    }
    static types() {
        return {
            content: 'string',
            keyQuestions: { 'type': 'array', 'itemType': 'string' },
            title: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.keyQuestions)) {
            $dara.Model.validateArray(this.keyQuestions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ContentPlanGenerationTaskAnalysisModules = ContentPlanGenerationTaskAnalysisModules;
class ContentPlanGenerationTaskAnalysis extends $dara.Model {
    static names() {
        return {
            modules: 'Modules',
            referenceWritingNotes: 'ReferenceWritingNotes',
            summary: 'Summary',
        };
    }
    static types() {
        return {
            modules: { 'type': 'array', 'itemType': ContentPlanGenerationTaskAnalysisModules },
            referenceWritingNotes: { 'type': 'array', 'itemType': 'string' },
            summary: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.modules)) {
            $dara.Model.validateArray(this.modules);
        }
        if (Array.isArray(this.referenceWritingNotes)) {
            $dara.Model.validateArray(this.referenceWritingNotes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ContentPlanGenerationTaskAnalysis = ContentPlanGenerationTaskAnalysis;
class ContentPlanGenerationTask extends $dara.Model {
    static names() {
        return {
            analysis: 'Analysis',
            analysisTaskId: 'AnalysisTaskId',
            configRevision: 'ConfigRevision',
            diagnosisTaskId: 'DiagnosisTaskId',
            errorCode: 'ErrorCode',
            errorMessage: 'ErrorMessage',
            planId: 'PlanId',
            progress: 'Progress',
            projectId: 'ProjectId',
            reportConfigRevision: 'ReportConfigRevision',
            staleConfig: 'StaleConfig',
            status: 'Status',
            submittedAt: 'SubmittedAt',
            taskId: 'TaskId',
            taskType: 'TaskType',
            updatedAt: 'UpdatedAt',
        };
    }
    static types() {
        return {
            analysis: ContentPlanGenerationTaskAnalysis,
            analysisTaskId: 'string',
            configRevision: 'number',
            diagnosisTaskId: 'string',
            errorCode: 'string',
            errorMessage: 'string',
            planId: 'string',
            progress: 'number',
            projectId: 'string',
            reportConfigRevision: 'number',
            staleConfig: 'boolean',
            status: 'string',
            submittedAt: 'number',
            taskId: 'string',
            taskType: 'string',
            updatedAt: 'number',
        };
    }
    validate() {
        if (this.analysis && typeof this.analysis.validate === 'function') {
            this.analysis.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ContentPlanGenerationTask = ContentPlanGenerationTask;
//# sourceMappingURL=ContentPlanGenerationTask.js.map