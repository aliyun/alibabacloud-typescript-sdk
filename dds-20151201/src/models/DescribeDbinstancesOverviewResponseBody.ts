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
   * Test mongos node
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
   * Test shard node
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
   * The storage capacity of the shard node, in GB.
   * 
   * @example
   * 10
   */
  nodeStorage?: number;
  /**
   * @remarks
   * The number of read-only nodes in the shard. Valid values: **0** to **5**.
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
   * The tag key.
   * 
   * - The key cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * - The key can be up to 64 characters in length.
   * 
   * - The key cannot be an empty string.
   * 
   * @example
   * testdatabase
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * - The value cannot start with `aliyun`, `acs`:, `http://`, or `https://`.
   * 
   * - The value can be up to 128 characters in length.
   * 
   * - The value can be an empty string.
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
   * The read/write throughput of the instance.
   * 
   * > - This parameter is returned only for Serverless instances.
   * >
   * > - Serverless instances are available only on the China site (aliyun.com).
   * 
   * @example
   * 100
   */
  capacityUnit?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PrePaid**: subscription
   * 
   * - **PostPaid**: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the instance was created. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is in UTC.
   * 
   * @example
   * 2022-01-05T03:18:53Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The instance type. For more information about the instance types available for different instance architectures, see:
   * 
   * - [Standalone instance types](https://help.aliyun.com/document_detail/311407.html)
   * 
   * - [Replica set instance types](https://help.aliyun.com/document_detail/311410.html)
   * 
   * - [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html)
   * 
   * <props="china">
   * 
   * > This parameter is not required for Serverless instances.
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
   * dds-bp12c5b040dc****
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
   * The storage capacity of the instance, in GB.
   * 
   * @example
   * 20
   */
  DBInstanceStorage?: number;
  /**
   * @remarks
   * The instance architecture. Valid values:
   * 
   * - **sharding**: sharded cluster instance
   * 
   * - **replicate**: replica set or standalone instance
   * 
   * <props="china">
   * 
   * - **serverless**: Serverless instance
   * 
   * @example
   * replicate
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The time when the data of the instance was destroyed. The time is in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * @example
   * 2021-12-10T16:00:00Z
   */
  destroyTime?: string;
  /**
   * @remarks
   * The database engine. The value is **MongoDB**.
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
   * The expiration time of the subscription instance. The time is in the *yyyy-MM-dd*T*HH:mm*Z format. The time is in UTC.
   * 
   * @example
   * 2022-02-05T16:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - **0**: physical server
   * 
   * - **1**: ECS
   * 
   * - **2**: DOCKER
   * 
   * - **18**: instance on the new Kubernetes-based architecture
   * 
   * @example
   * 0
   */
  kindCode?: string;
  /**
   * @remarks
   * The time when the instance was last downgraded.
   * 
   * @example
   * 2021-05-08
   */
  lastDowngradeTime?: string;
  /**
   * @remarks
   * The lock mode of the instance.
   * 
   * - **Unlock**: The instance is not locked.
   * 
   * - **ManualLock**: The instance is manually locked.
   * 
   * - **LockByExpiration**: The instance is automatically locked after it expires.
   * 
   * - **LockByRestoration**: The instance is automatically locked before a rollback.
   * 
   * - **LockByDiskQuota**: The instance is automatically locked after its storage space is exhausted.
   * 
   * - **Released**: The instance is released. You cannot unlock a released instance. You can only restore the data of the instance to a new instance. The restoration may take a long time.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The details of the mongos nodes.
   * 
   * > This parameter is returned only for sharded cluster instances.
   */
  mongosList?: DescribeDBInstancesOverviewResponseBodyDBInstancesMongosList[];
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - **Classic**: classic network
   * 
   * - **VPC**: virtual private cloud (VPC)
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
   * > This parameter is returned only for replica set instances.
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
   * > This parameter is returned only for sharded cluster instances.
   */
  shardList?: DescribeDBInstancesOverviewResponseBodyDBInstancesShardList[];
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: DescribeDBInstancesOverviewResponseBodyDBInstancesTags[];
  /**
   * @remarks
   * Indicates whether password-free access over a VPC is enabled. Valid values:
   * 
   * - **Open**: enabled
   * 
   * - **Close**: disabled
   * 
   * @example
   * Open
   */
  vpcAuthMode?: string;
  /**
   * @remarks
   * The zone of the instance.
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
   * A list of instance details.
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
   * The number of instances returned.
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

