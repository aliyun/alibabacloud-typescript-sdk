// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the O&M tasks. Separate multiple IDs with commas (,).
   * > You can call the [DescribeActiveOperationTask](https://help.aliyun.com/document_detail/473865.html) operation to obtain the O&M task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The scheduled switchover time to set. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC.
   * > The time cannot be later than the deadline. You can call the [DescribeActiveOperationTask](https://help.aliyun.com/document_detail/473865.html) operation and check the value of the **Deadline** response parameter to obtain the deadline.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-10-17T18:50:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      switchTime: 'SwitchTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      switchTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

