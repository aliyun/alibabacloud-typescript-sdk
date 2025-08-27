// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList extends $dara.Model {
  /**
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
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

export class IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList extends $dara.Model {
  /**
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @example
   * 1000001
   */
  passengerId?: number;
  /**
   * @example
   * CZ5009PKXHKG0616
   */
  segmentKey?: string;
  unRefundReason?: string;
  /**
   * @example
   * 3
   */
  unRefundReasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      canRefund: 'can_refund',
      passengerId: 'passenger_id',
      segmentKey: 'segment_key',
      unRefundReason: 'un_refund_reason',
      unRefundReasonCode: 'un_refund_reason_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canRefund: 'boolean',
      passengerId: 'number',
      segmentKey: 'string',
      unRefundReason: 'string',
      unRefundReasonCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListRefundReasonInfoList extends $dara.Model {
  /**
   * @example
   * 0
   */
  reasonCode?: string;
  reasonDesc?: string;
  /**
   * @example
   * true
   */
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      reasonCode: 'reason_code',
      reasonDesc: 'reason_desc',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonCode: 'string',
      reasonDesc: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList extends $dara.Model {
  /**
   * @example
   * HKG
   */
  arrCityCode?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 2025-06-16 19:20
   */
  depTime?: string;
  /**
   * @example
   * CZ5009
   */
  flightNo?: string;
  /**
   * @example
   * 0
   */
  journeyIndex?: number;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * CZ5009PKXHKG0616
   */
  segmentKey?: string;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      depCityCode: 'dep_city_code',
      depTime: 'dep_time',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      segmentKey: 'segment_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      depCityCode: 'string',
      depTime: 'string',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
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

export class IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoList extends $dara.Model {
  /**
   * @example
   * edcac4f4c79d40ccb141ddb6da567e65
   */
  passengerJourneyGroupKey?: string;
  passengerList?: IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList[];
  passengerSegmentStatusInfoList?: IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList[];
  refundReasonInfoList?: IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListRefundReasonInfoList[];
  segmentList?: IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList[];
  static names(): { [key: string]: string } {
    return {
      passengerJourneyGroupKey: 'passenger_journey_group_key',
      passengerList: 'passenger_list',
      passengerSegmentStatusInfoList: 'passenger_segment_status_info_list',
      refundReasonInfoList: 'refund_reason_info_list',
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerJourneyGroupKey: 'string',
      passengerList: { 'type': 'array', 'itemType': IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList },
      passengerSegmentStatusInfoList: { 'type': 'array', 'itemType': IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList },
      refundReasonInfoList: { 'type': 'array', 'itemType': IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListRefundReasonInfoList },
      segmentList: { 'type': 'array', 'itemType': IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList },
    };
  }

  validate() {
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.passengerSegmentStatusInfoList)) {
      $dara.Model.validateArray(this.passengerSegmentStatusInfoList);
    }
    if(Array.isArray(this.refundReasonInfoList)) {
      $dara.Model.validateArray(this.refundReasonInfoList);
    }
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundConsultResponseBodyModule extends $dara.Model {
  passengerJourneyGroupInfoList?: IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoList[];
  static names(): { [key: string]: string } {
    return {
      passengerJourneyGroupInfoList: 'passenger_journey_group_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerJourneyGroupInfoList: { 'type': 'array', 'itemType': IntlFlightRefundConsultResponseBodyModulePassengerJourneyGroupInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.passengerJourneyGroupInfoList)) {
      $dara.Model.validateArray(this.passengerJourneyGroupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightRefundConsultResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  module?: IntlFlightRefundConsultResponseBodyModule;
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 210bc4b116835992457938931db4de
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: IntlFlightRefundConsultResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

