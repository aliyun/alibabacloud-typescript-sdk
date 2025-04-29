// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureOrderCreateRequestInsPersonAndSegmentListInsureSegment } from "./InsureOrderCreateRequestInsPersonAndSegmentListInsureSegment";
import { InsureOrderCreateRequestInsPersonAndSegmentListInsured } from "./InsureOrderCreateRequestInsPersonAndSegmentListInsured";


export class InsureOrderCreateRequestInsPersonAndSegmentList extends $dara.Model {
  insureSegment?: InsureOrderCreateRequestInsPersonAndSegmentListInsureSegment;
  insured?: InsureOrderCreateRequestInsPersonAndSegmentListInsured;
  /**
   * @example
   * 12399992002002010
   */
  outSubInsOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      insureSegment: 'insure_segment',
      insured: 'insured',
      outSubInsOrderId: 'out_sub_ins_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insureSegment: InsureOrderCreateRequestInsPersonAndSegmentListInsureSegment,
      insured: InsureOrderCreateRequestInsPersonAndSegmentListInsured,
      outSubInsOrderId: 'string',
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

