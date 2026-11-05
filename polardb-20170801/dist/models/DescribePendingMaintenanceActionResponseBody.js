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
exports.DescribePendingMaintenanceActionResponseBody = exports.DescribePendingMaintenanceActionResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePendingMaintenanceActionResponseBodyItems extends $dara.Model {
    static names() {
        return {
            createdTime: 'CreatedTime',
            DBClusterId: 'DBClusterId',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            deadline: 'Deadline',
            id: 'Id',
            modifiedTime: 'ModifiedTime',
            prepareInterval: 'PrepareInterval',
            region: 'Region',
            resultInfo: 'ResultInfo',
            startTime: 'StartTime',
            status: 'Status',
            switchTime: 'SwitchTime',
            taskType: 'TaskType',
        };
    }
    static types() {
        return {
            createdTime: 'string',
            DBClusterId: 'string',
            DBType: 'string',
            DBVersion: 'string',
            deadline: 'string',
            id: 'number',
            modifiedTime: 'string',
            prepareInterval: 'string',
            region: 'string',
            resultInfo: 'string',
            startTime: 'string',
            status: 'number',
            switchTime: 'string',
            taskType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePendingMaintenanceActionResponseBodyItems = DescribePendingMaintenanceActionResponseBodyItems;
class DescribePendingMaintenanceActionResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribePendingMaintenanceActionResponseBodyItems },
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
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
exports.DescribePendingMaintenanceActionResponseBody = DescribePendingMaintenanceActionResponseBody;
//# sourceMappingURL=DescribePendingMaintenanceActionResponseBody.js.map