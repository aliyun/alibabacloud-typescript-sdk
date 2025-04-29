// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderRefundResponseBodyModuleInsRefundList extends $dara.Model {
  /**
   * @example
   * po102000399221
   */
  policyRefundNo?: string;
  /**
   * @example
   * REFUND_SUCCESS
   */
  refundStatus?: string;
  /**
   * @example
   * 1230012499921
   */
  subInsOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      policyRefundNo: 'policy_refund_no',
      refundStatus: 'refund_status',
      subInsOrderId: 'sub_ins_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyRefundNo: 'string',
      refundStatus: 'string',
      subInsOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

