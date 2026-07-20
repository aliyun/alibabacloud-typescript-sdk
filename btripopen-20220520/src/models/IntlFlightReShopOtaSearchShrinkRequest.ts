// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopOtaSearchShrinkRequest extends $dara.Model {
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
  searchJourneysShrink?: string;
  /**
   * @remarks
   * The list of selected passengers for rebooking.
   * 
   * This parameter is required.
   */
  selectedPassengersShrink?: string;
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

