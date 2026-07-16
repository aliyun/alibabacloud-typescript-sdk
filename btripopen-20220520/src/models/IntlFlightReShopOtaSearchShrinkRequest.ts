// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopOtaSearchShrinkRequest extends $dara.Model {
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
  searchJourneysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  selectedPassengersShrink?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outWheelSearch: 'out_wheel_search',
      passengerJourneyGroupKey: 'passenger_journey_group_key',
      reShopReasonCode: 're_shop_reason_code',
      searchJourneysShrink: 'search_journeys',
      selectedPassengersShrink: 'selected_passengers',
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
      searchJourneysShrink: 'string',
      selectedPassengersShrink: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

