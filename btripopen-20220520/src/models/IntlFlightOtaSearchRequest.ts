// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaSearchRequestSearchJourneysSelectedFlights extends $dara.Model {
  arrAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  arrCityCode?: string;
  depAirportCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  flightTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

export class IntlFlightOtaSearchRequestSearchJourneys extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  selectedFlights?: IntlFlightOtaSearchRequestSearchJourneysSelectedFlights[];
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
      selectedFlights: { 'type': 'array', 'itemType': IntlFlightOtaSearchRequestSearchJourneysSelectedFlights },
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

export class IntlFlightOtaSearchRequestSearchPassengerList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  fullName?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class IntlFlightOtaSearchRequest extends $dara.Model {
  btripUserId?: string;
  buyerName?: string;
  cabinType?: number;
  isvName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneys?: IntlFlightOtaSearchRequestSearchJourneys[];
  searchPassengerList?: IntlFlightOtaSearchRequestSearchPassengerList[];
  /**
   * @remarks
   * This parameter is required.
   */
  tripType?: number;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      cabinType: 'cabin_type',
      isvName: 'isv_name',
      searchJourneys: 'search_journeys',
      searchPassengerList: 'search_passenger_list',
      tripType: 'trip_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      cabinType: 'number',
      isvName: 'string',
      searchJourneys: { 'type': 'array', 'itemType': IntlFlightOtaSearchRequestSearchJourneys },
      searchPassengerList: { 'type': 'array', 'itemType': IntlFlightOtaSearchRequestSearchPassengerList },
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

