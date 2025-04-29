// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureRefundDetailResponseBodyModuleSubOrderRefundListInsureSegment } from "./InsureRefundDetailResponseBodyModuleSubOrderRefundListInsureSegment";
import { InsureRefundDetailResponseBodyModuleSubOrderRefundListInsured } from "./InsureRefundDetailResponseBodyModuleSubOrderRefundListInsured";


export class InsureRefundDetailResponseBodyModuleSubOrderRefundList extends $dara.Model {
  /**
   * @example
   * 2023-04-17T20:25Z
   */
  effectiveEndTime?: string;
  /**
   * @example
   * 2023-04-17T20:25Z
   */
  effectiveStartTime?: string;
  insureSegment?: InsureRefundDetailResponseBodyModuleSubOrderRefundListInsureSegment;
  /**
   * @example
   * 2023-04-17T20:07Z
   */
  insureTime?: string;
  insured?: InsureRefundDetailResponseBodyModuleSubOrderRefundListInsured;
  /**
   * @example
   * OUT123333444
   */
  outSubInsOrderId?: string;
  /**
   * @example
   * T230411000000140183629
   */
  policyNo?: string;
  /**
   * @example
   * 1024194640018002
   */
  policyRefundNo?: string;
  /**
   * @example
   * 73000
   */
  price?: number;
  productName?: string;
  /**
   * @example
   * 008801.accident.flight.104000
   */
  productNo?: string;
  /**
   * @example
   * REFUND_SUCCESS
   */
  refundStatus?: string;
  /**
   * @example
   * 2023-04-17T20:25Z
   */
  refundTime?: string;
  /**
   * @example
   * REFUND_SUCCESS
   */
  status?: string;
  /**
   * @example
   * s1231231344
   */
  subInsOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveEndTime: 'effective_end_time',
      effectiveStartTime: 'effective_start_time',
      insureSegment: 'insure_segment',
      insureTime: 'insure_time',
      insured: 'insured',
      outSubInsOrderId: 'out_sub_ins_order_id',
      policyNo: 'policy_no',
      policyRefundNo: 'policy_refund_no',
      price: 'price',
      productName: 'product_name',
      productNo: 'product_no',
      refundStatus: 'refund_status',
      refundTime: 'refund_time',
      status: 'status',
      subInsOrderId: 'sub_ins_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      insureSegment: InsureRefundDetailResponseBodyModuleSubOrderRefundListInsureSegment,
      insureTime: 'string',
      insured: InsureRefundDetailResponseBodyModuleSubOrderRefundListInsured,
      outSubInsOrderId: 'string',
      policyNo: 'string',
      policyRefundNo: 'string',
      price: 'number',
      productName: 'string',
      productNo: 'string',
      refundStatus: 'string',
      refundTime: 'string',
      status: 'string',
      subInsOrderId: 'string',
    };
  }

  validate() {
    if(this.insureSegment && typeof (this.insureSegment as any).validate === 'function') {
      (this.insureSegment as any).validate();
    }
    if(this.insured && typeof (this.insured as any).validate === 'function') {
      (this.insured as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

