// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageShrinkRequest extends $dara.Model {
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
  digitalEmployeeNameShrink?: string;
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
  filesShrink?: string;
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
  taskExecutionShrink?: string;
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

