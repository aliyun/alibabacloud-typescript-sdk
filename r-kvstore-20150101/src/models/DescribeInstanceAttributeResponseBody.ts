// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagkey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tagvalue
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
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **cluster**: cluster architecture
   * *   **standard**: standard architecture
   * *   **rwsplit**: read/write splitting architecture
   * 
   * @example
   * standard
   */
  architectureType?: string;
  /**
   * @remarks
   * The retention period of audit logs. Unit: day. A value of 0 indicates that the audit log feature is disabled. For information about how to enable the feature, see [Enable the audit log feature](https://help.aliyun.com/document_detail/102015.html).
   * 
   * @example
   * 15
   */
  auditLogRetention?: string;
  /**
   * @remarks
   * Indicates whether a secondary zone is automatically allocated.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoSecondaryZone?: boolean;
  /**
   * @remarks
   * The availability metric of the current month.
   * 
   * @example
   * 100%
   */
  availabilityValue?: string;
  /**
   * @remarks
   * The earliest point in time to which data can be restored. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > 
   * 
   * *   This parameter is returned only when the data flashback feature is enabled for the instance. For more information, see [Restore data to a point in time by using the data flashback feature](https://help.aliyun.com/document_detail/148479.html).
   * 
   * *   When you call the [RestoreInstance](https://help.aliyun.com/document_detail/473824.html) operation to implement data flashback, you can obtain the earliest point in time for data flashback from the return value of this parameter and set the **RestoreTime** parameter to this point in time.
   * 
   * @example
   * 2021-07-06T05:49:55Z
   */
  backupLogStartTime?: string;
  /**
   * @remarks
   * The bandwidth of the instance. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: MB.
   * 
   * @example
   * 1024
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
  computingType?: string;
  /**
   * @remarks
   * The parameter configurations of the instance in the JSON format. For more information, see [Parameter descriptions](https://help.aliyun.com/document_detail/43885.html). You can use the [DescribeAuditLogConfig](https://help.aliyun.com/document_detail/473830.html) operation to query audit log configurations.
   * 
   * @example
   * {\\"EvictionPolicy\\":\\"volatile-lru\\",\\"hash-max-ziplist-entries\\":512,\\"zset-max-ziplist-entries\\":128,\\"zset-max-ziplist-value\\":64,\\"set-max-intset-entries\\":512,\\"hash-max-ziplist-value\\":64}
   */
  config?: string;
  /**
   * @remarks
   * The internal endpoint of the instance.
   * 
   * @example
   * r-bp1d72gwl41z7f****.redis.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The maximum number of connections supported by the instance.
   * 
   * @example
   * 10000
   */
  connections?: number;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-06T10:42:03Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the subscription expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-04-06T10:42:03Z
   */
  endTime?: string;
  /**
   * @remarks
   * The database engine of the instance. The return value is **Redis**.
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values: **2.8**, **4.0**, **5.0**, **6.0**, and **7.0**.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The ID of the distributed instance to which the instance belongs.
   * 
   * >  This parameter is returned only when the Tair (Redis OSS-compatible) instance is a child instance of a distributed instance.
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
  hasRenewChangeOrder?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/107984.html).
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp1d72gwl41z7f****
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
   * Indicates whether the release protection feature is enabled for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  instanceReleaseProtection?: boolean;
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
   * >  For more information about instance states, see [Instance states and impacts](https://help.aliyun.com/document_detail/200740.html).
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
   * Indicates whether the order for instance configuration change has reached the final state. Valid values:
   * 
   * *   **true**: The configuration change has been completed or has not been performed.
   * *   **false**: The configurations of the instance are being changed.
   * 
   * @example
   * true
   */
  isOrderCompleted?: boolean;
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
   * Indicates whether the transparent data encryption (TDE) feature is supported for the instance. Valid values:
   * 
   * *   **true**: This feature is supported only for DRAM-based classic instances.
   * *   **false**: This feature is not supported.
   * 
   * @example
   * true
   */
  isSupportTDE?: boolean;
  /**
   * @remarks
   * The end time of the maintenance window. The time is in the *HH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 22:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time is in the *HH:mmZ* format. The time is displayed in UTC.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
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
   * *   **single**: The instance is a standalone instance.
   * 
   * @example
   * double
   */
  nodeType?: string;
  /**
   * @remarks
   * The plan type. Valid values:
   * 
   * *   **standard**: standard plan.
   * *   **customized**: custom plan. This plan type is phased out.
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
   * The private IP address of the instance.
   * 
   * >  This parameter is not returned when the instance is deployed in the classic network.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The expected maximum queries per second (QPS).
   * 
   * @example
   * 100000
   */
  QPS?: number;
  /**
   * @remarks
   * The number of read replicas. This parameter is available only for read/write splitting instances that use cloud disks.
   * 
   * @example
   * 5
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * If the instance is a cluster instance that uses cloud disks, this parameter indicates the actual instance type of individual shards in the instance. The InstanceClass parameter indicates the virtual instance type.
   * 
   * >  To query fees for instances of the instance type, you can specify the instance type that is returned by this parameter in the [DescribePrice](https://help.aliyun.com/document_detail/473807.html) operation.
   * 
   * @example
   * tair.rdb.with.proxy.1g
   */
  realInstanceClass?: string;
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
   * The ID of the replica node.
   * 
   * @example
   * bls-awxxxxxxxxxxxxx
   */
  replicaId?: string;
  /**
   * @remarks
   * The architecture of the replica node. Valid values:
   * 
   * *   **master-slave**: the standard master-replica architecture.
   * *   **cluster**: the cluster architecture, which includes the read/write splitting instances and cluster instances.
   * 
   * @example
   * master-slave
   */
  replicationMode?: string;
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
   * >  This parameter is returned only if the instance has a secondary zone ID.
   * 
   * @example
   * cn-hongkong-h
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The number of shards. This parameter is available only for instances that are purchased on the China site (aliyun.com).
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The number of read replicas in the secondary zone. This parameter is returned only after read/write splitting is enabled for the instance across multiple zones.
   * 
   * @example
   * 2
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
   * The storage capacity of the cloud disk.
   * 
   * @example
   * 50
   */
  storage?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * essd_pl1
   */
  storageType?: string;
  /**
   * @remarks
   * Details about the tags.
   */
  tags?: DescribeInstanceAttributeResponseBodyInstancesDBInstanceAttributeTags;
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
   * Indicates whether password authentication is enabled. Valid values:
   * 
   * *   **Open**: Password authentication is enabled.
   * *   **Close**: Password authentication is disabled and [password-free access](https://help.aliyun.com/document_detail/85168.html) is enabled.
   * 
   * @example
   * Open
   */
  vpcAuthMode?: string;
  /**
   * @remarks
   * The ID of the instance in the VPC.
   * 
   * @example
   * r-bp1d72gwl41z7f****
   */
  vpcCloudInstanceId?: string;
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
   * cn-hongkong-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The deployment type of the instance. Valid values:
   * 
   * *   **singlezone**: The instance is deployed in a single zone.
   * *   **doublezone**: The instance is deployed in two zones of the same region.
   * 
   * @example
   * singlezone
   */
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
  /**
   * @remarks
   * Details about the instances.
   */
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

