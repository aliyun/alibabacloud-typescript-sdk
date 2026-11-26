// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendAsyncChatMessageShrinkRequest extends $dara.Model {
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
  contextItemsShrink?: string;
  /**
   * @remarks
   * The list of digital employee names. For compatibility with the old format, a single string can also be passed.
   * 
   * @example
   * ["pcitc-magent"]
   */
  digitalEmployeeNameShrink?: string;
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
  filesShrink?: string;
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
      contextItemsShrink: 'contextItems',
      digitalEmployeeNameShrink: 'digitalEmployeeName',
      directChat: 'directChat',
      directMaxHistoryRounds: 'directMaxHistoryRounds',
      enableWebSearch: 'enableWebSearch',
      filesShrink: 'files',
      locale: 'locale',
      model: 'model',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      reuseLastSession: 'reuseLastSession',
      segmentsShrink: 'segments',
      sessionId: 'sessionId',
      stream: 'stream',
      taskExecutionShrink: 'taskExecution',
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
      contextItemsShrink: 'string',
      digitalEmployeeNameShrink: 'string',
      directChat: 'boolean',
      directMaxHistoryRounds: 'any',
      enableWebSearch: 'boolean',
      filesShrink: 'string',
      locale: 'string',
      model: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      reuseLastSession: 'boolean',
      segmentsShrink: 'string',
      sessionId: 'string',
      stream: 'boolean',
      taskExecutionShrink: 'string',
      tenantId: 'string',
      thinkingEnabled: 'boolean',
      thinkingLevel: 'string',
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

