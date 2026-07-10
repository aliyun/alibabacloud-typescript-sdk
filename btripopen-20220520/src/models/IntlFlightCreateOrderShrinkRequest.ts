// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightCreateOrderShrinkRequest extends $dara.Model {
  asyncCreateOrderKey?: string;
  asyncCreateOrderMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  btripUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZHANG/SAN
   */
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactInfoShrink?: string;
  extraInfoShrink?: string;
  isvName?: string;
  orderPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  otaItemId?: string;
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerListShrink?: string;
  renderKey?: string;
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      asyncCreateOrderMode: 'async_create_order_mode',
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      contactInfoShrink: 'contact_info',
      extraInfoShrink: 'extra_info',
      isvName: 'isv_name',
      orderPrice: 'order_price',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
      passengerListShrink: 'passenger_list',
      renderKey: 'render_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCreateOrderKey: 'string',
      asyncCreateOrderMode: 'boolean',
      btripUserId: 'string',
      buyerName: 'string',
      contactInfoShrink: 'string',
      extraInfoShrink: 'string',
      isvName: 'string',
      orderPrice: 'number',
      otaItemId: 'string',
      outOrderId: 'string',
      passengerListShrink: 'string',
      renderKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

