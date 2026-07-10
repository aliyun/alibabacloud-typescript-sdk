// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyPayV2ShrinkRequest extends $dara.Model {
  extParamsShrink?: string;
  isvName?: string;
  modifyPayAmount?: number;
  orderId?: number;
  outOrderId?: string;
  outSubOrderId?: string;
  subOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      extParamsShrink: 'ext_params',
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
      extParamsShrink: 'string',
      isvName: 'string',
      modifyPayAmount: 'number',
      orderId: 'number',
      outOrderId: 'string',
      outSubOrderId: 'string',
      subOrderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

