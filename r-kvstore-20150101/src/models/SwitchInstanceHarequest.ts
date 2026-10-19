// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchInstanceHARequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard node. You can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) operation to obtain the CustinsId parameter. Separate multiple data shard node IDs with commas (,). To specify all nodes, enter `all`.
   * > This parameter is available and required only when the instance uses the cluster or read/write splitting architecture.
   * 
   * @example
   * 56****19,56****20
   */
  nodeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the original primary node of the shard.
   * 
   * @example
   * 52717408
   */
  sourceNodeId?: string;
  /**
   * @remarks
   * The execution time. Valid values:
   * * **0**: executes the operation immediately. This is the default value.
   * * **1**: executes the operation within the maintenance window.
   * 
   * > You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) operation to modify the maintenance window of the instance.
   * 
   * @example
   * 0
   */
  switchMode?: number;
  /**
   * @remarks
   * The switchover mode. Valid values:
   * * **ReliabilityPriority** (default): prioritizes reliability. The primary/secondary switchover is performed only when there is no synchronization latency between the primary and secondary nodes, ensuring no data loss. In scenarios with a large write volume and continuous synchronization latency, this mode may cause the switchover to fail.
   * * **AvailablePriority**: prioritizes availability. The primary/secondary switchover is performed immediately regardless of the synchronization latency between the primary and secondary nodes, which may result in a small amount of data loss.
   * 
   * > Select a switchover mode based on your business requirements for data and services.
   * 
   * @example
   * ReliabilityPriority
   */
  switchType?: string;
  /**
   * @remarks
   * The ID of the target primary node after the switchover.
   * 
   * @example
   * 52717403
   */
  targetNodeId?: string;
  /**
   * @remarks
   * The name of the instance shard.
   * 
   * @example
   * r-2zegk3jyxxxwixfo6c-db-1
   */
  targetShardName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      sourceNodeId: 'SourceNodeId',
      switchMode: 'SwitchMode',
      switchType: 'SwitchType',
      targetNodeId: 'TargetNodeId',
      targetShardName: 'TargetShardName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      sourceNodeId: 'string',
      switchMode: 'number',
      switchType: 'string',
      targetNodeId: 'string',
      targetShardName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

