// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCustomHotTopicViewPointAnalysisResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 错误码
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  originSessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
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

export class RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutputArticles extends $dara.Model {
  author?: string;
  content?: string;
  pubTime?: string;
  source?: string;
  summary?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      pubTime: 'string',
      source: 'string',
      summary: 'string',
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

export class RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput extends $dara.Model {
  articles?: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutputArticles[];
  askUser?: string[];
  /**
   * @example
   * 异步任务ID
   */
  asyncTaskId?: string;
  /**
   * @example
   * 模型生成的自定义选题视角的观点
   */
  attitude?: string;
  /**
   * @example
   * xxxxxx
   */
  customViewPointId?: string;
  /**
   * @example
   * 文本生成结果
   */
  text?: string;
  /**
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
      customViewPointId: 'CustomViewPointId',
      text: 'Text',
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutputArticles },
      askUser: { 'type': 'array', 'itemType': 'string' },
      asyncTaskId: 'string',
      attitude: 'string',
      customViewPointId: 'string',
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

export class RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 51
   */
  inputTokens?: number;
  /**
   * @example
   * 79
   */
  outputTokens?: number;
  /**
   * @example
   * 130
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

export class RunCustomHotTopicViewPointAnalysisResponseBodyPayload extends $dara.Model {
  output?: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput;
  usage?: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadOutput,
      usage: RunCustomHotTopicViewPointAnalysisResponseBodyPayloadUsage,
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

export class RunCustomHotTopicViewPointAnalysisResponseBody extends $dara.Model {
  header?: RunCustomHotTopicViewPointAnalysisResponseBodyHeader;
  payload?: RunCustomHotTopicViewPointAnalysisResponseBodyPayload;
  /**
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
      header: RunCustomHotTopicViewPointAnalysisResponseBodyHeader,
      payload: RunCustomHotTopicViewPointAnalysisResponseBodyPayload,
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

