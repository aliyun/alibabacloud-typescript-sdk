// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotNewsWithTypeResponseBodyDataNews extends $dara.Model {
  author?: string;
  content?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  docUuid?: string;
  imageUrls?: string[];
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  searchSource?: string;
  searchSourceName?: string;
  source?: string;
  summary?: string;
  tag?: string;
  title?: string;
  /**
   * @example
   * 2023-10-14 14:30:00
   */
  updateTime?: string;
  /**
   * @example
   * http://xxxxx/xxx
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
  news?: ListHotNewsWithTypeResponseBodyDataNews[];
  /**
   * @example
   * society
   */
  newsType?: string;
  newsTypeName?: string;
  /**
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
   * @example
   * DataNotExists
   */
  code?: string;
  data?: ListHotNewsWithTypeResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 数据不存在
   */
  message?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
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

