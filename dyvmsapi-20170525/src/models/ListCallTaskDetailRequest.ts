// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The called number.
   * 
   * @example
   * 1300000****
   */
  calledNum?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task state. Valid values:
   * 
   * *   **SUCCESS**: The task is successful.
   * *   **FAIL**: The task fails.
   * *   **INIT**: The task is not started.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 150001****
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      calledNum: 'CalledNum',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNum: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

