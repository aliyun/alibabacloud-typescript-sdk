// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightInventoryPriceCheckShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  btripUserId?: string;
  /**
   * @example
   * ZHANG/SAN
   */
  buyerName?: string;
  /**
   * @example
   * ZJTD
   */
  isvName?: string;
  /**
   * @example
   * 102000
   */
  orderPrice?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22111acaf9ea47c09ed0db6abc45be2d_0
   */
  otaItemId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      isvName: 'isv_name',
      orderPrice: 'order_price',
      otaItemId: 'ota_item_id',
      passengerListShrink: 'passenger_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      isvName: 'string',
      orderPrice: 'number',
      otaItemId: 'string',
      passengerListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

