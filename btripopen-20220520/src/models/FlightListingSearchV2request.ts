// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightListingSearchV2RequestSearchJourneysSelectedFlights extends $dara.Model {
  /**
   * @example
   * HGH
   */
  arrAirportCode?: string;
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * PKX
   */
  depAirportCode?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-09-01 07:10:00
   */
  flightTime?: string;
  /**
   * @example
   * HO3925
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

export class FlightListingSearchV2RequestSearchJourneys extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-09-01
   */
  depDate?: string;
  selectedFlights?: FlightListingSearchV2RequestSearchJourneysSelectedFlights[];
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
      selectedFlights: { 'type': 'array', 'itemType': FlightListingSearchV2RequestSearchJourneysSelectedFlights },
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

export class FlightListingSearchV2Request extends $dara.Model {
  /**
   * @example
   * CA
   */
  airlineCode?: string;
  cabinTypeList?: number[];
  /**
   * @example
   * true
   */
  directOnly?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cheshi
   */
  isvName?: string;
  /**
   * @example
   * false
   */
  needMultiClassPrice?: boolean;
  /**
   * @example
   * true
   */
  needQueryServiceFee?: boolean;
  /**
   * @example
   * true
   */
  needShareFlight?: boolean;
  /**
   * @example
   * false
   */
  needYCBestPrice?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneys?: FlightListingSearchV2RequestSearchJourneys[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  searchMode?: number;
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
      airlineCode: 'airline_code',
      cabinTypeList: 'cabin_type_list',
      directOnly: 'direct_only',
      isvName: 'isv_name',
      needMultiClassPrice: 'need_multi_class_price',
      needQueryServiceFee: 'need_query_service_fee',
      needShareFlight: 'need_share_flight',
      needYCBestPrice: 'need_y_c_best_price',
      searchJourneys: 'search_journeys',
      searchMode: 'search_mode',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      airlineCode: 'string',
      cabinTypeList: { 'type': 'array', 'itemType': 'number' },
      directOnly: 'boolean',
      isvName: 'string',
      needMultiClassPrice: 'boolean',
      needQueryServiceFee: 'boolean',
      needShareFlight: 'boolean',
      needYCBestPrice: 'boolean',
      searchJourneys: { 'type': 'array', 'itemType': FlightListingSearchV2RequestSearchJourneys },
      searchMode: 'number',
      tripType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cabinTypeList)) {
      $dara.Model.validateArray(this.cabinTypeList);
    }
    if(Array.isArray(this.searchJourneys)) {
      $dara.Model.validateArray(this.searchJourneys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

