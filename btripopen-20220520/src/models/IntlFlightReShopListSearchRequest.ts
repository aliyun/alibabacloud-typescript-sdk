// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopListSearchRequestSearchJourneysSelectedFlights extends $dara.Model {
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-09-01 07:10
   */
  flightTime?: string;
  /**
   * @example
   * KA5809
   */
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

export class IntlFlightReShopListSearchRequestSearchJourneys extends $dara.Model {
  /**
   * @example
   * HGH
   */
  arrCityCode?: string;
  /**
   * @example
   * BJS
   */
  depCityCode?: string;
  /**
   * @example
   * 2023-12-28
   */
  depDate?: string;
  selectedFlights?: IntlFlightReShopListSearchRequestSearchJourneysSelectedFlights[];
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
      selectedFlights: { 'type': 'array', 'itemType': IntlFlightReShopListSearchRequestSearchJourneysSelectedFlights },
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

export class IntlFlightReShopListSearchRequestSelectedPassengers extends $dara.Model {
  /**
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @example
   * 1000001
   */
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

export class IntlFlightReShopListSearchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1002027205317939247
   */
  orderId?: string;
  /**
   * @example
   * 3985893777358602240
   */
  outOrderId?: string;
  /**
   * @example
   * false
   */
  outWheelSearch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * edcac4f4c79d40ccb141ddb6da567e65
   */
  passengerJourneyGroupKey?: string;
  /**
   * @example
   * 0
   */
  reShopReasonCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  searchJourneys?: IntlFlightReShopListSearchRequestSearchJourneys[];
  /**
   * @remarks
   * This parameter is required.
   */
  selectedPassengers?: IntlFlightReShopListSearchRequestSelectedPassengers[];
  /**
   * @example
   * 0305b8203a7767626f911d97a91a9473
   */
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
      searchJourneys: { 'type': 'array', 'itemType': IntlFlightReShopListSearchRequestSearchJourneys },
      selectedPassengers: { 'type': 'array', 'itemType': IntlFlightReShopListSearchRequestSelectedPassengers },
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

