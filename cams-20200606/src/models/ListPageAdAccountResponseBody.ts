// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPageAdAccountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Meta ad account ID.
   * 
   * @example
   * 29393****
   */
  adAccountId?: string;
  /**
   * @remarks
   * The name of the ad account.
   * 
   * @example
   * Alibaba
   */
  adAccountName?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * USD
   */
  currency?: string;
  /**
   * @remarks
   * The Page ID of Messenger.
   * 
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
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListPageAdAccountResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39**
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
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

