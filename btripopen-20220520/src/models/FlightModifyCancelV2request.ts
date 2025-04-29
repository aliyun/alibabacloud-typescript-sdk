// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyCancelV2Request extends $dara.Model {
  isvName?: string;
  orderId?: number;
  outOrderId?: string;
  outSubOrderId?: string;
  subOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      subOrderId: 'sub_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
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

