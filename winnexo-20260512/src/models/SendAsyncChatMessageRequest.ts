// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageRequestContextItemsAnnotationFiles extends $dara.Model {
  /**
   * @remarks
   * The file name of the attachment.
   * 
   * @example
   * Supplementary notes.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The public access URL of the attachment. This parameter is optional.
   * 
   * @example
   * https://example.com/public/file
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The file record ID of the attachment. This parameter is required. It is used to verify the ownership of the attachment and provide it for session processing.
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * The internal access URL of the attachment. This parameter is optional.
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

export class SendAsyncChatMessageRequestContextItems extends $dara.Model {
  /**
   * @remarks
   * The annotation content entered by the user.
   * 
   * @example
   * Please verify the data for the East China region
   */
  annotation?: string;
  /**
   * @remarks
   * The list of attachments associated with the output annotation. This parameter is only applicable when type is set to output_annotation.
   * 
   * @example
   * []
   */
  annotationFiles?: SendAsyncChatMessageRequestContextItemsAnnotationFiles[];
  /**
   * @remarks
   * The content corresponding to the reference or annotation. For output_annotation, this parameter is optional, but annotationFiles must be provided.
   * 
   * @example
   * Sales revenue for this month
   */
  content?: string;
  /**
   * @remarks
   * The ID of the referenced or annotated output file.
   * 
   * @example
   * exampleFileId
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the referenced or annotated output file.
   * 
   * @example
   * Sales data.xlsx
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the referenced or annotated output file.
   * 
   * @example
   * xlsx
   */
  fileType?: string;
  /**
   * @remarks
   * The ID of the referenced or annotated message.
   * 
   * @example
   * exampleMessageId
   */
  messageId?: string;
  /**
   * @remarks
   * The name of the sender of the referenced or annotated message.
   * 
   * @example
   * Sales Assistant
   */
  senderName?: string;
  /**
   * @remarks
   * The context type. Valid values: message_reference, message_selection, message_annotation, output_selection, and output_annotation.
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
      annotationFiles: { 'type': 'array', 'itemType': SendAsyncChatMessageRequestContextItemsAnnotationFiles },
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

export class SendAsyncChatMessageRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The file ID, returned by uploadChatFile.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleFileId
   */
  fileId?: string;
  /**
   * @remarks
   * The file type.
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

export class SendAsyncChatMessageRequestSegments extends $dara.Model {
  /**
   * @remarks
   * The display content of the segment.
   * 
   * @example
   * Previous session
   */
  content?: string;
  /**
   * @remarks
   * The category of the mentioned object.
   * 
   * @example
   * conversations
   */
  mentionType?: string;
  /**
   * @remarks
   * The name of the referenced object.
   * 
   * @example
   * Previous session
   */
  name?: string;
  /**
   * @remarks
   * The ID of the referenced object.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type of the referenced object.
   * 
   * @example
   * conversation
   */
  objectType?: string;
  /**
   * @remarks
   * The session type.
   * 
   * @example
   * personal
   */
  sessionType?: string;
  /**
   * @remarks
   * The segment type.
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

export class SendAsyncChatMessageRequestTaskExecution extends $dara.Model {
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
   * ["code"]
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

export class SendAsyncChatMessageRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * AUTO 偏好：none=默认、performance=效果优先、credit=成本优先；缺省或 null 继承会话，空白重置为 none
   * 
   * @example
   * credit
   */
  autoPreference?: string;
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
   * The references and annotations for the current turn.
   * 
   * @example
   * []
   */
  contextItems?: SendAsyncChatMessageRequestContextItems[];
  /**
   * @remarks
   * The list of digital employee names. For compatibility with the old format, a single string can also be passed.
   * 
   * @example
   * ["pcitc-magent"]
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * **[Deprecated]** Use workMode=direct instead. If set to true, winnexo_chat is retained and processed in request-level direct mode.
   * 
   * @example
   * false
   */
  directChat?: boolean;
  /**
   * @remarks
   * The maximum number of history rounds referenced in the current turn for the direct mode. Valid values: integers from 0 to 100. Default value: 0. Invalid values fall back to the original single-turn path. This parameter is ignored in non-direct modes.
   * 
   * @example
   * 1
   */
  directMaxHistoryRounds?: any;
  /**
   * @remarks
   * Specifies whether to enable web search. Default value: false. In the task execution scenario (when taskExecution is passed), the task configuration prevails.
   * 
   * @example
   * false
   */
  enableWebSearch?: boolean;
  /**
   * @remarks
   * The list of file references. Each item is an object, and fileId is required (returned by uploadChatFile).
   */
  files?: SendAsyncChatMessageRequestFiles[];
  /**
   * @remarks
   * The language for the current turn. Valid values: zh-CN and en-US. This parameter is used for API error messages and passed through to CodeAgent. If omitted, the current language behavior is retained and user settings are not modified.
   * 
   * @example
   * en-US
   */
  locale?: string;
  /**
   * @remarks
   * The model tier. Valid values: quick, standard, flagship, auto, or other currently available model names (case-insensitive). If not specified, the model tier of the session is inherited. For a new session, the default value is standard.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * Specifies whether to reuse the most recent session under the digital employee when sessionId is not provided (CLI scenario). Default value: false, which means a new session is created.
   * 
   * @example
   * false
   */
  reuseLastSession?: boolean;
  /**
   * @remarks
   * The structured segments in the message, such as session or object mentions.
   * 
   * @example
   * []
   */
  segments?: SendAsyncChatMessageRequestSegments[];
  /**
   * @remarks
   * The session ID. If not specified, a new session is created.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether to use streaming generation. This API always generates background content in streaming mode and writes it to the message stream. The value of this parameter does not change the response structure.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The task execution metadata returned by executeScheduledTask. If passed, the request is processed through the task execution pipeline.
   */
  taskExecution?: SendAsyncChatMessageRequestTaskExecution;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 本轮显式覆盖是否思考；AUTO 未传时由决策模型判断，固定档未传时沿用个人设置，最终遵守模型能力与租户开关
   * 
   * @example
   * true
   */
  thinkingEnabled?: boolean;
  /**
   * @remarks
   * 本轮显式覆盖思考强度；AUTO 未传时由决策模型判断，固定档未传时沿用个人设置，最终遵守模型能力与租户开关
   * 
   * @example
   * high
   */
  thinkingLevel?: string;
  /**
   * @remarks
   * The session work mode. Valid values: ask (quick Q&A), work (deep work, default), and direct (direct connection mode, which does not start the sandbox, uses independent direct history controlled by directMaxHistoryRounds, and is equivalent to directChat=true). The ask and work modes are session-level. For continued chats, the session mode is inherited by default. To switch modes, create a new session or fork. In multi-digital employee or task execution scenarios, if ask is passed, it takes effect as work. If directChat is set to true, this parameter is ignored.
   * 
   * @example
   * work
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      autoPreference: 'autoPreference',
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
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      reuseLastSession: 'reuseLastSession',
      segments: 'segments',
      sessionId: 'sessionId',
      stream: 'stream',
      taskExecution: 'taskExecution',
      tenantId: 'tenantId',
      thinkingEnabled: 'thinkingEnabled',
      thinkingLevel: 'thinkingLevel',
      workMode: 'workMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      autoPreference: 'string',
      content: 'string',
      contentType: 'string',
      contextItems: { 'type': 'array', 'itemType': SendAsyncChatMessageRequestContextItems },
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      directChat: 'boolean',
      directMaxHistoryRounds: 'any',
      enableWebSearch: 'boolean',
      files: { 'type': 'array', 'itemType': SendAsyncChatMessageRequestFiles },
      locale: 'string',
      model: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      reuseLastSession: 'boolean',
      segments: { 'type': 'array', 'itemType': SendAsyncChatMessageRequestSegments },
      sessionId: 'string',
      stream: 'boolean',
      taskExecution: SendAsyncChatMessageRequestTaskExecution,
      tenantId: 'string',
      thinkingEnabled: 'boolean',
      thinkingLevel: 'string',
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

