// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkTodosReadRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to mark all to-do items as read. This parameter takes precedence over todoIds.
   * 
   * @example
   * false
   */
  markAllRead?: boolean;
  /**
   * @remarks
   * The list of to-do item IDs. A maximum of 100 IDs can be specified. This parameter is ignored when markAllRead is set to true.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of to-do item IDs. A maximum of 100 IDs can be specified. This parameter is ignored when markAllRead is set to true.
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

