// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightRefundApplyRequestRefundSegmentList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  segmentKey?: string;
  static names(): { [key: string]: string } {
    return {
      segmentKey: 'segment_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundApplyRequestSelectedPassengers extends $dara.Model {
  fullName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerId?: number;
  static names(): { [key: string]: string } {
    return {
      fullName: 'full_name',
      passengerId: 'passenger_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullName: 'string',
      passengerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundApplyRequest extends $dara.Model {
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
  refundSegmentList?: IntlFlightRefundApplyRequestRefundSegmentList[];
  /**
   * @remarks
   * This parameter is required.
   */
  selectedPassengers?: IntlFlightRefundApplyRequestSelectedPassengers[];
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outRefundApplyId: 'out_refund_apply_id',
      passengerJourneyGroupKey: 'passenger_journey_group_key',
      refundReasonCode: 'refund_reason_code',
      refundSegmentList: 'refund_segment_list',
      selectedPassengers: 'selected_passengers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
      outRefundApplyId: 'string',
      passengerJourneyGroupKey: 'string',
      refundReasonCode: 'string',
      refundSegmentList: { 'type': 'array', 'itemType': IntlFlightRefundApplyRequestRefundSegmentList },
      selectedPassengers: { 'type': 'array', 'itemType': IntlFlightRefundApplyRequestSelectedPassengers },
    };
  }

  validate() {
    if(Array.isArray(this.refundSegmentList)) {
      $dara.Model.validateArray(this.refundSegmentList);
    }
    if(Array.isArray(this.selectedPassengers)) {
      $dara.Model.validateArray(this.selectedPassengers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

