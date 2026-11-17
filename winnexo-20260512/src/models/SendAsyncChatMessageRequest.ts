// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageRequestContextItemsAnnotationFiles extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SupplementaryNotes.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The public access URL of the file.
   * 
   * @example
   * https://example.com/public/file
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The file record ID.
   * 
   * @example
   * exampleFileRecordId
   */
  fileRecordId?: string;
  /**
   * @remarks
   * The internal access URL of the file.
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
   * The user\\"s annotation on the referenced content.
   * 
   * @example
   * Please verify the data for the East China region
   */
  annotation?: string;
  /**
   * @remarks
   * The list of files associated with the annotation.
   * 
   * @example
   * []
   */
  annotationFiles?: SendAsyncChatMessageRequestContextItemsAnnotationFiles[];
  /**
   * @remarks
   * The body of the referenced content.
   * 
   * @example
   * Sales revenue for this month
   */
  content?: string;
  /**
   * @remarks
   * The ID of the referenced file.
   * 
   * @example
   * exampleFileId
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the referenced file.
   * 
   * @example
   * SalesData.xlsx
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the referenced file.
   * 
   * @example
   * xlsx
   */
  fileType?: string;
  /**
   * @remarks
   * The ID of the referenced message.
   * 
   * @example
   * exampleMessageId
   */
  messageId?: string;
  /**
   * @remarks
   * The name of the message sender.
   * 
   * @example
   * Sales Assistant
   */
  senderName?: string;
  /**
   * @remarks
   * The context entry type.
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
   * The file ID, which is returned by uploadChatFile.
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
   * Old session
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
   * Old session
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
   * The referenced object type.
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
   * The digital employee name.
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
   * The message or file entries referenced as context for the current turn.
   * 
   * @example
   * []
   */
  contextItems?: SendAsyncChatMessageRequestContextItems[];
  /**
   * @remarks
   * The list of digital employee names. For backward compatibility, a single string can also be passed.
   * 
   * @example
   * ["pcitc-magent"]
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * Specifies whether to enable direct connection mode. If set to true, regular scenario routing is skipped and the direct conversation scenario is entered directly.
   * 
   * @example
   * false
   */
  directChat?: boolean;
  /**
   * @remarks
   * The number of recent complete direct Q&A rounds carried in the current turn, excluding the current input. This parameter takes effect only when workMode is set to direct or directChat is set to true. Valid values are JSON integers from 0 to 100. If omitted, the backend processes it as 0, carrying no history but still saving the current round. Null, Boolean, string, decimal, and out-of-bounds values are processed through the original direct path, and the gateway retains the original values for backend determination. This field is ignored in work and ask modes. This parameter does not limit the history range when switching to the work mode.
   * 
   * @example
   * 1
   */
  directMaxHistoryRounds?: any;
  /**
   * @remarks
   * Specifies whether to enable web search. Default value: false. In task execution scenarios where taskExecution is passed, the task configuration prevails.
   * 
   * @example
   * false
   */
  enableWebSearch?: boolean;
  /**
   * @remarks
   * The list of file references. Each item is an object, and fileId is required, which is returned by uploadChatFile.
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
   * The abstract model tier. Valid values: quick, standard, and flagship. If not specified, standard is used for new sessions, and the current tier is retained for existing sessions.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to reuse the most recent session under the digital employee when sessionId is not provided, which applies to CLI scenarios. Default value: false, which means a new session is created.
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
   * Specifies whether to use streaming generation. This API always generates background content in streaming mode and writes it to the message stream. The value does not change the response structure.
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
   * The session work mode. Valid values:
   * - ask: Quick Q&A mode. Trims tools, skills, and connectors for single-turn direct answers.
   * - work: Deep work mode. This is the default value.
   * - direct: Direct connection mode at the request level. Does not start a sandbox and prevents context pollution. Equivalent to setting directChat to true.
   * The ask and work modes are session-level. Once selected during session creation, the mode is fixed and inherited by default in subsequent chats. If the explicitly passed value conflicts with the session mode, a parameter error is returned. To switch modes, create a new session or fork the current one. In scenarios with multiple digital employees or task execution, passing ask takes effect as work. This parameter is ignored when directChat is set to true.
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
      contextItems: { 'type': 'array', 'itemType': SendAsyncChatMessageRequestContextItems },
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      directChat: 'boolean',
      directMaxHistoryRounds: 'any',
      enableWebSearch: 'boolean',
      files: { 'type': 'array', 'itemType': SendAsyncChatMessageRequestFiles },
      locale: 'string',
      model: 'string',
      reuseLastSession: 'boolean',
      segments: { 'type': 'array', 'itemType': SendAsyncChatMessageRequestSegments },
      sessionId: 'string',
      stream: 'boolean',
      taskExecution: SendAsyncChatMessageRequestTaskExecution,
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

