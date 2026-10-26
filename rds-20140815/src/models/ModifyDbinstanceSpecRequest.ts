// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSpecRequestServerlessConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the [smart pause and start](https://help.aliyun.com/document_detail/2838448.html) feature for the Serverless ApsaraDB RDS for MySQL or PostgreSQL instance. Valid values:
   * * **true**: enables the feature.
   * * **false** (default): disables the feature.
   * 
   * > If no connections are established within 10 minutes, the instance enters the paused state. When a connection is established, the instance automatically wakes up.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * false
   */
  autoPause?: boolean;
  /**
   * @remarks
   * The **maximum** number of ApsaraDB RDS capacity units (RCUs) for the automatic scaling of the Serverless instance. Valid values:
   * - MySQL: **1 to 32**
   * - SQL Server: **2 to 16** (integers only)
   * - PostgreSQL: **1 to 14**
   * 
   * > The value must be greater than or equal to the value of **MinCapacity**.
   * 
   * @example
   * 8
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The **minimum** number of RCUs for the automatic scaling of the Serverless instance. Valid values:
   * 
   * - MySQL: **0.5 to 32**
   * - SQL Server: **2 to 16** (integers only)
   * - PostgreSQL: **0.5 to 14**
   * 
   * > The value must be less than or equal to the value of MaxCapacity.
   * 
   * @example
   * 0.5
   */
  minCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable forced elastic scaling for the Serverless ApsaraDB RDS for MySQL or PostgreSQL instance. Elastic scaling of RCUs usually takes effect immediately. However, in some special cases (such as during the execution of large transactions), the scaling cannot be completed immediately. In this case, you can enable this parameter to force the scaling. Valid values:
   * 
   * - **true**: enables forced elastic scaling.
   * - **false** (default): disables forced elastic scaling.
   * 
   * > After this parameter is enabled, **the instance becomes unavailable for 30 to 120 seconds during forced scaling**. Use this feature with caution based on your actual business requirements.
   * 
   * @example
   * false
   */
  switchForce?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPause: 'AutoPause',
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
      switchForce: 'SwitchForce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPause: 'boolean',
      maxCapacity: 'number',
      minCapacity: 'number',
      switchForce: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDBInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The resource allocation strategy. Valid values: ForceLocal and Optional. You cannot set this parameter to ForceLocal when you downgrade the instance.
   * 
   * @example
   * Optional
   */
  allocateStrategy?: string;
  /**
   * @remarks
   * Specifies whether to perform a [major engine version upgrade](https://help.aliyun.com/document_detail/127458.html) for the ApsaraDB RDS for SQL Server instance. Valid values:
   * - **true**: performs the upgrade.
   * - **false** (default): does not perform the upgrade.
   * 
   * > - When you perform a major engine version upgrade, you must also pass the other required parameters, including DBInstanceId, EngineVersion, DBInstanceClass, Category, ZoneId, and VSwitchId.
   * > - If you want to upgrade the instance to the high availability series or Cluster Edition, you must also specify the ZoneIdSlave1 parameter.
   * 
   * @example
   * false
   */
  allowMajorVersionUpgrade?: boolean;
  /**
   * @remarks
   * Specifies whether to use vouchers to offset fees. Valid values:
   * 
   * - **true** (default): uses vouchers.
   * - **false**: does not use vouchers.
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the [I/O performance burst feature for premium performance disks](https://help.aliyun.com/document_detail/2340501.html). Valid values:
   * 
   * - **true**: enables the feature.
   * - **false**: disables the feature.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The [instance edition](https://help.aliyun.com/document_detail/53509.html). Valid values:
   * > This parameter is required when **EngineVersion** is set to a SQL Server version number.
   * <details>
   * <summary>Regular ApsaraDB RDS instances</summary>
   * 
   * - **Basic**: Basic Edition
   * - **HighAvailability**: high availability series
   * - **AlwaysOn**: Cluster Edition (for SQL Server)
   * - **Cluster**: Cluster Edition (for MySQL)
   * - <props="china">**Finance**: Finance Edition
   * 
   * </details>
   * 
   * <details>
   * <summary>Serverless ApsaraDB RDS instances (not supported for MariaDB)</summary>
   * 
   * - **serverless_basic**: Serverless Basic Edition (only for MySQL and PostgreSQL)
   * - **serverless_standard**: Serverless high availability series (only for MySQL and PostgreSQL)
   * - **serverless_ha**: Serverless high availability series (only for SQL Server)
   * 
   * </details>
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to enable the [data archiving feature](https://help.aliyun.com/document_detail/2701832.html) for premium performance disks. Valid values:
   * 
   * - **true**: enables the feature.
   * 
   * - **false**: disables the feature.
   * 
   * @example
   * true
   */
  coldDataEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the [storage compression feature](https://help.aliyun.com/document_detail/2861985.html) for ApsaraDB RDS for MySQL. Valid values:
   * 
   * - **on**: enables the feature.
   * - **off**: disables the feature.
   * 
   * @example
   * on
   */
  compressionMode?: string;
  /**
   * @remarks
   * The [target instance type](https://help.aliyun.com/document_detail/26312.html). You can call the [DescribeAvailableClasses](https://help.aliyun.com/document_detail/610393.html) operation to query the available instance types.
   * 
   * > * You must specify at least one of the **DBInstanceClass** and **DBInstanceStorage** parameters.
   * > * You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/610394.html) operation to view the current instance type.
   * 
   * @example
   * mysql.n8.large.2c
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The [target storage capacity](https://help.aliyun.com/document_detail/26312.html). Unit: GB. You can call the [DescribeAvailableClasses](https://help.aliyun.com/document_detail/610393.html) operation to query the available storage capacity range for the target instance type.
   * 
   * > * You must specify at least one of the **DBInstanceStorage** and **DBInstanceClass** parameters.
   * > * You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/610394.html) operation to view the current storage capacity of the instance.
   * 
   * @example
   * 100
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * * **local_ssd**: premium local SSD
   * * **cloud_ssd**: standard SSD (not recommended; no longer available in some regions)
   * * **cloud_essd**: PL1 ESSD
   * * **cloud_essd2**: PL2 ESSD
   * * **cloud_essd3**: PL3 ESSD
   * * **general_essd**: premium performance disk
   * 
   * When you change the storage type of the instance, note the following items:
   * <props="china">* If you change the storage type from ESSD to premium performance disk, other parameters such as the instance type and storage capacity must remain unchanged and cannot be modified.
   * 
   * <props="china">* For ApsaraDB RDS for MySQL or ApsaraDB RDS for MariaDB instances whose storage type is standard SSD, you can set this parameter to `cloud_essd` to [upgrade the storage type to ESSD](https://help.aliyun.com/document_detail/314678.html). To perform the upgrade, you must specify both **DBInstanceClass** and **DBInstanceStorage**, and their values must be the same as the current values of the instance.
   * 
   * <props="china">* For ApsaraDB RDS for PostgreSQL instances, you can upgrade standard SSDs to [ESSDs of any PL](https://help.aliyun.com/document_detail/96750.html), but **you cannot downgrade ESSDs to standard SSDs**.
   * 
   * <props="intl">For ApsaraDB RDS for PostgreSQL instances, you can upgrade standard SSDs to [ESSDs of any PL](https://help.aliyun.com/document_detail/96750.html), but **you cannot downgrade ESSDs to standard SSDs**.
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster.
   * 
   * @example
   * dhg-7a9****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The type of specification change. Valid values:
   * 
   * - **Up** (default): upgrade for subscription instances, and upgrade or downgrade for pay-as-you-go instances.
   * - **Down**: downgrade for subscription instances.
   * - **TempUpgrade**: elastic specification change for subscription ApsaraDB RDS for SQL Server instances. This value is required for elastic specification changes.
   * - **Serverless**: elastic setting adjustment for Serverless instances.
   * 
   * > If you only change the **DBInstanceStorageType** parameter, such as changing standard SSDs to ESSDs, leave this parameter empty.
   * 
   * @example
   * Up
   */
  direction?: string;
  /**
   * @remarks
   * The effective period of the new configurations. Valid values:
   * > **Changing some configurations may affect the instance**. Read the [Impact section in the feature documentation](https://help.aliyun.com/document_detail/96061.html) before you configure this parameter. We recommend that you perform the operation during off-peak hours.
   * * **Immediate** (default): The new configurations immediately take effect.
   * * **MaintainTime**: The new configurations take effect within the [maintenance window](https://help.aliyun.com/document_detail/610402.html).
   * * **ScheduleTime**: The new configurations take effect at a specified time. The specified time must be at least 12 hours later than the current time. The actual switchover time follows the formula: EffectiveTime = ScheduleTime + SwitchTime.
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
   * - MySQL: 5.5, 5.6, 5.7, and 8.0
   * - SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, 2019_ent, 2022_web, 2022_std_ha, 2022_ent, 2025_std, and 2025_ent
   * - PostgreSQL: 10.0, 11.0, 12.0, 13.0, 14.0, and 15.0
   * - MariaDB: 10.3
   * 
   * </details>
   * 
   * <details>
   * <summary>Serverless ApsaraDB RDS instances (not supported for MariaDB)</summary>
   * 
   * - MySQL: 5.7 and 8.0
   * - SQL Server: 2016_std_sl, 2017_std_sl, and 2019_std_sl
   * - PostgreSQL: 14.0, 15.0, and 16.0
   * 
   * </details>
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable the [Buffer Pool Extension (BPE) feature](https://help.aliyun.com/document_detail/2527067.html) for premium performance disks. Valid values:
   * 
   * -  **1**: enables the feature.
   * -  **0**: disables the feature.
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the [16KB atomic write feature](https://help.aliyun.com/document_detail/2858761.html) for ApsaraDB RDS for MySQL. Valid values:
   * 
   * - **optimized**: enables the feature.
   * - **none**: disables the feature.
   * 
   * @example
   * optimized
   */
  optimizedWrites?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The current billing method of the instance. Valid values:
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * - **Serverless** (not supported for ApsaraDB RDS for MariaDB instances): Serverless.
   * 
   * > To change the billing method to Serverless, **you must configure** the auto-start and auto-stop (AutoPause), scaling range (MaxCapacity and MinCapacity), and elastic policy (SwitchForce) parameters. For more information, see [Overview of Serverless ApsaraDB RDS for MySQL instances](https://help.aliyun.com/document_detail/411291.html), [Overview of Serverless ApsaraDB RDS for SQL Server instances](https://help.aliyun.com/document_detail/604344.html), and [Overview of Serverless ApsaraDB RDS for PostgreSQL instances](https://help.aliyun.com/document_detail/607742.html).
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
   * The [target instance type of the read-only instance](https://help.aliyun.com/document_detail/276980.html) when you change the specifications of an ApsaraDB RDS for MySQL High-availability Edition instance with Premium Local SSDs to a cloud disk instance.
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
   * The configurations for changing the Serverless instance.
   */
  serverlessConfiguration?: ModifyDBInstanceSpecRequestServerlessConfiguration;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not need to be configured.
   * 
   * @example
   * test
   */
  sourceBiz?: string;
  /**
   * @remarks
   * The time when the specification change is performed. **We recommend that you perform the specification change during off-peak hours**.
   * 
   * Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC time).
   * 
   * > - The specified time **must be later than the current time** (the time when the API call is initiated). Otherwise, the specification change task fails. After the task fails, you must wait for the order to be automatically canceled before you can initiate the call again.
   * > - If you only increase the storage capacity or change the ESSD storage type, the specification change is performed immediately after submission because it does not affect your business. You do not need to configure this parameter.
   * 
   * @example
   * 2019-07-10T13:15:12Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The [minor engine version](https://help.aliyun.com/document_detail/126002.html) of the ApsaraDB RDS for PostgreSQL instance. When you change the instance type and an error indicating that the minor engine version is not supported is returned, you must specify the minor engine version **to upgrade the minor engine version during the instance type change**.
   * 
   * Format: `rds_postgres_<Major version number>00_<Minor version number>`. Example for version 12 released on August 30, 2020: `rds_postgres_1200_20200830`.
   * 
   * @example
   * rds_postgres_1200_20200830
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The duration of the [elastic upgrade](https://help.aliyun.com/document_detail/95665.html) for the ApsaraDB RDS for SQL Server instance. Unit: days.
   * 
   * @example
   * 3
   */
  usedTime?: number;
  /**
   * @remarks
   * The vSwitch ID. The zone where the vSwitch resides must correspond to the zone ID specified in **ZoneId**.
   * 
   * - The network type **InstanceNetworkType** must be set to **VPC**.
   * - If you specify ZoneSlaveId1 (the secondary zone ID), you must specify two vSwitch IDs and separate them with a comma (,).
   * > You only need to specify the vSwitch when you upgrade the major engine version of an ApsaraDB RDS for SQL Server instance (AllowMajorVersionUpgrade), or when you need to set this parameter to switch the vSwitch.
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
   * The zone ID of the secondary node. If this value is the same as the value of **ZoneId**, it is a single-zone deployment. If this value is different from the value of **ZoneId**, it is a multi-zone deployment.
   * > You only need to specify the secondary zone when you upgrade the major engine version of an ApsaraDB RDS for SQL Server instance (AllowMajorVersionUpgrade), or when you need to set this parameter to switch the secondary zone.
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
      serverlessConfiguration: 'ServerlessConfiguration',
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
      serverlessConfiguration: ModifyDBInstanceSpecRequestServerlessConfiguration,
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
    if(this.serverlessConfiguration && typeof (this.serverlessConfiguration as any).validate === 'function') {
      (this.serverlessConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

