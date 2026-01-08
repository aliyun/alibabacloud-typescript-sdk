// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFacebookPostsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2025-04-08T10:44:48
   */
  createdTime?: string;
  /**
   * @example
   * N/A
   */
  fullPicture?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * 1
   */
  mediaType?: string;
  /**
   * @example
   * https://xxxxxx07
   */
  mediaUrl?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * https://xxxxxxx
   */
  permalinkUrl?: string;
  /**
   * @example
   * 453645465***
   */
  requestNo?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      fullPicture: 'FullPicture',
      id: 'Id',
      mediaType: 'MediaType',
      mediaUrl: 'MediaUrl',
      message: 'Message',
      permalinkUrl: 'PermalinkUrl',
      requestNo: 'RequestNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      fullPicture: 'string',
      id: 'string',
      mediaType: 'string',
      mediaUrl: 'string',
      message: 'string',
      permalinkUrl: 'string',
      requestNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFacebookPostsResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListFacebookPostsResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A94866***
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListFacebookPostsResponseBodyData },
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

