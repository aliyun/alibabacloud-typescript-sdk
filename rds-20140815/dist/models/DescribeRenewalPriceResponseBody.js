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
exports.DescribeRenewalPriceResponseBody = exports.DescribeRenewalPriceResponseBodyRules = exports.DescribeRenewalPriceResponseBodyRulesRule = exports.DescribeRenewalPriceResponseBodyPriceInfo = exports.DescribeRenewalPriceResponseBodyPriceInfoRuleIds = exports.DescribeRenewalPriceResponseBodyPriceInfoCoupons = exports.DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon = exports.DescribeRenewalPriceResponseBodyPriceInfoActivityInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRenewalPriceResponseBodyPriceInfoActivityInfo extends $dara.Model {
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
exports.DescribeRenewalPriceResponseBodyPriceInfoActivityInfo = DescribeRenewalPriceResponseBodyPriceInfoActivityInfo;
class DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
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
exports.DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon = DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon;
class DescribeRenewalPriceResponseBodyPriceInfoCoupons extends $dara.Model {
    static names() {
        return {
            coupon: 'Coupon',
        };
    }
    static types() {
        return {
            coupon: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon },
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
exports.DescribeRenewalPriceResponseBodyPriceInfoCoupons = DescribeRenewalPriceResponseBodyPriceInfoCoupons;
class DescribeRenewalPriceResponseBodyPriceInfoRuleIds extends $dara.Model {
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
exports.DescribeRenewalPriceResponseBodyPriceInfoRuleIds = DescribeRenewalPriceResponseBodyPriceInfoRuleIds;
class DescribeRenewalPriceResponseBodyPriceInfo extends $dara.Model {
    static names() {
        return {
            activityInfo: 'ActivityInfo',
            coupons: 'Coupons',
            currency: 'Currency',
            discountPrice: 'DiscountPrice',
            originalPrice: 'OriginalPrice',
            ruleIds: 'RuleIds',
            tradePrice: 'TradePrice',
        };
    }
    static types() {
        return {
            activityInfo: DescribeRenewalPriceResponseBodyPriceInfoActivityInfo,
            coupons: DescribeRenewalPriceResponseBodyPriceInfoCoupons,
            currency: 'string',
            discountPrice: 'number',
            originalPrice: 'number',
            ruleIds: DescribeRenewalPriceResponseBodyPriceInfoRuleIds,
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
exports.DescribeRenewalPriceResponseBodyPriceInfo = DescribeRenewalPriceResponseBodyPriceInfo;
class DescribeRenewalPriceResponseBodyRulesRule extends $dara.Model {
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
exports.DescribeRenewalPriceResponseBodyRulesRule = DescribeRenewalPriceResponseBodyRulesRule;
class DescribeRenewalPriceResponseBodyRules extends $dara.Model {
    static names() {
        return {
            rule: 'Rule',
        };
    }
    static types() {
        return {
            rule: { 'type': 'array', 'itemType': DescribeRenewalPriceResponseBodyRulesRule },
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
exports.DescribeRenewalPriceResponseBodyRules = DescribeRenewalPriceResponseBodyRules;
class DescribeRenewalPriceResponseBody extends $dara.Model {
    static names() {
        return {
            priceInfo: 'PriceInfo',
            requestId: 'RequestId',
            rules: 'Rules',
        };
    }
    static types() {
        return {
            priceInfo: DescribeRenewalPriceResponseBodyPriceInfo,
            requestId: 'string',
            rules: DescribeRenewalPriceResponseBodyRules,
        };
    }
    validate() {
        if (this.priceInfo && typeof this.priceInfo.validate === 'function') {
            this.priceInfo.validate();
        }
        if (this.rules && typeof this.rules.validate === 'function') {
            this.rules.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRenewalPriceResponseBody = DescribeRenewalPriceResponseBody;
//# sourceMappingURL=DescribeRenewalPriceResponseBody.js.map