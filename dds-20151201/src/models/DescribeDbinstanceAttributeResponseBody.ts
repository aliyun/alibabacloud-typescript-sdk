// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute extends $dara.Model {
  connectString?: string;
  currentKernelVersion?: string;
  lockMode?: string;
  maxConnections?: number;
  maxIOPS?: number;
  nodeClass?: string;
  nodeDescription?: string;
  nodeId?: string;
  nodeStorage?: number;
  port?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectString: 'ConnectString',
      currentKernelVersion: 'CurrentKernelVersion',
      lockMode: 'LockMode',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      port: 'Port',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectString: 'string',
      currentKernelVersion: 'string',
      lockMode: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      port: 'number',
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

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList extends $dara.Model {
  configserverAttribute?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute[];
  static names(): { [key: string]: string } {
    return {
      configserverAttribute: 'ConfigserverAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configserverAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.configserverAttribute)) {
      $dara.Model.validateArray(this.configserverAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosListMongosAttribute extends $dara.Model {
  connectSting?: string;
  connectString?: string;
  currentKernelVersion?: string;
  lockMode?: string;
  maxConnections?: number;
  maxIOPS?: number;
  nodeClass?: string;
  nodeDescription?: string;
  nodeId?: string;
  port?: number;
  status?: string;
  VPCId?: string;
  vSwitchId?: string;
  vpcCloudInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectSting: 'ConnectSting',
      connectString: 'ConnectString',
      currentKernelVersion: 'CurrentKernelVersion',
      lockMode: 'LockMode',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      port: 'Port',
      status: 'Status',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectSting: 'string',
      connectString: 'string',
      currentKernelVersion: 'string',
      lockMode: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      port: 'number',
      status: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList extends $dara.Model {
  mongosAttribute?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosListMongosAttribute[];
  static names(): { [key: string]: string } {
    return {
      mongosAttribute: 'MongosAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mongosAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosListMongosAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.mongosAttribute)) {
      $dara.Model.validateArray(this.mongosAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSetsReplicaSet extends $dara.Model {
  connectionDomain?: string;
  connectionPort?: string;
  networkType?: string;
  replicaSetRole?: string;
  VPCCloudInstanceId?: string;
  VPCId?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionDomain: 'ConnectionDomain',
      connectionPort: 'ConnectionPort',
      networkType: 'NetworkType',
      replicaSetRole: 'ReplicaSetRole',
      VPCCloudInstanceId: 'VPCCloudInstanceId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDomain: 'string',
      connectionPort: 'string',
      networkType: 'string',
      replicaSetRole: 'string',
      VPCCloudInstanceId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets extends $dara.Model {
  replicaSet?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSetsReplicaSet[];
  static names(): { [key: string]: string } {
    return {
      replicaSet: 'ReplicaSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaSet: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSetsReplicaSet },
    };
  }

  validate() {
    if(Array.isArray(this.replicaSet)) {
      $dara.Model.validateArray(this.replicaSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardListShardAttribute extends $dara.Model {
  connectString?: string;
  currentKernelVersion?: string;
  lockMode?: string;
  maxConnections?: number;
  maxDiskMbps?: string;
  maxIOPS?: number;
  nodeClass?: string;
  nodeDescription?: string;
  nodeId?: string;
  nodeStorage?: number;
  port?: number;
  readonlyReplicas?: number;
  replicaSetName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      connectString: 'ConnectString',
      currentKernelVersion: 'CurrentKernelVersion',
      lockMode: 'LockMode',
      maxConnections: 'MaxConnections',
      maxDiskMbps: 'MaxDiskMbps',
      maxIOPS: 'MaxIOPS',
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      port: 'Port',
      readonlyReplicas: 'ReadonlyReplicas',
      replicaSetName: 'ReplicaSetName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectString: 'string',
      currentKernelVersion: 'string',
      lockMode: 'string',
      maxConnections: 'number',
      maxDiskMbps: 'string',
      maxIOPS: 'number',
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      port: 'number',
      readonlyReplicas: 'number',
      replicaSetName: 'string',
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

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList extends $dara.Model {
  shardAttribute?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardListShardAttribute[];
  static names(): { [key: string]: string } {
    return {
      shardAttribute: 'ShardAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardAttribute: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardListShardAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.shardAttribute)) {
      $dara.Model.validateArray(this.shardAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTagsTag extends $dara.Model {
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

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags extends $dara.Model {
  tag?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTagsTag },
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

export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstance extends $dara.Model {
  burstingEnabled?: boolean;
  capacityUnit?: string;
  chargeType?: string;
  coldDataEnabled?: boolean;
  configserverList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList;
  creationTime?: string;
  currentKernelVersion?: string;
  DBInstanceClass?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceOrderStatus?: string;
  DBInstanceReleaseProtection?: boolean;
  DBInstanceStatus?: string;
  DBInstanceStorage?: number;
  DBInstanceType?: string;
  destroyTime?: string;
  disasterRecoveryInfo?: string;
  encrypted?: boolean;
  encryptionKey?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  hiddenZoneId?: string;
  kindCode?: string;
  lastDowngradeTime?: string;
  lockMode?: string;
  maintainEndTime?: string;
  maintainStartTime?: string;
  maxConnections?: number;
  maxIOPS?: number;
  maxMBPS?: number;
  mongosList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList;
  networkType?: string;
  protocolType?: string;
  provisionedIops?: number;
  readonlyReplicas?: string;
  regionId?: string;
  replacateId?: string;
  replicaSetName?: string;
  replicaSets?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets;
  replicationFactor?: string;
  resourceGroupId?: string;
  /**
   * @example
   * mdb.shard.2x.xlarge.d
   */
  searchNodeClass?: string;
  /**
   * @example
   * 2
   */
  searchNodeCount?: number;
  /**
   * @example
   * 20
   */
  searchNodeStorage?: number;
  secondaryZoneId?: string;
  shardList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList;
  storageEngine?: string;
  storageType?: string;
  syncPercent?: string;
  tags?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags;
  useClusterBackup?: boolean;
  VPCCloudInstanceIds?: string;
  VPCId?: string;
  vSwitchId?: string;
  vpcAuthMode?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      burstingEnabled: 'BurstingEnabled',
      capacityUnit: 'CapacityUnit',
      chargeType: 'ChargeType',
      coldDataEnabled: 'ColdDataEnabled',
      configserverList: 'ConfigserverList',
      creationTime: 'CreationTime',
      currentKernelVersion: 'CurrentKernelVersion',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceOrderStatus: 'DBInstanceOrderStatus',
      DBInstanceReleaseProtection: 'DBInstanceReleaseProtection',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceType: 'DBInstanceType',
      destroyTime: 'DestroyTime',
      disasterRecoveryInfo: 'DisasterRecoveryInfo',
      encrypted: 'Encrypted',
      encryptionKey: 'EncryptionKey',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      hiddenZoneId: 'HiddenZoneId',
      kindCode: 'KindCode',
      lastDowngradeTime: 'LastDowngradeTime',
      lockMode: 'LockMode',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      maxMBPS: 'MaxMBPS',
      mongosList: 'MongosList',
      networkType: 'NetworkType',
      protocolType: 'ProtocolType',
      provisionedIops: 'ProvisionedIops',
      readonlyReplicas: 'ReadonlyReplicas',
      regionId: 'RegionId',
      replacateId: 'ReplacateId',
      replicaSetName: 'ReplicaSetName',
      replicaSets: 'ReplicaSets',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      searchNodeClass: 'SearchNodeClass',
      searchNodeCount: 'SearchNodeCount',
      searchNodeStorage: 'SearchNodeStorage',
      secondaryZoneId: 'SecondaryZoneId',
      shardList: 'ShardList',
      storageEngine: 'StorageEngine',
      storageType: 'StorageType',
      syncPercent: 'SyncPercent',
      tags: 'Tags',
      useClusterBackup: 'UseClusterBackup',
      VPCCloudInstanceIds: 'VPCCloudInstanceIds',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcAuthMode: 'VpcAuthMode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstingEnabled: 'boolean',
      capacityUnit: 'string',
      chargeType: 'string',
      coldDataEnabled: 'boolean',
      configserverList: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList,
      creationTime: 'string',
      currentKernelVersion: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceOrderStatus: 'string',
      DBInstanceReleaseProtection: 'boolean',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      DBInstanceType: 'string',
      destroyTime: 'string',
      disasterRecoveryInfo: 'string',
      encrypted: 'boolean',
      encryptionKey: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      hiddenZoneId: 'string',
      kindCode: 'string',
      lastDowngradeTime: 'string',
      lockMode: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      maxConnections: 'number',
      maxIOPS: 'number',
      maxMBPS: 'number',
      mongosList: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList,
      networkType: 'string',
      protocolType: 'string',
      provisionedIops: 'number',
      readonlyReplicas: 'string',
      regionId: 'string',
      replacateId: 'string',
      replicaSetName: 'string',
      replicaSets: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets,
      replicationFactor: 'string',
      resourceGroupId: 'string',
      searchNodeClass: 'string',
      searchNodeCount: 'number',
      searchNodeStorage: 'number',
      secondaryZoneId: 'string',
      shardList: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList,
      storageEngine: 'string',
      storageType: 'string',
      syncPercent: 'string',
      tags: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags,
      useClusterBackup: 'boolean',
      VPCCloudInstanceIds: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcAuthMode: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.configserverList && typeof (this.configserverList as any).validate === 'function') {
      (this.configserverList as any).validate();
    }
    if(this.mongosList && typeof (this.mongosList as any).validate === 'function') {
      (this.mongosList as any).validate();
    }
    if(this.replicaSets && typeof (this.replicaSets as any).validate === 'function') {
      (this.replicaSets as any).validate();
    }
    if(this.shardList && typeof (this.shardList as any).validate === 'function') {
      (this.shardList as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBodyDBInstances extends $dara.Model {
  DBInstance?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstance },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstance)) {
      $dara.Model.validateArray(this.DBInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
  DBInstances?: DescribeDBInstanceAttributeResponseBodyDBInstances;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A935A8EE-A6CC-53DE-98BA-20ABAA7E632B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: DescribeDBInstanceAttributeResponseBodyDBInstances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBInstances && typeof (this.DBInstances as any).validate === 'function') {
      (this.DBInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

