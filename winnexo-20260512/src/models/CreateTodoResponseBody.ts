// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoResponseBodyAssignees extends $dara.Model {
  /**
   * @remarks
   * 处理人用户ID
   * 
   * @example
   * 43
   */
  assigneeUserId?: string;
  /**
   * @remarks
   * 处理人行状态
   * 
   * @example
   * PENDING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      assigneeUserId: 'assigneeUserId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigneeUserId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTodoResponseBody extends $dara.Model {
  /**
   * @remarks
   * 处理人列表
   */
  assignees?: CreateTodoResponseBodyAssignees[];
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
   * 创建时间（ISO8601 带时区；与列表/详情的北京时间格式串不同）
   * 
   * @example
   * 2026-10-12T15:00:00+08:00
   */
  gmtCreate?: string;
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
   * 待办状态
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * 新建待办ID
   * 
   * @example
   * todo_abc123
   */
  todoId?: string;
  static names(): { [key: string]: string } {
    return {
      assignees: 'assignees',
      code: 'code',
      gmtCreate: 'gmtCreate',
      message: 'message',
      requestId: 'requestId',
      status: 'status',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignees: { 'type': 'array', 'itemType': CreateTodoResponseBodyAssignees },
      code: 'string',
      gmtCreate: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignees)) {
      $dara.Model.validateArray(this.assignees);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

