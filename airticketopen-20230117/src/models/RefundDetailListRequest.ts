// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailListRequest extends $dara.Model {
  /**
   * @remarks
   * order number returned by Book
   * 
   * @example
   * 49884*****950
   */
  orderNum?: number;
  /**
   * @remarks
   * pagination query parameters, from which page to start querying
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * pagination query parameters, how many orders to return
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * the earliest time(timestamp) of refund order creation
   * 
   * This parameter is required.
   * 
   * @example
   * 1677229002000
   */
  refundCreateBeginTime?: number;
  /**
   * @remarks
   * the latest time(timestamp) of refund order creation
   * 
   * This parameter is required.
   * 
   * @example
   * 1677229005000
   */
  refundCreateEndTime?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      pageIndex: 'page_index',
      pageSize: 'page_size',
      refundCreateBeginTime: 'refund_create_begin_time',
      refundCreateEndTime: 'refund_create_end_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      refundCreateBeginTime: 'number',
      refundCreateEndTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

