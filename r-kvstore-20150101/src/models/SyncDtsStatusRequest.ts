// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDtsStatusRequest extends $dara.Model {
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
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * Disables configuration changes for the instance. Valid values:
   * 
   * *   **0**: does not disable configuration changes.
   * *   **1**: disables configuration changes. In this case, if you attempt to modify the configurations of the instance, the system informs you that the operation cannot be performed.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The ID of the DTS instance. You can view the ID in the [DTS console](https://dts.console.aliyun.com/).
   * 
   * >  A Tair (Redis OSS-compatible) instance may be involved in multiple data migration or synchronization tasks. If you want to cancel the restriction on the instance, you can specify this parameter to prevent repeated operation calls.
   * 
   * @example
   * dtss0611o8vv90****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

