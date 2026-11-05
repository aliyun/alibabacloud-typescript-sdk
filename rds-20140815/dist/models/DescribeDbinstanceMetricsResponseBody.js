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
exports.DescribeDBInstanceMetricsResponseBody = exports.DescribeDBInstanceMetricsResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceMetricsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            dimension: 'Dimension',
            groupKey: 'GroupKey',
            groupKeyType: 'GroupKeyType',
            method: 'Method',
            metricsKey: 'MetricsKey',
            metricsKeyAlias: 'MetricsKeyAlias',
            sortRule: 'SortRule',
            unit: 'Unit',
        };
    }
    static types() {
        return {
            description: 'string',
            dimension: 'string',
            groupKey: 'string',
            groupKeyType: 'string',
            method: 'string',
            metricsKey: 'string',
            metricsKeyAlias: 'string',
            sortRule: 'number',
            unit: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceMetricsResponseBodyItems = DescribeDBInstanceMetricsResponseBodyItems;
class DescribeDBInstanceMetricsResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceName: 'DBInstanceName',
            items: 'Items',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            DBInstanceName: 'string',
            items: { 'type': 'array', 'itemType': DescribeDBInstanceMetricsResponseBodyItems },
            requestId: 'string',
            totalRecordCount: 'number',
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
exports.DescribeDBInstanceMetricsResponseBody = DescribeDBInstanceMetricsResponseBody;
//# sourceMappingURL=DescribeDbinstanceMetricsResponseBody.js.map