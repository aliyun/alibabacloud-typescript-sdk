// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMultiDocIntroductionResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @example
   * Message does not exist.
   */
  errorMessage?: string;
  /**
   * @example
   * finished
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 92e16ccb-92b6-4894-abbf-fc6e2929a0df
   */
  sessionId?: string;
  /**
   * @example
   * b057f2fa-2277-477b-babf-cbc062307828
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

export class RunMultiDocIntroductionResponseBodyPayloadOutputKeyPoints extends $dara.Model {
  keyPoint?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoint: 'KeyPoint',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoint: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMultiDocIntroductionResponseBodyPayloadOutput extends $dara.Model {
  keyPoints?: RunMultiDocIntroductionResponseBodyPayloadOutputKeyPoints[];
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      keyPoints: 'KeyPoints',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPoints: { 'type': 'array', 'itemType': RunMultiDocIntroductionResponseBodyPayloadOutputKeyPoints },
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keyPoints)) {
      $dara.Model.validateArray(this.keyPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMultiDocIntroductionResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 65
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
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

export class RunMultiDocIntroductionResponseBodyPayload extends $dara.Model {
  output?: RunMultiDocIntroductionResponseBodyPayloadOutput;
  usage?: RunMultiDocIntroductionResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunMultiDocIntroductionResponseBodyPayloadOutput,
      usage: RunMultiDocIntroductionResponseBodyPayloadUsage,
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

export class RunMultiDocIntroductionResponseBody extends $dara.Model {
  header?: RunMultiDocIntroductionResponseBodyHeader;
  payload?: RunMultiDocIntroductionResponseBodyPayload;
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
      header: RunMultiDocIntroductionResponseBodyHeader,
      payload: RunMultiDocIntroductionResponseBodyPayload,
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

