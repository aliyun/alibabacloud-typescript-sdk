// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteCallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the call task is executed, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * > You can leave this parameter empty.
   * 
   * @example
   * 2021-03-09 00:00:00
   */
  fireTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **RUNNING**
   * *   **STOP**
   * *   **CANCEL**
   * 
   * This parameter is required.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The task ID. You can call the [CreateCallTask](~~CreateCallTask~~) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2256****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      fireTime: 'FireTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fireTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

