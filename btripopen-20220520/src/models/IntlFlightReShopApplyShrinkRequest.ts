// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopApplyShrinkRequest extends $dara.Model {
  asyncApplyKey?: string;
  asyncApplyMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  outOrderId?: string;
  outReShopApplyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerJourneyGroupKey?: string;
  /**
   * @remarks
   * This parameter is required.
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

