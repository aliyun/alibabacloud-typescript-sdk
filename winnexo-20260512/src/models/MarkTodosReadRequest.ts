// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkTodosReadRequest extends $dara.Model {
  /**
   * @remarks
   * 全部标记已读（优先于 todoIds）
   * 
   * @example
   * false
   */
  markAllRead?: boolean;
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
   * 待办ID列表（≤100；markAllRead=true 时忽略）
   * 
   * @example
   * todo_abc123
   */
  todoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      markAllRead: 'markAllRead',
      tenantId: 'tenantId',
      todoIds: 'todoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markAllRead: 'boolean',
      tenantId: 'string',
      todoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.todoIds)) {
      $dara.Model.validateArray(this.todoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

