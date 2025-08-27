// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopApplyShrinkRequest extends $dara.Model {
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
  selectedJourneysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  selectedPassengersShrink?: string;
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
      selectedJourneysShrink: 'selected_journeys',
      selectedPassengersShrink: 'selected_passengers',
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
      selectedJourneysShrink: 'string',
      selectedPassengersShrink: 'string',
      userIntentionMemo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

