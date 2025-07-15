// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetResponseBodyDataNewsArticleResultsData extends $dara.Model {
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 2024-11-12 15:12:14
   */
  pubTime?: string;
  /**
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @example
   * https://www.example.com/aaa.docx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateDatasetResponseBodyDataNewsArticleResults extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: UpdateDatasetResponseBodyDataNewsArticleResultsData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      message: 'Message',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': UpdateDatasetResponseBodyDataNewsArticleResultsData },
      message: 'string',
      size: 'number',
      total: 'number',
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

export class UpdateDatasetResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  newsArticleResults?: UpdateDatasetResponseBodyDataNewsArticleResults[];
  /**
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      newsArticleResults: 'NewsArticleResults',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      newsArticleResults: { 'type': 'array', 'itemType': UpdateDatasetResponseBodyDataNewsArticleResults },
      searchDatasetEnable: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.newsArticleResults)) {
      $dara.Model.validateArray(this.newsArticleResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: UpdateDatasetResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
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
      data: UpdateDatasetResponseBodyData,
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

