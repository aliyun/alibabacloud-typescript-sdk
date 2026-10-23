// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelTodoRequest extends $dara.Model {
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
   * The ID of the to-do item. You must specify either this parameter or workItemId.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  /**
   * @remarks
   * The ID of the work item. You can use this parameter to cancel to-do items in batches by source. You must specify either this parameter or todoId.
   * 
   * @example
   * wi_1
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      todoId: 'todoId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

