// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Refund order number
   * 
   * This parameter is required.
   * 
   * @example
   * 4966***617732
   */
  refundOrderNum?: number;
  static names(): { [key: string]: string } {
    return {
      refundOrderNum: 'refund_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundOrderNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

