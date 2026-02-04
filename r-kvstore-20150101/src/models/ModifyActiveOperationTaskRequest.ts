// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the O\\&M task. Separate multiple IDs with commas (,).
   * 
   * > You can call the [DescribeActiveOperationTask](https://help.aliyun.com/document_detail/473865.html) operation to query the ID of an O\\&M task.
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
   * The scheduled switchover time to be specified. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time must be in UTC.
   * 
   * > The time cannot be later than the latest operation time. You can call the [DescribeActiveOperationTask](https://help.aliyun.com/document_detail/473865.html) operation to obtain the latest operation time, which is the value of the **Deadline** parameter in the response.
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

