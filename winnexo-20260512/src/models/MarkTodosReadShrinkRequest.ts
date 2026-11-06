// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkTodosReadShrinkRequest extends $dara.Model {
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
  todoIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      markAllRead: 'markAllRead',
      tenantId: 'tenantId',
      todoIdsShrink: 'todoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markAllRead: 'boolean',
      tenantId: 'string',
      todoIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

