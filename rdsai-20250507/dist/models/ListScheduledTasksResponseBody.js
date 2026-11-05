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
exports.ListScheduledTasksResponseBody = exports.ListScheduledTasksResponseBodySchedules = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListScheduledTasksResponseBodySchedules extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            description: 'Description',
            frequency: 'Frequency',
            inspectionItems: 'InspectionItems',
            instanceCount: 'InstanceCount',
            name: 'Name',
            regionId: 'RegionId',
            reportLanguage: 'ReportLanguage',
            reportType: 'ReportType',
            scheduledId: 'ScheduledId',
            taskStartTime: 'TaskStartTime',
            templateId: 'TemplateId',
            templateName: 'TemplateName',
            timeRange: 'TimeRange',
        };
    }
    static types() {
        return {
            createTime: 'string',
            description: 'string',
            frequency: 'string',
            inspectionItems: 'string',
            instanceCount: 'number',
            name: 'string',
            regionId: 'string',
            reportLanguage: 'string',
            reportType: 'string',
            scheduledId: 'string',
            taskStartTime: 'string',
            templateId: 'string',
            templateName: 'string',
            timeRange: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListScheduledTasksResponseBodySchedules = ListScheduledTasksResponseBodySchedules;
class ListScheduledTasksResponseBody extends $dara.Model {
    static names() {
        return {
            message: 'Message',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            schedules: 'Schedules',
            success: 'Success',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            message: 'string',
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            schedules: { 'type': 'array', 'itemType': ListScheduledTasksResponseBodySchedules },
            success: 'boolean',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.schedules)) {
            $dara.Model.validateArray(this.schedules);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListScheduledTasksResponseBody = ListScheduledTasksResponseBody;
//# sourceMappingURL=ListScheduledTasksResponseBody.js.map