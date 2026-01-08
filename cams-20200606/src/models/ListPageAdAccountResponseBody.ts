// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPageAdAccountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 29393****
   */
  adAccountId?: string;
  /**
   * @example
   * Alibaba
   */
  adAccountName?: string;
  /**
   * @example
   * USD
   */
  currency?: string;
  /**
   * @example
   * 2030***
   */
  pageId?: string;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      adAccountName: 'AdAccountName',
      currency: 'Currency',
      pageId: 'PageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      adAccountName: 'string',
      currency: 'string',
      pageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPageAdAccountResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListPageAdAccountResponseBodyData[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 39**
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
      data: { 'type': 'array', 'itemType': ListPageAdAccountResponseBodyData },
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

