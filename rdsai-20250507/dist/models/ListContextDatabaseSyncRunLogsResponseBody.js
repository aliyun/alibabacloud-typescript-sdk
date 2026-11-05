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
exports.ListContextDatabaseSyncRunLogsResponseBody = exports.ListContextDatabaseSyncRunLogsResponseBodyData = exports.ListContextDatabaseSyncRunLogsResponseBodyDataLogs = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListContextDatabaseSyncRunLogsResponseBodyDataLogs extends $dara.Model {
    static names() {
        return {
            createdAt: 'CreatedAt',
            detail: 'Detail',
            id: 'Id',
            level: 'Level',
            message: 'Message',
        };
    }
    static types() {
        return {
            createdAt: 'string',
            detail: 'string',
            id: 'number',
            level: 'string',
            message: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncRunLogsResponseBodyDataLogs = ListContextDatabaseSyncRunLogsResponseBodyDataLogs;
class ListContextDatabaseSyncRunLogsResponseBodyData extends $dara.Model {
    static names() {
        return {
            logs: 'Logs',
            page: 'Page',
            pageSize: 'PageSize',
            total: 'Total',
        };
    }
    static types() {
        return {
            logs: { 'type': 'array', 'itemType': ListContextDatabaseSyncRunLogsResponseBodyDataLogs },
            page: 'number',
            pageSize: 'number',
            total: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.logs)) {
            $dara.Model.validateArray(this.logs);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListContextDatabaseSyncRunLogsResponseBodyData = ListContextDatabaseSyncRunLogsResponseBodyData;
class ListContextDatabaseSyncRunLogsResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            data: 'Data',
            httpStatusCode: 'HttpStatusCode',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: ListContextDatabaseSyncRunLogsResponseBodyData,
            httpStatusCode: 'number',
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
exports.ListContextDatabaseSyncRunLogsResponseBody = ListContextDatabaseSyncRunLogsResponseBody;
//# sourceMappingURL=ListContextDatabaseSyncRunLogsResponseBody.js.map