// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightCreateOrderShrinkRequest extends $dara.Model {
  /**
   * @example
   * fcoid_deb6372db8194f1c94c23bc4fadc508d
   */
  asyncCreateOrderKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  asyncCreateOrderMode?: boolean;
  contactInfoShrink?: string;
  costCenterShrink?: string;
  extraInfoShrink?: string;
  /**
   * @example
   * open12k0lclldfdc7v10E2HaRrOr00
   */
  isvName?: string;
  /**
   * @example
   * chinese
   */
  language?: string;
  /**
   * @example
   * 56319a175bdf4b1898190bd7edb603b5_0
   */
  otaItemId?: string;
  /**
   * @example
   * F11380075736888770560
   */
  outOrderId?: string;
  passengerListShrink?: string;
  /**
   * @example
   * fcoid_deb6372db8194f1c94c23bc4fadc508d
   */
  renderKey?: string;
  /**
   * @example
   * 120000
   */
  totalPriceCent?: number;
  /**
   * @example
   * 12341234
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      asyncCreateOrderMode: 'async_create_order_mode',
      contactInfoShrink: 'contact_info',
      costCenterShrink: 'cost_center',
      extraInfoShrink: 'extra_info',
      isvName: 'isv_name',
      language: 'language',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
      passengerListShrink: 'passenger_list',
      renderKey: 'render_key',
      totalPriceCent: 'total_price_cent',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCreateOrderKey: 'string',
      asyncCreateOrderMode: 'boolean',
      contactInfoShrink: 'string',
      costCenterShrink: 'string',
      extraInfoShrink: 'string',
      isvName: 'string',
      language: 'string',
      otaItemId: 'string',
      outOrderId: 'string',
      passengerListShrink: 'string',
      renderKey: 'string',
      totalPriceCent: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

