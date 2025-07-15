// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocIntroductionResponseBodyHeader extends $dara.Model {
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
   * task-started
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 20247a52-23e2-46fb-943d-309cdee2bc6d
   */
  sessionId?: string;
  /**
   * @example
   * 8a9cecb7-6d20-32db-8823-5882c217b647
   */
  taskId?: string;
  /**
   * @example
   * 0bd58ea2-dc38-45da-ac02-17f05cb9040b
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

export class RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks extends $dara.Model {
  /**
   * @example
   * 0
   */
  beginTime?: number;
  /**
   * @example
   * 1200
   */
  endTime?: number;
  /**
   * @example
   * 600
   */
  height?: number;
  /**
   * @example
   * 10
   */
  pageId?: number;
  /**
   * @example
   * 600
   */
  width?: number;
  /**
   * @example
   * 10
   */
  x?: number;
  /**
   * @example
   * 10
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      height: 'Height',
      pageId: 'PageId',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      height: 'number',
      pageId: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionResponseBodyPayloadOutputIntroductions extends $dara.Model {
  blocks?: RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks[];
  /**
   * @example
   * 10
   */
  startPageId?: number;
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      blocks: 'Blocks',
      startPageId: 'StartPageId',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blocks: { 'type': 'array', 'itemType': RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks },
      startPageId: 'number',
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blocks)) {
      $dara.Model.validateArray(this.blocks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocIntroductionResponseBodyPayloadOutput extends $dara.Model {
  introductions?: RunDocIntroductionResponseBodyPayloadOutputIntroductions[];
  keyPoint?: string;
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
      introductions: { 'type': 'array', 'itemType': RunDocIntroductionResponseBodyPayloadOutputIntroductions },
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

export class RunDocIntroductionResponseBodyPayloadUsage extends $dara.Model {
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

export class RunDocIntroductionResponseBodyPayload extends $dara.Model {
  output?: RunDocIntroductionResponseBodyPayloadOutput;
  usage?: RunDocIntroductionResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocIntroductionResponseBodyPayloadOutput,
      usage: RunDocIntroductionResponseBodyPayloadUsage,
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

export class RunDocIntroductionResponseBody extends $dara.Model {
  header?: RunDocIntroductionResponseBodyHeader;
  payload?: RunDocIntroductionResponseBodyPayload;
  /**
   * @example
   * C9B5BEA6-E8C4-5861-BE37-D906D516510E
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
      header: RunDocIntroductionResponseBodyHeader,
      payload: RunDocIntroductionResponseBodyPayload,
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

