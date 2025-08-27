// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderDetailV2ResponseBodyModuleContactInfoDTO extends $dara.Model {
  /**
   * @example
   * 178169630111@163.com
   */
  contactEmail?: string;
  contactName?: string;
  /**
   * @example
   * 178169630111
   */
  contactPhone?: string;
  /**
   * @example
   * true
   */
  sendMsgToPassenger?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'contact_email',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
      sendMsgToPassenger: 'send_msg_to_passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
      sendMsgToPassenger: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListFlightChange extends $dara.Model {
  changeDesc?: string;
  changeStatus?: string;
  changeStatusCode?: string;
  newSegment?: any;
  passengerNames?: string[];
  static names(): { [key: string]: string } {
    return {
      changeDesc: 'change_desc',
      changeStatus: 'change_status',
      changeStatusCode: 'change_status_code',
      newSegment: 'new_segment',
      passengerNames: 'passenger_names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeDesc: 'string',
      changeStatus: 'string',
      changeStatusCode: 'string',
      newSegment: 'any',
      passengerNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.passengerNames)) {
      $dara.Model.validateArray(this.passengerNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListSegmentPosition extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList extends $dara.Model {
  /**
   * @example
   * CA
   */
  airLineCode?: string;
  /**
   * @example
   * Air China Limited
   */
  airLineEnglishName?: string;
  airLineName?: string;
  /**
   * @example
   * 95583
   */
  airLinePhone?: string;
  /**
   * @example
   * https://gw.alicdn.com/tfs/TB12fJAFHr1gK0jSZR0XXbP8XXa-450-450.png
   */
  airlineIconUrl?: string;
  airlineShortName?: string;
  /**
   * @example
   * XIL
   */
  arrAirportCode?: string;
  arrAirportName?: string;
  /**
   * @example
   * XIL
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2023-07-20 08:25:00
   */
  arrTime?: string;
  arriveTerminal?: string;
  /**
   * @remarks
   * cabin
   */
  cabin?: string;
  cabinAndDiscount?: string;
  /**
   * @remarks
   * cabin_class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * cabin_class_name
   */
  cabinClassName?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  deadlineText?: string;
  /**
   * @example
   * PEK
   */
  depAirportCode?: string;
  depAirportName?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2023-07-29
   */
  depDate?: string;
  /**
   * @example
   * 2023-07-20 07:00:00
   */
  depTime?: string;
  departTerminal?: string;
  /**
   * @example
   * 0.4
   */
  discount?: number;
  flightChange?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListFlightChange;
  /**
   * @example
   * CA1110
   */
  flightNo?: string;
  /**
   * @example
   * ARJ
   */
  flightType?: string;
  flyDuration?: number;
  manufacturer?: string;
  mealDesc?: string;
  onTimeRate?: string;
  operatingAirShortName?: string;
  operatingAirlineCode?: string;
  operatingAirlineEnglishName?: string;
  operatingAirlineIconUrl?: string;
  operatingAirlineName?: string;
  operatingAirlinePhone?: string;
  operatingFlightNo?: string;
  planeType?: string;
  raisePrice?: number;
  segmentId?: string;
  /**
   * @remarks
   * segmentIndex
   * 
   * @example
   * 0
   */
  segmentIndex?: number;
  segmentPosition?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListSegmentPosition;
  stopAirport?: string;
  stopArrTime?: string;
  stopCity?: string;
  stopCityName?: string;
  stopDepTime?: string;
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      airLineCode: 'air_line_code',
      airLineEnglishName: 'air_line_english_name',
      airLineName: 'air_line_name',
      airLinePhone: 'air_line_phone',
      airlineIconUrl: 'airline_icon_url',
      airlineShortName: 'airline_short_name',
      arrAirportCode: 'arr_airport_code',
      arrAirportName: 'arr_airport_name',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      arriveTerminal: 'arrive_terminal',
      cabin: 'cabin',
      cabinAndDiscount: 'cabin_and_discount',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      codeShare: 'code_share',
      deadlineText: 'deadline_text',
      depAirportCode: 'dep_airport_code',
      depAirportName: 'dep_airport_name',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depDate: 'dep_date',
      depTime: 'dep_time',
      departTerminal: 'depart_terminal',
      discount: 'discount',
      flightChange: 'flight_change',
      flightNo: 'flight_no',
      flightType: 'flight_type',
      flyDuration: 'fly_duration',
      manufacturer: 'manufacturer',
      mealDesc: 'meal_desc',
      onTimeRate: 'on_time_rate',
      operatingAirShortName: 'operating_air_short_name',
      operatingAirlineCode: 'operating_airline_code',
      operatingAirlineEnglishName: 'operating_airline_english_name',
      operatingAirlineIconUrl: 'operating_airline_icon_url',
      operatingAirlineName: 'operating_airline_name',
      operatingAirlinePhone: 'operating_airline_phone',
      operatingFlightNo: 'operating_flight_no',
      planeType: 'plane_type',
      raisePrice: 'raise_price',
      segmentId: 'segment_id',
      segmentIndex: 'segment_index',
      segmentPosition: 'segment_position',
      stopAirport: 'stop_airport',
      stopArrTime: 'stop_arr_time',
      stopCity: 'stop_city',
      stopCityName: 'stop_city_name',
      stopDepTime: 'stop_dep_time',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airLineCode: 'string',
      airLineEnglishName: 'string',
      airLineName: 'string',
      airLinePhone: 'string',
      airlineIconUrl: 'string',
      airlineShortName: 'string',
      arrAirportCode: 'string',
      arrAirportName: 'string',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      arriveTerminal: 'string',
      cabin: 'string',
      cabinAndDiscount: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      codeShare: 'boolean',
      deadlineText: 'string',
      depAirportCode: 'string',
      depAirportName: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depDate: 'string',
      depTime: 'string',
      departTerminal: 'string',
      discount: 'number',
      flightChange: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListFlightChange,
      flightNo: 'string',
      flightType: 'string',
      flyDuration: 'number',
      manufacturer: 'string',
      mealDesc: 'string',
      onTimeRate: 'string',
      operatingAirShortName: 'string',
      operatingAirlineCode: 'string',
      operatingAirlineEnglishName: 'string',
      operatingAirlineIconUrl: 'string',
      operatingAirlineName: 'string',
      operatingAirlinePhone: 'string',
      operatingFlightNo: 'string',
      planeType: 'string',
      raisePrice: 'number',
      segmentId: 'string',
      segmentIndex: 'number',
      segmentPosition: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentListSegmentPosition,
      stopAirport: 'string',
      stopArrTime: 'string',
      stopCity: 'string',
      stopCityName: 'string',
      stopDepTime: 'string',
      stopQuantity: 'number',
    };
  }

  validate() {
    if(this.flightChange && typeof (this.flightChange as any).validate === 'function') {
      (this.flightChange as any).validate();
    }
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys extends $dara.Model {
  /**
   * @example
   * 85
   */
  allFlyDuration?: number;
  /**
   * @example
   * 85
   */
  allFlyDurationAfterChange?: number;
  applyId?: number;
  /**
   * @example
   * XIL
   */
  arrCityCode?: string;
  arrCityName?: string;
  /**
   * @example
   * 2023-07-20 08:25:00
   */
  arrTime?: string;
  baggageDetails?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  depCityName?: string;
  /**
   * @example
   * 2023-07-20 07:00:00
   */
  depTime?: string;
  flightStatus?: string;
  /**
   * @remarks
   * iata_no
   * 
   * @example
   * iata_no
   */
  iataNo?: string;
  isReshopJourney?: boolean;
  isTransfer?: boolean;
  journeyTitle?: string;
  refundChangeDetails?: string;
  segmentList?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList[];
  static names(): { [key: string]: string } {
    return {
      allFlyDuration: 'all_fly_duration',
      allFlyDurationAfterChange: 'all_fly_duration_after_change',
      applyId: 'apply_id',
      arrCityCode: 'arr_city_code',
      arrCityName: 'arr_city_name',
      arrTime: 'arr_time',
      baggageDetails: 'baggage_details',
      depCityCode: 'dep_city_code',
      depCityName: 'dep_city_name',
      depTime: 'dep_time',
      flightStatus: 'flight_status',
      iataNo: 'iata_no',
      isReshopJourney: 'is_reshop_journey',
      isTransfer: 'is_transfer',
      journeyTitle: 'journey_title',
      refundChangeDetails: 'refund_change_details',
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allFlyDuration: 'number',
      allFlyDurationAfterChange: 'number',
      applyId: 'number',
      arrCityCode: 'string',
      arrCityName: 'string',
      arrTime: 'string',
      baggageDetails: 'string',
      depCityCode: 'string',
      depCityName: 'string',
      depTime: 'string',
      flightStatus: 'string',
      iataNo: 'string',
      isReshopJourney: 'boolean',
      isTransfer: 'boolean',
      journeyTitle: 'string',
      refundChangeDetails: 'string',
      segmentList: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneysSegmentList },
    };
  }

  validate() {
    if(Array.isArray(this.segmentList)) {
      $dara.Model.validateArray(this.segmentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO extends $dara.Model {
  journeys?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys[];
  noticeTips?: string;
  tripType?: string;
  /**
   * @example
   * 2
   */
  tripTypeCode?: number;
  static names(): { [key: string]: string } {
    return {
      journeys: 'journeys',
      noticeTips: 'notice_tips',
      tripType: 'trip_type',
      tripTypeCode: 'trip_type_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeys: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTOJourneys },
      noticeTips: 'string',
      tripType: 'string',
      tripTypeCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.journeys)) {
      $dara.Model.validateArray(this.journeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModulePassengerListCredential extends $dara.Model {
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  birthDate?: string;
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  certIssueDate?: string;
  certIssuePlace?: string;
  credentialNo?: string;
  driveLicenceFirst?: string;
  driveLicenceType?: string;
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  expireDate?: string;
  holderNationality?: string;
  /**
   * @example
   * 131332
   */
  id?: number;
  idCheckCode?: string;
  issueCountry?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certIssueDate: 'cert_issue_date',
      certIssuePlace: 'cert_issue_place',
      credentialNo: 'credential_no',
      driveLicenceFirst: 'drive_licence_first',
      driveLicenceType: 'drive_licence_type',
      expireDate: 'expire_date',
      holderNationality: 'holder_nationality',
      id: 'id',
      idCheckCode: 'id_check_code',
      issueCountry: 'issue_country',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certIssueDate: 'string',
      certIssuePlace: 'string',
      credentialNo: 'string',
      driveLicenceFirst: 'string',
      driveLicenceType: 'string',
      expireDate: 'string',
      holderNationality: 'string',
      id: 'number',
      idCheckCode: 'string',
      issueCountry: 'string',
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

export class FlightOrderDetailV2ResponseBodyModulePassengerListCredentials extends $dara.Model {
  birthDate?: string;
  certIssueDate?: string;
  certIssuePlace?: string;
  credentialNo?: string;
  driveLicenceFirst?: string;
  driveLicenceType?: string;
  expireDate?: string;
  holderNationality?: string;
  /**
   * @example
   * 131332
   */
  id?: number;
  idCheckCode?: string;
  issueCountry?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certIssueDate: 'cert_issue_date',
      certIssuePlace: 'cert_issue_place',
      credentialNo: 'credential_no',
      driveLicenceFirst: 'drive_licence_first',
      driveLicenceType: 'drive_licence_type',
      expireDate: 'expire_date',
      holderNationality: 'holder_nationality',
      id: 'id',
      idCheckCode: 'id_check_code',
      issueCountry: 'issue_country',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certIssueDate: 'string',
      certIssuePlace: 'string',
      credentialNo: 'string',
      driveLicenceFirst: 'string',
      driveLicenceType: 'string',
      expireDate: 'string',
      holderNationality: 'string',
      id: 'number',
      idCheckCode: 'string',
      issueCountry: 'string',
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

export class FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList extends $dara.Model {
  journeyIndex?: number;
  openTicketStatus?: number;
  segmentIndex?: number;
  static names(): { [key: string]: string } {
    return {
      journeyIndex: 'journey_index',
      openTicketStatus: 'open_ticket_status',
      segmentIndex: 'segment_index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      journeyIndex: 'number',
      openTicketStatus: 'number',
      segmentIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModulePassengerListTickets extends $dara.Model {
  channel?: string;
  journeyTitle?: string;
  /**
   * @example
   * OPEN_FOR_USE
   */
  openTicketStatus?: string;
  /**
   * @remarks
   * pcc/office
   * 
   * @example
   * pcc/office
   */
  pcc?: string;
  segmentOpenTicketList?: FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList[];
  ticketAuthMemo?: string;
  /**
   * @example
   * 2
   */
  ticketAuthStatus?: number;
  /**
   * @example
   * 444-2023062999
   */
  ticketNo?: string;
  /**
   * @example
   * 4500
   */
  ticketPrice?: number;
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      journeyTitle: 'journey_title',
      openTicketStatus: 'open_ticket_status',
      pcc: 'pcc',
      segmentOpenTicketList: 'segment_open_ticket_list',
      ticketAuthMemo: 'ticket_auth_memo',
      ticketAuthStatus: 'ticket_auth_status',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      journeyTitle: 'string',
      openTicketStatus: 'string',
      pcc: 'string',
      segmentOpenTicketList: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerListTicketsSegmentOpenTicketList },
      ticketAuthMemo: 'string',
      ticketAuthStatus: 'number',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.segmentOpenTicketList)) {
      $dara.Model.validateArray(this.segmentOpenTicketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModulePassengerList extends $dara.Model {
  /**
   * @example
   * 1991-06-21 00:00:00
   */
  birthday?: string;
  /**
   * @example
   * 12172819047252004460056
   */
  btripUserId?: string;
  code?: number;
  country?: string;
  /**
   * @example
   * CN
   */
  countryCode?: string;
  credential?: FlightOrderDetailV2ResponseBodyModulePassengerListCredential;
  credentials?: FlightOrderDetailV2ResponseBodyModulePassengerListCredentials[];
  /**
   * @example
   * 17800000001@163.com
   */
  email?: string;
  /**
   * @example
   * san
   */
  enFirstName?: string;
  /**
   * @example
   * zhang
   */
  enLastName?: string;
  /**
   * @example
   * zhangsan
   */
  englishName?: string;
  /**
   * @example
   * 1
   */
  gender?: number;
  /**
   * @example
   * 3243028
   */
  id?: string;
  /**
   * @example
   * true
   */
  isComplete?: boolean;
  /**
   * @example
   * false
   */
  isFrequently?: boolean;
  memo?: string;
  /**
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @example
   * 17800000001
   */
  mobilePhoneNumber?: string;
  name?: string;
  /**
   * @example
   * true
   */
  oneself?: boolean;
  orderName?: string;
  /**
   * @example
   * 1111
   */
  outPassengerId?: string;
  /**
   * @example
   * 17800000001
   */
  phone?: string;
  /**
   * @example
   * 111
   */
  shengPiPinyin?: string;
  ticketNos?: string[];
  tickets?: FlightOrderDetailV2ResponseBodyModulePassengerListTickets[];
  /**
   * @example
   * 0
   */
  type?: number;
  /**
   * @example
   * 312312
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      btripUserId: 'btrip_user_id',
      code: 'code',
      country: 'country',
      countryCode: 'country_code',
      credential: 'credential',
      credentials: 'credentials',
      email: 'email',
      enFirstName: 'en_first_name',
      enLastName: 'en_last_name',
      englishName: 'english_name',
      gender: 'gender',
      id: 'id',
      isComplete: 'is_complete',
      isFrequently: 'is_frequently',
      memo: 'memo',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      name: 'name',
      oneself: 'oneself',
      orderName: 'order_name',
      outPassengerId: 'out_passenger_id',
      phone: 'phone',
      shengPiPinyin: 'sheng_pi_pinyin',
      ticketNos: 'ticket_nos',
      tickets: 'tickets',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      btripUserId: 'string',
      code: 'number',
      country: 'string',
      countryCode: 'string',
      credential: FlightOrderDetailV2ResponseBodyModulePassengerListCredential,
      credentials: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerListCredentials },
      email: 'string',
      enFirstName: 'string',
      enLastName: 'string',
      englishName: 'string',
      gender: 'number',
      id: 'string',
      isComplete: 'boolean',
      isFrequently: 'boolean',
      memo: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      name: 'string',
      oneself: 'boolean',
      orderName: 'string',
      outPassengerId: 'string',
      phone: 'string',
      shengPiPinyin: 'string',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
      tickets: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerListTickets },
      type: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    if(Array.isArray(this.ticketNos)) {
      $dara.Model.validateArray(this.ticketNos);
    }
    if(Array.isArray(this.tickets)) {
      $dara.Model.validateArray(this.tickets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBodyModule extends $dara.Model {
  b2gVipCode?: string;
  /**
   * @example
   * 2023-06-29 15:28:44
   */
  bookSuccTime?: string;
  /**
   * @example
   * qingg1234
   */
  bookUserId?: string;
  bookUserName?: string;
  /**
   * @example
   * 0
   */
  buildPrice?: number;
  contactInfoDTO?: FlightOrderDetailV2ResponseBodyModuleContactInfoDTO;
  /**
   * @example
   * 2023-06-29 15:03:11
   */
  createTime?: string;
  /**
   * @example
   * 126000
   */
  facevalue?: number;
  flightTaleInfoDTO?: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO;
  /**
   * @example
   * false
   */
  isProtocol?: boolean;
  /**
   * @example
   * false
   */
  isemergency?: boolean;
  /**
   * @example
   * true
   */
  issendmessage?: boolean;
  /**
   * @example
   * 4000
   */
  oilPrice?: number;
  /**
   * @example
   * 1017002195370467200
   */
  orderId?: number;
  /**
   * @example
   * 8500
   */
  orderPrice?: number;
  /**
   * @example
   * 1017002195370467137
   */
  outOrderId?: string;
  passengerList?: FlightOrderDetailV2ResponseBodyModulePassengerList[];
  /**
   * @remarks
   * key :passengerId
   * 
   * value :segmentId
   */
  passengerSegmentMap?: { [key: string]: string };
  /**
   * @example
   * 2023-06-29 15:03:59
   */
  payTime?: string;
  /**
   * @example
   * 4500
   */
  saleprice?: number;
  /**
   * @example
   * true
   */
  sendcpsms?: boolean;
  /**
   * @example
   * 5
   */
  status?: number;
  /**
   * @example
   * 3
   */
  totalServiceFeePrice?: number;
  static names(): { [key: string]: string } {
    return {
      b2gVipCode: 'b2g_vip_code',
      bookSuccTime: 'book_succ_time',
      bookUserId: 'book_user_id',
      bookUserName: 'book_user_name',
      buildPrice: 'build_price',
      contactInfoDTO: 'contact_info_d_t_o',
      createTime: 'create_time',
      facevalue: 'facevalue',
      flightTaleInfoDTO: 'flight_tale_info_d_t_o',
      isProtocol: 'is_protocol',
      isemergency: 'isemergency',
      issendmessage: 'issendmessage',
      oilPrice: 'oil_price',
      orderId: 'order_id',
      orderPrice: 'order_price',
      outOrderId: 'out_order_id',
      passengerList: 'passenger_list',
      passengerSegmentMap: 'passenger_segment_map',
      payTime: 'pay_time',
      saleprice: 'saleprice',
      sendcpsms: 'sendcpsms',
      status: 'status',
      totalServiceFeePrice: 'total_service_fee_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b2gVipCode: 'string',
      bookSuccTime: 'string',
      bookUserId: 'string',
      bookUserName: 'string',
      buildPrice: 'number',
      contactInfoDTO: FlightOrderDetailV2ResponseBodyModuleContactInfoDTO,
      createTime: 'string',
      facevalue: 'number',
      flightTaleInfoDTO: FlightOrderDetailV2ResponseBodyModuleFlightTaleInfoDTO,
      isProtocol: 'boolean',
      isemergency: 'boolean',
      issendmessage: 'boolean',
      oilPrice: 'number',
      orderId: 'number',
      orderPrice: 'number',
      outOrderId: 'string',
      passengerList: { 'type': 'array', 'itemType': FlightOrderDetailV2ResponseBodyModulePassengerList },
      passengerSegmentMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      payTime: 'string',
      saleprice: 'number',
      sendcpsms: 'boolean',
      status: 'number',
      totalServiceFeePrice: 'number',
    };
  }

  validate() {
    if(this.contactInfoDTO && typeof (this.contactInfoDTO as any).validate === 'function') {
      (this.contactInfoDTO as any).validate();
    }
    if(this.flightTaleInfoDTO && typeof (this.flightTaleInfoDTO as any).validate === 'function') {
      (this.flightTaleInfoDTO as any).validate();
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(this.passengerSegmentMap) {
      $dara.Model.validateMap(this.passengerSegmentMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlightOrderDetailV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @remarks
   * module
   */
  module?: FlightOrderDetailV2ResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * E5F4ACF5-5677-1515-9999-ABBB5E668032
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210bc60a16917251281873772dac41
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
      module: FlightOrderDetailV2ResponseBodyModule,
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

