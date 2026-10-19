// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The file ID, which is returned by the uploadChatFile operation.
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
   * The list of digital employee names. For compatibility with the legacy format, a single string can also be passed.
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * Specifies whether to enable direct connection mode. If set to true, regular scenario routing is skipped and the direct conversation scenario is used.
   * 
   * @example
   * false
   */
  directChat?: boolean;
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
   * The list of file references. Each item is an object, and the fileId parameter is required. The fileId is returned by the uploadChatFile operation.
   */
  files?: SendAsyncChatMessageRequestFiles[];
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
   * Specifies whether to reuse the most recent session under the digital employee when sessionId is not specified. This is typically used in CLI scenarios. Default value: false, which means a new session is created.
   * 
   * @example
   * false
   */
  reuseLastSession?: boolean;
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
   * Specifies whether to use streaming generation. This operation always generates backend content in streaming mode and writes it to the message stream. The value of this parameter does not change the response structure.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The task execution metadata returned by the executeScheduledTask operation. If passed, the request is processed through the task execution pipeline.
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
   * The session work mode. Valid values: ask (quick Q&A, which trims tools, skills, and connectors for single-turn direct answers), work (deep work, default), and direct (direct connection mode at the request level, which does not start a sandbox and prevents context pollution, equivalent to directChat=true). The ask and work modes are session-level. The mode is fixed when a new session is created and inherited by default in subsequent chats. If the explicitly passed value is inconsistent with the session mode, a parameter error is returned. To switch modes, create a new session or fork the current one. If ask is passed in multi-digital-employee or task execution scenarios, it takes effect as work. This parameter is ignored when directChat is set to true.
   * 
   * @example
   * work
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      digitalEmployeeName: 'digitalEmployeeName',
      directChat: 'directChat',
      enableWebSearch: 'enableWebSearch',
      files: 'files',
      model: 'model',
      reuseLastSession: 'reuseLastSession',
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
      digitalEmployeeName: { 'type': 'array', 'itemType': 'string' },
      directChat: 'boolean',
      enableWebSearch: 'boolean',
      files: { 'type': 'array', 'itemType': SendAsyncChatMessageRequestFiles },
      model: 'string',
      reuseLastSession: 'boolean',
      sessionId: 'string',
      stream: 'boolean',
      taskExecution: SendAsyncChatMessageRequestTaskExecution,
      tenantId: 'string',
      workMode: 'string',
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

