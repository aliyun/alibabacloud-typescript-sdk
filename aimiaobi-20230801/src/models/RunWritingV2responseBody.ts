// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GenerateTraceability } from "./GenerateTraceability";
import { WritingOutline } from "./WritingOutline";
import { OutlineSearchResult } from "./OutlineSearchResult";


export class RunWritingV2ResponseBodyHeader extends $dara.Model {
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
   * The type of event. The service returns two types of events: writing events and other events.
   * 
   * The writing event, `task-progress-start-generating`, indicates that the output contains the complete article information.
   * 
   * Other events, such as `writing-instruction-analysis` (instruction analysis), `task-progress-news-search-end` (web search), and `result-intent-recognition-end` (intent recognition), can be monitored through the `payload.output.text` field or ignored.
   * 
   * @example
   * task-progress-start-generating
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

export class RunWritingV2ResponseBodyPayloadOutputArticles extends $dara.Model {
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
   * The custom unique ID for the document.
   * 
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @remarks
   * The internal unique identifier for the document.
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
   * The article URL.
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

export class RunWritingV2ResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * The reference articles.
   */
  articles?: RunWritingV2ResponseBodyPayloadOutputArticles[];
  /**
   * @remarks
   * A traceability object, returned when the `modelSourceTrace` parameter is provided.
   */
  generateTraceability?: GenerateTraceability;
  /**
   * @remarks
   * A list of refined article snippets.
   * 
   * @example
   * 文章精排之后的片段
   */
  miniDoc?: string[];
  /**
   * @remarks
   * A list of outlines. This field is returned when `writingStyle` is set to `outlineWriting` and `step` is `outlineWriting`.
   */
  outlines?: WritingOutline[];
  /**
   * @remarks
   * The result of the query rewrite.
   * 
   * @example
   * 大模型改变世界
   */
  searchQuery?: string;
  /**
   * @remarks
   * The search result. This field is returned when `writingStyle` is set to `outlineWriting` and `step` is `OutlineSearch`.
   */
  searchResult?: OutlineSearchResult;
  /**
   * @remarks
   * The generated text.
   * 
   * @example
   * 文本生成结果
   */
  text?: string;
  /**
   * @remarks
   * The article title. This field is returned when `writingStyle` is set to `outlineWriting` and `step` is `outlineWriting`.
   * 
   * @example
   * 文章标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      generateTraceability: 'GenerateTraceability',
      miniDoc: 'MiniDoc',
      outlines: 'Outlines',
      searchQuery: 'SearchQuery',
      searchResult: 'SearchResult',
      text: 'Text',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunWritingV2ResponseBodyPayloadOutputArticles },
      generateTraceability: GenerateTraceability,
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      outlines: { 'type': 'array', 'itemType': WritingOutline },
      searchQuery: 'string',
      searchResult: OutlineSearchResult,
      text: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(this.generateTraceability && typeof (this.generateTraceability as any).validate === 'function') {
      (this.generateTraceability as any).validate();
    }
    if(Array.isArray(this.miniDoc)) {
      $dara.Model.validateArray(this.miniDoc);
    }
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    if(this.searchResult && typeof (this.searchResult as any).validate === 'function') {
      (this.searchResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunWritingV2ResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 78
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 34
   */
  outputTokens?: number;
  /**
   * @remarks
   * A detailed breakdown of token consumption.
   */
  tokenMap?: { [key: string]: number };
  /**
   * @remarks
   * The total number of tokens.
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

export class RunWritingV2ResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * The output.
   */
  output?: RunWritingV2ResponseBodyPayloadOutput;
  /**
   * @remarks
   * The token usage statistics.
   */
  usage?: RunWritingV2ResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunWritingV2ResponseBodyPayloadOutput,
      usage: RunWritingV2ResponseBodyPayloadUsage,
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

export class RunWritingV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is the final message in the response stream.
   * 
   * @example
   * true
   */
  end?: boolean;
  /**
   * @remarks
   * The response header.
   */
  header?: RunWritingV2ResponseBodyHeader;
  /**
   * @remarks
   * The response payload.
   */
  payload?: RunWritingV2ResponseBodyPayload;
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
      header: RunWritingV2ResponseBodyHeader,
      payload: RunWritingV2ResponseBodyPayload,
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

