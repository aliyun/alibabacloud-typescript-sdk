// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundDetailResponseBodyDataMultiRefundDetails } from "./RefundDetailResponseBodyDataMultiRefundDetails";
import { RefundDetailResponseBodyDataPassengerRefundDetails } from "./RefundDetailResponseBodyDataPassengerRefundDetails";
import { RefundDetailResponseBodyDataRefundJourneys } from "./RefundDetailResponseBodyDataRefundJourneys";


export class RefundDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * whether it is a supplementary refund order (if the refund amount is not enough, you can use RefundApply to create a supplementary refund order)
   * 
   * @example
   * false
   */
  containMultiRefund?: boolean;
  /**
   * @remarks
   * supplementary refund orders
   */
  multiRefundDetails?: RefundDetailResponseBodyDataMultiRefundDetails[];
  /**
   * @remarks
   * order number that returned by Book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * refund details by passenger dimension
   */
  passengerRefundDetails?: RefundDetailResponseBodyDataPassengerRefundDetails[];
  /**
   * @remarks
   * refund completed time(timestamp)
   * 
   * @example
   * 1677229005000
   */
  paySuccessUtcTime?: number;
  /**
   * @remarks
   * URLs for refund attachments
   * 
   * @example
   * [zzz,yyy]
   */
  refundAttachmentUrls?: string[];
  /**
   * @remarks
   * refunded journey
   */
  refundJourneys?: RefundDetailResponseBodyDataRefundJourneys[];
  /**
   * @remarks
   * refund order number that returned by RefundApply
   * 
   * @example
   * 4966***617654
   */
  refundOrderNum?: number;
  /**
   * @remarks
   * reason for refund
   * 
   * @example
   * desc reason
   */
  refundReason?: string;
  /**
   * @remarks
   * refund type 
   * 
   * 2: voluntary application
   * 
   * 5: flight delay or cancellation, flight schedule change, etc., due to airline reasons
   * 
   * 6: health reasons with a certificate from a secondary class A hospital or above
   * 
   * 7: non-voluntary confirmed guidance
   * 
   * 100: non-voluntary non-confirmed guidance
   * 
   * @example
   * 5
   */
  refundType?: number;
  /**
   * @remarks
   * reason for refund rejection
   * 
   * @example
   * refuse reason
   */
  refuseReason?: string;
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
  status?: number;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * 1677229005000
   */
  transactionNo?: string;
  /**
   * @remarks
   * refund order created time(timestamp)
   * 
   * @example
   * 1677229002000
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      containMultiRefund: 'contain_multi_refund',
      multiRefundDetails: 'multi_refund_details',
      orderNum: 'order_num',
      passengerRefundDetails: 'passenger_refund_details',
      paySuccessUtcTime: 'pay_success_utc_time',
      refundAttachmentUrls: 'refund_attachment_urls',
      refundJourneys: 'refund_journeys',
      refundOrderNum: 'refund_order_num',
      refundReason: 'refund_reason',
      refundType: 'refund_type',
      refuseReason: 'refuse_reason',
      status: 'status',
      transactionNo: 'transaction_no',
      utcCreateTime: 'utc_create_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containMultiRefund: 'boolean',
      multiRefundDetails: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataMultiRefundDetails },
      orderNum: 'number',
      passengerRefundDetails: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataPassengerRefundDetails },
      paySuccessUtcTime: 'number',
      refundAttachmentUrls: { 'type': 'array', 'itemType': 'string' },
      refundJourneys: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataRefundJourneys },
      refundOrderNum: 'number',
      refundReason: 'string',
      refundType: 'number',
      refuseReason: 'string',
      status: 'number',
      transactionNo: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.multiRefundDetails)) {
      $dara.Model.validateArray(this.multiRefundDetails);
    }
    if(Array.isArray(this.passengerRefundDetails)) {
      $dara.Model.validateArray(this.passengerRefundDetails);
    }
    if(Array.isArray(this.refundAttachmentUrls)) {
      $dara.Model.validateArray(this.refundAttachmentUrls);
    }
    if(Array.isArray(this.refundJourneys)) {
      $dara.Model.validateArray(this.refundJourneys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

