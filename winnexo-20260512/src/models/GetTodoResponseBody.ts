// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoResponseBodyTodosAssignees extends $dara.Model {
  /**
   * @remarks
   * 处理时间（北京时间）；未处理为空
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  actedAt?: string;
  /**
   * @remarks
   * 处理人来源：ORIGINAL/TRANSFERRED
   * 
   * @example
   * ORIGINAL
   */
  assigneeSource?: string;
  /**
   * @remarks
   * 处理人用户ID
   * 
   * @example
   * 42
   */
  assigneeUserId?: string;
  /**
   * @remarks
   * 已读时间（北京时间）；未读为空
   * 
   * @example
   * 2026-10-12 10:01:00
   */
  readAt?: string;
  /**
   * @remarks
   * 处理人行状态
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * 转出人用户ID；仅转办产生
   * 
   * @example
   * 43
   */
  transferredFromUserId?: string;
  static names(): { [key: string]: string } {
    return {
      actedAt: 'actedAt',
      assigneeSource: 'assigneeSource',
      assigneeUserId: 'assigneeUserId',
      readAt: 'readAt',
      status: 'status',
      transferredFromUserId: 'transferredFromUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actedAt: 'string',
      assigneeSource: 'string',
      assigneeUserId: 'string',
      readAt: 'string',
      status: 'string',
      transferredFromUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodoResponseBodyTodos extends $dara.Model {
  /**
   * @remarks
   * 全部处理人
   */
  assignees?: GetTodoResponseBodyTodosAssignees[];
  /**
   * @remarks
   * 完成时间（北京时间）
   * 
   * @example
   * 2026-10-12 10:00:00
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
   * 创建时间（北京时间）
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 最后修改时间（北京时间）
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * assistant 消息ID；无会话来源为空
   * 
   * @example
   * msg-1
   */
  messageId?: string;
  /**
   * @remarks
   * 优先级
   * 
   * @example
   * MEDIUM
   */
  priority?: string;
  /**
   * @remarks
   * 问题清单（JSONB 原样）
   * 
   * @example
   * q1=示例问题
   */
  questions?: { [key: string]: any };
  /**
   * @remarks
   * 作答内容（JSONB 原样）
   * 
   * @example
   * result=同意
   */
  resultPayload?: { [key: string]: any };
  /**
   * @remarks
   * 来源上下文（原样透传）
   * 
   * @example
   * source=openapi
   */
  sourceContext?: { [key: string]: any };
  /**
   * @remarks
   * 待办主状态
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * 待办摘要
   * 
   * @example
   * 待办事项摘要
   */
  summary?: string;
  /**
   * @remarks
   * 待办标题
   * 
   * @example
   * 治理审批
   */
  title?: string;
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
      assignees: 'assignees',
      completedAt: 'completedAt',
      completedByUserId: 'completedByUserId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      messageId: 'messageId',
      priority: 'priority',
      questions: 'questions',
      resultPayload: 'resultPayload',
      sourceContext: 'sourceContext',
      status: 'status',
      summary: 'summary',
      title: 'title',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignees: { 'type': 'array', 'itemType': GetTodoResponseBodyTodosAssignees },
      completedAt: 'string',
      completedByUserId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      messageId: 'string',
      priority: 'string',
      questions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resultPayload: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      summary: 'string',
      title: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assignees)) {
      $dara.Model.validateArray(this.assignees);
    }
    if(this.questions) {
      $dara.Model.validateMap(this.questions);
    }
    if(this.resultPayload) {
      $dara.Model.validateMap(this.resultPayload);
    }
    if(this.sourceContext) {
      $dara.Model.validateMap(this.sourceContext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodoResponseBody extends $dara.Model {
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
   * todoId 查询时的单条结果（其余查询为空）；字段集同 getTodoDetail 平铺结构
   * 
   * @example
   * 示例待办键值对
   */
  todo?: { [key: string]: any };
  /**
   * @remarks
   * workItemId/messageId 查询时的多条结果（todoId 查询为空）
   */
  todos?: GetTodoResponseBodyTodos[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      todo: 'todo',
      todos: 'todos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      todo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      todos: { 'type': 'array', 'itemType': GetTodoResponseBodyTodos },
    };
  }

  validate() {
    if(this.todo) {
      $dara.Model.validateMap(this.todo);
    }
    if(Array.isArray(this.todos)) {
      $dara.Model.validateArray(this.todos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

