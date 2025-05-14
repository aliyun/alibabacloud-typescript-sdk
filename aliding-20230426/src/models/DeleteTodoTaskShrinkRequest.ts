// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTodoTaskShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @example
   * 12345
   */
  operatorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63edc8da7e917d6ecdaab11b
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      operatorId: 'operatorId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      operatorId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

