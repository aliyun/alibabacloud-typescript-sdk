// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 80
   */
  currentPage?: number;
  ownerId?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resultShrink?: string;
  /**
   * @example
   * 15
   */
  tagId?: number;
  /**
   * @example
   * 91
   */
  taskId?: number;
  /**
   * @example
   * 示例值示例值
   */
  taskName?: string;
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

