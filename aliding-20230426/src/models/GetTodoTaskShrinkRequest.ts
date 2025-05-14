// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPJpwtxxxx
   */
  taskId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

