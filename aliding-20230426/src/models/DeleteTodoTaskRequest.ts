// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteTodoTaskRequestTenantContext } from "./DeleteTodoTaskRequestTenantContext";


export class DeleteTodoTaskRequest extends $dara.Model {
  tenantContext?: DeleteTodoTaskRequestTenantContext;
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
      tenantContext: 'TenantContext',
      operatorId: 'operatorId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: DeleteTodoTaskRequestTenantContext,
      operatorId: 'string',
      taskId: 'string',
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

