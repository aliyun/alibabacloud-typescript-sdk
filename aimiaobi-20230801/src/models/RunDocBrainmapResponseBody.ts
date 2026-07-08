// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocBrainmapResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * Event type.
   * 
   * @example
   * task-failed
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
   * 07181f55-2311-48af-8048-132a77dee020
   */
  sessionId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 161816
   */
  taskId?: string;
  /**
   * @remarks
   * Trace ID.
   * 
   * @example
   * 6427cdf4-2ffe-4d05-b0ef-c4adceea90f4
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

export class RunDocBrainmapResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Mind map content in JSON format.
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

export class RunDocBrainmapResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of input tokens.
   * 
   * @example
   * 65
   */
  inputTokens?: number;
  /**
   * @remarks
   * Number of output tokens.
   * 
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total number of tokens.
   * 
   * @example
   * 165
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

export class RunDocBrainmapResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output data.
   */
  output?: RunDocBrainmapResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage statistics.
   */
  usage?: RunDocBrainmapResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocBrainmapResponseBodyPayloadOutput,
      usage: RunDocBrainmapResponseBodyPayloadUsage,
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

export class RunDocBrainmapResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response header.
   */
  header?: RunDocBrainmapResponseBodyHeader;
  /**
   * @remarks
   * Response payload.
   */
  payload?: RunDocBrainmapResponseBodyPayload;
  /**
   * @remarks
   * Request ID.
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
      header: RunDocBrainmapResponseBodyHeader,
      payload: RunDocBrainmapResponseBodyPayload,
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

