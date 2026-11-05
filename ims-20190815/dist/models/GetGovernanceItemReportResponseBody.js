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
exports.GetGovernanceItemReportResponseBody = exports.GetGovernanceItemReportResponseBodyColumnsValue = exports.GetGovernanceItemReportResponseBodyColumnsValueColumnRow = exports.GetGovernanceItemReportResponseBodyColumnsSchema = exports.GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema extends $dara.Model {
    static names() {
        return {
            columnName: 'ColumnName',
            columnType: 'ColumnType',
        };
    }
    static types() {
        return {
            columnName: 'string',
            columnType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema = GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema;
class GetGovernanceItemReportResponseBodyColumnsSchema extends $dara.Model {
    static names() {
        return {
            columnSchema: 'ColumnSchema',
        };
    }
    static types() {
        return {
            columnSchema: { 'type': 'array', 'itemType': GetGovernanceItemReportResponseBodyColumnsSchemaColumnSchema },
        };
    }
    validate() {
        if (Array.isArray(this.columnSchema)) {
            $dara.Model.validateArray(this.columnSchema);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetGovernanceItemReportResponseBodyColumnsSchema = GetGovernanceItemReportResponseBodyColumnsSchema;
class GetGovernanceItemReportResponseBodyColumnsValueColumnRow extends $dara.Model {
    static names() {
        return {
            columnValue: 'ColumnValue',
        };
    }
    static types() {
        return {
            columnValue: { 'type': 'array', 'itemType': 'any' },
        };
    }
    validate() {
        if (Array.isArray(this.columnValue)) {
            $dara.Model.validateArray(this.columnValue);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetGovernanceItemReportResponseBodyColumnsValueColumnRow = GetGovernanceItemReportResponseBodyColumnsValueColumnRow;
class GetGovernanceItemReportResponseBodyColumnsValue extends $dara.Model {
    static names() {
        return {
            columnRow: 'ColumnRow',
        };
    }
    static types() {
        return {
            columnRow: { 'type': 'array', 'itemType': GetGovernanceItemReportResponseBodyColumnsValueColumnRow },
        };
    }
    validate() {
        if (Array.isArray(this.columnRow)) {
            $dara.Model.validateArray(this.columnRow);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetGovernanceItemReportResponseBodyColumnsValue = GetGovernanceItemReportResponseBodyColumnsValue;
class GetGovernanceItemReportResponseBody extends $dara.Model {
    static names() {
        return {
            columnsSchema: 'ColumnsSchema',
            columnsValue: 'ColumnsValue',
            generateTime: 'GenerateTime',
            isTruncated: 'IsTruncated',
            marker: 'Marker',
            metricType: 'MetricType',
            metricValue: 'MetricValue',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            columnsSchema: GetGovernanceItemReportResponseBodyColumnsSchema,
            columnsValue: GetGovernanceItemReportResponseBodyColumnsValue,
            generateTime: 'string',
            isTruncated: 'boolean',
            marker: 'string',
            metricType: 'string',
            metricValue: 'any',
            requestId: 'string',
        };
    }
    validate() {
        if (this.columnsSchema && typeof this.columnsSchema.validate === 'function') {
            this.columnsSchema.validate();
        }
        if (this.columnsValue && typeof this.columnsValue.validate === 'function') {
            this.columnsValue.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetGovernanceItemReportResponseBody = GetGovernanceItemReportResponseBody;
//# sourceMappingURL=GetGovernanceItemReportResponseBody.js.map