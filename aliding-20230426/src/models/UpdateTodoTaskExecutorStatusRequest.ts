// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTodoTaskExecutorStatusRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTodoTaskExecutorStatusRequestExecutorStatusList extends $dara.Model {
  /**
   * @example
   * userId
   */
  id?: string;
  /**
   * @example
   * true
   */
  isDone?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      isDone: 'isDone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      isDone: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

