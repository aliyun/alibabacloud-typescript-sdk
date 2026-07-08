// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunQuickWritingResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * SSE event. task-started: started, task-finished: finished, task-failed: failed.
   * 
   * @example
   * task-started
   */
  event?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * HTTP response code
   * 
   * @example
   * 400
   */
  statusCode?: number;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Trace ID
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

export class RunQuickWritingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Text generation result
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

export class RunQuickWritingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of input tokens used
   * 
   * @example
   * 78
   */
  inputTokens?: number;
  /**
   * @remarks
   * Number of output tokens
   * 
   * @example
   * 34
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total number of tokens
   * 
   * @example
   * 38
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

export class RunQuickWritingResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output
   */
  output?: RunQuickWritingResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage information
   */
  usage?: RunQuickWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunQuickWritingResponseBodyPayloadOutput,
      usage: RunQuickWritingResponseBodyPayloadUsage,
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

export class RunQuickWritingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the response package has ended.
   * 
   * @example
   * false
   */
  end?: boolean;
  /**
   * @remarks
   * Response header
   */
  header?: RunQuickWritingResponseBodyHeader;
  /**
   * @remarks
   * Response body
   */
  payload?: RunQuickWritingResponseBodyPayload;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunQuickWritingResponseBodyHeader,
      payload: RunQuickWritingResponseBodyPayload,
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

