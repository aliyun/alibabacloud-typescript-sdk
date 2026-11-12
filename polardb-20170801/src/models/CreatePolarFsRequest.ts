// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolarFsRequestCustomBucketPathList extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolarFsRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration space size. Unit: GB. The value must be no less than 5000 and must be a multiple of 1000. This parameter is required when acceleration is enabled for the basic edition.
   * 
   * @example
   * 5000
   */
  accelerateStorageSize?: number;
  /**
   * @remarks
   * The acceleration startup mode. Valid values:
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
   * The list of authorized accounts for the cold storage edition instance. Separate multiple accounts with commas (`,`).
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
   * > This parameter takes effect only when the **PayType** parameter is set to **Prepaid**.
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
   * The edition. Valid values: basic (Basic Edition, default), high_performance (High-performance Edition), and cold (Cold Storage Edition). For the basic edition, you must specify the AccelerateSwitch and AccelerateStorageSize parameters. For the high_performance edition, you must specify the StorageType parameter (essdpl0 or essdpl1). For the cold edition, the StorageType parameter (local_redundancy or city_redundancy) is optional.
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
   * > This parameter is required for transparent acceleration scenarios.
   */
  customBucketPathList?: CreatePolarFsRequestCustomBucketPathList[];
  /**
   * @remarks
   * The custom AccessKey ID.
   * 
   * @example
   * LTAIExampleCustomOssKeyId
   */
  customOssAk?: string;
  /**
   * @remarks
   * The custom AccessKey secret.
   * 
   * @example
   * ExampleCustomOssSecret123
   */
  customOssSk?: string;
  /**
   * @remarks
   * The PolarDB cluster ID. This parameter is required when you call this operation. If this parameter is not specified, the InvalidDBClusterId.Malformed error is returned.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database ecosystem. Valid values: polardb_mysql (PolarDB for MySQL), polardb_pg (PolarDB for PostgreSQL), and polar_agentic_db (AgenticDB). The gateway maps these values to the mysql, postgresql, and agentic_db backends respectively. Pass the request value instead of the display name such as MySQL or PostgreSQL. If an ActionUnauthorized (HTTP 403) error is returned, check the call permissions.
   * 
   * @example
   * polardb_mysql
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
   * If the billing method is **Prepaid**, this is a required pass parameter. Specifies whether the subscription cluster is billed by year or by month. 
   * 
   * - **Year**: year. If you select subscription, the unit is year.
   * - **Month**: month. If you select subscription, the unit is month.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The coupon code. If this parameter is not specified, the default coupon is used.
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
   * The storage type. For the high_performance edition, use lowercase essdpl0 or essdpl1. For the cold edition, use local_redundancy or city_redundancy. Select the value based on the edition. The value is case-sensitive.
   * 
   * @example
   * local_redundancy
   */
  storageType?: string;
  /**
   * @remarks
   * The subscription duration. This parameter is required when the **PayType** parameter is set to **Prepaid**.
   * - If the **Period** parameter is set to **Month**, the value of **UsedTime** must be an integer in the range of `[1-9]`.
   * - If the **Period** parameter is set to **Year**, the value of **UsedTime** must be an integer in the range of `[1-3]`.
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
  static names(): { [key: string]: string } {
    return {
      accelerateStorageSize: 'AccelerateStorageSize',
      accelerateSwitch: 'AccelerateSwitch',
      accelerateType: 'AccelerateType',
      authorizedUserIds: 'AuthorizedUserIds',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      creationCategory: 'CreationCategory',
      customBucketCount: 'CustomBucketCount',
      customBucketPath: 'CustomBucketPath',
      customBucketPathList: 'CustomBucketPathList',
      customOssAk: 'CustomOssAk',
      customOssSk: 'CustomOssSk',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      payType: 'PayType',
      period: 'Period',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      usedTime: 'UsedTime',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateStorageSize: 'number',
      accelerateSwitch: 'string',
      accelerateType: 'string',
      authorizedUserIds: 'string',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      creationCategory: 'string',
      customBucketCount: 'number',
      customBucketPath: 'string',
      customBucketPathList: { 'type': 'array', 'itemType': CreatePolarFsRequestCustomBucketPathList },
      customOssAk: 'string',
      customOssSk: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      payType: 'string',
      period: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageSpace: 'number',
      storageType: 'string',
      usedTime: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customBucketPathList)) {
      $dara.Model.validateArray(this.customBucketPathList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

