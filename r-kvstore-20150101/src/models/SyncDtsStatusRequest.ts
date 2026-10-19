// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncDtsStatusRequest extends $dara.Model {
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
   * Specifies whether to restrict specification changes on the instance. Valid values:
   * * **0**: Unrestricted.
   * * **1**: Restricted. Users are prompted when they perform a specification change.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * Instance ID of the DTS instance. You can log on to the [DTS console](https://dts.console.aliyun.com/) to view instance ID.
   * > An instance may be involved in multiple DTS migration or synchronization tasks simultaneously. To remove the specification change restrictions on the instance, pass this parameter to avoid calling this operation multiple times.
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

