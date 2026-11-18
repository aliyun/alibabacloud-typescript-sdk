// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceMaintainTimeRequest extends $dara.Model {
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
   * The end time of the maintenance window. The time must be in the <i>HH:mm</i>Z format (UTC). For example, if you want the maintenance window to end at 02:00 (UTC+8), set this parameter to `18:00Z`.
   * 
   * > The interval between the start time and the end time must be at least 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 04:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window. The time must be in the <i>HH:mm</i>Z format (UTC). For example, if you want the maintenance window to start at 01:00 (UTC+8), set this parameter to `17:00Z`. After you call this API operation, you can view the actual time in the console. For more information, see [Set the maintenance window](https://help.aliyun.com/document_detail/55252.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 03:00Z
   */
  maintainStartTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

