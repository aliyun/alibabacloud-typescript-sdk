import * as $dara from '@darabonba/typescript';
export declare class CreatePolarFsRequestCustomBucketPathList extends $dara.Model {
    /**
     * @remarks
     * The custom storage bucket.
     *
     * @example
     * pfs-xxx.oss-[regionId]-internal.aliyuncs.com
     */
    bucket?: string;
    /**
     * @remarks
     * The custom storage path.
     *
     * @example
     * /data
     */
    path?: string;
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
export declare class CreatePolarFsRequest extends $dara.Model {
    /**
     * @remarks
     * The acceleration space for the Basic Edition. Unit: GB.
     *
     * @example
     * 500
     */
    accelerateStorageSize?: number;
    /**
     * @remarks
     * Specifies whether to enable acceleration. Valid values:
     *
     * - **ONLY**: enables acceleration only.
     * - **ON**: enables cold data and acceleration.
     *
     * @example
     * ONLY
     */
    accelerateSwitch?: string;
    /**
     * @remarks
     * The acceleration type. Valid values:
     *
     * - **juice**: file system acceleration.
     * - **alluxio**: transparent acceleration.
     *
     * @example
     * alluxio
     */
    accelerateType?: string;
    /**
     * @remarks
     * The list of authorized accounts for the cold storage instance. Separate multiple accounts with commas (`,`).
     *
     * @example
     * 128***********，198***********
     */
    authorizedUserIds?: string;
    /**
     * @remarks
     * Specifies whether to enable auto-renewal. Valid values:
     *
     * - **true**: enables auto-renewal.
     * - **false**: disables auto-renewal.
     *
     * Default value: **false**.
     *
     * > This parameter takes effect only when **PayType** is set to **Prepaid**.
     *
     * @example
     * true
     */
    autoRenew?: boolean;
    /**
     * @remarks
     * Specifies whether to automatically use coupons. Valid values:
     * - **true**: uses coupons (default).
     * - **false**: does not use coupons.
     *
     * @example
     * true
     */
    autoUseCoupon?: boolean;
    /**
     * @remarks
     * The edition. Valid values:
     *
     * - **basic**: Basic Edition (default).
     * - **cold**: cold storage edition.
     * - **high_performance**: high-performance edition.
     *
     * @example
     * basic
     */
    creationCategory?: string;
    /**
     * @remarks
     * The number of buckets.
     *
     * > This parameter is required only when acceleration (file system acceleration) is enabled.
     *
     * @example
     * 1
     */
    customBucketCount?: number;
    /**
     * @remarks
     * The bucket path.
     *
     * > This parameter is required only when acceleration (file system acceleration) is enabled.
     *
     * @example
     * /test
     */
    customBucketPath?: string;
    /**
     * @remarks
     * The bucket and corresponding path information.
     *
     * > This parameter is required for transparent acceleration.
     */
    customBucketPathList?: CreatePolarFsRequestCustomBucketPathList[];
    /**
     * @remarks
     * The custom AccessKey ID.
     *
     * @example
     * xxx
     */
    customOssAk?: string;
    /**
     * @remarks
     * The custom AccessKey secret.
     *
     * @example
     * xxx
     */
    customOssSk?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The database ecosystem. Valid values:
     * - **MySQL**
     * - **PostgreSQL**
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The billing method. Valid values:
     *
     * - **Postpaid**: pay-as-you-go.
     * - **Prepaid**: subscription.
     *
     * @example
     * Postpaid
     */
    payType?: string;
    /**
     * @remarks
     * If **PayType** is set to **Prepaid**, you must pass parameter. Specifies the upfront cluster as yearly or monthly. Valid values:
     *
     * - **Year**: yearly. When you select subscription, the unit is year.
     * - **Month**: monthly. When you select subscription, the unit is month.
     *
     * @example
     * Month
     */
    period?: string;
    /**
     * @remarks
     * The coupon code. If not specified, the default coupon is used.
     *
     * @example
     * 727xxxxxx934
     */
    promotionCode?: string;
    /**
     * @remarks
     * The region ID.
     * >You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-xxx
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * The storage space. Unit: GB.
     *
     * @example
     * 50
     */
    storageSpace?: number;
    /**
     * @remarks
     * The storage type. Valid values for high-performance clusters:
     * - **ESSDPL0**
     * - **ESSDPL1**
     *
     * Valid values for Basic Edition clusters:
     * - **city_redundancy** (zone redundancy)
     *
     * Valid values for cold storage clusters:
     * - **city_redundancy** (zone redundancy)
     * - **local_redundancy** (local redundancy)
     *
     * @example
     * local_redundancy
     */
    storageType?: string;
    /**
     * @remarks
     * The subscription duration. This parameter is required when **PayType** is set to **Prepaid**.
     * - When **Period** is set to **Month**, the value of **UsedTime** is an integer ranging from `1` to `9`.
     * - When **Period** is set to **Year**, the value of **UsedTime** is an integer ranging from `1` to `3`.
     *
     * @example
     * 1
     */
    usedTime?: string;
    /**
     * @remarks
     * The VPC ID.
     *
     * @example
     * vpc-*******************
     */
    VPCId?: string;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-*********************
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-beijing-i
     */
    zoneId?: string;
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
