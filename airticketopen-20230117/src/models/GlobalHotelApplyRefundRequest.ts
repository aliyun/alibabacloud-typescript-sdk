// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GlobalHotelApplyRefundRequest extends $dara.Model {
  /**
   * @remarks
   * The distributor account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * The sales order number.
   * 
   * This parameter is required.
   * 
   * @example
   * SO202606290001
   */
  orderNo?: string;
  /**
   * @remarks
   * The refund reason.
   * 
   * @example
   * GUEST_REQUEST
   */
  refundReason?: string;
  /**
   * @remarks
   * TraceId
   * 
   * @example
   * TraceId
   */
  tracerId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      orderNo: 'OrderNo',
      refundReason: 'RefundReason',
      tracerId: 'TracerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      orderNo: 'string',
      refundReason: 'string',
      tracerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

