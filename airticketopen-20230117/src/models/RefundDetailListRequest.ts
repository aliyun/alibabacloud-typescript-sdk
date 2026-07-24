// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailListRequest extends $dara.Model {
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * 49884*****950
   */
  orderNum?: number;
  /**
   * @remarks
   * The page index.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for refund order creation. The value is a UTC timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1677229002000
   */
  refundCreateBeginTime?: number;
  /**
   * @remarks
   * The end time for refund order creation. The value is a UTC timestamp.
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

