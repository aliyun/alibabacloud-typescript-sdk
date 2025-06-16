// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails } from "./RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails";


export class RefundDetailResponseBodyDataMultiRefundDetails extends $dara.Model {
  /**
   * @remarks
   * supplementary refund order number
   * 
   * @example
   * 498843***6950
   */
  multiRefundOrderNum?: number;
  /**
   * @remarks
   * transaction number of the supplementary refund order
   * 
   * @example
   * 498843***6950
   */
  multiRefundTransactionNo?: string;
  /**
   * @remarks
   * supplementary refund details in passenger dimension
   */
  passengerMultiRefundDetails?: RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails[];
  static names(): { [key: string]: string } {
    return {
      multiRefundOrderNum: 'multi_refund_order_num',
      multiRefundTransactionNo: 'multi_refund_transaction_no',
      passengerMultiRefundDetails: 'passenger_multi_refund_details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRefundOrderNum: 'number',
      multiRefundTransactionNo: 'string',
      passengerMultiRefundDetails: { 'type': 'array', 'itemType': RefundDetailResponseBodyDataMultiRefundDetailsPassengerMultiRefundDetails },
    };
  }

  validate() {
    if(Array.isArray(this.passengerMultiRefundDetails)) {
      $dara.Model.validateArray(this.passengerMultiRefundDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

