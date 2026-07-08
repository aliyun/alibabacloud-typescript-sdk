// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchNewsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The author of the article. This parameter may not be returned for some articles.
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * The content of the article. This parameter is always returned.
   * 
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @remarks
   * The unique ID of the internal document. This parameter is always returned.
   * 
   * @example
   * 9a598b44c6444da5907b8ea68a5f82c4
   */
  docUuid?: string;
  /**
   * @remarks
   * The URLs of the images. This parameter is deprecated and is no longer returned. Do not use it.
   */
  imageUrls?: string[];
  /**
   * @remarks
   * The time when the article was published. This parameter is always returned.
   * 
   * @example
   * 2024-01-18 06:46:22
   */
  pubTime?: string;
  /**
   * @remarks
   * The ID of the internal search source. This parameter is always returned.
   * 
   * @example
   * QuarkCommonNews
   */
  searchSource?: string;
  /**
   * @remarks
   * The name of the internal search source. This parameter is always returned.
   * 
   * @example
   * 夸克检索
   */
  searchSourceName?: string;
  /**
   * @remarks
   * The source of the article. This parameter may not be returned for some articles.
   * 
   * @example
   * 央视网
   */
  source?: string;
  /**
   * @remarks
   * The summary of the article. This parameter may not be returned for some articles.
   * 
   * @example
   * 文章摘要
   */
  summary?: string;
  /**
   * @remarks
   * The tag of the article. This parameter may not be returned for some articles.
   * 
   * @example
   * 文章标签
   */
  tag?: string;
  /**
   * @remarks
   * The title of the article. This parameter is always returned.
   * 
   * @example
   * 文章标题
   */
  title?: string;
  /**
   * @remarks
   * The time when the system was updated. This parameter is deprecated and is no longer returned. Do not use it.
   * 
   * @example
   * 2024-01-18 06:46:22
   */
  updateTime?: string;
  /**
   * @remarks
   * The URL of the article. This parameter is always returned.
   * 
   * @example
   * 文章URL
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      updateTime: 'UpdateTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrls)) {
      $dara.Model.validateArray(this.imageUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * successful
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
   * The data returned.
   */
  data?: SearchNewsResponseBodyData[];
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
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * The number of records on each page.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of \\`true\\` indicates success and a value of \\`false\\` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
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
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': SearchNewsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
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

