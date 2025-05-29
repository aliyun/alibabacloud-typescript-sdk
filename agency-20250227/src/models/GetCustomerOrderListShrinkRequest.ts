// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrderListShrinkRequest extends $dara.Model {
  /**
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @example
   * 1727789348000
   */
  orderCreateAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderCreateBefore?: number;
  /**
   * @example
   * 13595216
   */
  orderId?: number;
  /**
   * @example
   * 1727789348000
   */
  orderPayAfter?: number;
  /**
   * @example
   * 1741008566000
   */
  orderPayBefore?: number;
  /**
   * @example
   * 3
   */
  orderStatus?: number;
  orderTypeListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  payAmountAfter?: number;
  /**
   * @example
   * 1000
   */
  payAmountBefore?: number;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * ecs
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * 202502002231
   */
  projectId?: number;
  /**
   * @example
   * 1234532
   */
  ramAccountForCustomerManager?: string;
  static names(): { [key: string]: string } {
    return {
      customerAccount: 'CustomerAccount',
      customerUid: 'CustomerUid',
      orderCreateAfter: 'OrderCreateAfter',
      orderCreateBefore: 'OrderCreateBefore',
      orderId: 'OrderId',
      orderPayAfter: 'OrderPayAfter',
      orderPayBefore: 'OrderPayBefore',
      orderStatus: 'OrderStatus',
      orderTypeListShrink: 'OrderTypeList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      payAmountAfter: 'PayAmountAfter',
      payAmountBefore: 'PayAmountBefore',
      payType: 'PayType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      ramAccountForCustomerManager: 'RamAccountForCustomerManager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAccount: 'string',
      customerUid: 'number',
      orderCreateAfter: 'number',
      orderCreateBefore: 'number',
      orderId: 'number',
      orderPayAfter: 'number',
      orderPayBefore: 'number',
      orderStatus: 'number',
      orderTypeListShrink: 'string',
      pageNo: 'number',
      pageSize: 'number',
      payAmountAfter: 'number',
      payAmountBefore: 'number',
      payType: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      ramAccountForCustomerManager: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

