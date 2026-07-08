// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetResponseBodyDataNewsArticleResultsData extends $dara.Model {
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
   * The publishing time.
   * 
   * @example
   * 2024-11-12 15:12:14
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
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The list of articles.
   */
  data?: UpdateDatasetResponseBodyDataNewsArticleResultsData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The total number of records.
   * 
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
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * xxx
   */
  createUser?: string;
  /**
   * @remarks
   * The display name of the dataset.
   * 
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @remarks
   * The dataset type.
   * 
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  /**
   * @remarks
   * The list of articles.
   */
  newsArticleResults?: UpdateDatasetResponseBodyDataNewsArticleResults[];
  /**
   * @remarks
   * Indicates whether search is enabled for the dataset.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: UpdateDatasetResponseBodyData;
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
   * The error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates success. A value of false indicates failure.
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

