// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleApprove extends $dara.Model {
  /**
   * @example
   * test1234
   */
  approveId?: number;
  btripTitle?: string;
  /**
   * @example
   * 1233544
   */
  exceedApproveId?: string;
  /**
   * @example
   * 100231431
   */
  thirdpartApproveId?: string;
  /**
   * @example
   * test123
   */
  thirdpartExceedApproveId?: string;
  static names(): { [key: string]: string } {
    return {
      approveId: 'approve_id',
      btripTitle: 'btrip_title',
      exceedApproveId: 'exceed_approve_id',
      thirdpartApproveId: 'thirdpart_approve_id',
      thirdpartExceedApproveId: 'thirdpart_exceed_approve_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveId: 'number',
      btripTitle: 'string',
      exceedApproveId: 'string',
      thirdpartApproveId: 'string',
      thirdpartExceedApproveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketListFlightList extends $dara.Model {
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  cabinClassName?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  /**
   * @example
   * CA8572
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      depTime: 'dep_time',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      depTime: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketList extends $dara.Model {
  flightList?: FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketListFlightList[];
  ticketNoList?: string[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
      ticketNoList: 'ticket_no_list',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketListFlightList },
      ticketNoList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flightList)) {
      $dara.Model.validateArray(this.flightList);
    }
    if(Array.isArray(this.ticketNoList)) {
      $dara.Model.validateArray(this.ticketNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightOrderUserFeeList extends $dara.Model {
  buildFee?: number;
  corpPayAmount?: number;
  oilFee?: number;
  personPayAmount?: number;
  ticketPrice?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      buildFee: 'build_fee',
      corpPayAmount: 'corp_pay_amount',
      oilFee: 'oil_fee',
      personPayAmount: 'person_pay_amount',
      ticketPrice: 'ticket_price',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildFee: 'number',
      corpPayAmount: 'number',
      oilFee: 'number',
      personPayAmount: 'number',
      ticketPrice: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketListFlightList extends $dara.Model {
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  cabinClassName?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  /**
   * @example
   * HU7052
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      depTime: 'dep_time',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      depTime: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketList extends $dara.Model {
  flightList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketListFlightList[];
  ticketNoList?: string[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
      ticketNoList: 'ticket_no_list',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketListFlightList },
      ticketNoList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flightList)) {
      $dara.Model.validateArray(this.flightList);
    }
    if(Array.isArray(this.ticketNoList)) {
      $dara.Model.validateArray(this.ticketNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundSegmentList extends $dara.Model {
  /**
   * @example
   * CZ
   */
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  /**
   * @example
   * PKX
   */
  arrAptCode?: string;
  arrCity?: string;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * T1
   */
  arrTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  depApt?: string;
  /**
   * @example
   * HGH
   */
  depAptCode?: string;
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * T1
   */
  depTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  flightMile?: number;
  /**
   * @example
   * MU5619
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
  stopCity?: string[];
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrApt: 'arr_apt',
      arrAptCode: 'arr_apt_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      depApt: 'dep_apt',
      depAptCode: 'dep_apt_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightMile: 'flight_mile',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      stopCity: 'stop_city',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrApt: 'string',
      arrAptCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      depApt: 'string',
      depAptCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightMile: 'number',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      stopCity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.stopCity)) {
      $dara.Model.validateArray(this.stopCity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundUserFeeList extends $dara.Model {
  alreadyUseAmount?: number;
  nonRefundableReshopChangeAmount?: number;
  nonRefundableReshopUpgradeAmount?: number;
  refundAmount?: number;
  refundCorpAmount?: number;
  refundHandFee?: number;
  refundPersonAmount?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      alreadyUseAmount: 'already_use_amount',
      nonRefundableReshopChangeAmount: 'non_refundable_reshop_change_amount',
      nonRefundableReshopUpgradeAmount: 'non_refundable_reshop_upgrade_amount',
      refundAmount: 'refund_amount',
      refundCorpAmount: 'refund_corp_amount',
      refundHandFee: 'refund_hand_fee',
      refundPersonAmount: 'refund_person_amount',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyUseAmount: 'number',
      nonRefundableReshopChangeAmount: 'number',
      nonRefundableReshopUpgradeAmount: 'number',
      refundAmount: 'number',
      refundCorpAmount: 'number',
      refundHandFee: 'number',
      refundPersonAmount: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyList extends $dara.Model {
  flightRefundApplyTicketList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketList[];
  flightRefundSegmentList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundSegmentList[];
  flightRefundUserFeeList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundUserFeeList[];
  /**
   * @example
   * 232213
   */
  refundApplyId?: string;
  /**
   * @example
   * 2024122312
   */
  refundApproveId?: string;
  refundCorpTotalAmount?: number;
  refundHandFee?: number;
  refundPersonTotalAmount?: number;
  refundReason?: string;
  /**
   * @example
   * 0
   */
  refundReasonCode?: string;
  refundTotalAmount?: number;
  /**
   * @example
   * 232218
   */
  relateRefundApplyId?: string;
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      flightRefundApplyTicketList: 'flight_refund_apply_ticket_list',
      flightRefundSegmentList: 'flight_refund_segment_list',
      flightRefundUserFeeList: 'flight_refund_user_fee_list',
      refundApplyId: 'refund_apply_id',
      refundApproveId: 'refund_approve_id',
      refundCorpTotalAmount: 'refund_corp_total_amount',
      refundHandFee: 'refund_hand_fee',
      refundPersonTotalAmount: 'refund_person_total_amount',
      refundReason: 'refund_reason',
      refundReasonCode: 'refund_reason_code',
      refundTotalAmount: 'refund_total_amount',
      relateRefundApplyId: 'relate_refund_apply_id',
      userIdList: 'user_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightRefundApplyTicketList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundApplyTicketList },
      flightRefundSegmentList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundSegmentList },
      flightRefundUserFeeList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyListFlightRefundUserFeeList },
      refundApplyId: 'string',
      refundApproveId: 'string',
      refundCorpTotalAmount: 'number',
      refundHandFee: 'number',
      refundPersonTotalAmount: 'number',
      refundReason: 'string',
      refundReasonCode: 'string',
      refundTotalAmount: 'number',
      relateRefundApplyId: 'string',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.flightRefundApplyTicketList)) {
      $dara.Model.validateArray(this.flightRefundApplyTicketList);
    }
    if(Array.isArray(this.flightRefundSegmentList)) {
      $dara.Model.validateArray(this.flightRefundSegmentList);
    }
    if(Array.isArray(this.flightRefundUserFeeList)) {
      $dara.Model.validateArray(this.flightRefundUserFeeList);
    }
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketListFlightList extends $dara.Model {
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  /**
   * @example
   * V
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  cabinClassName?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  /**
   * @example
   * MU1398
   */
  flightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrTime: 'arr_time',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      depTime: 'dep_time',
      flightNo: 'flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrTime: 'string',
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      depTime: 'string',
      flightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketList extends $dara.Model {
  flightList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketListFlightList[];
  relateTicketNoList?: string[];
  ticketNoList?: string[];
  /**
   * @example
   * alitrip123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      flightList: 'flight_list',
      relateTicketNoList: 'relate_ticket_no_list',
      ticketNoList: 'ticket_no_list',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketListFlightList },
      relateTicketNoList: { 'type': 'array', 'itemType': 'string' },
      ticketNoList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flightList)) {
      $dara.Model.validateArray(this.flightList);
    }
    if(Array.isArray(this.relateTicketNoList)) {
      $dara.Model.validateArray(this.relateTicketNoList);
    }
    if(Array.isArray(this.ticketNoList)) {
      $dara.Model.validateArray(this.ticketNoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopSegmentList extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  /**
   * @example
   * PEX
   */
  arrAptCode?: string;
  arrCity?: string;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * T1
   */
  arrTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  depApt?: string;
  /**
   * @example
   * HGH
   */
  depAptCode?: string;
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * T1
   */
  depTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  flightMile?: number;
  /**
   * @example
   * CA3358
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
  stopCity?: string[];
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrApt: 'arr_apt',
      arrAptCode: 'arr_apt_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      depApt: 'dep_apt',
      depAptCode: 'dep_apt_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightMile: 'flight_mile',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      stopCity: 'stop_city',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrApt: 'string',
      arrAptCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      depApt: 'string',
      depAptCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightMile: 'number',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      stopCity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.stopCity)) {
      $dara.Model.validateArray(this.stopCity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopUserFeeList extends $dara.Model {
  changeFee?: number;
  reshopCorpAmount?: number;
  reshopPersonAmount?: number;
  upgradeFee?: number;
  /**
   * @example
   * alitrip123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      reshopCorpAmount: 'reshop_corp_amount',
      reshopPersonAmount: 'reshop_person_amount',
      upgradeFee: 'upgrade_fee',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: 'number',
      reshopCorpAmount: 'number',
      reshopPersonAmount: 'number',
      upgradeFee: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyList extends $dara.Model {
  flightReshopApplyTicketList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketList[];
  flightReshopSegmentList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopSegmentList[];
  flightReshopUserFeeList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopUserFeeList[];
  /**
   * @example
   * 100231231
   */
  relateReshopApplyId?: number;
  /**
   * @example
   * 123232323
   */
  reshopApplyId?: number;
  /**
   * @example
   * 122312
   */
  reshopApproveId?: string;
  reshopCorpTotalAmount?: number;
  reshopPersonTotalAmount?: number;
  reshopReason?: string;
  /**
   * @example
   * 1002
   */
  reshopReasonCode?: string;
  reshopTotalAmount?: number;
  userIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      flightReshopApplyTicketList: 'flight_reshop_apply_ticket_list',
      flightReshopSegmentList: 'flight_reshop_segment_list',
      flightReshopUserFeeList: 'flight_reshop_user_fee_list',
      relateReshopApplyId: 'relate_reshop_apply_id',
      reshopApplyId: 'reshop_apply_id',
      reshopApproveId: 'reshop_approve_id',
      reshopCorpTotalAmount: 'reshop_corp_total_amount',
      reshopPersonTotalAmount: 'reshop_person_total_amount',
      reshopReason: 'reshop_reason',
      reshopReasonCode: 'reshop_reason_code',
      reshopTotalAmount: 'reshop_total_amount',
      userIdList: 'user_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightReshopApplyTicketList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopApplyTicketList },
      flightReshopSegmentList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopSegmentList },
      flightReshopUserFeeList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopUserFeeList },
      relateReshopApplyId: 'number',
      reshopApplyId: 'number',
      reshopApproveId: 'string',
      reshopCorpTotalAmount: 'number',
      reshopPersonTotalAmount: 'number',
      reshopReason: 'string',
      reshopReasonCode: 'string',
      reshopTotalAmount: 'number',
      userIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.flightReshopApplyTicketList)) {
      $dara.Model.validateArray(this.flightReshopApplyTicketList);
    }
    if(Array.isArray(this.flightReshopSegmentList)) {
      $dara.Model.validateArray(this.flightReshopSegmentList);
    }
    if(Array.isArray(this.flightReshopUserFeeList)) {
      $dara.Model.validateArray(this.flightReshopUserFeeList);
    }
    if(Array.isArray(this.userIdList)) {
      $dara.Model.validateArray(this.userIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleFlightSegmentList extends $dara.Model {
  /**
   * @example
   * CZ
   */
  airlineCode?: string;
  airlineName?: string;
  arrApt?: string;
  /**
   * @example
   * PEK
   */
  arrAptCode?: string;
  arrCity?: string;
  /**
   * @example
   * BJS
   */
  arrCityCode?: string;
  /**
   * @example
   * T1
   */
  arrTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  arrTime?: string;
  depApt?: string;
  /**
   * @example
   * HGH
   */
  depAptCode?: string;
  depCity?: string;
  /**
   * @example
   * HGH
   */
  depCityCode?: string;
  /**
   * @example
   * T1
   */
  depTerminal?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  depTime?: string;
  flightMile?: number;
  /**
   * @example
   * CZ2891
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
  stopCity?: string[];
  static names(): { [key: string]: string } {
    return {
      airlineCode: 'airline_code',
      airlineName: 'airline_name',
      arrApt: 'arr_apt',
      arrAptCode: 'arr_apt_code',
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrTerminal: 'arr_terminal',
      arrTime: 'arr_time',
      depApt: 'dep_apt',
      depAptCode: 'dep_apt_code',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depTerminal: 'dep_terminal',
      depTime: 'dep_time',
      flightMile: 'flight_mile',
      flightNo: 'flight_no',
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
      stopCity: 'stop_city',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      airlineName: 'string',
      arrApt: 'string',
      arrAptCode: 'string',
      arrCity: 'string',
      arrCityCode: 'string',
      arrTerminal: 'string',
      arrTime: 'string',
      depApt: 'string',
      depAptCode: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depTerminal: 'string',
      depTime: 'string',
      flightMile: 'number',
      flightNo: 'string',
      journeyIndex: 'number',
      segmentIndex: 'number',
      stopCity: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.stopCity)) {
      $dara.Model.validateArray(this.stopCity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleInsureInfoList extends $dara.Model {
  /**
   * @example
   * 1002308231
   */
  insureId?: string;
  insureOrderAmount?: number;
  insurePrice?: number;
  insureType?: string;
  nameList?: string[];
  /**
   * @example
   * 5
   */
  number?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      insureId: 'insure_id',
      insureOrderAmount: 'insure_order_amount',
      insurePrice: 'insure_price',
      insureType: 'insure_type',
      nameList: 'name_list',
      number: 'number',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insureId: 'string',
      insureOrderAmount: 'number',
      insurePrice: 'number',
      insureType: 'string',
      nameList: { 'type': 'array', 'itemType': 'string' },
      number: 'number',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nameList)) {
      $dara.Model.validateArray(this.nameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModulePriceInfoList extends $dara.Model {
  /**
   * @example
   * 1
   */
  categoryCode?: number;
  /**
   * @example
   * 1
   */
  categoryType?: number;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  gmtCreate?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  price?: number;
  /**
   * @example
   * 175549295
   */
  subOrderId?: string;
  /**
   * @example
   * f98236773
   */
  tradeId?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCode: 'category_code',
      categoryType: 'category_type',
      gmtCreate: 'gmt_create',
      payType: 'pay_type',
      price: 'price',
      subOrderId: 'sub_order_id',
      tradeId: 'trade_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCode: 'number',
      categoryType: 'number',
      gmtCreate: 'string',
      payType: 'number',
      price: 'number',
      subOrderId: 'string',
      tradeId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListCostCenter extends $dara.Model {
  /**
   * @example
   * alitrip
   */
  corpId?: string;
  /**
   * @example
   * alitripTest
   */
  id?: number;
  name?: string;
  /**
   * @example
   * test_cost_center
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      id: 'id',
      name: 'name',
      number: 'number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      id: 'number',
      name: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListDepartment extends $dara.Model {
  /**
   * @example
   * alitrip
   */
  departId?: string;
  departName?: string;
  static names(): { [key: string]: string } {
    return {
      departId: 'depart_id',
      departName: 'depart_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departId: 'string',
      departName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListInvoice extends $dara.Model {
  /**
   * @example
   * test1233
   */
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListProject extends $dara.Model {
  /**
   * @example
   * test_project_id
   */
  projectId?: string;
  projectTitle?: string;
  /**
   * @example
   * test_third_part_project_id
   */
  thirdpartProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartProjectId: 'thirdpart_project_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectTitle: 'string',
      thirdpartProjectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModuleUserAffiliateList extends $dara.Model {
  costCenter?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListCostCenter;
  department?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListDepartment;
  invoice?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListInvoice;
  project?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListProject;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      costCenter: 'cost_center',
      department: 'department',
      invoice: 'invoice',
      project: 'project',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenter: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListCostCenter,
      department: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListDepartment,
      invoice: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListInvoice,
      project: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListProject,
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.costCenter && typeof (this.costCenter as any).validate === 'function') {
      (this.costCenter as any).validate();
    }
    if(this.department && typeof (this.department as any).validate === 'function') {
      (this.department as any).validate();
    }
    if(this.invoice && typeof (this.invoice as any).validate === 'function') {
      (this.invoice as any).validate();
    }
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyModule extends $dara.Model {
  approve?: FlightOrderListQueryV2ResponseBodyModuleApprove;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  flightOrderTicketList?: FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketList[];
  flightOrderUserFeeList?: FlightOrderListQueryV2ResponseBodyModuleFlightOrderUserFeeList[];
  flightRefundApplyList?: FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyList[];
  flightReshopApplyList?: FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyList[];
  flightSegmentList?: FlightOrderListQueryV2ResponseBodyModuleFlightSegmentList[];
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  gmtCreate?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  gmtModified?: string;
  /**
   * @example
   * 200042
   */
  id?: string;
  insureInfoList?: FlightOrderListQueryV2ResponseBodyModuleInsureInfoList[];
  /**
   * @example
   * true
   */
  mixPay?: boolean;
  orderReserveAmount?: number;
  /**
   * @example
   * 1
   */
  passengerCount?: number;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  payTime?: string;
  priceInfoList?: FlightOrderListQueryV2ResponseBodyModulePriceInfoList[];
  /**
   * @example
   * 0
   */
  status?: number;
  supplier?: string;
  /**
   * @example
   * cs9897766
   */
  thirdpartItineraryId?: string[];
  ticketCorpReserveAmount?: number;
  ticketPersonReserveAmount?: number;
  /**
   * @example
   * 1
   */
  tripMode?: number;
  /**
   * @example
   * 0
   */
  tripType?: number;
  userAffiliateList?: FlightOrderListQueryV2ResponseBodyModuleUserAffiliateList[];
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      approve: 'approve',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      flightOrderTicketList: 'flight_order_ticket_list',
      flightOrderUserFeeList: 'flight_order_user_fee_list',
      flightRefundApplyList: 'flight_refund_apply_list',
      flightReshopApplyList: 'flight_reshop_apply_list',
      flightSegmentList: 'flight_segment_list',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      insureInfoList: 'insure_info_list',
      mixPay: 'mix_pay',
      orderReserveAmount: 'order_reserve_amount',
      passengerCount: 'passenger_count',
      payTime: 'pay_time',
      priceInfoList: 'price_info_list',
      status: 'status',
      supplier: 'supplier',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      ticketCorpReserveAmount: 'ticket_corp_reserve_amount',
      ticketPersonReserveAmount: 'ticket_person_reserve_amount',
      tripMode: 'trip_mode',
      tripType: 'trip_type',
      userAffiliateList: 'user_affiliate_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approve: FlightOrderListQueryV2ResponseBodyModuleApprove,
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      flightOrderTicketList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightOrderTicketList },
      flightOrderUserFeeList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightOrderUserFeeList },
      flightRefundApplyList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightRefundApplyList },
      flightReshopApplyList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyList },
      flightSegmentList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleFlightSegmentList },
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      insureInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleInsureInfoList },
      mixPay: 'boolean',
      orderReserveAmount: 'number',
      passengerCount: 'number',
      payTime: 'string',
      priceInfoList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModulePriceInfoList },
      status: 'number',
      supplier: 'string',
      thirdpartItineraryId: { 'type': 'array', 'itemType': 'string' },
      ticketCorpReserveAmount: 'number',
      ticketPersonReserveAmount: 'number',
      tripMode: 'number',
      tripType: 'number',
      userAffiliateList: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModuleUserAffiliateList },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.approve && typeof (this.approve as any).validate === 'function') {
      (this.approve as any).validate();
    }
    if(Array.isArray(this.flightOrderTicketList)) {
      $dara.Model.validateArray(this.flightOrderTicketList);
    }
    if(Array.isArray(this.flightOrderUserFeeList)) {
      $dara.Model.validateArray(this.flightOrderUserFeeList);
    }
    if(Array.isArray(this.flightRefundApplyList)) {
      $dara.Model.validateArray(this.flightRefundApplyList);
    }
    if(Array.isArray(this.flightReshopApplyList)) {
      $dara.Model.validateArray(this.flightReshopApplyList);
    }
    if(Array.isArray(this.flightSegmentList)) {
      $dara.Model.validateArray(this.flightSegmentList);
    }
    if(Array.isArray(this.insureInfoList)) {
      $dara.Model.validateArray(this.insureInfoList);
    }
    if(Array.isArray(this.priceInfoList)) {
      $dara.Model.validateArray(this.priceInfoList);
    }
    if(Array.isArray(this.thirdpartItineraryId)) {
      $dara.Model.validateArray(this.thirdpartItineraryId);
    }
    if(Array.isArray(this.userAffiliateList)) {
      $dara.Model.validateArray(this.userAffiliateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBodyPageInfo extends $dara.Model {
  number?: number;
  /**
   * @example
   * CAESBgoEIgIIABgAIhkKFwMSAAAAMUw4ZGViODFlYmM3MYzM4
   */
  scrollId?: string;
  /**
   * @example
   * 100
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      number: 'number',
      scrollId: 'scroll_id',
      totalNumber: 'total_number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      scrollId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderListQueryV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  module?: FlightOrderListQueryV2ResponseBodyModule[];
  pageInfo?: FlightOrderListQueryV2ResponseBodyPageInfo;
  /**
   * @example
   * C61ECFF6-****-****-****-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce********056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      pageInfo: 'pageInfo',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': FlightOrderListQueryV2ResponseBodyModule },
      pageInfo: FlightOrderListQueryV2ResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

