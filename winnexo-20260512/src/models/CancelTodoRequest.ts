// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelTodoRequest extends $dara.Model {
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 待办ID（与 workItemId 二选一）
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  /**
   * @remarks
   * 工作项ID（按来源批量作废；与 todoId 二选一）
   * 
   * @example
   * wi_1
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      todoId: 'todoId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      todoId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

