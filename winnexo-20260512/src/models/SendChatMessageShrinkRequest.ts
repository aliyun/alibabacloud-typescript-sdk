// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendChatMessageShrinkRequest extends $dara.Model {
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
  digitalEmployeeNameShrink?: string;
  /**
   * @remarks
   * Specifies whether to enable direct connection mode. If set to true, the standard scenario routing is skipped and the direct conversation scenario is entered directly.
   * 
   * @example
   * false
   */
  directChat?: boolean;
  /**
   * @remarks
   * Specifies whether to enable web search. Default value: False. In task execution scenarios (when taskExecution is provided), the task configuration takes precedence.
   * 
   * @example
   * false
   */
  enableWebSearch?: boolean;
  /**
   * @remarks
   * The list of file references. Each item is an object, and fileId is required (returned by uploadChatFile).
   */
  filesShrink?: string;
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
   * Specifies whether to enable streaming output.
   * 
   * @example
   * true
   */
  stream?: boolean;
  /**
   * @remarks
   * The task execution metadata returned by executeScheduledTask. When provided, the request is processed through the task execution pipeline.
   */
  taskExecutionShrink?: string;
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
   * The session work mode. Valid values:
   * - ask: Quick Q&A. Tools, skills, and connectors are trimmed, and single-turn direct answers are provided.
   * - work: Deep work. This is the default value.
   * - direct: Direct connection mode (request-level). The sandbox is not started and no context pollution occurs. This is equivalent to directChat=true.
   * 
   * The ask and work modes are session-level: the mode is selected and fixed when a session is created. By default, follow-up messages inherit the session mode. If an explicitly provided value is inconsistent with the session mode, a parameter error is returned. To switch modes, create a new session or fork the existing one. In multi-digital-employee or task execution scenarios, if ask is provided, work takes effect instead. When directChat=true, this parameter is ignored.
   * 
   * @example
   * work
   */
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentType: 'contentType',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      directChat: 'directChat',
      enableWebSearch: 'enableWebSearch',
      filesShrink: 'files',
      model: 'model',
      reuseLastSession: 'reuseLastSession',
      sessionId: 'sessionId',
      stream: 'stream',
      taskExecutionShrink: 'taskExecution',
      tenantId: 'tenantId',
      workMode: 'workMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      digitalEmployeeNameShrink: 'string',
      directChat: 'boolean',
      enableWebSearch: 'boolean',
      filesShrink: 'string',
      model: 'string',
      reuseLastSession: 'boolean',
      sessionId: 'string',
      stream: 'boolean',
      taskExecutionShrink: 'string',
      tenantId: 'string',
      workMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

