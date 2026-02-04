// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesKVStoreInstanceTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * value1
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
  /**
   * @remarks
   * The architecture of the instance. Default value: NULL. Valid values:
   * 
   * *   **cluster**: cluster architecture
   * *   **standard**: standard architecture
   * *   **rwsplit**: read/write splitting architecture
   * *   **NULL**: all of the preceding architectures
   * 
   * @example
   * cluster
   */
  architectureType?: string;
  /**
   * @remarks
   * The bandwidth of the instance. Unit: Mbit/s.
   * 
   * @example
   * 96
   */
  bandwidth?: number;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: MB.
   * 
   * @example
   * 4096
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is returned only when the instance is in a cloud box.
   * 
   * @example
   * cloudbox
   */
  cloudType?: string;
  /**
   * @remarks
   * The type of the computing resource. Valid values:
   * 
   * *   **Ecs**: cloud-native computing service
   * *   **Machine**: physical machine
   * 
   * @example
   * Ecs
   */
  computingType?: string;
  /**
   * @remarks
   * The parameter configurations of the instance. For more information, see [Modify parameters of an instance](https://help.aliyun.com/document_detail/43885.html).
   * 
   * @example
   * {\\"maxmemory-policy\\":\\"volatile-lfu\\",\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64,\\"#no_loose_disabled-commands\\":\\"flushall,flushdb\\",\\"lazyfree-lazy-eviction\\":\\"yes\\"}
   */
  config?: string;
  /**
   * @remarks
   * The internal endpoint of the instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com
   */
  connectionDomain?: string;
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
   * The maximum number of connections supported by the instance.
   * 
   * @example
   * 20000
   */
  connections?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2018-11-07T08:49:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance was deleted.
   * 
   * @example
   * 2019-04-28T10:03:01Z
   */
  destroyTime?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * 
   * *   **Community**: Redis Open-Source Edition
   * *   **Enterprise**: Tair (Enterprise Edition)
   * 
   * @example
   * Enterprise
   */
  editionType?: string;
  /**
   * @remarks
   * The time when the subscription instance expires.
   * 
   * @example
   * 2019-06-13T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The ID of the distributed instance.
   * 
   * >  This parameter is returned only if the instance is a child instance of a distributed instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * Indicates whether your Alibaba Cloud account has pending orders for renewal and configuration change. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  hasRenewChangeOrder?: boolean;
  /**
   * @remarks
   * The instance class.
   * 
   * @example
   * redis.logic.sharding.2g.2db.0rodb.4proxy.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **Normal**: The instance is normal.
   * *   **Creating**: The instance is being created.
   * *   **Changing**: The configurations of the instance are being changed.
   * *   **Inactive**: The instance is disabled.
   * *   **Flushing**: The instance is being released.
   * *   **Released**: The instance is released.
   * *   **Transforming**: The billing method of the instance is being changed.
   * *   **Unavailable**: The instance is unavailable.
   * *   **Error**: The instance failed to be created.
   * *   **Migrating**: The instance is being migrated.
   * *   **BackupRecovering**: The instance is being restored from a backup.
   * *   **MinorVersionUpgrading**: The minor version of the instance is being updated.
   * *   **NetworkModifying**: The network type of the instance is being changed.
   * *   **SSLModifying**: The SSL configurations of the instance are being changed.
   * *   **MajorVersionUpgrading**: The major version of the instance is being upgraded. The instance remains accessible during the upgrade.
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   **Tair**
   * *   **Redis**
   * *   **Memcache**
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed by ApsaraDB RDS. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isRds?: boolean;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **CLASSIC**
   * *   **VPC**
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **double**: The instance contains a master node and a replica node.
   * *   **single**: The instance contains only a master node. This node type is phased out.
   * 
   * @example
   * double
   */
  nodeType?: string;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * *   **standard**: standard plan
   * *   **customized**: custom plan
   * 
   * @example
   * standard
   */
  packageType?: string;
  /**
   * @remarks
   * The service port of the instance.
   * 
   * @example
   * 6379
   */
  port?: number;
  /**
   * @remarks
   * The private IP address.
   * 
   * >  This parameter is not returned when the instance is deployed in the classic network.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The number of queries per second (QPS).
   * 
   * @example
   * 100000
   */
  QPS?: number;
  /**
   * @remarks
   * The number of read replicas in the primary zone.
   * 
   * >  The **ReadOnlyCount** and **SlaveReadOnlyCount** parameters are applicable only to cloud-native instances for which read/write splitting is enabled. If the instance is a cluster instance, the preceding parameters indicate the number of read replicas **per node** in the primary and secondary zones of the instance.
   * 
   * @example
   * 1
   */
  readOnlyCount?: string;
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
   * The logical ID of the distributed instance.
   * 
   * @example
   * grr-bp11381ebc16****
   */
  replacateId?: string;
  /**
   * @remarks
   * The number of replica nodes in the primary zone.
   * 
   * >  The **ReplicaCount** and **SlaveReplicaCount** parameters are applicable only to cloud-native instances. If the instance is a cluster instance, the preceding parameters indicate the number of replica nodes **per node** in the primary and secondary zones of the instance.
   * 
   * @example
   * 1
   */
  replicaCount?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the secondary zone.
   * 
   * >  If multiple zones are returned for **ZoneId**, such as cn-hangzhou-MAZ10(h,i), this parameter is ignored.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The shard class. For more information about shard classes, see [Overview](https://help.aliyun.com/document_detail/26350.html).
   * 
   * >  The overall performance of a cluster instance is calculated by multiplying the class of a single shard (ShardClass) by the number of shards (ShardCount).
   * 
   * @example
   * redis.shard.small.ce
   */
  shardClass?: string;
  /**
   * @remarks
   * The number of data shards in the cluster instance.
   * 
   * >  This parameter is returned only for cloud-native cluster instances or read/write splitting instances.
   * 
   * @example
   * 3
   */
  shardCount?: number;
  /**
   * @remarks
   * The number of read replicas in the secondary zone.
   * 
   * @example
   * 1
   */
  slaveReadOnlyCount?: number;
  /**
   * @remarks
   * The number of replica nodes in the secondary zone.
   * 
   * @example
   * 1
   */
  slaveReplicaCount?: number;
  /**
   * @remarks
   * Details about the tags.
   */
  tags?: DescribeInstancesResponseBodyInstancesKVStoreInstanceTags;
  /**
   * @remarks
   * The username used to connect to the instance. By default, a username named after the instance ID is included.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  userName?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
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
  /**
   * @remarks
   * Details about the instances.
   */
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

