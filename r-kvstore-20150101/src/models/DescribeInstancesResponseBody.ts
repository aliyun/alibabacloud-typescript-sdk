// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesKVStoreInstanceTagsTag extends $dara.Model {
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

export class DescribeInstancesResponseBodyInstancesKVStoreInstanceTags extends $dara.Model {
  tag?: DescribeInstancesResponseBodyInstancesKVStoreInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesKVStoreInstanceTagsTag },
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

export class DescribeInstancesResponseBodyInstancesKVStoreInstance extends $dara.Model {
  architectureType?: string;
  bandwidth?: number;
  capacity?: number;
  chargeType?: string;
  cloudType?: string;
  computingType?: string;
  config?: string;
  connectionDomain?: string;
  connectionMode?: string;
  connections?: number;
  createTime?: string;
  destroyTime?: string;
  editionType?: string;
  endTime?: string;
  engineVersion?: string;
  globalInstanceId?: string;
  hasRenewChangeOrder?: boolean;
  instanceClass?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  isRds?: boolean;
  networkType?: string;
  nodeType?: string;
  packageType?: string;
  port?: number;
  privateIp?: string;
  QPS?: number;
  readOnlyCount?: string;
  regionId?: string;
  replacateId?: string;
  replicaCount?: number;
  resourceGroupId?: string;
  secondaryZoneId?: string;
  shardClass?: string;
  shardCount?: number;
  slaveReadOnlyCount?: number;
  slaveReplicaCount?: number;
  tags?: DescribeInstancesResponseBodyInstancesKVStoreInstanceTags;
  userName?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      cloudType: 'CloudType',
      computingType: 'ComputingType',
      config: 'Config',
      connectionDomain: 'ConnectionDomain',
      connectionMode: 'ConnectionMode',
      connections: 'Connections',
      createTime: 'CreateTime',
      destroyTime: 'DestroyTime',
      editionType: 'EditionType',
      endTime: 'EndTime',
      engineVersion: 'EngineVersion',
      globalInstanceId: 'GlobalInstanceId',
      hasRenewChangeOrder: 'HasRenewChangeOrder',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      isRds: 'IsRds',
      networkType: 'NetworkType',
      nodeType: 'NodeType',
      packageType: 'PackageType',
      port: 'Port',
      privateIp: 'PrivateIp',
      QPS: 'QPS',
      readOnlyCount: 'ReadOnlyCount',
      regionId: 'RegionId',
      replacateId: 'ReplacateId',
      replicaCount: 'ReplicaCount',
      resourceGroupId: 'ResourceGroupId',
      secondaryZoneId: 'SecondaryZoneId',
      shardClass: 'ShardClass',
      shardCount: 'ShardCount',
      slaveReadOnlyCount: 'SlaveReadOnlyCount',
      slaveReplicaCount: 'SlaveReplicaCount',
      tags: 'Tags',
      userName: 'UserName',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      bandwidth: 'number',
      capacity: 'number',
      chargeType: 'string',
      cloudType: 'string',
      computingType: 'string',
      config: 'string',
      connectionDomain: 'string',
      connectionMode: 'string',
      connections: 'number',
      createTime: 'string',
      destroyTime: 'string',
      editionType: 'string',
      endTime: 'string',
      engineVersion: 'string',
      globalInstanceId: 'string',
      hasRenewChangeOrder: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      isRds: 'boolean',
      networkType: 'string',
      nodeType: 'string',
      packageType: 'string',
      port: 'number',
      privateIp: 'string',
      QPS: 'number',
      readOnlyCount: 'string',
      regionId: 'string',
      replacateId: 'string',
      replicaCount: 'number',
      resourceGroupId: 'string',
      secondaryZoneId: 'string',
      shardClass: 'string',
      shardCount: 'number',
      slaveReadOnlyCount: 'number',
      slaveReplicaCount: 'number',
      tags: DescribeInstancesResponseBodyInstancesKVStoreInstanceTags,
      userName: 'string',
      vSwitchId: 'string',
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

export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  KVStoreInstance?: DescribeInstancesResponseBodyInstancesKVStoreInstance[];
  static names(): { [key: string]: string } {
    return {
      KVStoreInstance: 'KVStoreInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVStoreInstance: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesKVStoreInstance },
    };
  }

  validate() {
    if(Array.isArray(this.KVStoreInstance)) {
      $dara.Model.validateArray(this.KVStoreInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instances?: DescribeInstancesResponseBodyInstances;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1E83311F-0EE4-4922-A3BF-730B312B****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeInstancesResponseBodyInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

