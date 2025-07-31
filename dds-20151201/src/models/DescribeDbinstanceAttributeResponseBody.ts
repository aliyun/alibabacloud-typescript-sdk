// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverListConfigserverAttribute extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the Configserver node.
   * 
   * @example
   * dds-bp18b0934e7053e4-cs****.mongodb.rds.aliyuncs.com
   */
  connectString?: string;
  /**
   * @remarks
   * The minor version of the current MongoDB kernel.
   * 
   * @example
   * mongodb_20230613_4.0.25
   */
  currentKernelVersion?: string;
  /**
   * @remarks
   * The lock status of the Configserver node. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before a rollback.
   * *   **LockByDiskQuota**: The instance is automatically locked because its storage capacity is exhausted and the instance is inaccessible.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maximum number of connections to the Configserver node.
   * 
   * @example
   * 1000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum IOPS of the Configserver node.
   * 
   * @example
   * 1000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The instance type of the Configserver node.
   * 
   * @example
   * dds.cs.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The name of the Configserver node.
   * 
   * @example
   * testConfigserver
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the Configserver node.
   * 
   * @example
   * dds-bp11483712c1****-cs
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage capacity of the Configserver node. Unit: GB.
   * 
   * @example
   * 20
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The port number that is used to connect to the Configserver node.
   * 
   * @example
   * 3717
   */
  port?: number;
  /**
   * @remarks
   * The status of the Configserver node. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
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
  /**
   * @remarks
   * The endpoint of the mongos node.
   * 
   * @example
   * s-bp1d8c262a15****.mongodb.rds.aliyuncs.com
   */
  connectSting?: string;
  /**
   * @remarks
   * The endpoint of the mongos node.
   * 
   * @example
   * s-bp1d8c262a15****.mongodb.rds.aliyuncs.com
   */
  connectString?: string;
  /**
   * @remarks
   * The minor version of the current MongoDB kernel.
   * 
   * @example
   * mongodb_20220518_4.0.21
   */
  currentKernelVersion?: string;
  /**
   * @remarks
   * The lock status of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before a rollback.
   * *   **LockByDiskQuota**: The instance is automatically locked because its storage capacity is exhausted and the instance is inaccessible.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maximum number of connections to the mongos node.
   * 
   * @example
   * 1000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum IOPS of the mongos node.
   * 
   * @example
   * 800
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The instance type of the mongos node.
   * 
   * @example
   * dds.mongos.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The name of the mongos node.
   * 
   * @example
   * mongos1
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the mongos node.
   * 
   * @example
   * s-bp1d8c262a15****
   */
  nodeId?: string;
  /**
   * @remarks
   * The port number that is used to connect to the mongos node.
   * 
   * @example
   * 3717
   */
  port?: number;
  /**
   * @remarks
   * The status of the mongos node. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vsw-bp1vj604nj5a9zz74****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the mongos node.
   * 
   * @example
   * s-bp1d8c262a158****
   */
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
  /**
   * @remarks
   * The endpoint of the node.
   * 
   * @example
   * dds-bp11483712c1****.mongodb.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The port number that is used to connect to the node.
   * 
   * @example
   * 3717
   */
  connectionPort?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: VPC
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **Primary**
   * *   **Secondary**
   * 
   * @example
   * Primary
   */
  replicaSetRole?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * dds-bp11483712c1****
   */
  VPCCloudInstanceId?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vpc-bp1jk5vwkcri27qme****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1jk5vwkcri27qme****
   */
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
  /**
   * @remarks
   * The endpoint of the shard node.
   * 
   * @example
   * d-bp1af0680a9c6d3****.mongodb.rds.aliyuncs.com:****
   */
  connectString?: string;
  /**
   * @remarks
   * The minor version of the current MongoDB kernel.
   * 
   * @example
   * mongodb_20230613_4.0.25
   */
  currentKernelVersion?: string;
  /**
   * @remarks
   * The lock status of the shard node. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before a rollback.
   * *   **LockByDiskQuota**: The instance is automatically locked because its storage capacity is exhausted and the instance is inaccessible.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maximum number of connections to the shard node.
   * 
   * @example
   * 8000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum MBPS of the shard node.
   * 
   * @example
   * 350
   */
  maxDiskMbps?: string;
  /**
   * @remarks
   * The maximum IOPS of the shard node.
   * 
   * @example
   * 8000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The instance type of the shard node.
   * 
   * @example
   * dds.shard.mid
   */
  nodeClass?: string;
  /**
   * @remarks
   * The name of the shard node.
   * 
   * @example
   * testshard
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the shard node.
   * 
   * @example
   * d-bp16e09d9c5d****
   */
  nodeId?: string;
  /**
   * @remarks
   * The storage capacity of the shard node. Unit: GB.
   * 
   * @example
   * 10
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The port number that is used to connect to the shard node.
   * 
   * @example
   * 3717
   */
  port?: number;
  /**
   * @remarks
   * The number of read-only nodes in the shard node. Valid values: **0** to **5**. The value must be an integer.
   * 
   * @example
   * 0
   */
  readonlyReplicas?: number;
  replicaSetName?: string;
  /**
   * @remarks
   * The status of the shard node. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
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
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * api
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
  /**
   * @remarks
   * Indicates whether performance burst is enabled for the ESSD AutoPL disk.
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The read and write throughput consumed by the instance.
   * 
   * @example
   * 100
   */
  capacityUnit?: string;
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
   * The details of the ConfigServer node.
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   */
  configserverList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceConfigserverList;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-02T07:43:59Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The minor version of the current database in the instance.
   * 
   * @example
   * 5.0.5-20220721143518_0
   */
  currentKernelVersion?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp11483712c1****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The status of the orders generated for the instance. Valid values:
   * 
   * *   **all_completed**: All orders are being produced or complete.
   * *   **order_unpaid**: The instance has unpaid orders.
   * *   **order_wait_for_produce**: Orders are being delivered for production.
   * 
   * >  The order production process includes the following steps: place an order, pay for an order, deliver an order for production, produce an order, and complete the production.
   * 
   * *   If an order is in the **order_wait_for_produce** state for a long time, an error occurs when the order is being delivered for production. The system will automatically retry.
   * *   The instance status changes only when the order is in the producing and complete state, such as changing configurations and running.
   * 
   * @example
   * all_completed
   */
  DBInstanceOrderStatus?: string;
  /**
   * @remarks
   * Indicates whether release protection is enabled for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  DBInstanceReleaseProtection?: boolean;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage capacity of the instance.
   * 
   * @example
   * 10
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **replicate**: replica set instance
   * *   **sharding**: sharded cluster instance
   * 
   * @example
   * replicate
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The time when the instance data was destroyed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-10T16:00:00Z
   */
  destroyTime?: string;
  disasterRecoveryInfo?: string;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The Key Management Service (KMS) key used for disk encryption.
   * 
   * @example
   * 07609cc3-3109-408f-a35e-c548e776da0b
   */
  encryptionKey?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * 
   * @example
   * 4.4
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the subscription instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * >  This parameter is returned if the instance is a subscription instance.
   * 
   * @example
   * 2022-02-05T16:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the secondary zone 2 of the instance. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G
   * *   **cn-hangzhou-h**: Hangzhou Zone H
   * *   **cn-hangzhou-i**: Hangzhou Zone I
   * *   **cn-hongkong-b**: Hongkong Zone B
   * *   **cn-hongkong-c**: Hongkong Zone C
   * *   **cn-hongkong-d**: Hongkong Zone D
   * *   **cn-wulanchabu-a**: Ulanqab Zone A
   * *   **cn-wulanchabu-b**: Ulanqab Zone B
   * *   **cn-wulanchabu-c**: Ulanqab Zone C
   * *   **ap-southeast-1a**: Singapore Zone A
   * *   **ap-southeast-1b**: Singapore Zone B
   * *   **ap-southeast-1c**: Singapore Zone C
   * *   **ap-southeast-5a**: Jakarta Zone A
   * *   **ap-southeast-5b**: Jakarta Zone B
   * *   **ap-southeast-5c**: Jakarta Zone C
   * *   **eu-central-1a**: Frankfurt Zone A
   * *   **eu-central-1b**: Frankfurt Zone B
   * *   **eu-central-1c**: Frankfurt Zone C
   * 
   * > 
   * 
   * *   This parameter is returned if the instance is a replica set or sharded cluster instance that runs MongoDB 4.4 or 5.0 and uses multi-zone deployment.
   * 
   * *   This parameter is returned only if you use the China site (aliyun.com).
   * 
   * @example
   * cn-hangzhou-h
   */
  hiddenZoneId?: string;
  /**
   * @remarks
   * The kind code of the instance. Valid values:
   * 
   * *   **0**: physical machine
   * *   **1**: Elastic Compute Service (ECS) instance
   * *   **2**: Docker cluster
   * *   **18**: Kubernetes cluster
   * 
   * @example
   * 1
   */
  kindCode?: string;
  /**
   * @remarks
   * The date when the last downgrade operation was performed on the instance.
   * 
   * @example
   * 2022-01-08
   */
  lastDowngradeTime?: string;
  /**
   * @remarks
   * The lock status of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before the instance is rolled back.
   * *   **LockByDiskQuota**: The instance is automatically locked after the storage space is exhausted.
   * *   **Released**: The instance is released.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The end time of the maintenance window. The time follows the ISO 8601 standard in the *HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 03:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time follows the ISO 8601 standard in the *HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 18:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The maximum number of connections to the instance.
   * 
   * @example
   * 500
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum IOPS of the instance.
   * 
   * @example
   * 1000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The maximum MBPS of the instance.
   * 
   * @example
   * 350
   */
  maxMBPS?: number;
  /**
   * @remarks
   * The details of the mongos node.
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   */
  mongosList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceMongosList;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: VPC
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The access protocol type of the instance. Valid values:
   * 
   * *   **mongodb**
   * *   **dynamodb**
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   * 
   * @example
   * mongodb
   */
  protocolType?: string;
  /**
   * @remarks
   * The provisioned performance of the ESSD AutoPL disk.
   * 
   * @example
   * 1960
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The number of read-only nodes in the instance.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The logical ID of the replica set instance.
   * 
   * >  ApsaraDB for MongoDB does not support new instances of this type. This parameter applies only to previous-version replica set instances.
   * 
   * @example
   * bls-m****
   */
  replacateId?: string;
  /**
   * @remarks
   * The name of the replica set instance.
   * 
   * >  This parameter is returned if the instance is a replica set instance.
   * 
   * @example
   * mgset-10ace****
   */
  replicaSetName?: string;
  /**
   * @remarks
   * The information of the replica set instance.
   * 
   * >  This parameter is returned if the instance is a replica set instance.
   */
  replicaSets?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceReplicaSets;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * >  This parameter is returned if the instance is a replica set instance.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * >  This parameter is returned only if you use the China site (aliyun.com).
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the secondary zone 1 of the instance. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G
   * *   **cn-hangzhou-h**: Hangzhou Zone H
   * *   **cn-hangzhou-i**: Hangzhou Zone I
   * *   **cn-hongkong-b**: Hongkong Zone B
   * *   **cn-hongkong-c**: Hongkong Zone C
   * *   **cn-hongkong-d**: Hongkong Zone D
   * *   **cn-wulanchabu-a**: Ulanqab Zone A
   * *   **cn-wulanchabu-b**: Ulanqab Zone B
   * *   **cn-wulanchabu-c**: Ulanqab Zone C
   * *   **ap-southeast-1a**: Singapore Zone A
   * *   **ap-southeast-1b**: Singapore Zone B
   * *   **ap-southeast-1c**: Singapore Zone C
   * *   **ap-southeast-5a**: Jakarta Zone A
   * *   **ap-southeast-5b**: Jakarta Zone B
   * *   **ap-southeast-5c**: Jakarta Zone C
   * *   **eu-central-1a**: Frankfurt Zone A
   * *   **eu-central-1b**: Frankfurt Zone B
   * *   **eu-central-1c**: Frankfurt Zone C
   * 
   * > 
   * 
   * *   This parameter is returned if the instance is a replica set or sharded cluster instance that runs MongoDB 4.4 or 5.0 and uses multi-zone deployment.
   * 
   * *   This parameter is returned only if you use the China site (aliyun.com).
   * 
   * @example
   * cn-hangzhou-i
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The details of the shard node.
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   */
  shardList?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceShardList;
  /**
   * @remarks
   * The storage engine of the instance.
   * 
   * @example
   * WiredTiger
   */
  storageEngine?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * **cloud_essd1**: ESSD PL1 **cloud_essd2**: ESSD PL2 **cloud_essd3**: ESSD PL3 **local_ssd**: local SSD **cloud_essd_dbfs_s**: DBFS disk
   * 
   * @example
   * cloud_essd1
   */
  storageType?: string;
  /**
   * @remarks
   * The progress of data synchronization in percentage. When you are changing the configurations of the instance, you must synchronize the data of the instance. You can obtain the data synchronization progress based on the value returned for this parameter.
   * 
   * @example
   * 0.8
   */
  syncPercent?: string;
  /**
   * @remarks
   * The details of the instance tags.
   */
  tags?: DescribeDBInstanceAttributeResponseBodyDBInstancesDBInstanceTags;
  /**
   * @remarks
   * Indicates whether the cluster backup mode is enabled. Valid values:
   * 
   * *   **true**: The cluster backup mode is enabled.
   * *   **false**: The cluster backup mode is disabled.
   * 
   * @example
   * true
   */
  useClusterBackup?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * dds-bp11483712c1****
   */
  VPCCloudInstanceIds?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vpc-bp1n3i15v90el48nx****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the instance.
   * 
   * >  This parameter is returned if the network type of the instance is VPC.
   * 
   * @example
   * vsw-bp1oo2a7isyrb8igf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Indicates whether password-free access within the VPC is enabled. Valid values:
   * 
   * *   **Open**: Password-free access within the VPC is enabled.
   * *   **Close**: Password-free access within the VPC is disabled, and you must use a password for access.
   * *   **NotSupport**: Password-free access within the VPC is not supported.
   * 
   * @example
   * Open
   */
  vpcAuthMode?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance resides.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      burstingEnabled: 'BurstingEnabled',
      capacityUnit: 'CapacityUnit',
      chargeType: 'ChargeType',
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
  /**
   * @remarks
   * The instance details.
   */
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

