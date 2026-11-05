import * as $dara from '@darabonba/typescript';
export declare class DescribePriceResponseBodyPriceInfoActivityInfo extends $dara.Model {
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
     * Indicates whether the request is successful.
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
export declare class DescribePriceResponseBodyPriceInfoCouponsCoupon extends $dara.Model {
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
export declare class DescribePriceResponseBodyPriceInfoCoupons extends $dara.Model {
    coupon?: DescribePriceResponseBodyPriceInfoCouponsCoupon[];
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
export declare class DescribePriceResponseBodyPriceInfoRuleIds extends $dara.Model {
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
export declare class DescribePriceResponseBodyPriceInfo extends $dara.Model {
    /**
     * @remarks
     * The pricing information.
     */
    activityInfo?: DescribePriceResponseBodyPriceInfoActivityInfo;
    coupons?: DescribePriceResponseBodyPriceInfoCoupons;
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
     * 0
     */
    discountPrice?: number;
    /**
     * @remarks
     * The order information.
     *
     * @example
     * Order Information
     */
    orderLines?: any;
    /**
     * @remarks
     * The original price.
     *
     * @example
     * 10508
     */
    originalPrice?: number;
    ruleIds?: DescribePriceResponseBodyPriceInfoRuleIds;
    /**
     * @remarks
     * The estimated hourly fee calculated based on the maximum number of RCUs selected.
     *
     * @example
     * 1**
     */
    tradeMaxRCUAmount?: number;
    /**
     * @remarks
     * The estimated hourly fee calculated based on the minimum number of RCUs selected.
     *
     * @example
     * 2**
     */
    tradeMinRCUAmount?: number;
    /**
     * @remarks
     * The final price, which is the original price minus the discount.
     *
     * @example
     * 10508
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
export declare class DescribePriceResponseBodyRulesRule extends $dara.Model {
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
export declare class DescribePriceResponseBodyRules extends $dara.Model {
    rule?: DescribePriceResponseBodyRulesRule[];
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
export declare class DescribePriceResponseBodyServerlessPrice extends $dara.Model {
    /**
     * @remarks
     * The discount amount for the maximum number of RCUs.
     *
     * @example
     * 1**.*
     */
    RCUDiscountMaxAmount?: number;
    /**
     * @remarks
     * The discount amount for the minimum number of RCUs.
     *
     * @example
     * 1*.*
     */
    RCUDiscountMinAmount?: number;
    /**
     * @remarks
     * The original price for the maximum number of RCUs.
     *
     * @example
     * 2**.*
     */
    RCUOriginalMaxAmount?: number;
    /**
     * @remarks
     * The original price for the minimum number of RCUs.
     *
     * @example
     * 3*.*
     */
    RCUOriginalMinAmount?: number;
    /**
     * @remarks
     * The original price of the cloud disk.
     *
     * @example
     * 1*
     */
    storageOriginalAmount?: number;
    /**
     * @remarks
     * The maximum total original price before discount.
     *
     * @example
     * 2**.*
     */
    totalOriginalMaxAmount?: number;
    /**
     * @remarks
     * The minimum total original price before discount.
     *
     * @example
     * 2*.*
     */
    totalOriginalMinAmount?: number;
    /**
     * @remarks
     * The final price for the maximum number of RCUs.
     *
     * @example
     * 1**.*
     */
    tradeMaxRCUAmount?: number;
    /**
     * @remarks
     * The final price for the minimum number of RCUs.
     *
     * @example
     * 2*.*
     */
    tradeMinRCUAmount?: number;
    /**
     * @remarks
     * The discount amount for the cloud disk.
     *
     * @example
     * 2.*
     */
    storageDiscountAmount?: number;
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
export declare class DescribePriceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The order parameters.
     * > This parameter is returned only when the **OrderParamOut** parameter is set to **true**.
     *
     * @example
     * {\\"autoPay\\":false}"
     */
    orderParams?: string;
    /**
     * @remarks
     * The pricing information.
     */
    priceInfo?: DescribePriceResponseBodyPriceInfo;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CA0ADDDC-0BEB-4381-A3ED-73B4C79B8CC6
     */
    requestId?: string;
    rules?: DescribePriceResponseBodyRules;
    /**
     * @remarks
     * The pricing information of the serverless instance.
     */
    serverlessPrice?: DescribePriceResponseBodyServerlessPrice;
    /**
     * @remarks
     * Indicates whether discounts are allowed.
     *
     * @example
     * true
     */
    showDiscount?: boolean;
    /**
     * @remarks
     * The estimated hourly fee calculated based on the maximum number of RCUs selected.
     *
     * @example
     * 2**
     */
    tradeMaxRCUAmount?: number;
    /**
     * @remarks
     * The estimated hourly fee calculated based on the minimum number of RCUs selected.
     *
     * @example
     * 1**
     */
    tradeMinRCUAmount?: number;
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
