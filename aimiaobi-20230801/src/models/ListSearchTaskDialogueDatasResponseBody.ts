// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSearchTaskDialogueDatasResponseBodyArticles } from "./ListSearchTaskDialogueDatasResponseBodyArticles";
import { ListSearchTaskDialogueDatasResponseBodyImages } from "./ListSearchTaskDialogueDatasResponseBodyImages";
import { ListSearchTaskDialogueDatasResponseBodyVideos } from "./ListSearchTaskDialogueDatasResponseBodyVideos";


export class ListSearchTaskDialogueDatasResponseBody extends $dara.Model {
  articles?: ListSearchTaskDialogueDatasResponseBodyArticles[];
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

