// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlipayTransferStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The sub-account ID (ignored by the API).
   * 
   * @example
   * 1348393307144609
   */
  accountId?: string;
  /**
   * @remarks
   * The payment details (ignored by the API).
   * 
   * @example
   * {}
   */
  alipayOrderDetail?: string;
  /**
   * @remarks
   * The Alipay order ID.
   * 
   * @example
   * 1234234
   */
  alipayOrderId?: string;
  /**
   * @remarks
   * The code associated with the tipping.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The creator (ignored by the API).
   * 
   * @example
   * 234234
   */
  creator?: string;
  /**
   * @remarks
   * The primary account ID (ignored by the API).
   * 
   * @example
   * 1007576424487905
   */
  mainAccountId?: string;
  /**
   * @remarks
   * The modifier (ignored by the API).
   * 
   * @example
   * 234234
   */
  modifier?: string;
  /**
   * @remarks
   * The tipping link (ignored by the API).
   * 
   * @example
   * https://xxx.aliyun.com
   */
  qrURL?: string;
  /**
   * @remarks
   * The ownership status of the tipping application.
   * 
   * @example
   * publish
   */
  scope?: string;
  /**
   * @remarks
   * The tipping status. Valid values:
   * - 1: Succeeded.
   * - 0: Deleted.
   * - 2: Pending tipping.
   * - 3: Canceled.
   * - 4: Refunded.
   * - 5: Closed.
   * - 6: Failed.
   * - 7: Disputed or abnormal.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The transfer title.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The total order amount. Unit: CNY.
   * 
   * @example
   * 0.22
   */
  transAmount?: string;
  /**
   * @remarks
   * The Alipay product wallet code.
   * 
   * @example
   * xsdfsdf
   */
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
  /**
   * @remarks
   * The tipping result data.
   */
  data?: GetAlipayTransferStatusResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
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

