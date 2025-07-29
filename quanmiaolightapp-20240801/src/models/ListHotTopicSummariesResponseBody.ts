// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotTopicSummariesResponseBodyDataNewsComments extends $dara.Model {
  /**
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBodyDataNews extends $dara.Model {
  comments?: ListHotTopicSummariesResponseBodyDataNewsComments[];
  /**
   * @example
   * xx
   */
  content?: string;
  /**
   * @example
   * 2024-09-10 15:32:00
   */
  pubTime?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * url
   * 
   * @example
   * http://xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'comments',
      content: 'content',
      pubTime: 'pubTime',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyDataNewsComments },
      content: 'string',
      pubTime: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.comments)) {
      $dara.Model.validateArray(this.comments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBodyDataSummarySummaries extends $dara.Model {
  /**
   * @example
   * xx
   */
  summary?: string;
  /**
   * @example
   * xx
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      summary: 'summary',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBodyDataSummary extends $dara.Model {
  summaries?: ListHotTopicSummariesResponseBodyDataSummarySummaries[];
  static names(): { [key: string]: string } {
    return {
      summaries: 'summaries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summaries: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyDataSummarySummaries },
    };
  }

  validate() {
    if(Array.isArray(this.summaries)) {
      $dara.Model.validateArray(this.summaries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBodyData extends $dara.Model {
  category?: string;
  /**
   * @example
   * xx
   */
  hotTopic?: string;
  /**
   * @example
   * 2024-09-13_12
   */
  hotTopicVersion?: string;
  /**
   * @example
   * 1000000
   */
  hotValue?: number;
  /**
   * @example
   * db5dc5b3d8954a30b65ba700c9dda3bb
   */
  id?: string;
  news?: ListHotTopicSummariesResponseBodyDataNews[];
  summary?: ListHotTopicSummariesResponseBodyDataSummary;
  /**
   * @example
   * xx
   */
  textSummary?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      hotTopic: 'hotTopic',
      hotTopicVersion: 'hotTopicVersion',
      hotValue: 'hotValue',
      id: 'id',
      news: 'news',
      summary: 'summary',
      textSummary: 'textSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      hotTopic: 'string',
      hotTopicVersion: 'string',
      hotValue: 'number',
      id: 'string',
      news: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyDataNews },
      summary: ListHotTopicSummariesResponseBodyDataSummary,
      textSummary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicSummariesResponseBody extends $dara.Model {
  /**
   * @example
   * xx
   */
  code?: string;
  data?: ListHotTopicSummariesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * JlroP3CjgQh5PQDlH3ArzADkBTPZgVqo+64jhZRglNq0mEYoV5SlGb/Juvo8CdfYE9rlwEr2pIJQwdaYotak9g==
   */
  nextToken?: string;
  /**
   * @example
   * 117F5ABE-CF02-5502-9A3F-E56BC9081A64
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotTopicSummariesResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

