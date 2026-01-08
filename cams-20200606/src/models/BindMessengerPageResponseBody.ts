// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindMessengerPageResponseBodyData extends $dara.Model {
  /**
   * @example
   * CONNECTED
   */
  connectionStatus?: string;
  /**
   * @example
   * 1654543543543
   */
  pageId?: string;
  /**
   * @example
   * iwhalecloud
   */
  pageName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      pageId: 'PageId',
      pageName: 'PageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class BindMessengerPageResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * ok
   */
  code?: string;
  data?: BindMessengerPageResponseBodyData[];
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * DSFDS-8FSDFS**
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: { 'type': 'array', 'itemType': BindMessengerPageResponseBodyData },
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

