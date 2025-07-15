// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocQaResponseBodyHeader extends $dara.Model {
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
   * f5517ee8-dbec-4dc8-bd0a-af084b5e3db1
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
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

export class RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos extends $dara.Model {
  /**
   * @example
   * 0
   */
  from?: number;
  /**
   * @example
   * 30
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadOutputMediaUrlList extends $dara.Model {
  clipInfos?: RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos[];
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/2775676850/O1CN01kdeffE20TM0E7wvpq_!!2775676850.jpg_q60.jpg
   */
  fileUrl?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      clipInfos: 'ClipInfos',
      fileUrl: 'FileUrl',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipInfos: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputMediaUrlListClipInfos },
      fileUrl: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clipInfos)) {
      $dara.Model.validateArray(this.clipInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadOutputRecommends extends $dara.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadOutputReferences extends $dara.Model {
  /**
   * @example
   * 2024-10-08 18:00
   */
  pubTime?: string;
  source?: string;
  /**
   * @example
   * 123456
   */
  sourceDocId?: string;
  title?: string;
  /**
   * @example
   * http://xxxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      pubTime: 'PubTime',
      source: 'Source',
      sourceDocId: 'SourceDocId',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubTime: 'string',
      source: 'string',
      sourceDocId: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadOutput extends $dara.Model {
  content?: string;
  interveneContent?: string;
  /**
   * @example
   * false
   */
  isReject?: boolean;
  mediaUrlList?: RunDocQaResponseBodyPayloadOutputMediaUrlList[];
  recommends?: RunDocQaResponseBodyPayloadOutputRecommends[];
  references?: RunDocQaResponseBodyPayloadOutputReferences[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      interveneContent: 'InterveneContent',
      isReject: 'IsReject',
      mediaUrlList: 'MediaUrlList',
      recommends: 'Recommends',
      references: 'References',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      interveneContent: 'string',
      isReject: 'boolean',
      mediaUrlList: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputMediaUrlList },
      recommends: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputRecommends },
      references: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputReferences },
    };
  }

  validate() {
    if(Array.isArray(this.mediaUrlList)) {
      $dara.Model.validateArray(this.mediaUrlList);
    }
    if(Array.isArray(this.recommends)) {
      $dara.Model.validateArray(this.recommends);
    }
    if(Array.isArray(this.references)) {
      $dara.Model.validateArray(this.references);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocQaResponseBodyPayloadUsage extends $dara.Model {
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

export class RunDocQaResponseBodyPayload extends $dara.Model {
  output?: RunDocQaResponseBodyPayloadOutput;
  usage?: RunDocQaResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocQaResponseBodyPayloadOutput,
      usage: RunDocQaResponseBodyPayloadUsage,
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

export class RunDocQaResponseBody extends $dara.Model {
  header?: RunDocQaResponseBodyHeader;
  payload?: RunDocQaResponseBodyPayload;
  /**
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
      header: RunDocQaResponseBodyHeader,
      payload: RunDocQaResponseBodyPayload,
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

