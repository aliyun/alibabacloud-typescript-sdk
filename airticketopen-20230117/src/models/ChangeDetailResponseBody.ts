// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee extends $dara.Model {
  /**
   * @remarks
   * fare penalty
   * 
   * @example
   * 50
   */
  serviceFee?: number;
  /**
   * @remarks
   * tax penalty
   * 
   * @example
   * 20
   */
  taxFee?: number;
  /**
   * @remarks
   * price difference
   * 
   * @example
   * 30
   */
  upgradeFee?: number;
  static names(): { [key: string]: string } {
    return {
      serviceFee: 'service_fee',
      taxFee: 'tax_fee',
      upgradeFee: 'upgrade_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceFee: 'number',
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

export class ChangeDetailResponseBodyDataChangeFeeDetailsPassenger extends $dara.Model {
  /**
   * @remarks
   * Document number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * Passenger\\"s first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * Passenger\\"s last name
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

export class ChangeDetailResponseBodyDataChangeFeeDetails extends $dara.Model {
  /**
   * @remarks
   * Change fee details for the passenger
   */
  changeFee?: ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee;
  /**
   * @remarks
   * Information of the passenger for the change
   */
  passenger?: ChangeDetailResponseBodyDataChangeFeeDetailsPassenger;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      passenger: 'passenger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: ChangeDetailResponseBodyDataChangeFeeDetailsChangeFee,
      passenger: ChangeDetailResponseBodyDataChangeFeeDetailsPassenger,
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

export class ChangeDetailResponseBodyDataChangePassengers extends $dara.Model {
  /**
   * @remarks
   * Document number
   * 
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @remarks
   * Passenger first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * Passenger last name
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

export class ChangeDetailResponseBodyDataChangedJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * Arrival airport three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * Arrival city three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Arrival terminal of the flight
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * Flight arrival date and time, in the format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * Number of available seats
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * service class ( compartment )
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Whether it is a code-share flight
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * Departure airport three-letter code (uppercase)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * Departure city three-letter code (uppercase)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * Departure terminal of the flight
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * Flight departure date and time, in the format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * Aircraft type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * Flight duration in minutes
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * Market airline (e.g., HO)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * Marketing flight number (e.g., HO1295)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * Marketing flight number (e.g., 1295)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * Operating airline (e.g., CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * Operating flight number (e.g., CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * Segment ID format: flight number + departure airport + arrival airport + departure date (MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * List of stop cities, with values when stopQuantity > 0, separated by commas
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * Number of stop cities
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

export class ChangeDetailResponseBodyDataChangedJourneys extends $dara.Model {
  /**
   * @remarks
   * Segment information
   */
  segmentList?: ChangeDetailResponseBodyDataChangedJourneysSegmentList[];
  /**
   * @remarks
   * Number of transfers
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
      segmentList: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataChangedJourneysSegmentList },
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

export class ChangeDetailResponseBodyDataContact extends $dara.Model {
  /**
   * @remarks
   * Email address
   * 
   * @example
   * gao******@gmail.com
   */
  email?: string;
  /**
   * @remarks
   * Country code
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * Contact\\"s mobile phone number
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

export class ChangeDetailResponseBodyDataLastJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * Arrival airport three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * Arrival city three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Arrival terminal of the flight
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * Flight arrival date and time, in the format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * Number of available seats
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * service class ( compartment )
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Whether it is a codeshare flight
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * Departure airport three-letter code (uppercase)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * Departure city three-letter code (uppercase)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * Departure terminal of the flight
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * Flight departure date and time, in the format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * Aircraft type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * Flight duration in minutes
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * Marketing airline (e.g., HO)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * Marketing flight number (e.g., HO1295)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * Marketing flight number (e.g., 1295)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * Operating airline (e.g., CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * Operating flight number (e.g., CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * Segment ID format: flight number + departure airport + arrival airport + departure date (MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * List of stop cities, with values when stopQuantity > 0, separated by commas
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * Number of stop cities
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

export class ChangeDetailResponseBodyDataLastJourneys extends $dara.Model {
  /**
   * @remarks
   * Segment information
   */
  segmentList?: ChangeDetailResponseBodyDataLastJourneysSegmentList[];
  /**
   * @remarks
   * Number of transfers
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
      segmentList: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataLastJourneysSegmentList },
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

export class ChangeDetailResponseBodyDataOriginalJourneysSegmentList extends $dara.Model {
  /**
   * @remarks
   * Arrival airport three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * Arrival city three-letter code (uppercase)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * Arrival terminal of the flight
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * Flight arrival date and time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * Number of available seats
   * 
   * @example
   * 7
   */
  availability?: string;
  /**
   * @remarks
   * RBD
   * 
   * @example
   * V
   */
  cabin?: string;
  /**
   * @remarks
   * service class ( compartment )
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * Whether it is a codeshare flight
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * Departure airport three-letter code (uppercase)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * Departure city three-letter code (uppercase)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * Departure terminal of the flight
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * Flight departure date and time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * Aircraft type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * Flight duration in minutes
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * Marketing airline (e.g., HO)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * Marketing flight number (e.g., HO1295)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * Marketing airline\\"s numeric flight number (e.g., 1295)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * Operating airline (e.g., CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * Operating airline\\"s flight number (e.g., CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * Segment ID format: flight number + departure airport + arrival airport + departure date (yyyyMMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * List of stop cities, with values when stopQuantity > 0, separated by commas
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * Number of stop cities
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

export class ChangeDetailResponseBodyDataOriginalJourneys extends $dara.Model {
  /**
   * @remarks
   * Segment information
   */
  segmentList?: ChangeDetailResponseBodyDataOriginalJourneysSegmentList[];
  /**
   * @remarks
   * Number of transfers
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
      segmentList: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataOriginalJourneysSegmentList },
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

export class ChangeDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Change fee details, per passenger
   */
  changeFeeDetails?: ChangeDetailResponseBodyDataChangeFeeDetails[];
  /**
   * @remarks
   * Change order number
   * 
   * @example
   * 4988430***950
   */
  changeOrderNum?: number;
  /**
   * @remarks
   * List of passengers for the change
   */
  changePassengers?: ChangeDetailResponseBodyDataChangePassengers[];
  /**
   * @remarks
   * Change reason type. 
   * 0: Voluntary change; 
   * 1: Involuntary change, due to flight delay or cancellation, schedule changes, or other airline reasons; 
   * 2: Involuntary change, due to health reasons with a medical report
   * 
   * @example
   * 1
   */
  changeReasonType?: number;
  /**
   * @remarks
   * New journeys
   */
  changedJourneys?: ChangeDetailResponseBodyDataChangedJourneys[];
  /**
   * @remarks
   * Reason for closing the change order
   * 
   * @example
   * reason desc
   */
  closeReason?: string;
  /**
   * @remarks
   * The time when the order was closed, in UTC timestamp
   * 
   * @example
   * 1677415244000
   */
  closeUtcTime?: number;
  /**
   * @remarks
   * Contact information for the change request
   */
  contact?: ChangeDetailResponseBodyDataContact;
  /**
   * @remarks
   * Creation time of the change order, UTC timestamp
   * 
   * @example
   * 1677415276000
   */
  createUtcTime?: number;
  /**
   * @remarks
   * Latest payment time for the buyer, UTC timestamp
   * 
   * @example
   * 1677415278000
   */
  lastConfirmUtcTime?: number;
  /**
   * @remarks
   * The itinerary of the last change
   */
  lastJourneys?: ChangeDetailResponseBodyDataLastJourneys[];
  /**
   * @remarks
   * Ticketing Order number
   * 
   * @example
   * 5988430***541
   */
  orderNum?: number;
  /**
   * @remarks
   * Change order status 0: Initial state; 1: Pending payment; 2: Payment successful; 3: Change successful; 4: Change closed
   * 
   * @example
   * 2
   */
  orderStatus?: number;
  /**
   * @remarks
   * Original journeys
   */
  originalJourneys?: ChangeDetailResponseBodyDataOriginalJourneys[];
  /**
   * @remarks
   * Payment status 0: initial state; 1: pending payment; 2: payment successful; 4: successfully closed paid order; 5: successfully closed unpaid order
   * 
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @remarks
   * The time when the buyer successfully paid, in UTC timestamp
   * 
   * @example
   * 1677415255000
   */
  paySuccessUtcTime?: number;
  /**
   * @remarks
   * Total payment amount for the change order
   * 
   * @example
   * 300
   */
  totalAmount?: number;
  /**
   * @remarks
   * Transaction serial number
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
      changeFeeDetails: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataChangeFeeDetails },
      changeOrderNum: 'number',
      changePassengers: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataChangePassengers },
      changeReasonType: 'number',
      changedJourneys: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataChangedJourneys },
      closeReason: 'string',
      closeUtcTime: 'number',
      contact: ChangeDetailResponseBodyDataContact,
      createUtcTime: 'number',
      lastConfirmUtcTime: 'number',
      lastJourneys: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataLastJourneys },
      orderNum: 'number',
      orderStatus: 'number',
      originalJourneys: { 'type': 'array', 'itemType': ChangeDetailResponseBodyDataOriginalJourneys },
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

export class ChangeDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request RequestId
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * Correctly processed return data
   */
  data?: ChangeDetailResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * Data carried in error handling
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * HTTP request successful, status value is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Whether it is successful
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
      data: ChangeDetailResponseBodyData,
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

