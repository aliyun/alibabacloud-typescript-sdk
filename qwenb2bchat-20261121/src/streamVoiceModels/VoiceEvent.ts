// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceEventHeader extends $dara.Model {
  /**
   * @remarks
   * 必填事件类型，只可能为 task-started、result-generated、heartbeat、task-finished、task-failed。整轮完成以 task-finished 为准，不以 Agent complete 或单个 TTS 事件代替。
   * 
   * @example
   * task-started
   */
  event?: string;
  /**
   * @remarks
   * task-failed 时返回的语音阶段错误码，字符串；例如 INVALID_REQUEST、ASR_FAILED、AGENT_FAILED、TTS_FAILED，其他准入/协议错误见接口说明。若同时存在 Agent 业务错误，另看顶层 error.code，分别处理两层错误。
   * 
   * @example
   * INVALID_REQUEST
   */
  errorCode?: string;
  /**
   * @remarks
   * task-failed 时返回的可读失败说明；非失败事件省略，不依赖固定文案做程序判断。
   * 
   * @example
   * invalid request
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventCommunication extends $dara.Model {
  /**
   * @remarks
   * 对应当前 run-task 的 communication.requestId，用于轮次关联；无法解析出合法请求号时，整个 communication 可省略。不能用音频帧或事件数量替代关联号。
   * 
   * @example
   * voice-request-001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutputResponseCommunication extends $dara.Model {
  /**
   * @remarks
   * Agent 业务响应关联号。
   * 
   * @example
   * voice-request-001
   */
  requestId?: string;
  /**
   * @remarks
   * 当前 Agent 响应所属的客户会话。
   * 
   * @example
   * voice-session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * 当前响应所属的业务应用。
   * 
   * @example
   * your-app
   */
  appId?: string;
  /**
   * @remarks
   * 该值不代表网关发送帧的顺序。
   * 
   * @example
   * 1
   */
  responseId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sessionId: 'sessionId',
      appId: 'appId',
      responseId: 'responseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionId: 'string',
      appId: 'string',
      responseId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutputResponseDataMessagesMetaDataMultiLoad extends $dara.Model {
  /**
   * @remarks
   * 按类型选择卡片展示组件。
   * 
   * @example
   * image_waterfall
   */
  type?: string;
  /**
   * @remarks
   * 与正文中的卡片占位符关联。sourceSeq 为 image_waterfall_1 时，正文占位符为 [(image_waterfall_1)]。
   * 
   * @example
   * image_waterfall_1
   */
  sourceSeq?: string;
  /**
   * @remarks
   * 可选，结构随卡片类型变化。图文卡片可含资源列表。
   * 
   * @example
   * {}
   */
  content?: any;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      sourceSeq: 'sourceSeq',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      sourceSeq: 'string',
      content: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutputResponseDataMessagesMetaData extends $dara.Model {
  /**
   * @remarks
   * 用于匹配正文中的卡片挂载标记，或关联同一轮的状态栏模块。收到该模块的新快照时替换旧内容。
   * 
   * @example
   * card-001
   */
  sourceSeq?: string;
  /**
   * @remarks
   * 按所用 Agent 的业务输出提供。常见有 bar_thinking、bar_tool、bar_think_finish、bar_ref_source_inline 和 bar_image_inline。各类型的显示方式见接口说明第 8.2 节。
   * 
   * @example
   * bar_thinking
   */
  type?: string;
  /**
   * @remarks
   * Agent 返回时可用于展示。
   * 
   * @example
   * 思考中
   */
  barTitle?: string;
  /**
   * @remarks
   * 当前模块的完整业务快照，格式由 metaData.type 决定。过程资料条目由 bar_ref_source_inline 的 docs 提供。
   * 
   * @example
   * {"body":"正在整理回答","status":"processing"}
   */
  content?: any;
  /**
   * @remarks
   * 卡片结构随类型变化，按关联标识挂载。
   * 
   * @example
   * [{"type":"image_waterfall","sourceSeq":"image_waterfall_1","content":{"list":[{"imageUrl":"https://example.com/photo.jpg"}]}}]
   */
  multiLoad?: VoiceEventPayloadOutputResponseDataMessagesMetaDataMultiLoad[];
  static names(): { [key: string]: string } {
    return {
      sourceSeq: 'sourceSeq',
      type: 'type',
      barTitle: 'barTitle',
      content: 'content',
      multiLoad: 'multiLoad',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceSeq: 'string',
      type: 'string',
      barTitle: 'string',
      content: 'any',
      multiLoad: { 'type': 'array', 'itemType': VoiceEventPayloadOutputResponseDataMessagesMetaDataMultiLoad },
    };
  }

  validate() {
    if(Array.isArray(this.multiLoad)) {
      $dara.Model.validateArray(this.multiLoad);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutputResponseDataMessages extends $dara.Model {
  /**
   * @remarks
   * 例如 multi_load/iframe、bar/progress。
   * 
   * @example
   * multi_load/iframe
   */
  mimeType?: string;
  /**
   * @remarks
   * 例如 processing、complete，不代表整轮完成。
   * 
   * @example
   * complete
   */
  status?: string;
  /**
   * @remarks
   * 文本或结构化内容，格式由 mimeType 决定。
   * 
   * @example
   * 你好
   */
  content?: any;
  /**
   * @remarks
   * 结构随消息类型变化，可含卡片、状态栏过程信息及关联标识。
   * 
   * @example
   * {"sourceSeq":"card-001","type":"bar_thinking","barTitle":"思考中"}
   */
  metaData?: VoiceEventPayloadOutputResponseDataMessagesMetaData;
  static names(): { [key: string]: string } {
    return {
      mimeType: 'mimeType',
      status: 'status',
      content: 'content',
      metaData: 'metaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mimeType: 'string',
      status: 'string',
      content: 'any',
      metaData: VoiceEventPayloadOutputResponseDataMessagesMetaData,
    };
  }

  validate() {
    if(this.metaData && typeof (this.metaData as any).validate === 'function') {
      (this.metaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutputResponseDataExtraInfoInputResources extends $dara.Model {
  /**
   * @remarks
   * 以本轮原始 content 数组的顺序计数，从零开始，文本项也计数。
   * 
   * @example
   * 1
   */
  contentIndex?: number;
  /**
   * @remarks
   * 用于区分本轮输入资源的类型。
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * 资源服务返回的标识。
   * 
   * @example
   * resource-example-001
   */
  resourceId?: string;
  /**
   * @remarks
   * 资源处理成功时返回的文件 URL。
   * 
   * @example
   * https://example.com/image.png
   */
  url?: string;
  /**
   * @remarks
   * 可选的资源文件名。
   * 
   * @example
   * image.png
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      contentIndex: 'contentIndex',
      type: 'type',
      resourceId: 'resourceId',
      url: 'url',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentIndex: 'number',
      type: 'string',
      resourceId: 'string',
      url: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutputResponseDataExtraInfo extends $dara.Model {
  /**
   * @remarks
   * 仅在 Agent 返回资源处理结果时出现。
   * 
   * @example
   * [{"contentIndex":1,"type":"image","resourceId":"resource-example-001","url":"https://example.com/image.png","fileName":"image.png"}]
   */
  inputResources?: VoiceEventPayloadOutputResponseDataExtraInfoInputResources[];
  static names(): { [key: string]: string } {
    return {
      inputResources: 'inputResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputResources: { 'type': 'array', 'itemType': VoiceEventPayloadOutputResponseDataExtraInfoInputResources },
    };
  }

  validate() {
    if(Array.isArray(this.inputResources)) {
      $dara.Model.validateArray(this.inputResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutputResponseData extends $dara.Model {
  /**
   * @remarks
   * 仅在 result-generated 事件的 payload.output.stage=agent 且 type=response 时，完整 Agent 业务包可能提供此字段。按本帧的实际 JSON 值处理，可为 null。语音接口未约定调试开关、固定子字段或返回时机。内部计量字段不会随业务回包返回。
   */
  debug?: any;
  /**
   * @remarks
   * 按 mimeType 区分文字、卡片和状态栏消息。累计文字快照使用新内容替换。同一状态栏模块按 metaData.sourceSeq 更新。
   * 
   * @example
   * [{"mimeType":"multi_load/iframe","status":"complete","content":"你好"}]
   */
  messages?: VoiceEventPayloadOutputResponseDataMessages[];
  /**
   * @remarks
   * 可含 inputResources 等资源处理结果。
   * 
   * @example
   * {"inputResources":[]}
   */
  extraInfo?: VoiceEventPayloadOutputResponseDataExtraInfo;
  static names(): { [key: string]: string } {
    return {
      debug: 'debug',
      messages: 'messages',
      extraInfo: 'extraInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'any',
      messages: { 'type': 'array', 'itemType': VoiceEventPayloadOutputResponseDataMessages },
      extraInfo: VoiceEventPayloadOutputResponseDataExtraInfo,
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutputResponse extends $dara.Model {
  /**
   * @remarks
   * 用于关联此 Agent 响应的业务请求。
   * 
   * @example
   * voice-request-001
   */
  requestId?: string;
  /**
   * @remarks
   * 与外层语音帧的 communication 独立，来自对应 Chat 响应。
   * 
   * @example
   * {"requestId":"voice-request-001","sessionId":"voice-session-001","appId":"your-app","responseId":1}
   */
  communication?: VoiceEventPayloadOutputResponseCommunication;
  /**
   * @remarks
   * 可携带正文快照、图文卡片、过程消息和业务扩展。
   * 
   * @example
   * {"messages":[{"mimeType":"multi_load/iframe","status":"complete","content":"你好"}]}
   */
  data?: VoiceEventPayloadOutputResponseData;
  /**
   * @remarks
   * 该 Agent 响应中的业务状态。
   * 
   * @example
   * 0
   */
  errorCode?: any;
  /**
   * @remarks
   * 与 errorCode 对应的说明。
   */
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      communication: 'communication',
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      communication: VoiceEventPayloadOutputResponseCommunication,
      data: VoiceEventPayloadOutputResponseData,
      errorCode: 'any',
      errorMsg: 'string',
    };
  }

  validate() {
    if(this.communication && typeof (this.communication as any).validate === 'function') {
      (this.communication as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutputSentence extends $dara.Model {
  /**
   * @remarks
   * TTS 句子事件返回的整数索引，同一句的多个事件共用该值，用于关联随后音频；不能作为整轮完成标记。
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * 仅 TTS sentence-begin 返回的待合成文本；sentence-synthesis/sentence-end 不保证存在。
   * 
   * @example
   * 你好
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * result-generated 的输出阶段，asr=语音识别、agent=Agent 回答、tts=语音合成。字段可用性取决于该阶段及 type。
   * 
   * @example
   * asr
   */
  stage?: string;
  /**
   * @remarks
   * 按阶段解释：Agent 完整帧=response、兼容状态进度=progress；TTS 为 sentence-begin/sentence-synthesis/sentence-end。ASR/兼容文字按 text/final 等字段解析；不要假设所有事件都返回全部 output 字段。
   * 
   * @example
   * response
   */
  type?: string;
  /**
   * @remarks
   * 仅 Agent type=response 返回，message 或 complete。complete 仅表示 Agent 流结束，可能仍需等待 TTS 音频；整轮结束以 task-finished 为准。
   * 
   * @example
   * message
   */
  event?: string;
  /**
   * @remarks
   * asr 阶段为最终转写。Agent 兼容终稿使用累计完整回答。
   * 
   * @example
   * 你好
   */
  text?: string;
  /**
   * @remarks
   * 仅兼容增量事件返回，使用完整 response 的客户端可以忽略本字段。
   * 
   * @example
   * 你好
   */
  delta?: string;
  /**
   * @remarks
   * ASR 最终转写及兼容 Agent 终稿为 true，兼容 Agent 文字增量为 false。
   * 
   * @example
   * true
   */
  final?: boolean;
  /**
   * @remarks
   * type=progress 时返回状态栏消息批次，不拼接到正式回答。结构与 response.data.messages 中的状态栏消息一致。
   * 
   * @example
   * [{"mimeType":"bar/progress","status":"processing","content":"正在处理"}]
   */
  messages?: any[];
  /**
   * @remarks
   * 仅 Agent type=response 时返回，与 Chat 流式帧一致的响应对象。complete 可携带最终正文，也可以为 {}；还可包含所用 Agent 的公开业务扩展。按字段说明读取正文、消息和错误信息。
   * 
   * @example
   * {"communication":{"requestId":"voice-request-001","sessionId":"voice-session-001","appId":"your-app","responseId":1},"data":{"messages":[{"mimeType":"multi_load/iframe","status":"complete","content":"你好，有什么可以帮助你？"}]},"errorCode":0,"errorMsg":""}
   */
  response?: VoiceEventPayloadOutputResponse;
  /**
   * @remarks
   * 仅 TTS 句子事件返回的关联对象；同一句 index 一致。sentence-synthesis 后紧跟该句的一帧二进制音频，按本轮 TTS format/sampleRate 解码；句子 text 仅在 sentence-begin 返回。
   * 
   * @example
   * {"index":0,"text":"你好"}
   */
  sentence?: VoiceEventPayloadOutputSentence;
  static names(): { [key: string]: string } {
    return {
      stage: 'stage',
      type: 'type',
      event: 'event',
      text: 'text',
      delta: 'delta',
      final: 'final',
      messages: 'messages',
      response: 'response',
      sentence: 'sentence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stage: 'string',
      type: 'string',
      event: 'string',
      text: 'string',
      delta: 'string',
      final: 'boolean',
      messages: { 'type': 'array', 'itemType': 'any' },
      response: VoiceEventPayloadOutputResponse,
      sentence: VoiceEventPayloadOutputSentence,
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    if(this.sentence && typeof (this.sentence as any).validate === 'function') {
      (this.sentence as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventPayload extends $dara.Model {
  /**
   * @remarks
   * 条件返回；task-started 时为 asr，task-failed 时为 request/asr/agent/tts。result-generated 的阶段在 payload.output.stage 中。
   * 
   * @example
   * asr
   */
  stage?: string;
  /**
   * @remarks
   * 仅 task-failed 返回。以本次事件的值为准，同一错误码可因失败阶段而不同。值为 true 时可考虑用新连接和新签名发起一轮交互。
   * 
   * @example
   * false
   */
  retryable?: boolean;
  /**
   * @remarks
   * 仅 result-generated 返回；读取 payload.output.stage 选择 asr、agent 或 tts，再按 type 选择该阶段的结构。Agent 完整响应和兼容进度可能同时出现；使用 response 作为回答主数据，避免与 text/delta/messages 重复拼接。
   * 
   * @example
   * {"stage":"asr","text":"你好","final":true}
   */
  output?: VoiceEventPayloadOutput;
  static names(): { [key: string]: string } {
    return {
      stage: 'stage',
      retryable: 'retryable',
      output: 'output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stage: 'string',
      retryable: 'boolean',
      output: VoiceEventPayloadOutput,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEventError extends $dara.Model {
  /**
   * @remarks
   * 业务错误码，可为字符串或数值，具体类型由所用 Agent 的公开接口约定确定。它与 header.errorCode 的语音阶段错误码含义不同，应分别处理。
   * 
   * @example
   * INVALID_REQUEST
   */
  code?: any;
  /**
   * @remarks
   * 公开业务错误说明，可读文本；不要依赖固定全文做程序判断。
   * 
   * @example
   * invalid request
   */
  message?: string;
  /**
   * @remarks
   * 失败调用的业务请求关联号，用于排查；不是握手平台 RequestId、订单号或实例 ID。
   * 
   * @example
   * voice-request-001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceEvent extends $dara.Model {
  /**
   * @remarks
   * 服务端事件头，包含事件类型及适用时的错误信息。
   * 
   * @example
   * {"event":"task-started"}
   */
  header?: VoiceEventHeader;
  /**
   * @remarks
   * 服务端事件与当前语音交互的关联信息。
   * 
   * @example
   * {"requestId":"voice-request-001"}
   */
  communication?: VoiceEventCommunication;
  /**
   * @remarks
   * 事件数据，按 header.event 区分。task-started 有 stage；result-generated 有 output；task-failed 有 stage/retryable；heartbeat 和 task-finished 的 payload 为 {}。字段未出现不等于其值为 0 或 false。
   * 
   * @example
   * {"stage":"asr"}
   */
  payload?: VoiceEventPayload;
  /**
   * @remarks
   * 可选的业务错误详情。发生业务失败时可返回，与 header 中的语音阶段错误信息配合处理；成功事件省略。
   * 
   * @example
   * {"code":"INVALID_REQUEST","message":"invalid request","requestId":"voice-request-001"}
   */
  error?: VoiceEventError;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      communication: 'communication',
      payload: 'payload',
      error: 'error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: VoiceEventHeader,
      communication: VoiceEventCommunication,
      payload: VoiceEventPayload,
      error: VoiceEventError,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.communication && typeof (this.communication as any).validate === 'function') {
      (this.communication as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

