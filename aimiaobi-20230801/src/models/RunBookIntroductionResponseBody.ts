// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookIntroductionResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * finished
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @example
   * 411c4dfa-2168-4379-a902-675d67f453f8
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 46e5c2b5-0877-4f09-bd91-ab0cf314e48b
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

export class RunBookIntroductionResponseBodyPayloadOutputIntroductions extends $dara.Model {
  /**
   * @example
   * 本段摘要内容
   */
  summary?: string;
  /**
   * @example
   * 本段标题内容
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookIntroductionResponseBodyPayloadOutput extends $dara.Model {
  introductions?: RunBookIntroductionResponseBodyPayloadOutputIntroductions[];
  /**
   * @example
   * 卖点内容
   */
  keyPoint?: string;
  /**
   * @example
   * 简介内容
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      introductions: 'Introductions',
      keyPoint: 'KeyPoint',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      introductions: { 'type': 'array', 'itemType': RunBookIntroductionResponseBodyPayloadOutputIntroductions },
      keyPoint: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.introductions)) {
      $dara.Model.validateArray(this.introductions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunBookIntroductionResponseBodyPayloadUsage extends $dara.Model {
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

export class RunBookIntroductionResponseBodyPayload extends $dara.Model {
  output?: RunBookIntroductionResponseBodyPayloadOutput;
  usage?: RunBookIntroductionResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunBookIntroductionResponseBodyPayloadOutput,
      usage: RunBookIntroductionResponseBodyPayloadUsage,
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

export class RunBookIntroductionResponseBody extends $dara.Model {
  header?: RunBookIntroductionResponseBodyHeader;
  payload?: RunBookIntroductionResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
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
      header: RunBookIntroductionResponseBodyHeader,
      payload: RunBookIntroductionResponseBodyPayload,
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

