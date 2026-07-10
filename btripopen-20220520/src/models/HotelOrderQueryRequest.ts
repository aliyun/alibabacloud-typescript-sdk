// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

