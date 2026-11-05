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
exports.DescribePolarFsQuotaResponseBody = exports.DescribePolarFsQuotaResponseBodyQuotaItems = exports.DescribePolarFsQuotaResponseBodyPolicyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarFsQuotaResponseBodyPolicyItems extends $dara.Model {
    static names() {
        return {
            accessTTL: 'AccessTTL',
            changeTTL: 'ChangeTTL',
            description: 'Description',
            enabled: 'Enabled',
            exclude: 'Exclude',
            fileCountLimit: 'FileCountLimit',
            id: 'Id',
            include: 'Include',
            name: 'Name',
            priority: 'Priority',
            sizeLimit: 'SizeLimit',
        };
    }
    static types() {
        return {
            accessTTL: 'number',
            changeTTL: 'number',
            description: 'string',
            enabled: 'boolean',
            exclude: 'string',
            fileCountLimit: 'number',
            id: 'number',
            include: 'string',
            name: 'string',
            priority: 'number',
            sizeLimit: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsQuotaResponseBodyPolicyItems = DescribePolarFsQuotaResponseBodyPolicyItems;
class DescribePolarFsQuotaResponseBodyQuotaItems extends $dara.Model {
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
exports.DescribePolarFsQuotaResponseBodyQuotaItems = DescribePolarFsQuotaResponseBodyQuotaItems;
class DescribePolarFsQuotaResponseBody extends $dara.Model {
    static names() {
        return {
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            path: 'Path',
            polarFsInstanceId: 'PolarFsInstanceId',
            policyItems: 'PolicyItems',
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
            path: 'string',
            polarFsInstanceId: 'string',
            policyItems: { 'type': 'array', 'itemType': DescribePolarFsQuotaResponseBodyPolicyItems },
            quotaItems: { 'type': 'array', 'itemType': DescribePolarFsQuotaResponseBodyQuotaItems },
            requestId: 'string',
            totalRecordCount: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.policyItems)) {
            $dara.Model.validateArray(this.policyItems);
        }
        if (Array.isArray(this.quotaItems)) {
            $dara.Model.validateArray(this.quotaItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarFsQuotaResponseBody = DescribePolarFsQuotaResponseBody;
//# sourceMappingURL=DescribePolarFsQuotaResponseBody.js.map