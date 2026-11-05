import * as $dara from '@darabonba/typescript';
export declare class DescribeRenewalPriceResponseBodyPriceInfoActivityInfo extends $dara.Model {
    /**
     * @remarks
     * The error message.
     *
     * @example
     * Error description
     */
    checkErrMsg?: string;
    /**
     * @remarks
     * The error code.
     *
     * @example
     * 123456
     */
    errorCode?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
     *
     * @example
     * Success
     */
    success?: string;
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
export declare class DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
    couponNo?: string;
    description?: string;
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
export declare class DescribeRenewalPriceResponseBodyPriceInfoCoupons extends $dara.Model {
    coupon?: DescribeRenewalPriceResponseBodyPriceInfoCouponsCoupon[];
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
export declare class DescribeRenewalPriceResponseBodyPriceInfoRuleIds extends $dara.Model {
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
export declare class DescribeRenewalPriceResponseBodyPriceInfo extends $dara.Model {
    /**
     * @remarks
     * The pricing information.
     */
    activityInfo?: DescribeRenewalPriceResponseBodyPriceInfoActivityInfo;
    coupons?: DescribeRenewalPriceResponseBodyPriceInfoCoupons;
    /**
     * @remarks
     * The currency.
     *
     * @example
     * CNY
     */
    currency?: string;
    /**
     * @remarks
     * The discount.
     *
     * @example
     * 27
     */
    discountPrice?: number;
    /**
     * @remarks
     * The original price.
     *
     * @example
     * 138
     */
    originalPrice?: number;
    ruleIds?: DescribeRenewalPriceResponseBodyPriceInfoRuleIds;
    /**
     * @remarks
     * The final price, which is the original price minus the discount.
     *
     * @example
     * 111
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
export declare class DescribeRenewalPriceResponseBodyRulesRule extends $dara.Model {
    description?: string;
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
export declare class DescribeRenewalPriceResponseBodyRules extends $dara.Model {
    rule?: DescribeRenewalPriceResponseBodyRulesRule[];
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
export declare class DescribeRenewalPriceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The pricing information.
     */
    priceInfo?: DescribeRenewalPriceResponseBodyPriceInfo;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * DC9F4EF6-D038-4405-B497-1F48E722C9F2
     */
    requestId?: string;
    rules?: DescribeRenewalPriceResponseBodyRules;
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
