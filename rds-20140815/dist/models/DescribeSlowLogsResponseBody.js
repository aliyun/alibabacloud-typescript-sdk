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
            avgExecutionTime: 'AvgExecutionTime',
            avgIOWriteCounts: 'AvgIOWriteCounts',
            avgLastRowsAffectedCounts: 'AvgLastRowsAffectedCounts',
            avgLogicalReadCounts: 'AvgLogicalReadCounts',
            avgPhysicalReadCounts: 'AvgPhysicalReadCounts',
            avgRowsAffectedCounts: 'AvgRowsAffectedCounts',
            createTime: 'CreateTime',
            DBName: 'DBName',
            maxExecutionTime: 'MaxExecutionTime',
            maxExecutionTimeMS: 'MaxExecutionTimeMS',
            maxIOWriteCounts: 'MaxIOWriteCounts',
            maxLastRowsAffectedCounts: 'MaxLastRowsAffectedCounts',
            maxLockTime: 'MaxLockTime',
            maxLockTimeMS: 'MaxLockTimeMS',
            maxLogicalReadCounts: 'MaxLogicalReadCounts',
            maxPhysicalReadCounts: 'MaxPhysicalReadCounts',
            maxRowsAffectedCounts: 'MaxRowsAffectedCounts',
            minIOWriteCounts: 'MinIOWriteCounts',
            minLastRowsAffectedCounts: 'MinLastRowsAffectedCounts',
            minLogicalReadCounts: 'MinLogicalReadCounts',
            minPhysicalReadCounts: 'MinPhysicalReadCounts',
            minRowsAffectedCounts: 'MinRowsAffectedCounts',
            mySQLTotalExecutionCounts: 'MySQLTotalExecutionCounts',
            mySQLTotalExecutionTimes: 'MySQLTotalExecutionTimes',
            parseMaxRowCount: 'ParseMaxRowCount',
            parseTotalRowCounts: 'ParseTotalRowCounts',
            reportTime: 'ReportTime',
            returnMaxRowCount: 'ReturnMaxRowCount',
            returnTotalRowCounts: 'ReturnTotalRowCounts',
            SQLHASH: 'SQLHASH',
            SQLIdStr: 'SQLIdStr',
            SQLServerAvgCpuTime: 'SQLServerAvgCpuTime',
            SQLServerAvgExecutionTime: 'SQLServerAvgExecutionTime',
            SQLServerMaxCpuTime: 'SQLServerMaxCpuTime',
            SQLServerMinCpuTime: 'SQLServerMinCpuTime',
            SQLServerMinExecutionTime: 'SQLServerMinExecutionTime',
            SQLServerTotalCpuTime: 'SQLServerTotalCpuTime',
            SQLServerTotalExecutionCounts: 'SQLServerTotalExecutionCounts',
            SQLServerTotalExecutionTimes: 'SQLServerTotalExecutionTimes',
            SQLText: 'SQLText',
            slowLogId: 'SlowLogId',
            totalIOWriteCounts: 'TotalIOWriteCounts',
            totalLastRowsAffectedCounts: 'TotalLastRowsAffectedCounts',
            totalLockTimes: 'TotalLockTimes',
            totalLogicalReadCounts: 'TotalLogicalReadCounts',
            totalPhysicalReadCounts: 'TotalPhysicalReadCounts',
            totalRowsAffectedCounts: 'TotalRowsAffectedCounts',
        };
    }
    static types() {
        return {
            avgExecutionTime: 'number',
            avgIOWriteCounts: 'number',
            avgLastRowsAffectedCounts: 'number',
            avgLogicalReadCounts: 'number',
            avgPhysicalReadCounts: 'number',
            avgRowsAffectedCounts: 'number',
            createTime: 'string',
            DBName: 'string',
            maxExecutionTime: 'number',
            maxExecutionTimeMS: 'number',
            maxIOWriteCounts: 'number',
            maxLastRowsAffectedCounts: 'number',
            maxLockTime: 'number',
            maxLockTimeMS: 'number',
            maxLogicalReadCounts: 'number',
            maxPhysicalReadCounts: 'number',
            maxRowsAffectedCounts: 'number',
            minIOWriteCounts: 'number',
            minLastRowsAffectedCounts: 'number',
            minLogicalReadCounts: 'number',
            minPhysicalReadCounts: 'number',
            minRowsAffectedCounts: 'number',
            mySQLTotalExecutionCounts: 'number',
            mySQLTotalExecutionTimes: 'number',
            parseMaxRowCount: 'number',
            parseTotalRowCounts: 'number',
            reportTime: 'string',
            returnMaxRowCount: 'number',
            returnTotalRowCounts: 'number',
            SQLHASH: 'string',
            SQLIdStr: 'string',
            SQLServerAvgCpuTime: 'number',
            SQLServerAvgExecutionTime: 'number',
            SQLServerMaxCpuTime: 'number',
            SQLServerMinCpuTime: 'number',
            SQLServerMinExecutionTime: 'number',
            SQLServerTotalCpuTime: 'number',
            SQLServerTotalExecutionCounts: 'number',
            SQLServerTotalExecutionTimes: 'number',
            SQLText: 'string',
            slowLogId: 'number',
            totalIOWriteCounts: 'number',
            totalLastRowsAffectedCounts: 'number',
            totalLockTimes: 'number',
            totalLogicalReadCounts: 'number',
            totalPhysicalReadCounts: 'number',
            totalRowsAffectedCounts: 'number',
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
            DBInstanceId: 'DBInstanceId',
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
            DBInstanceId: 'string',
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