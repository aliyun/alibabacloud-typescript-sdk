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
exports.CheckPolarFsQuotaConsistencyResponseBody = exports.CheckPolarFsQuotaConsistencyResponseBodyQuotaItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CheckPolarFsQuotaConsistencyResponseBodyQuotaItem extends $dara.Model {
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
exports.CheckPolarFsQuotaConsistencyResponseBodyQuotaItem = CheckPolarFsQuotaConsistencyResponseBodyQuotaItem;
class CheckPolarFsQuotaConsistencyResponseBody extends $dara.Model {
    static names() {
        return {
            polarFsInstanceId: 'PolarFsInstanceId',
            quotaItem: 'QuotaItem',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            polarFsInstanceId: 'string',
            quotaItem: CheckPolarFsQuotaConsistencyResponseBodyQuotaItem,
            requestId: 'string',
        };
    }
    validate() {
        if (this.quotaItem && typeof this.quotaItem.validate === 'function') {
            this.quotaItem.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CheckPolarFsQuotaConsistencyResponseBody = CheckPolarFsQuotaConsistencyResponseBody;
//# sourceMappingURL=CheckPolarFsQuotaConsistencyResponseBody.js.map