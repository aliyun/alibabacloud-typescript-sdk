// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCancelTodosShrinkRequest extends $dara.Model {
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
   * 待办ID列表（1~100）
   * 
   * This parameter is required.
   * 
   * @example
   * todo_abc123
   */
  todoIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      todoIdsShrink: 'todoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      todoIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

