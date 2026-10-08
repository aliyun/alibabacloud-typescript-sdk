// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSpecShrinkRequest extends $dara.Model {
  allocateStrategy?: string;
  /**
   * @remarks
   * Specifies whether to enable [major engine version upgrade](https://help.aliyun.com/document_detail/127458.html) for the SQL Server instance. Valid values:
   * 
   * @example
   * false
   */
  allowMajorVersionUpgrade?: boolean;
  /**
   * @remarks
   * Specifies whether to use coupons to offset fees. Valid values:
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the [I/O performance burst feature for Premium ESSDs](https://help.aliyun.com/document_detail/2340501.html). Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The [instance edition](https://help.aliyun.com/document_detail/53509.html). Valid values:
   * > This parameter is required if **EngineVersion** is set to a SQL Server version number.
   * <details>
   * <summary>Regular ApsaraDB RDS instances</summary>
   * 
   * - **Basic**: Basic Edition
   * - **HighAvailability**: High-availability Edition
   * - **AlwaysOn**: SQL Server Cluster Edition
   * - **Cluster**: MySQL Cluster Edition.
   * - <props="china">**Finance**: Enterprise Edition
   * 
   * </details>
   * 
   * <details>
   * <summary>Serverless ApsaraDB RDS instances (not supported for MariaDB)</summary>
   * 
   * - **serverless_basic**: Serverless Basic Edition (applicable only to MySQL and PostgreSQL)
   * - **serverless_standard**: Serverless High-availability Edition (applicable only to MySQL and PostgreSQL)
   * - **serverless_ha**: Serverless High-availability Edition (applicable only to SQL Server)
   * 
   * </details>
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The [cold data archiving feature](https://help.aliyun.com/document_detail/2701832.html) for premium performance disks. Valid values:
   * 
   * @example
   * true
   */
  coldDataEnabled?: boolean;
  /**
   * @remarks
   * The MySQL [storage compression feature](https://help.aliyun.com/document_detail/2861985.html). Valid values:
   * 
   * @example
   * on
   */
  compressionMode?: string;
  /**
   * @remarks
   * The [target instance type](https://help.aliyun.com/document_detail/26312.html). You can call [DescribeAvailableClasses](https://help.aliyun.com/document_detail/610393.html) to query the instance types to which the instance can be changed.
   * 
   * @example
   * mysql.n8.large.2c
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The [target storage capacity](https://help.aliyun.com/document_detail/26312.html). Unit: GB. You can call [DescribeAvailableClasses](https://help.aliyun.com/document_detail/610393.html) to query the available storage capacity range for the target instance type.
   * 
   * @example
   * 100
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance storage type. Valid values:
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The dedicated cluster ID.
   * 
   * @example
   * dhg-7a9****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The type of specification change. Valid values:
   * 
   * - **Up** (default): upgrade of a subscription instance or upgrade/downgrade of a pay-as-you-go instance.
   * - **Down**: downgrade of a subscription instance.
   * - **TempUpgrade**: elastic specification change of a subscription ApsaraDB RDS for SQL Server instance. This value is required for elastic specification changes.
   * - **Serverless**: configuration of elastic settings for a serverless instance.
   * 
   * > If you want to change only the **DBInstanceStorageType** parameter, for example, from standard SSD to ESSD, leave this parameter empty.
   * 
   * @example
   * Up
   */
  direction?: string;
  /**
   * @remarks
   * The time when the new configurations take effect. Valid values:
   * > **Changing certain configurations may affect the instance**. Read the [impact section in the feature documentation](https://help.aliyun.com/document_detail/96061.html) before configuring this parameter. Perform this operation during off-peak hours.
   * * **Immediate** (default): The new configurations take effect immediately.
   * * **MaintainTime**: The new configurations take effect during the [maintenance window](https://help.aliyun.com/document_detail/610402.html).
   * * **ScheduleTime**: The new configurations take effect at a specified time. The specified time must be at least 12 hours later than the current time. The actual switchover time follows the rule: EffectiveTime = ScheduleTime + SwitchTime.
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The database engine version. Valid values:
   * <details>
   * <summary>Regular ApsaraDB RDS instances</summary>
   * 
   * - MySQL: 5.5, 5.6, 5.7, 8.0
   * - SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, 2019_ent, 2022_web, 2022_std_ha, 2022_ent, 2025_std, 2025_ent
   * - PostgreSQL: 10.0, 11.0, 12.0, 13.0, 14.0, 15.0
   * - MariaDB: 10.3
   * 
   * </details>
   * 
   * <details>
   * <summary>Serverless ApsaraDB RDS instances (MariaDB is not supported)</summary>
   * 
   * - MySQL: 5.7, 8.0
   * - SQL Server: 2016_std_sl, 2017_std_sl, 2019_std_sl
   * - PostgreSQL: 14.0, 15.0, 16.0
   * 
   * </details>
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The [Buffer Pool Extension (BPE) feature](https://help.aliyun.com/document_detail/2527067.html) for premium performance disks. Valid values:
   * 
   * -  **1**: Enabled.
   * -  **0**: Not enabled.
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the MySQL [16KB atomic write feature](https://help.aliyun.com/document_detail/2858761.html). Valid values:
   * 
   * @example
   * optimized
   */
  optimizedWrites?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * - **Serverless** (not supported for MariaDB instances): serverless billing method.
   * 
   * > To change the billing method to Serverless, you **must configure the following parameters**: automatic start and stop (AutoPause), scaling range (MaxCapacity and MinCapacity), and elastic policy (SwitchForce). For more information, see [Introduction to MySQL Serverless instances](https://help.aliyun.com/document_detail/411291.html), [Introduction to SQL Server Serverless instances](https://help.aliyun.com/document_detail/604344.html), and [Introduction to PostgreSQL Serverless instances](https://help.aliyun.com/document_detail/607742.html).
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 72329885****
   */
  promotionCode?: string;
  /**
   * @remarks
   * The [target instance type of read-only instances](https://help.aliyun.com/document_detail/276980.html) when you perform an Upgrade/Downgrade to change a MySQL high availability (HA) instance with Premium Local SSDs to a cloud disk instance. This parameter is active only when the instance meets the requirements.
   * 
   * @example
   * mysqlro.n2.large.1c
   */
  readOnlyDBInstanceClass?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The serverless instance configuration for the specification change.
   */
  serverlessConfigurationShrink?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to configure this parameter.
   * 
   * @example
   * test
   */
  sourceBiz?: string;
  /**
   * @remarks
   * The time at which the specification change is performed. **Perform the specification change during off-peak hours.**
   * 
   * @example
   * 2019-07-10T13:15:12Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The [minor engine version](https://help.aliyun.com/document_detail/126002.html) of the PostgreSQL instance. If the specification change fails because the minor engine version is not supported, specify this parameter to **upgrade the minor engine version during the specification change**.
   * 
   * @example
   * rds_postgres_1200_20200830
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The duration of the SQL Server [elastic upgrade](https://help.aliyun.com/document_detail/95665.html). Unit: days.
   * 
   * @example
   * 3
   */
  usedTime?: number;
  /**
   * @remarks
   * The vSwitch ID. The zone of the vSwitch must correspond to the zone ID specified in **ZoneId**.
   * 
   * @example
   * vsw-bp1oxflciovg9l7******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID of the secondary node. If this value is the same as **ZoneId**, the instance uses single-zone deployment. If this value is different from **ZoneId**, the instance uses multi-zone deployment.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      allowMajorVersionUpgrade: 'AllowMajorVersionUpgrade',
      autoUseCoupon: 'AutoUseCoupon',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      coldDataEnabled: 'ColdDataEnabled',
      compressionMode: 'CompressionMode',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      direction: 'Direction',
      effectiveTime: 'EffectiveTime',
      engineVersion: 'EngineVersion',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      optimizedWrites: 'OptimizedWrites',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      promotionCode: 'PromotionCode',
      readOnlyDBInstanceClass: 'ReadOnlyDBInstanceClass',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serverlessConfigurationShrink: 'ServerlessConfiguration',
      sourceBiz: 'SourceBiz',
      switchTime: 'SwitchTime',
      targetMinorVersion: 'TargetMinorVersion',
      usedTime: 'UsedTime',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
      zoneIdSlave1: 'ZoneIdSlave1',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      allowMajorVersionUpgrade: 'boolean',
      autoUseCoupon: 'boolean',
      burstingEnabled: 'boolean',
      category: 'string',
      coldDataEnabled: 'boolean',
      compressionMode: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      dedicatedHostGroupId: 'string',
      direction: 'string',
      effectiveTime: 'string',
      engineVersion: 'string',
      ioAccelerationEnabled: 'string',
      optimizedWrites: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      promotionCode: 'string',
      readOnlyDBInstanceClass: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serverlessConfigurationShrink: 'string',
      sourceBiz: 'string',
      switchTime: 'string',
      targetMinorVersion: 'string',
      usedTime: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
      zoneIdSlave1: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

