// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopListSearchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business travel order ID. Required.
   * 
   * This parameter is required.
   * 
   * @example
   * 1002027205317939247
   */
  orderId?: string;
  /**
   * @remarks
   * The external order ID.
   * 
   * @example
   * 3985893777358602240
   */
  outOrderId?: string;
  /**
   * @remarks
   * Specifies whether external polling is enabled. When enabled, the external frontend controls polling to reduce the response time of a single search. Default value: false.
   * 
   * @example
   * false
   */
  outWheelSearch?: boolean;
  /**
   * @remarks
   * The rebooking group key returned by the consultation API.
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
   * The list of journeys selected for rebooking.
   * 
   * This parameter is required.
   */
  searchJourneysShrink?: string;
  /**
   * @remarks
   * The list of passengers selected for rebooking.
   * 
   * This parameter is required.
   */
  selectedPassengersShrink?: string;
  /**
   * @remarks
   * The query record token for external polling.
   * 
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

