// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAiHelperWritingResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 参数错误
   */
  errorMessage?: string;
  /**
   * @remarks
   * The event type.
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
   * session-xxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-xxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * Trace ID
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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

export class RunAiHelperWritingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * The generated text.
   * 
   * @example
   * 人工智能正在深刻改变我们的生活...
   */
  text?: string;
  /**
   * @remarks
   * The writing parameters for the AI-assisted writing.
   * 
   * @example
   * {"wordCount": "1000"}
   */
  writingParams?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      writingParams: 'WritingParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      writingParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.writingParams) {
      $dara.Model.validateMap(this.writingParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAiHelperWritingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 256
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 1024
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 1280
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

export class RunAiHelperWritingResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * The output content.
   */
  output?: RunAiHelperWritingResponseBodyPayloadOutput;
  /**
   * @remarks
   * The token usage.
   */
  usage?: RunAiHelperWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunAiHelperWritingResponseBodyPayloadOutput,
      usage: RunAiHelperWritingResponseBodyPayloadUsage,
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

export class RunAiHelperWritingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The Server-Sent Events (SSE) response header.
   */
  header?: RunAiHelperWritingResponseBodyHeader;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The response payload.
   */
  payload?: RunAiHelperWritingResponseBodyPayload;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
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
      header: RunAiHelperWritingResponseBodyHeader,
      httpStatusCode: 'string',
      message: 'string',
      payload: RunAiHelperWritingResponseBodyPayload,
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

