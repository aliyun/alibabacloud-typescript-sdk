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
exports.DescribePriceResponseBody = exports.DescribePriceResponseBodyServerlessPrice = exports.DescribePriceResponseBodyRules = exports.DescribePriceResponseBodyRulesRule = exports.DescribePriceResponseBodyPriceInfo = exports.DescribePriceResponseBodyPriceInfoRuleIds = exports.DescribePriceResponseBodyPriceInfoCoupons = exports.DescribePriceResponseBodyPriceInfoCouponsCoupon = exports.DescribePriceResponseBodyPriceInfoActivityInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePriceResponseBodyPriceInfoActivityInfo extends $dara.Model {
    static names() {
        return {
            checkErrMsg: 'CheckErrMsg',
            errorCode: 'ErrorCode',
            success: 'Success',
        };
    }
    static types() {
        return {
            checkErrMsg: 'string',
            errorCode: 'string',
            success: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePriceResponseBodyPriceInfoActivityInfo = DescribePriceResponseBodyPriceInfoActivityInfo;
class DescribePriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
    static names() {
        return {
            couponNo: 'CouponNo',
            description: 'Description',
            isSelected: 'IsSelected',
            name: 'Name',
        };
    }
    static types() {
        return {
            couponNo: 'string',
            description: 'string',
            isSelected: 'string',
            name: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePriceResponseBodyPriceInfoCouponsCoupon = DescribePriceResponseBodyPriceInfoCouponsCoupon;
class DescribePriceResponseBodyPriceInfoCoupons extends $dara.Model {
    static names() {
        return {
            coupon: 'Coupon',
        };
    }
    static types() {
        return {
            coupon: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoCouponsCoupon },
        };
    }
    validate() {
        if (Array.isArray(this.coupon)) {
            $dara.Model.validateArray(this.coupon);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePriceResponseBodyPriceInfoCoupons = DescribePriceResponseBodyPriceInfoCoupons;
class DescribePriceResponseBodyPriceInfoRuleIds extends $dara.Model {
    static names() {
        return {
            ruleId: 'RuleId',
        };
    }
    static types() {
        return {
            ruleId: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.ruleId)) {
            $dara.Model.validateArray(this.ruleId);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePriceResponseBodyPriceInfoRuleIds = DescribePriceResponseBodyPriceInfoRuleIds;
class DescribePriceResponseBodyPriceInfo extends $dara.Model {
    static names() {
        return {
            activityInfo: 'ActivityInfo',
            coupons: 'Coupons',
            currency: 'Currency',
            discountPrice: 'DiscountPrice',
            orderLines: 'OrderLines',
            originalPrice: 'OriginalPrice',
            ruleIds: 'RuleIds',
            tradeMaxRCUAmount: 'TradeMaxRCUAmount',
            tradeMinRCUAmount: 'TradeMinRCUAmount',
            tradePrice: 'TradePrice',
        };
    }
    static types() {
        return {
            activityInfo: DescribePriceResponseBodyPriceInfoActivityInfo,
            coupons: DescribePriceResponseBodyPriceInfoCoupons,
            currency: 'string',
            discountPrice: 'number',
            orderLines: 'any',
            originalPrice: 'number',
            ruleIds: DescribePriceResponseBodyPriceInfoRuleIds,
            tradeMaxRCUAmount: 'number',
            tradeMinRCUAmount: 'number',
            tradePrice: 'number',
        };
    }
    validate() {
        if (this.activityInfo && typeof this.activityInfo.validate === 'function') {
            this.activityInfo.validate();
        }
        if (this.coupons && typeof this.coupons.validate === 'function') {
            this.coupons.validate();
        }
        if (this.ruleIds && typeof this.ruleIds.validate === 'function') {
            this.ruleIds.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePriceResponseBodyPriceInfo = DescribePriceResponseBodyPriceInfo;
class DescribePriceResponseBodyRulesRule extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            name: 'Name',
            ruleId: 'RuleId',
        };
    }
    static types() {
        return {
            description: 'string',
            name: 'string',
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
exports.DescribePriceResponseBodyRulesRule = DescribePriceResponseBodyRulesRule;
class DescribePriceResponseBodyRules extends $dara.Model {
    static names() {
        return {
            rule: 'Rule',
        };
    }
    static types() {
        return {
            rule: { 'type': 'array', 'itemType': DescribePriceResponseBodyRulesRule },
        };
    }
    validate() {
        if (Array.isArray(this.rule)) {
            $dara.Model.validateArray(this.rule);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePriceResponseBodyRules = DescribePriceResponseBodyRules;
class DescribePriceResponseBodyServerlessPrice extends $dara.Model {
    static names() {
        return {
            RCUDiscountMaxAmount: 'RCUDiscountMaxAmount',
            RCUDiscountMinAmount: 'RCUDiscountMinAmount',
            RCUOriginalMaxAmount: 'RCUOriginalMaxAmount',
            RCUOriginalMinAmount: 'RCUOriginalMinAmount',
            storageOriginalAmount: 'StorageOriginalAmount',
            totalOriginalMaxAmount: 'TotalOriginalMaxAmount',
            totalOriginalMinAmount: 'TotalOriginalMinAmount',
            tradeMaxRCUAmount: 'TradeMaxRCUAmount',
            tradeMinRCUAmount: 'TradeMinRCUAmount',
            storageDiscountAmount: 'storageDiscountAmount',
        };
    }
    static types() {
        return {
            RCUDiscountMaxAmount: 'number',
            RCUDiscountMinAmount: 'number',
            RCUOriginalMaxAmount: 'number',
            RCUOriginalMinAmount: 'number',
            storageOriginalAmount: 'number',
            totalOriginalMaxAmount: 'number',
            totalOriginalMinAmount: 'number',
            tradeMaxRCUAmount: 'number',
            tradeMinRCUAmount: 'number',
            storageDiscountAmount: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePriceResponseBodyServerlessPrice = DescribePriceResponseBodyServerlessPrice;
class DescribePriceResponseBody extends $dara.Model {
    static names() {
        return {
            orderParams: 'OrderParams',
            priceInfo: 'PriceInfo',
            requestId: 'RequestId',
            rules: 'Rules',
            serverlessPrice: 'ServerlessPrice',
            showDiscount: 'ShowDiscount',
            tradeMaxRCUAmount: 'TradeMaxRCUAmount',
            tradeMinRCUAmount: 'TradeMinRCUAmount',
        };
    }
    static types() {
        return {
            orderParams: 'string',
            priceInfo: DescribePriceResponseBodyPriceInfo,
            requestId: 'string',
            rules: DescribePriceResponseBodyRules,
            serverlessPrice: DescribePriceResponseBodyServerlessPrice,
            showDiscount: 'boolean',
            tradeMaxRCUAmount: 'number',
            tradeMinRCUAmount: 'number',
        };
    }
    validate() {
        if (this.priceInfo && typeof this.priceInfo.validate === 'function') {
            this.priceInfo.validate();
        }
        if (this.rules && typeof this.rules.validate === 'function') {
            this.rules.validate();
        }
        if (this.serverlessPrice && typeof this.serverlessPrice.validate === 'function') {
            this.serverlessPrice.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePriceResponseBody = DescribePriceResponseBody;
//# sourceMappingURL=DescribePriceResponseBody.js.map