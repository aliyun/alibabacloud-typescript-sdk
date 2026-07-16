// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopCreateShrinkRequest extends $dara.Model {
  asyncApplyKey?: string;
  asyncApplyMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  otaItemId?: string;
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
  selectedPassengersShrink?: string;
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

