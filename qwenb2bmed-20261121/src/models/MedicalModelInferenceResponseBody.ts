// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalModelInferenceResponseBodyAudioFrames extends $dara.Model {
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
   * AAEC
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
   * 音频生成失败
   */
  message?: string;
  /**
   * @remarks
   * 用于关联音频错误与本次业务请求。
   * 
   * @example
   * med-req-001
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

export class MedicalModelInferenceResponseBodyCommunication extends $dara.Model {
  /**
   * @remarks
   * 对应请求中的 communication.requestId，便于匹配并发请求。
   * 
   * @example
   * med-req-001
   */
  requestId?: string;
  /**
   * @remarks
   * 业务响应帧标识。一次完整 JSON 聚合时可为 0。SSE 按事件到达顺序处理，responseId 无需连续。
   * 
   * @example
   * 1
   */
  responseId?: number;
  /**
   * @remarks
   * 对应请求中的 communication.sessionId。
   * 
   * @example
   * med-session-001
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

export class MedicalModelInferenceResponseBodyDataExtraInfoInputResources extends $dara.Model {
  /**
   * @remarks
   * 原请求本轮 content 数组的索引，从 0 开始。文本块也占用索引。
   * 
   * @example
   * 1
   */
  contentIndex?: number;
  /**
   * @remarks
   * 上游提供时返回资源文件名。
   * 
   * @example
   * report.png
   */
  fileName?: string;
  /**
   * @remarks
   * 返回的输入资源标识，存在时可用于在业务记录中引用该资源。
   * 
   * @example
   * ws_123
   */
  resourceId?: string;
  /**
   * @remarks
   * 资源类型，例如图片引用。
   * 
   * @example
   * image
   */
  type?: string;
  /**
   * @remarks
   * 返回的资源访问地址。客户端按实际返回值使用。
   * 
   * @example
   * https://example.com/report.png
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

export class MedicalModelInferenceResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @remarks
   * 可选的资源信息数组，通过 contentIndex 与请求中的内容块对应。未返回资源信息时可省略。
   */
  inputResources?: MedicalModelInferenceResponseBodyDataExtraInfoInputResources[];
  static names(): { [key: string]: string } {
    return {
      inputResources: 'inputResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputResources: { 'type': 'array', 'itemType': MedicalModelInferenceResponseBodyDataExtraInfoInputResources },
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

export class MedicalModelInferenceResponseBodyDataMessagesMetaDataMultiLoad extends $dara.Model {
  /**
   * @remarks
   * 可选 JSON 内容，结构随实际附加项类型变化，不保证存在固定业务卡片。
   * 
   * @example
   * {"list":[{"image_url":"https://example.com/image.jpg","image_width":"800","image_height":"600"}]}
   */
  content?: any;
  /**
   * @remarks
   * 可选的附加项关联标识，存在时按实际值解释。
   * 
   * @example
   * image_waterfall_1
   */
  sourceSeq?: string;
  /**
   * @remarks
   * 可选的附加项类型，遇到未识别类型可忽略该附加项。
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

export class MedicalModelInferenceResponseBodyDataMessagesMetaData extends $dara.Model {
  /**
   * @remarks
   * 可选的消息附加标题，存在时按实际值使用。
   * 
   * @example
   * 问题分析中
   */
  barTitle?: string;
  /**
   * @remarks
   * 可选元数据内容，按实际返回类型解释。当前医疗模型不保证返回进度模块。
   * 
   * @example
   * {"body":"正在分析用户的问题。","status":"processing"}
   */
  content?: any;
  /**
   * @remarks
   * 为兼容已有响应形状保留的可选列表，可为空或省略；当前医疗模型不保证生成 Agent 业务卡片。
   */
  multiLoad?: MedicalModelInferenceResponseBodyDataMessagesMetaDataMultiLoad[];
  /**
   * @remarks
   * 可选的消息关联标识，存在时按实际值使用；本模型接口不保证返回。
   * 
   * @example
   * bar_thinking_1
   */
  sourceSeq?: string;
  /**
   * @remarks
   * 可选元数据类型，存在时按实际类型解释；不据此推断模型提供 Agent 过程能力。
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
      multiLoad: { 'type': 'array', 'itemType': MedicalModelInferenceResponseBodyDataMessagesMetaDataMultiLoad },
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

export class MedicalModelInferenceResponseBodyDataMessages extends $dara.Model {
  /**
   * @remarks
   * 消息正文，具体结构随 mimeType 变化。流式快照可能包含到当前为止的完整正文，收到新快照时更新原内容，避免重复拼接。
   * 
   * @example
   * 血红蛋白用于携带氧气。解读报告时可结合报告上的参考范围。
   */
  content?: any;
  /**
   * @remarks
   * 可选消息附加信息，按实际返回处理。当前医疗模型不承诺返回医疗 Agent 的检索进度、资料来源或业务卡片。
   */
  metaData?: MedicalModelInferenceResponseBodyDataMessagesMetaData;
  /**
   * @remarks
   * 该消息的内容类型，用于选择解析和展示方式。multi_load/iframe 表示正文；遇到应用不支持的类型，可跳过该消息。
   * 
   * @example
   * multi_load/iframe
   */
  mimeType?: string;
  /**
   * @remarks
   * 当前消息的处理状态。complete 表示这条消息已完成；流式请求是否结束以 SSE 结束事件为准。
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
      metaData: MedicalModelInferenceResponseBodyDataMessagesMetaData,
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

export class MedicalModelInferenceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 可选业务调试信息，可为任意 JSON 值（含 null）。是否返回、返回时机和内容按实际执行结果，不保证每轮或结束事件必有；不用于判断业务完成。
   * 
   * @example
   * {}
   */
  debug?: any;
  /**
   * @remarks
   * 响应的可选补充信息。使用图片等资源时可读取 inputResources 中返回的对应资源信息。
   */
  extraInfo?: MedicalModelInferenceResponseBodyDataExtraInfo;
  /**
   * @remarks
   * 当前响应中的消息列表。读取消息的 mimeType、status 和 content。完整正文可通过 mimeType=multi_load/iframe 且 status=complete 的消息取得。
   */
  messages?: MedicalModelInferenceResponseBodyDataMessages[];
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
      extraInfo: MedicalModelInferenceResponseBodyDataExtraInfo,
      messages: { 'type': 'array', 'itemType': MedicalModelInferenceResponseBodyDataMessages },
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

export class MedicalModelInferenceResponseBodyError extends $dara.Model {
  /**
   * @remarks
   * 业务错误码，客户端可根据此字段判断错误类型。
   * 
   * @example
   * INVALID_REQUEST
   */
  code?: any;
  /**
   * @remarks
   * 错误原因的文字说明，便于排查后调整请求。
   * 
   * @example
   * 请求参数无效
   */
  message?: string;
  /**
   * @remarks
   * 失败请求的业务请求 ID，联系支持时可一并提供。
   * 
   * @example
   * med-req-001
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

export class MedicalModelInferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * 可选的聚合音频帧列表。若返回音频，正常帧可含 type=audio、Base64 字符串 data 和布尔值 last，正常末帧的 data 可为空字符串。失败帧可含 type=error、code、requestId、last 和可选 message。各帧字段依类型而定。
   */
  audioFrames?: MedicalModelInferenceResponseBodyAudioFrames[];
  /**
   * @remarks
   * 关联原请求及会话的标识。
   */
  communication?: MedicalModelInferenceResponseBodyCommunication;
  /**
   * @remarks
   * 本次应答的业务数据，正文位于 messages。
   */
  data?: MedicalModelInferenceResponseBodyData;
  /**
   * @remarks
   * 可选的结构化错误信息。返回时读取 code、message 和 requestId。
   */
  error?: MedicalModelInferenceResponseBodyError;
  /**
   * @remarks
   * 业务状态码。0 表示业务成功，非 0 时结合 errorMsg 或 error 查看原因。流式还应处理 event:error。
   * 
   * @example
   * 0
   */
  errorCode?: any;
  /**
   * @remarks
   * 业务状态的文字说明。失败时用于辅助排查，程序分支应依据状态码。
   * 
   * @example
   * success
   */
  errorMsg?: string;
  /**
   * @remarks
   * 可选的业务请求 ID。联系支持时可同时提供响应头 x-acs-request-id 中的阿里云请求 ID。
   * 
   * @example
   * med-req-001
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
      audioFrames: { 'type': 'array', 'itemType': MedicalModelInferenceResponseBodyAudioFrames },
      communication: MedicalModelInferenceResponseBodyCommunication,
      data: MedicalModelInferenceResponseBodyData,
      error: MedicalModelInferenceResponseBodyError,
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

