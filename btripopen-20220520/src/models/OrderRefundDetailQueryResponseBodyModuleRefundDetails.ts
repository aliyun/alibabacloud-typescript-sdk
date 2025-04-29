// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderRefundDetailQueryResponseBodyModuleRefundDetails extends $dara.Model {
  /**
   * @example
   * ALIPAY
   */
  personPayChannel?: string;
  /**
   * @example
   * 2025010223001423691442474885
   */
  personRefundId?: string;
  /**
   * @example
   * 5000
   */
  refundAmount?: number;
  /**
   * @example
   * 4800
   */
  refundAmountCorp?: number;
  /**
   * @example
   * 200
   */
  refundAmountPerson?: number;
  /**
   * @example
   * ZLJD12241231000002
   */
  supplierRefundId?: string;
  static names(): { [key: string]: string } {
    return {
      personPayChannel: 'person_pay_channel',
      personRefundId: 'person_refund_id',
      refundAmount: 'refund_amount',
      refundAmountCorp: 'refund_amount_corp',
      refundAmountPerson: 'refund_amount_person',
      supplierRefundId: 'supplier_refund_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      personPayChannel: 'string',
      personRefundId: 'string',
      refundAmount: 'number',
      refundAmountCorp: 'number',
      refundAmountPerson: 'number',
      supplierRefundId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

