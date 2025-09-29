// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias extends $dara.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBodyArticles extends $dara.Model {
  /**
   * @example
   * 作者
   */
  author?: string;
  /**
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @example
   * 文章内容
   */
  content?: string;
  /**
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @example
   * text
   */
  docType?: string;
  /**
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @example
   * xx
   */
  extend3?: string;
  multimodalMedias?: ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias[];
  /**
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @example
   * 新华社
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
      author: 'Author',
      categoryUuid: 'CategoryUuid',
      content: 'Content',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      categoryUuid: 'string',
      content: 'string',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias },
      pubTime: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBodyAudios extends $dara.Model {
  /**
   * @example
   * http://xxx
   */
  fileUrl?: string;
  /**
   * @example
   * xxxx
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBodyImages extends $dara.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBodyVideos extends $dara.Model {
  /**
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchTaskDialogueDatasResponseBody extends $dara.Model {
  articles?: ListSearchTaskDialogueDatasResponseBodyArticles[];
  audios?: ListSearchTaskDialogueDatasResponseBodyAudios[];
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  images?: ListSearchTaskDialogueDatasResponseBodyImages[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  realtimeSearch?: boolean;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * realtime
   */
  searchType?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  videos?: ListSearchTaskDialogueDatasResponseBodyVideos[];
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      audios: 'Audios',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      images: 'Images',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      realtimeSearch: 'RealtimeSearch',
      requestId: 'RequestId',
      searchType: 'SearchType',
      success: 'Success',
      totalCount: 'TotalCount',
      videos: 'Videos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyArticles },
      audios: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyAudios },
      code: 'string',
      httpStatusCode: 'number',
      images: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyImages },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      realtimeSearch: 'boolean',
      requestId: 'string',
      searchType: 'string',
      success: 'boolean',
      totalCount: 'number',
      videos: { 'type': 'array', 'itemType': ListSearchTaskDialogueDatasResponseBodyVideos },
    };
  }

  validate() {
    if(Array.isArray(this.articles)) {
      $dara.Model.validateArray(this.articles);
    }
    if(Array.isArray(this.audios)) {
      $dara.Model.validateArray(this.audios);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.videos)) {
      $dara.Model.validateArray(this.videos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

