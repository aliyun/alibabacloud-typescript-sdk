// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCustomHotTopicAnalysisResponseBodyHeader extends $dara.Model {
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
   * The Server-Sent Events (SSE) event. Valid values: task-started: The task starts. task-finished: The task is complete. task-failed: The task failed.
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

export class RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles extends $dara.Model {
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
   * a2103fcfbd5441f1991c72f8834833e3
   */
  docUuid?: string;
  /**
   * @remarks
   * The publication time.
   * 
   * @example
   * 2024-08-27 14:50:47
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

export class RunCustomHotTopicAnalysisResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @remarks
   * The reference articles.
   */
  articles?: RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles[];
  /**
   * @remarks
   * The list of follow-up questions.
   */
  askUser?: string[];
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 异步任务ID
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The custom perspective for topic selection.
   * 
   * @example
   * 自定义选题视角
   */
  attitude?: string;
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
  /**
   * @remarks
   * The topic ID.
   * 
   * @example
   * 话题ID
   */
  topicId?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      askUser: 'AskUser',
      asyncTaskId: 'AsyncTaskId',
      attitude: 'Attitude',
      searchQuery: 'SearchQuery',
      text: 'Text',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunCustomHotTopicAnalysisResponseBodyPayloadOutputArticles },
      askUser: { 'type': 'array', 'itemType': 'string' },
      asyncTaskId: 'string',
      attitude: 'string',
      searchQuery: 'string',
      text: 'string',
      topicId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.askUser)) {
      $dara.Model.validateArray(this.askUser);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCustomHotTopicAnalysisResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @remarks
   * The number of tokens used for the input.
   * 
   * @example
   * 60
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of tokens for the output.
   * 
   * @example
   * 13
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 73
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

export class RunCustomHotTopicAnalysisResponseBodyPayload extends $dara.Model {
  /**
   * @remarks
   * The output.
   */
  output?: RunCustomHotTopicAnalysisResponseBodyPayloadOutput;
  /**
   * @remarks
   * The token usage.
   */
  usage?: RunCustomHotTopicAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunCustomHotTopicAnalysisResponseBodyPayloadOutput,
      usage: RunCustomHotTopicAnalysisResponseBodyPayloadUsage,
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

export class RunCustomHotTopicAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response header.
   */
  header?: RunCustomHotTopicAnalysisResponseBodyHeader;
  /**
   * @remarks
   * The response body.
   */
  payload?: RunCustomHotTopicAnalysisResponseBodyPayload;
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
      header: RunCustomHotTopicAnalysisResponseBodyHeader,
      payload: RunCustomHotTopicAnalysisResponseBodyPayload,
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

