// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderChangeDetailRequest extends $dara.Model {
  btripUserId?: string;
  changeOrderId?: string;
  disOrderId?: string;
  saleOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      changeOrderId: 'change_order_id',
      disOrderId: 'dis_order_id',
      saleOrderId: 'sale_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      changeOrderId: 'string',
      disOrderId: 'string',
      saleOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

