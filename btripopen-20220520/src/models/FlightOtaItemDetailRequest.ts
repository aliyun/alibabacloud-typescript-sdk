// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOtaItemDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cheshi
   */
  isvName?: string;
  /**
   * @example
   * 1017060204732105050
   */
  orderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 68cdc6b37c87484c98b479b49306ffbb_0
   */
  otaItemId?: string;
  /**
   * @example
   * 3814233628483219456
   */
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      orderId: 'order_id',
      otaItemId: 'ota_item_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      orderId: 'string',
      otaItemId: 'string',
      outOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

