// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTodoTaskRequestTenantContext } from "./GetTodoTaskRequestTenantContext";


export class GetTodoTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPJpwtxxxx
   */
  taskId?: string;
  tenantContext?: GetTodoTaskRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      tenantContext: GetTodoTaskRequestTenantContext,
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

