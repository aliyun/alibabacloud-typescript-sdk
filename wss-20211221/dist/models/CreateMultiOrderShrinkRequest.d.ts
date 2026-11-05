import * as $dara from '@darabonba/typescript';
export declare class CreateMultiOrderShrinkRequestOrderItemsComponents extends $dara.Model {
    /**
     * @remarks
     * The key of the module.
     *
     * @example
     * RegionId
     */
    key?: string;
    /**
     * @remarks
     * The value of the module.
     *
     * The sample values and valid values for each key of the monthly duration package for Enterprise Edition are as follows:
     *
     * - RegionId: cn-shanghai
     * - InstanceType: eds.enterprise_office.4c8g
     * - DurationType (hours): [Enum]
     *    - 120
     *    - 250
     * - OsType: [Enum]
     *    - Windows
     *    - Linux
     * - RootDiskSize (GiB): 80
     * - RootDiskCategory: [Enum]
     *    - cloud_efficiency (ultra cloud disk)
     *    - cloud_auto (ESSD AutoPL cloud disk)
     *    - cloud_essd (enhanced standard SSD, supported only by specific instance types)
     * - RootPerformanceLevel: [Enum]
     *    - PL0
     *    - PL1
     *    - PL2
     *    - PL3
     * - DataDiskSize (GiB): Valid values are the same as those of RootDiskSize.
     * - DataDiskCategory: Valid values are the same as those of RootDiskCategory.
     * - DataPerformanceLevel: Valid values are the same as those of RootPerformanceLevel.
     *
     * @example
     * cn-shanghai
     */
    value?: string;
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
export declare class CreateMultiOrderShrinkRequestOrderItems extends $dara.Model {
    /**
     * @remarks
     * The purchase quantity.
     *
     * @example
     * 1
     */
    amount?: number;
    /**
     * @remarks
     * Specifies whether to enable automatic payment.
     *
     * @example
     * true
     */
    autoPay?: boolean;
    /**
     * @remarks
     * Specifies whether to enable auto-renewal.
     *
     * @example
     * false
     */
    autoRenew?: boolean;
    /**
     * @remarks
     * Specifies whether to modify the configuration of the monthly duration package.
     *
     * @example
     * true
     */
    buyChange?: boolean;
    /**
     * @remarks
     * The product modules.
     */
    components?: CreateMultiOrderShrinkRequestOrderItemsComponents[];
    /**
     * @remarks
     * The list of instance IDs.
     */
    instanceIds?: string[];
    /**
     * @remarks
     * The callback URL after the order is paid. Specify the URL to receive the payment result based on your business requirements.
     *
     * @example
     * https://example.com/order/paid
     */
    paidCallBackUrl?: string;
    /**
     * @remarks
     * The subscription period. Valid values:
     *
     * - If `PeriodUnit` is set to `Year`, valid values are 1, 2, 3, and 5.
     *
     * - If `PeriodUnit` is set to `Month`, valid values are 1, 2, 3, and 6.
     *
     * @example
     * 1
     */
    period?: number;
    /**
     * @remarks
     * The unit of the subscription period for the subscription instance.
     *
     * > This parameter is required only when the billing method of the instance is subscription. This parameter is case-sensitive. Make sure that the spelling is correct.
     *
     * @example
     * Year
     */
    periodUnit?: string;
    /**
     * @remarks
     * The ID of the promotion.
     *
     * @example
     * youhuiquan_promotion_option_id_for_blank
     */
    promotionId?: string;
    /**
     * @remarks
     * The list of resource IDs.
     * > For the monthly duration package, this parameter corresponds to the cloud desktop ID. This parameter is required when OrderType is not set to `create`.
     */
    resourceIds?: string[];
    /**
     * @remarks
     * The resource type.
     * > This parameter is case-sensitive. Make sure that the spelling is correct.
     *
     * This parameter is required.
     *
     * @example
     * DurationPackage
     */
    resourceType?: string;
    /**
     * @remarks
     * The unified expiration date, which can be a day from the 1st to the 28th of a month. If this parameter is not specified, the standard renewal process is applied.
     *
     * @example
     * 15
     */
    unifiedExpireDay?: number;
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
export declare class CreateMultiOrderShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The cookie information used for channel attribution. Specify this parameter if channel attribution information exists. Otherwise, you can leave it empty.
     *
     * @example
     * channel=example
     */
    channelCookie?: string;
    /**
     * @remarks
     * The product information.
     */
    orderItems?: CreateMultiOrderShrinkRequestOrderItems[];
    /**
     * @remarks
     * The order type.
     *
     * @example
     * create
     */
    orderType?: string;
    /**
     * @remarks
     * The extended properties.
     */
    propertiesShrink?: string;
    /**
     * @remarks
     * The ID of the actual end user. This parameter is required when a reseller partner places an order.
     *
     * @example
     * 100000000001
     */
    resellerOwnerUid?: number;
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
