// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunGenerateQuestionsResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * RateLimit
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message returned when the call fails.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * Event name
   * 
   * @example
   * finished
   */
  event?: string;
  /**
   * @remarks
   * Event description
   * 
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @remarks
   * Trace ID
   * 
   * @example
   * 0bc3b4b417362160345997589e5f6e
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
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
      eventInfo: 'string',
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

export class RunGenerateQuestionsResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Question content
   * 
   * @example
   * 问题1\\n问题2\\n问题3\\n
   */
  content?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunGenerateQuestionsResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of input tokens used
   * 
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @remarks
   * Number of output tokens
   * 
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total number of tokens
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

export class RunGenerateQuestionsResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Outputs
   */
  output?: RunGenerateQuestionsResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage
   */
  usage?: RunGenerateQuestionsResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunGenerateQuestionsResponseBodyPayloadOutput,
      usage: RunGenerateQuestionsResponseBodyPayloadUsage,
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

export class RunGenerateQuestionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response header
   */
  header?: RunGenerateQuestionsResponseBodyHeader;
  /**
   * @remarks
   * Response body
   */
  payload?: RunGenerateQuestionsResponseBodyPayload;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      header: RunGenerateQuestionsResponseBodyHeader,
      payload: RunGenerateQuestionsResponseBodyPayload,
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

