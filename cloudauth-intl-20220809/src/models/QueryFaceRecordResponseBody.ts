// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceRecordResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 230642938
   */
  faceId?: string;
  /**
   * @example
   * 2025-01-15T02:20:28Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 16112
   */
  id?: number;
  /**
   * @example
   * http://www.xxxx.com/1.jpg
   */
  imgOssUrl?: string;
  /**
   * @example
   * CuN6hiD08qr
   */
  merchantUserId?: string;
  /**
   * @example
   * MANUAL
   */
  registrationType?: string;
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      imgOssUrl: 'ImgOssUrl',
      merchantUserId: 'MerchantUserId',
      registrationType: 'RegistrationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      gmtCreate: 'string',
      id: 'number',
      imgOssUrl: 'string',
      merchantUserId: 'string',
      registrationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFaceRecordResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * 2
   */
  currentPage?: number;
  items?: QueryFaceRecordResponseBodyItems[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * AAAAARfZmVDe9NvRXloR5+8CK9nwqHyx44CQz3pa71+mmu0e
   */
  nextToken?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7F971622-38C0-5F56-B2EC-315367979B4F
   */
  requestId?: string;
  /**
   * @example
   * 6
   */
  totalCount?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': QueryFaceRecordResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

