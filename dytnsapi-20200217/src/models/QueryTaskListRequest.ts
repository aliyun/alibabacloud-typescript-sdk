// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 80
   */
  currentPage?: number;
  ownerId?: number;
  /**
   * @remarks
   * The page size. Maximum value: 1000.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The task statuses.
   */
  result?: number[];
  /**
   * @remarks
   * The tag ID. You can call the [QueryTagListPage](~~QueryTagListPage~~) operation to query tag IDs.
   * 
   * @example
   * 15
   */
  tagId?: number;
  /**
   * @remarks
   * The task ID. You can call the DescribeTasks operation to query the list of task IDs.
   * 
   * @example
   * 91
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Example
   */
  taskName?: string;
  /**
   * @remarks
   * An array of task types.
   */
  taskType?: number[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      result: 'Result',
      tagId: 'TagId',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ownerId: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      result: { 'type': 'array', 'itemType': 'number' },
      tagId: 'number',
      taskId: 'number',
      taskName: 'string',
      taskType: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    if(Array.isArray(this.taskType)) {
      $dara.Model.validateArray(this.taskType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

