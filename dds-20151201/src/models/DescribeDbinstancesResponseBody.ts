// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute extends $dara.Model {
  /**
   * @remarks
   * The instance type of the mongos node.
   * 
   * @example
   * dds.mongos.standard
   */
  nodeClass?: string;
  /**
   * @remarks
   * The description of the mongos node.
   * 
   * @example
   * testmongosnode
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the mongos node.
   * 
   * @example
   * s-bp10e3b0d02f****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList extends $dara.Model {
  mongosAttribute?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute[];
  static names(): { [key: string]: string } {
    return {
      mongosAttribute: 'MongosAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mongosAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute },
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

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute extends $dara.Model {
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
   * The description of the shard node.
   * 
   * @example
   * testshardnode
   */
  nodeDescription?: string;
  /**
   * @remarks
   * The ID of the shard node.
   * 
   * @example
   * d-bp1cac6f2083****
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
   * The number of read-only nodes in the shard node. Valid values: **0** to **5**.
   * 
   * @example
   * 2
   */
  readonlyReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      readonlyReplicas: 'ReadonlyReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      readonlyReplicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList extends $dara.Model {
  shardAttribute?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute[];
  static names(): { [key: string]: string } {
    return {
      shardAttribute: 'ShardAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute },
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

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag extends $dara.Model {
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

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags extends $dara.Model {
  tag?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag },
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

export class DescribeDBInstancesResponseBodyDBInstancesDBInstance extends $dara.Model {
  /**
   * @remarks
   * The backup retention policy configured for the instance. Valid values:
   * 
   * *   **0**: All backup sets of the instance are immediately deleted when the instance is released.
   * *   **1**: A backup set of the instance is automatically backed up and retained for a long period of time when the instance is released.
   * *   **2**: All backup sets of the instance are automatically backed up and retained for a long period of time when the instance is released.
   * 
   * @example
   * 1
   */
  backupRetentionPolicy?: number;
  /**
   * @remarks
   * The I/O throughput consumed by the instance.
   * 
   * >  This parameter is required only when the instance is a serverless instance.
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
   * *   **PostPaid:** pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-25T02:18:00Z
   */
  creationTime?: string;
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
   * The description of the instance.
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
   * dds-bp18b0934e70****
   */
  DBInstanceId?: string;
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
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The architecture of the instance.
   * 
   * *   **sharding**: sharded cluster instance
   * *   **replicate**: replica set or standalone instance
   * 
   * @example
   * sharding
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The time when the instance data is destroyed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * > *   For a subscription instance, the computing resources of the instance are released on the 16th day after expiration, and the data of the instance is retained for seven days. The data is deleted on the 23th day after expiration and cannot be restored.
   * > *   For a pay-as-you-go instance, the computing resources of the instance are released on the 16th day after the payment becomes overdue, and the data of the instance is retained for seven days. The data is deleted on the 23th day after the payment becomes overdue and cannot be restored.
   * 
   * @example
   * 2021-12-10T16:00:00Z
   */
  destroyTime?: string;
  /**
   * @remarks
   * The engine of the instance.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values:
   * 
   * *   **7.0**
   * *   **6.0**
   * *   **5.0**
   * *   **4.4**
   * *   **4.2**
   * *   **4.0**
   * *   **3.4**
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-25T16:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The secondary zone 2 of the instance in the multi-zone deployment. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G
   * *   **cn-hangzhou-h**: Hangzhou Zone H
   * *   **cn-hangzhou-i**: Hangzhou Zone I
   * *   **cn-hongkong-b**: Hong Kong Zone B
   * *   **cn-hongkong-c**: Hong Kong Zone C
   * *   **cn-hongkong-d**: Hong Kong Zone D
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
   * > *   This parameter is returned only when the instance is a replica set or sharded cluster instance that runs MongoDB 4.4 or 5.0 and uses the multi-zone deployment.
   * > *   This parameter is returned only if you use the China site (aliyun.com).
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
   * The date when the last downgrade operation was performed.
   * 
   * @example
   * 2021-05-08
   */
  lastDowngradeTime?: string;
  /**
   * @remarks
   * The lock status of the instance. Valid values:
   * 
   * *   **Unlock**: The cluster is unlocked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before it is rolled back.
   * *   **LockByDiskQuota**: The instance is automatically locked after the storage space is exhausted.
   * *   **Released**: The instance is released. After an instance is released, the instance cannot be unlocked. You can only restore the backup data of the instance to a new instance. This process requires a long period of time.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The details of the mongos node.
   * 
   * >  This parameter is returned if the instance is a sharded cluster instance.
   */
  mongosList?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: VPC
   * 
   * @example
   * Classic
   */
  networkType?: string;
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
   * The time when the instance was released.
   * 
   * @example
   * 2024-06-17T07:01Z
   */
  releaseTime?: string;
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
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The secondary zone 1 of the instance in the multi-zone deployment. Valid values:
   * 
   * *   **cn-hangzhou-g**: Hangzhou Zone G
   * *   **cn-hangzhou-h**: Hangzhou Zone H
   * *   **cn-hangzhou-i**: Hangzhou Zone I
   * *   **cn-hongkong-b**: Hong Kong Zone B
   * *   **cn-hongkong-c**: Hong Kong Zone C
   * *   **cn-hongkong-d**: Hong Kong Zone D
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
   * > *   This parameter is returned only when the instance is a replica set or sharded cluster instance that runs MongoDB 4.4 or 5.0 and uses the multi-zone deployment.
   * > *   This parameter is returned only if you use the China site (aliyun.com).
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
  shardList?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **cloud_essd**: Enterprise SSD (ESSD)
   * *   **local_ssd**: local SSD
   * 
   * @example
   * local_ssd
   */
  storageType?: string;
  /**
   * @remarks
   * The details of the tag.
   */
  tags?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags;
  /**
   * @remarks
   * Indicates whether password-free access over virtual private cloud (VPC) is enabled. Valid values:
   * 
   * *   **Open**: Password-free access over VPC is enabled.
   * *   **Close**: Password-free access over VPC is disabled.
   * 
   * @example
   * Close
   */
  vpcAuthMode?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPolicy: 'BackupRetentionPolicy',
      capacityUnit: 'CapacityUnit',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceType: 'DBInstanceType',
      destroyTime: 'DestroyTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      hiddenZoneId: 'HiddenZoneId',
      kindCode: 'KindCode',
      lastDowngradeTime: 'LastDowngradeTime',
      lockMode: 'LockMode',
      mongosList: 'MongosList',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      releaseTime: 'ReleaseTime',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      secondaryZoneId: 'SecondaryZoneId',
      shardList: 'ShardList',
      storageType: 'StorageType',
      tags: 'Tags',
      vpcAuthMode: 'VpcAuthMode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPolicy: 'number',
      capacityUnit: 'string',
      chargeType: 'string',
      creationTime: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      DBInstanceType: 'string',
      destroyTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      hiddenZoneId: 'string',
      kindCode: 'string',
      lastDowngradeTime: 'string',
      lockMode: 'string',
      mongosList: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList,
      networkType: 'string',
      regionId: 'string',
      releaseTime: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      secondaryZoneId: 'string',
      shardList: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList,
      storageType: 'string',
      tags: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags,
      vpcAuthMode: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.mongosList && typeof (this.mongosList as any).validate === 'function') {
      (this.mongosList as any).validate();
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

export class DescribeDBInstancesResponseBodyDBInstances extends $dara.Model {
  DBInstance?: DescribeDBInstancesResponseBodyDBInstancesDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstance },
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

export class DescribeDBInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the instance.
   */
  DBInstances?: DescribeDBInstancesResponseBodyDBInstances;
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
   * The number of entries returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0E4FE33F-5510-5758-8FA7-A6672CDE****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances in the query results.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: DescribeDBInstancesResponseBodyDBInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

