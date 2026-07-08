// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotwordResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 200
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
   * finished
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
   * 92e16ccb-92b6-4894-abbf-fc6e2929a0df
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
   * Trace ID.
   * 
   * @example
   * 0abb7e3217356108993888059ee72b
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

export class RunHotwordResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Hotword content.
   * 
   * @example
   * 全球影响,文化交流,孙悟空,动画改编
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

export class RunHotwordResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of input tokens.
   * 
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @remarks
   * Number of output tokens.
   * 
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total number of tokens.
   * 
   * @example
   * 101
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

export class RunHotwordResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output.
   */
  output?: RunHotwordResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage.
   */
  usage?: RunHotwordResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunHotwordResponseBodyPayloadOutput,
      usage: RunHotwordResponseBodyPayloadUsage,
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

export class RunHotwordResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response header.
   */
  header?: RunHotwordResponseBodyHeader;
  /**
   * @remarks
   * Response body.
   */
  payload?: RunHotwordResponseBodyPayload;
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
      header: RunHotwordResponseBodyHeader,
      payload: RunHotwordResponseBodyPayload,
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

