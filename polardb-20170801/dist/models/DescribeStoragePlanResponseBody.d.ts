import * as $dara from '@darabonba/typescript';
export declare class DescribeStoragePlanResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud account ID.
     *
     * @example
     * 18170112322*****
     */
    aliUid?: string;
    /**
     * @remarks
     * The commodity code.
     *
     * @example
     * polardb_package
     */
    commodityCode?: string;
    /**
     * @remarks
     * The expiration time of the storage plan.
     *
     * @example
     * 2021-10-23 00:00:00
     */
    endTimes?: string;
    /**
     * @remarks
     * The capacity unit of the storage plan.
     *
     * @example
     * GB
     */
    initCapaCityViewUnit?: string;
    /**
     * @remarks
     * The total capacity of the storage plan.
     *
     * @example
     * 500.000
     */
    initCapacityViewValue?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * 500072****
     */
    instanceId?: string;
    /**
     * @remarks
     * The periodic capacity unit of the storage plan.
     *
     * @example
     * GB
     */
    periodCapaCityViewUnit?: string;
    /**
     * @remarks
     * The periodic capacity of the storage plan. The periodic capacity gradually decreases as the storage plan is used.
     *
     * @example
     * 400.000
     */
    periodCapacityViewValue?: string;
    /**
     * @remarks
     * The period duration, which indicates that the capacity of the storage plan is measured and consumed on an hourly basis.
     *
     * @example
     * hour
     */
    periodTime?: string;
    /**
     * @remarks
     * The product name.
     *
     * @example
     * polardb
     */
    prodCode?: string;
    /**
     * @remarks
     * The purchase time of the storage plan.
     *
     * @example
     * 2021-09-22 12:03:27
     */
    purchaseTimes?: string;
    /**
     * @remarks
     * The effective period of the storage plan.
     *
     * @example
     * 2021-09-22 12:03:25
     */
    startTimes?: string;
    /**
     * @remarks
     * The status of the storage plan. Valid values:
     *
     * - **Valid**: The storage plan is valid.
     *
     * - **Invalid**: The storage plan is invalid.
     *
     * @example
     * Valid
     */
    status?: string;
    /**
     * @remarks
     * The type of the storage plan. Valid values:
     *
     * - **Overseas**: Hong Kong (China) and regions outside the Chinese mainland.
     *
     * - **Mainland**: The Chinese mainland.
     *
     * - **Financial**: Alibaba Finance Cloud.
     *
     * @example
     * Overseas
     */
    storageType?: string;
    /**
     * @remarks
     * The type of the resource plan. Valid values:
     *
     *  - **FPT_polardb_package_absolute_1540888383**: The Chinese mainland.
     *
     * - **FPT_polardb_package_absolute_1540890081**: Hong Kong (China) and regions outside the Chinese mainland.
     *
     * - **FPT_polardb_package_absolute_1567151499**: Alibaba Finance Cloud.
     *
     * @example
     * FPT_polardb_package_absolute_1540890081
     */
    templateName?: string;
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
export declare class DescribeStoragePlanResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of storage plans.
     */
    items?: DescribeStoragePlanResponseBodyItems[];
    /**
     * @remarks
     * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type.
     *
     * @example
     * 10
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     *
     * - **30**
     *
     * - **50**
     *
     * - **100**
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * D9384D30-5C9A-11EA-BFC0-F754D2Bxxxx
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 10
     */
    totalRecordCount?: number;
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
