// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TopicSelection } from "./TopicSelection";


export class RunTopicSelectionMergeResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code
   * 
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * SSE event. Values: task-started, task-finished, or task-failed
   * 
   * @example
   * task-started
   */
  event?: string;
  /**
   * @remarks
   * Parent session ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * Session ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 400
   */
  statusCode?: number;
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
   * End-to-end trace ID
   * 
   * @example
   * 全链路ID
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      originSessionId: 'OriginSessionId',
      sessionId: 'SessionId',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      originSessionId: 'string',
      sessionId: 'string',
      statusCode: 'number',
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

export class RunTopicSelectionMergeResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Text generation result
   * 
   * @example
   * 文本生成结果
   */
  text?: string;
  /**
   * @remarks
   * Merged topic selection object
   */
  topic?: TopicSelection;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      topic: TopicSelection,
    };
  }

  validate() {
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTopicSelectionMergeResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of input tokens
   * 
   * @example
   * 78
   */
  inputTokens?: number;
  /**
   * @remarks
   * Number of output tokens used
   * 
   * @example
   * 34
   */
  outputTokens?: number;
  /**
   * @remarks
   * Detailed token consumption
   */
  tokenMap?: { [key: string]: number };
  /**
   * @remarks
   * Total number of tokens used in this call
   * 
   * @example
   * 38
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      tokenMap: 'TokenMap',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      tokenMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      totalTokens: 'number',
    };
  }

  validate() {
    if(this.tokenMap) {
      $dara.Model.validateMap(this.tokenMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunTopicSelectionMergeResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output
   */
  output?: RunTopicSelectionMergeResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage
   */
  usage?: RunTopicSelectionMergeResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunTopicSelectionMergeResponseBodyPayloadOutput,
      usage: RunTopicSelectionMergeResponseBodyPayloadUsage,
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

export class RunTopicSelectionMergeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the response packet is complete
   * 
   * @example
   * true
   */
  end?: boolean;
  /**
   * @remarks
   * Response header
   */
  header?: RunTopicSelectionMergeResponseBodyHeader;
  /**
   * @remarks
   * Response body
   */
  payload?: RunTopicSelectionMergeResponseBodyPayload;
  /**
   * @remarks
   * Request ID
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
      header: RunTopicSelectionMergeResponseBodyHeader,
      payload: RunTopicSelectionMergeResponseBodyPayload,
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

