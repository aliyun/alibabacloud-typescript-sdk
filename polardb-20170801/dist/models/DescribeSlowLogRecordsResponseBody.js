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
exports.DescribeSlowLogRecordsResponseBody = exports.DescribeSlowLogRecordsResponseBodyItems = exports.DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord extends $dara.Model {
    static names() {
        return {
            DBName: 'DBName',
            DBNodeId: 'DBNodeId',
            executionStartTime: 'ExecutionStartTime',
            hostAddress: 'HostAddress',
            lockTimeMS: 'LockTimeMS',
            lockTimes: 'LockTimes',
            parseRowCounts: 'ParseRowCounts',
            queryTimeMS: 'QueryTimeMS',
            queryTimes: 'QueryTimes',
            returnRowCounts: 'ReturnRowCounts',
            SQLHash: 'SQLHash',
            SQLText: 'SQLText',
        };
    }
    static types() {
        return {
            DBName: 'string',
            DBNodeId: 'string',
            executionStartTime: 'string',
            hostAddress: 'string',
            lockTimeMS: 'number',
            lockTimes: 'number',
            parseRowCounts: 'number',
            queryTimeMS: 'number',
            queryTimes: 'number',
            returnRowCounts: 'number',
            SQLHash: 'string',
            SQLText: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord = DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord;
class DescribeSlowLogRecordsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            SQLSlowRecord: 'SQLSlowRecord',
        };
    }
    static types() {
        return {
            SQLSlowRecord: { 'type': 'array', 'itemType': DescribeSlowLogRecordsResponseBodyItemsSQLSlowRecord },
        };
    }
    validate() {
        if (Array.isArray(this.SQLSlowRecord)) {
            $dara.Model.validateArray(this.SQLSlowRecord);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSlowLogRecordsResponseBodyItems = DescribeSlowLogRecordsResponseBodyItems;
class DescribeSlowLogRecordsResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            engine: 'Engine',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            engine: 'string',
            items: DescribeSlowLogRecordsResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
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
exports.DescribeSlowLogRecordsResponseBody = DescribeSlowLogRecordsResponseBody;
//# sourceMappingURL=DescribeSlowLogRecordsResponseBody.js.map