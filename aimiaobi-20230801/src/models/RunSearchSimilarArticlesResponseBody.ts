// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchSimilarArticlesResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * Server-sent event. Valid values: task-started, task-finished, and task-failed.
   * 
   * @example
   * task-started
   */
  event?: string;
  eventInfo?: string;
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
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchSimilarArticlesResponseBodyPayloadOutputArticles extends $dara.Model {
  /**
   * @remarks
   * UUID of the category
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * Custom unique document ID.
   * 
   * @example
   * xxx
   */
  docId?: string;
  /**
   * @remarks
   * Document Type:  
   * - plainText: plain text; content is required  
   * - richText: rich text in HTML format; content is required  
   * - text: text file; url is required  
   * - pdf: url is required  
   * - word: url is required  
   * - image: Image; url is required. Supports most common image formats such as GIF, PNG, JPG, and JPEG  
   * - video: Video; url is required. Supports most common video formats such as MP4, AVI, WMV, and MOV
   * 
   * @example
   * text
   */
  docType?: string;
  /**
   * @remarks
   * Article ID.
   * 
   * @example
   * a26c2c1
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * Publication time.
   * 
   * @example
   * 2025-01-16 18:07:22
   */
  pubTime?: string;
  /**
   * @remarks
   * Search source
   * 
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @remarks
   * Search source name.
   * 
   * @example
   * 互联网搜索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * Type of dataset
   * 
   * @example
   * xx
   */
  searchSourceType?: string;
  /**
   * @remarks
   * Source website.
   * 
   * @example
   * xxx.com
   */
  source?: string;
  /**
   * @remarks
   * Summary.
   * 
   * @example
   * xxx
   */
  summary?: string;
  /**
   * @remarks
   * label
   */
  tags?: string[];
  /**
   * @remarks
   * Title.
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * URL.
   * 
   * @example
   * https://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      searchSourceType: 'SearchSourceType',
      source: 'Source',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      searchSourceType: 'string',
      source: 'string',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchSimilarArticlesResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * Article list.
   */
  articles?: RunSearchSimilarArticlesResponseBodyPayloadOutputArticles[];
  /**
   * @remarks
   * Text generation result.
   * 
   * @example
   * 文本生成结果
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunSearchSimilarArticlesResponseBodyPayloadOutputArticles },
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSearchSimilarArticlesResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * Number of input tokens.
   * 
   * @example
   * 81
   */
  inputTokens?: number;
  /**
   * @remarks
   * Number of output tokens.
   * 
   * @example
   * 9
   */
  outputTokens?: number;
  /**
   * @remarks
   * Total number of tokens.
   * 
   * @example
   * 50
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

export class RunSearchSimilarArticlesResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * Output.
   */
  output?: RunSearchSimilarArticlesResponseBodyPayloadOutput;
  /**
   * @remarks
   * instance: The image is running and used by an ECS instance.
   * 
   * none: The image is idle and not used by any ECS instance.
   */
  usage?: RunSearchSimilarArticlesResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunSearchSimilarArticlesResponseBodyPayloadOutput,
      usage: RunSearchSimilarArticlesResponseBodyPayloadUsage,
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

export class RunSearchSimilarArticlesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response header.
   */
  header?: RunSearchSimilarArticlesResponseBodyHeader;
  /**
   * @remarks
   * Response body.
   */
  payload?: RunSearchSimilarArticlesResponseBodyPayload;
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
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunSearchSimilarArticlesResponseBodyHeader,
      payload: RunSearchSimilarArticlesResponseBodyPayload,
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

