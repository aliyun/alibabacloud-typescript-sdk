// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataBaggageAllowanceMapValue } from "./DataBaggageAllowanceMapValue";
import { DataRefundChangeRuleMapValue } from "./DataRefundChangeRuleMapValue";
import { DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue } from "./DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue";
import { DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue } from "./DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue";


export class OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary extends $dara.Model {
  /**
   * @example
   * 0
   */
  baggageAmount?: number;
  /**
   * @example
   * 0
   */
  baggageWeight?: number;
  /**
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  isAllWeight?: boolean;
  /**
   * @example
   * 10.0
   */
  price?: number;
  static names(): { [key: string]: string } {
    return {
      baggageAmount: 'baggage_amount',
      baggageWeight: 'baggage_weight',
      baggageWeightUnit: 'baggage_weight_unit',
      isAllWeight: 'is_all_weight',
      price: 'price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageAmount: 'number',
      baggageWeight: 'number',
      baggageWeightUnit: 'string',
      isAllWeight: 'boolean',
      price: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataAncillaryItemDetailListAncillary extends $dara.Model {
  /**
   * @remarks
   * ancillay_id
   * 
   * @example
   * MDY2NTAxLCJleHAiOjE2NxNzM3MDEsIm5ix
   */
  ancillaryId?: string;
  /**
   * @remarks
   * ancillary product type currently supports 4: paid luggage
   * 
   * @example
   * 4
   */
  ancillaryType?: number;
  baggageAncillary?: OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary;
  static names(): { [key: string]: string } {
    return {
      ancillaryId: 'ancillary_id',
      ancillaryType: 'ancillary_type',
      baggageAncillary: 'baggage_ancillary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryId: 'string',
      ancillaryType: 'number',
      baggageAncillary: OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary,
    };
  }

  validate() {
    if(this.baggageAncillary && typeof (this.baggageAncillary as any).validate === 'function') {
      (this.baggageAncillary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataAncillaryItemDetailListPassengerCredential extends $dara.Model {
  /**
   * @remarks
   * place of issue, two-letter code
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * travel document number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * travel document type , only support "1"(1 means passport) currently.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * expiration date
   * 
   * @example
   * 20290101
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataAncillaryItemDetailListPassenger extends $dara.Model {
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * travel document
   */
  credential?: OrderDetailResponseBodyDataAncillaryItemDetailListPassengerCredential;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: male; 1: female
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * country code for mobile phone number
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: OrderDetailResponseBodyDataAncillaryItemDetailListPassengerCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataAncillaryItemDetailList extends $dara.Model {
  /**
   * @remarks
   * the ancillary buyer booked
   */
  ancillary?: OrderDetailResponseBodyDataAncillaryItemDetailListAncillary;
  /**
   * @remarks
   * passenger
   */
  passenger?: OrderDetailResponseBodyDataAncillaryItemDetailListPassenger;
  /**
   * @remarks
   * segment ID list, these segments share the same ancillary
   */
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      ancillary: 'ancillary',
      passenger: 'passenger',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillary: OrderDetailResponseBodyDataAncillaryItemDetailListAncillary,
      passenger: OrderDetailResponseBodyDataAncillaryItemDetailListPassenger,
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.ancillary && typeof (this.ancillary as any).validate === 'function') {
      (this.ancillary as any).validate();
    }
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailListFlightPrice extends $dara.Model {
  /**
   * @remarks
   * selling price
   * 
   * @example
   * 300
   */
  sellPrice?: number;
  /**
   * @remarks
   * tax
   * 
   * @example
   * 10
   */
  tax?: number;
  static names(): { [key: string]: string } {
    return {
      sellPrice: 'sell_price',
      tax: 'tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sellPrice: 'number',
      tax: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation extends $dara.Model {
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
   * cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * cabin class description
   * 
   * @example
   * economy class
   */
  cabinClassName?: string;
  /**
   * @remarks
   * availability
   * 
   * @example
   * A
   */
  cabinQuantity?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(yyMMddHHmm)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinClassName: 'cabin_class_name',
      cabinQuantity: 'cabin_quantity',
      segmentId: 'segment_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinClassName: 'string',
      cabinQuantity: 'string',
      segmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailListPassengerCredential extends $dara.Model {
  /**
   * @remarks
   * place of issue, two-letter code
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * travel document number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * travel document type , only support "1"(1 means passport) currently.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * expiration date
   * 
   * @example
   * 20290101
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailListPassenger extends $dara.Model {
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * travel document
   */
  credential?: OrderDetailResponseBodyDataFlightItemDetailListPassengerCredential;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: MALE; 1: FEMALE
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * mobile country code
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality (two-letter code)
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: OrderDetailResponseBodyDataFlightItemDetailListPassengerCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataFlightItemDetailList extends $dara.Model {
  /**
   * @remarks
   * b PNR(airline booking code) list
   */
  bPnrList?: string[];
  /**
   * @remarks
   * c PNR(airline booking code) list
   */
  cPnrList?: string[];
  /**
   * @remarks
   * flight price information for current passenger
   */
  flightPrice?: OrderDetailResponseBodyDataFlightItemDetailListFlightPrice;
  /**
   * @remarks
   * RBD information in flight segment dimension
   */
  flightSegmentCabinRelation?: OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation[];
  /**
   * @remarks
   * passenger
   */
  passenger?: OrderDetailResponseBodyDataFlightItemDetailListPassenger;
  /**
   * @remarks
   * ticketing airline
   * 
   * @example
   * HO
   */
  ticketAirLine?: string;
  /**
   * @remarks
   * ticket number list
   */
  ticketNos?: string[];
  static names(): { [key: string]: string } {
    return {
      bPnrList: 'b_pnr_list',
      cPnrList: 'c_pnr_list',
      flightPrice: 'flight_price',
      flightSegmentCabinRelation: 'flight_segment_cabin_relation',
      passenger: 'passenger',
      ticketAirLine: 'ticket_air_line',
      ticketNos: 'ticket_nos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bPnrList: { 'type': 'array', 'itemType': 'string' },
      cPnrList: { 'type': 'array', 'itemType': 'string' },
      flightPrice: OrderDetailResponseBodyDataFlightItemDetailListFlightPrice,
      flightSegmentCabinRelation: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation },
      passenger: OrderDetailResponseBodyDataFlightItemDetailListPassenger,
      ticketAirLine: 'string',
      ticketNos: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.bPnrList)) {
      $dara.Model.validateArray(this.bPnrList);
    }
    if(Array.isArray(this.cPnrList)) {
      $dara.Model.validateArray(this.cPnrList);
    }
    if(this.flightPrice && typeof (this.flightPrice as any).validate === 'function') {
      (this.flightPrice as any).validate();
    }
    if(Array.isArray(this.flightSegmentCabinRelation)) {
      $dara.Model.validateArray(this.flightSegmentCabinRelation);
    }
    if(this.passenger && typeof (this.passenger as any).validate === 'function') {
      (this.passenger as any).validate();
    }
    if(Array.isArray(this.ticketNos)) {
      $dara.Model.validateArray(this.ticketNos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataPassengerListCredential extends $dara.Model {
  /**
   * @remarks
   * place of issue, two-letter code
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * travel document number
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * travel document type , only support "1"(1 means passport) currently.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * expiration date
   * 
   * @example
   * 20290101
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataPassengerList extends $dara.Model {
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * travel document
   */
  credential?: OrderDetailResponseBodyDataPassengerListCredential;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: MALE; 1: FEMALE
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * mobile country code
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality (two-letter code)
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: OrderDetailResponseBodyDataPassengerListCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionJourneyListSegmentList extends $dara.Model {
  /**
   * @remarks
   * arrival airport code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @remarks
   * arrival city code (capitalized)
   * 
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @remarks
   * arrival terminal
   * 
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @remarks
   * arrival time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @remarks
   * availability
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
   * cabin class
   * 
   * @example
   * Y
   */
  cabinClass?: string;
  /**
   * @remarks
   * code share or not
   * 
   * @example
   * false
   */
  codeShare?: boolean;
  /**
   * @remarks
   * departure airport code (capitalized)
   * 
   * @example
   * PVG
   */
  departureAirport?: string;
  /**
   * @remarks
   * departure city code (capitalized)
   * 
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @remarks
   * departure terminal
   * 
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @remarks
   * departure time in string format (yyyy-MM-dd HH:mm:ss)
   * 
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @remarks
   * equipment type
   * 
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @remarks
   * flight time, unit: minute
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * marketing airline code (eg: KA)
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * marketing airline flight no. (eg: KA5809)
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * marketing airline flight no. (eg: 5809)
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * operating airline code (eg: CX)
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * operating airline flight no. (eg: CX601)
   * 
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @remarks
   * segment ID format: flight no.+departure airport[IATA airport code]+arrival airport[IATA airport code]+departure time(MMdd)
   * 
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @remarks
   * stop city list when stop_quantity > 1 , use “,” for seperation
   * 
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
   * @remarks
   * number of stops
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

export class OrderDetailResponseBodyDataSolutionJourneyList extends $dara.Model {
  /**
   * @remarks
   * segment list
   */
  segmentList?: OrderDetailResponseBodyDataSolutionJourneyListSegmentList[];
  /**
   * @remarks
   * number of transfers
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
      segmentList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionJourneyListSegmentList },
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

export class OrderDetailResponseBodyDataSolutionSegmentBaggageCheckInInfoList extends $dara.Model {
  /**
   * @remarks
   * through check-in baggage policy type
   * 
   * 1. baggage through check-in between segments
   * 2. baggage re-check-in needed between segments
   * 3. baggage through check-in at stop city ( applies for stop flight )
   * 4. baggage re-checkin needed at stop city ( applies for stop flight )
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same baggage through check-in policy
   */
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      luggageDirectInfoType: 'luggage_direct_info_type',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      luggageDirectInfoType: 'number',
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionSegmentBaggageMappingList extends $dara.Model {
  /**
   * @remarks
   * baggage rule mapping, key is passenger type, value is baggage allowance details
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same baggage rule
   */
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      passengerBaggageAllowanceMapping: 'passenger_baggage_allowance_mapping',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerBaggageAllowanceMapping: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.passengerBaggageAllowanceMapping) {
      $dara.Model.validateMap(this.passengerBaggageAllowanceMapping);
    }
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionSegmentRefundChangeRuleMappingList extends $dara.Model {
  /**
   * @remarks
   * change and refund policy mapping, key is passenger type, value is change and refund policy details
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * segment id list. all the listed segment ids share the same change and refund policy
   */
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      refundChangeRuleMap: 'refund_change_rule_map',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundChangeRuleMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue },
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.refundChangeRuleMap) {
      $dara.Model.validateMap(this.refundChangeRuleMap);
    }
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionSolutionAttributeIssueTimeInfo extends $dara.Model {
  issueTicketType?: number;
  issueTimeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      issueTicketType: 'issue_ticket_type',
      issueTimeLimit: 'issue_time_limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueTicketType: 'number',
      issueTimeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolutionSolutionAttribute extends $dara.Model {
  issueTimeInfo?: OrderDetailResponseBodyDataSolutionSolutionAttributeIssueTimeInfo;
  supplySourceType?: string;
  static names(): { [key: string]: string } {
    return {
      issueTimeInfo: 'issue_time_info',
      supplySourceType: 'supply_source_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueTimeInfo: OrderDetailResponseBodyDataSolutionSolutionAttributeIssueTimeInfo,
      supplySourceType: 'string',
    };
  }

  validate() {
    if(this.issueTimeInfo && typeof (this.issueTimeInfo as any).validate === 'function') {
      (this.issueTimeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyDataSolution extends $dara.Model {
  /**
   * @remarks
   * adult fare
   * 
   * @example
   * 300
   */
  adultPrice?: number;
  /**
   * @remarks
   * adult tax
   * 
   * @example
   * 30
   */
  adultTax?: number;
  /**
   * @remarks
   * child fare
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * child tax
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * infant fare
   * 
   * @example
   * 100
   */
  infantPrice?: number;
  /**
   * @remarks
   * infant tax
   * 
   * @example
   * 10
   */
  infantTax?: number;
  /**
   * @remarks
   * journey list
   */
  journeyList?: OrderDetailResponseBodyDataSolutionJourneyList[];
  /**
   * @remarks
   * product type description
   * 
   * @example
   * description
   */
  productTypeDescription?: string;
  /**
   * @remarks
   * refund coupon description
   * 
   * @example
   * description
   */
  refundTicketCouponDescription?: string;
  /**
   * @remarks
   * through check-in baggage policy
   */
  segmentBaggageCheckInInfoList?: OrderDetailResponseBodyDataSolutionSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * baggage rule list
   */
  segmentBaggageMappingList?: OrderDetailResponseBodyDataSolutionSegmentBaggageMappingList[];
  /**
   * @remarks
   * change and refund policy
   */
  segmentRefundChangeRuleMappingList?: OrderDetailResponseBodyDataSolutionSegmentRefundChangeRuleMappingList[];
  solutionAttribute?: OrderDetailResponseBodyDataSolutionSolutionAttribute;
  /**
   * @remarks
   * solution_id
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TUxxx
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      adultPrice: 'adult_price',
      adultTax: 'adult_tax',
      childPrice: 'child_price',
      childTax: 'child_tax',
      infantPrice: 'infant_price',
      infantTax: 'infant_tax',
      journeyList: 'journey_list',
      productTypeDescription: 'product_type_description',
      refundTicketCouponDescription: 'refund_ticket_coupon_description',
      segmentBaggageCheckInInfoList: 'segment_baggage_check_in_info_list',
      segmentBaggageMappingList: 'segment_baggage_mapping_list',
      segmentRefundChangeRuleMappingList: 'segment_refund_change_rule_mapping_list',
      solutionAttribute: 'solution_attribute',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adultPrice: 'number',
      adultTax: 'number',
      childPrice: 'number',
      childTax: 'number',
      infantPrice: 'number',
      infantTax: 'number',
      journeyList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionJourneyList },
      productTypeDescription: 'string',
      refundTicketCouponDescription: 'string',
      segmentBaggageCheckInInfoList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionSegmentBaggageCheckInInfoList },
      segmentBaggageMappingList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionSegmentBaggageMappingList },
      segmentRefundChangeRuleMappingList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataSolutionSegmentRefundChangeRuleMappingList },
      solutionAttribute: OrderDetailResponseBodyDataSolutionSolutionAttribute,
      solutionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.journeyList)) {
      $dara.Model.validateArray(this.journeyList);
    }
    if(Array.isArray(this.segmentBaggageCheckInInfoList)) {
      $dara.Model.validateArray(this.segmentBaggageCheckInInfoList);
    }
    if(Array.isArray(this.segmentBaggageMappingList)) {
      $dara.Model.validateArray(this.segmentBaggageMappingList);
    }
    if(Array.isArray(this.segmentRefundChangeRuleMappingList)) {
      $dara.Model.validateArray(this.segmentRefundChangeRuleMappingList);
    }
    if(this.solutionAttribute && typeof (this.solutionAttribute as any).validate === 'function') {
      (this.solutionAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * ancillary product fulfillment details
   */
  ancillaryItemDetailList?: OrderDetailResponseBodyDataAncillaryItemDetailList[];
  /**
   * @remarks
   * baggage rule mapping, key is passenger type, value is baggage allowance details
   */
  baggageAllowanceMap?: { [key: string]: DataBaggageAllowanceMapValue };
  /**
   * @remarks
   * book time(timestamp)
   * 
   * @example
   * 1677210784000
   */
  bookTime?: number;
  /**
   * @remarks
   * flight product fulfillment details
   */
  flightItemDetailList?: OrderDetailResponseBodyDataFlightItemDetailList[];
  /**
   * @remarks
   * order number created by book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * order status 
   * 
   * 1: order creation in process; 
   * 
   * 2: order creation successful; 
   * 
   * 3: order paid; 
   * 
   * 4: order successful; 
   * 
   * 5: order closed
   * 
   * @example
   * 4
   */
  orderStatus?: number;
  /**
   * @remarks
   * external order number(customized by buyer when book)
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * the information about all passenger of current order
   */
  passengerList?: OrderDetailResponseBodyDataPassengerList[];
  /**
   * @remarks
   * payment status 
   * 
   * 1: payment in process; 
   * 
   * 2: deduction successful; 
   * 
   * 3: paid to the seller; 
   * 
   * 4: transaction closed
   * 
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @remarks
   * pay time(timestamp)
   * 
   * @example
   * 1677210788000
   */
  payTime?: number;
  /**
   * @remarks
   * discount amount
   * 
   * @example
   * 10
   */
  promotionPrice?: number;
  /**
   * @remarks
   * actual payment amount
   * 
   * @example
   * 3000
   */
  realPayPrice?: number;
  /**
   * @remarks
   * change and refund policy mapping, key is passenger type, value is change and refund policy details
   */
  refundChangeRuleMap?: { [key: string]: DataRefundChangeRuleMapValue };
  /**
   * @remarks
   * buyer nickname
   * 
   * @example
   * nick
   */
  sessionNick?: string;
  /**
   * @remarks
   * the solution buyer booked
   */
  solution?: OrderDetailResponseBodyDataSolution;
  /**
   * @remarks
   * order success time(timestamp)
   * 
   * @example
   * 1677210786000
   */
  succeedTime?: number;
  /**
   * @remarks
   * total price of current order
   * 
   * @example
   * 3000
   */
  totalPrice?: number;
  /**
   * @remarks
   * transaction number
   * 
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      ancillaryItemDetailList: 'ancillary_item_detail_list',
      baggageAllowanceMap: 'baggage_allowance_map',
      bookTime: 'book_time',
      flightItemDetailList: 'flight_item_detail_list',
      orderNum: 'order_num',
      orderStatus: 'order_status',
      outOrderNum: 'out_order_num',
      passengerList: 'passenger_list',
      payStatus: 'pay_status',
      payTime: 'pay_time',
      promotionPrice: 'promotion_price',
      realPayPrice: 'real_pay_price',
      refundChangeRuleMap: 'refund_change_rule_map',
      sessionNick: 'session_nick',
      solution: 'solution',
      succeedTime: 'succeed_time',
      totalPrice: 'total_price',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryItemDetailList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataAncillaryItemDetailList },
      baggageAllowanceMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataBaggageAllowanceMapValue },
      bookTime: 'number',
      flightItemDetailList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataFlightItemDetailList },
      orderNum: 'number',
      orderStatus: 'number',
      outOrderNum: 'string',
      passengerList: { 'type': 'array', 'itemType': OrderDetailResponseBodyDataPassengerList },
      payStatus: 'number',
      payTime: 'number',
      promotionPrice: 'number',
      realPayPrice: 'number',
      refundChangeRuleMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataRefundChangeRuleMapValue },
      sessionNick: 'string',
      solution: OrderDetailResponseBodyDataSolution,
      succeedTime: 'number',
      totalPrice: 'number',
      transactionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ancillaryItemDetailList)) {
      $dara.Model.validateArray(this.ancillaryItemDetailList);
    }
    if(this.baggageAllowanceMap) {
      $dara.Model.validateMap(this.baggageAllowanceMap);
    }
    if(Array.isArray(this.flightItemDetailList)) {
      $dara.Model.validateArray(this.flightItemDetailList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    if(this.refundChangeRuleMap) {
      $dara.Model.validateMap(this.refundChangeRuleMap);
    }
    if(this.solution && typeof (this.solution as any).validate === 'function') {
      (this.solution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: OrderDetailResponseBodyData;
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
   * error data
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
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
      data: OrderDetailResponseBodyData,
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

