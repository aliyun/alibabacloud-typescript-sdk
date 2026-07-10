// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightRefundApplyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  outOrderId?: string;
  outRefundApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerJourneyGroupKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  refundReasonCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  refundSegmentListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  selectedPassengersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outRefundApplyId: 'out_refund_apply_id',
      passengerJourneyGroupKey: 'passenger_journey_group_key',
      refundReasonCode: 'refund_reason_code',
      refundSegmentListShrink: 'refund_segment_list',
      selectedPassengersShrink: 'selected_passengers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
      outRefundApplyId: 'string',
      passengerJourneyGroupKey: 'string',
      refundReasonCode: 'string',
      refundSegmentListShrink: 'string',
      selectedPassengersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

