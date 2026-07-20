// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightRefundApplyRequestRefundSegmentList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CZ5009PKXHKG0616
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
  /**
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000001
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

