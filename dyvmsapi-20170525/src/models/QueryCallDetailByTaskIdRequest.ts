// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCallDetailByTaskIdRequest extends $dara.Model {
  /**
   * @remarks
   * The called number. You can view the outbound call records of only one called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  callee?: string;
  ownerId?: number;
  /**
   * @remarks
   * The start time of the outbound robocall task. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-10-09 09:02:03
   */
  queryDate?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unique ID of the outbound robocall task. The task ID is returned after the outbound robocall task is successfully delivered. You can view the task ID on the [Task Management](https://dyvms.console.aliyun.com/job/list) page of the Voice Messaging Service console, or call the **BatchRobotSmartCall** operation to obtain the **task ID**.
   * 
   * This parameter is required.
   * 
   * @example
   * 4001112222
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      callee: 'Callee',
      ownerId: 'OwnerId',
      queryDate: 'QueryDate',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callee: 'string',
      ownerId: 'number',
      queryDate: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

