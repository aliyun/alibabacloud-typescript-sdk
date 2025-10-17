// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFaceRecordResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Face ID.
   * 
   * @example
   * 230642938
   */
  faceId?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2025-01-15T02:20:28Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 16112
   */
  id?: number;
  /**
   * @remarks
   * Face image URL.
   * 
   * @example
   * http://www.xxxx.com/1.jpg
   */
  imgOssUrl?: string;
  /**
   * @remarks
   * Merchant User ID.
   * 
   * @example
   * CuN6hiD08qr
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Registration type.
   * 
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
   * @remarks
   * Return code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Current query page number.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * List of returned information.
   */
  items?: QueryFaceRecordResponseBodyItems[];
  /**
   * @remarks
   * Maximum number of data entries per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Token for the next query start.
   * 
   * @example
   * AAAAARfZmVDe9NvRXloR5+8CK9nwqHyx44CQz3pa71+mmu0e
   */
  nextToken?: string;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 7F971622-38C0-5F56-B2EC-315367979B4F
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
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

