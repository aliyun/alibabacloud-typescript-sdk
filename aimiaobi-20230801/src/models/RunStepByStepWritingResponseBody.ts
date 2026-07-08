// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunStepByStepWritingResponseBodyHeader extends $dara.Model {
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
   * The Server-Sent Events (SSE) event. \\`task-started\\`: The task begins. \\`task-finished\\`: The task is complete. \\`task-failed\\`: The task failed.
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
   * The task ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * The full-link trace ID.
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

export class RunStepByStepWritingResponseBodyPayloadOutputArticles extends $dara.Model {
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
   * f1da53894e784759946d22e2cb2b522a
   */
  docUuid?: string;
  /**
   * @remarks
   * The URL of the original material.
   * 
   * @example
   * http://www.example.com
   */
  mediaUrl?: string;
  /**
   * @remarks
   * The publication time.
   * 
   * @example
   * 2024-09-10 14:17:53
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
      mediaUrl: 'MediaUrl',
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
      mediaUrl: 'string',
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

export class RunStepByStepWritingResponseBodyPayloadOutputExtraOutput extends $dara.Model {
  /**
   * @remarks
   * The list of summaries. This field is returned when summaries are generated step-by-step.
   */
  summarization?: string[];
  static names(): { [key: string]: string } {
    return {
      summarization: 'summarization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summarization: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.summarization)) {
      $dara.Model.validateArray(this.summarization);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunStepByStepWritingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * The reference articles.
   */
  articles?: RunStepByStepWritingResponseBodyPayloadOutputArticles[];
  /**
   * @remarks
   * Extra output fields.
   */
  extraOutput?: RunStepByStepWritingResponseBodyPayloadOutputExtraOutput;
  /**
   * @remarks
   * A list of segments after the article layout has been optimized.
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
   * The text generation result.
   * 
   * @example
   * 文本生成结果
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      extraOutput: 'ExtraOutput',
      miniDoc: 'MiniDoc',
      searchQuery: 'SearchQuery',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunStepByStepWritingResponseBodyPayloadOutputArticles },
      extraOutput: RunStepByStepWritingResponseBodyPayloadOutputExtraOutput,
      miniDoc: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(this.extraOutput && typeof (this.extraOutput as any).validate === 'function') {
      (this.extraOutput as any).validate();
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

export class RunStepByStepWritingResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * The number of input tokens.
   * 
   * @example
   * 65
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of output tokens.
   * 
   * @example
   * 80
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 32
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

export class RunStepByStepWritingResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * The output.
   */
  output?: RunStepByStepWritingResponseBodyPayloadOutput;
  /**
   * @remarks
   * Information about token usage.
   */
  usage?: RunStepByStepWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunStepByStepWritingResponseBodyPayloadOutput,
      usage: RunStepByStepWritingResponseBodyPayloadUsage,
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

export class RunStepByStepWritingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response header.
   */
  header?: RunStepByStepWritingResponseBodyHeader;
  /**
   * @remarks
   * The response body.
   */
  payload?: RunStepByStepWritingResponseBodyPayload;
  /**
   * @remarks
   * The unique request ID.
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
      header: RunStepByStepWritingResponseBodyHeader,
      payload: RunStepByStepWritingResponseBodyPayload,
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

