// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlipayTransferStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1348393307144609
   */
  accountId?: string;
  alipayOrderDetail?: string;
  alipayOrderId?: string;
  /**
   * @example
   * 0
   */
  code?: string;
  creator?: string;
  /**
   * @example
   * 1007576424487905
   */
  mainAccountId?: string;
  modifier?: string;
  qrURL?: string;
  scope?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  title?: string;
  transAmount?: string;
  walletItemCode?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      alipayOrderDetail: 'alipayOrderDetail',
      alipayOrderId: 'alipayOrderId',
      code: 'code',
      creator: 'creator',
      mainAccountId: 'mainAccountId',
      modifier: 'modifier',
      qrURL: 'qrURL',
      scope: 'scope',
      status: 'status',
      title: 'title',
      transAmount: 'transAmount',
      walletItemCode: 'walletItemCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      alipayOrderDetail: 'string',
      alipayOrderId: 'string',
      code: 'string',
      creator: 'string',
      mainAccountId: 'string',
      modifier: 'string',
      qrURL: 'string',
      scope: 'string',
      status: 'number',
      title: 'string',
      transAmount: 'string',
      walletItemCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlipayTransferStatusResponseBody extends $dara.Model {
  data?: GetAlipayTransferStatusResponseBodyData;
  /**
   * @example
   * 6a71f2d9-f1c9-913b-818b-11402910xxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAlipayTransferStatusResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

