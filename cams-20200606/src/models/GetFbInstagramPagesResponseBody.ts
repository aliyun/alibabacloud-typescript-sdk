// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFbInstagramPagesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1245454654654
   */
  accountId?: string;
  /**
   * @example
   * Alice
   */
  accountName?: string;
  /**
   * @example
   * Connected
   */
  connectionStatus?: string;
  /**
   * @example
   * 12534653543
   */
  pageId?: string;
  /**
   * @example
   * iwhalecloud
   */
  pageName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      connectionStatus: 'ConnectionStatus',
      pageId: 'PageId',
      pageName: 'PageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      connectionStatus: 'string',
      pageId: 'string',
      pageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFbInstagramPagesResponseBody extends $dara.Model {
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
  data?: GetFbInstagramPagesResponseBodyData[];
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * hgfh77-gfh55***
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
      data: { 'type': 'array', 'itemType': GetFbInstagramPagesResponseBodyData },
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

