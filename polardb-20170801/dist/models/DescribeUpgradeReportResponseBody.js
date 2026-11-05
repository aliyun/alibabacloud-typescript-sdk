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
exports.DescribeUpgradeReportResponseBody = exports.DescribeUpgradeReportResponseBodyUpgradeReportList = exports.DescribeUpgradeReportResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeUpgradeReportResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DDL: 'DDL',
            name: 'Name',
            schema: 'Schema',
            status: 'Status',
            type: 'Type',
        };
    }
    static types() {
        return {
            DDL: 'string',
            name: 'string',
            schema: 'string',
            status: 'string',
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUpgradeReportResponseBodyItems = DescribeUpgradeReportResponseBodyItems;
class DescribeUpgradeReportResponseBodyUpgradeReportList extends $dara.Model {
    static names() {
        return {
            checkTime: 'CheckTime',
            dstVersion: 'DstVersion',
            effectiveTime: 'EffectiveTime',
            endTime: 'EndTime',
            result: 'Result',
            srcInsName: 'SrcInsName',
            srcVersion: 'SrcVersion',
            startTime: 'StartTime',
            taskId: 'TaskId',
            upgradeMode: 'UpgradeMode',
        };
    }
    static types() {
        return {
            checkTime: 'string',
            dstVersion: 'string',
            effectiveTime: 'string',
            endTime: 'string',
            result: 'string',
            srcInsName: 'string',
            srcVersion: 'string',
            startTime: 'string',
            taskId: 'string',
            upgradeMode: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUpgradeReportResponseBodyUpgradeReportList = DescribeUpgradeReportResponseBodyUpgradeReportList;
class DescribeUpgradeReportResponseBody extends $dara.Model {
    static names() {
        return {
            details: 'Details',
            dstDBType: 'DstDBType',
            items: 'Items',
            itemsSize: 'ItemsSize',
            requestId: 'RequestId',
            sourceDBClusterId: 'SourceDBClusterId',
            srcDBType: 'SrcDBType',
            srcDeleted: 'SrcDeleted',
            totalSize: 'TotalSize',
            type: 'Type',
            upgradeReportList: 'UpgradeReportList',
        };
    }
    static types() {
        return {
            details: 'string',
            dstDBType: 'string',
            items: { 'type': 'array', 'itemType': DescribeUpgradeReportResponseBodyItems },
            itemsSize: 'number',
            requestId: 'string',
            sourceDBClusterId: 'string',
            srcDBType: 'string',
            srcDeleted: 'string',
            totalSize: 'number',
            type: 'string',
            upgradeReportList: { 'type': 'array', 'itemType': DescribeUpgradeReportResponseBodyUpgradeReportList },
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        if (Array.isArray(this.upgradeReportList)) {
            $dara.Model.validateArray(this.upgradeReportList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUpgradeReportResponseBody = DescribeUpgradeReportResponseBody;
//# sourceMappingURL=DescribeUpgradeReportResponseBody.js.map