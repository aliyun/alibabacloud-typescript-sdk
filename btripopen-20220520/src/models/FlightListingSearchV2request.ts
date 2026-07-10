// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightListingSearchV2RequestSearchJourneysSelectedFlights extends $dara.Model {
  arrAirportCode?: string;
  arrCityCode?: string;
  depAirportCode?: string;
  depCityCode?: string;
  flightTime?: string;
  marketFlightNo?: string;
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
   */
  arrCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
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
  airlineCode?: string;
  cabinTypeList?: number[];
  directOnly?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  isvName?: string;
  needMultiClassPrice?: boolean;
  needQueryServiceFee?: boolean;
  needShareFlight?: boolean;
  needYCBestPrice?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneys?: FlightListingSearchV2RequestSearchJourneys[];
  /**
   * @remarks
   * This parameter is required.
   */
  searchMode?: number;
  /**
   * @remarks
   * This parameter is required.
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

