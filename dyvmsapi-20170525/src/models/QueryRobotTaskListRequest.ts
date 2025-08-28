// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRobotTaskListRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **INIT**: The task is not started.
   * *   **READY**: The task is ready to start.
   * *   **DISPATCH**: The task is being parsed.
   * *   **EXCUTING**: The task is being executed.
   * *   **MANUAL_STOP**: The task is manually suspended.
   * *   **SYSTEM_STOP**: The task is suspended by the system.
   * *   **ARREARS_STOP**: The task is suspended due to overdue payments.
   * *   **CANCEL**: The task is manually canceled.
   * *   **SYSTEM_CANCEL**: The task is canceled by the system.
   * *   **FINISH**: The task is complete.
   * 
   * @example
   * EXCUTING
   */
  status?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Test Template
   */
  taskName?: string;
  /**
   * @remarks
   * The date when the task is created, in the yyyy-MM-dd format.
   * 
   * @example
   * 2019-06-14
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskName: 'TaskName',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      taskName: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

