// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrdersRequest extends $dara.Model {
  /**
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @example
   * myBd
   */
  customerManager?: string;
  /**
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-08-23 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * 209335720330622
   */
  orderId?: number;
  /**
   * @example
   * 0
   */
  orderSource?: number;
  /**
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @example
   * RENEW
   */
  orderType?: string;
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
   * vm_intl
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-08-13 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  timeType?: number;
  static names(): { [key: string]: string } {
    return {
      customerAccount: 'CustomerAccount',
      customerManager: 'CustomerManager',
      customerUid: 'CustomerUid',
      endDate: 'EndDate',
      orderId: 'OrderId',
      orderSource: 'OrderSource',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startDate: 'StartDate',
      timeType: 'TimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAccount: 'string',
      customerManager: 'string',
      customerUid: 'number',
      endDate: 'string',
      orderId: 'number',
      orderSource: 'number',
      orderStatus: 'number',
      orderType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productType: 'string',
      startDate: 'string',
      timeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

