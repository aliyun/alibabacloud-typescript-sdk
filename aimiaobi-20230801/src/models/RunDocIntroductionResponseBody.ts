// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocIntroductionResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * error code
   * 
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @remarks
   * error message.
   * 
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @remarks
   * Type of management event
   * 
   * @example
   * task-started
   */
  event?: string;
  /**
   * @remarks
   * Description of the management event
   * 
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @remarks
   * session ID
   * 
   * @example
   * 20247a52-23e2-46fb-943d-309cdee2bc6d
   */
  sessionId?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * 8a9cecb7-6d20-32db-8823-5882c217b647
   */
  taskId?: string;
  /**
   * @remarks
   * End-to-end trace ID
   * 
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
   * @remarks
   * Start Time of the segment
   * 
   * @example
   * 0
   */
  beginTime?: number;
  /**
   * @remarks
   * End Time of the segment
   * 
   * @example
   * 1200
   */
  endTime?: number;
  /**
   * @remarks
   * Height of the text block
   * 
   * @example
   * 600
   */
  height?: number;
  /**
   * @remarks
   * Page number where the text block is located
   * 
   * @example
   * 10
   */
  pageId?: number;
  /**
   * @remarks
   * Width of the text block
   * 
   * @example
   * 600
   */
  width?: number;
  /**
   * @remarks
   * X coordinate of the top-left corner of the block
   * 
   * @example
   * 10
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate of the top-left corner of the block
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

export class RunDocIntroductionResponseBodyPayloadOutputIntroductions extends $dara.Model {
  /**
   * @remarks
   * Array of position information
   */
  blocks?: RunDocIntroductionResponseBodyPayloadOutputIntroductionsBlocks[];
  /**
   * @remarks
   * Starting page number of multiple text blocks
   * 
   * @example
   * 10
   */
  startPageId?: number;
  /**
   * @remarks
   * Summary of this segment
   * 
   * @example
   * 本段摘要内容
   */
  summary?: string;
  /**
   * @remarks
   * Title of this segment
   * 
   * @example
   * 本段标题内容
   */
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
  /**
   * @remarks
   * Array of segment introductions
   */
  introductions?: RunDocIntroductionResponseBodyPayloadOutputIntroductions[];
  /**
   * @remarks
   * Key point content
   * 
   * @example
   * 要点1；要点2；
   */
  keyPoint?: string;
  /**
   * @remarks
   * Outline summary
   * 
   * @example
   * 大纲摘要内容
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
   * @remarks
   * Input token quantity
   * 
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @remarks
   * Output token quantity
   * 
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total token quantity
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

export class RunDocIntroductionResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Outputs
   */
  output?: RunDocIntroductionResponseBodyPayloadOutput;
  /**
   * @remarks
   * token usage
   */
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
  /**
   * @remarks
   * response header
   */
  header?: RunDocIntroductionResponseBodyHeader;
  /**
   * @remarks
   * response body
   */
  payload?: RunDocIntroductionResponseBodyPayload;
  /**
   * @remarks
   * Request ID
   * 
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

