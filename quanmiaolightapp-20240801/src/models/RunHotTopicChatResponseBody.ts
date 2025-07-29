// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunHotTopicChatResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * InvalidParam
   */
  errorCode?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * xx
   */
  eventInfo?: string;
  /**
   * @example
   * xxx
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
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

export class RunHotTopicChatResponseBodyPayloadOutputArticles extends $dara.Model {
  /**
   * @example
   * xxx
   */
  content?: string;
  /**
   * @example
   * 2024-09-22 16:45:06
   */
  pubTime?: string;
  score?: number;
  searchSourceName?: string;
  select?: boolean;
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * test
   */
  title?: string;
  /**
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pubTime: 'pubTime',
      score: 'score',
      searchSourceName: 'searchSourceName',
      select: 'select',
      summary: 'summary',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      pubTime: 'string',
      score: 'number',
      searchSourceName: 'string',
      select: 'boolean',
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

export class RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages extends $dara.Model {
  /**
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews extends $dara.Model {
  /**
   * @example
   * xxx
   */
  title?: string;
  /**
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
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

export class RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries extends $dara.Model {
  /**
   * @example
   * 100000
   */
  customHotValue?: number;
  /**
   * @example
   * xxx
   */
  customTextSummary?: string;
  /**
   * @example
   * xx
   */
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_08
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 100000
   */
  hotValue?: number;
  images?: RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages[];
  news?: RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews[];
  pubTime?: string;
  /**
   * @example
   * xxx
   */
  textSummary?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      customHotValue: 'customHotValue',
      customTextSummary: 'customTextSummary',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      hotValue: 'hotValue',
      images: 'images',
      news: 'news',
      pubTime: 'pubTime',
      textSummary: 'textSummary',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customHotValue: 'number',
      customTextSummary: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      images: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesImages },
      news: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputHotTopicSummariesNews },
      pubTime: 'string',
      textSummary: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias extends $dara.Model {
  /**
   * @example
   * http://xxxx
   */
  fileUrl?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  sortScore?: number;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'fileUrl',
      mediaType: 'mediaType',
      sortScore: 'sortScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaType: 'string',
      sortScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadOutput extends $dara.Model {
  articles?: RunHotTopicChatResponseBodyPayloadOutputArticles[];
  category?: string;
  hotTopicSummaries?: RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries[];
  keyword?: string;
  location?: string;
  multimodalMedias?: RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias[];
  recommendQueries?: string[];
  searchQuery?: string;
  /**
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'articles',
      category: 'category',
      hotTopicSummaries: 'hotTopicSummaries',
      keyword: 'keyword',
      location: 'location',
      multimodalMedias: 'multimodalMedias',
      recommendQueries: 'recommendQueries',
      searchQuery: 'searchQuery',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputArticles },
      category: 'string',
      hotTopicSummaries: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputHotTopicSummaries },
      keyword: 'string',
      location: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': RunHotTopicChatResponseBodyPayloadOutputMultimodalMedias },
      recommendQueries: { 'type': 'array', 'itemType': 'string' },
      searchQuery: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.hotTopicSummaries)) {
      $dara.Model.validateArray(this.hotTopicSummaries);
    }
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    if(Array.isArray(this.recommendQueries)) {
      $dara.Model.validateArray(this.recommendQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunHotTopicChatResponseBodyPayloadUsage extends $dara.Model {
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
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
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

export class RunHotTopicChatResponseBodyPayload extends $dara.Model {
  output?: RunHotTopicChatResponseBodyPayloadOutput;
  usage?: RunHotTopicChatResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunHotTopicChatResponseBodyPayloadOutput,
      usage: RunHotTopicChatResponseBodyPayloadUsage,
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

export class RunHotTopicChatResponseBody extends $dara.Model {
  header?: RunHotTopicChatResponseBodyHeader;
  payload?: RunHotTopicChatResponseBodyPayload;
  /**
   * @example
   * 04DA1A52-4E51-56CB-BA64-FDDA0B53BAE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunHotTopicChatResponseBodyHeader,
      payload: RunHotTopicChatResponseBodyPayload,
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

