// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTodoShrinkRequest extends $dara.Model {
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
  targetUserIdsShrink?: string;
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
      targetUserIdsShrink: 'targetUserIds',
      tenantId: 'tenantId',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      targetUserIdsShrink: 'string',
      tenantId: 'string',
      todoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

