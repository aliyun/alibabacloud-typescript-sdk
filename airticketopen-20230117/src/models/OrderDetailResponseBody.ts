// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataBaggageAllowanceMapValue } from "./DataBaggageAllowanceMapValue";
import { DataRefundChangeRuleMapValue } from "./DataRefundChangeRuleMapValue";
import { DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue } from "./DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue";
import { DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue } from "./DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue";


export class OrderDetailResponseBodyDataAncillaryItemDetailListAncillaryBaggageAncillary extends $dara.Model {
  /**
   * @remarks
   * The number of baggage pieces. Valid values: 3, 2, 1, 0, and -2. A value of -2 indicates weight-based calculation.
   * 
   * @example
   * 0
   */
  baggageAmount?: number;
  /**
   * @remarks
   * The baggage weight, ranging from 0 to 50. When isAllWeight is set to true, this value represents the total weight of all pieces.
   * 
   * @example
   * 0
   */
  baggageWeight?: number;
  /**
   * @remarks
   * The baggage weight unit.
   * 
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * Indicates whether the weight represents the total weight of all baggage pieces.
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * The total price.
   * 
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
   * The ancillary product ID.
   * 
   * @example
   * MDY2NTAxLCJleHAiOjE2NxNzM3MDEsIm5ix
   */
  ancillaryId?: string;
  /**
   * @remarks
   * The ancillary product type. Currently supported value: 4 (paid baggage).
   * 
   * @example
   * 4
   */
  ancillaryType?: number;
  /**
   * @remarks
   * The baggage ancillary details.
   */
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
   * The place of issuance, represented as a two-letter code.
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * The credential number.
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 0: ID card.
   * - 1: passport.
   * - 4: Home Return Permit.
   * - 5: Mainland Travel Permit for Taiwan Residents.
   * - 6: Exit-Entry Permit for Hong Kong and Macao Residents.
   * - 12: Taiwan Travel Permit.
   * - 19: no credential.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * The credential expiration date.
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
   * The date of birth in yyyyMMdd format.
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * The credential information.
   */
  credential?: OrderDetailResponseBodyDataAncillaryItemDetailListPassengerCredential;
  /**
   * @remarks
   * The first name.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - 0: MALE.
   * - 1: FEMALE.
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * The last name.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * The country code of the mobile phone number.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * The two-letter nationality code.
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * The passenger type. Valid values:
   * - 0: adult.
   * - 1: child.
   * - 8: infant.
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
   * The ancillary product details.
   */
  ancillary?: OrderDetailResponseBodyDataAncillaryItemDetailListAncillary;
  /**
   * @remarks
   * The passenger information.
   */
  passenger?: OrderDetailResponseBodyDataAncillaryItemDetailListPassenger;
  /**
   * @remarks
   * The segment IDs to which the ancillary product applies.
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
   * The selling price. Unit: CNY.
   * 
   * @example
   * 300
   */
  sellPrice?: number;
  /**
   * @remarks
   * The tax.
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
   * The cabin.
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
   * The cabin class description.
   * 
   * @example
   * economy class
   */
  cabinClassName?: string;
  /**
   * @remarks
   * The number of available tickets.
   * 
   * @example
   * A
   */
  cabinQuantity?: string;
  /**
   * @remarks
   * The segment ID.
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
   * The place of issuance, represented as a two-letter code.
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * The credential number.
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 0: ID card.
   * - 1: passport.
   * - 4: Home Return Permit.
   * - 5: Mainland Travel Permit for Taiwan Residents.
   * - 6: Exit-Entry Permit for Hong Kong and Macao Residents.
   * - 12: Taiwan Travel Permit.
   * - 19: no credential.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * The credential expiration date.
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
   * The date of birth in yyyyMMdd format.
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * The credential information.
   */
  credential?: OrderDetailResponseBodyDataFlightItemDetailListPassengerCredential;
  /**
   * @remarks
   * The first name.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - 0: MALE.
   * - 1: FEMALE.
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * The last name.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * The country code of the mobile phone number.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * The two-letter nationality code.
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * The passenger type. Valid values:
   * - 0: adult.
   * - 1: child.
   * - 8: infant.
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
   * The list of bPnr values.
   */
  bPnrList?: string[];
  /**
   * @remarks
   * The list of cPnr values.
   */
  cPnrList?: string[];
  /**
   * @remarks
   * The passenger price information.
   */
  flightPrice?: OrderDetailResponseBodyDataFlightItemDetailListFlightPrice;
  /**
   * @remarks
   * The list of segment-cabin information.
   */
  flightSegmentCabinRelation?: OrderDetailResponseBodyDataFlightItemDetailListFlightSegmentCabinRelation[];
  /**
   * @remarks
   * The passenger information.
   */
  passenger?: OrderDetailResponseBodyDataFlightItemDetailListPassenger;
  /**
   * @remarks
   * The ticketing airline. Multiple ticketing airlines may be concatenated.
   * 
   * @example
   * HO
   */
  ticketAirLine?: string;
  /**
   * @remarks
   * The list of ticket numbers.
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
   * The place of issuance, represented as a two-letter code.
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * The credential number.
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 0: ID card.
   * - 1: passport.
   * - 4: Home Return Permit.
   * - 5: Mainland Travel Permit for Taiwan Residents.
   * - 6: Exit-Entry Permit for Hong Kong and Macao Residents.
   * - 12: Taiwan Travel Permit.
   * - 19: no credential.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * The credential expiration date.
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
   * The date of birth in yyyyMMdd format.
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * The credential information.
   */
  credential?: OrderDetailResponseBodyDataPassengerListCredential;
  /**
   * @remarks
   * The first name.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - 0: MALE.
   * - 1: FEMALE.
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * The last name.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * The country code of the mobile phone number.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * The two-letter nationality code.
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * The passenger type. Valid values:
   * - 0: adult.
   * - 1: child.
   * - 8: infant.
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
   * The cabin.
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
   * Indicates whether the flight is a codeshare flight.
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
   * The flight duration. Unit: minutes.
   * 
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @remarks
   * The marketing airline code (for example, HO).
   * 
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @remarks
   * The marketing flight number (for example, HO1295).
   * 
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @remarks
   * The numeric marketing flight number (for example, 1295).
   * 
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @remarks
   * The operating airline code (for example, CX).
   * 
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @remarks
   * The operating flight number (for example, CX601).
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
   * The list of stopover cities. This parameter has a value when stopQuantity is greater than 0. Multiple cities are separated by commas.
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

export class OrderDetailResponseBodyDataSolutionJourneyList extends $dara.Model {
  /**
   * @remarks
   * The segment information.
   */
  segmentList?: OrderDetailResponseBodyDataSolutionJourneyListSegmentList[];
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
   * The baggage through-check rule type. Valid values:
   * - 1: baggage is checked through between segments.
   * - 2: baggage must be rechecked between segments.
   * - 3: baggage is checked through at stopover cities.
   * - 4: baggage must be rechecked at stopover cities.
   * 
   * @example
   * 1
   */
  luggageDirectInfoType?: number;
  /**
   * @remarks
   * The list of segment IDs. These segments share the same baggage through-check rule.
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
   * The mapping of passenger types to complimentary baggage allowances.
   */
  passengerBaggageAllowanceMapping?: { [key: string]: DataSolutionSegmentBaggageMappingListPassengerBaggageAllowanceMappingValue };
  /**
   * @remarks
   * The list of segment IDs. These segments share the same complimentary baggage rule.
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
   * The mapping of passenger types to refund and change rules.
   */
  refundChangeRuleMap?: { [key: string]: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue };
  /**
   * @remarks
   * The list of segment IDs. These segments share the same refund and change rule.
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
   * The unit price for an adult.
   * 
   * @example
   * 300
   */
  adultPrice?: number;
  /**
   * @remarks
   * The tax for an adult.
   * 
   * @example
   * 30
   */
  adultTax?: number;
  /**
   * @remarks
   * The unit price for a child.
   * 
   * @example
   * 200
   */
  childPrice?: number;
  /**
   * @remarks
   * The tax for a child.
   * 
   * @example
   * 20
   */
  childTax?: number;
  /**
   * @remarks
   * The unit price for an infant.
   * 
   * @example
   * 100
   */
  infantPrice?: number;
  /**
   * @remarks
   * The tax for an infant.
   * 
   * @example
   * 10
   */
  infantTax?: number;
  /**
   * @remarks
   * The journey list.
   */
  journeyList?: OrderDetailResponseBodyDataSolutionJourneyList[];
  /**
   * @remarks
   * The baggage through-check rules.
   */
  segmentBaggageCheckInInfoList?: OrderDetailResponseBodyDataSolutionSegmentBaggageCheckInInfoList[];
  /**
   * @remarks
   * The complimentary baggage rules.
   */
  segmentBaggageMappingList?: OrderDetailResponseBodyDataSolutionSegmentBaggageMappingList[];
  /**
   * @remarks
   * The refund and change rules.
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
   * The ancillary product fulfillment details.
   */
  ancillaryItemDetailList?: OrderDetailResponseBodyDataAncillaryItemDetailList[];
  /**
   * @remarks
   * The mapping of passenger types to baggage rules.
   */
  baggageAllowanceMap?: { [key: string]: DataBaggageAllowanceMapValue };
  /**
   * @remarks
   * The booking time (order creation time). The value is a 13-digit timestamp.
   * 
   * @example
   * 1677210784000
   */
  bookTime?: number;
  /**
   * @remarks
   * The flight ticket fulfillment details.
   */
  flightItemDetailList?: OrderDetailResponseBodyDataFlightItemDetailList[];
  /**
   * @remarks
   * The order number.
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - 1: Booking in progress.
   * - 2: Booking succeeded.
   * - 3: Order paid.
   * - 4: Order succeeded.
   * - 5: Order closed.
   * 
   * @example
   * 4
   */
  orderStatus?: number;
  /**
   * @remarks
   * The external order number.
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * The passenger list.
   */
  passengerList?: OrderDetailResponseBodyDataPassengerList[];
  /**
   * @remarks
   * The payment status. Valid values:
   * - 0: Initialized.
   * - 1: Created.
   * - 2: Payment succeeded.
   * - 4: Transaction closed.
   * 
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @remarks
   * The payment time. The value is a 13-digit timestamp.
   * 
   * @example
   * 1677210788000
   */
  payTime?: number;
  /**
   * @remarks
   * The discount amount. Unit: CNY.
   * 
   * @example
   * 10
   */
  promotionPrice?: number;
  /**
   * @remarks
   * The actual payment amount. Unit: CNY.
   * 
   * @example
   * 3000
   */
  realPayPrice?: number;
  /**
   * @remarks
   * The mapping of passenger types to refund and change rules.
   */
  refundChangeRuleMap?: { [key: string]: DataRefundChangeRuleMapValue };
  /**
   * @remarks
   * The buyer nickname.
   * 
   * @example
   * nick
   */
  sessionNick?: string;
  /**
   * @remarks
   * The flight information.
   */
  solution?: OrderDetailResponseBodyDataSolution;
  /**
   * @remarks
   * The ticketing time. The value is a 13-digit timestamp. This parameter has a value only after ticketing is complete.
   * 
   * @example
   * 1677210786000
   */
  succeedTime?: number;
  /**
   * @remarks
   * The total order price. Unit: CNY.
   * 
   * @example
   * 3000
   */
  totalPrice?: number;
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
   * The request ID.
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: OrderDetailResponseBodyData;
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

