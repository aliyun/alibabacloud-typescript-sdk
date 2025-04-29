// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderV2ShrinkRequest extends $dara.Model {
  asyncCreateOrderKey?: string;
  /**
   * @example
   * false
   */
  asyncCreateOrderMode?: boolean;
  btripUserId?: string;
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactInfoShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cheshiapi
   */
  isvName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7fb731deeb4510b86c17e8c8c25740_11
   */
  otaItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outOrderId?: string;
  totalPriceCent?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  travelersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      asyncCreateOrderMode: 'async_create_order_mode',
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      contactInfoShrink: 'contact_info',
      isvName: 'isv_name',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
      totalPriceCent: 'total_price_cent',
      travelersShrink: 'travelers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCreateOrderKey: 'string',
      asyncCreateOrderMode: 'boolean',
      btripUserId: 'string',
      buyerName: 'string',
      contactInfoShrink: 'string',
      isvName: 'string',
      otaItemId: 'string',
      outOrderId: 'string',
      totalPriceCent: 'number',
      travelersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

