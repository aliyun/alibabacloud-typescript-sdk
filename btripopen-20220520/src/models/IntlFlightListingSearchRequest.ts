// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightListingSearchRequestSearchJourneysSelectedFlights extends $dara.Model {
  /**
   * @example
   * HNY
   */
  arrAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MEL
   */
  arrCityCode?: string;
  /**
   * @example
   * SZX
   */
  depAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HKG
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-12-28 12:00:00
   */
  flightTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * KA5809
   */
  marketFlightNo?: string;
  /**
   * @example
   * CX601
   */
  operateFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrAirportCode: 'arr_airport_code',
      arrCityCode: 'arr_city_code',
      depAirportCode: 'dep_airport_code',
      depCityCode: 'dep_city_code',
      flightTime: 'flight_time',
      marketFlightNo: 'market_flight_no',
      operateFlightNo: 'operate_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrAirportCode: 'string',
      arrCityCode: 'string',
      depAirportCode: 'string',
      depCityCode: 'string',
      flightTime: 'string',
      marketFlightNo: 'string',
      operateFlightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightListingSearchRequestSearchJourneys extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MEL
   */
  arrCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HKG
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-12-28
   */
  depDate?: string;
  selectedFlights?: IntlFlightListingSearchRequestSearchJourneysSelectedFlights[];
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      selectedFlights: 'selected_flights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      depCityCode: 'string',
      depDate: 'string',
      selectedFlights: { 'type': 'array', 'itemType': IntlFlightListingSearchRequestSearchJourneysSelectedFlights },
    };
  }

  validate() {
    if(Array.isArray(this.selectedFlights)) {
      $dara.Model.validateArray(this.selectedFlights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightListingSearchRequestSearchPassengerList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10012301201
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  certType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZHANGSAN
   */
  fullName?: string;
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
      certNo: 'cert_no',
      certType: 'cert_type',
      fullName: 'full_name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certType: 'number',
      fullName: 'string',
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

export class IntlFlightListingSearchRequest extends $dara.Model {
  /**
   * @example
   * 10001
   */
  btripUserId?: string;
  /**
   * @example
   * ZHANGSAN
   */
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  cabinType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  isvName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  outWheelSearch?: boolean;
  /**
   * @example
   * 60b412-cc05-4d10-b570-
   */
  queryRecordId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneys?: IntlFlightListingSearchRequestSearchJourneys[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  searchMode?: number;
  searchPassengerList?: IntlFlightListingSearchRequestSearchPassengerList[];
  /**
   * @example
   * 9960b412-cc05-4d10-b570-93372d816807
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      cabinType: 'cabin_type',
      isvName: 'isv_name',
      outWheelSearch: 'out_wheel_search',
      queryRecordId: 'query_record_id',
      searchJourneys: 'search_journeys',
      searchMode: 'search_mode',
      searchPassengerList: 'search_passenger_list',
      token: 'token',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      cabinType: 'number',
      isvName: 'string',
      outWheelSearch: 'boolean',
      queryRecordId: 'string',
      searchJourneys: { 'type': 'array', 'itemType': IntlFlightListingSearchRequestSearchJourneys },
      searchMode: 'number',
      searchPassengerList: { 'type': 'array', 'itemType': IntlFlightListingSearchRequestSearchPassengerList },
      token: 'string',
      tripType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchJourneys)) {
      $dara.Model.validateArray(this.searchJourneys);
    }
    if(Array.isArray(this.searchPassengerList)) {
      $dara.Model.validateArray(this.searchPassengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

