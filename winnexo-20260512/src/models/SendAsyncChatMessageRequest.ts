// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageRequestFiles extends $dara.Model {
  /**
   * @remarks
   * 文件 ID，由 uploadChatFile 返回
   * 
   * This parameter is required.
   * 
   * @example
   * exampleFileId
   */
  fileId?: string;
  /**
   * @remarks
   * 文件类型
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'fileId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendAsyncChatMessageRequestTaskExecution extends $dara.Model {
  /**
   * @remarks
   * 计费 ID
   * 
   * @example
   * exampleBillingId
   */
  billingId?: string;
  /**
   * @remarks
   * 是否启用联网搜索
   * 
   * @example
   * true
   */
  enableWebSearch?: boolean;
  /**
   * @remarks
   * 执行记录 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleExecutionId
   */
  executionId?: string;
  /**
   * @remarks
   * 数字员工名称
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * 关联技能编码列表
   * 
   * @example
   * string_value
   */
  skillCodes?: string[];
  /**
   * @remarks
   * 任务 ID
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * 任务名称
   * 
   * @example
   * string_value
   */
  taskName?: string;
  /**
   * @remarks
   * 任务理解内容
   * 
   * @example
   * string_value
   */
  taskUnderstand?: string;
  /**
   * @remarks
   * 任务所属租户 ID
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 任务所属用户 ID
   * 
   * @example
   * exampleUserId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      billingId: 'billingId',
      enableWebSearch: 'enableWebSearch',
      executionId: 'executionId',
      operatingObjectName: 'operatingObjectName',
      skillCodes: 'skillCodes',
      taskId: 'taskId',
      taskName: 'taskName',
      taskUnderstand: 'taskUnderstand',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingId: 'string',
      enableWebSearch: 'boolean',
      executionId: 'string',
      operatingObjectName: 'string',
      skillCodes: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
      taskName: 'string',
      taskUnderstand: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skillCodes)) {
      $dara.Model.validateArray(this.skillCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendAsyncChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * 用户消息正文
   * 
   * This parameter is required.
   * 
   * @example
   * 示例内容
   */
  content?: string;
  /**
   * @remarks
   * 消息类型：Text / Markdown
   * 
   * @example
   * Text
   */
  contentType?: string;
  /**
   * @remarks
   * 数字员工名称列表（兼容旧格式可传单个字符串）
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * 是否启用直连模式；true 时跳过常规场景路由，直接进入直连对话场景
   * 
   * @example
   * false
   */
  directChat?: boolean;
  /**
   * @remarks
   * 文件引用列表；每项为对象，fileId 必传（由 uploadChatFile 返回）
   */
  files?: SendAsyncChatMessageRequestFiles[];
  /**
   * @remarks
   * 抽象模型档位（quick / standard / flagship）；缺省时新会话用 standard，已有会话沿用会话当前档位
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * 不传 sessionId 时是否复用该数字员工下最近一个会话（CLI 场景），缺省 false 即新建会话
   * 
   * @example
   * false
   */
  reuseLastSession?: boolean;
  /**
   * @remarks
   * 会话ID，不传则新建会话
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * 是否流式生成；本接口固定按流式生成后台内容并写入消息流，取值不改变返回结构
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * executeScheduledTask 返回的任务执行元数据；传入后按任务执行链路处理
   */
  taskExecution?: SendAsyncChatMessageRequestTaskExecution;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      digitalEmployeeName: 'digitalEmployeeName',
      directChat: 'directChat',
      files: 'files',
      model: 'model',
      reuseLastSession: 'reuseLastSession',
      sessionId: 'sessionId',
      stream: 'stream',
      taskExecution: 'taskExecution',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      directChat: 'boolean',
      files: { 'type': 'array', 'itemType': SendAsyncChatMessageRequestFiles },
      model: 'string',
      reuseLastSession: 'boolean',
      sessionId: 'string',
      stream: 'boolean',
      taskExecution: SendAsyncChatMessageRequestTaskExecution,
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.digitalEmployeeName)) {
      $dara.Model.validateArray(this.digitalEmployeeName);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(this.taskExecution && typeof (this.taskExecution as any).validate === 'function') {
      (this.taskExecution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

