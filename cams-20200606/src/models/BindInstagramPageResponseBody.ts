// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindInstagramPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * 13243543543
   */
  accountId?: string;
  /**
   * @remarks
   * The connection status.
   * 
   * @example
   * connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * The current page ID.
   * 
   * @example
   * 1234322333
   */
  pageId?: string;
  /**
   * @remarks
   * The page name.
   * 
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
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: BindInstagramPageResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * fdsfdsf-22fk***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
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

