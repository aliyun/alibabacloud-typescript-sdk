// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee extends $dara.Model {
  /**
   * @example
   * 50
   */
  serviceFee?: number;
  /**
   * @example
   * 20
   */
  taxFee?: number;
  /**
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

export class ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsPassenger extends $dara.Model {
  /**
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @example
   * SAN
   */
  firstName?: string;
  /**
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
  changeFee?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetailsChangeFee;
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
   * @example
   * 411***********4411
   */
  document?: string;
  /**
   * @example
   * SAN
   */
  firstName?: string;
  /**
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
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @example
   * 7
   */
  availability?: string;
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
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
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
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneysSegmentList[];
  /**
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

export class ChangeDetailListOfOrderNumResponseBodyDataListLastJourneysSegmentList extends $dara.Model {
  /**
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @example
   * 7
   */
  availability?: string;
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
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
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
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListLastJourneysSegmentList[];
  /**
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
   * @example
   * MFM
   */
  arrivalAirport?: string;
  /**
   * @example
   * MFM
   */
  arrivalCity?: string;
  /**
   * @example
   * T1
   */
  arrivalTerminal?: string;
  /**
   * @example
   * 2023-03-10 10:40:00
   */
  arrivalTime?: string;
  /**
   * @example
   * 7
   */
  availability?: string;
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
   * @example
   * SHA
   */
  departureCity?: string;
  /**
   * @example
   * T2
   */
  departureTerminal?: string;
  /**
   * @example
   * 2023-03-10 07:55:00
   */
  departureTime?: string;
  /**
   * @example
   * 32Q
   */
  equipType?: string;
  /**
   * @example
   * 165
   */
  flightDuration?: number;
  /**
   * @example
   * HO
   */
  marketingAirline?: string;
  /**
   * @example
   * HO1295
   */
  marketingFlightNo?: string;
  /**
   * @example
   * 1295
   */
  marketingFlightNoInt?: number;
  /**
   * @example
   * HO
   */
  operatingAirline?: string;
  /**
   * @example
   * HO1295
   */
  operatingFlightNo?: string;
  /**
   * @example
   * HO1295-PVG-MFM-20230310
   */
  segmentId?: string;
  /**
   * @example
   * SEL,HKG
   */
  stopCityList?: string;
  /**
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
  segmentList?: ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneysSegmentList[];
  /**
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
  changeFeeDetails?: ChangeDetailListOfOrderNumResponseBodyDataListChangeFeeDetails[];
  /**
   * @example
   * 4988430***950
   */
  changeOrderNum?: number;
  changePassengers?: ChangeDetailListOfOrderNumResponseBodyDataListChangePassengers[];
  /**
   * @example
   * 1
   */
  changeReasonType?: number;
  changedJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListChangedJourneys[];
  /**
   * @example
   * reason desc
   */
  closeReason?: string;
  /**
   * @example
   * 1677415244000
   */
  closeUtcTime?: number;
  contact?: ChangeDetailListOfOrderNumResponseBodyDataListContact;
  /**
   * @example
   * 1677415276000
   */
  createUtcTime?: number;
  /**
   * @example
   * 1677415278000
   */
  lastConfirmUtcTime?: number;
  lastJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListLastJourneys[];
  /**
   * @example
   * 5988430***541
   */
  orderNum?: number;
  /**
   * @example
   * 2
   */
  orderStatus?: number;
  originalJourneys?: ChangeDetailListOfOrderNumResponseBodyDataListOriginalJourneys[];
  /**
   * @example
   * 2
   */
  payStatus?: number;
  /**
   * @example
   * 1677415255000
   */
  paySuccessUtcTime?: number;
  /**
   * @example
   * 300
   */
  totalAmount?: number;
  /**
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
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  /**
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
  list?: ChangeDetailListOfOrderNumResponseBodyDataList[];
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
  data?: ChangeDetailListOfOrderNumResponseBodyData;
  /**
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @example
   * null
   */
  errorData?: any;
  /**
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @example
   * 200
   */
  status?: number;
  /**
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

