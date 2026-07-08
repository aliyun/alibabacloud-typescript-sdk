// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunBookIntroductionResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * finished
   */
  event?: string;
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 411c4dfa-2168-4379-a902-675d67f453f8
   */
  sessionId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @remarks
   * The trace ID.
   * 
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

export class RunBookIntroductionResponseBodyPayloadOutputIntroductionsBlocks extends $dara.Model {
  /**
   * @remarks
   * The start timestamp of the content block.
   * 
   * @example
   * 0
   */
  beginTime?: number;
  /**
   * @remarks
   * The end timestamp of the content block.
   * 
   * @example
   * 1200
   */
  endTime?: number;
  /**
   * @remarks
   * The height of the content block.
   * 
   * @example
   * 600
   */
  height?: number;
  /**
   * @remarks
   * The ID of the page where the content block is located.
   * 
   * @example
   * 10
   */
  pageId?: number;
  /**
   * @remarks
   * The width of the content block.
   * 
   * @example
   * 600
   */
  width?: number;
  /**
   * @remarks
   * The x-coordinate of the content block\\"s top-left corner on the page.
   * 
   * @example
   * 10
   */
  x?: number;
  /**
   * @remarks
   * The y-coordinate of the content block\\"s top-left corner on the page.
   * 
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

export class RunBookIntroductionResponseBodyPayloadOutputIntroductions extends $dara.Model {
  /**
   * @remarks
   * A list of content blocks within this section.
   */
  blocks?: RunBookIntroductionResponseBodyPayloadOutputIntroductionsBlocks[];
  /**
   * @remarks
   * A summary of this section.
   * 
   * @example
   * 本段摘要内容
   */
  summary?: string;
  /**
   * @remarks
   * The title of this section.
   * 
   * @example
   * 本段标题内容
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      blocks: 'Blocks',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blocks: { 'type': 'array', 'itemType': RunBookIntroductionResponseBodyPayloadOutputIntroductionsBlocks },
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

export class RunBookIntroductionResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * A list of generated introductions for each part of the book.
   */
  introductions?: RunBookIntroductionResponseBodyPayloadOutputIntroductions[];
  /**
   * @remarks
   * The book\\"s key points.
   * 
   * @example
   * 卖点内容
   */
  keyPoint?: string;
  /**
   * @remarks
   * The book summary.
   * 
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
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens.
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

export class RunBookIntroductionResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * The generated content.
   */
  output?: RunBookIntroductionResponseBodyPayloadOutput;
  /**
   * @remarks
   * Token usage details for the request.
   */
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
  /**
   * @remarks
   * The response header.
   */
  header?: RunBookIntroductionResponseBodyHeader;
  /**
   * @remarks
   * The payload.
   */
  payload?: RunBookIntroductionResponseBodyPayload;
  /**
   * @remarks
   * The request ID.
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

