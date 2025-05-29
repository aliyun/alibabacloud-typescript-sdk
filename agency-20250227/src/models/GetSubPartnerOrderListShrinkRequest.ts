// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerOrderListShrinkRequest extends $dara.Model {
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
   * 209335720330622
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
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  payAmountAfter?: number;
  /**
   * @example
   * 100
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
   * 202501101023
   */
  projectId?: number;
  subPartnerName?: string;
  /**
   * @example
   * 123432311
   */
  subPartnerUid?: number;
  static names(): { [key: string]: string } {
    return {
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
      subPartnerName: 'SubPartnerName',
      subPartnerUid: 'SubPartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      subPartnerName: 'string',
      subPartnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

