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
   * The acceleration storage space for Basic Edition with acceleration enabled. Unit: GB.
   * 
   * @example
   * 500
   */
  accelerateStorageSize?: number;
  /**
   * @remarks
   * The acceleration mode. Valid values:
   * 
   * - **ONLY**: enables acceleration only.
   * - **ON**: enables cold data storage and acceleration.
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
   * The list of authorized account IDs for Cold Storage Edition instances, separated by commas (,).
   * 
   * @example
   * 128***********，198***********
   */
  authorizedUserIds?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - **true**: Auto-renewal is enabled.
   * - **false**: Auto-renewal is disabled.
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
   * - **true**: Coupons are used (default).
   * - **false**: Coupons are not used.
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
   * - **cold**: Cold Storage Edition.
   * - **high_performance**: High-performance Edition.
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
   * The bucket and path information.
   * 
   * > This parameter is required for transparent acceleration scenarios.
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
   * The database engine. Valid values:
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
   * This parameter is required when **PayType** is set to **Prepaid**. Specifies whether the subscription cluster uses a yearly or monthly billing cycle. You must pass this parameter when the billing method is subscription. 
   * 
   * - **Year**: The subscription period is measured in years.
   * - **Month**: The subscription period is measured in months.
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
   * The storage space. Unit: GB.
   * 
   * @example
   * 50
   */
  storageSpace?: number;
  /**
   * @remarks
   * Valid values for high-performance storage type:
   * - **ESSDPL0**
   * - **ESSDPL1**
   * 
   * Valid values for Basic Edition storage type:
   * - **city_redundancy (zone-redundant)**
   * 
   * Valid values for Cold Storage Edition storage type:
   * - **city_redundancy (zone-redundant)**
   * - **local_redundancy (locally redundant)**
   * 
   * @example
   * local_redundancy
   */
  storageType?: string;
  /**
   * @remarks
   * This parameter is required when **PayType** is set to **Prepaid**.
   * - When **Period** is set to **Month**, the valid values of **UsedTime** are integers in the range of `[1-9]`.
   * - When **Period** is set to **Year**, the valid values of **UsedTime** are integers in the range of `[1-3]`.
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

