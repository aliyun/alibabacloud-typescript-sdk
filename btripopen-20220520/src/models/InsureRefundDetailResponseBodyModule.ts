// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureRefundDetailResponseBodyModuleInsureOrder } from "./InsureRefundDetailResponseBodyModuleInsureOrder";
import { InsureRefundDetailResponseBodyModuleSubOrderRefundList } from "./InsureRefundDetailResponseBodyModuleSubOrderRefundList";


export class InsureRefundDetailResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1423050918202760437
   */
  applyId?: string;
  /**
   * @example
   * 2022-07-20T10:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  gmtModified?: string;
  /**
   * @example
   * 100000000001
   */
  insOrderId?: string;
  insureOrder?: InsureRefundDetailResponseBodyModuleInsureOrder;
  /**
   * @example
   * 23102301010
   */
  outApplyId?: string;
  subOrderRefundList?: InsureRefundDetailResponseBodyModuleSubOrderRefundList[];
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      insOrderId: 'ins_order_id',
      insureOrder: 'insure_order',
      outApplyId: 'out_apply_id',
      subOrderRefundList: 'sub_order_refund_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      insOrderId: 'string',
      insureOrder: InsureRefundDetailResponseBodyModuleInsureOrder,
      outApplyId: 'string',
      subOrderRefundList: { 'type': 'array', 'itemType': InsureRefundDetailResponseBodyModuleSubOrderRefundList },
    };
  }

  validate() {
    if(this.insureOrder && typeof (this.insureOrder as any).validate === 'function') {
      (this.insureOrder as any).validate();
    }
    if(Array.isArray(this.subOrderRefundList)) {
      $dara.Model.validateArray(this.subOrderRefundList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

