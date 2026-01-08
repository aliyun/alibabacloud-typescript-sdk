// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDmAccountResponseBodyData extends $dara.Model {
  /**
   * @example
   * send1@xx.xx.asia
   */
  accountName?: string;
  /**
   * @example
   * 1743579634000
   */
  createTime?: number;
  /**
   * @example
   * a@b.com
   */
  mailAddressId?: string;
  /**
   * @example
   * trigger
   */
  sendtype?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      createTime: 'CreateTime',
      mailAddressId: 'MailAddressId',
      sendtype: 'Sendtype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      createTime: 'number',
      mailAddressId: 'string',
      sendtype: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDmAccountResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListDmAccountResponseBodyData[];
  /**
   * @example
   * None
   */
  message?: string;
  /**
   * @example
   * xis-sx***
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDmAccountResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

