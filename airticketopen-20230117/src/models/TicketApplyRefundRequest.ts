// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketApplyRefundRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  distributorOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 计划有变
   */
  refundReason?: string;
  /**
   * @example
   * 档期冲突
   */
  refundRemark?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      distributorOrderId: 'DistributorOrderId',
      refundReason: 'RefundReason',
      refundRemark: 'RefundRemark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      distributorOrderId: 'string',
      refundReason: 'string',
      refundRemark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

