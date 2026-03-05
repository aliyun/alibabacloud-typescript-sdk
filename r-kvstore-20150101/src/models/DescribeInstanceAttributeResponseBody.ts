// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag extends $dara.Model {
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

export class DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags extends $dara.Model {
  tag?: DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag },
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

export class DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttribute extends $dara.Model {
  architectureType?: string;
  auditLogRetention?: string;
  autoSecondaryZone?: boolean;
  availabilityValue?: string;
  backupLogStartTime?: string;
  bandwidth?: number;
  capacity?: number;
  chargeType?: string;
  cloudType?: string;
  computingType?: string;
  config?: string;
  connectionDomain?: string;
  connections?: number;
  createTime?: string;
  endTime?: string;
  engine?: string;
  engineVersion?: string;
  globalInstanceId?: string;
  hasRenewChangeOrder?: string;
  instanceClass?: string;
  instanceId?: string;
  instanceName?: string;
  instanceReleaseProtection?: boolean;
  instanceStatus?: string;
  instanceType?: string;
  isOrderCompleted?: boolean;
  isRds?: boolean;
  isSupportTDE?: boolean;
  maintainEndTime?: string;
  maintainStartTime?: string;
  networkType?: string;
  nodeType?: string;
  packageType?: string;
  port?: number;
  privateIp?: string;
  QPS?: number;
  readOnlyCount?: number;
  realInstanceClass?: string;
  regionId?: string;
  replicaCount?: number;
  replicaId?: string;
  replicationMode?: string;
  resourceGroupId?: string;
  secondaryZoneId?: string;
  securityIPList?: string;
  shardCount?: number;
  slaveReadOnlyCount?: number;
  slaveReplicaCount?: number;
  storage?: string;
  storageType?: string;
  tags?: DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags;
  vSwitchId?: string;
  vpcAuthMode?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
  zoneId?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      auditLogRetention: 'AuditLogRetention',
      autoSecondaryZone: 'AutoSecondaryZone',
      availabilityValue: 'AvailabilityValue',
      backupLogStartTime: 'BackupLogStartTime',
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      cloudType: 'CloudType',
      computingType: 'ComputingType',
      config: 'Config',
      connectionDomain: 'ConnectionDomain',
      connections: 'Connections',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      globalInstanceId: 'GlobalInstanceId',
      hasRenewChangeOrder: 'HasRenewChangeOrder',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceReleaseProtection: 'InstanceReleaseProtection',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      isOrderCompleted: 'IsOrderCompleted',
      isRds: 'IsRds',
      isSupportTDE: 'IsSupportTDE',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      networkType: 'NetworkType',
      nodeType: 'NodeType',
      packageType: 'PackageType',
      port: 'Port',
      privateIp: 'PrivateIp',
      QPS: 'QPS',
      readOnlyCount: 'ReadOnlyCount',
      realInstanceClass: 'RealInstanceClass',
      regionId: 'RegionId',
      replicaCount: 'ReplicaCount',
      replicaId: 'ReplicaId',
      replicationMode: 'ReplicationMode',
      resourceGroupId: 'ResourceGroupId',
      secondaryZoneId: 'SecondaryZoneId',
      securityIPList: 'SecurityIPList',
      shardCount: 'ShardCount',
      slaveReadOnlyCount: 'SlaveReadOnlyCount',
      slaveReplicaCount: 'SlaveReplicaCount',
      storage: 'Storage',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcAuthMode: 'VpcAuthMode',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      auditLogRetention: 'string',
      autoSecondaryZone: 'boolean',
      availabilityValue: 'string',
      backupLogStartTime: 'string',
      bandwidth: 'number',
      capacity: 'number',
      chargeType: 'string',
      cloudType: 'string',
      computingType: 'string',
      config: 'string',
      connectionDomain: 'string',
      connections: 'number',
      createTime: 'string',
      endTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      globalInstanceId: 'string',
      hasRenewChangeOrder: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceReleaseProtection: 'boolean',
      instanceStatus: 'string',
      instanceType: 'string',
      isOrderCompleted: 'boolean',
      isRds: 'boolean',
      isSupportTDE: 'boolean',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      networkType: 'string',
      nodeType: 'string',
      packageType: 'string',
      port: 'number',
      privateIp: 'string',
      QPS: 'number',
      readOnlyCount: 'number',
      realInstanceClass: 'string',
      regionId: 'string',
      replicaCount: 'number',
      replicaId: 'string',
      replicationMode: 'string',
      resourceGroupId: 'string',
      secondaryZoneId: 'string',
      securityIPList: 'string',
      shardCount: 'number',
      slaveReadOnlyCount: 'number',
      slaveReplicaCount: 'number',
      storage: 'string',
      storageType: 'string',
      tags: DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags,
      vSwitchId: 'string',
      vpcAuthMode: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      zoneType: 'string',
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

export class DescribeInstanceAttributeResponseBodyInstances extends $dara.Model {
  DBInstanceAttribute?: DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttribute[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceAttribute: 'DBInstanceAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceAttribute: { 'type': 'array', 'itemType': DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttribute },
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

export class DescribeInstanceAttributeResponseBody extends $dara.Model {
  instances?: DescribeInstanceAttributeResponseBodyInstances;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CA40C261-EB72-4EDA-AC57-958722162595
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstanceAttributeResponseBodyInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

