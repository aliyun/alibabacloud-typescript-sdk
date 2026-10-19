// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance type.
   * 
   * > This parameter is required when you evaluate resources for a replica set instance. For more information about instance types, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * @example
   * dds.mongo.mid
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID. This parameter is required when you evaluate resources for changing instance specifications.
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
   * > This parameter is not required for standalone instances<ph props ="china"> or serverless instances</ph>.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) to query available regions.
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
   * - For a standalone instance, set the value to **1**.
   * 
   * - For an instance with shared storage, set the value to **2**.
   * 
   * - For a replica set instance, valid values are **3**, **5**, and **7**.
   * 
   * <props="china">
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
   * The shard information of the sharded cluster instance. This parameter is required when you evaluate resources for a sharded cluster instance.
   * 
   * When you evaluate resources for a new sharded cluster instance, you must specify the specifications of each shard in a JSON-formatted character string. Example:
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
   * The parameter descriptions in the example are as follows:
   * 
   *  - ConfigSvrs: the Configserver nodes.
   *  - Mongos: the mongos nodes.
   *  - Shards: the shard nodes.
   *  - Storage: the storage capacity of the target shard.
   *  - DBInstanceClass: the instance type of the target shard. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * When you evaluate resources for upgrading or downgrading a sharded cluster instance, you only need to specify the node information in a JSON-formatted character string. Example:
   * 
   * ```
   * {
   *      "NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"
   * } 
   * ```
   * The parameter descriptions in the example are as follows:
   * 
   * - NodeId: the ID of the target node.
   * - NodeClass: the instance type of the target node. For more information, see [Sharded cluster instance types](https://help.aliyun.com/document_detail/311414.html).
   * 
   * @example
   * {"NodeId": "d-bp147c4d9ca7****", "NodeClass": "dds.shard.standard"}
   */
  shardsInfo?: string;
  /**
   * @remarks
   * The storage capacity of the replica set instance. Unit: GB.
   * > This parameter is required when the instance uses cloud disks.
   * 
   * @example
   * 10
   */
  storage?: string;
  /**
   * @remarks
   * The zone ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) to query available zones.
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

