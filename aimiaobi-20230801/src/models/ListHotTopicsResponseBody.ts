// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotTopicsResponseBodyDataStructureSummaryDocList extends $dara.Model {
  source?: string;
  /**
   * @example
   * xxxxx
   */
  title?: string;
  /**
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
  docList?: ListHotTopicsResponseBodyDataStructureSummaryDocList[];
  /**
   * @example
   * 摘要
   */
  summary?: string;
  /**
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
   * @example
   * 异步任务ID（自定义主题场景下使用）
   */
  asyncTaskId?: string;
  /**
   * @example
   * 创建用户ID（自定义主题场景下使用）
   */
  createUser?: string;
  /**
   * @example
   * 61
   */
  hotValue?: number;
  /**
   * @example
   * 热榜ID
   */
  id?: string;
  /**
   * @example
   * FAILED
   */
  status?: string;
  structureSummary?: ListHotTopicsResponseBodyDataStructureSummary[];
  /**
   * @example
   * 热榜摘要
   */
  summary?: string;
  /**
   * @example
   * 异步任务失败错误信息
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 26
   */
  taskStatus?: number;
  /**
   * @example
   * 主题唯一名称
   */
  topic?: string;
  /**
   * @example
   * 热榜源，目前支持的热榜源: Toutiao：头条、Quark：夸克、Baidu：百度、Sina：新浪。Custom：自定义、Aggregation：热点话题榜
   */
  topicSource?: string;
  /**
   * @example
   * 数据版本
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      createUser: 'CreateUser',
      hotValue: 'HotValue',
      id: 'Id',
      status: 'Status',
      structureSummary: 'StructureSummary',
      summary: 'Summary',
      taskErrorMessage: 'TaskErrorMessage',
      taskStatus: 'TaskStatus',
      topic: 'Topic',
      topicSource: 'TopicSource',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      createUser: 'string',
      hotValue: 'number',
      id: 'string',
      status: 'string',
      structureSummary: { 'type': 'array', 'itemType': ListHotTopicsResponseBodyDataStructureSummary },
      summary: 'string',
      taskErrorMessage: 'string',
      taskStatus: 'number',
      topic: 'string',
      topicSource: 'string',
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
   * @example
   * NoData
   */
  code?: string;
  data?: ListHotTopicsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 94
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 下一页的token
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

