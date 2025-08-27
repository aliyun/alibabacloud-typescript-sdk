// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopApplyRequestSelectedJourneysSelectedFlights extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HKG
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
   * KN6728HGHPKX0725
   */
  segmentKey?: string;
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      depCityCode: 'dep_city_code',
      segmentKey: 'segment_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      depCityCode: 'string',
      segmentKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntlFlightReShopApplyRequestSelectedJourneys extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DLC
   */
  arrCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TSN
   */
  depCityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-10-10
   */
  intentDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  selectedFlights?: IntlFlightReShopApplyRequestSelectedJourneysSelectedFlights[];
  static names(): { [key: string]: string } {
    return {
      arrCityCode: 'arr_city_code',
      depCityCode: 'dep_city_code',
      intentDate: 'intent_date',
      selectedFlights: 'selected_flights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCityCode: 'string',
      depCityCode: 'string',
      intentDate: 'string',
      selectedFlights: { 'type': 'array', 'itemType': IntlFlightReShopApplyRequestSelectedJourneysSelectedFlights },
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

export class IntlFlightReShopApplyRequestSelectedPassengers extends $dara.Model {
  /**
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100001
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

export class IntlFlightReShopApplyRequest extends $dara.Model {
  /**
   * @example
   * asyncKey_2390u230slgw023
   */
  asyncApplyKey?: string;
  /**
   * @example
   * true
   */
  asyncApplyMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1017035199907040165
   */
  orderId?: string;
  /**
   * @example
   * D1736316966048SC4877
   */
  outOrderId?: string;
  /**
   * @example
   * JPM20241024354
   */
  outReShopApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * edcac4f4c79d40ccb141ddb6da567e65
   */
  passengerJourneyGroupKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  reShopReasonCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  selectedJourneys?: IntlFlightReShopApplyRequestSelectedJourneys[];
  /**
   * @remarks
   * This parameter is required.
   */
  selectedPassengers?: IntlFlightReShopApplyRequestSelectedPassengers[];
  userIntentionMemo?: string;
  static names(): { [key: string]: string } {
    return {
      asyncApplyKey: 'async_apply_key',
      asyncApplyMode: 'async_apply_mode',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outReShopApplyId: 'out_re_shop_apply_id',
      passengerJourneyGroupKey: 'passenger_journey_group_key',
      reShopReasonCode: 're_shop_reason_code',
      selectedJourneys: 'selected_journeys',
      selectedPassengers: 'selected_passengers',
      userIntentionMemo: 'user_intention_memo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncApplyKey: 'string',
      asyncApplyMode: 'boolean',
      orderId: 'string',
      outOrderId: 'string',
      outReShopApplyId: 'string',
      passengerJourneyGroupKey: 'string',
      reShopReasonCode: 'string',
      selectedJourneys: { 'type': 'array', 'itemType': IntlFlightReShopApplyRequestSelectedJourneys },
      selectedPassengers: { 'type': 'array', 'itemType': IntlFlightReShopApplyRequestSelectedPassengers },
      userIntentionMemo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.selectedJourneys)) {
      $dara.Model.validateArray(this.selectedJourneys);
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

