// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderDetailQueryResponseBodyModuleOfflineRefundDetailsOfflineRefundInfos extends $dara.Model {
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * 111
   */
  refundPrice?: number;
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      refundPrice: 'refund_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      refundPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

