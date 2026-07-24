// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeApplyRequestChangePassengerList extends $dara.Model {
  /**
   * @remarks
   * The document number.
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * The first name of the passenger.
   * 
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the passenger.
   * 
   * This parameter is required.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      firstName: 'first_name',
      lastName: 'last_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      firstName: 'string',
      lastName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyRequestChangedJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * The three-letter IATA code of the arrival airport.
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the arrival city.
   * 
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * The arrival terminal of the flight.
   * 
   * @example
   * T1
   */
  arriveTerminal?: string;
  /**
   * @remarks
   * (该属性废弃)航班到达日期时间，utc时间戳
   * 
   * @example
   * 1677232999000
   */
  arriveTime?: number;
  /**
   * @remarks
   * (必填参数)航班到达日期时间，航班的旅行时间，格式：yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2024-03-20 12:30:00
   */
  arriveTimeStr?: string;
  /**
   * @remarks
   * Indicates whether the flight is a codeshare flight.
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * The three-letter IATA code of the departure airport.
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the departure city.
   * 
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * The departure date (for example, yyyyMMdd).
   * [_single.params.changed_journeys.items.segment_list.items.departure_time.desc](Deprecated) The departure date and time of the flight, in UTC timestamp.
   * [_single.params.changed_journeys.items.segment_list.items.departure_time_str.desc](Required) The departure date and time of the flight, in local travel time. Format: yyyy-MM-dd HH:mm:ss.
   * [_single.params.changed_journeys.items.segment_list.items.arrive_time.desc](Deprecated) The arrival date and time of the flight, in UTC timestamp.
   * [_single.params.changed_journeys.items.segment_list.items.arrive_time_str.desc](Required) The arrival date and time of the flight, in local travel time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 20230320
   */
  departureDate?: string;
  /**
   * @remarks
   * The departure terminal of the flight.
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * (该属性废弃)航班起飞日期，utc时间戳
   * 
   * @example
   * 1677232998000
   */
  departureTime?: number;
  /**
   * @remarks
   * (必填参数)航班起飞日期时间，航班的旅行时间，格式：yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2024-03-20 09:30:00
   */
  departureTimeStr?: string;
  /**
   * @remarks
   * The marketing flight number (such as KA5809).
   * 
   * This parameter is required.
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * The operating flight number (such as CX601).
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arriveTerminal: 'arrive_terminal',
      arriveTime: 'arrive_time',
      arriveTimeStr: 'arrive_time_str',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureDate: 'departure_date',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      departureTimeStr: 'departure_time_str',
      marketingFlightNo: 'marketing_flight_no',
      operatingFlightNo: 'operating_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arriveTerminal: 'string',
      arriveTime: 'number',
      arriveTimeStr: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureDate: 'string',
      departureTerminal: 'string',
      departureTime: 'number',
      departureTimeStr: 'string',
      marketingFlightNo: 'string',
      operatingFlightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyRequestChangedJourneys extends $dara.Model {
  /**
   * @remarks
   * The list of target segments for the change.
   */
  segmentList?: ChangeApplyRequestChangedJourneysSegmentList[];
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeApplyRequestChangedJourneysSegmentList },
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

export class ChangeApplyRequestContact extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * gao******@gmail.com
   */
  email?: string;
  /**
   * @remarks
   * The country calling code.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * The mobile phone number of the contact.
   * 
   * @example
   * 183*****92
   */
  mobilePhoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNum: 'mobile_phone_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeApplyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of passengers for the change.
   * 
   * This parameter is required.
   */
  changePassengerList?: ChangeApplyRequestChangePassengerList[];
  /**
   * @remarks
   * The target journey for the change.
   * 
   * This parameter is required.
   */
  changedJourneys?: ChangeApplyRequestChangedJourneys[];
  /**
   * @remarks
   * The contact information for the change.
   * 
   * This parameter is required.
   */
  contact?: ChangeApplyRequestContact;
  /**
   * @remarks
   * The order number.
   * 
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
  orderNum?: number;
  /**
   * @remarks
   * The buyer remarks.
   * 
   * @example
   * remark desc
   */
  remark?: string;
  /**
   * @remarks
   * The change type. Valid values:
   * - 0: voluntary change
   * - 1: flight schedule change or flight cancellation.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      changePassengerList: 'change_passenger_list',
      changedJourneys: 'changed_journeys',
      contact: 'contact',
      orderNum: 'order_num',
      remark: 'remark',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changePassengerList: { 'type': 'array', 'itemType': ChangeApplyRequestChangePassengerList },
      changedJourneys: { 'type': 'array', 'itemType': ChangeApplyRequestChangedJourneys },
      contact: ChangeApplyRequestContact,
      orderNum: 'number',
      remark: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.changePassengerList)) {
      $dara.Model.validateArray(this.changePassengerList);
    }
    if(Array.isArray(this.changedJourneys)) {
      $dara.Model.validateArray(this.changedJourneys);
    }
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

