// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureRefundDetailResponseBodyModuleInsureOrderApplicant } from "./InsureRefundDetailResponseBodyModuleInsureOrderApplicant";


export class InsureRefundDetailResponseBodyModuleInsureOrder extends $dara.Model {
  applicant?: InsureRefundDetailResponseBodyModuleInsureOrderApplicant;
  /**
   * @example
   * 5142701029379
   */
  bizOrderId?: string;
  /**
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @example
   * 2023-04-11T21:21Z
   */
  closeTime?: string;
  /**
   * @example
   * 100000000001
   */
  insOrderId?: string;
  /**
   * @example
   * 200300333333
   */
  outInsOrderId?: string;
  /**
   * @example
   * 2023-04-11T21:21Z
   */
  payTime?: string;
  /**
   * @example
   * 83000
   */
  price?: number;
  /**
   * @example
   * 4
   */
  settleType?: number;
  /**
   * @example
   * PAID
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      bizOrderId: 'biz_order_id',
      bizType: 'biz_type',
      closeTime: 'close_time',
      insOrderId: 'ins_order_id',
      outInsOrderId: 'out_ins_order_id',
      payTime: 'pay_time',
      price: 'price',
      settleType: 'settle_type',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: InsureRefundDetailResponseBodyModuleInsureOrderApplicant,
      bizOrderId: 'string',
      bizType: 'number',
      closeTime: 'string',
      insOrderId: 'string',
      outInsOrderId: 'string',
      payTime: 'string',
      price: 'number',
      settleType: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.applicant && typeof (this.applicant as any).validate === 'function') {
      (this.applicant as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

