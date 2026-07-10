// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightPayOrderV2Request extends $dara.Model {
  isvName?: string;
  orderId?: string;
  outOrderId?: string;
  totalPrice?: number;
  totalServiceFeePrice?: number;
  static names(): { [key: string]: string } {
    return {
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      totalPrice: 'total_price',
      totalServiceFeePrice: 'total_service_fee_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isvName: 'string',
      orderId: 'string',
      outOrderId: 'string',
      totalPrice: 'number',
      totalServiceFeePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

