// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightCreateOrderV2RequestContactInfo } from "./FlightCreateOrderV2requestContactInfo";
import { FlightCreateOrderV2RequestTravelers } from "./FlightCreateOrderV2requestTravelers";


export class FlightCreateOrderV2Request extends $dara.Model {
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
  contactInfo?: FlightCreateOrderV2RequestContactInfo;
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
  travelers?: FlightCreateOrderV2RequestTravelers[];
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      asyncCreateOrderMode: 'async_create_order_mode',
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      contactInfo: 'contact_info',
      isvName: 'isv_name',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
      totalPriceCent: 'total_price_cent',
      travelers: 'travelers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCreateOrderKey: 'string',
      asyncCreateOrderMode: 'boolean',
      btripUserId: 'string',
      buyerName: 'string',
      contactInfo: FlightCreateOrderV2RequestContactInfo,
      isvName: 'string',
      otaItemId: 'string',
      outOrderId: 'string',
      totalPriceCent: 'number',
      travelers: { 'type': 'array', 'itemType': FlightCreateOrderV2RequestTravelers },
    };
  }

  validate() {
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(Array.isArray(this.travelers)) {
      $dara.Model.validateArray(this.travelers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

