// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTextPolishingResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * The SSE event. \\`task-started\\`: started. \\`task-finished\\`: finished. \\`task-failed\\`: failed.
   * 
   * @example
   * task-started
   */
  event?: string;
  /**
   * @remarks
   * Parent session ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * End-to-end trace ID.
   * 
   * @example
   * 全链路ID
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      originSessionId: 'OriginSessionId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      originSessionId: 'string',
      sessionId: 'string',
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

export class RunTextPolishingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Text generation result.
   * 
   * @example
   * 文本生成结果
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

export class RunTextPolishingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of tokens used for input.
   * 
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @remarks
   * Number of tokens used for output.
   * 
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total number of tokens used for this call.
   * 
   * @example
   * 2
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

export class RunTextPolishingResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output.
   */
  output?: RunTextPolishingResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token consumption.
   */
  usage?: RunTextPolishingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunTextPolishingResponseBodyPayloadOutput,
      usage: RunTextPolishingResponseBodyPayloadUsage,
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

export class RunTextPolishingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response header.
   */
  header?: RunTextPolishingResponseBodyHeader;
  /**
   * @remarks
   * Response body.
   */
  payload?: RunTextPolishingResponseBodyPayload;
  /**
   * @remarks
   * Unique request identifier.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunTextPolishingResponseBodyHeader,
      payload: RunTextPolishingResponseBodyPayload,
      requestId: 'string',
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

