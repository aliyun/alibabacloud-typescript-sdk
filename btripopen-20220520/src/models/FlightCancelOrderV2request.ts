// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCancelOrderV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cheshiapi
   */
  isvName?: string;
  /**
   * @example
   * 1017002195798359369
   */
  orderId?: string;
  /**
   * @example
   * cheshiapi002kwl
   */
  outOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      orderId: 'string',
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

