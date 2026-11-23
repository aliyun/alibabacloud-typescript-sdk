// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChatResponseBodyAudioFrames extends $dara.Model {
  /**
   * @remarks
   * 音频处理失败时可能提供。
   * 
   * @example
   * DOWNSTREAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * 音频帧的 Base64 数据。末帧的值可以为空字符串。
   * 
   * @example
   * SUQz
   */
  data?: string;
  /**
   * @remarks
   * true 表示本路音频的最后一帧。
   */
  last?: boolean;
  /**
   * @remarks
   * 音频处理失败时按实际错误返回。
   * 
   * @example
   * 语音合成暂不可用
   */
  message?: string;
  /**
   * @remarks
   * 用于关联音频错误与本次业务请求。
   * 
   * @example
   * req-example-001
   */
  requestId?: string;
  /**
   * @remarks
   * audio 表示音频，error 表示处理失败。
   * 
   * @example
   * audio
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      last: 'last',
      message: 'message',
      requestId: 'requestId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      last: 'boolean',
      message: 'string',
      requestId: 'string',
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

export class ChatResponseBodyCommunication extends $dara.Model {
  /**
   * @remarks
   * 当前响应所属的业务请求 ID，返回时与请求中的 communication.requestId 一致。
   * 
   * @example
   * req-example-001
   */
  requestId?: string;
  /**
   * @remarks
   * 可选整数，业务响应帧标识；网关多帧聚合可为0。不代表可对所有网络帧排序的序列号，也不是会话或请求ID。
   * 
   * @example
   * 1
   */
  responseId?: number;
  /**
   * @remarks
   * 当前响应所属的客户会话 ID。
   * 
   * @example
   * session-example-001
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      responseId: 'responseId',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseId: 'number',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyDataExtraInfoInputResources extends $dara.Model {
  /**
   * @remarks
   * 从零开始，按原始 content 数组计数，包含文本块。
   * 
   * @example
   * 1
   */
  contentIndex?: number;
  /**
   * @remarks
   * 有文件名时返回。
   * 
   * @example
   * cat.png
   */
  fileName?: string;
  /**
   * @remarks
   * 本轮输入资源的标识，用于关联对应资源。
   * 
   * @example
   * ws_example_001
   */
  resourceId?: string;
  /**
   * @remarks
   * 原始内容块对应的资源类型。
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * 本轮输入资源的可访问地址。
   * 
   * @example
   * https://cdn.example.com/uploads/cat.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentIndex: 'contentIndex',
      fileName: 'fileName',
      resourceId: 'resourceId',
      type: 'type',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentIndex: 'number',
      fileName: 'string',
      resourceId: 'string',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @remarks
   * 仅在响应提供本轮输入资源处理结果时返回。
   */
  inputResources?: ChatResponseBodyDataExtraInfoInputResources[];
  static names(): { [key: string]: string } {
    return {
      inputResources: 'inputResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputResources: { 'type': 'array', 'itemType': ChatResponseBodyDataExtraInfoInputResources },
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

export class ChatResponseBodyDataMessagesMetaDataMultiLoad extends $dara.Model {
  /**
   * @remarks
   * 可选，结构随卡片类型变化。图文卡片可含资源列表。
   * 
   * @example
   * {"list":[{"imageUrl":"https://images.example.com/cat.png"}]}
   */
  content?: any;
  /**
   * @remarks
   * 与正文中的卡片引用关联。相同标识代表同一卡片。
   * 
   * @example
   * image_waterfall_1
   */
  sourceSeq?: string;
  /**
   * @remarks
   * 按类型选择卡片展示组件。
   * 
   * @example
   * image_waterfall
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      sourceSeq: 'sourceSeq',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'any',
      sourceSeq: 'string',
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

export class ChatResponseBodyDataMessagesMetaData extends $dara.Model {
  /**
   * @remarks
   * 用于展示当前过程的上下文标题。处理状态见对应消息的 status。
   * 
   * @example
   * 问题分析
   */
  barTitle?: string;
  /**
   * @remarks
   * 数据结构随模块类型变化。bar/progress 中，思考过程使用 body，工具和结束提示使用 title，过程中检索资料或图片分别使用 docs、images。完整键和示例见接入说明。
   * 
   * @example
   * {"body":"正在分析问题","status":"processing"}
   */
  content?: any;
  /**
   * @remarks
   * 与正文关联的结构化内容列表，例如图文卡片，按消息类型返回。
   */
  multiLoad?: ChatResponseBodyDataMessagesMetaDataMultiLoad[];
  /**
   * @remarks
   * 按本次请求和 sourceSeq 关联同一模块的更新。新的完整快照替换旧快照。
   * 
   * @example
   * thinking-1
   */
  sourceSeq?: string;
  /**
   * @remarks
   * 例如 bar_thinking、bar_tool、bar_think_finish、bar_ref_source_inline 或 bar_image_inline。按实际类型选择展示组件。
   * 
   * @example
   * bar_thinking
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      barTitle: 'barTitle',
      content: 'content',
      multiLoad: 'multiLoad',
      sourceSeq: 'sourceSeq',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      barTitle: 'string',
      content: 'any',
      multiLoad: { 'type': 'array', 'itemType': ChatResponseBodyDataMessagesMetaDataMultiLoad },
      sourceSeq: 'string',
      type: 'string',
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

export class ChatResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * 可选多态内容，按 mimeType 解析。multi_load/iframe 常为累计文本快照；后帧更新当前内容。过程、卡片按各自类型处理，不把任意 content 强转字符串。
   * 
   * @example
   * 图片如下[(image_waterfall_1)]
   */
  content?: any;
  /**
   * @remarks
   * 可选、可扩展的消息元数据。正文消息可通过 multiLoad 提供卡片；过程消息可按类型包含 sourceSeq、type、barTitle、content，用于关联和展示相应内容。
   */
  metaData?: ChatResponseBodyDataMessagesMetaData;
  /**
   * @remarks
   * 消息类型，按此值解析正文、进度及可选信号和追问。常见类型见接入说明。
   * 
   * @example
   * multi_load/iframe
   */
  mimeType?: string;
  /**
   * @remarks
   * 可选消息状态，如 processing、complete；complete 只结束该消息，不替代 SSE event:complete。HTTP200 或单条消息complete都不足以判定整次流成功。
   * 
   * @example
   * complete
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      metaData: 'metaData',
      mimeType: 'mimeType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'any',
      metaData: ChatResponseBodyDataMessagesMetaData,
      mimeType: 'string',
      status: 'string',
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

export class ChatResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 可选业务调试信息，可省略或为 null。在支持的联调场景中可能包含 intentLabel；具体结构和返回时机按实际响应读取。
   * 
   * @example
   * {"intentLabel":"image_search"}
   */
  debug?: any;
  /**
   * @remarks
   * 业务响应附带的可选扩展信息。inputResources 是本轮输入资源的处理结果数组，元素可含 contentIndex、type、resourceId、url 和 fileName。contentIndex 是原始消息 content 数组的零起始下标，文本块也计数。
   */
  extraInfo?: ChatResponseBodyDataExtraInfo;
  /**
   * @remarks
   * 可选数组，可能含多条正文、过程或卡片消息。multi_load/iframe 文本为累计快照，不将每帧全文重复拼接；不要固定只取 messages[0]。
   */
  messages?: ChatResponseBodyDataMessages[];
  static names(): { [key: string]: string } {
    return {
      debug: 'debug',
      extraInfo: 'extraInfo',
      messages: 'messages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'any',
      extraInfo: ChatResponseBodyDataExtraInfo,
      messages: { 'type': 'array', 'itemType': ChatResponseBodyDataMessages },
    };
  }

  validate() {
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChatResponseBodyError extends $dara.Model {
  /**
   * @remarks
   * 可选的错误码，可为字符串或数值，表示服务或 Agent 的具体错误类型。程序应按 code 判断，不依赖 message 全文；数值业务码 500 不代表 HTTP 状态一定为 500。
   * 
   * @example
   * INVALID_REQUEST
   */
  code?: any;
  /**
   * @remarks
   * 业务错误的说明文本。
   * 
   * @example
   * 请求参数无效
   */
  message?: string;
  /**
   * @remarks
   * 失败调用的业务请求关联号，用于定位问题。
   * 
   * @example
   * req-example-001
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

export class ChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * 开通 HTTP 音频输出后，完整 JSON 可在 audioFrames 中返回音频帧。type 为 audio 时，data 为 Base64 音频数据，last 为布尔末帧标识。type 为 error 时可含 code、requestId 和 message。无音频时可为空或省略。
   */
  audioFrames?: ChatResponseBodyAudioFrames[];
  /**
   * @remarks
   * 用于关联响应帧与原业务请求和会话的信息。
   */
  communication?: ChatResponseBodyCommunication;
  /**
   * @remarks
   * 可选业务对象，字段按实际响应出现。单帧 HTTP 音频响应的 data 也可能直接为 Base64 字符串；多态音频完整形状见接口说明。客户端不得假定固定字段全部存在。
   */
  data?: ChatResponseBodyData;
  /**
   * @remarks
   * 可选错误对象，出现时按失败处理。准备阶段可用错误HTTP状态+JSON返回；已识别业务错误可保留HTTP200，SSE首帧提交后用错误终帧表达。优先结合HTTP X-Request-Id关联。
   */
  error?: ChatResponseBodyError;
  /**
   * @remarks
   * 可选字符串或数值，成功业务响应可为数字0；非零或失败码按错误处理。未返回本字段不自动判失败，须综合 error、HTTP 和流终帧。
   * 
   * @example
   * 0
   */
  errorCode?: any;
  /**
   * @remarks
   * 与响应顶层业务状态码对应的说明。
   * 
   * @example
   * success
   */
  errorMsg?: string;
  /**
   * @remarks
   * 响应顶层可选的业务请求关联号。POP 请求号由响应头 x-acs-request-id 提供。
   * 
   * @example
   * req-example-001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      audioFrames: 'audioFrames',
      communication: 'communication',
      data: 'data',
      error: 'error',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioFrames: { 'type': 'array', 'itemType': ChatResponseBodyAudioFrames },
      communication: ChatResponseBodyCommunication,
      data: ChatResponseBodyData,
      error: ChatResponseBodyError,
      errorCode: 'any',
      errorMsg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audioFrames)) {
      $dara.Model.validateArray(this.audioFrames);
    }
    if(this.communication && typeof (this.communication as any).validate === 'function') {
      (this.communication as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
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

