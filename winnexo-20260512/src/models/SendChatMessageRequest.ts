// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageRequestContextItemsAnnotationFiles extends $dara.Model {
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * Supplementary notes.pdf
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

export class SendChatMessageRequestContextItems extends $dara.Model {
  /**
   * @remarks
   * The user\"s annotation on the referenced content.
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
  annotationFiles?: SendChatMessageRequestContextItemsAnnotationFiles[];
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
   * Sales data.xlsx
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
   * The platform application token issued by the console. If this parameter is passed, the operation is executed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The AUTO preference. Valid values: none (default), performance (effect first), and credit (cost first). If this parameter is omitted or set to null, the session preference is inherited. If it is left blank, it is reset to none.
   * 
   * @example
   * performance
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
   * The message or file entries referenced as context for the current turn.
   * 
   * @example
   * []
   */
  contextItems?: SendChatMessageRequestContextItems[];
  /**
   * @remarks
   * The list of digital employee names. For compatibility with the old format, a single string can also be passed.
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * Specifies whether to enable direct connection mode. If this parameter is set to true, regular scenario routing is skipped and the direct conversation scenario is entered directly.
   * 
   * @example
   * false
   */
  directChat?: boolean;
  /**
   * @remarks
   * The number of recent complete direct Q&A rounds carried in the current turn, excluding the input of the current turn. This parameter takes effect only when workMode is set to direct or directChat is set to true. Valid values: JSON integers from 0 to 100. If this parameter is omitted, the backend processes it as 0, carrying no history but still saving the current turn. Null, Boolean values, strings, decimals, and out-of-bounds values are processed through the original direct path, and the gateway retains the original values for backend determination. This field is ignored in work and ask modes. This parameter does not limit the history range when switching to the work mode.
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
   * The list of file references. Each item is an object, and fileId is required, which is returned by uploadChatFile.
   */
  files?: SendChatMessageRequestFiles[];
  /**
   * @remarks
   * The language for the current turn. Valid values: zh-CN and en-US. This parameter is used for API error messages and passed through to CodeAgent. If this parameter is omitted, the current language behavior is retained and the user settings are not modified.
   * 
   * @example
   * en-US
   */
  locale?: string;
  /**
   * @remarks
   * The abstract model tier. Valid values: quick, standard, and flagship. If this parameter is omitted, standard is used for new sessions, and the current tier is retained for existing sessions.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * Specifies whether to reuse the most recent session under the digital employee when sessionId is not passed, which applies to CLI scenarios. Default value: false, which means a new session is created.
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
   * Specifies whether to use streaming output.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The task execution metadata returned by executeScheduledTask. If this parameter is passed, the request is processed through the task execution pipeline.
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
   * Specifies whether to explicitly override the thinking mode for the current turn. If this parameter is not passed in AUTO mode, the decision model determines the behavior. If it is not passed in fixed tier mode, the personal settings are retained. The final behavior complies with the model capabilities and tenant switches.
   * 
   * @example
   * true
   */
  thinkingEnabled?: boolean;
  /**
   * @remarks
   * The explicit override for the thinking intensity in the current turn. If this parameter is not passed in AUTO mode, the decision model determines the behavior. If it is not passed in fixed tier mode, the personal settings are retained. The final behavior complies with the model capabilities and tenant switches.
   * 
   * @example
   * medium
   */
  thinkingLevel?: string;
  /**
   * @remarks
   * The session work mode. Valid values: ask (quick Q&A, which trims tools, skills, and connectors for single-turn direct answers), work (deep work, which is the default), and direct (direct connection mode at the request level, which does not start the sandbox and prevents context pollution, equivalent to directChat=true). The ask and work modes are session-level. The mode is fixed when a new session is created. Subsequent chats inherit the session mode by default. If the explicitly passed value is inconsistent with the session mode, a parameter error is returned. To switch modes, create a new session or fork the current one. If ask is passed in multi-digital employee or task execution scenarios, it takes effect as work. If directChat is set to true, this parameter is ignored.
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
      contextItems: { 'type': 'array', 'itemType': SendChatMessageRequestContextItems },
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      directChat: 'boolean',
      directMaxHistoryRounds: 'any',
      enableWebSearch: 'boolean',
      files: { 'type': 'array', 'itemType': SendChatMessageRequestFiles },
      locale: 'string',
      model: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      reuseLastSession: 'boolean',
      segments: { 'type': 'array', 'itemType': SendChatMessageRequestSegments },
      sessionId: 'string',
      stream: 'boolean',
      taskExecution: SendChatMessageRequestTaskExecution,
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

