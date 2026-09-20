// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The O&M task IDs. Separate multiple IDs with commas (,).
   * 
   * > You can call [DescribeActiveOperationTasks](https://help.aliyun.com/document_detail/414458.html) to obtain O&M task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1111,2222
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to immediately execute the O&M task. Valid values:
   * 
   * - **1**: immediately executes the task.
   * - **0**: executes the task at the specified time.
   * 
   * @example
   * 1
   */
  immediateStart?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The scheduled switchover time to set. Specify the time in the _yyyy-MM-ddTHH:mm:ssZ_ format (UTC).
   * 
   * > The time cannot be later than the deadline. You can call [DescribeActiveOperationTasks](https://help.aliyun.com/document_detail/414458.html) and check the value of the **Deadline** response parameter to obtain the deadline.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-02-17T18:50:00Z
   */
  switchTime?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      immediateStart: 'ImmediateStart',
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
      immediateStart: 'number',
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

