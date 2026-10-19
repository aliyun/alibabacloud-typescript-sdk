// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferTodoShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 交接说明
   * 
   * @example
   * 请继续处理
   */
  comment?: string;
  /**
   * @remarks
   * 转办目标用户ID列表（1~100）
   * 
   * This parameter is required.
   * 
   * @example
   * 43
   */
  targetUserIdsShrink?: string;
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
   * 待办ID
   * 
   * This parameter is required.
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      targetUserIdsShrink: 'targetUserIds',
      tenantId: 'tenantId',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      targetUserIdsShrink: 'string',
      tenantId: 'string',
      todoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

