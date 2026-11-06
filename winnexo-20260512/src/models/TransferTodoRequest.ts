// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTodoRequest extends $dara.Model {
  /**
   * @remarks
   * The handover note.
   * 
   * @example
   * Please continue processing
   */
  comment?: string;
  /**
   * @remarks
   * The list of target user IDs for the transfer (1 to 100).
   * 
   * This parameter is required.
   * 
   * @example
   * 43
   */
  targetUserIds?: string[];
  /**
   * @remarks
   * The to-do item ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of target user IDs for the transfer (1 to 100).
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

