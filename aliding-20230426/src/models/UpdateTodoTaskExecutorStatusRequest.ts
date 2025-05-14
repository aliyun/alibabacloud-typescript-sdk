// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTodoTaskExecutorStatusRequestTenantContext } from "./UpdateTodoTaskExecutorStatusRequestTenantContext";
import { UpdateTodoTaskExecutorStatusRequestExecutorStatusList } from "./UpdateTodoTaskExecutorStatusRequestExecutorStatusList";


export class UpdateTodoTaskExecutorStatusRequest extends $dara.Model {
  tenantContext?: UpdateTodoTaskExecutorStatusRequestTenantContext;
  executorStatusList?: UpdateTodoTaskExecutorStatusRequestExecutorStatusList[];
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
      tenantContext: 'TenantContext',
      executorStatusList: 'executorStatusList',
      operatorId: 'operatorId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: UpdateTodoTaskExecutorStatusRequestTenantContext,
      executorStatusList: { 'type': 'array', 'itemType': UpdateTodoTaskExecutorStatusRequestExecutorStatusList },
      operatorId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.executorStatusList)) {
      $dara.Model.validateArray(this.executorStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

