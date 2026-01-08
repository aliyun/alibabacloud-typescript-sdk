// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindInstagramPageResponseBodyData extends $dara.Model {
  /**
   * @example
   * 13243543543
   */
  accountId?: string;
  /**
   * @example
   * connected
   */
  connectionStatus?: string;
  /**
   * @example
   * 1234322333
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
      connectionStatus: 'ConnectionStatus',
      pageId: 'PageId',
      pageName: 'PageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
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

export class BindInstagramPageResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * ok
   */
  code?: string;
  data?: BindInstagramPageResponseBodyData[];
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * fdsfdsf-22fk***
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
      data: { 'type': 'array', 'itemType': BindInstagramPageResponseBodyData },
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

