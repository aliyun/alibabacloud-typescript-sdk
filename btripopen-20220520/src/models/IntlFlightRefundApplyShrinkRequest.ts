// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightRefundApplyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1002145190081005400
   */
  orderId?: string;
  /**
   * @example
   * 3750656668336001024
   */
  outOrderId?: string;
  /**
   * @example
   * 202503251022170001
   */
  outRefundApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * edcac4f4c79d40ccb141ddb6da567e65
   */
  passengerJourneyGroupKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
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

