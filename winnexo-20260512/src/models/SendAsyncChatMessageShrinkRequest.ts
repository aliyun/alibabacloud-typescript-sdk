// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageShrinkRequest extends $dara.Model {
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
  contextItemsShrink?: string;
  /**
   * @remarks
   * The list of digital employee names. For compatibility with the legacy format, a single string can also be passed.
   * 
   * @example
   * string_value
   */
  digitalEmployeeNameShrink?: string;
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
   * The list of file references. Each item is an object, and the fileId parameter is required. The fileId is returned by the uploadChatFile operation.
   */
  filesShrink?: string;
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
   * 消息中的结构化片段，例如会话或对象提及
   * 
   * @example
   * []
   */
  segmentsShrink?: string;
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
      contextItemsShrink: 'contextItems',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      directChat: 'directChat',
      directMaxHistoryRounds: 'directMaxHistoryRounds',
      enableWebSearch: 'enableWebSearch',
      filesShrink: 'files',
      locale: 'locale',
      model: 'model',
      reuseLastSession: 'reuseLastSession',
      segmentsShrink: 'segments',
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
      contextItemsShrink: 'string',
      digitalEmployeeNameShrink: 'string',
      directChat: 'boolean',
      directMaxHistoryRounds: 'any',
      enableWebSearch: 'boolean',
      filesShrink: 'string',
      locale: 'string',
      model: 'string',
      reuseLastSession: 'boolean',
      segmentsShrink: 'string',
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

