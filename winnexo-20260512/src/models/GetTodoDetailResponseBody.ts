// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoDetailResponseBodyAssignees extends $dara.Model {
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

export class GetTodoDetailResponseBodyQuestionsOptions extends $dara.Model {
  /**
   * @remarks
   * 选项补充说明
   * 
   * @example
   * 选项补充说明
   */
  description?: string;
  /**
   * @remarks
   * 选项文案（引用键）
   * 
   * @example
   * 通过
   */
  label?: string;
  /**
   * @remarks
   * 是否推荐
   * 
   * @example
   * false
   */
  recommended?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      label: 'label',
      recommended: 'recommended',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      recommended: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodoDetailResponseBodyQuestions extends $dara.Model {
  /**
   * @remarks
   * 是否允许自定义输入
   * 
   * @example
   * false
   */
  allowCustom?: boolean;
  /**
   * @remarks
   * 自定义输入项文案
   * 
   * @example
   * 其他
   */
  customLabel?: string;
  /**
   * @remarks
   * 自定义输入长度上限
   * 
   * @example
   * 200
   */
  customMaxLength?: number;
  /**
   * @remarks
   * 自定义输入占位符
   * 
   * @example
   * 请说明
   */
  customPlaceholder?: string;
  /**
   * @remarks
   * TEXT 题长度上限
   * 
   * @example
   * 500
   */
  maxLength?: number;
  /**
   * @remarks
   * 作答形态：SINGLE_CHOICE/MULTI_CHOICE/TEXT
   * 
   * @example
   * SINGLE_CHOICE
   */
  mode?: string;
  /**
   * @remarks
   * 选项（选择类必有）
   */
  options?: GetTodoDetailResponseBodyQuestionsOptions[];
  /**
   * @remarks
   * TEXT 题占位符
   * 
   * @example
   * 请输入
   */
  placeholder?: string;
  /**
   * @remarks
   * 问题正文（引用键）
   * 
   * @example
   * 是否通过审批
   */
  question?: string;
  /**
   * @remarks
   * 是否必答
   * 
   * @example
   * true
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowCustom: 'allowCustom',
      customLabel: 'customLabel',
      customMaxLength: 'customMaxLength',
      customPlaceholder: 'customPlaceholder',
      maxLength: 'maxLength',
      mode: 'mode',
      options: 'options',
      placeholder: 'placeholder',
      question: 'question',
      required: 'required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCustom: 'boolean',
      customLabel: 'string',
      customMaxLength: 'number',
      customPlaceholder: 'string',
      maxLength: 'number',
      mode: 'string',
      options: { 'type': 'array', 'itemType': GetTodoDetailResponseBodyQuestionsOptions },
      placeholder: 'string',
      question: 'string',
      required: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodoDetailResponseBody extends $dara.Model {
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
   * 全部处理人
   */
  assignees?: GetTodoDetailResponseBodyAssignees[];
  /**
   * @remarks
   * 附件策略（当前版本附件不落库）
   * 
   * @example
   * allowUpload=true
   */
  attachmentPolicy?: { [key: string]: any };
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
   * 错误描述
   * 
   * @example
   * 请求的资源不存在
   */
  message?: string;
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
   * 调用者权限（canSubmit/canTransfer）
   * 
   * @example
   * APP/VIEW=true
   */
  myPermissions?: { [key: string]: any };
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
   * 问题清单（结构化投影）
   */
  questions?: GetTodoDetailResponseBodyQuestions[];
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
   * 作答内容（JSONB 原样；未提交为空对象缺省）
   * 
   * @example
   * result=同意
   */
  resultPayload?: { [key: string]: any };
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
   * 工作流ID（sourceType=WORKFLOW 时必有）
   * 
   * @example
   * wf-1
   */
  sourceWorkflowId?: string;
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
   * 请审批以下事项
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
      assigneeCount: 'assigneeCount',
      assignees: 'assignees',
      attachmentPolicy: 'attachmentPolicy',
      code: 'code',
      completedAt: 'completedAt',
      completedByUserId: 'completedByUserId',
      completedByUserName: 'completedByUserName',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      isRead: 'isRead',
      message: 'message',
      messageId: 'messageId',
      myAssigneeStatus: 'myAssigneeStatus',
      myDisplayState: 'myDisplayState',
      myPermissions: 'myPermissions',
      priority: 'priority',
      questions: 'questions',
      requestId: 'requestId',
      resultPayload: 'resultPayload',
      sourceContext: 'sourceContext',
      sourceType: 'sourceType',
      sourceWorkflowId: 'sourceWorkflowId',
      status: 'status',
      summary: 'summary',
      title: 'title',
      todoId: 'todoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assigneeCount: 'number',
      assignees: { 'type': 'array', 'itemType': GetTodoDetailResponseBodyAssignees },
      attachmentPolicy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
      completedAt: 'string',
      completedByUserId: 'string',
      completedByUserName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isRead: 'boolean',
      message: 'string',
      messageId: 'string',
      myAssigneeStatus: 'string',
      myDisplayState: 'string',
      myPermissions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      priority: 'string',
      questions: { 'type': 'array', 'itemType': GetTodoDetailResponseBodyQuestions },
      requestId: 'string',
      resultPayload: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceType: 'string',
      sourceWorkflowId: 'string',
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
    if(this.attachmentPolicy) {
      $dara.Model.validateMap(this.attachmentPolicy);
    }
    if(this.myPermissions) {
      $dara.Model.validateMap(this.myPermissions);
    }
    if(Array.isArray(this.questions)) {
      $dara.Model.validateArray(this.questions);
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

