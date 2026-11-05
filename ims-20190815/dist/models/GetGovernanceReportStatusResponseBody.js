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
exports.GetGovernanceReportStatusResponseBody = exports.GetGovernanceReportStatusResponseBodyGovernanceItemsStatus = exports.GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus extends $dara.Model {
    static names() {
        return {
            governanceItem: 'GovernanceItem',
            status: 'Status',
        };
    }
    static types() {
        return {
            governanceItem: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus = GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus;
class GetGovernanceReportStatusResponseBodyGovernanceItemsStatus extends $dara.Model {
    static names() {
        return {
            governanceItemStatus: 'GovernanceItemStatus',
        };
    }
    static types() {
        return {
            governanceItemStatus: { 'type': 'array', 'itemType': GetGovernanceReportStatusResponseBodyGovernanceItemsStatusGovernanceItemStatus },
        };
    }
    validate() {
        if (Array.isArray(this.governanceItemStatus)) {
            $dara.Model.validateArray(this.governanceItemStatus);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetGovernanceReportStatusResponseBodyGovernanceItemsStatus = GetGovernanceReportStatusResponseBodyGovernanceItemsStatus;
class GetGovernanceReportStatusResponseBody extends $dara.Model {
    static names() {
        return {
            governanceItemsStatus: 'GovernanceItemsStatus',
            requestId: 'RequestId',
            wholeReportStatus: 'WholeReportStatus',
        };
    }
    static types() {
        return {
            governanceItemsStatus: GetGovernanceReportStatusResponseBodyGovernanceItemsStatus,
            requestId: 'string',
            wholeReportStatus: 'string',
        };
    }
    validate() {
        if (this.governanceItemsStatus && typeof this.governanceItemsStatus.validate === 'function') {
            this.governanceItemsStatus.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetGovernanceReportStatusResponseBody = GetGovernanceReportStatusResponseBody;
//# sourceMappingURL=GetGovernanceReportStatusResponseBody.js.map