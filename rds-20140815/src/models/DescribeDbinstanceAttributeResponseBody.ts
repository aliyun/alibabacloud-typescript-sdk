// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig extends $dara.Model {
  babelfishEnabled?: string;
  migrationMode?: string;
  static names(): { [key: string]: string } {
    return {
      babelfishEnabled: 'BabelfishEnabled',
      migrationMode: 'MigrationMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      babelfishEnabled: 'string',
      migrationMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode extends $dara.Model {
  classCode?: string;
  classType?: string;
  cpu?: string;
  disasterRecoveryNode?: boolean;
  memory?: string;
  nodeId?: string;
  nodeRegionId?: string;
  nodeRole?: string;
  nodeZoneId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      classType: 'ClassType',
      cpu: 'Cpu',
      disasterRecoveryNode: 'DisasterRecoveryNode',
      memory: 'Memory',
      nodeId: 'NodeId',
      nodeRegionId: 'NodeRegionId',
      nodeRole: 'NodeRole',
      nodeZoneId: 'NodeZoneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      classType: 'string',
      cpu: 'string',
      disasterRecoveryNode: 'boolean',
      memory: 'string',
      nodeId: 'string',
      nodeRegionId: 'string',
      nodeRole: 'string',
      nodeZoneId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes extends $dara.Model {
  DBClusterNode?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode[];
  static names(): { [key: string]: string } {
    return {
      DBClusterNode: 'DBClusterNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterNode: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode },
    };
  }

  validate() {
    if(Array.isArray(this.DBClusterNode)) {
      $dara.Model.validateArray(this.DBClusterNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds extends $dara.Model {
  DBInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceId)) {
      $dara.Model.validateArray(this.DBInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra extends $dara.Model {
  accountSecurityPolicy?: string;
  DBInstanceIds?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds;
  recoveryModel?: string;
  static names(): { [key: string]: string } {
    return {
      accountSecurityPolicy: 'AccountSecurityPolicy',
      DBInstanceIds: 'DBInstanceIds',
      recoveryModel: 'RecoveryModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSecurityPolicy: 'string',
      DBInstanceIds: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtraDBInstanceIds,
      recoveryModel: 'string',
    };
  }

  validate() {
    if(this.DBInstanceIds && typeof (this.DBInstanceIds as any).validate === 'function') {
      (this.DBInstanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds extends $dara.Model {
  readOnlyDBInstanceId?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyDBInstanceId)) {
      $dara.Model.validateArray(this.readOnlyDBInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig extends $dara.Model {
  autoPause?: boolean;
  scaleMax?: number;
  scaleMin?: number;
  switchForce?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPause: 'AutoPause',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      switchForce: 'SwitchForce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPause: 'boolean',
      scaleMax: 'number',
      scaleMin: 'number',
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

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone extends $dara.Model {
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones extends $dara.Model {
  slaveZone?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone[];
  static names(): { [key: string]: string } {
    return {
      slaveZone: 'SlaveZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slaveZone: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZonesSlaveZone },
    };
  }

  validate() {
    if(Array.isArray(this.slaveZone)) {
      $dara.Model.validateArray(this.slaveZone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttribute extends $dara.Model {
  accountMaxQuantity?: number;
  advancedFeatures?: string;
  autoUpgradeMinorVersion?: string;
  availabilityValue?: string;
  babelfishConfig?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeBabelfishConfig;
  blueGreenDeploymentName?: string;
  blueInstanceName?: string;
  bpeEnabled?: string;
  burstingEnabled?: boolean;
  canTempUpgrade?: boolean;
  category?: string;
  coldDataEnabled?: boolean;
  collation?: string;
  compressionMode?: string;
  compressionRatio?: string;
  computeBurstEnabled?: boolean;
  connectionMode?: string;
  connectionString?: string;
  consoleVersion?: string;
  creationTime?: string;
  currentKernelVersion?: string;
  DBClusterNodes?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodes;
  DBInstanceCPU?: string;
  DBInstanceClass?: string;
  DBInstanceClassType?: string;
  DBInstanceDescription?: string;
  DBInstanceDiskUsed?: string;
  DBInstanceId?: string;
  DBInstanceMemory?: number;
  DBInstanceNetType?: string;
  DBInstanceStatus?: string;
  DBInstanceStorage?: number;
  DBInstanceStorageType?: string;
  DBInstanceType?: string;
  DBMaxQuantity?: number;
  dedicatedHostGroupId?: string;
  deletionProtection?: boolean;
  disasterRecoveryInfo?: string;
  disasterRecoveryInstances?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  extra?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeExtra;
  generalGroupName?: string;
  greenInstanceName?: string;
  guardDBInstanceId?: string;
  IPType?: string;
  incrementSourceDBInstanceId?: string;
  instanceNetworkType?: string;
  instructionSetArch?: string;
  ioAccelerationEnabled?: string;
  isAnalyticIns?: boolean;
  isAnalyticReadOnlyIns?: boolean;
  latestKernelVersion?: string;
  lockMode?: string;
  lockReason?: string;
  maintainTime?: string;
  masterInstanceId?: string;
  masterZone?: string;
  maxConnections?: number;
  maxIOMBPS?: number;
  maxIOPS?: number;
  multipleTempUpgrade?: boolean;
  optimizedWritesInfo?: string;
  PGBouncerEnabled?: string;
  payType?: string;
  port?: string;
  proxyType?: number;
  readOnlyDBInstanceIds?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeReadOnlyDBInstanceIds;
  readOnlyStatus?: string;
  readonlyInstanceSQLDelayedTime?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityIPList?: string;
  securityIPMode?: string;
  serverlessConfig?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeServerlessConfig;
  slaveZones?: DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeSlaveZones;
  superPermissionMode?: string;
  supportCompression?: boolean;
  tempDBInstanceId?: string;
  tempUpgradeTimeEnd?: string;
  tempUpgradeTimeStart?: string;
  timeZone?: string;
  tips?: string;
  tipsLevel?: number;
  vSwitchId?: string;
  /**
   * @example
   * ON
   */
  vectorSupportStatus?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  zoneId?: string;
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
      isAnalyticIns: 'IsAnalyticIns',
      isAnalyticReadOnlyIns: 'IsAnalyticReadOnlyIns',
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
      vectorSupportStatus: 'VectorSupportStatus',
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
      isAnalyticIns: 'boolean',
      isAnalyticReadOnlyIns: 'boolean',
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
      vectorSupportStatus: 'string',
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
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
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

