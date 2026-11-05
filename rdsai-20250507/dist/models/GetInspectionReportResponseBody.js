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
exports.GetInspectionReportResponseBody = exports.GetInspectionReportResponseBodyData = exports.GetInspectionReportResponseBodyDataLevelSummary = exports.GetInspectionReportResponseBodyDataData = exports.GetInspectionReportResponseBodyDataDataItems = exports.GetInspectionReportResponseBodyDataDataItemsData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetInspectionReportResponseBodyDataDataItemsData extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetInspectionReportResponseBodyDataDataItemsData = GetInspectionReportResponseBodyDataDataItemsData;
class GetInspectionReportResponseBodyDataDataItems extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            level: 'Level',
            message: 'Message',
            name: 'Name',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': GetInspectionReportResponseBodyDataDataItemsData },
            level: 'string',
            message: 'string',
            name: 'string',
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
exports.GetInspectionReportResponseBodyDataDataItems = GetInspectionReportResponseBodyDataDataItems;
class GetInspectionReportResponseBodyDataData extends $dara.Model {
    static names() {
        return {
            group: 'Group',
            items: 'Items',
        };
    }
    static types() {
        return {
            group: 'string',
            items: { 'type': 'array', 'itemType': GetInspectionReportResponseBodyDataDataItems },
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetInspectionReportResponseBodyDataData = GetInspectionReportResponseBodyDataData;
class GetInspectionReportResponseBodyDataLevelSummary extends $dara.Model {
    static names() {
        return {
            error: 'Error',
            failed: 'Failed',
            normal: 'Normal',
            warning: 'Warning',
        };
    }
    static types() {
        return {
            error: 'number',
            failed: 'number',
            normal: 'number',
            warning: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetInspectionReportResponseBodyDataLevelSummary = GetInspectionReportResponseBodyDataLevelSummary;
class GetInspectionReportResponseBodyData extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            endTime: 'EndTime',
            engineType: 'EngineType',
            instanceDesc: 'InstanceDesc',
            instanceId: 'InstanceId',
            levelSummary: 'LevelSummary',
            markdownText: 'MarkdownText',
            region: 'Region',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': GetInspectionReportResponseBodyDataData },
            endTime: 'string',
            engineType: 'string',
            instanceDesc: 'string',
            instanceId: 'string',
            levelSummary: GetInspectionReportResponseBodyDataLevelSummary,
            markdownText: 'string',
            region: 'string',
            startTime: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        if (this.levelSummary && typeof this.levelSummary.validate === 'function') {
            this.levelSummary.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetInspectionReportResponseBodyData = GetInspectionReportResponseBodyData;
class GetInspectionReportResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            markdownText: 'MarkdownText',
            requestId: 'RequestId',
            taskId: 'TaskId',
            templateId: 'TemplateId',
            templateName: 'TemplateName',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': GetInspectionReportResponseBodyData },
            markdownText: 'string',
            requestId: 'string',
            taskId: 'string',
            templateId: 'string',
            templateName: 'string',
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
exports.GetInspectionReportResponseBody = GetInspectionReportResponseBody;
//# sourceMappingURL=GetInspectionReportResponseBody.js.map