// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstagramPostsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-09-30T15:53:01+08:00
   */
  createdTime?: string;
  /**
   * @example
   * https://xxxxxxxx
   */
  fullPicture?: string;
  /**
   * @example
   * 111
   */
  id?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @example
   * https://qjck.oss-cn-shanghai.aliyuncs.com/xcx/2025-08-29/0bfa1c8d-d35f-2dd5-e082-7b00***ee9.jpg?x-oss-process=image/resize,m_lfit,w_1200
   */
  mediaUrl?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * https://xxxxxxxx
   */
  permalinkUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      fullPicture: 'FullPicture',
      id: 'Id',
      mediaType: 'MediaType',
      mediaUrl: 'MediaUrl',
      message: 'Message',
      permalinkUrl: 'PermalinkUrl',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstagramPostsResponseBody extends $dara.Model {
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
  data?: ListInstagramPostsResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 90E63D28-E31D-1EB2-8939-A***66411B2O
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
      data: { 'type': 'array', 'itemType': ListInstagramPostsResponseBodyData },
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

