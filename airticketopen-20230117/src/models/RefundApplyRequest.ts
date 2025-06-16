// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RefundApplyRequestRefundJourneys } from "./RefundApplyRequestRefundJourneys";
import { RefundApplyRequestRefundPassengerList } from "./RefundApplyRequestRefundPassengerList";
import { RefundApplyRequestRefundType } from "./RefundApplyRequestRefundType";


export class RefundApplyRequest extends $dara.Model {
  /**
   * @remarks
   * order number
   * 
   * This parameter is required.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * journeys for which a refund is being requested
   * 
   * This parameter is required.
   */
  refundJourneys?: RefundApplyRequestRefundJourneys[];
  /**
   * @remarks
   * passengers that applying for a refund
   * 
   * This parameter is required.
   */
  refundPassengerList?: RefundApplyRequestRefundPassengerList[];
  /**
   * @remarks
   * refund type and attachments
   * 
   * This parameter is required.
   */
  refundType?: RefundApplyRequestRefundType;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      refundJourneys: 'refund_journeys',
      refundPassengerList: 'refund_passenger_list',
      refundType: 'refund_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      refundJourneys: { 'type': 'array', 'itemType': RefundApplyRequestRefundJourneys },
      refundPassengerList: { 'type': 'array', 'itemType': RefundApplyRequestRefundPassengerList },
      refundType: RefundApplyRequestRefundType,
    };
  }

  validate() {
    if(Array.isArray(this.refundJourneys)) {
      $dara.Model.validateArray(this.refundJourneys);
    }
    if(Array.isArray(this.refundPassengerList)) {
      $dara.Model.validateArray(this.refundPassengerList);
    }
    if(this.refundType && typeof (this.refundType as any).validate === 'function') {
      (this.refundType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

