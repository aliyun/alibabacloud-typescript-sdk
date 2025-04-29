// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureOrderDetailResponseBodyModuleApplicant } from "./InsureOrderDetailResponseBodyModuleApplicant";
import { InsureOrderDetailResponseBodyModuleInsureOrderDetailList } from "./InsureOrderDetailResponseBodyModuleInsureOrderDetailList";


export class InsureOrderDetailResponseBodyModule extends $dara.Model {
  applicant?: InsureOrderDetailResponseBodyModuleApplicant;
  /**
   * @example
   * 1021000196440356901
   */
  insOrderId?: string;
  insureOrderDetailList?: InsureOrderDetailResponseBodyModuleInsureOrderDetailList[];
  /**
   * @example
   * CLOSED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      insOrderId: 'ins_order_id',
      insureOrderDetailList: 'insure_order_detail_list',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: InsureOrderDetailResponseBodyModuleApplicant,
      insOrderId: 'string',
      insureOrderDetailList: { 'type': 'array', 'itemType': InsureOrderDetailResponseBodyModuleInsureOrderDetailList },
      status: 'string',
    };
  }

  validate() {
    if(this.applicant && typeof (this.applicant as any).validate === 'function') {
      (this.applicant as any).validate();
    }
    if(Array.isArray(this.insureOrderDetailList)) {
      $dara.Model.validateArray(this.insureOrderDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

