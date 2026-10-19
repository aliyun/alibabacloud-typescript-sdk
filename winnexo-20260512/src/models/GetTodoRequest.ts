// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoRequest extends $dara.Model {
  /**
   * @remarks
   * assistant 消息ID（按消息反查多条）
   * 
   * @example
   * msg-1
   */
  messageId?: string;
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
   * 待办ID（单条查询）
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  /**
   * @remarks
   * 工作项ID（按来源反查多条）
   * 
   * @example
   * wi_1
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'messageId',
      tenantId: 'tenantId',
      todoId: 'todoId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
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

