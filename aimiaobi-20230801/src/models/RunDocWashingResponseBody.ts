// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocWashingResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Event type
   * 
   * @example
   * task-finished
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
   * Request ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 20247a52-23e2-46fb-943d-309cdee2bc6d
   */
  sessionId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Full link ID
   * 
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventInfo: 'EventInfo',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
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

export class RunDocWashingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Output content
   * 
   * @example
   * 文本生成结果
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

export class RunDocWashingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of input tokens
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

export class RunDocWashingResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output
   */
  output?: RunDocWashingResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token consumption
   */
  usage?: RunDocWashingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocWashingResponseBodyPayloadOutput,
      usage: RunDocWashingResponseBodyPayloadUsage,
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

export class RunDocWashingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Is the response package finished?
   * 
   * @example
   * false
   */
  end?: boolean;
  /**
   * @remarks
   * Response header
   */
  header?: RunDocWashingResponseBodyHeader;
  /**
   * @remarks
   * Response body
   */
  payload?: RunDocWashingResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
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
      header: RunDocWashingResponseBodyHeader,
      payload: RunDocWashingResponseBodyPayload,
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

