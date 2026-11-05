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
exports.GetStandAloneReportsResponseBody = exports.GetStandAloneReportsResponseBodyReports = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetStandAloneReportsResponseBodyReports extends $dara.Model {
    static names() {
        return {
            createdTime: 'CreatedTime',
            endTime: 'EndTime',
            inspectionItems: 'InspectionItems',
            regionId: 'RegionId',
            reportLanguage: 'ReportLanguage',
            reportType: 'ReportType',
            startTime: 'StartTime',
            status: 'Status',
            taskId: 'TaskId',
            templateId: 'TemplateId',
            templateName: 'TemplateName',
        };
    }
    static types() {
        return {
            createdTime: 'string',
            endTime: 'string',
            inspectionItems: 'string',
            regionId: 'string',
            reportLanguage: 'string',
            reportType: 'string',
            startTime: 'string',
            status: 'string',
            taskId: 'string',
            templateId: 'string',
            templateName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetStandAloneReportsResponseBodyReports = GetStandAloneReportsResponseBodyReports;
class GetStandAloneReportsResponseBody extends $dara.Model {
    static names() {
        return {
            message: 'Message',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            reports: 'Reports',
            requestId: 'RequestId',
            success: 'Success',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            message: 'string',
            pageNumber: 'number',
            pageSize: 'number',
            reports: { 'type': 'array', 'itemType': GetStandAloneReportsResponseBodyReports },
            requestId: 'string',
            success: 'boolean',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.reports)) {
            $dara.Model.validateArray(this.reports);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetStandAloneReportsResponseBody = GetStandAloneReportsResponseBody;
//# sourceMappingURL=GetStandAloneReportsResponseBody.js.map