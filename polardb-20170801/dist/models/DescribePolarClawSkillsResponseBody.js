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
exports.DescribePolarClawSkillsResponseBody = exports.DescribePolarClawSkillsResponseBodySkillList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarClawSkillsResponseBodySkillList extends $dara.Model {
    static names() {
        return {
            assessmentStatus: 'AssessmentStatus',
            availableToAgent: 'AvailableToAgent',
            disabled: 'Disabled',
            evaluationStatus: 'EvaluationStatus',
            fileCount: 'FileCount',
            path: 'Path',
            riskDetail: 'RiskDetail',
            size: 'Size',
            skillName: 'SkillName',
            skillVersion: 'SkillVersion',
            source: 'Source',
            status: 'Status',
            summary: 'Summary',
            title: 'Title',
        };
    }
    static types() {
        return {
            assessmentStatus: 'string',
            availableToAgent: 'boolean',
            disabled: 'boolean',
            evaluationStatus: 'string',
            fileCount: 'number',
            path: 'string',
            riskDetail: 'string',
            size: 'number',
            skillName: 'string',
            skillVersion: 'string',
            source: 'string',
            status: 'string',
            summary: 'string',
            title: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawSkillsResponseBodySkillList = DescribePolarClawSkillsResponseBodySkillList;
class DescribePolarClawSkillsResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            skillList: 'SkillList',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            skillList: { 'type': 'array', 'itemType': DescribePolarClawSkillsResponseBodySkillList },
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.skillList)) {
            $dara.Model.validateArray(this.skillList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawSkillsResponseBody = DescribePolarClawSkillsResponseBody;
//# sourceMappingURL=DescribePolarClawSkillsResponseBody.js.map