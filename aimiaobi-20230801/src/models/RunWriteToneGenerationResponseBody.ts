// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWriteToneGenerationResponseBodyHeader extends $dara.Model {
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
   * Error message returned when the call fails.
   * 
   * @example
   * xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * Server-sent event (SSE).
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
   * F1953EE6-157C-40DC-BBF1-87C98AC27C51
   */
  sessionId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * F1953EE6-157C-40DC-BBF1-87C98AC27C51
   */
  taskId?: string;
  /**
   * @remarks
   * End-to-end trace ID.
   * 
   * @example
   * F1953EE6-157C-40DC-BBF1-87C98AC27C51
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
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

export class RunWriteToneGenerationResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Generated text.
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

export class RunWriteToneGenerationResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of input tokens used.
   * 
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @remarks
   * Number of output tokens used.
   * 
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total number of tokens used in this call.
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

export class RunWriteToneGenerationResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output data.
   */
  output?: RunWriteToneGenerationResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage.
   */
  usage?: RunWriteToneGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunWriteToneGenerationResponseBodyPayloadOutput,
      usage: RunWriteToneGenerationResponseBodyPayloadUsage,
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

export class RunWriteToneGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response headers.
   */
  header?: RunWriteToneGenerationResponseBodyHeader;
  /**
   * @remarks
   * Response body.
   */
  payload?: RunWriteToneGenerationResponseBodyPayload;
  /**
   * @remarks
   * Unique request ID.
   * 
   * @example
   * FB698445-61DA-5361-BF73-1C5F1157E888
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
      header: RunWriteToneGenerationResponseBodyHeader,
      payload: RunWriteToneGenerationResponseBodyPayload,
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

