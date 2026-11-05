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
exports.DescribeApikeyAttributeResponseBody = exports.DescribeApikeyAttributeResponseBodyItems = exports.DescribeApikeyAttributeResponseBodyItemsUsageStatistics = exports.DescribeApikeyAttributeResponseBodyItemsConsumer = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeApikeyAttributeResponseBodyItemsConsumer extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            consumerGroupId: 'ConsumerGroupId',
            consumerId: 'ConsumerId',
            consumerTag: 'ConsumerTag',
            createTime: 'CreateTime',
            gwClusterId: 'GwClusterId',
            modifyTime: 'ModifyTime',
            name: 'Name',
            status: 'Status',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            consumerGroupId: 'string',
            consumerId: 'string',
            consumerTag: 'string',
            createTime: 'string',
            gwClusterId: 'string',
            modifyTime: 'string',
            name: 'string',
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
exports.DescribeApikeyAttributeResponseBodyItemsConsumer = DescribeApikeyAttributeResponseBodyItemsConsumer;
class DescribeApikeyAttributeResponseBodyItemsUsageStatistics extends $dara.Model {
    static names() {
        return {
            dimensionRefId: 'DimensionRefId',
            dimensionType: 'DimensionType',
            gwClusterId: 'GwClusterId',
            monthlyCacheToken: 'MonthlyCacheToken',
            monthlyCostPoints: 'MonthlyCostPoints',
            monthlyInputToken: 'MonthlyInputToken',
            monthlyOutputToken: 'MonthlyOutputToken',
            monthlyToken: 'MonthlyToken',
            totalCacheToken: 'TotalCacheToken',
            totalCostPoints: 'TotalCostPoints',
            totalInputToken: 'TotalInputToken',
            totalOutputToken: 'TotalOutputToken',
            totalToken: 'TotalToken',
        };
    }
    static types() {
        return {
            dimensionRefId: 'string',
            dimensionType: 'string',
            gwClusterId: 'string',
            monthlyCacheToken: 'string',
            monthlyCostPoints: 'string',
            monthlyInputToken: 'string',
            monthlyOutputToken: 'string',
            monthlyToken: 'string',
            totalCacheToken: 'string',
            totalCostPoints: 'string',
            totalInputToken: 'string',
            totalOutputToken: 'string',
            totalToken: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApikeyAttributeResponseBodyItemsUsageStatistics = DescribeApikeyAttributeResponseBodyItemsUsageStatistics;
class DescribeApikeyAttributeResponseBodyItems extends $dara.Model {
    static names() {
        return {
            consumer: 'Consumer',
            usageStatistics: 'UsageStatistics',
        };
    }
    static types() {
        return {
            consumer: DescribeApikeyAttributeResponseBodyItemsConsumer,
            usageStatistics: { 'type': 'array', 'itemType': DescribeApikeyAttributeResponseBodyItemsUsageStatistics },
        };
    }
    validate() {
        if (this.consumer && typeof this.consumer.validate === 'function') {
            this.consumer.validate();
        }
        if (Array.isArray(this.usageStatistics)) {
            $dara.Model.validateArray(this.usageStatistics);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApikeyAttributeResponseBodyItems = DescribeApikeyAttributeResponseBodyItems;
class DescribeApikeyAttributeResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeApikeyAttributeResponseBodyItems },
            requestId: 'string',
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
exports.DescribeApikeyAttributeResponseBody = DescribeApikeyAttributeResponseBody;
//# sourceMappingURL=DescribeApikeyAttributeResponseBody.js.map