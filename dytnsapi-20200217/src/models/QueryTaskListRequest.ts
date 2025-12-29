// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTaskListRequest extends $dara.Model {
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
  result?: number[];
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

