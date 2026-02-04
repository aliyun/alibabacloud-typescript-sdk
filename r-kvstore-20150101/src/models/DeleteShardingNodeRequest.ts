// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteShardingNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The time when you want to delete the proxy nodes for instance in the proxy mode. Valid values:
   * 
   * *   **0 or Immediately** (default): immediately delete the proxy nodes.
   * *   **1 or MaintainTime**: delete the proxy nodes during the maintenance window.
   * 
   * >  You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) operation to modify the maintenance window of an instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * Specifies whether to enable forced transmission during a configuration change. Valid values:
   * 
   * *   **false** (default): Before the configuration change, the system checks the minor version of the instance. If the minor version of the instance is outdated, an error is reported. You must update the minor version of the instance and try again.
   * *   **true**: The system skips the version check and directly performs the configuration change.
   * 
   * @example
   * false
   */
  forceTrans?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard that you want to remove. You can specify multiple IDs at a time. Separate multiple IDs with commas (,).
   * 
   * > If you specify both the NodeId and ShardCount parameters, the system prioritizes the NodeId parameter.
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
   * The number of data shards that you want to remove. Shard removal starts from the end of the shard list.
   * 
   * > For example, the instance has the following data shards: db-0, db-1, db-2, db-3, and db-4. In this case, if you set this parameter to 2, db-3 and db-4 are removed.
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

