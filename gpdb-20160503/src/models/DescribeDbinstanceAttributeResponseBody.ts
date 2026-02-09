// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTagsTag extends $dara.Model {
  key?: string;
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
  availabilityValue?: string;
  cacheStorageSize?: string;
  connectionMode?: string;
  connectionString?: string;
  coreVersion?: string;
  cpuCores?: number;
  cpuCoresPerNode?: number;
  creationTime?: string;
  DBInstanceCategory?: string;
  DBInstanceClass?: string;
  DBInstanceClassType?: string;
  DBInstanceCpuCores?: number;
  DBInstanceDescription?: string;
  DBInstanceDiskMBPS?: number;
  DBInstanceGroupCount?: string;
  DBInstanceId?: string;
  DBInstanceMemory?: number;
  DBInstanceMode?: string;
  DBInstanceNetType?: string;
  DBInstanceStatus?: string;
  DBInstanceStorage?: number;
  deployMode?: string;
  encryptionKey?: string;
  encryptionType?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  graphEngineStatus?: string;
  hostType?: string;
  idleTime?: number;
  instanceNetworkType?: string;
  instanceSpec?: string;
  lockMode?: string;
  lockReason?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  masterAISpec?: string;
  masterCU?: number;
  masterNodeNum?: number;
  maxConnections?: number;
  memoryPerNode?: number;
  memorySize?: number;
  memoryUnit?: string;
  minorVersion?: string;
  payType?: string;
  port?: string;
  prodType?: string;
  readDelayTime?: string;
  regionId?: string;
  resourceGroupId?: string;
  runningTime?: string;
  securityIPList?: string;
  segDiskPerformanceLevel?: string;
  segNodeNum?: number;
  segmentAISpec?: string;
  segmentCounts?: number;
  serverlessMode?: string;
  serverlessResource?: number;
  standbyZoneId?: string;
  startTime?: string;
  storagePerNode?: number;
  storageSize?: number;
  storageType?: string;
  storageUnit?: string;
  supportRestore?: boolean;
  tags?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeTags;
  vSwitchId?: string;
  vectorConfigurationStatus?: string;
  vpcId?: string;
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

