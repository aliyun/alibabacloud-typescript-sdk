// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeBabelfishConfig";
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeDbclusterNodes";
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeExtra";
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeReadOnlyDbinstanceIds";
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeServerlessConfig";
import { DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones } from "./DescribeDbinstanceAttributeResponseBodyItemsDbinstanceAttributeSlaveZones";


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute extends $dara.Model {
  /**
   * @remarks
   * The maximum number of accounts that can be created on the instance.
   * 
   * @example
   * 50
   */
  accountMaxQuantity?: number;
  /**
   * @remarks
   * The advanced features that are enabled for the instance. If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run **SQL Server**. Valid values:
   * 
   * *   **LinkedServer**
   * *   **DistributeTransaction**
   * 
   * @example
   * LinkedServer
   */
  advancedFeatures?: string;
  /**
   * @remarks
   * The method that is used to update the minor engine version of the instance. Valid values:
   * 
   * *   **Auto**: automatic update.
   * *   **Manual**: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
   * 
   * @example
   * Auto
   */
  autoUpgradeMinorVersion?: string;
  /**
   * @remarks
   * The availability status of the instance in percentage.
   * 
   * @example
   * 100.0%
   */
  availabilityValue?: string;
  /**
   * @remarks
   * The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
   * 
   * >  This parameter applies only to ApsaraDB RDS for PostgreSQL instances for which Babelfish is enabled. For more information, see [Introduction to Babelfish](https://help.aliyun.com/document_detail/428613.html).
   */
  babelfishConfig?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig;
  /**
   * @remarks
   * This is a reserved parameter and is not in use.
   * 
   * @example
   * None
   */
  blueGreenDeploymentName?: string;
  /**
   * @remarks
   * This is a reserved parameter and is not in use.
   * 
   * @example
   * None
   */
  blueInstanceName?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to specify this parameter.
   * 
   * @example
   * false
   */
  bpeEnabled?: string;
  /**
   * @remarks
   * Indicates whether the I/O burst feature is enabled for Premium ESSDs. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  For more information about the I/O burst feature, see [What are Premium ESSDs?](https://help.aliyun.com/document_detail/2340501.html)
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the conditions for a temporary upgrade are met.
   * 
   * >  Pay-as-you-go instances do not support temporary upgrades.
   * 
   * @example
   * true
   */
  canTempUpgrade?: boolean;
  /**
   * @remarks
   * The RDS edition. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability**: RDS High-availability Edition
   * *   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL
   * *   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server
   * *   **Finance**: RDS Enterprise Edition
   * *   **Serverless_basic**: RDS Basic Edition for serverless instances
   * 
   * @example
   * Basic
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether the data archiving feature is enabled for Premium ESSDs. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * For more information about the data archiving feature, see [Use the data archiving feature](https://help.aliyun.com/document_detail/2701832.html).
   * 
   * @example
   * None
   */
  coldDataEnabled?: boolean;
  /**
   * @remarks
   * The character set collation of the instance.
   * 
   * @example
   * Chinese_PRC_CI_AS
   */
  collation?: string;
  /**
   * @remarks
   * The storage compression mode of the instance.
   * 
   * @example
   * on, off
   */
  compressionMode?: string;
  /**
   * @remarks
   * The storage compression ratio.
   * 
   * @example
   * 1.25
   */
  compressionRatio?: string;
  /**
   * @remarks
   * This is a reserved parameter and is not in use.
   * 
   * @example
   * None
   */
  computeBurstEnabled?: boolean;
  /**
   * @remarks
   * The connection mode of the instance. Valid values:
   * 
   * *   **Standard**: standard mode
   * *   **Safe**: database proxy mode
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * rm-uf6wjk5*****.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The type of the proxy that is used by the instance. Valid values:
   * 
   * *   **1**: shared database proxy
   * *   **2**: dedicated database proxy
   * 
   * >  We recommend that you use the **ProxyType** parameter instead of this parameter.
   * 
   * @example
   * 2
   */
  consoleVersion?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2011-05-30T12:11:04Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The minor engine version.
   * 
   * @example
   * rds_20181010
   */
  currentKernelVersion?: string;
  /**
   * @remarks
   * The information about the node in the cluster.
   */
  DBClusterNodes?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  DBInstanceCPU?: string;
  /**
   * @remarks
   * The instance type of the instance. For more information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * rds.mys2.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance family. Valid values:
   * 
   * *   **s**: shared instance family
   * *   **x**: general-purpose instance family
   * *   **d**: dedicated instance family
   * *   **h**: dedicated host instance family
   * 
   * @example
   * s
   */
  DBInstanceClassType?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * The number of cores that are configured for the instance.
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The disk usage of the instance. Unit: byte.
   * 
   * @example
   * 300
   */
  DBInstanceDiskUsed?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The memory capacity of the instance. Unit: MB.
   * 
   * @example
   * 4096
   */
  DBInstanceMemory?: number;
  /**
   * @remarks
   * The type of the network over which the instance is connected. Valid values:
   * 
   * *   **Internet**
   * *   **Intranet**
   * 
   * @example
   * Internet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The instance status. For more information, see [Instance statuses](https://help.aliyun.com/document_detail/26315.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 10
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **local_ssd** and **ephemeral_ssd**: Premium Local SSD
   * *   **cloud_ssd**: standard SSD
   * *   **cloud_essd**: ESSD
   * *   **cloud_essd**: Premium ESSD
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * *   **Primary**: primary instance
   * *   **Readonly**: read-only instance
   * *   **Guard**: disaster recovery instance
   * *   **Temp**: temporary instance
   * 
   * @example
   * Primary
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The maximum number of databases that can be created on the instance.
   * 
   * @example
   * 200
   */
  DBMaxQuantity?: number;
  /**
   * @remarks
   * The ID of the dedicated cluster to which the instance belongs.
   * 
   * @example
   * dhg-7a9*****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * Indicates whether the release protection feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Disaster Recovery Instance Information
   * 
   * @example
   * {"replicatorAccount": "******","sourcePort":******,"sourceAddress": "pgm-2ze******","sourceCategory": "aliyunRDS","sourceInstanceRegionId": "cn-******","replicatorPassword": "******","sourceInstanceName": "pgm-2ze******"}
   */
  disasterRecoveryInfo?: string;
  /**
   * @remarks
   * All disaster recovery instances of the current instance.
   * 
   * @example
   * [{"regionId":"cn-******","insName":"pgm-2ze******"},{"regionId":"cn-******","insName":"pgm-2ze******"}]
   */
  disasterRecoveryInstances?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **MySQL**
   * *   **PostgreSQL**
   * *   **SQLServer**
   * *   **MariaDB**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.5
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * >  Pay-as-you-go instances never expire.
   * 
   * @example
   * 2019-03-27T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended information about the instance.
   */
  extra?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra;
  /**
   * @remarks
   * The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
   * 
   * @example
   * TestGroup
   */
  generalGroupName?: string;
  /**
   * @remarks
   * This is a reserved parameter and is not in use.
   * 
   * @example
   * None
   */
  greenInstanceName?: string;
  /**
   * @remarks
   * The ID of the disaster recovery instance that is attached to the primary instance.
   * 
   * @example
   * rm-uf64zsu*****
   */
  guardDBInstanceId?: string;
  /**
   * @remarks
   * The IP address type. Only **IPv4 addresses** are supported.
   * 
   * @example
   * IPv4
   */
  IPType?: string;
  /**
   * @remarks
   * The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance comes from its primary instance. The incremental data of a read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  incrementSourceDBInstanceId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**
   * *   **VPC**
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The architecture type of the instance. Valid values:
   * 
   * *   **x86**
   * *   **arm**
   * 
   * @example
   * x86
   */
  instructionSetArch?: string;
  /**
   * @remarks
   * Indicates whether Buffer Pool Extension (BPE) is enabled for Premium ESSDs.
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * >  For more information, see [Buffer Pool Extension(BPE)](https://help.aliyun.com/document_detail/2527067.html).
   * 
   * @example
   * None
   */
  ioAccelerationEnabled?: string;
  /**
   * @remarks
   * The latest minor engine version that is supported by the instance.
   * 
   * @example
   * rds_20201031
   */
  latestKernelVersion?: string;
  /**
   * @remarks
   * The lock mode of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked due to instance restoration.
   * *   **LockByDiskQuota**: The instance is automatically locked due to exhausted storage space.
   * *   **LockReadInstanceByDiskQuota**: The instance is a read-only instance and is automatically locked due to exhausted storage.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the instance was locked.
   * 
   * @example
   * instance_expired
   */
  lockReason?: string;
  /**
   * @remarks
   * The maintenance window of the instance. The time is displayed in UTC. The maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
   * 
   * @example
   * 00:00Z-02:00Z
   */
  maintainTime?: string;
  /**
   * @remarks
   * The primary instance ID.
   * 
   * >  If this parameter is not returned, the instance is the primary instance.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The zone ID of the primary instance.
   * 
   * @example
   * 5454284
   */
  masterZone?: string;
  /**
   * @remarks
   * The maximum number of concurrent connections.
   * 
   * @example
   * 60
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum I/O throughput. Unit: MB/s.
   * 
   * @example
   * 0MB/s
   */
  maxIOMBPS?: number;
  /**
   * @remarks
   * The maximum number of I/O requests per second.
   * 
   * @example
   * 150
   */
  maxIOPS?: number;
  /**
   * @remarks
   * Indicates whether auto scaling is being performed on the instance. If the value **true** is returned, auto scaling is being performed on the instance. If no value is returned, auto scaling is not being performed on the instance.
   * 
   * @example
   * true
   */
  multipleTempUpgrade?: boolean;
  /**
   * @remarks
   * The OptimizedWritesInfo parameter contains the following fields:
   * *   **optimized_writes**: indicates whether the 16K atomic write feature is enabled for the current instance.
   * *   **init_optimized_writes**: indicates whether the 16K atomic write feature can be enabled for the current instance. If init_optimized_writes is set to false, the 16K atomic write switch is not displayed for the instance in the console.
   * 
   * @example
   * {"optimized_writes":true,"init_optimized_writes":true}
   */
  optimizedWritesInfo?: string;
  /**
   * @remarks
   * Indicates whether PgBouncer is enabled.
   * 
   * >  This parameter is returned only for RDS instances that run PostgreSQL. If PgBouncer is enabled, the return value is **true**.
   * 
   * @example
   * true
   */
  PGBouncerEnabled?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * *   **SERVERLESS**
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The port that is used to connect to the instance over an internal network.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The type of the proxy that is supported by the instance. Valid values:
   * 
   * *   **0**: The instance does not support database proxies.
   * *   **1**: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
   * *   **2**: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
   * 
   * @example
   * 1
   */
  proxyType?: number;
  /**
   * @remarks
   * The IDs of the read-only instances that are attached to the primary instance.
   */
  readOnlyDBInstanceIds?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds;
  /**
   * @remarks
   * This is a reserved parameter and is not in use.
   * 
   * @example
   * None
   */
  readOnlyStatus?: string;
  /**
   * @remarks
   * The latency at which the system replicates data to read-only instances. The system replicates data from the primary instance to the read-only instances at the latency that is specified by the **ReadonlyInstanceSQLDelayedTime** parameter. Unit: seconds.
   * 
   * @example
   * 30
   */
  readonlyInstanceSQLDelayedTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  securityIPList?: string;
  /**
   * @remarks
   * The whitelist mode. Valid values:
   * 
   * *   **normal**: standard whitelist mode
   * *   **safety**: enhanced whitelist mode
   * 
   * @example
   * normal
   */
  securityIPMode?: string;
  /**
   * @remarks
   * The settings of the serverless instance.
   */
  serverlessConfig?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig;
  /**
   * @remarks
   * The zone IDs of the secondary instances.
   */
  slaveZones?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones;
  /**
   * @remarks
   * Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, Active Directory (AD) account, and host account. Valid values:
   * 
   * *   **Enable**
   * *   **Disabled**
   * 
   * @example
   * Disabled
   */
  superPermissionMode?: string;
  /**
   * @remarks
   * Indicates whether storage compression can be enabled for the instance.
   * 
   * @example
   * true, false
   */
  supportCompression?: boolean;
  /**
   * @remarks
   * The ID of the temporary instance that is attached to the primary instance.
   * 
   * @example
   * rm-uf64zsu*****
   */
  tempDBInstanceId?: string;
  /**
   * @remarks
   * The end time of the temporary upgrade of the instance.
   * 
   * >  This parameter is unavailable for pay-as-you-go instances.
   * 
   * @example
   * 2024-05-30 00:00:00
   */
  tempUpgradeTimeEnd?: string;
  /**
   * @remarks
   * The start time of the temporary upgrade of the instance.
   * 
   * >  This parameter is unavailable for pay-as-you-go instances.
   * 
   * @example
   * 2024-05-29 00:00:00
   */
  tempUpgradeTimeStart?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Central Standard Time
   */
  timeZone?: string;
  /**
   * @remarks
   * The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
   * 
   * @example
   * The IP addresses in the IP address whitelist.
   */
  tips?: string;
  /**
   * @remarks
   * The severity of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
   * 
   * *   **1**: The instance is normal.
   * *   **2**: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
   * 
   * @example
   * 1
   */
  tipsLevel?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-*****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC. This parameter is returned only when the instance resides in a VPC.
   * 
   * @example
   * vpc-23rsxdf*****
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-*****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  /**
   * @remarks
   * An internal parameter. You do not need to specify this parameter.
   * 
   * @example
   * The architecture type of the instance. Valid values:
   * 
   * - **x86**
   * - **arm**
   */
  kindCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountMaxQuantity: 'AccountMaxQuantity',
      advancedFeatures: 'AdvancedFeatures',
      autoUpgradeMinorVersion: 'AutoUpgradeMinorVersion',
      availabilityValue: 'AvailabilityValue',
      babelfishConfig: 'BabelfishConfig',
      blueGreenDeploymentName: 'BlueGreenDeploymentName',
      blueInstanceName: 'BlueInstanceName',
      bpeEnabled: 'BpeEnabled',
      burstingEnabled: 'BurstingEnabled',
      canTempUpgrade: 'CanTempUpgrade',
      category: 'Category',
      coldDataEnabled: 'ColdDataEnabled',
      collation: 'Collation',
      compressionMode: 'CompressionMode',
      compressionRatio: 'CompressionRatio',
      computeBurstEnabled: 'ComputeBurstEnabled',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      consoleVersion: 'ConsoleVersion',
      creationTime: 'CreationTime',
      currentKernelVersion: 'CurrentKernelVersion',
      DBClusterNodes: 'DBClusterNodes',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceDiskUsed: 'DBInstanceDiskUsed',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBInstanceType: 'DBInstanceType',
      DBMaxQuantity: 'DBMaxQuantity',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      deletionProtection: 'DeletionProtection',
      disasterRecoveryInfo: 'DisasterRecoveryInfo',
      disasterRecoveryInstances: 'DisasterRecoveryInstances',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      extra: 'Extra',
      generalGroupName: 'GeneralGroupName',
      greenInstanceName: 'GreenInstanceName',
      guardDBInstanceId: 'GuardDBInstanceId',
      IPType: 'IPType',
      incrementSourceDBInstanceId: 'IncrementSourceDBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      instructionSetArch: 'InstructionSetArch',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      latestKernelVersion: 'LatestKernelVersion',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainTime: 'MaintainTime',
      masterInstanceId: 'MasterInstanceId',
      masterZone: 'MasterZone',
      maxConnections: 'MaxConnections',
      maxIOMBPS: 'MaxIOMBPS',
      maxIOPS: 'MaxIOPS',
      multipleTempUpgrade: 'MultipleTempUpgrade',
      optimizedWritesInfo: 'OptimizedWritesInfo',
      PGBouncerEnabled: 'PGBouncerEnabled',
      payType: 'PayType',
      port: 'Port',
      proxyType: 'ProxyType',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      readOnlyStatus: 'ReadOnlyStatus',
      readonlyInstanceSQLDelayedTime: 'ReadonlyInstanceSQLDelayedTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
      securityIPMode: 'SecurityIPMode',
      serverlessConfig: 'ServerlessConfig',
      slaveZones: 'SlaveZones',
      superPermissionMode: 'SuperPermissionMode',
      supportCompression: 'SupportCompression',
      tempDBInstanceId: 'TempDBInstanceId',
      tempUpgradeTimeEnd: 'TempUpgradeTimeEnd',
      tempUpgradeTimeStart: 'TempUpgradeTimeStart',
      timeZone: 'TimeZone',
      tips: 'Tips',
      tipsLevel: 'TipsLevel',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      kindCode: 'kindCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountMaxQuantity: 'number',
      advancedFeatures: 'string',
      autoUpgradeMinorVersion: 'string',
      availabilityValue: 'string',
      babelfishConfig: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig,
      blueGreenDeploymentName: 'string',
      blueInstanceName: 'string',
      bpeEnabled: 'string',
      burstingEnabled: 'boolean',
      canTempUpgrade: 'boolean',
      category: 'string',
      coldDataEnabled: 'boolean',
      collation: 'string',
      compressionMode: 'string',
      compressionRatio: 'string',
      computeBurstEnabled: 'boolean',
      connectionMode: 'string',
      connectionString: 'string',
      consoleVersion: 'string',
      creationTime: 'string',
      currentKernelVersion: 'string',
      DBClusterNodes: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes,
      DBInstanceCPU: 'string',
      DBInstanceClass: 'string',
      DBInstanceClassType: 'string',
      DBInstanceDescription: 'string',
      DBInstanceDiskUsed: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      DBInstanceStorageType: 'string',
      DBInstanceType: 'string',
      DBMaxQuantity: 'number',
      dedicatedHostGroupId: 'string',
      deletionProtection: 'boolean',
      disasterRecoveryInfo: 'string',
      disasterRecoveryInstances: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      extra: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra,
      generalGroupName: 'string',
      greenInstanceName: 'string',
      guardDBInstanceId: 'string',
      IPType: 'string',
      incrementSourceDBInstanceId: 'string',
      instanceNetworkType: 'string',
      instructionSetArch: 'string',
      ioAccelerationEnabled: 'string',
      latestKernelVersion: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainTime: 'string',
      masterInstanceId: 'string',
      masterZone: 'string',
      maxConnections: 'number',
      maxIOMBPS: 'number',
      maxIOPS: 'number',
      multipleTempUpgrade: 'boolean',
      optimizedWritesInfo: 'string',
      PGBouncerEnabled: 'string',
      payType: 'string',
      port: 'string',
      proxyType: 'number',
      readOnlyDBInstanceIds: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds,
      readOnlyStatus: 'string',
      readonlyInstanceSQLDelayedTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
      securityIPMode: 'string',
      serverlessConfig: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig,
      slaveZones: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones,
      superPermissionMode: 'string',
      supportCompression: 'boolean',
      tempDBInstanceId: 'string',
      tempUpgradeTimeEnd: 'string',
      tempUpgradeTimeStart: 'string',
      timeZone: 'string',
      tips: 'string',
      tipsLevel: 'number',
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      kindCode: 'string',
    };
  }

  validate() {
    if(this.babelfishConfig && typeof (this.babelfishConfig as any).validate === 'function') {
      (this.babelfishConfig as any).validate();
    }
    if(this.DBClusterNodes && typeof (this.DBClusterNodes as any).validate === 'function') {
      (this.DBClusterNodes as any).validate();
    }
    if(this.extra && typeof (this.extra as any).validate === 'function') {
      (this.extra as any).validate();
    }
    if(this.readOnlyDBInstanceIds && typeof (this.readOnlyDBInstanceIds as any).validate === 'function') {
      (this.readOnlyDBInstanceIds as any).validate();
    }
    if(this.serverlessConfig && typeof (this.serverlessConfig as any).validate === 'function') {
      (this.serverlessConfig as any).validate();
    }
    if(this.slaveZones && typeof (this.slaveZones as any).validate === 'function') {
      (this.slaveZones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

