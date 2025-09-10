// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * test-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags extends $dara.Model {
  tag?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute extends $dara.Model {
  /**
   * @remarks
   * Queries the current instance availability status, in percentage (%).
   * 
   * > This parameter is only applicable to instances in the storage reserved mode.
   * 
   * @example
   * 100.0%
   */
  availabilityValue?: string;
  cacheStorageSize?: string;
  /**
   * @remarks
   * Access mode, with the following values:
   * 
   * - **Performance**: Standard access mode.
   * - **Safty**: High-security access mode.
   * - **LVS**: LVS link mode.
   * 
   * @example
   * LVS
   */
  connectionMode?: string;
  /**
   * @remarks
   * Instance connection address.
   * 
   * @example
   * gp-bp13ue79qk8y1****-master.gpdb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * Minor version number of the kernel.
   * 
   * @example
   * mm.v6.3.10.1-202207141918
   */
  coreVersion?: string;
  /**
   * @remarks
   * Number of CPU cores for the compute node, unit: Core.
   * 
   * @example
   * 2
   */
  cpuCores?: number;
  /**
   * @remarks
   * Number of CPU cores per node.
   * 
   * > This parameter is only applicable to instances in the storage reserved mode.
   * 
   * @example
   * 0
   */
  cpuCoresPerNode?: number;
  /**
   * @remarks
   * Instance creation time.
   * 
   * @example
   * 2022-08-11T09:16:26Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Instance series, with the following values:
   * 
   * - **Basic**: Basic Edition.
   * - **HighAvailability**: High Availability Edition.
   * 
   * @example
   * HighAvailability
   */
  DBInstanceCategory?: string;
  /**
   * @remarks
   * Instance specification.
   * 
   * > This parameter is only applicable to reserved storage mode instances.
   * 
   * @example
   * gpdb.group.segsdx1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * Instance family, with the following values:
   * 
   * - **s**: Shared type.
   * - **x**: General type.
   * - **d**: Dedicated package.
   * - **h**: Dedicated physical machine.
   * 
   * @example
   * x
   */
  DBInstanceClassType?: string;
  /**
   * @remarks
   * Number of CPU cores.
   * 
   * @example
   * 2
   */
  DBInstanceCpuCores?: number;
  /**
   * @remarks
   * Instance description.
   * 
   * @example
   * gp-bp13ue79qk8y1****
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * Maximum BPS (disk throughput) of the compute group, in Mbps.
   * 
   * > This parameter is only applicable to reserved storage mode instances.
   * 
   * @example
   * 0
   */
  DBInstanceDiskMBPS?: number;
  /**
   * @remarks
   * Number of compute groups.
   * 
   * > This parameter is only applicable to reserved storage mode instances.
   * 
   * @example
   * 0
   */
  DBInstanceGroupCount?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * gp-bp13ue79qk8y1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Memory of the compute node.
   * 
   * > The unit for storage-reserved mode is MB; for Serverless and storage-elastic modes, it is GB.
   * 
   * @example
   * 16
   */
  DBInstanceMemory?: number;
  /**
   * @remarks
   * Instance resource type, with the following values:
   * 
   * - **Serverless**: Serverless mode.
   * - **StorageElastic**: Storage elastic mode.
   * - **Classic**: Storage reserved mode.
   * 
   * @example
   * StorageElastic
   */
  DBInstanceMode?: string;
  /**
   * @remarks
   * This parameter is deprecated and will not return any value.
   * 
   * @example
   * null
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * Instance status. For more details, see the supplementary explanation of the DBInstanceStatus parameter.
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * Maximum storage space of a single replica, in GB.
   * 
   * @example
   * 50
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The deployment mode.
   * 
   * @example
   * single
   */
  deployMode?: string;
  /**
   * @remarks
   * Encryption key.
   * 
   * > This parameter is returned only for instances with disk encryption enabled.
   * 
   * @example
   * 0d2470df-da7b-4786-b981-************
   */
  encryptionKey?: string;
  /**
   * @remarks
   * Encryption type, with the following value:
   * 
   * - **CloudDisk**: Cloud disk encryption.
   * 
   * > This parameter is returned only for instances with cloud disk encryption.
   * 
   * @example
   * CloudDisk
   */
  encryptionType?: string;
  /**
   * @remarks
   * Database engine.
   * 
   * @example
   * gpdb
   */
  engine?: string;
  /**
   * @remarks
   * Database version.
   * 
   * @example
   * 6.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * Instance expiration time (in UTC).
   * 
   * > The expiration time for pay-as-you-go instances is `2999-09-08T16:00:00Z`.
   * 
   * @example
   * 2999-09-08T16:00:00Z
   */
  expireTime?: string;
  graphEngineStatus?: string;
  /**
   * @remarks
   * Compute group machine type, with the following values:
   * - **0**: SSD
   * - **1**: HDD
   * 
   * > This parameter applies only to storage-reserved mode instances.
   * 
   * @example
   * 0
   */
  hostType?: string;
  /**
   * @remarks
   * Idle release waiting time. Unit: seconds.
   * 
   * > This parameter is returned only for instances in the Serverless automatic scheduling mode.
   * 
   * @example
   * 600
   */
  idleTime?: number;
  /**
   * @remarks
   * Instance network type, with the following values:
   * 
   * - **Classic**: Classic network.
   * - **VPC**: VPC network.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  instanceSpec?: string;
  /**
   * @remarks
   * Lock mode, with the following values:
   * 
   * - **Unlock**: Normal.
   * - **ManualLock**: Manually triggered lock.
   * - **LockByExpiration**: Automatically locked when the instance expires.
   * - **LockByRestoration**: Automatically locked before the instance rolls back.
   * - **LockByDiskQuota**: Automatically locked when the instance space is full.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * This parameter is deprecated and will not return any value.
   * 
   * @example
   * null
   */
  lockReason?: string;
  /**
   * @remarks
   * Maintenance end time.
   * 
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * Maintenance start time.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The specifications of AI coordinator node resources of the instance. If the coordinator nodes of the instance are not AI nodes, null is returned.
   * 
   * @example
   * ADB.AIMedium.2
   */
  masterAISpec?: string;
  /**
   * @remarks
   * Master resources.
   * 
   * @example
   * 4
   */
  masterCU?: number;
  /**
   * @remarks
   * Number of Master nodes.
   * 
   * @example
   * 1
   */
  masterNodeNum?: number;
  /**
   * @remarks
   * Maximum number of concurrent connections for the instance.
   * 
   * > This parameter is only applicable to reserved storage mode instances.
   * 
   * @example
   * 500
   */
  maxConnections?: number;
  /**
   * @remarks
   * Memory size per replica, see the **MemoryUnit** parameter for the unit.
   * 
   * > This parameter is only applicable to instances in the storage reserved mode.
   * 
   * @example
   * 0
   */
  memoryPerNode?: number;
  /**
   * @remarks
   * Memory size of the compute node.
   * 
   * > The unit is MB for the storage reserved mode; GB for Serverless and storage elastic modes.
   * 
   * @example
   * 16
   */
  memorySize?: number;
  /**
   * @remarks
   * Memory unit.
   * 
   * > This parameter is only applicable to reserved storage mode instances.
   * 
   * @example
   * GB
   */
  memoryUnit?: string;
  /**
   * @remarks
   * Minor version of the kernel.
   * 
   * @example
   * 6.3.10.1-202207141918
   */
  minorVersion?: string;
  /**
   * @remarks
   * Billing type, with the following values:
   * 
   * - **Postpaid**: Pay-as-you-go.
   * - **Prepaid**: Subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * Instance port number.
   * 
   * @example
   * 5432
   */
  port?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * standard
   */
  prodType?: string;
  /**
   * @remarks
   * This parameter has been deprecated and will not return a value.
   * 
   * @example
   * null
   */
  readDelayTime?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * ID of the resource group where the instance is located.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Instance running time.
   * 
   * @example
   * 4 days 22:58:55
   */
  runningTime?: string;
  /**
   * @remarks
   * This parameter is deprecated and will not return any value.
   * 
   * @example
   * null
   */
  securityIPList?: string;
  /**
   * @remarks
   * Performance Level (PL), currently only **PL1** is supported.
   * 
   * @example
   * PL1
   */
  segDiskPerformanceLevel?: string;
  /**
   * @remarks
   * Number of Segment nodes.
   * 
   * > This parameter applies only to instances in the storage elastic mode and Serverless manual scheduling mode.
   * 
   * @example
   * 4
   */
  segNodeNum?: number;
  /**
   * @remarks
   * The specifications of AI compute node resources of the instance. If the compute nodes of the instance are not AI nodes, null is returned.
   * 
   * @example
   * ADB.AIMedium.2
   */
  segmentAISpec?: string;
  /**
   * @remarks
   * Number of compute groups.
   * 
   * > This parameter applies only to storage-reserved mode instances.
   * 
   * @example
   * 0
   */
  segmentCounts?: number;
  /**
   * @remarks
   * The mode of the Serverless instance, with the following values:
   * 
   * - **Manual**: Manual scheduling.
   * - **Auto**: Automatic scheduling.
   * 
   * > This parameter is returned only for Serverless mode instances.
   * 
   * @example
   * Auto
   */
  serverlessMode?: string;
  /**
   * @remarks
   * Compute resource threshold. Unit: ACU.
   * 
   * > This parameter is returned only for instances in the Serverless automatic scheduling mode.
   * 
   * @example
   * 32
   */
  serverlessResource?: number;
  /**
   * @remarks
   * The secondary zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The time when the instance started running.
   * 
   * @example
   * 2022-08-11T09:26:43Z
   */
  startTime?: string;
  /**
   * @remarks
   * Storage size per replica, see the **StorageUnit** parameter for units.
   * 
   * > This parameter applies only to storage-reserved mode instances.
   * 
   * @example
   * 0
   */
  storagePerNode?: number;
  /**
   * @remarks
   * Storage space size, unit: GB.
   * 
   * @example
   * 50
   */
  storageSize?: number;
  /**
   * @remarks
   * Storage type, with the following values:
   * 
   * - **cloud_essd**: ESSD cloud disk.
   * - **cloud_efficiency**: Efficient cloud disk.
   * 
   * > This parameter is only applicable to instances in the storage elastic mode.
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  /**
   * @remarks
   * Storage unit, with the following values:
   * 
   * - **GB SSD**
   * - **TB SSD**
   * - **GB HDD**
   * 
   * > This parameter is only applicable to instances in the storage reserved mode.
   * 
   * @example
   * GB SSD
   */
  storageUnit?: string;
  /**
   * @remarks
   * Indicates whether backup recovery is supported, with the following values:
   * 
   * - **true**: Backup recovery is supported.
   * - **false**: Backup recovery is not supported.
   * 
   * @example
   * true
   */
  supportRestore?: boolean;
  /**
   * @remarks
   * Tag key-value pairs.
   */
  tags?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags;
  /**
   * @remarks
   * vSwitch ID.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Indicates whether vector engine optimization is enabled. The values are as follows:
   * - **enabled**: Indicates that vector engine optimization is enabled.
   * - **disabled**: Indicates that vector engine optimization is disabled.
   * 
   * @example
   * enabled
   */
  vectorConfigurationStatus?: string;
  /**
   * @remarks
   * VPC ID.
   * 
   * @example
   * vpc-bp19ame5m1r3oejns****
   */
  vpcId?: string;
  /**
   * @remarks
   * Zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availabilityValue: 'AvailabilityValue',
      cacheStorageSize: 'CacheStorageSize',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      coreVersion: 'CoreVersion',
      cpuCores: 'CpuCores',
      cpuCoresPerNode: 'CpuCoresPerNode',
      creationTime: 'CreationTime',
      DBInstanceCategory: 'DBInstanceCategory',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceClassType: 'DBInstanceClassType',
      DBInstanceCpuCores: 'DBInstanceCpuCores',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceDiskMBPS: 'DBInstanceDiskMBPS',
      DBInstanceGroupCount: 'DBInstanceGroupCount',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceMode: 'DBInstanceMode',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      deployMode: 'DeployMode',
      encryptionKey: 'EncryptionKey',
      encryptionType: 'EncryptionType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      graphEngineStatus: 'GraphEngineStatus',
      hostType: 'HostType',
      idleTime: 'IdleTime',
      instanceNetworkType: 'InstanceNetworkType',
      instanceSpec: 'InstanceSpec',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      masterAISpec: 'MasterAISpec',
      masterCU: 'MasterCU',
      masterNodeNum: 'MasterNodeNum',
      maxConnections: 'MaxConnections',
      memoryPerNode: 'MemoryPerNode',
      memorySize: 'MemorySize',
      memoryUnit: 'MemoryUnit',
      minorVersion: 'MinorVersion',
      payType: 'PayType',
      port: 'Port',
      prodType: 'ProdType',
      readDelayTime: 'ReadDelayTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      runningTime: 'RunningTime',
      securityIPList: 'SecurityIPList',
      segDiskPerformanceLevel: 'SegDiskPerformanceLevel',
      segNodeNum: 'SegNodeNum',
      segmentAISpec: 'SegmentAISpec',
      segmentCounts: 'SegmentCounts',
      serverlessMode: 'ServerlessMode',
      serverlessResource: 'ServerlessResource',
      standbyZoneId: 'StandbyZoneId',
      startTime: 'StartTime',
      storagePerNode: 'StoragePerNode',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      storageUnit: 'StorageUnit',
      supportRestore: 'SupportRestore',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vectorConfigurationStatus: 'VectorConfigurationStatus',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabilityValue: 'string',
      cacheStorageSize: 'string',
      connectionMode: 'string',
      connectionString: 'string',
      coreVersion: 'string',
      cpuCores: 'number',
      cpuCoresPerNode: 'number',
      creationTime: 'string',
      DBInstanceCategory: 'string',
      DBInstanceClass: 'string',
      DBInstanceClassType: 'string',
      DBInstanceCpuCores: 'number',
      DBInstanceDescription: 'string',
      DBInstanceDiskMBPS: 'number',
      DBInstanceGroupCount: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceMode: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      deployMode: 'string',
      encryptionKey: 'string',
      encryptionType: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      graphEngineStatus: 'string',
      hostType: 'string',
      idleTime: 'number',
      instanceNetworkType: 'string',
      instanceSpec: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      masterAISpec: 'string',
      masterCU: 'number',
      masterNodeNum: 'number',
      maxConnections: 'number',
      memoryPerNode: 'number',
      memorySize: 'number',
      memoryUnit: 'string',
      minorVersion: 'string',
      payType: 'string',
      port: 'string',
      prodType: 'string',
      readDelayTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      runningTime: 'string',
      securityIPList: 'string',
      segDiskPerformanceLevel: 'string',
      segNodeNum: 'number',
      segmentAISpec: 'string',
      segmentCounts: 'number',
      serverlessMode: 'string',
      serverlessResource: 'number',
      standbyZoneId: 'string',
      startTime: 'string',
      storagePerNode: 'number',
      storageSize: 'number',
      storageType: 'string',
      storageUnit: 'string',
      supportRestore: 'boolean',
      tags: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags,
      vSwitchId: 'string',
      vectorConfigurationStatus: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItems extends $dara.Model {
  DBInstanceAttribute?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceAttribute)) {
      $dara.Model.validateArray(this.DBInstanceAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried instance.
   */
  items?: DescribeDBInstanceAttributeResponseBodyItems;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 5E6EDEB8-D73E-5F2D-B948-86C8AEB05A68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstanceAttributeResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

