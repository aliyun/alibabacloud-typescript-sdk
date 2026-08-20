// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

export class SendChatMessageRequest extends $dara.Model {
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
   * The list of digital employee names. A single string can be passed for backward compatibility with the legacy format.
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string[];
  /**
   * @remarks
   * Specifies whether to enable direct connection mode. When set to true, the regular scenario routing is skipped and the direct conversation scenario is entered directly.
   * 
   * @example
   * false
   */
  directChat?: boolean;
  /**
   * @remarks
   * The list of file references. Each item is an object, and fileId is required (returned by uploadChatFile).
   */
  files?: SendChatMessageRequestFiles[];
  /**
   * @remarks
   * The abstract model tier. Valid values: quick, standard, and flagship. If not specified, new sessions use standard, and existing sessions retain the current session tier.
   * 
   * @example
   * quick
   */
  model?: string;
  /**
   * @remarks
   * Specifies whether to reuse the most recent session of the digital employee when sessionId is not provided (CLI scenario). Default value: false, which creates a new session.
   * 
   * @example
   * false
   */
  reuseLastSession?: boolean;
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
   * The task execution metadata returned by executeScheduledTask. When provided, the request is processed through the task execution pipeline.
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
      files: { 'type': 'array', 'itemType': SendChatMessageRequestFiles },
      model: 'string',
      reuseLastSession: 'boolean',
      sessionId: 'string',
      stream: 'boolean',
      taskExecution: SendChatMessageRequestTaskExecution,
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

