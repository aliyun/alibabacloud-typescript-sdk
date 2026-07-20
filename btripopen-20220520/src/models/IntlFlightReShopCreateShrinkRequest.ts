// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopCreateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the asynchronous application.
   * 
   * @example
   * asyncKey_2390u230slgw023
   */
  asyncApplyKey?: string;
  /**
   * @remarks
   * Specifies whether to use the asynchronous commit pattern. If asynchronous commit is used, only a key is returned before the application result is available.
   * 
   * @example
   * true
   */
  asyncApplyMode?: boolean;
  /**
   * @remarks
   * The business travel order ID. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * 1017035199702438072
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the rebooking product.
   * 
   * This parameter is required.
   * 
   * @example
   * d01eb358456b4ba38eb4d8f1499186da_0
   */
  otaItemId?: string;
  /**
   * @remarks
   * The external order ID.
   * 
   * @example
   * 3881646464813400064
   */
  outOrderId?: string;
  /**
   * @remarks
   * The external rebooking application ID.
   * 
   * @example
   * JPM20241024354
   */
  outReShopApplyId?: string;
  /**
   * @remarks
   * The rebooking group key returned by the inquiry operation.
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
   * This parameter is required.
   * 
   * @example
   * 0
   */
  reShopReasonCode?: string;
  /**
   * @remarks
   * The list of passengers selected for rebooking.
   * 
   * This parameter is required.
   */
  selectedPassengersShrink?: string;
  /**
   * @remarks
   * The total rebooking fee (excluding the service fee), in cents.
   *      * Total rebooking fee = cabin upgrade fee + handling fee + tax difference (applicable to international flights).
   *      * Pass in this parameter when fees are incurred to verify whether the price has changed.
   * 
   * @example
   * 1400
   */
  totalReShopFee?: number;
  static names(): { [key: string]: string } {
    return {
      asyncApplyKey: 'async_apply_key',
      asyncApplyMode: 'async_apply_mode',
      orderId: 'order_id',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
      outReShopApplyId: 'out_re_shop_apply_id',
      passengerJourneyGroupKey: 'passenger_journey_group_key',
      reShopReasonCode: 're_shop_reason_code',
      selectedPassengersShrink: 'selected_passengers',
      totalReShopFee: 'total_re_shop_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncApplyKey: 'string',
      asyncApplyMode: 'boolean',
      orderId: 'string',
      otaItemId: 'string',
      outOrderId: 'string',
      outReShopApplyId: 'string',
      passengerJourneyGroupKey: 'string',
      reShopReasonCode: 'string',
      selectedPassengersShrink: 'string',
      totalReShopFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

