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
exports.DescribeErrorLogsResponseBody = exports.DescribeErrorLogsResponseBodyItems = exports.DescribeErrorLogsResponseBodyItemsErrorLog = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeErrorLogsResponseBodyItemsErrorLog extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            database: 'Database',
            errorInfo: 'ErrorInfo',
            user: 'User',
            userIp: 'UserIp',
        };
    }
    static types() {
        return {
            createTime: 'string',
            database: 'string',
            errorInfo: 'string',
            user: 'string',
            userIp: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeErrorLogsResponseBodyItemsErrorLog = DescribeErrorLogsResponseBodyItemsErrorLog;
class DescribeErrorLogsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            errorLog: 'ErrorLog',
        };
    }
    static types() {
        return {
            errorLog: { 'type': 'array', 'itemType': DescribeErrorLogsResponseBodyItemsErrorLog },
        };
    }
    validate() {
        if (Array.isArray(this.errorLog)) {
            $dara.Model.validateArray(this.errorLog);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeErrorLogsResponseBodyItems = DescribeErrorLogsResponseBodyItems;
class DescribeErrorLogsResponseBody extends $dara.Model {
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
            items: DescribeErrorLogsResponseBodyItems,
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
exports.DescribeErrorLogsResponseBody = DescribeErrorLogsResponseBody;
//# sourceMappingURL=DescribeErrorLogsResponseBody.js.map