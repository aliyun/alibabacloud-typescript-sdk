// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesOverviewResponseBodyDBInstancesMongosList extends $dara.Model {
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
   * mongos node describe.
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

export class DescribeDBInstancesOverviewResponseBodyDBInstancesShardList extends $dara.Model {
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
   * testshard
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
   * The storage space of the shard node. Unit: GB.
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

export class DescribeDBInstancesOverviewResponseBodyDBInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: **1** to **20**.
   * 
   * *   The key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * *   It can be up to 64 characters in length.
   * *   It cannot be an empty string.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1** to **20**.
   * 
   * *   The value cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * *   The value can be up to 128 characters in length.
   * *   The value can be an empty string.
   * 
   * @example
   * apitest
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

export class DescribeDBInstancesOverviewResponseBodyDBInstances extends $dara.Model {
  /**
   * @remarks
   * The read and write throughput consumed by the instance.
   * 
   * > 
   * 
   * *   This parameter is returned when the instance is a serverless instance.
   * 
   * *   Serverless instances are available only in the China site (aliyun.com).
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
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-05T03:18:53Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance type. The instance type varies based on the instance architecture. For more information about instance types supported by different instance architectures, see the following references:
   * 
   * *   [Standalone instance types](https://help.aliyun.com/document_detail/311407.html)
   * *   [Replica set instance types](https://help.aliyun.com/document_detail/311410.html)
   * *   [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html)
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
   * test db
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dds-bp12c5b040dc****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The state of the instance. For more information about valid values, see [Instance states](https://help.aliyun.com/document_detail/63870.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage space of the instance. Unit: GB.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **sharding**: sharded cluster instance
   * *   **replicate**: replica set or standalone instance
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
  /**
   * @remarks
   * The database engine of the instance. Set the value to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
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
   * 2022-02-05T16:00Z
   */
  expireTime?: string;
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
   * 0
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
   * Indicates whether the instance is locked. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
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
   * The details of the mongos nodes.
   * 
   * >  This parameter is returned when the instance is a sharded cluster instance.
   */
  mongosList?: DescribeDBInstancesOverviewResponseBodyDBInstancesMongosList[];
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**
   * *   **VPC**
   * 
   * @example
   * VPC
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
   * The number of nodes in the instance.
   * 
   * >  This parameter is returned when the instance is a replica set instance.
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
   * rg-acfm22cdcgc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The details of the shard nodes.
   * 
   * >  This parameter is returned when the instance is a sharded cluster instance.
   */
  shardList?: DescribeDBInstancesOverviewResponseBodyDBInstancesShardList[];
  /**
   * @remarks
   * The tags to add to the instance.
   */
  tags?: DescribeDBInstancesOverviewResponseBodyDBInstancesTags[];
  /**
   * @remarks
   * Indicates whether password-free access over VPC is enabled. Valid values:
   * 
   * *   **Open**: Password-free access over VPC is enabled.
   * *   **Close**: Password-free access over VPC is disabled.
   * 
   * @example
   * Open
   */
  vpcAuthMode?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
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
      kindCode: 'KindCode',
      lastDowngradeTime: 'LastDowngradeTime',
      lockMode: 'LockMode',
      mongosList: 'MongosList',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      shardList: 'ShardList',
      tags: 'Tags',
      vpcAuthMode: 'VpcAuthMode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      kindCode: 'string',
      lastDowngradeTime: 'string',
      lockMode: 'string',
      mongosList: { 'type': 'array', 'itemType': DescribeDBInstancesOverviewResponseBodyDBInstancesMongosList },
      networkType: 'string',
      regionId: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      shardList: { 'type': 'array', 'itemType': DescribeDBInstancesOverviewResponseBodyDBInstancesShardList },
      tags: { 'type': 'array', 'itemType': DescribeDBInstancesOverviewResponseBodyDBInstancesTags },
      vpcAuthMode: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mongosList)) {
      $dara.Model.validateArray(this.mongosList);
    }
    if(Array.isArray(this.shardList)) {
      $dara.Model.validateArray(this.shardList);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of instances.
   */
  DBInstances?: DescribeDBInstancesOverviewResponseBodyDBInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52820D2B-B2DD-59F0-BDF2-83EC19C6F1CA
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances in the query results.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': DescribeDBInstancesOverviewResponseBodyDBInstances },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

