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
exports.DescribeDBClusterPriceResponseBody = exports.DescribeDBClusterPriceResponseBodyRules = exports.DescribeDBClusterPriceResponseBodyRulesRule = exports.DescribeDBClusterPriceResponseBodyPriceInfo = exports.DescribeDBClusterPriceResponseBodyPriceInfoRuleIds = exports.DescribeDBClusterPriceResponseBodyPriceInfoCoupons = exports.DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
    static names() {
        return {
            couponNo: 'CouponNo',
            isSelected: 'IsSelected',
            name: 'Name',
        };
    }
    static types() {
        return {
            couponNo: 'string',
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
exports.DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon = DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon;
class DescribeDBClusterPriceResponseBodyPriceInfoCoupons extends $dara.Model {
    static names() {
        return {
            coupon: 'Coupon',
        };
    }
    static types() {
        return {
            coupon: { 'type': 'array', 'itemType': DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon },
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
exports.DescribeDBClusterPriceResponseBodyPriceInfoCoupons = DescribeDBClusterPriceResponseBodyPriceInfoCoupons;
class DescribeDBClusterPriceResponseBodyPriceInfoRuleIds extends $dara.Model {
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
exports.DescribeDBClusterPriceResponseBodyPriceInfoRuleIds = DescribeDBClusterPriceResponseBodyPriceInfoRuleIds;
class DescribeDBClusterPriceResponseBodyPriceInfo extends $dara.Model {
    static names() {
        return {
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
            coupons: DescribeDBClusterPriceResponseBodyPriceInfoCoupons,
            currency: 'string',
            discountPrice: 'number',
            originalPrice: 'number',
            ruleIds: DescribeDBClusterPriceResponseBodyPriceInfoRuleIds,
            tradePrice: 'number',
        };
    }
    validate() {
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
exports.DescribeDBClusterPriceResponseBodyPriceInfo = DescribeDBClusterPriceResponseBodyPriceInfo;
class DescribeDBClusterPriceResponseBodyRulesRule extends $dara.Model {
    static names() {
        return {
            name: 'Name',
            ruleId: 'RuleId',
        };
    }
    static types() {
        return {
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
exports.DescribeDBClusterPriceResponseBodyRulesRule = DescribeDBClusterPriceResponseBodyRulesRule;
class DescribeDBClusterPriceResponseBodyRules extends $dara.Model {
    static names() {
        return {
            rule: 'Rule',
        };
    }
    static types() {
        return {
            rule: { 'type': 'array', 'itemType': DescribeDBClusterPriceResponseBodyRulesRule },
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
exports.DescribeDBClusterPriceResponseBodyRules = DescribeDBClusterPriceResponseBodyRules;
class DescribeDBClusterPriceResponseBody extends $dara.Model {
    static names() {
        return {
            orderType: 'OrderType',
            priceInfo: 'PriceInfo',
            requestId: 'RequestId',
            rules: 'Rules',
            showDiscount: 'ShowDiscount',
        };
    }
    static types() {
        return {
            orderType: 'string',
            priceInfo: DescribeDBClusterPriceResponseBodyPriceInfo,
            requestId: 'string',
            rules: DescribeDBClusterPriceResponseBodyRules,
            showDiscount: 'boolean',
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
exports.DescribeDBClusterPriceResponseBody = DescribeDBClusterPriceResponseBody;
//# sourceMappingURL=DescribeDbclusterPriceResponseBody.js.map