// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The file ID returned by uploadChatFile.
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
   * The tenant ID to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The user ID to which the task belongs.
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
   * The message body from the user.
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
   * The list of digital employee names. A single string is also accepted for backward compatibility with the legacy format.
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * Specifies whether to enable direct connection mode. If set to true, the regular scenario routing is skipped and the direct conversation scenario is entered.
   * 
   * @example
   * false
   */
  directChat?: boolean;
  /**
   * @remarks
   * Specifies whether to enable web search. Default value: False. In task execution scenarios where taskExecution is specified, the task configuration takes precedence.
   * 
   * @example
   * false
   */
  enableWebSearch?: boolean;
  /**
   * @remarks
   * The list of file references. Each item is an object in which fileId is required and is returned by uploadChatFile.
   */
  files?: SendAsyncChatMessageRequestFiles[];
  /**
   * @remarks
   * The abstract model tier. Valid values: quick, standard, and flagship. If not specified, new sessions use standard, and existing sessions retain their current tier.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to reuse the most recent session of the digital employee when sessionId is not specified. This is designed for CLI scenarios. Default value: false, which creates a new session.
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
   * The task execution metadata returned by executeScheduledTask. If specified, the request is processed through the task execution pipeline.
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
   * 
   * - ask: Quick Q&A. Tools, skills, and connectors are trimmed, and a single-turn direct answer is returned.
   * - work: Deep work. This is the default value.
   * - direct: Direct connection mode at the request level. No sandbox is started and no context pollution occurs. This is equivalent to setting directChat to true.
   * 
   * The ask and work modes are session-level settings. The mode is fixed when a session is created. By default, follow-up messages in the same session inherit the session mode. If an explicit value conflicts with the session mode, a parameter error is returned. To switch modes, create a new session or fork the existing one. In multi-digital-employee or task execution scenarios, specifying ask causes the work mode to take effect. If directChat is set to true, this parameter is ignored.
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

