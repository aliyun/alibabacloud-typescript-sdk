import * as $dara from '@darabonba/typescript';
export declare class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails extends $dara.Model {
    /**
     * @remarks
     * The discounted price.
     *
     * @example
     * 734.65
     */
    discountPrice?: number;
    /**
     * @remarks
     * The module code.
     *
     * @example
     * DesktopType
     */
    moduleCode?: string;
    /**
     * @remarks
     * The module name.
     *
     * @example
     * Enterprise Office - 8C32G
     */
    moduleName?: string;
    /**
     * @remarks
     * The module value.
     *
     * @example
     * eds.enterprise_office.8c32g
     */
    moduleValue?: string;
    /**
     * @remarks
     * The original price.
     *
     * @example
     * 10900
     */
    originalPrice?: number;
    /**
     * @remarks
     * The savings plan discount price.
     *
     * @example
     * 0
     */
    savingPlanDiscountPrice?: number;
    /**
     * @remarks
     * The actual payment price. The value is the original price minus the discount.
     *
     * @example
     * 292.2
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
export declare class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail extends $dara.Model {
    /**
     * @remarks
     * The discounted price.
     *
     * @example
     * 20.00
     */
    discountPrice?: number;
    /**
     * @remarks
     * The original price.
     *
     * @example
     * 100.00
     */
    originalPrice?: number;
    /**
     * @remarks
     * The resource type.
     *
     * @example
     * DurationPackage
     */
    resourceType?: string;
    /**
     * @remarks
     * The savings plan recommended price.
     *
     * @example
     * 0
     */
    savingPlanRecommendPrice?: number;
    /**
     * @remarks
     * The actual payment price. The value is the original price minus the discount.
     *
     * @example
     * 80.00
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
export declare class DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails extends $dara.Model {
    /**
     * @remarks
     * The pricing details of the billing module.
     */
    moduleDetails?: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsModuleDetails[];
    /**
     * @remarks
     * The sorting attribute.
     *
     * @example
     * 1
     */
    orderItem?: number;
    /**
     * @remarks
     * The pricing details.
     */
    priceDetail?: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetailsPriceDetail;
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
export declare class DescribeMultiPriceResponseBodyPriceInfoPricePromotions extends $dara.Model {
    /**
     * @remarks
     * The promotion activity ID.
     *
     * @example
     * 123456****
     */
    activityId?: string;
    /**
     * @remarks
     * Indicates whether the promotion activity is in effect.
     */
    effective?: boolean;
    /**
     * @remarks
     * The end time of the promotion activity. The value is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1790784000000
     */
    endTimestamp?: string;
    /**
     * @remarks
     * The description of the promotion rule.
     *
     * @example
     * new
     */
    optionCode?: string;
    /**
     * @remarks
     * The discount amount after the spend-and-save promotion threshold is reached. Unit: CNY. Two decimal places are retained.
     *
     * @example
     * 10.00
     */
    priceBreakReduceValue?: string;
    /**
     * @remarks
     * The threshold amount for the spend-and-save promotion. Unit: CNY. Two decimal places are retained.
     *
     * @example
     * 100.00
     */
    priceBreakThreshold?: string;
    /**
     * @remarks
     * The description of the promotion.
     *
     * @example
     * Promotion
     */
    promotionDesc?: string;
    /**
     * @remarks
     * The promotion ID.
     *
     * @example
     * youhuiquan_promotion_option_id_for_blank
     */
    promotionId?: string;
    /**
     * @remarks
     * The promotion name.
     *
     * @example
     * Promotion name
     */
    promotionName?: string;
    /**
     * @remarks
     * Indicates whether the promotion is selected.
     *
     * @example
     * true
     */
    selected?: boolean;
    /**
     * @remarks
     * The start time of the promotion activity. The value is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1788192000000
     */
    startTimestamp?: string;
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
export declare class DescribeMultiPriceResponseBodyPriceInfoPrice extends $dara.Model {
    /**
     * @remarks
     * The currency unit. CNY for the China site. USD for the international site.
     *
     * @example
     * CNY
     */
    currency?: string;
    /**
     * @remarks
     * The discounted price.
     *
     * @example
     * 534.6
     */
    discountPrice?: number;
    /**
     * @remarks
     * The original price.
     *
     * @example
     * 6800
     */
    originalPrice?: number;
    /**
     * @remarks
     * The pricing details.
     */
    priceDetails?: DescribeMultiPriceResponseBodyPriceInfoPricePriceDetails[];
    /**
     * @remarks
     * The promotion information.
     */
    promotions?: DescribeMultiPriceResponseBodyPriceInfoPricePromotions[];
    /**
     * @remarks
     * The unsubscribed instances and pricing details.
     */
    refundInstanceIdPriceMap?: {
        [key: string]: number;
    };
    /**
     * @remarks
     * The refund price.
     *
     * @example
     * 60.00
     */
    refundPrice?: number;
    /**
     * @remarks
     * The actual payment price. The value is the original price minus the discount.
     *
     * @example
     * 82.6
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
export declare class DescribeMultiPriceResponseBodyPriceInfoRules extends $dara.Model {
    /**
     * @remarks
     * The description of the promotion rule.
     *
     * @example
     * accounts_suspect_users
     */
    description?: string;
    /**
     * @remarks
     * The pricing rule ID. The value is an integer.
     *
     * @example
     * 1001
     */
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
export declare class DescribeMultiPriceResponseBodyPriceInfo extends $dara.Model {
    /**
     * @remarks
     * The pricing information.
     */
    price?: DescribeMultiPriceResponseBodyPriceInfoPrice;
    /**
     * @remarks
     * The promotion rule information.
     */
    rules?: DescribeMultiPriceResponseBodyPriceInfoRules[];
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
export declare class DescribeMultiPriceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed pricing information.
     */
    priceInfo?: DescribeMultiPriceResponseBodyPriceInfo;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 833C4D2C-09C7-5CE6-8159-06758B964970
     */
    requestId?: string;
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
