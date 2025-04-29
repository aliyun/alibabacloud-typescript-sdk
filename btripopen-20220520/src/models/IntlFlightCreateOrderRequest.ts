// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightCreateOrderRequestContactInfo } from "./IntlFlightCreateOrderRequestContactInfo";
import { IntlFlightCreateOrderRequestCostCenter } from "./IntlFlightCreateOrderRequestCostCenter";
import { IntlFlightCreateOrderRequestPassengerList } from "./IntlFlightCreateOrderRequestPassengerList";


export class IntlFlightCreateOrderRequest extends $dara.Model {
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
  contactInfo?: IntlFlightCreateOrderRequestContactInfo;
  costCenter?: IntlFlightCreateOrderRequestCostCenter;
  extraInfo?: { [key: string]: string };
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
  passengerList?: IntlFlightCreateOrderRequestPassengerList[];
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
      contactInfo: 'contact_info',
      costCenter: 'cost_center',
      extraInfo: 'extra_info',
      isvName: 'isv_name',
      language: 'language',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
      passengerList: 'passenger_list',
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
      contactInfo: IntlFlightCreateOrderRequestContactInfo,
      costCenter: IntlFlightCreateOrderRequestCostCenter,
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      isvName: 'string',
      language: 'string',
      otaItemId: 'string',
      outOrderId: 'string',
      passengerList: { 'type': 'array', 'itemType': IntlFlightCreateOrderRequestPassengerList },
      renderKey: 'string',
      totalPriceCent: 'number',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(this.contactInfo && typeof (this.contactInfo as any).validate === 'function') {
      (this.contactInfo as any).validate();
    }
    if(this.costCenter && typeof (this.costCenter as any).validate === 'function') {
      (this.costCenter as any).validate();
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

