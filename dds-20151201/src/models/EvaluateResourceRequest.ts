// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the instance.
   * 
   * > This parameter is required when you check whether resources are sufficient for creating or upgrading a replica set instance. For more information about instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The ID of the instance. This parameter is required when you check whether resources are sufficient for upgrading an instance.
   * 
   * @example
   * dds-bp14bf67a76d****
   */
  DBInstanceId?: string;
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
   * The version of the database engine.
   * 
   * This parameter is required.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in the instance. Valid values: **1** to **5**.
   * 
   * > This parameter is not required for standalone or serverless instances.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
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
   * *   Set the value to **1** for standalone instances.
   * *   Valid values for replica set instances: **3**, **5**, and **7**
   * 
   * > This parameter is not required for serverless instances.
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The node information about the sharded cluster instance. This parameter is required when you check whether resources are sufficient for creating or upgrading a sharded cluster instance.
   * 
   * To check whether resources are sufficient for creating a sharded cluster instance, specify the specifications of each node in the instance. The value must be a JSON string. Example:
   * 
   *     {
   *          "ConfigSvrs":
   *              [{"Storage":20,"DBInstanceClass":"dds.cs.mid"}],
   *          "Mongos":
   *              [{"DBInstanceClass":"dds.mongos.standard"},{"DBInstanceClass":"dds.mongos.standard"}],
   *          "Shards":
   *              [{"Storage":50,"DBInstanceClass":"dds.shard.standard"},{"Storage":50,"DBInstanceClass":"dds.shard.standard"},   {"Storage":50,"DBInstanceClass":"dds.shard.standard"}]
   *      }
   * 
   * Parameters in the example:
   * 
   * *   ConfigSvrs: the Configserver node.
   * *   Mongos: the mongos node.
   * *   Shards: the shard node.
   * *   Storage: the storage space of the node.
   * *   DBInstanceClass: the instance type of the node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * To check whether resources are sufficient for upgrading a single node of a sharded cluster instance, specify only the information about the node to be upgraded. The value must be a JSON string. Example:
   * 
   *     {
   *          "NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"
   *     } 
   * 
   * Parameters in the example:
   * 
   * *   NodeId: the ID of the node.
   * *   NodeClass: the instance type of the node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * @example
   * {"NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"}
   */
  shardsInfo?: string;
  /**
   * @remarks
   * The storage capacity of the replica set instance. Unit: GB.
   * 
   * > This parameter is required for the instances that use cloud disks.
   * 
   * @example
   * 10
   */
  storage?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the zone ID.
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

