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
exports.DescribeMOUsageDetailExportResponseBody = exports.DescribeMOUsageDetailExportResponseBodyData = exports.DescribeMOUsageDetailExportResponseBodyDataFilters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeMOUsageDetailExportResponseBodyDataFilters extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            endTime: 'EndTime',
            instanceId: 'InstanceId',
            model: 'Model',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            endTime: 'string',
            instanceId: 'string',
            model: 'string',
            startTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMOUsageDetailExportResponseBodyDataFilters = DescribeMOUsageDetailExportResponseBodyDataFilters;
class DescribeMOUsageDetailExportResponseBodyData extends $dara.Model {
    static names() {
        return {
            completedAt: 'CompletedAt',
            createdAt: 'CreatedAt',
            downloadUrl: 'DownloadUrl',
            errorMessage: 'ErrorMessage',
            expiresAt: 'ExpiresAt',
            fileSize: 'FileSize',
            filters: 'Filters',
            format: 'Format',
            rowCount: 'RowCount',
            status: 'Status',
        };
    }
    static types() {
        return {
            completedAt: 'string',
            createdAt: 'string',
            downloadUrl: 'string',
            errorMessage: 'string',
            expiresAt: 'string',
            fileSize: 'number',
            filters: DescribeMOUsageDetailExportResponseBodyDataFilters,
            format: 'string',
            rowCount: 'number',
            status: 'string',
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
exports.DescribeMOUsageDetailExportResponseBodyData = DescribeMOUsageDetailExportResponseBodyData;
class DescribeMOUsageDetailExportResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            data: DescribeMOUsageDetailExportResponseBodyData,
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
exports.DescribeMOUsageDetailExportResponseBody = DescribeMOUsageDetailExportResponseBody;
//# sourceMappingURL=DescribeMousageDetailExportResponseBody.js.map