// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicByIdResponseBodyDataStructureSummaryDocList extends $dara.Model {
  /**
   * @remarks
   * Article source
   * 
   * @example
   * 头条
   */
  source?: string;
  /**
   * @remarks
   * Article title
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * Article URL
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

export class GetTopicByIdResponseBodyDataStructureSummary extends $dara.Model {
  /**
   * @remarks
   * Articles referenced to generate the title summary
   */
  docList?: GetTopicByIdResponseBodyDataStructureSummaryDocList[];
  /**
   * @remarks
   * Summary
   * 
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @remarks
   * Title
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
      docList: { 'type': 'array', 'itemType': GetTopicByIdResponseBodyDataStructureSummaryDocList },
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

export class GetTopicByIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Asynchronous task ID (used in custom topic scenarios)
   * 
   * @example
   * 异步任务ID（自定义主题场景下使用）
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * Creator user ID (used in custom topic scenarios)
   * 
   * @example
   * 创建用户ID（自定义主题场景下使用）
   */
  createUser?: string;
  /**
   * @remarks
   * Hotness value
   * 
   * @example
   * 43
   */
  hotValue?: number;
  /**
   * @remarks
   * Hot topic ID
   * 
   * @example
   * 热榜ID
   */
  id?: string;
  /**
   * @remarks
   * Asynchronous task status (used in custom event scenarios) (PENDING: pending, RUNNING: running, SUCCESSED: succeeded, SUSPENDED: suspended, FAILED: failed, CANCELED: canceled)
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * List of structured topic summaries
   */
  structureSummary?: GetTopicByIdResponseBodyDataStructureSummary[];
  /**
   * @remarks
   * Hot topic summary
   * 
   * @example
   * 热榜摘要
   */
  summary?: string;
  /**
   * @remarks
   * Error message for asynchronous task failure
   * 
   * @example
   * 异步任务失败错误信息
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * Asynchronous task status. 0: pending, 1: running, 2: succeeded, 3: suspended (not used), 4: failed, 6: canceled (used in custom event scenarios).
   * 
   * @example
   * 14
   */
  taskStatus?: number;
  /**
   * @remarks
   * Unique topic name
   * 
   * @example
   * 主题唯一名称
   */
  topic?: string;
  /**
   * @remarks
   * Hot topic source. Supported sources:
   * 
   * - Toutiao: Toutiao
   * 
   * - Quark: Quark
   * 
   * - Baidu: Baidu
   * 
   * - Sina: Sina
   * 
   * - Custom: Custom
   * 
   * - Aggregation: Hot Topic List
   * 
   * @example
   * Toutiao
   */
  topicSource?: string;
  /**
   * @remarks
   * Data version
   * 
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
      structureSummary: { 'type': 'array', 'itemType': GetTopicByIdResponseBodyDataStructureSummary },
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

export class GetTopicByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetTopicByIdResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Unique request identifier
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded: true for success, false for failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTopicByIdResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

