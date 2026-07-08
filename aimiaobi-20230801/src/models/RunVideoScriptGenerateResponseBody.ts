// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoScriptGenerateResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ScriptNumberExceed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the call fails.
   * 
   * @example
   * 脚本篇数超限
   */
  errorMessage?: string;
  /**
   * @remarks
   * The event name.
   * 
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 400
   */
  statusCode?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * b057f2fa-2277-477b-babf-cbc062307828
   */
  taskId?: string;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      statusCode: 'number',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoScriptGenerateResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * The text generation result.
   * 
   * @example
   * 大家好，我是[xxx]。今天带大家走进黄山，感受奇松、怪石、云海、温泉的绝美风光。首站迎客松，800年历史，枝干如臂，热情迎接每一位游客。接着登光明顶，360度全景尽收眼底。再探秘西海大峡谷，体验原始自然的震撼。最后，在温泉中放松身心，享受旅途的美好。希望这次旅行能给你留下难忘的记忆。我是[你的名字]，感谢观看，我们下次再见！","91522b25a4f440189320c9ede8ae6c85":"大家好，我是[您的名字]，今天带大家探索黄山的奇妙之旅。首先，我们将见到黄山的象征——迎客松，感受它800年的历史与欢迎。随后攀登光明顶，迎接壮丽的日出；漫步西海大峡谷，体验险峻之美；最后，在温泉中放松身心。希望这次旅行能让你爱上黄山。谢谢观看！","1c23af4a899e4b908bdcffa7d8d0ddc9":"大家好，欢迎来到黄山！这里以奇松、怪石、云海、温泉四绝闻名。从云谷寺开始，感受古朴氛围；挑战百步云梯，体验攀登乐趣；漫步西海大峡谷，领略壮丽景色；最后在玉屏楼迎接日出，享受心灵的宁静。希望这次旅行给你留下美好回忆！
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class RunVideoScriptGenerateResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * The number of tokens used for the input.
   * 
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of tokens for the output.
   * 
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoScriptGenerateResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * The output content object.
   */
  output?: RunVideoScriptGenerateResponseBodyPayloadOutput;
  /**
   * @remarks
   * The token usage.
   */
  usage?: RunVideoScriptGenerateResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunVideoScriptGenerateResponseBodyPayloadOutput,
      usage: RunVideoScriptGenerateResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoScriptGenerateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates a normal response. This field is returned when the \\`Content-Type\\` is \\`json\\`.
   * 
   * @example
   * NoPermission
   */
  code?: string;
  /**
   * @remarks
   * The response header.
   */
  header?: RunVideoScriptGenerateResponseBodyHeader;
  /**
   * @remarks
   * The HTTP status code. This field is returned when the \\`Content-Type\\` is \\`json\\`.
   * 
   * @example
   * 403
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The error description. This field is returned when the \\`Content-Type\\` is \\`json\\`.
   * 
   * @example
   * You are not authorized to perform this action.
   */
  message?: string;
  /**
   * @remarks
   * The response body.
   */
  payload?: RunVideoScriptGenerateResponseBodyPayload;
  /**
   * @remarks
   * The unique ID of the request. This field is returned when the \\`Content-Type\\` is \\`json\\`.
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\` indicates success. \\`false\\` indicates failure. This field is returned when the \\`Content-Type\\` is \\`json\\`.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      header: 'Header',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      payload: 'Payload',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      header: RunVideoScriptGenerateResponseBodyHeader,
      httpStatusCode: 'string',
      message: 'string',
      payload: RunVideoScriptGenerateResponseBodyPayload,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
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

