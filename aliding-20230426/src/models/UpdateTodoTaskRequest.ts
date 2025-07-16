// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTodoTaskRequestTenantContext extends $dara.Model {
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

export class UpdateTodoTaskRequest extends $dara.Model {
  tenantContext?: UpdateTodoTaskRequestTenantContext;
  /**
   * @example
   * 应用可以调用该接口发起一个钉钉待办任务，该待办事项会出现在钉钉客户端“待办”页面，需要注意的是，通过开放接口发起的待办，目前仅支持直接跳转ISV应用详情页（ISV在调该接口时需传入自身应用详情页链接）。
   */
  description?: string;
  /**
   * @example
   * true
   */
  done?: boolean;
  /**
   * @example
   * 1617675000000
   */
  dueTime?: number;
  /**
   * @example
   * []
   */
  executorIds?: string[];
  /**
   * @example
   * []
   */
  participantIds?: string[];
  /**
   * @example
   * 更新钉钉待办
   */
  subject?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * taskId
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      description: 'description',
      done: 'done',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      participantIds: 'participantIds',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: UpdateTodoTaskRequestTenantContext,
      description: 'string',
      done: 'boolean',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      participantIds: { 'type': 'array', 'itemType': 'string' },
      subject: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    if(Array.isArray(this.participantIds)) {
      $dara.Model.validateArray(this.participantIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

