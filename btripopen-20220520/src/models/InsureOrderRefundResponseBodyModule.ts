// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureOrderRefundResponseBodyModuleInsRefundList } from "./InsureOrderRefundResponseBodyModuleInsRefundList";


export class InsureOrderRefundResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 118526587
   */
  applyId?: string;
  /**
   * @example
   * 1423041410342678003
   */
  insOrderId?: string;
  insRefundList?: InsureOrderRefundResponseBodyModuleInsRefundList[];
  /**
   * @example
   * 1423041410342678022
   */
  outApplyId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      insOrderId: 'ins_order_id',
      insRefundList: 'ins_refund_list',
      outApplyId: 'out_apply_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      insOrderId: 'string',
      insRefundList: { 'type': 'array', 'itemType': InsureOrderRefundResponseBodyModuleInsRefundList },
      outApplyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.insRefundList)) {
      $dara.Model.validateArray(this.insRefundList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

