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
exports.DescribeMetaListResponseBody = exports.DescribeMetaListResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeMetaListResponseBodyItems extends $dara.Model {
    static names() {
        return {
            database: 'Database',
            size: 'Size',
            tables: 'Tables',
        };
    }
    static types() {
        return {
            database: 'string',
            size: { 'type': 'array', 'itemType': 'number' },
            tables: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.size)) {
            $dara.Model.validateArray(this.size);
        }
        if (Array.isArray(this.tables)) {
            $dara.Model.validateArray(this.tables);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMetaListResponseBodyItems = DescribeMetaListResponseBodyItems;
class DescribeMetaListResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            items: 'Items',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalPageCount: 'TotalPageCount',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            items: { 'type': 'array', 'itemType': DescribeMetaListResponseBodyItems },
            pageNumber: 'string',
            pageSize: 'string',
            requestId: 'string',
            totalPageCount: 'string',
            totalRecordCount: 'string',
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
exports.DescribeMetaListResponseBody = DescribeMetaListResponseBody;
//# sourceMappingURL=DescribeMetaListResponseBody.js.map