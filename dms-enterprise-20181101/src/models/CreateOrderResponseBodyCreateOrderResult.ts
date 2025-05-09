// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderResponseBodyCreateOrderResult extends $dara.Model {
  orderIds?: number[];
  static names(): { [key: string]: string } {
    return {
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.orderIds)) {
      $dara.Model.validateArray(this.orderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

