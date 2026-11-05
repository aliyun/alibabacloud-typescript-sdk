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
exports.DescribeAIDBClusterTaskLogFilesResponseBody = exports.DescribeAIDBClusterTaskLogFilesResponseBodyItems = exports.DescribeAIDBClusterTaskLogFilesResponseBodyItemsSlsLogItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAIDBClusterTaskLogFilesResponseBodyItemsSlsLogItems extends $dara.Model {
    static names() {
        return {
            logTime: 'LogTime',
            message: 'Message',
            timestamp: 'Timestamp',
        };
    }
    static types() {
        return {
            logTime: 'string',
            message: 'string',
            timestamp: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterTaskLogFilesResponseBodyItemsSlsLogItems = DescribeAIDBClusterTaskLogFilesResponseBodyItemsSlsLogItems;
class DescribeAIDBClusterTaskLogFilesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            slsLogItems: 'SlsLogItems',
        };
    }
    static types() {
        return {
            slsLogItems: { 'type': 'array', 'itemType': DescribeAIDBClusterTaskLogFilesResponseBodyItemsSlsLogItems },
        };
    }
    validate() {
        if (Array.isArray(this.slsLogItems)) {
            $dara.Model.validateArray(this.slsLogItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAIDBClusterTaskLogFilesResponseBodyItems = DescribeAIDBClusterTaskLogFilesResponseBodyItems;
class DescribeAIDBClusterTaskLogFilesResponseBody extends $dara.Model {
    static names() {
        return {
            endTime: 'EndTime',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            endTime: 'string',
            items: DescribeAIDBClusterTaskLogFilesResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            pageSize: 'number',
            requestId: 'string',
            startTime: 'string',
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
exports.DescribeAIDBClusterTaskLogFilesResponseBody = DescribeAIDBClusterTaskLogFilesResponseBody;
//# sourceMappingURL=DescribeAidbclusterTaskLogFilesResponseBody.js.map