// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelTodoResponseBody extends $dara.Model {
  /**
   * @remarks
   * 作废条数
   * 
   * @example
   * 1
   */
  cancelledCount?: number;
  /**
   * @remarks
   * 业务状态码；成功为200
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 作废后状态
   * 
   * @example
   * CANCELLED
   */
  status?: string;
  /**
   * @remarks
   * 作废的待办ID（按 workItemId 定位时为空）
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelledCount: 'cancelledCount',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      status: 'status',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledCount: 'number',
      code: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
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

