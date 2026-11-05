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
exports.DescribeApplicationSessionIdsResponseBody = exports.DescribeApplicationSessionIdsResponseBodyItems = exports.DescribeApplicationSessionIdsResponseBodyItemsItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeApplicationSessionIdsResponseBodyItemsItems extends $dara.Model {
    static names() {
        return {
            agent: 'Agent',
            sessionId: 'SessionId',
            time: 'Time',
        };
    }
    static types() {
        return {
            agent: 'string',
            sessionId: 'string',
            time: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationSessionIdsResponseBodyItemsItems = DescribeApplicationSessionIdsResponseBodyItemsItems;
class DescribeApplicationSessionIdsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            items: 'items',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeApplicationSessionIdsResponseBodyItemsItems },
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
exports.DescribeApplicationSessionIdsResponseBodyItems = DescribeApplicationSessionIdsResponseBodyItems;
class DescribeApplicationSessionIdsResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            items: DescribeApplicationSessionIdsResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'string',
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
exports.DescribeApplicationSessionIdsResponseBody = DescribeApplicationSessionIdsResponseBody;
//# sourceMappingURL=DescribeApplicationSessionIdsResponseBody.js.map