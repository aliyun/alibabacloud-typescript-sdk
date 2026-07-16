// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopListSearchShrinkRequest extends $dara.Model {
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
  searchJourneysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  selectedPassengersShrink?: string;
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

