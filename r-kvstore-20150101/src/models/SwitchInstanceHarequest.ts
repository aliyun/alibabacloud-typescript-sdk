// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchInstanceHARequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard node. You can call [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) to obtain the CustinsId parameter. Separate multiple data shard node IDs with commas (,). To specify all nodes, enter `all`.
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
   * The node ID of the original MASTER node in the shard.
   * 
   * @example
   * 52717408
   */
  sourceNodeId?: string;
  /**
   * @remarks
   * The execution time. Valid values:
   * * **0**: immediately. This is the default value.
   * * **1**: during the maintenance window.
   * 
   * > You can call [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) to modify the maintenance window of the instance.
   * 
   * @example
   * 0
   */
  switchMode?: number;
  /**
   * @remarks
   * The switchover mode. Valid values:
   * * **ReliabilityPriority (default)**: Reliability is prioritized. The primary/secondary switchover is performed only when primary/secondary synchronization has no latency, which prevents data loss. In scenarios with heavy write workloads and persistent synchronization latency, this mode may cause the primary/secondary switchover to fail.
   * * **AvailablePriority**: Availability is prioritized. The primary/secondary switchover is performed immediately regardless of primary/secondary latency, which may cause minor data loss.
   * 
   * > Evaluate your business requirements for data integrity and service availability before selecting a switchover mode.
   * 
   * @example
   * ReliabilityPriority
   */
  switchType?: string;
  /**
   * @remarks
   * The node ID of the target MASTER node after the switchover.
   * 
   * @example
   * 52717403
   */
  targetNodeId?: string;
  /**
   * @remarks
   * The shard name of the instance.
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

