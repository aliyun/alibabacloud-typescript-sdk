// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeApplyRequestChangePassengerList extends $dara.Model {
  /**
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
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
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arriveTerminal?: string;
  /**
   * @example
   * 1677232999000
   */
  arriveTime?: number;
  arriveTimeStr?: string;
  /**
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20230320
   */
  departureDate?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 1677232998000
   */
  departureTime?: number;
  departureTimeStr?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
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
   * @example
   * gao******@gmail.com
   */
  email?: string;
  /**
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
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
   * This parameter is required.
   */
  changePassengerList?: ChangeApplyRequestChangePassengerList[];
  /**
   * @remarks
   * This parameter is required.
   */
  changedJourneys?: ChangeApplyRequestChangedJourneys[];
  /**
   * @remarks
   * This parameter is required.
   */
  contact?: ChangeApplyRequestContact;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4988430***950
   */
  orderNum?: number;
  /**
   * @example
   * remark desc
   */
  remark?: string;
  /**
   * @remarks
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

