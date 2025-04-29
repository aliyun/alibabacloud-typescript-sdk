// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderDetailInfoRequest extends $dara.Model {
  btripOrderId?: string;
  /**
   * @example
   * dis123
   */
  disOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      btripOrderId: 'btrip_order_id',
      disOrderId: 'dis_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripOrderId: 'string',
      disOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

