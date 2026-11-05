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
exports.DescribeSQLLogRecordsResponseBody = exports.DescribeSQLLogRecordsResponseBodyItems = exports.DescribeSQLLogRecordsResponseBodyItemsSQLRecord = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSQLLogRecordsResponseBodyItemsSQLRecord extends $dara.Model {
    static names() {
        return {
            accountName: 'AccountName',
            DBName: 'DBName',
            executeTime: 'ExecuteTime',
            hostAddress: 'HostAddress',
            returnRowCounts: 'ReturnRowCounts',
            SQLText: 'SQLText',
            threadID: 'ThreadID',
            totalExecutionTimes: 'TotalExecutionTimes',
        };
    }
    static types() {
        return {
            accountName: 'string',
            DBName: 'string',
            executeTime: 'string',
            hostAddress: 'string',
            returnRowCounts: 'number',
            SQLText: 'string',
            threadID: 'string',
            totalExecutionTimes: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogRecordsResponseBodyItemsSQLRecord = DescribeSQLLogRecordsResponseBodyItemsSQLRecord;
class DescribeSQLLogRecordsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            SQLRecord: 'SQLRecord',
        };
    }
    static types() {
        return {
            SQLRecord: { 'type': 'array', 'itemType': DescribeSQLLogRecordsResponseBodyItemsSQLRecord },
        };
    }
    validate() {
        if (Array.isArray(this.SQLRecord)) {
            $dara.Model.validateArray(this.SQLRecord);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogRecordsResponseBodyItems = DescribeSQLLogRecordsResponseBodyItems;
class DescribeSQLLogRecordsResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeSQLLogRecordsResponseBodyItems,
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
exports.DescribeSQLLogRecordsResponseBody = DescribeSQLLogRecordsResponseBody;
//# sourceMappingURL=DescribeSqllogRecordsResponseBody.js.map