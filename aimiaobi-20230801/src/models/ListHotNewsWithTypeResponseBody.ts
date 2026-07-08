// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotNewsWithTypeResponseBodyDataNews extends $dara.Model {
  /**
   * @remarks
   * The author.
   * 
   * @example
   * 作者名称
   */
  author?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * 新闻内容
   */
  content?: string;
  /**
   * @remarks
   * The unique identifier of the internal document.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  docUuid?: string;
  /**
   * @remarks
   * The image URLs.
   */
  imageUrls?: string[];
  /**
   * @remarks
   * The publish time.
   * 
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  /**
   * @remarks
   * The search source.
   * 
   * @example
   * 新浪热榜
   */
  searchSource?: string;
  /**
   * @remarks
   * The search source name.
   * 
   * @example
   * 新浪热榜
   */
  searchSourceName?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * 新浪新闻综合
   */
  source?: string;
  /**
   * @remarks
   * The article summary.
   * 
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * 社会
   */
  tag?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 新闻标题
   */
  title?: string;
  /**
   * @remarks
   * The system update time.
   * 
   * @example
   * 2023-10-14 14:30:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The article URL.
   * 
   * @example
   * http://www.example.com/a.html
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

export class ListHotNewsWithTypeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The news list.
   */
  news?: ListHotNewsWithTypeResponseBodyDataNews[];
  /**
   * @remarks
   * The news category. Valid values:
   * - society: social current affairs.
   * - person: people news.
   * - government: government affairs.
   * 
   * @example
   * society
   */
  newsType?: string;
  /**
   * @remarks
   * The news category name.
   * 
   * @example
   * 社会时事
   */
  newsTypeName?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 77
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      news: 'News',
      newsType: 'NewsType',
      newsTypeName: 'NewsTypeName',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      news: { 'type': 'array', 'itemType': ListHotNewsWithTypeResponseBodyDataNews },
      newsType: 'string',
      newsTypeName: 'string',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.news)) {
      $dara.Model.validateArray(this.news);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeResponseBody extends $dara.Model {
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
   * The business data.
   */
  data?: ListHotNewsWithTypeResponseBodyData[];
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
   * The error description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
   * - false: The request failed.
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
      data: { 'type': 'array', 'itemType': ListHotNewsWithTypeResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

