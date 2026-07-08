// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * The Server-Sent Events (SSE) event. Valid values: task-started (the task starts), task-finished (the task is complete), and task-failed (the task failed).
   * 
   * @example
   * task-started
   */
  event?: string;
  /**
   * @remarks
   * The parent session ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  statusCode?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * The trace ID.
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

export class RunWritingResponseBodyPayloadOutputArticles extends $dara.Model {
  /**
   * @remarks
   * The author.
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * The custom unique ID of the document.
   * 
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @remarks
   * The internal unique ID of the document.
   * 
   * @example
   * 98229f6001cf4deeb1668191d4eccc75
   */
  docUuid?: string;
  /**
   * @remarks
   * The publication time.
   * 
   * @example
   * 2024-08-28 11:38:28
   */
  pubTime?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @remarks
   * The article summary.
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * The URL of the article.
   * 
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docId: 'DocId',
      docUuid: 'DocUuid',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docId: 'string',
      docUuid: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
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

export class RunWritingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * The reference articles.
   */
  articles?: RunWritingResponseBodyPayloadOutputArticles[];
  /**
   * @remarks
   * A list of refined segments from the article.
   * 
   * @example
   * 文章精排之后的片段
   */
  miniDoc?: string[];
  /**
   * @remarks
   * The rewritten query.
   * 
   * @example
   * 大模型改变世界
   */
  searchQuery?: string;
  /**
   * @remarks
   * The generated text.
   * 
   * @example
   * 文本生成结果
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      miniDoc: 'MiniDoc',
      searchQuery: 'SearchQuery',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingResponseBodyPayloadOutputArticles },
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.miniDoc)) {
      $dara.Model.validateArray(this.miniDoc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * The number of tokens used for the input.
   * 
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of tokens used for the output.
   * 
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @remarks
   * The detailed token usage.
   */
  tokenMap?: { [key: string]: number };
  /**
   * @remarks
   * The total number of tokens used in the current call.
   * 
   * @example
   * 2
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

export class RunWritingResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * The output.
   */
  output?: RunWritingResponseBodyPayloadOutput;
  /**
   * @remarks
   * The token usage.
   */
  usage?: RunWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunWritingResponseBodyPayloadOutput,
      usage: RunWritingResponseBodyPayloadUsage,
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

export class RunWritingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current request is complete.
   * 
   * @example
   * true
   */
  end?: boolean;
  /**
   * @remarks
   * The response header.
   */
  header?: RunWritingResponseBodyHeader;
  /**
   * @remarks
   * The response body.
   */
  payload?: RunWritingResponseBodyPayload;
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
      end: 'End',
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunWritingResponseBodyHeader,
      payload: RunWritingResponseBodyPayload,
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

