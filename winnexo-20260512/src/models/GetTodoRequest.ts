// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the assistant message. This parameter is used to query multiple to-do items by message.
   * 
   * @example
   * msg-1
   */
  messageId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the to-do item (get).
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  /**
   * @remarks
   * The ID of the work item. This parameter is used to query multiple to-do items by source.
   * 
   * @example
   * wi_1
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'messageId',
      tenantId: 'tenantId',
      todoId: 'todoId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      tenantId: 'string',
      todoId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

