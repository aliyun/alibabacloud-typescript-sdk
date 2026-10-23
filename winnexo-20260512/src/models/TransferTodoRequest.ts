// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTodoRequest extends $dara.Model {
  /**
   * @remarks
   * The handover description.
   * 
   * @example
   * Please continue processing
   */
  comment?: string;
  /**
   * @remarks
   * The list of target user IDs to whom the task is reassigned. You can specify 1 to 100 user IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 43
   */
  targetUserIds?: string[];
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the to-do task.
   * 
   * This parameter is required.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      targetUserIds: 'targetUserIds',
      tenantId: 'tenantId',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      targetUserIds: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetUserIds)) {
      $dara.Model.validateArray(this.targetUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

