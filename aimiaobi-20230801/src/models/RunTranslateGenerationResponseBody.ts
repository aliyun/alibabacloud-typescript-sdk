// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTranslateGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The Server-Sent Events (SSE) event.
   * 
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 91C2B2B8-7D12-4A8D-A724-1E576D30C096
   */
  sessionId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 0abb781d17146157564845243e20b5
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

export class RunTranslateGenerationResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * The text generation result.
   * 
   * @example
   * xx
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

export class RunTranslateGenerationResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * The number of tokens used for the input.
   * 
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of tokens used for the output.
   * 
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens used in the call.
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

export class RunTranslateGenerationResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output data
   */
  output?: RunTranslateGenerationResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage information
   */
  usage?: RunTranslateGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunTranslateGenerationResponseBodyPayloadOutput,
      usage: RunTranslateGenerationResponseBodyPayloadUsage,
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

export class RunTranslateGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response header
   */
  header?: RunTranslateGenerationResponseBodyHeader;
  /**
   * @remarks
   * Response body
   */
  payload?: RunTranslateGenerationResponseBodyPayload;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * DA021073-17CE-5CCF-9FEB-93226C766887
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
      header: RunTranslateGenerationResponseBodyHeader,
      payload: RunTranslateGenerationResponseBodyPayload,
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

