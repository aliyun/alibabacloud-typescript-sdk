// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFbMessengerPagesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 17433243434
   */
  pageId?: string;
  /**
   * @example
   * iwhalecloud-2
   */
  pageName?: string;
  static names(): { [key: string]: string } {
    return {
      pageId: 'PageId',
      pageName: 'PageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetFbMessengerPagesResponseBody extends $dara.Model {
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
  data?: GetFbMessengerPagesResponseBodyData[];
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * sd2dsd-33*****
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
      data: { 'type': 'array', 'itemType': GetFbMessengerPagesResponseBodyData },
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

