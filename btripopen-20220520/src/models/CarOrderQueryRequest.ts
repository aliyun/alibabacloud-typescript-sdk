// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarOrderQueryRequest extends $dara.Model {
  orderId?: number;
  subOrderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
      subOrderId: 'sub_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
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

