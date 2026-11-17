// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageRequestContextItemsAnnotationFiles extends $dara.Model {
  /**
   * @remarks
   * 文件名称
   * 
   * @example
   * 补充说明.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * 文件公开访问地址
   * 
   * @example
   * https://example.com/public/file
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * 文件记录 ID
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * 文件内部访问地址
   * 
   * @example
   * https://example.com/file
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      filePublicUrl: 'filePublicUrl',
      fileRecordId: 'fileRecordId',
      fileUrl: 'fileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      filePublicUrl: 'string',
      fileRecordId: 'string',
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestContextItems extends $dara.Model {
  /**
   * @remarks
   * 用户对引用内容的批注
   * 
   * @example
   * 请核对华东区数据
   */
  annotation?: string;
  /**
   * @remarks
   * 批注关联的文件列表
   * 
   * @example
   * []
   */
  annotationFiles?: SendChatMessageRequestContextItemsAnnotationFiles[];
  /**
   * @remarks
   * 被引用内容正文
   * 
   * @example
   * 本月销售收入
   */
  content?: string;
  /**
   * @remarks
   * 被引用文件 ID
   * 
   * @example
   * exampleFileId
   */
  fileId?: string;
  /**
   * @remarks
   * 被引用文件名称
   * 
   * @example
   * 销售数据.xlsx
   */
  fileName?: string;
  /**
   * @remarks
   * 被引用文件类型
   * 
   * @example
   * xlsx
   */
  fileType?: string;
  /**
   * @remarks
   * 被引用消息 ID
   * 
   * @example
   * exampleMessageId
   */
  messageId?: string;
  /**
   * @remarks
   * 消息发送者名称
   * 
   * @example
   * 销售助手
   */
  senderName?: string;
  /**
   * @remarks
   * 上下文条目类型
   * 
   * @example
   * message_annotation
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      annotation: 'annotation',
      annotationFiles: 'annotationFiles',
      content: 'content',
      fileId: 'fileId',
      fileName: 'fileName',
      fileType: 'fileType',
      messageId: 'messageId',
      senderName: 'senderName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotation: 'string',
      annotationFiles: { 'type': 'array', 'itemType': SendChatMessageRequestContextItemsAnnotationFiles },
      content: 'string',
      fileId: 'string',
      fileName: 'string',
      fileType: 'string',
      messageId: 'string',
      senderName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.annotationFiles)) {
      $dara.Model.validateArray(this.annotationFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendChatMessageRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleFileId
   */
  fileId?: string;
  /**
   * @remarks
   * The element type. Valid values: text, web_search, mention, and skill.
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

export class SendChatMessageRequestSegments extends $dara.Model {
  /**
   * @remarks
   * 片段展示内容
   * 
   * @example
   * 旧会话
   */
  content?: string;
  /**
   * @remarks
   * 提及对象类别
   * 
   * @example
   * conversations
   */
  mentionType?: string;
  /**
   * @remarks
   * 被引用对象名称
   * 
   * @example
   * 旧会话
   */
  name?: string;
  /**
   * @remarks
   * 被引用对象 ID
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * 被引用对象类型
   * 
   * @example
   * conversation
   */
  objectType?: string;
  /**
   * @remarks
   * 会话类型
   * 
   * @example
   * personal
   */
  sessionType?: string;
  /**
   * @remarks
   * 片段类型
   * 
   * @example
   * mention
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      mentionType: 'mentionType',
      name: 'name',
      objectId: 'objectId',
      objectType: 'objectType',
      sessionType: 'sessionType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mentionType: 'string',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
      sessionType: 'string',
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

export class SendChatMessageRequestTaskExecution extends $dara.Model {
  /**
   * @remarks
   * The billing ID.
   * 
   * @example
   * exampleBillingId
   */
  billingId?: string;
  /**
   * @remarks
   * Specifies whether to enable web search.
   * 
   * @example
   * true
   */
  enableWebSearch?: boolean;
  /**
   * @remarks
   * The execution record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleExecutionId
   */
  executionId?: string;
  /**
   * @remarks
   * The name of the digital employee.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The list of associated skill codes.
   * 
   * @example
   * string_value
   */
  skillCodes?: string[];
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * string_value
   */
  taskName?: string;
  /**
   * @remarks
   * The task understanding content.
   * 
   * @example
   * string_value
   */
  taskUnderstand?: string;
  /**
   * @remarks
   * The ID of the tenant to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user to which the task belongs.
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

export class SendChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The body of the user message.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * The message type. Valid values: Text and Markdown.
   * 
   * @example
   * Text
   */
  contentType?: string;
  /**
   * @remarks
   * 作为本轮上下文引用的消息或文件条目
   * 
   * @example
   * []
   */
  contextItems?: SendChatMessageRequestContextItems[];
  /**
   * @remarks
   * The list of digital employee names. For compatibility with the legacy format, a single string can be passed.
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * Specifies whether to enable the direct connection mode. If this parameter is set to true, the regular scenario routing is skipped and the direct connection conversation scenario is directly entered.
   * 
   * @example
   * false
   */
  directChat?: boolean;
  /**
   * @remarks
   * 本轮携带的最近完整 direct 问答轮数，不含本轮输入。仅 workMode=direct 或 directChat=true 时生效。有效值为 0–100 的 JSON 整数，省略时由后端按 0 处理，不携带历史但仍保存当前轮。null、布尔值、字符串、小数及越界值按原 direct 路径处理，网关保留原始值供后端判定。work/ask 忽略此字段。该参数不限制转换为 work 时的历史范围
   * 
   * @example
   * 1
   */
  directMaxHistoryRounds?: any;
  /**
   * @remarks
   * Specifies whether to enable web search. Default value: false. In the task execution scenario where taskExecution is passed, the task configuration prevails.
   * 
   * @example
   * false
   */
  enableWebSearch?: boolean;
  /**
   * @remarks
   * The list of file references. Each item is an object, and the fileId parameter is required, which is returned by uploadChatFile.
   */
  files?: SendChatMessageRequestFiles[];
  /**
   * @remarks
   * 本轮语言，可选 zh-CN、en-US，用于接口错误文案并透传给 CodeAgent；省略时沿用当前语言行为，不修改用户设置
   * 
   * @example
   * en-US
   */
  locale?: string;
  /**
   * @remarks
   * The abstract model tier. Valid values: quick, standard, and flagship. If this parameter is not specified, standard is used for new sessions, and the current tier is used for existing sessions.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to reuse the most recent session under the digital employee when sessionId is not passed, which applies to CLI scenarios. Default value: false, which indicates that a new session is created.
   * 
   * @example
   * false
   */
  reuseLastSession?: boolean;
  /**
   * @remarks
   * 消息中的结构化片段，例如会话或对象提及
   * 
   * @example
   * []
   */
  segments?: SendChatMessageRequestSegments[];
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether to enable streaming output.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The task execution metadata returned by executeScheduledTask. If this parameter is passed, the request is processed according to the task execution link.
   */
  taskExecution?: SendChatMessageRequestTaskExecution;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The session work mode. Valid values: ask (quick Q&A, which trims tools, skills, and connectors for single-turn direct answers), work (deep work, which is the default value), and direct (direct connection mode at the request level, which does not start the sandbox and prevents context pollution, equivalent to directChat=true). The ask and work modes are at the session level. The mode is fixed when a new session is created. Subsequent chats inherit the session mode by default. If the explicitly passed value is inconsistent with the session mode, a parameter error is returned. To switch the mode, create a new session or fork the session. If ask is passed in the multi-digital employee or task execution scenario, it takes effect as work. If directChat is set to true, this parameter is ignored.
   * 
   * @example
   * work
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      contextItems: 'contextItems',
      digitalEmployeeName: 'digitalEmployeeName',
      directChat: 'directChat',
      directMaxHistoryRounds: 'directMaxHistoryRounds',
      enableWebSearch: 'enableWebSearch',
      files: 'files',
      locale: 'locale',
      model: 'model',
      reuseLastSession: 'reuseLastSession',
      segments: 'segments',
      sessionId: 'sessionId',
      stream: 'stream',
      taskExecution: 'taskExecution',
      tenantId: 'tenantId',
      workMode: 'workMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      contextItems: { 'type': 'array', 'itemType': SendChatMessageRequestContextItems },
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      directChat: 'boolean',
      directMaxHistoryRounds: 'any',
      enableWebSearch: 'boolean',
      files: { 'type': 'array', 'itemType': SendChatMessageRequestFiles },
      locale: 'string',
      model: 'string',
      reuseLastSession: 'boolean',
      segments: { 'type': 'array', 'itemType': SendChatMessageRequestSegments },
      sessionId: 'string',
      stream: 'boolean',
      taskExecution: SendChatMessageRequestTaskExecution,
      tenantId: 'string',
      workMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contextItems)) {
      $dara.Model.validateArray(this.contextItems);
    }
    if(Array.isArray(this.digitalEmployeeName)) {
      $dara.Model.validateArray(this.digitalEmployeeName);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(Array.isArray(this.segments)) {
      $dara.Model.validateArray(this.segments);
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

