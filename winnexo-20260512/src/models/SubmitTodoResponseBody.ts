// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTodoResponseBody extends $dara.Model {
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
   * 完成时间（ISO8601 UTC；与其他北京时间格式化字段格式不同）
   * 
   * @example
   * 2026-10-12T02:00:00+00:00
   */
  completedAt?: string;
  /**
   * @remarks
   * 完成人用户ID
   * 
   * @example
   * 42
   */
  completedByUserId?: string;
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
   * 提交后状态（恒为 COMPLETED）
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * 待办ID
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      completedAt: 'completedAt',
      completedByUserId: 'completedByUserId',
      message: 'message',
      requestId: 'requestId',
      status: 'status',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      completedAt: 'string',
      completedByUserId: 'string',
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

