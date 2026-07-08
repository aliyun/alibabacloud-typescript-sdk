// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookBrainmapResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
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
   * 0bc1409b17210096103458421ec62e
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

export class RunBookBrainmapResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * The mind map content.
   * 
   * @example
   * {"xxxx":"xxx"}
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

export class RunBookBrainmapResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * The input token count.
   * 
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @remarks
   * The output token count.
   * 
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total token count.
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

export class RunBookBrainmapResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * The generated output.
   */
  output?: RunBookBrainmapResponseBodyPayloadOutput;
  /**
   * @remarks
   * Details about token usage.
   */
  usage?: RunBookBrainmapResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunBookBrainmapResponseBodyPayloadOutput,
      usage: RunBookBrainmapResponseBodyPayloadUsage,
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

export class RunBookBrainmapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response header.
   */
  header?: RunBookBrainmapResponseBodyHeader;
  /**
   * @remarks
   * The response payload.
   */
  payload?: RunBookBrainmapResponseBodyPayload;
  /**
   * @remarks
   * The request ID.
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
      header: RunBookBrainmapResponseBodyHeader,
      payload: RunBookBrainmapResponseBodyPayload,
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

