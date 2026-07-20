// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopOtaSearchRequestSearchJourneysSelectedFlights extends $dara.Model {
  /**
   * @remarks
   * The three-letter code of the arrival city.
   * 
   * @example
   * MEL
   */
  arrCityCode?: string;
  /**
   * @remarks
   * The three-letter code of the departure city.
   * 
   * @example
   * HKG
   */
  depCityCode?: string;
  /**
   * @remarks
   * The departure time. Format: yyyy-MM-dd HH:mm.
   * 
   * @example
   * 2025-12-28 12:00
   */
  flightTime?: string;
  /**
   * @remarks
   * The marketing flight number.
   * 
   * @example
   * HO3925
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

export class IntlFlightReShopOtaSearchRequestSearchJourneys extends $dara.Model {
  /**
   * @remarks
   * The three-letter code of the arrival city.
   * 
   * @example
   * MEL
   */
  arrCityCode?: string;
  /**
   * @remarks
   * The three-letter code of the departure city.
   * 
   * @example
   * HKG
   */
  depCityCode?: string;
  /**
   * @remarks
   * The departure date. Format: yyyy-MM-dd.
   * 
   * @example
   * 2025-12-28
   */
  depDate?: string;
  /**
   * @remarks
   * The selected flight information for rebooking.
   */
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
  /**
   * @remarks
   * The full name of the passenger.
   * 
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @remarks
   * The passenger ID.
   * 
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

export class IntlFlightReShopOtaSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The business travel order ID. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * 1017089206331988332
   */
  orderId?: string;
  /**
   * @remarks
   * The external order ID.
   * 
   * @example
   * JP2024071800000002
   */
  outOrderId?: string;
  /**
   * @remarks
   * Specifies whether to enable external polling. When enabled, the external frontend controls polling, which reduces the response time (RT) of a single search. Default value: false.
   * 
   * @example
   * true
   */
  outWheelSearch?: boolean;
  /**
   * @remarks
   * The rebooking group key returned by the consultation operation.
   * 
   * This parameter is required.
   * 
   * @example
   * edcac4f4c79d40ccb141ddb6da567e65
   */
  passengerJourneyGroupKey?: string;
  /**
   * @remarks
   * The rebooking reason code.
   * 
   * @example
   * 0
   */
  reShopReasonCode?: string;
  /**
   * @remarks
   * The search journeys. Only pass the journeys to be rebooked.
   * 
   * This parameter is required.
   */
  searchJourneys?: IntlFlightReShopOtaSearchRequestSearchJourneys[];
  /**
   * @remarks
   * The list of selected passengers for rebooking.
   * 
   * This parameter is required.
   */
  selectedPassengers?: IntlFlightReShopOtaSearchRequestSelectedPassengers[];
  /**
   * @remarks
   * The query record token used for external polling.
   * 
   * @example
   * 9960b412-cc05-4d10-b570-93372d816807
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

