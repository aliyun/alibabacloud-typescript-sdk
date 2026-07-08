// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommentGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Event name.
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
   * 可空
   */
  eventInfo?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
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
   * 0bd58ea2-dc38-45da-ac02-17f05cb9040b
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

export class RunCommentGenerationResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Generated comment text.
   * 
   * @example
   * 评论内容
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

export class RunCommentGenerationResponseBodyPayloadUsage extends $dara.Model {
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
   * 2
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total number of tokens used.
   * 
   * @example
   * 3
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

export class RunCommentGenerationResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output data.
   */
  output?: RunCommentGenerationResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage.
   */
  usage?: RunCommentGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunCommentGenerationResponseBodyPayloadOutput,
      usage: RunCommentGenerationResponseBodyPayloadUsage,
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

export class RunCommentGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the response is complete.
   */
  end?: boolean;
  /**
   * @remarks
   * Response header.
   */
  header?: RunCommentGenerationResponseBodyHeader;
  /**
   * @remarks
   * Response body.
   */
  payload?: RunCommentGenerationResponseBodyPayload;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
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
      header: RunCommentGenerationResponseBodyHeader,
      payload: RunCommentGenerationResponseBodyPayload,
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

