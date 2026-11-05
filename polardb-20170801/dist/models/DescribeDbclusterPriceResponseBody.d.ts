import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
    couponNo?: string;
    isSelected?: string;
    name?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterPriceResponseBodyPriceInfoCoupons extends $dara.Model {
    coupon?: DescribeDBClusterPriceResponseBodyPriceInfoCouponsCoupon[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterPriceResponseBodyPriceInfoRuleIds extends $dara.Model {
    ruleId?: string[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterPriceResponseBodyPriceInfo extends $dara.Model {
    coupons?: DescribeDBClusterPriceResponseBodyPriceInfoCoupons;
    /**
     * @remarks
     * The currency unit.
     *
     * @example
     * CNY
     */
    currency?: string;
    /**
     * @remarks
     * The discount amount.
     *
     * @example
     * 1978.2
     */
    discountPrice?: number;
    /**
     * @remarks
     * The original price.
     *
     * @example
     * 1099.0
     */
    originalPrice?: number;
    ruleIds?: DescribeDBClusterPriceResponseBodyPriceInfoRuleIds;
    /**
     * @remarks
     * The final price, which is the original price minus the discount.
     *
     * @example
     * 165.0
     */
    tradePrice?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterPriceResponseBodyRulesRule extends $dara.Model {
    name?: string;
    ruleId?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterPriceResponseBodyRules extends $dara.Model {
    rule?: DescribeDBClusterPriceResponseBodyRulesRule[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class DescribeDBClusterPriceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The order type. Valid values:
     * * BUY: new purchase.
     * * UPGRADE: specification change.
     * * RENEW: renewal.
     * * CONVERT: billing method conversion.
     *
     * @example
     * BUY
     */
    orderType?: string;
    /**
     * @remarks
     * The price details.
     */
    priceInfo?: DescribeDBClusterPriceResponseBodyPriceInfo;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 7E2FE3BB-C677-5FF9-9FC5-XXX
     */
    requestId?: string;
    rules?: DescribeDBClusterPriceResponseBodyRules;
    /**
     * @remarks
     * Indicates whether discounts are allowed.
     *
     * @example
     * False
     */
    showDiscount?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
