import * as $dara from '@darabonba/typescript';
export declare class DescribeMultiPriceRequestOrderItemsComponents extends $dara.Model {
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
     * The following section describes the sample values and valid values of each key for the Enterprise Edition monthly package:
     *
     * - RegionId: cn-shanghai
     * - InstanceType: eds.enterprise_office.4c8g
     * - DurationType (hours): Valid values:
     *    - 120
     *    - 250
     * - OsType: Valid values:
     *    - Windows
     *    - Linux
     * - RootDiskSize (GiB): 80
     * - RootDiskCategory: Valid values:
     *    - cloud_efficiency (ultra cloud disk)
     *    - cloud_auto (ESSD AutoPL cloud disk)
     *    - cloud_essd (enhanced standard SSD, supported only by specific instance types)
     * - RootPerformanceLevel: Valid values:
     *    - PL0
     *    - PL1
     *    - PL2
     *    - PL3
     * - DataDiskSize (GiB): Same as RootDiskSize.
     * - DataDiskCategory: Same as RootDiskCategory.
     * - DataPerformanceLevel: Same as RootPerformanceLevel.
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
export declare class DescribeMultiPriceRequestOrderItems extends $dara.Model {
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
     * The list of product modules.
     */
    components?: DescribeMultiPriceRequestOrderItemsComponents[];
    /**
     * @remarks
     * The extended data of the order item, which is passed as a JSON string. The structure varies based on the order scenario. For the billing method change scenario, you can pass the instance and the list of target billing methods. If no extended data is required, you can leave this parameter empty.
     *
     * @example
     * [{"regionId":"cn-hangzhou","resourceType":"Desktop","chargeType":"POSTPAY","instanceId":"ecd-6wye9optu0kag****"}]
     */
    data?: string;
    /**
     * @remarks
     * The list of instance IDs.
     */
    instanceIds?: string[];
    /**
     * @remarks
     * The subscription period. Valid values:
     *
     * - When `PeriodUnit` is set to `Year`: 1, 2, and 3.
     *
     * - When `PeriodUnit` is set to `Month`: 1, 2, 3, and 6.
     *
     * @example
     * 1
     */
    period?: number;
    /**
     * @remarks
     * The unit of the subscription period.
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
     */
    resourceIds?: string[];
    /**
     * @remarks
     * The resource type.
     * > This parameter is case-sensitive. Make sure that the spelling is correct.
     *
     * @example
     * DurationPackage
     */
    resourceType?: string;
    /**
     * @remarks
     * The subscription period of the savings plan. For example, 1Year indicates one year.
     *
     * @example
     * 1Year
     */
    savingPlanPeriod?: string;
    /**
     * @remarks
     * The unified expiration date, which can be a day from the 1st to the 28th of a month. If you do not specify this parameter, the instance is renewed in the standard way.
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
export declare class DescribeMultiPriceRequest extends $dara.Model {
    /**
     * @remarks
     * The product information.
     */
    orderItems?: DescribeMultiPriceRequestOrderItems[];
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
     * The package code. You do not need to specify this parameter for non-package types.
     *
     * @example
     * pacakge
     */
    packageCode?: string;
    /**
     * @remarks
     * The user ID for resource ownership in the reseller pattern. You do not need to specify this parameter for non-reseller patterns.
     *
     * @example
     * 182864463481****
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
