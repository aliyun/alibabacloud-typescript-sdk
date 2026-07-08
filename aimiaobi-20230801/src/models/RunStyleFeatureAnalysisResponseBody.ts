// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStyleFeatureAnalysisResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Event type.
   * 
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @remarks
   * Event description.
   * 
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @remarks
   * Session ID.
   * 
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @remarks
   * Trace ID.
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

export class RunStyleFeatureAnalysisResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Output content.
   * 
   * @example
   * 这是测试输出
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

export class RunStyleFeatureAnalysisResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Input Tokens.
   * 
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @remarks
   * Output Tokens.
   * 
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total Tokens.
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

export class RunStyleFeatureAnalysisResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output content object.
   */
  output?: RunStyleFeatureAnalysisResponseBodyPayloadOutput;
  /**
   * @remarks
   * Large Language Model (LLM) token usage information.
   */
  usage?: RunStyleFeatureAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunStyleFeatureAnalysisResponseBodyPayloadOutput,
      usage: RunStyleFeatureAnalysisResponseBodyPayloadUsage,
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

export class RunStyleFeatureAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * Whether the output is complete. True indicates completion.
   */
  end?: boolean;
  /**
   * @remarks
   * The streaming output header, containing general return information.
   */
  header?: RunStyleFeatureAnalysisResponseBodyHeader;
  /**
   * @remarks
   * The payload of the response, in JSON structure
   */
  payload?: RunStyleFeatureAnalysisResponseBodyPayload;
  /**
   * @remarks
   * Unique request ID.
   * 
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
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
      header: RunStyleFeatureAnalysisResponseBodyHeader,
      payload: RunStyleFeatureAnalysisResponseBodyPayload,
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

