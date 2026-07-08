// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTitleGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @remarks
   * Error code message.
   * 
   * @example
   * xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * SSE event.
   * 
   * @example
   * task-failed
   */
  event?: string;
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
   * Status code.
   * 
   * @example
   * 400
   */
  statusCode?: number;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 50a1cc8e-717e-4a2b-a76b-dc9734a8564b
   */
  taskId?: string;
  /**
   * @remarks
   * Full link ID.
   * 
   * @example
   * 0a3d448f17000139741898287e0eb3
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

export class RunTitleGenerationResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Article title.
   * 
   * @example
   * xxx
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

export class RunTitleGenerationResponseBodyPayloadUsage extends $dara.Model {
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

export class RunTitleGenerationResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Outputs.
   */
  output?: RunTitleGenerationResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage.
   */
  usage?: RunTitleGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunTitleGenerationResponseBodyPayloadOutput,
      usage: RunTitleGenerationResponseBodyPayloadUsage,
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

export class RunTitleGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * AccessForbid
   */
  code?: string;
  /**
   * @remarks
   * Response header.
   */
  header?: RunTitleGenerationResponseBodyHeader;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Error description.
   * 
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @remarks
   * Response body.
   */
  payload?: RunTitleGenerationResponseBodyPayload;
  /**
   * @remarks
   * Unique request identifier.
   * 
   * @example
   * 94512A33-8EC1-5452-A793-5C91F18ED2F0
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful: true for success, false for failure.
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
      header: RunTitleGenerationResponseBodyHeader,
      httpStatusCode: 'string',
      message: 'string',
      payload: RunTitleGenerationResponseBodyPayload,
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

