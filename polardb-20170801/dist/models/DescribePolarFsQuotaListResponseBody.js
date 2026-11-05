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
exports.DescribePolarFsQuotaListResponseBody = exports.DescribePolarFsQuotaListResponseBodyQuotaItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarFsQuotaListResponseBodyQuotaItems extends $dara.Model {
    static names() {
        return {
            capacity: 'Capacity',
            inodes: 'Inodes',
            path: 'Path',
            usedCapacity: 'UsedCapacity',
            usedInodes: 'UsedInodes',
        };
    }
    static types() {
        return {
            capacity: 'number',
            inodes: 'number',
            path: 'string',
            usedCapacity: 'number',
            usedInodes: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsQuotaListResponseBodyQuotaItems = DescribePolarFsQuotaListResponseBodyQuotaItems;
class DescribePolarFsQuotaListResponseBody extends $dara.Model {
    static names() {
        return {
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            polarFsInstanceId: 'PolarFsInstanceId',
            quotaItems: 'QuotaItems',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            pageNumber: 'string',
            pageRecordCount: 'string',
            pageSize: 'string',
            polarFsInstanceId: 'string',
            quotaItems: { 'type': 'array', 'itemType': DescribePolarFsQuotaListResponseBodyQuotaItems },
            requestId: 'string',
            totalRecordCount: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.quotaItems)) {
            $dara.Model.validateArray(this.quotaItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsQuotaListResponseBody = DescribePolarFsQuotaListResponseBody;
//# sourceMappingURL=DescribePolarFsQuotaListResponseBody.js.map