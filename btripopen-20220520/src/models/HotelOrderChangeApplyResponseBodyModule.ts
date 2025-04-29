// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderChangeApplyResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 123445443444
   */
  changeOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      changeOrderId: 'change_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

