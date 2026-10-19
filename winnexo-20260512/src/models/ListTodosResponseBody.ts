// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTodosResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 处理人数量
   * 
   * @example
   * 2
   */
  assigneeCount?: number;
  /**
   * @remarks
   * 完成时间（北京时间 YYYY-MM-DD HH:mm:ss）
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  completedAt?: string;
  /**
   * @remarks
   * 完成人用户ID；未完成为空
   * 
   * @example
   * 42
   */
  completedByUserId?: string;
  /**
   * @remarks
   * 完成人姓名；未完成为空
   * 
   * @example
   * 张三
   */
  completedByUserName?: string;
  /**
   * @remarks
   * 创建时间（北京时间 YYYY-MM-DD HH:mm:ss）
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 最后修改时间（北京时间 YYYY-MM-DD HH:mm:ss）
   * 
   * @example
   * 2026-10-12 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * 调用者是否已读
   * 
   * @example
   * false
   */
  isRead?: boolean;
  /**
   * @remarks
   * 发出该待办的 assistant 消息ID；无会话来源为空
   * 
   * @example
   * msg-1
   */
  messageId?: string;
  /**
   * @remarks
   * 调用者的处理人行状态
   * 
   * @example
   * PENDING
   */
  myAssigneeStatus?: string;
  /**
   * @remarks
   * 调用者的列表展示状态
   * 
   * @example
   * TODO
   */
  myDisplayState?: string;
  /**
   * @remarks
   * 优先级
   * 
   * @example
   * HIGH
   */
  priority?: string;
  /**
   * @remarks
   * 问题数量
   * 
   * @example
   * 1
   */
  questionCount?: number;
  /**
   * @remarks
   * 问题摘要列表
   */
  questionSummaries?: string[];
  /**
   * @remarks
   * 来源上下文（创建时原样透传）
   * 
   * @example
   * source=openapi
   */
  sourceContext?: { [key: string]: any };
  /**
   * @remarks
   * 待办来源类型
   * 
   * @example
   * WORKFLOW
   */
  sourceType?: string;
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
      assigneeCount: 'assigneeCount',
      completedAt: 'completedAt',
      completedByUserId: 'completedByUserId',
      completedByUserName: 'completedByUserName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      isRead: 'isRead',
      messageId: 'messageId',
      myAssigneeStatus: 'myAssigneeStatus',
      myDisplayState: 'myDisplayState',
      priority: 'priority',
      questionCount: 'questionCount',
      questionSummaries: 'questionSummaries',
      sourceContext: 'sourceContext',
      sourceType: 'sourceType',
      status: 'status',
      title: 'title',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigneeCount: 'number',
      completedAt: 'string',
      completedByUserId: 'string',
      completedByUserName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isRead: 'boolean',
      messageId: 'string',
      myAssigneeStatus: 'string',
      myDisplayState: 'string',
      priority: 'string',
      questionCount: 'number',
      questionSummaries: { 'type': 'array', 'itemType': 'string' },
      sourceContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceType: 'string',
      status: 'string',
      title: 'string',
      todoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.questionSummaries)) {
      $dara.Model.validateArray(this.questionSummaries);
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

export class ListTodosResponseBody extends $dara.Model {
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
   * 是否还有更多数据
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * 当前页待办列表
   */
  items?: ListTodosResponseBodyItems[];
  /**
   * @remarks
   * 本次生效的单页最大返回数量
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
   * 下一页翻页令牌；无更多数据时为空字符串
   * 
   * @example
   * example
   */
  nextToken?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 生效单页条数
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * 筛选条件下可见总数
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      hasMore: 'hasMore',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': ListTodosResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

