// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyPayV2Request extends $dara.Model {
  extParams?: { [key: string]: any };
  /**
   * @example
   * name
   */
  isvName?: string;
  /**
   * @example
   * 5100
   */
  modifyPayAmount?: number;
  /**
   * @example
   * 1017002195370467200
   */
  orderId?: number;
  /**
   * @example
   * 1017002195370467200
   */
  outOrderId?: string;
  /**
   * @example
   * 1019195786853020
   */
  outSubOrderId?: string;
  /**
   * @example
   * 1019195786853020
   */
  subOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      extParams: 'ext_params',
      isvName: 'isv_name',
      modifyPayAmount: 'modify_pay_amount',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      subOrderId: 'sub_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      isvName: 'string',
      modifyPayAmount: 'number',
      orderId: 'number',
      outOrderId: 'string',
      outSubOrderId: 'string',
      subOrderId: 'number',
    };
  }

  validate() {
    if(this.extParams) {
      $dara.Model.validateMap(this.extParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

