// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList extends $dara.Model {
  fullName?: string;
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

export class IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList extends $dara.Model {
  canReShop?: boolean;
  passengerId?: number;
  segmentKey?: string;
  unReShopReason?: string;
  unReShopReasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      canReShop: 'can_re_shop',
      passengerId: 'passenger_id',
      segmentKey: 'segment_key',
      unReShopReason: 'un_re_shop_reason',
      unReShopReasonCode: 'un_re_shop_reason_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canReShop: 'boolean',
      passengerId: 'number',
      segmentKey: 'string',
      unReShopReason: 'string',
      unReShopReasonCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListReShopReasonInfoList extends $dara.Model {
  reasonCode?: string;
  reasonDesc?: string;
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

export class IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList extends $dara.Model {
  arrCityCode?: string;
  depCityCode?: string;
  depTime?: string;
  flightNo?: string;
  journeyIndex?: number;
  segmentIndex?: number;
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

export class IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoList extends $dara.Model {
  passengerJourneyGroupKey?: string;
  passengerList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList[];
  passengerSegmentStatusInfoList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList[];
  reShopReasonInfoList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListReShopReasonInfoList[];
  segmentList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList[];
  static names(): { [key: string]: string } {
    return {
      passengerJourneyGroupKey: 'passenger_journey_group_key',
      passengerList: 'passenger_list',
      passengerSegmentStatusInfoList: 'passenger_segment_status_info_list',
      reShopReasonInfoList: 're_shop_reason_info_list',
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerJourneyGroupKey: 'string',
      passengerList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerList },
      passengerSegmentStatusInfoList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList },
      reShopReasonInfoList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListReShopReasonInfoList },
      segmentList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListSegmentList },
    };
  }

  validate() {
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(Array.isArray(this.passengerSegmentStatusInfoList)) {
      $dara.Model.validateArray(this.passengerSegmentStatusInfoList);
    }
    if(Array.isArray(this.reShopReasonInfoList)) {
      $dara.Model.validateArray(this.reShopReasonInfoList);
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

export class IntlFlightReShopConsultResponseBodyModule extends $dara.Model {
  passengerJourneyGroupInfoList?: IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoList[];
  static names(): { [key: string]: string } {
    return {
      passengerJourneyGroupInfoList: 'passenger_journey_group_info_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerJourneyGroupInfoList: { 'type': 'array', 'itemType': IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoList },
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

export class IntlFlightReShopConsultResponseBody extends $dara.Model {
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
  /**
   * @example
   * true
   */
  module?: IntlFlightReShopConsultResponseBodyModule;
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
      module: IntlFlightReShopConsultResponseBodyModule,
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

