// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotTopicSummaryResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbidden
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxxxx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
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

export class RunHotTopicSummaryResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
      topicId: 'topicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      topicId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicSummaryResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
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

export class RunHotTopicSummaryResponseBodyPayload extends $dara.Model {
  output?: RunHotTopicSummaryResponseBodyPayloadOutput;
  usage?: RunHotTopicSummaryResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunHotTopicSummaryResponseBodyPayloadOutput,
      usage: RunHotTopicSummaryResponseBodyPayloadUsage,
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

export class RunHotTopicSummaryResponseBody extends $dara.Model {
  header?: RunHotTopicSummaryResponseBodyHeader;
  payload?: RunHotTopicSummaryResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D0E915E-655D-59A8-894F-93873F73AAE5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunHotTopicSummaryResponseBodyHeader,
      payload: RunHotTopicSummaryResponseBodyPayload,
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

