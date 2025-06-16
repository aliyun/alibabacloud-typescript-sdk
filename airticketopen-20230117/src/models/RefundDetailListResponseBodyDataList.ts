// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * whether it is a supplementary refund order (if the refund amount is not enough, you can use RefundApply to create a supplementary refund order)
   * 
   * @example
   * true
   */
  isMultiRefund?: boolean;
  /**
   * @remarks
   * order number that returned by Book
   * 
   * @example
   * 49884*****2345
   */
  orderNum?: number;
  /**
   * @remarks
   * refund order number that returned by RefundApply
   * 
   * @example
   * 49884*****950
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * refund order status 
   * 
   * 0: refund application
   * 
   * 1: refund in progress
   * 
   * 2: refund failed
   * 
   * 3: refund succeeded
   * 
   * @example
   * 1
   */
  refundOrderStatus?: number;
  /**
   * @remarks
   * the original refund order number associated with this supplementary refund order, only avaliable when is_multi_refund=true
   * 
   * @example
   * 49884*****2387
   */
  relatedRefundOrderNum?: string;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * 49884**tde-95za
   */
  transactionNo?: string;
  /**
   * @remarks
   * refund time(timestamp)
   * 
   * @example
   * 1677229002000
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      isMultiRefund: 'is_multi_refund',
      orderNum: 'order_num',
      refundOrderNum: 'refund_order_num',
      refundOrderStatus: 'refund_order_status',
      relatedRefundOrderNum: 'related_refund_order_num',
      transactionNo: 'transaction_no',
      utcCreateTime: 'utc_create_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMultiRefund: 'boolean',
      orderNum: 'number',
      refundOrderNum: 'number',
      refundOrderStatus: 'number',
      relatedRefundOrderNum: 'string',
      transactionNo: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

