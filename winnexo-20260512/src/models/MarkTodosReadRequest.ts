// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkTodosReadRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to mark all to-do items as read. This parameter takes precedence over the todoIds parameter.
   * 
   * @example
   * false
   */
  markAllRead?: boolean;
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
   * The list of to-do item IDs. You can specify up to 100 IDs. This parameter is ignored if markAllRead is set to true.
   * 
   * @example
   * todo_abc123
   */
  todoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      markAllRead: 'markAllRead',
      tenantId: 'tenantId',
      todoIds: 'todoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markAllRead: 'boolean',
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

