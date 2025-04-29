// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightInventoryPriceCheckShrinkRequest extends $dara.Model {
  /**
   * @example
   * ZJTD
   */
  isvName?: string;
  /**
   * @example
   * chinese
   */
  language?: string;
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
  /**
   * @example
   * 12412341234
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      language: 'language',
      orderPrice: 'order_price',
      otaItemId: 'ota_item_id',
      passengerListShrink: 'passenger_list',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      language: 'string',
      orderPrice: 'number',
      otaItemId: 'string',
      passengerListShrink: 'string',
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

