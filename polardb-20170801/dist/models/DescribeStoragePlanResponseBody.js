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
exports.DescribeStoragePlanResponseBody = exports.DescribeStoragePlanResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeStoragePlanResponseBodyItems extends $dara.Model {
    static names() {
        return {
            aliUid: 'AliUid',
            commodityCode: 'CommodityCode',
            endTimes: 'EndTimes',
            initCapaCityViewUnit: 'InitCapaCityViewUnit',
            initCapacityViewValue: 'InitCapacityViewValue',
            instanceId: 'InstanceId',
            periodCapaCityViewUnit: 'PeriodCapaCityViewUnit',
            periodCapacityViewValue: 'PeriodCapacityViewValue',
            periodTime: 'PeriodTime',
            prodCode: 'ProdCode',
            purchaseTimes: 'PurchaseTimes',
            startTimes: 'StartTimes',
            status: 'Status',
            storageType: 'StorageType',
            templateName: 'TemplateName',
        };
    }
    static types() {
        return {
            aliUid: 'string',
            commodityCode: 'string',
            endTimes: 'string',
            initCapaCityViewUnit: 'string',
            initCapacityViewValue: 'string',
            instanceId: 'string',
            periodCapaCityViewUnit: 'string',
            periodCapacityViewValue: 'string',
            periodTime: 'string',
            prodCode: 'string',
            purchaseTimes: 'string',
            startTimes: 'string',
            status: 'string',
            storageType: 'string',
            templateName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeStoragePlanResponseBodyItems = DescribeStoragePlanResponseBodyItems;
class DescribeStoragePlanResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': DescribeStoragePlanResponseBodyItems },
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
exports.DescribeStoragePlanResponseBody = DescribeStoragePlanResponseBody;
//# sourceMappingURL=DescribeStoragePlanResponseBody.js.map