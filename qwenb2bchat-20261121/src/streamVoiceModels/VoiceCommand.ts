// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VoiceCommandCommunication extends $dara.Model {
  /**
   * @remarks
   * run-task 必填，本轮客户业务请求 ID，匹配 [A-Za-z0-9._:-]{1,128}。不能使用 gw-ingress- 保留前缀。下一轮需新建连接，建议换一个业务 ID。复用 ID 仍会执行新一轮；finish-audio/cancel-task 沿用当前轮次且不另传 communication。与可选握手 X-Request-Id 不同。
   * 
   * @example
   * voice-request-001
   */
  requestId?: string;
  /**
   * @remarks
   * 每个 run-task 必填。客户会话 ID，匹配 [A-Za-z0-9._-]{1,128}，同一会话续聊时复用；用于会话历史关联，不是订单号或业务请求 ID。
   * 
   * @example
   * voice-session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * 每个 run-task 必填的业务应用 ID，不从握手 query 读取。须符合业务网关凭据的应用绑定或委托配置；每条连接只接受一个 run-task；下一轮需新建连接，即使复用 sessionId 也要提供本字段。非空，最多 128 个 UTF-16 代码单元，无首尾空白、控制字符或非法 Unicode。
   * 
   * @example
   * your-app
   */
  appId?: string;
  /**
   * @remarks
   * 每个 run-task 必填，区分大小写，只能是 CLIENT 或 GATEWAY，无默认值。须与该会话首次调用一致。CLIENT 历史放在 payload.input.history；GATEWAY 由服务端托管，不接受客户提交非空历史。
   * 
   * @example
   * GATEWAY
   */
  historyOwner?: string;
  /**
   * @remarks
   * 可选，无默认用户。省略时匿名，不启用用户记忆；即使凭据绑定固定用户也不要求必须传入。若显式传入，须符合固定绑定；必须为非空字符串，最多 256 个 UTF-16 代码单元，无首尾空白、控制字符或非法 Unicode。不能为 null。
   * 
   * @example
   * customer-user-001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sessionId: 'sessionId',
      appId: 'appId',
      historyOwner: 'historyOwner',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionId: 'string',
      appId: 'string',
      historyOwner: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommandDataMessages extends $dara.Model {
  /**
   * @remarks
   * 本轮消息的角色，传 user。CLIENT 托管的历史消息放在 payload.input.history。
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * 纯文本可直接传 JSON 字符串；多个内容块按照输入顺序组成数组。文本块仅含 type=text 和 text。图片块填写 type=image_url；imageUrl 可直接传字符串，也可传仅含 url 的对象。imageUrl.url 支持服务可访问的 HTTPS 图片 URL 或完整 Base64 Data URL，例如 data:image/png;base64, 后接 PNG 文件的标准 Base64，JPEG 使用 data:image/jpeg;base64, 前缀。前缀所声明的 MIME 应与图片内容一致。 每个块只含 type 和对应内容字段，引用对象只含 url；assistant 历史只传文本。 本轮 user 消息的 content 可省略或传 null，此时仍以语音转写作为本轮内容；有值时可传字符串或所用 Agent 支持的内容块数组。语音音频使用独立的 WSS 二进制帧。 已开通媒体的通用引用字段包括 image、fileUrl、file、audioRef、audio、videoRef、video。使用与 type 对应的字段。对象形式只包含 url。
   * 
   * @example
   * 请结合我的语音回答。
   */
  content?: any;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
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

export class VoiceCommandData extends $dara.Model {
  /**
   * @remarks
   * run-task 可选，省略或空数组表示没有附加图文消息。传入时只包含本轮一条 user 消息，历史放入 payload.input.history；不要重复提交音频转写。
   * 
   * @example
   * [{"role":"user","content":"请结合我的语音回答。"}]
   */
  messages?: VoiceCommandDataMessages[];
  static names(): { [key: string]: string } {
    return {
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': VoiceCommandDataMessages },
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommandParams extends $dara.Model {
  /**
   * @remarks
   * 语音使用服务已配置的 Agent 路由，请省略此字段。
   */
  directAgent?: string;
  /**
   * @remarks
   * 可选的 Agent 参数，无统一网关默认值。对支持此参数的 Agent，使用 JSON 字符串 "true" 开启。网关按原始 JSON 类型转发，其他取值和省略行为按所接入 Agent 的约定。
   * 
   * @example
   * true
   */
  deepthink?: string;
  static names(): { [key: string]: string } {
    return {
      directAgent: 'directAgent',
      deepthink: 'deepthink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directAgent: 'string',
      deepthink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommandHeader extends $dara.Model {
  /**
   * @remarks
   * 所有控制帧必填，区分大小写。run-task 开始一轮，收到 task-started 后可上传音频。finish-audio 结束本轮上行音频发送，继续接收下行事件；cancel-task 取消本轮。Ping/Pong 使用 WebSocket 原生控制帧。
   * 
   * This parameter is required.
   * 
   * @example
   * run-task
   */
  action?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommandPayloadParametersAsr extends $dara.Model {
  /**
   * @remarks
   * ASR 必填字符串，无默认值；支持 pcm、wav 或 opus，具体值须符合租户许可。音频实际编码须与声明一致，不能用文件后缀代替编码。
   * 
   * @example
   * pcm
   */
  format?: string;
  /**
   * @remarks
   * ASR 必填正整数，单位 Hz，无默认值；须为租户许可的采样率并与实际音频一致，例如 16000。
   * 
   * @example
   * 16000
   */
  sampleRate?: number;
  /**
   * @remarks
   * 可省略，默认空数组。显式传入时为字符串数组，最多 4 项，每项为非空白字符串且最多 16 个 UTF-16 代码单元。用于辅助识别。
   * 
   * @example
   * ["zh"]
   */
  languageHints?: string[];
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      sampleRate: 'sampleRate',
      languageHints: 'languageHints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      sampleRate: 'number',
      languageHints: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.languageHints)) {
      $dara.Model.validateArray(this.languageHints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommandPayloadParametersTts extends $dara.Model {
  /**
   * @remarks
   * 可选字符串，仅接受 mp3 或 pcm。省略时默认 mp3，显式 null 会被拒绝。客户端按本轮选定的格式解码下行音频。
   * 
   * @example
   * mp3
   */
  format?: string;
  /**
   * @remarks
   * 可选整数，单位 Hz，允许 8000、16000、22050、24000、44100、48000。省略或传 null 时为 22050。客户端按本轮格式及采样率解码音频。
   * 
   * @example
   * 22050
   */
  sampleRate?: number;
  /**
   * @remarks
   * 可选非空白字符串，最多 128 个 UTF-16 代码单元，须为租户许可的音色。省略或传 null 时使用租户默认音色。
   * 
   * @example
   * <租户已许可的音色>
   */
  voice?: string;
  /**
   * @remarks
   * 可选整数，范围 0–100（含端点）。省略或传 null 时为 50。
   * 
   * @example
   * 50
   */
  volume?: number;
  /**
   * @remarks
   * 可选数值，表示语速倍率，范围 0.5–2.0（含端点）。省略时为 1.0，显式 null 会被拒绝。
   * 
   * @example
   * 1.0
   */
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      sampleRate: 'sampleRate',
      voice: 'voice',
      volume: 'volume',
      rate: 'rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      sampleRate: 'number',
      voice: 'string',
      volume: 'number',
      rate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommandPayloadParameters extends $dara.Model {
  /**
   * @remarks
   * 普通 run-task 必填对象；format 和 sampleRate 必填且无默认值，languageHints 可选。上传与这些参数匹配的音频二进制帧，不使用 Base64 JSON 音频字段。
   * 
   * @example
   * {"format":"pcm","sampleRate":16000}
   */
  asr?: VoiceCommandPayloadParametersAsr;
  /**
   * @remarks
   * 可选对象，可省略或传 null，使用默认合成设置。默认 format=mp3、sampleRate=22050、volume=50、rate=1.0，voice 使用租户默认音色；显式字段仍须符合租户许可。
   * 
   * @example
   * {"format":"mp3","sampleRate":22050,"volume":50,"rate":1.0}
   */
  tts?: VoiceCommandPayloadParametersTts;
  static names(): { [key: string]: string } {
    return {
      asr: 'asr',
      tts: 'tts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asr: VoiceCommandPayloadParametersAsr,
      tts: VoiceCommandPayloadParametersTts,
    };
  }

  validate() {
    if(this.asr && typeof (this.asr as any).validate === 'function') {
      (this.asr as any).validate();
    }
    if(this.tts && typeof (this.tts as any).validate === 'function') {
      (this.tts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommandPayloadInputContextContent extends $dara.Model {
  /**
   * @remarks
   * 上下文内容块必填字符串；user 消息固定 input_text，assistant 消息固定 text。
   * 
   * This parameter is required.
   * 
   * @example
   * input_text
   */
  type?: string;
  /**
   * @remarks
   * 上下文内容块必填的非空文本，用于辅助识别；计入该条消息合计 400 个 UTF-16 代码单元限制。
   * 
   * This parameter is required.
   * 
   * @example
   * 千问语音对话
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class VoiceCommandPayloadInputContext extends $dara.Model {
  /**
   * @remarks
   * 上下文条目必填字符串，只接受 user 或 assistant，区分大小写；assistant 必须紧跟同一轮 user。
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * 上下文条目必填的非空数组，同一条消息的各文本块按顺序合并后用于识别。
   * 
   * This parameter is required.
   * 
   * @example
   * [{"type":"input_text","text":"千问语音对话"}]
   */
  content?: VoiceCommandPayloadInputContextContent[];
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      content: { 'type': 'array', 'itemType': VoiceCommandPayloadInputContextContent },
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommandPayloadInputHistory extends $dara.Model {
  /**
   * @remarks
   * 历史条目必填字符串，只接受 user 或 assistant，按 user、assistant 成对交替并以 assistant 结束。
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * 纯文本可直接传 JSON 字符串；多个内容块按照输入顺序组成数组。文本块仅含 type=text 和 text。图片块填写 type=image_url；imageUrl 可直接传字符串，也可传仅含 url 的对象。imageUrl.url 支持服务可访问的 HTTPS 图片 URL 或完整 Base64 Data URL，例如 data:image/png;base64, 后接 PNG 文件的标准 Base64，JPEG 使用 data:image/jpeg;base64, 前缀。前缀所声明的 MIME 应与图片内容一致。 每个块只含 type 和对应内容字段，引用对象只含 url；assistant 历史只传文本。 历史条目必填，为非空字符串或非空内容块数组。user 历史支持文本/图片，assistant 历史只接受文本；内容块格式沿用 Chat。 CLIENT 历史 user 的图片可使用 type=image_url 或 image 对应形态；历史 assistant 只传文本。
   * 
   * This parameter is required.
   * 
   * @example
   * 你好
   */
  content?: any;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
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

export class VoiceCommandPayloadInput extends $dara.Model {
  /**
   * @remarks
   * 可选数组，省略为无 ASR 上下文。最多 10 条，user/assistant 各最多 5 条，assistant 必须紧跟 user。每条 content 文本块顺序合并后最多 400 个 UTF-16 代码单元。
   * 
   * @example
   * [{"role":"user","content":[{"type":"input_text","text":"千问语音对话"}]}]
   */
  context?: VoiceCommandPayloadInputContext[];
  /**
   * @remarks
   * CLIENT 模式可选历史数组，省略或空数组为无历史；仅含此前完整 user/assistant 对，交替并以 assistant 结束，不含本轮问题。GATEWAY 模式不能提交非空历史。本轮附加图文放 data.messages，音频走二进制帧。
   * 
   * @example
   * [{"role":"user","content":"你好"},{"role":"assistant","content":"你好，有什么可以帮助你？"}]
   */
  history?: VoiceCommandPayloadInputHistory[];
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      history: 'history',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: { 'type': 'array', 'itemType': VoiceCommandPayloadInputContext },
      history: { 'type': 'array', 'itemType': VoiceCommandPayloadInputHistory },
    };
  }

  validate() {
    if(Array.isArray(this.context)) {
      $dara.Model.validateArray(this.context);
    }
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommandPayload extends $dara.Model {
  /**
   * @remarks
   * run-task 必填字符串，固定为 audio，区分大小写，无默认值。
   * 
   * @example
   * audio
   */
  taskGroup?: string;
  /**
   * @remarks
   * run-task 必填字符串，固定为 voice，区分大小写，无默认值。
   * 
   * @example
   * voice
   */
  task?: string;
  /**
   * @remarks
   * 可选的保留字段，字符串格式为 [A-Za-z0-9._:-]{1,128}。当前不支持引用先前请求重试；即使值符合格式，也返回 RETRY_EXPIRED，不会重试音频或继续之前的任务。正常调用请省略，不要用于自动续传。
   * 
   * @example
   * previous-voice-request-001
   */
  retryOf?: string;
  /**
   * @remarks
   * 普通 run-task 必填对象，只包含 asr 和可选 tts。asr 无默认值；tts 可省略或 null，使用默认合成设置。
   * 
   * @example
   * {"asr":{"format":"pcm","sampleRate":16000}}
   */
  parameters?: VoiceCommandPayloadParameters;
  /**
   * @remarks
   * 可选对象，可省略或 null；只包含 context 和 history。context 辅助 ASR，history 是 Agent 业务历史，两者用途不同。
   * 
   * @example
   * {"context":[{"role":"user","content":[{"type":"input_text","text":"千问语音对话"}]}]}
   */
  input?: VoiceCommandPayloadInput;
  static names(): { [key: string]: string } {
    return {
      taskGroup: 'taskGroup',
      task: 'task',
      retryOf: 'retryOf',
      parameters: 'parameters',
      input: 'input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskGroup: 'string',
      task: 'string',
      retryOf: 'string',
      parameters: VoiceCommandPayloadParameters,
      input: VoiceCommandPayloadInput,
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VoiceCommand extends $dara.Model {
  /**
   * @remarks
   * 本轮语音交互的请求关联号、会话及应用和用户身份信息。
   * 
   * @example
   * {"appId":"your-app","requestId":"voice-request-001","sessionId":"voice-session-001","historyOwner":"GATEWAY"}
   */
  communication?: VoiceCommandCommunication;
  /**
   * @remarks
   * run-task 可选对象，无默认值；传入时只支持 messages，不能为 null。供 Agent 使用的业务输入，语音音频另通过二进制帧上传。
   * 
   * @example
   * {"messages":[{"role":"user","content":"请结合我的语音回答。"}]}
   */
  data?: VoiceCommandData;
  /**
   * @remarks
   * run-task 可选 JSON 对象，省略时无客户扩展。对支持深思的 Agent 使用字符串 deepthink；其他扩展由网关保留 JSON 值类型并转发，启用条件、取值及省略行为由所用 Agent 决定。语音请省略保留字段 directAgent。语音参数放在 payload.parameters，历史托管方放在 communication.historyOwner。语音固定关闭图文混排输出。
   * 
   * @example
   * {"deepthink":"true"}
   */
  params?: VoiceCommandParams;
  /**
   * @remarks
   * 控制帧头，包含客户端要执行的语音交互动作。
   * 
   * This parameter is required.
   * 
   * @example
   * {"action":"run-task"}
   */
  header?: VoiceCommandHeader;
  /**
   * @remarks
   * run-task 必须提供 taskGroup=audio、task=voice 和 parameters.asr（除兼容保留的 retryOf 分支，该分支当前不可用）。finish-audio/cancel-task 的 payload 可省略、为 null 或空对象。
   * 
   * @example
   * {"taskGroup":"audio","task":"voice","parameters":{"asr":{"format":"pcm","sampleRate":16000}}}
   */
  payload?: VoiceCommandPayload;
  static names(): { [key: string]: string } {
    return {
      communication: 'communication',
      data: 'data',
      params: 'params',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      communication: VoiceCommandCommunication,
      data: VoiceCommandData,
      params: VoiceCommandParams,
      header: VoiceCommandHeader,
      payload: VoiceCommandPayload,
    };
  }

  validate() {
    if(this.communication && typeof (this.communication as any).validate === 'function') {
      (this.communication as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

