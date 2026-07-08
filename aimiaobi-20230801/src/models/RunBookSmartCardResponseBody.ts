// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookSmartCardResponseBodyHeader extends $dara.Model {
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
   * 3f7045e099474ba28ceca1b4eb6d6e21
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
   * 1a0e898717105546647125853d4f54
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

export class RunBookSmartCardResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Card title.
   * 
   * @example
   * 卡片标题内容
   */
  content?: string;
  /**
   * @remarks
   * Array of card tags.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookSmartCardResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of input tokens.
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
   * 100
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

export class RunBookSmartCardResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output object.
   */
  output?: RunBookSmartCardResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage.
   */
  usage?: RunBookSmartCardResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunBookSmartCardResponseBodyPayloadOutput,
      usage: RunBookSmartCardResponseBodyPayloadUsage,
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

export class RunBookSmartCardResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response header.
   */
  header?: RunBookSmartCardResponseBodyHeader;
  /**
   * @remarks
   * Response body.
   */
  payload?: RunBookSmartCardResponseBodyPayload;
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
      header: RunBookSmartCardResponseBodyHeader,
      payload: RunBookSmartCardResponseBodyPayload,
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

