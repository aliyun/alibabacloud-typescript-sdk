// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteShardingNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the proxy deletion takes effect if proxy nodes are deleted when you delete shards from a cluster instance in proxy mode. Valid values:
   * * **0 or Immediately**: Takes effect immediately. This is the default value.
   * * **1 or MaintainTime**: Takes effect during the maintenance window.
   * 
   * > You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) operation to modify the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * Specifies whether to enable forced migration. Valid values:
   * - **false** (default): Before the upgrade/downgrade, the system checks the current minor engine version of the instance. If the kernel version is too low, an error is reported. You must upgrade the minor engine version and retry.
   * - **true**: Skips the checks and directly executes the upgrade/downgrade operation.
   * 
   * @example
   * false
   */
  forceTrans?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard node to be deleted. To specify multiple shard node IDs, separate them with commas (,).
   * > If both the NodeId and ShardCount parameters are specified, the NodeId parameter takes precedence.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0,r-bp1zxszhcgatnx****-db-1
   * 
   * @deprecated
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The number of shards to be deleted. The system deletes the specified number of shard nodes starting from the end.
   * > For example, if an instance has five shard nodes: db-0, db-1, db-2, db-3, and db-4, and you set this parameter to 2, the db-3 and db-4 nodes are deleted.
   * 
   * @example
   * 1
   */
  shardCount?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
      forceTrans: 'ForceTrans',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      shardCount: 'ShardCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: 'string',
      forceTrans: 'boolean',
      instanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      shardCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

