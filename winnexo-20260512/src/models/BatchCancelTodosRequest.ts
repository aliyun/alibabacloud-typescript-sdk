// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCancelTodosRequest extends $dara.Model {
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
   * The list of to-do IDs. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * todo_abc123
   */
  todoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      todoIds: 'todoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      todoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.todoIds)) {
      $dara.Model.validateArray(this.todoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

