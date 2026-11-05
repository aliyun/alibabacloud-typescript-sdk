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
exports.DescribeMultiPriceResponseBody = exports.DescribeMultiPriceResponseBodyPriceInfo = exports.DescribeMultiPriceResponseBodyPriceInfoRules = exports.DescribeMultiPriceResponseBodyPriceInfoPrice = exports.DescribeMultiPriceResponseBodyPriceInfoPricePromotions = exports.DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails = exports.DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail = exports.DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails extends $dara.Model {
    static names() {
        return {
            discountPrice: 'DiscountPrice',
            moduleCode: 'ModuleCode',
            moduleName: 'ModuleName',
            moduleValue: 'ModuleValue',
            originalPrice: 'OriginalPrice',
            savingPlanDiscountPrice: 'SavingPlanDiscountPrice',
            tradePrice: 'TradePrice',
        };
    }
    static types() {
        return {
            discountPrice: 'number',
            moduleCode: 'string',
            moduleName: 'string',
            moduleValue: 'string',
            originalPrice: 'number',
            savingPlanDiscountPrice: 'number',
            tradePrice: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails = DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails;
class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail extends $dara.Model {
    static names() {
        return {
            discountPrice: 'DiscountPrice',
            originalPrice: 'OriginalPrice',
            resourceType: 'ResourceType',
            savingPlanRecommendPrice: 'SavingPlanRecommendPrice',
            tradePrice: 'TradePrice',
        };
    }
    static types() {
        return {
            discountPrice: 'number',
            originalPrice: 'number',
            resourceType: 'string',
            savingPlanRecommendPrice: 'number',
            tradePrice: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail = DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail;
class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails extends $dara.Model {
    static names() {
        return {
            moduleDetails: 'ModuleDetails',
            orderItem: 'OrderItem',
            priceDetail: 'PriceDetail',
        };
    }
    static types() {
        return {
            moduleDetails: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails },
            orderItem: 'number',
            priceDetail: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail,
        };
    }
    validate() {
        if (Array.isArray(this.moduleDetails)) {
            $dara.Model.validateArray(this.moduleDetails);
        }
        if (this.priceDetail && typeof this.priceDetail.validate === 'function') {
            this.priceDetail.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails = DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails;
class DescribeMultiPriceResponseBodyPriceInfoPricePromotions extends $dara.Model {
    static names() {
        return {
            activityId: 'ActivityId',
            effective: 'Effective',
            endTimestamp: 'EndTimestamp',
            optionCode: 'OptionCode',
            priceBreakReduceValue: 'PriceBreakReduceValue',
            priceBreakThreshold: 'PriceBreakThreshold',
            promotionDesc: 'PromotionDesc',
            promotionId: 'PromotionId',
            promotionName: 'PromotionName',
            selected: 'Selected',
            startTimestamp: 'StartTimestamp',
        };
    }
    static types() {
        return {
            activityId: 'string',
            effective: 'boolean',
            endTimestamp: 'string',
            optionCode: 'string',
            priceBreakReduceValue: 'string',
            priceBreakThreshold: 'string',
            promotionDesc: 'string',
            promotionId: 'string',
            promotionName: 'string',
            selected: 'boolean',
            startTimestamp: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMultiPriceResponseBodyPriceInfoPricePromotions = DescribeMultiPriceResponseBodyPriceInfoPricePromotions;
class DescribeMultiPriceResponseBodyPriceInfoPrice extends $dara.Model {
    static names() {
        return {
            currency: 'Currency',
            discountPrice: 'DiscountPrice',
            originalPrice: 'OriginalPrice',
            priceDetails: 'PriceDetails',
            promotions: 'Promotions',
            refundInstanceIdPriceMap: 'RefundInstanceIdPriceMap',
            refundPrice: 'RefundPrice',
            tradePrice: 'TradePrice',
        };
    }
    static types() {
        return {
            currency: 'string',
            discountPrice: 'number',
            originalPrice: 'number',
            priceDetails: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails },
            promotions: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoPricePromotions },
            refundInstanceIdPriceMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
            refundPrice: 'number',
            tradePrice: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.priceDetails)) {
            $dara.Model.validateArray(this.priceDetails);
        }
        if (Array.isArray(this.promotions)) {
            $dara.Model.validateArray(this.promotions);
        }
        if (this.refundInstanceIdPriceMap) {
            $dara.Model.validateMap(this.refundInstanceIdPriceMap);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMultiPriceResponseBodyPriceInfoPrice = DescribeMultiPriceResponseBodyPriceInfoPrice;
class DescribeMultiPriceResponseBodyPriceInfoRules extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            ruleId: 'RuleId',
        };
    }
    static types() {
        return {
            description: 'string',
            ruleId: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMultiPriceResponseBodyPriceInfoRules = DescribeMultiPriceResponseBodyPriceInfoRules;
class DescribeMultiPriceResponseBodyPriceInfo extends $dara.Model {
    static names() {
        return {
            price: 'Price',
            rules: 'Rules',
        };
    }
    static types() {
        return {
            price: DescribeMultiPriceResponseBodyPriceInfoPrice,
            rules: { 'type': 'array', 'itemType': DescribeMultiPriceResponseBodyPriceInfoRules },
        };
    }
    validate() {
        if (this.price && typeof this.price.validate === 'function') {
            this.price.validate();
        }
        if (Array.isArray(this.rules)) {
            $dara.Model.validateArray(this.rules);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMultiPriceResponseBodyPriceInfo = DescribeMultiPriceResponseBodyPriceInfo;
class DescribeMultiPriceResponseBody extends $dara.Model {
    static names() {
        return {
            priceInfo: 'PriceInfo',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            priceInfo: DescribeMultiPriceResponseBodyPriceInfo,
            requestId: 'string',
        };
    }
    validate() {
        if (this.priceInfo && typeof this.priceInfo.validate === 'function') {
            this.priceInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMultiPriceResponseBody = DescribeMultiPriceResponseBody;
//# sourceMappingURL=DescribeMultiPriceResponseBody.js.map