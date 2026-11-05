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
exports.DescribeSlowLogsResponseBody = exports.DescribeSlowLogsResponseBodyItems = exports.DescribeSlowLogsResponseBodyItemsSQLSlowLog = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSlowLogsResponseBodyItemsSQLSlowLog extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            DBName: 'DBName',
            DBNodeId: 'DBNodeId',
            maxExecutionTime: 'MaxExecutionTime',
            maxExecutionTimeMs: 'MaxExecutionTimeMs',
            maxLockTime: 'MaxLockTime',
            parseMaxRowCount: 'ParseMaxRowCount',
            parseTotalRowCounts: 'ParseTotalRowCounts',
            returnMaxRowCount: 'ReturnMaxRowCount',
            returnTotalRowCounts: 'ReturnTotalRowCounts',
            SQLHASH: 'SQLHASH',
            SQLText: 'SQLText',
            totalExecutionCounts: 'TotalExecutionCounts',
            totalExecutionTimes: 'TotalExecutionTimes',
            totalLockTimes: 'TotalLockTimes',
        };
    }
    static types() {
        return {
            createTime: 'string',
            DBName: 'string',
            DBNodeId: 'string',
            maxExecutionTime: 'number',
            maxExecutionTimeMs: 'string',
            maxLockTime: 'number',
            parseMaxRowCount: 'number',
            parseTotalRowCounts: 'number',
            returnMaxRowCount: 'number',
            returnTotalRowCounts: 'number',
            SQLHASH: 'string',
            SQLText: 'string',
            totalExecutionCounts: 'number',
            totalExecutionTimes: 'number',
            totalLockTimes: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSlowLogsResponseBodyItemsSQLSlowLog = DescribeSlowLogsResponseBodyItemsSQLSlowLog;
class DescribeSlowLogsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            SQLSlowLog: 'SQLSlowLog',
        };
    }
    static types() {
        return {
            SQLSlowLog: { 'type': 'array', 'itemType': DescribeSlowLogsResponseBodyItemsSQLSlowLog },
        };
    }
    validate() {
        if (Array.isArray(this.SQLSlowLog)) {
            $dara.Model.validateArray(this.SQLSlowLog);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSlowLogsResponseBodyItems = DescribeSlowLogsResponseBodyItems;
class DescribeSlowLogsResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            endTime: 'EndTime',
            engine: 'Engine',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            startTime: 'StartTime',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            endTime: 'string',
            engine: 'string',
            items: DescribeSlowLogsResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            startTime: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSlowLogsResponseBody = DescribeSlowLogsResponseBody;
//# sourceMappingURL=DescribeSlowLogsResponseBody.js.map