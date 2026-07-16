// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopOtaSearchRequestSearchJourneysSelectedFlights extends $dara.Model {
  arrCityCode?: string;
  depCityCode?: string;
  flightTime?: string;
  marketFlightNo?: string;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      depCityCode: 'dep_city_code',
      flightTime: 'flight_time',
      marketFlightNo: 'market_flight_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      depCityCode: 'string',
      flightTime: 'string',
      marketFlightNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchRequestSearchJourneys extends $dara.Model {
  arrCityCode?: string;
  depCityCode?: string;
  depDate?: string;
  selectedFlights?: IntlFlightReShopOtaSearchRequestSearchJourneysSelectedFlights[];
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
      selectedFlights: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchRequestSearchJourneysSelectedFlights },
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

export class IntlFlightReShopOtaSearchRequestSelectedPassengers extends $dara.Model {
  fullName?: string;
  passengerId?: number;
  static names(): { [key: string]: string } {
    return {
      fullName: 'full_name',
      passengerId: 'passenger_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullName: 'string',
      passengerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopOtaSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  outOrderId?: string;
  outWheelSearch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerJourneyGroupKey?: string;
  reShopReasonCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneys?: IntlFlightReShopOtaSearchRequestSearchJourneys[];
  /**
   * @remarks
   * This parameter is required.
   */
  selectedPassengers?: IntlFlightReShopOtaSearchRequestSelectedPassengers[];
  token?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outWheelSearch: 'out_wheel_search',
      passengerJourneyGroupKey: 'passenger_journey_group_key',
      reShopReasonCode: 're_shop_reason_code',
      searchJourneys: 'search_journeys',
      selectedPassengers: 'selected_passengers',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      outOrderId: 'string',
      outWheelSearch: 'boolean',
      passengerJourneyGroupKey: 'string',
      reShopReasonCode: 'string',
      searchJourneys: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchRequestSearchJourneys },
      selectedPassengers: { 'type': 'array', 'itemType': IntlFlightReShopOtaSearchRequestSelectedPassengers },
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.searchJourneys)) {
      $dara.Model.validateArray(this.searchJourneys);
    }
    if(Array.isArray(this.selectedPassengers)) {
      $dara.Model.validateArray(this.selectedPassengers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

