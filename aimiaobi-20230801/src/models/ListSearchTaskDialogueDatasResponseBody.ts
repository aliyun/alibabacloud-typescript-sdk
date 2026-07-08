// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias extends $dara.Model {
  /**
   * @remarks
   * The URL of the image or video file.
   * 
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @remarks
   * The unique identifier of the multi-modal data.
   * 
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the multi-modal data.
   * 
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
   * @remarks
   * The author.
   * 
   * @example
   * 作者
   */
  author?: string;
  /**
   * @remarks
   * The unique identifier of the category.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
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
   * The custom unique ID of the document.
   * 
   * @example
   * 文档-自定义的唯一ID
   */
  docId?: string;
  /**
   * @remarks
   * The document type.
   * 
   * @example
   * text
   */
  docType?: string;
  /**
   * @remarks
   * The internal unique identifier of the document.
   * 
   * @example
   * xxx
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * The multi-modal information.
   */
  multimodalMedias?: ListSearchTaskDialogueDatasResponseBodyArticlesMultimodalMedias[];
  /**
   * @remarks
   * The publication time.
   * 
   * @example
   * 2024-11-25 14:25:59
   */
  pubTime?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * 新华社
   */
  source?: string;
  /**
   * @remarks
   * The summary of the article.
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
   * The URL of the article.
   * 
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
   * @remarks
   * The URL of the image or video file.
   * 
   * @example
   * http://xxx
   */
  fileUrl?: string;
  /**
   * @remarks
   * The unique identifier of the multi-modal data.
   * 
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
   * @remarks
   * The URL of the image or video file.
   * 
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @remarks
   * The unique identifier of the multi-modal data.
   * 
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the multi-modal data.
   * 
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
   * @remarks
   * The URL of the image or video file.
   * 
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @remarks
   * The unique identifier of the multi-modal data.
   * 
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the multi-modal data.
   * 
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
  /**
   * @remarks
   * The list of articles.
   */
  articles?: ListSearchTaskDialogueDatasResponseBodyArticles[];
  /**
   * @remarks
   * The list of audio files.
   */
  audios?: ListSearchTaskDialogueDatasResponseBodyAudios[];
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of images.
   */
  images?: ListSearchTaskDialogueDatasResponseBodyImages[];
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether real-time search is enabled.
   * 
   * @example
   * true
   */
  realtimeSearch?: boolean;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * The search type.
   * 
   * @example
   * realtime
   */
  searchType?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of true indicates success, and a value of false indicates failure.
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
  totalCount?: number;
  /**
   * @remarks
   * The list of videos.
   */
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

