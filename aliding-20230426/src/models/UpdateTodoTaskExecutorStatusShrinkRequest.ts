// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTodoTaskExecutorStatusShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  executorStatusListShrink?: string;
  /**
   * @example
   * xxxx
   */
  operatorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 15002141
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      executorStatusListShrink: 'executorStatusList',
      operatorId: 'operatorId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      executorStatusListShrink: 'string',
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

