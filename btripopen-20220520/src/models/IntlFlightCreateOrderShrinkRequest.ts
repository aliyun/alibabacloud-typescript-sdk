// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightCreateOrderShrinkRequest extends $dara.Model {
  /**
   * @example
   * fcoid_deb6372db8194f1c94c23bc4fadc508d
   */
  asyncCreateOrderKey?: string;
  /**
   * @example
   * false
   */
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
  /**
   * @example
   * open12k0lclldfdc7v10E2HaRrOr00
   */
  isvName?: string;
  orderPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 56319a175bdf4b1898190bd7edb603b5_0
   */
  otaItemId?: string;
  /**
   * @example
   * F11380075736888770560
   */
  outOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerListShrink?: string;
  /**
   * @example
   * fcoid_deb6372db8194f1c94c23bc4fadc508d
   */
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

