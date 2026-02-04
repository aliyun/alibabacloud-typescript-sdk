// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchInstanceHARequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data shard. You can call the [DescribeRoleZoneInfo](https://help.aliyun.com/document_detail/473782.html) operation to obtain the value of the CustinsId parameter. Separate multiple data shard IDs with commas (,). `all` indicates that all data shards are specified.
   * 
   * > This parameter is available and required only for read/write splitting and cluster instances.
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
   * The time when to perform the switchover. Default value: 0. Valid values:
   * 
   * *   **0**: immediately performs the switchover.
   * *   **1**: performs the switchover during the maintenance window.
   * 
   * > You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) operation to modify the maintenance window of a Tair (Redis OSS-compatible) instance.
   * 
   * @example
   * 0
   */
  switchMode?: number;
  /**
   * @remarks
   * The switching mode. Valid values:
   * 
   * *   **AvailablePriority**: immediately performs a switchover by prioritizing availability. No latency of data synchronization between the master and replica nodes is considered. This may cause data loss.
   * *   **ReliabilityPriority**: performs a switchover by prioritizing reliability. Make sure that no latency of data synchronization between the master and replica nodes exists. This ensures data integrity. This mode may cause switchover failures in scenarios where a large volume of data is written and data synchronization latency consistently exists.
   * 
   * >  You must evaluate the requirements for data and services based on your business scenarios and then select a switching mode.
   * 
   * @example
   * AvailablePriority
   */
  switchType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchMode: 'SwitchMode',
      switchType: 'SwitchType',
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
      switchMode: 'number',
      switchType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

