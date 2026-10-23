// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCancelTodosShrinkRequest extends $dara.Model {
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
  todoIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      todoIdsShrink: 'todoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

