// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee extends $dara.Model {
  /**
   * @remarks
   * The service fee.
   * 
   * @example
   * 50
   */
  serviceFee?: number;
  suezServiceFee?: number;
  /**
   * @remarks
   * The change tax fee.
   * 
   * @example
   * 20
   */
  taxFee?: number;
  /**
   * @remarks
   * The upgrade fee.
   * 
   * @example
   * 30
   */
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      serviceFee: 'service_fee',
      suezServiceFee: 'suez_service_fee',
      taxFee: 'tax_fee',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceFee: 'number',
      suezServiceFee: 'number',
      taxFee: 'number',
      upgradeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger extends $dara.Model {
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
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the passenger.
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

export class ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails extends $dara.Model {
  /**
   * @remarks
   * The change fee details for the passenger.
   */
  changeFee?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee;
  /**
   * @remarks
   * The passenger information for the change.
   */
  passenger?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      passenger: 'passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee,
      passenger: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger,
    };
  }

  validate() {
    if(this.changeFee && typeof (this.changeFee as any).validate === 'function') {
      (this.changeFee as any).validate();
    }
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers extends $dara.Model {
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
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The last name of the passenger.
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

export class ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * The three-letter IATA code of the arrival airport (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the arrival city (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * The arrival terminal.
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * The arrival date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * The number of remaining seats.
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * The cabin code.
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * The cabin class.
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Indicates whether this is a codeshare flight.
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * The three-letter IATA code of the departure airport (uppercase).
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the departure city (uppercase).
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * The departure terminal.
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * The departure date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * The aircraft type.
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * The flight duration in minutes.
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * The marketing airline code (such as HO).
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * The marketing flight number (such as HO1295).
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * The numeric marketing flight number (such as 1295).
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * The operating airline code (such as CX).
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * The operating flight number (such as CX601).
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * The segment ID. Format: flight number + departure airport + arrival airport + departure date (MMdd).
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * The list of stopover cities. This field has a value when stopQuantity is greater than 0. Multiple cities are separated by commas.
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * The number of stopover cities.
   * 
   * @example
   * 0
   */
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys extends $dara.Model {
  /**
   * @remarks
   * The segment information.
   */
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneysSegmentList[];
  /**
   * @remarks
   * The number of transfers.
   * 
   * @example
   * 0
   */
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneysSegmentList },
      transferCount: 'number',
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

export class ChangeDetailListOfOrderNumResponseBodyDataListContact extends $dara.Model {
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

export class ChangeDetailListOfOrderNumResponseBodyDataListLastJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * The three-letter IATA code of the arrival airport (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the arrival city (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * The arrival terminal.
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * The arrival date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * The number of remaining seats.
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * The cabin code.
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * The cabin class.
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Indicates whether this is a codeshare flight.
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * The three-letter IATA code of the departure airport (uppercase).
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the departure city (uppercase).
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * The departure terminal.
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * The departure date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * The aircraft type.
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * The flight duration in minutes.
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * The marketing airline code (such as HO).
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * The marketing flight number (such as HO1295).
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * The numeric marketing flight number (such as 1295).
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * The operating airline code (such as CX).
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * The operating flight number (such as CX601).
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * The segment ID. Format: flight number + departure airport + arrival airport + departure date (MMdd).
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * The list of stopover cities. This field has a value when stopQuantity is greater than 0. Multiple cities are separated by commas.
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * The number of stopover cities.
   * 
   * @example
   * 0
   */
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys extends $dara.Model {
  /**
   * @remarks
   * The segment information.
   */
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListLastJourneysSegmentList[];
  /**
   * @remarks
   * The number of transfers.
   * 
   * @example
   * 0
   */
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListLastJourneysSegmentList },
      transferCount: 'number',
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

export class ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * The three-letter IATA code of the arrival airport (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the arrival city (uppercase).
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * The arrival terminal.
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * The arrival date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * The number of remaining seats.
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * The cabin code.
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * The cabin class.
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Indicates whether this is a codeshare flight.
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * The three-letter IATA code of the departure airport (uppercase).
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * The three-letter IATA code of the departure city (uppercase).
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * The departure terminal.
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * The departure date and time in string format (yyyy-MM-dd HH:mm:ss).
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * The aircraft type.
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * The flight duration in minutes.
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * The marketing airline code (such as HO).
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * The marketing flight number (such as HO1295).
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * The numeric marketing flight number (such as 1295).
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * The operating airline code (such as CX).
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * The operating flight number (such as CX601).
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * The segment ID. Format: flight number + departure airport + arrival airport + departure date (MMdd).
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * The list of stopover cities. This field has a value when stopQuantity is greater than 0. Multiple cities are separated by commas.
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * The number of stopover cities.
   * 
   * @example
   * 0
   */
  stopQuantity?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalAirport: 'arrival_airport',
      arrivalCity: 'arrival_city',
      arrivalTerminal: 'arrival_terminal',
      arrivalTime: 'arrival_time',
      availability: 'availability',
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      codeShare: 'code_share',
      departureAirport: 'departure_airport',
      departureCity: 'departure_city',
      departureTerminal: 'departure_terminal',
      departureTime: 'departure_time',
      equipType: 'equip_type',
      flightDuration: 'flight_duration',
      marketingAirline: 'marketing_airline',
      marketingFlightNo: 'marketing_flight_no',
      marketingFlightNoInt: 'marketing_flight_no_int',
      operatingAirline: 'operating_airline',
      operatingFlightNo: 'operating_flight_no',
      segmentId: 'segment_id',
      stopCityList: 'stop_city_list',
      stopQuantity: 'stop_quantity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalAirport: 'string',
      arrivalCity: 'string',
      arrivalTerminal: 'string',
      arrivalTime: 'string',
      availability: 'string',
      cabin: 'string',
      cabinClass: 'string',
      codeShare: 'boolean',
      departureAirport: 'string',
      departureCity: 'string',
      departureTerminal: 'string',
      departureTime: 'string',
      equipType: 'string',
      flightDuration: 'number',
      marketingAirline: 'string',
      marketingFlightNo: 'string',
      marketingFlightNoInt: 'number',
      operatingAirline: 'string',
      operatingFlightNo: 'string',
      segmentId: 'string',
      stopCityList: 'string',
      stopQuantity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys extends $dara.Model {
  /**
   * @remarks
   * The segment information.
   */
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList[];
  /**
   * @remarks
   * The number of transfers.
   * 
   * @example
   * 0
   */
  transferCount?: number;
  static names(): { [key: string]: string } {
    return {
      segmentList: 'segment_list',
      transferCount: 'transfer_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentList: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList },
      transferCount: 'number',
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

export class ChangeDetailListOfOrderNumResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The change fee details at the passenger level.
   */
  changeFeeDetails?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails[];
  /**
   * @remarks
   * The change order number.
   * 
   * @example
   * 4988430***950
   */
  changeOrderNum?: number;
  /**
   * @remarks
   * The list of passengers for the change order.
   */
  changePassengers?: ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers[];
  /**
   * @remarks
   * The change reason type. Valid values:
   * - 0: voluntary date change
   * - 1: flight schedule change or flight cancellation
   * - 2: change due to epidemic.
   * 
   * @example
   * 1
   */
  changeReasonType?: number;
  /**
   * @remarks
   * The journeys after the change.
   */
  changedJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys[];
  /**
   * @remarks
   * The reason for closing the change order.
   * 
   * @example
   * reason desc
   */
  closeReason?: string;
  /**
   * @remarks
   * The time when the order was closed, in UTC timestamp.
   * 
   * @example
   * 1677415244000
   */
  closeUtcTime?: number;
  /**
   * @remarks
   * The contact information for the change order.
   */
  contact?: ChangeDetailListOfOrderNumResponseBodyDataListContact;
  /**
   * @remarks
   * The creation time of the change order, in UTC timestamp.
   * 
   * @example
   * 1677415276000
   */
  createUtcTime?: number;
  /**
   * @remarks
   * The latest payment deadline for the buyer, in UTC timestamp.
   * 
   * @example
   * 1677415278000
   */
  lastConfirmUtcTime?: number;
  /**
   * @remarks
   * The journeys from the previous change.
   */
  lastJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys[];
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * 5988430***541
   */
  orderNum?: number;
  /**
   * @remarks
   * The change order status. Valid values:
   * - 0: initial state
   * - 1: pending payment
   * - 2: payment successful
   * - 3: change successful
   * - 4: change closed.
   * 
   * @example
   * 2
   */
  orderStatus?: number;
  /**
   * @remarks
   * The original journeys.
   */
  originalJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys[];
  /**
   * @remarks
   * The payment status. Valid values:
   * - 0: initial state
   * - 1: pending payment
   * - 2: payment successful
   * - 3: transaction transfer successful
   * - 4: paid order closed successfully
   * - 5: unpaid order closed successfully.
   * 
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @remarks
   * The time when the buyer completed the payment, in UTC timestamp.
   * 
   * @example
   * 1677415255000
   */
  paySuccessUtcTime?: number;
  /**
   * @remarks
   * The total payment amount of the change order.
   * 
   * @example
   * 300
   */
  totalAmount?: number;
  /**
   * @remarks
   * The transaction number.
   * 
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      changeFeeDetails: 'change_fee_details',
      changeOrderNum: 'change_order_num',
      changePassengers: 'change_passengers',
      changeReasonType: 'change_reason_type',
      changedJourneys: 'changed_journeys',
      closeReason: 'close_reason',
      closeUtcTime: 'close_utc_time',
      contact: 'contact',
      createUtcTime: 'create_utc_time',
      lastConfirmUtcTime: 'last_confirm_utc_time',
      lastJourneys: 'last_journeys',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      originalJourneys: 'original_journeys',
      payStatus: 'pay_status',
      paySuccessUtcTime: 'pay_success_utc_time',
      totalAmount: 'total_amount',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFeeDetails: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails },
      changeOrderNum: 'number',
      changePassengers: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers },
      changeReasonType: 'number',
      changedJourneys: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys },
      closeReason: 'string',
      closeUtcTime: 'number',
      contact: ChangeDetailListOfOrderNumResponseBodyDataListContact,
      createUtcTime: 'number',
      lastConfirmUtcTime: 'number',
      lastJourneys: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys },
      orderNum: 'number',
      orderStatus: 'number',
      originalJourneys: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys },
      payStatus: 'number',
      paySuccessUtcTime: 'number',
      totalAmount: 'number',
      transactionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changeFeeDetails)) {
      $dara.Model.validateArray(this.changeFeeDetails);
    }
    if(Array.isArray(this.changePassengers)) {
      $dara.Model.validateArray(this.changePassengers);
    }
    if(Array.isArray(this.changedJourneys)) {
      $dara.Model.validateArray(this.changedJourneys);
    }
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    if(Array.isArray(this.lastJourneys)) {
      $dara.Model.validateArray(this.lastJourneys);
    }
    if(Array.isArray(this.originalJourneys)) {
      $dara.Model.validateArray(this.originalJourneys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyDataPagination extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'current_page',
      pageSize: 'page_size',
      totalCount: 'total_count',
      totalPage: 'total_page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  list?: ChangeDetailListOfOrderNumResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pagination?: ChangeDetailListOfOrderNumResponseBodyDataPagination;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pagination: 'pagination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ChangeDetailListOfOrderNumResponseBodyDataList },
      pagination: ChangeDetailListOfOrderNumResponseBodyDataPagination,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pagination && typeof (this.pagination as any).validate === 'function') {
      (this.pagination as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeDetailListOfOrderNumResponseBody extends $dara.Model {
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: ChangeDetailListOfOrderNumResponseBodyData;
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The data returned with the error.
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code. The value is always 200 for successful requests.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ChangeDetailListOfOrderNumResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

