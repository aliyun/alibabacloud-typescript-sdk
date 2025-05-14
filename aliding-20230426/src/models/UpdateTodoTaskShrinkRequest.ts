// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTodoTaskShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
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
  executorIdsShrink?: string;
  /**
   * @example
   * []
   */
  participantIdsShrink?: string;
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
      tenantContextShrink: 'TenantContext',
      description: 'description',
      done: 'done',
      dueTime: 'dueTime',
      executorIdsShrink: 'executorIds',
      participantIdsShrink: 'participantIds',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      description: 'string',
      done: 'boolean',
      dueTime: 'number',
      executorIdsShrink: 'string',
      participantIdsShrink: 'string',
      subject: 'string',
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

