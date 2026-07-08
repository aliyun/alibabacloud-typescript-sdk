// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskListShrinkRequest extends $dara.Model {
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
  resultShrink?: string;
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
  taskTypeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      ownerId: 'OwnerId',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resultShrink: 'Result',
      tagId: 'TagId',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskTypeShrink: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      ownerId: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resultShrink: 'string',
      tagId: 'number',
      taskId: 'number',
      taskName: 'string',
      taskTypeShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

