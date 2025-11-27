// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSpecRequestServerlessConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic start and stop feature for the serverless instance that runs MySQL or PostgreSQL. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >  After the automatic start and stop feature is enabled, if no connections to the instance are established within 10 minutes, the instance is suspended. After a connection to the instance is established, the instance is automatically resumed.
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
   * The **maximum** number of RDS Capacity Units (RCUs). Valid values:
   * 
   * *   Serverless ApsaraDB RDS for MySQL instances: **1 to 32**
   * *   Serverless ApsaraDB RDS for SQL Server instances: **2 to 16**. Only integers are supported.
   * *   Serverless ApsaraDB RDS for PostgreSQL instances: **1 to 14**
   * 
   * >  The value of this parameter must be greater than or equal to the value of **MinCapacity**.
   * 
   * @example
   * 8
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The minimum number of RCUs. Valid values:****
   * 
   * *   Serverless ApsaraDB RDS for MySQL instances: **0.5 to 32**.
   * *   Serverless ApsaraDB RDS for SQL Server instances: **2 to 8**. Only integers are supported.
   * *   Serverless ApsaraDB RDS for PostgreSQL instances: **0.5 to 14**.
   * 
   * >  The value of this parameter must be less than or equal to the value of MaxCapacity.
   * 
   * @example
   * 0.5
   */
  minCapacity?: number;
  /**
   * @remarks
   * Specifies whether to enable the forceful scaling feature for the serverless instance that runs MySQL or PostgreSQL. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > 
   * 
   * *   If you set this parameter to true, **a service interruption that lasts 30 to 120 seconds occurs during forced scaling**. Process with caution.
   * 
   * *   The RCU scaling for a serverless instance immediately takes effect. In some cases, such as the execution of large transactions, the scaling does not immediately take effect. In this case, you can enable this feature to forcefully scale the RCUs of the instance.
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
   * Specifies whether to upgrade the major engine version of an ApsaraDB RDS for SQL Server instance. For more information, see [Upgrade the major engine version](https://help.aliyun.com/document_detail/127458.html). Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > *   When you upgrade the major engine version, you must also specify the required parameters such as DBInstanceId, EngineVersion, DBInstanceClass, Category, ZoneId, and VSwitchId.
   * > *   If you want to upgrade the instance edition to RDS High-availability Edition or RDS Cluster Edition, you must specify ZoneIdSlave1.
   * 
   * @example
   * false
   */
  allowMajorVersionUpgrade?: boolean;
  /**
   * @remarks
   * Specifies whether to use vouchers to offset fees. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * An invalid parameter. You do not need to specify this parameter.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * >  If you set **EngineVersion** to an SQL Server version number, you must also specify this parameter.
   * 
   * **Regular RDS instances**
   * 
   * *   **Basic**: RDS Basic Edition.
   * *   **HighAvailability**: RDS High-availability Edition.
   * *   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server.
   * *   **Cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL.
   * 
   * **Serverless instances. ApsaraDB RDS for MariaDB does not support serverless instances.**
   * 
   * *   **serverless_basic**: RDS Basic Edition. This edition is available only for serverless instances that run MySQL and PostgreSQL.
   * *   **serverless_standard**: RDS High-availability Edition. This edition is available only for serverless instances that run MySQL and PostgreSQL.
   * *   **serverless_ha**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run SQL Server.
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * true
   */
  coldDataEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the storage compression feature for the ApsaraDB RDS for MySQL instance. For more information, see [Use the storage compression feature](https://help.aliyun.com/document_detail/2861985.html). Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  compressionMode?: string;
  /**
   * @remarks
   * The instance type of the new instance. For more information, see [Specifications](https://help.aliyun.com/document_detail/26312.html). You can call the [DescribeAvailableClasses](https://help.aliyun.com/document_detail/610393.html) operation to query the instance types.
   * 
   * > *   You must specify at least one of DBInstanceClass and **DBInstanceStorage**.
   * > *   You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/610394.html) operation to query the current instance type of the instance.
   * 
   * @example
   * rds.mys2.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to query the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5*******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the new instance. Unit: GB. For more information, see [Storage types](https://help.aliyun.com/document_detail/26312.html). You can call the [DescribeAvailableClasses](https://help.aliyun.com/document_detail/610393.html) operation to query the storage capacity range that is supported by the new instance type.
   * 
   * > *   You must specify at least one of DBInstanceStorage and **DBInstanceClass**.
   * > *   You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/610394.html) operation to query the current storage capacity of the instance.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the new instance. Valid values:
   * 
   * *   **local_ssd**: local SSD.
   * *   **cloud_ssd**: SSD cloud disks. This storage medium is not recommended and is unavailable in specific Alibaba Cloud regions.
   * *   **cloud_essd**: performance level 1 (PL1) Enterprise SSD (ESSD).
   * *   **cloud_essd2**: PL2 ESSD.
   * *   **cloud_essd3**: PL3 ESSD.
   * 
   * To change the storage type, take note of the following items:
   * 
   * If the instance runs PostgreSQL, you can upgrade the storage type of the instance from standard SSDs to ESSDs. However, you cannot downgrade the storage type of the instance from ESSDs to standard SSDs. ESSDs provide the following PLs: ESSDs of PL1, ESSDs of PL2, and ESSDs of PL3. You can upgrade or downgrade the storage type between ESSD of PL1, ESSD of PL2, and ESSD of PL3. For more information, see [Configuration items](https://help.aliyun.com/document_detail/96750.html).
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
   * dhg-7a9********
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The type of change that you want to perform on the instance. Valid values:
   * 
   * *   **Up** (default): upgrades a subscription instance, or upgrades or downgrades a pay-as-you-go instance.
   * *   **Down**: downgrades a subscription instance.
   * *   **TempUpgrade**: performs auto scaling on a subscription instance that runs SQL Server. This value is required for auto scaling.
   * *   **Serverless**: modifies the auto scaling settings of a serverless instance.
   * 
   * >  If you specify only **DBInstanceStorageType**, you can leave Direction empty. For example, if you want to change only the storage type of the instance from standard SSD to Enterprise SSD (ESSD), you do not need to specify Direction.
   * 
   * @example
   * Up
   */
  direction?: string;
  /**
   * @remarks
   * The time when the new specifications take effect. Valid values:
   * 
   * >  **Specific changes may affect the instance**. Read the [Impact](https://help.aliyun.com/document_detail/96061.html) section before you specify this parameter. We recommend that you specify this parameter during off-peak hours.
   * 
   * *   **Immediate** (default): The changes immediately take effect.
   * *   **MaintainTime**: The changes take effect during the [maintenance window](https://help.aliyun.com/document_detail/610402.html) of the instance.
   * *   **ScheduleTime**: The changes take effect at the point in time that you specify. This time must be at least 12 hours later than the current time. The actual effective time is calculated based on the following formula: EffectiveTime = ScheduleTime + SwitchTime.
   * 
   * @example
   * MaintainTime
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values:
   * 
   * **Regular RDS instances**
   * 
   * *   Valid values when Engine is set to MySQL: 5.5, 5.6, 5.7, and 8.0.
   * *   Valid values when Engine is set to SQLServer: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent.
   * *   Valid values when Engine is set to PostgreSQL: 10.0, 11.0, 12.0, 13.0, 14.0, and 15.0.
   * *   Valid value when Engine is set to MariaDB: 10.3.
   * 
   * **Serverless instances. ApsaraDB RDS for MariaDB does not support serverless instances.**
   * 
   * *   Valid values when Engine is set to MySQL: 5.7 and 8.0.
   * *   Valid values when Engine is set to SQL Server: 2016_std_sl, 2017_std_sl, and 2019_std_sl.
   * *   Valid values when Engine is set to PostgreSQL: 14.0, 15.0, and 16.0.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * None
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * Specifies whether to enable the write optimization feature for the ApsaraDB RDS for MySQL instance. For more information, see [Use the write optimization feature](https://help.aliyun.com/document_detail/2858761.html). Valid values:
   * 
   * *   **optimized**: enables the feature.
   * *   **none**: disables the feature.
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
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * *   **Serverless**: serverless. This value is not supported for ApsaraDB RDS for MariaDB instances.
   * 
   * >  If you want to set this parameter to Serverless, **you must specify **AutoPause, MaxCapacity, MinCapacity, and SwitchForce. For more information, see [Overview of serverless ApsaraDB RDS for MySQL instances](https://help.aliyun.com/document_detail/411291.html), [Overview of serverless ApsaraDB RDS for SQL Server instances](https://help.aliyun.com/document_detail/604344.html), and [Overview of serverless ApsaraDB RDS for PostgreSQL instances](https://help.aliyun.com/document_detail/607742.html).
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
   * 723298850895
   */
  promotionCode?: string;
  /**
   * @remarks
   * The specification of the read-only instance when you change the storage type of the ApsaraDB RDS for MySQL instance that runs RDS High-availability Edition from cloud disk to local disk.
   * 
   * @example
   * mysqlro.n2.large.c
   */
  readOnlyDBInstanceClass?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy**********
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specifications that you want to change for a serverless instance.
   */
  serverlessConfiguration?: ModifyDBInstanceSpecRequestServerlessConfiguration;
  /**
   * @remarks
   * A deprecated parameter. You do not need to specify this parameter.
   * 
   * @example
   * Specifies whether to enable the automatic suspension feature.
   */
  sourceBiz?: string;
  /**
   * @remarks
   * The time at which you want to change the specifications. **We recommend that you perform the specification changes during off-peak hours.**
   * 
   * Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > *   The time at which you want to change the specifications **must be later than the current time**. Otherwise, the specification change task fails. If the specification change task fails, you must wait for the order to be automatically canceled, and then call this operation again.
   * > *   If you want to increase the storage capacity or change the ESSD storage type between different PLs, the specification change immediately takes effect and does not affect your workloads. You do not need to specify this parameter.
   * 
   * @example
   * 2019-07-10T13:15:12Z
   */
  switchTime?: string;
  /**
   * @remarks
   * The minor engine version number of the ApsaraDB RDS for PostgreSQL instance. For more information, see [Update the minor engine version](https://help.aliyun.com/document_detail/126002.html). If the minor engine version does not support changing the instance type, you must specify the minor engine version to **update the minor engine version when you change the instance type**.
   * 
   * Format: `rds_postgres_<Major engine version>00_<Minor engine version>`. For example, if the instance runs PostgreSQL 12, set this parameter to `rds_postgres_1200_20200830`.
   * 
   * @example
   * rds_postgres_1200_20200830
   */
  targetMinorVersion?: string;
  /**
   * @remarks
   * The validity period of the specification changes on an ApsaraDB RDS for SQL Server instance. At the end of the validity period, the specifications of the instance are restored to the specifications that are used before an [elastic upgrade](https://help.aliyun.com/document_detail/95665.html) is performed. Unit: days.
   * 
   * @example
   * 3
   */
  usedTime?: number;
  /**
   * @remarks
   * The vSwitch ID. The vSwitch must belong to the zone that is specified by **ZoneId**.
   * 
   * *   If you set **InstanceNetworkType** to **VPC**, you must also specify this parameter.
   * *   If you specify ZoneSlaveId1, you must specify the IDs of two vSwitches for this parameter and separate the IDs with a comma (,).
   * 
   * >  If you want to upgrade the major engine version of an ApsaraDB RDS for SQL Server instance by specifying AllowMajorVersionUpgrade or change the vSwitch, you must specify this parameter.
   * 
   * @example
   * vsw-bp1oxflciovg9l7163lr7
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition.
   * *   **HighAvailability**: RDS High-availability Edition.
   * *   **AlwaysOn**: RDS Cluster Edition for SQL Server.
   * *   **Finance**: RDS Enterprise Edition. This edition is available only on the China site (aliyun.com).
   * 
   * > If you set **EngineVersion** to an SQL Server version number, you must also specify this parameter.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID of the secondary instance. If you set this parameter to the same value as **ZoneId**, the single-zone deployment method is used. If you set this parameter to a different value from **ZoneId**, the multi-zone deployment method is used.
   * 
   * >  If you want to upgrade the major engine version of an ApsaraDB RDS for SQL Server instance by specifying AllowMajorVersionUpgrade or change the secondary zone, you must specify this parameter.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneIdSlave1?: string;
  static names(): { [key: string]: string } {
    return {
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

