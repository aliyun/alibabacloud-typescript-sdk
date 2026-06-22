// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstagramPostsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  createdTime?: string;
  /**
   * @example
   * 示例值示例值
   */
  fullPicture?: string;
  /**
   * @example
   * 示例值
   */
  id?: string;
  /**
   * @example
   * 示例值示例值
   */
  mediaType?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  mediaUrl?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
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
  accessDeniedDetail?: string;
  /**
   * @example
   * 示例值示例值
   */
  code?: string;
  data?: ListInstagramPostsResponseBodyData[];
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
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

