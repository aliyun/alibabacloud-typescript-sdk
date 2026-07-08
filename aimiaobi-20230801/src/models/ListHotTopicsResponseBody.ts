// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotTopicsResponseBodyDataStructureSummaryDocList extends $dara.Model {
  /**
   * @remarks
   * The source of the article.
   * 
   * @example
   * 夸克
   */
  source?: string;
  /**
   * @remarks
   * The article title.
   * 
   * @example
   * xxxxx
   */
  title?: string;
  /**
   * @remarks
   * The article URL.
   * 
   * @example
   * http://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
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

export class ListHotTopicsResponseBodyDataStructureSummary extends $dara.Model {
  /**
   * @remarks
   * A list of articles used to generate the title and summary.
   */
  docList?: ListHotTopicsResponseBodyDataStructureSummaryDocList[];
  /**
   * @remarks
   * The generated summary.
   * 
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @remarks
   * The generated title.
   * 
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      docList: 'DocList',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docList: { 'type': 'array', 'itemType': ListHotTopicsResponseBodyDataStructureSummaryDocList },
      summary: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docList)) {
      $dara.Model.validateArray(this.docList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID. This parameter is returned only when `TopicSource` is `Custom`.
   * 
   * @example
   * 异步任务ID（自定义主题场景下使用）
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The time the topic was created, in `yyyy-MM-dd HH:mm:ss` format.
   * 
   * @example
   * 2026-06-04 12:34:56
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the topic. This parameter is returned only when `TopicSource` is `Custom`.
   * 
   * @example
   * 创建用户ID（自定义主题场景下使用）
   */
  createUser?: string;
  /**
   * @remarks
   * A custom field for business-specific data, such as a keyword.
   * 
   * @example
   * biz-tag-001
   */
  customField?: string;
  /**
   * @remarks
   * The popularity score of the topic.
   * 
   * @example
   * 61
   */
  hotValue?: number;
  /**
   * @remarks
   * The ID of the hot topic.
   * 
   * @example
   * 热榜ID
   */
  id?: string;
  /**
   * @remarks
   * The asynchronous task status. This parameter is returned only when `TopicSource` is `Custom`. Valid values: `PENDING`, `RUNNING`, `SUCCEEDED`, `SUSPENDED`, `FAILED`, and `CANCELED`.
   * 
   * @example
   * FAILED
   */
  status?: string;
  /**
   * @remarks
   * A list of structured topic summaries.
   */
  structureSummary?: ListHotTopicsResponseBodyDataStructureSummary[];
  /**
   * @remarks
   * The hot topic summary.
   * 
   * @example
   * 热榜摘要
   */
  summary?: string;
  /**
   * @remarks
   * The error message returned when the asynchronous task fails.
   * 
   * @example
   * 异步任务失败错误信息
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * The asynchronous task status. This parameter is returned only when `TopicSource` is `Custom`. Valid values: `0` (Pending), `1` (Running), `2` (Succeeded), `3` (Suspended, not currently in use), `4` (Failed), and `6` (Canceled).
   * 
   * @example
   * 26
   */
  taskStatus?: number;
  /**
   * @remarks
   * The unique topic name.
   * 
   * @example
   * 主题唯一名称
   */
  topic?: string;
  /**
   * @remarks
   * The source of the hot topic. Valid values:
   * 
   * - `Toutiao`
   * 
   * - `Quark`
   * 
   * - `Baidu`
   * 
   * - `Sina`
   * 
   * - `Custom`
   * 
   * - `Aggregation`
   * 
   * @example
   * Toutiao
   */
  topicSource?: string;
  /**
   * @remarks
   * The URL of the original topic.
   * 
   * @example
   * https://www.example.com/topic/123
   */
  topicUrl?: string;
  /**
   * @remarks
   * The data version.
   * 
   * @example
   * 数据版本
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      customField: 'CustomField',
      hotValue: 'HotValue',
      id: 'Id',
      status: 'Status',
      structureSummary: 'StructureSummary',
      summary: 'Summary',
      taskErrorMessage: 'TaskErrorMessage',
      taskStatus: 'TaskStatus',
      topic: 'Topic',
      topicSource: 'TopicSource',
      topicUrl: 'TopicUrl',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      createTime: 'string',
      createUser: 'string',
      customField: 'string',
      hotValue: 'number',
      id: 'string',
      status: 'string',
      structureSummary: { 'type': 'array', 'itemType': ListHotTopicsResponseBodyDataStructureSummary },
      summary: 'string',
      taskErrorMessage: 'string',
      taskStatus: 'number',
      topic: 'string',
      topicSource: 'string',
      topicUrl: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.structureSummary)) {
      $dara.Model.validateArray(this.structureSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotTopicsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListHotTopicsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The maximum number of results returned on this page.
   * 
   * @example
   * 94
   */
  maxResults?: number;
  /**
   * @remarks
   * The result message for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique ID for the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of `true` indicates success; `false` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of topics found.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotTopicsResponseBodyData },
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

