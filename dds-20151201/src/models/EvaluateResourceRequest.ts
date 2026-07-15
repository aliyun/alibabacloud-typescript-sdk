// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance type.
   * 
   * > This parameter is required when you evaluate resources for a replica set instance. For details about instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID. This parameter is required when you evaluate resources for an instance upgrade or downgrade.
   * 
   * @example
   * dds-bp14bf67a76d****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine. Set the value to **MongoDB**.
   * 
   * @example
   * MongoDB
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.2
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in the instance. Valid values: **1** to **5**.
   * 
   * > This parameter is not required for standalone instances<props="china"> and Serverless instances.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The ID of the region. For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/61933.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of nodes in the instance.
   * 
   * - Set the value to **1** for a standalone instance.
   * 
   * - Set the value to **2** for an instance that uses shared storage.
   * 
   * - For a replica set instance, valid values are **3**, **5**, and **7**.
   * 
   * <props="china">
   * 
   * > This parameter is not required for Serverless instances.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The shard information of the sharded cluster. This parameter is required when you evaluate resources for a sharded cluster instance.
   * 
   * To evaluate resources for a new sharded cluster instance, specify the instance type for each shard in a JSON string. Example:
   * 
   * ```
   * {
   *      "ConfigSvrs":
   *          [{"Storage":20,"DBInstanceClass":"dds.cs.mid"}],
   *      "Mongos":
   *          [{"DBInstanceClass":"dds.mongos.standard"},{"DBInstanceClass":"dds.mongos.standard"}],
   *      "Shards":
   *          [{"Storage":50,"DBInstanceClass":"dds.shard.standard"},{"Storage":50,"DBInstanceClass":"dds.shard.standard"},   {"Storage":50,"DBInstanceClass":"dds.shard.standard"}]
   *  }
   * ```
   * 
   * The parameters in the example are described as follows:
   * 
   * - ConfigSvrs: The ConfigServer nodes.
   * 
   * - Mongos: The Mongos nodes.
   * 
   * - Shards: The shard nodes.
   * 
   * - Storage: The storage space of the target shard.
   * 
   * - DBInstanceClass: The instance type of the target shard. For details about instance types, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * To evaluate resources for upgrading or downgrading a sharded cluster instance, specify only the node information in a JSON string. Example:
   * 
   * ```
   * {
   *      "NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"
   * } 
   * ```
   * 
   * The parameters in the example are described as follows:
   * 
   * - NodeId: The ID of the target node.
   * 
   * - NodeClass: The instance type of the target node. For details about instance types, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * @example
   * {"NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"}
   */
  shardsInfo?: string;
  /**
   * @remarks
   * The storage space of the replica set. Unit: GB.
   * 
   * > This parameter is required if the instance uses cloud disks.
   * 
   * @example
   * 10
   */
  storage?: string;
  /**
   * @remarks
   * The ID of the zone. For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/61933.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readonlyReplicas: 'ReadonlyReplicas',
      regionId: 'RegionId',
      replicationFactor: 'ReplicationFactor',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      shardsInfo: 'ShardsInfo',
      storage: 'Storage',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readonlyReplicas: 'string',
      regionId: 'string',
      replicationFactor: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      shardsInfo: 'string',
      storage: 'string',
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

