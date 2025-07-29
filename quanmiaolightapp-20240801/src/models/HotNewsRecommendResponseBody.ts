// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotNewsRecommendResponseBodyDataNews extends $dara.Model {
  /**
   * @example
   * xx
   */
  content?: string;
  imageUrls?: string[];
  /**
   * @example
   * 2024-09-10 15:32:00
   */
  pubTime?: string;
  searchSource?: string;
  source?: string;
  /**
   * @example
   * xx
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
      imageUrls: 'imageUrls',
      pubTime: 'pubTime',
      searchSource: 'searchSource',
      source: 'source',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      searchSource: 'string',
      source: 'string',
      title: 'string',
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

export class HotNewsRecommendResponseBodyData extends $dara.Model {
  news?: HotNewsRecommendResponseBodyDataNews[];
  static names(): { [key: string]: string } {
    return {
      news: 'news',
    };
  }

  static types(): { [key: string]: any } {
    return {
      news: { 'type': 'array', 'itemType': HotNewsRecommendResponseBodyDataNews },
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

export class HotNewsRecommendResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: HotNewsRecommendResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 575D5893-01DB-5C81-A899-74F67616762A
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: HotNewsRecommendResponseBodyData,
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

