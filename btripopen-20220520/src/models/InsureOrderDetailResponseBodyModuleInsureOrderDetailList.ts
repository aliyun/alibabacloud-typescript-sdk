// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsureSegment } from "./InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsureSegment";
import { InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsured } from "./InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsured";


export class InsureOrderDetailResponseBodyModuleInsureOrderDetailList extends $dara.Model {
  /**
   * @example
   * 2023-10-12 10:00:00
   */
  effectiveEndTime?: string;
  /**
   * @example
   * 2023-10-11 10:00:00
   */
  effectiveStartTime?: string;
  insureSegment?: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsureSegment;
  /**
   * @example
   * 2023-10-11 11:30:00
   */
  insureTime?: string;
  insured?: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsured;
  /**
   * @example
   * 1021000196440356922
   */
  outSubInsOrderId?: string;
  /**
   * @example
   * 22222222222
   */
  policyNo?: string;
  /**
   * @example
   * 30
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
   * CLOSED
   */
  status?: string;
  /**
   * @example
   * 1021000196440356901
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
      price: 'price',
      productName: 'product_name',
      productNo: 'product_no',
      status: 'status',
      subInsOrderId: 'sub_ins_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      insureSegment: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsureSegment,
      insureTime: 'string',
      insured: InsureOrderDetailResponseBodyModuleInsureOrderDetailListInsured,
      outSubInsOrderId: 'string',
      policyNo: 'string',
      price: 'number',
      productName: 'string',
      productNo: 'string',
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

