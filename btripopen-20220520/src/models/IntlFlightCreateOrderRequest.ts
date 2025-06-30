// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightCreateOrderRequestContactInfo } from "./IntlFlightCreateOrderRequestContactInfo";
import { IntlFlightCreateOrderRequestPassengerList } from "./IntlFlightCreateOrderRequestPassengerList";


export class IntlFlightCreateOrderRequest extends $dara.Model {
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
  contactInfo?: IntlFlightCreateOrderRequestContactInfo;
  extraInfo?: { [key: string]: string };
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
  passengerList?: IntlFlightCreateOrderRequestPassengerList[];
  renderKey?: string;
  static names(): { [key: string]: string } {
    return {
      asyncCreateOrderKey: 'async_create_order_key',
      asyncCreateOrderMode: 'async_create_order_mode',
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      contactInfo: 'contact_info',
      extraInfo: 'extra_info',
      isvName: 'isv_name',
      orderPrice: 'order_price',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
      passengerList: 'passenger_list',
      renderKey: 'render_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncCreateOrderKey: 'string',
      asyncCreateOrderMode: 'boolean',
      btripUserId: 'string',
      buyerName: 'string',
      contactInfo: IntlFlightCreateOrderRequestContactInfo,
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvName: 'string',
      orderPrice: 'number',
      otaItemId: 'string',
      outOrderId: 'string',
      passengerList: { 'type': 'array', 'itemType': IntlFlightCreateOrderRequestPassengerList },
      renderKey: 'string',
    };
  }

  validate() {
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

