// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InsureOrderApplyResponseBodyModuleInsOrderPolicyList } from "./InsureOrderApplyResponseBodyModuleInsOrderPolicyList";


export class InsureOrderApplyResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 1021000196500370003
   */
  insOrderId?: string;
  insOrderPolicyList?: InsureOrderApplyResponseBodyModuleInsOrderPolicyList[];
  static names(): { [key: string]: string } {
    return {
      insOrderId: 'ins_order_id',
      insOrderPolicyList: 'ins_order_policy_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insOrderId: 'string',
      insOrderPolicyList: { 'type': 'array', 'itemType': InsureOrderApplyResponseBodyModuleInsOrderPolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.insOrderPolicyList)) {
      $dara.Model.validateArray(this.insOrderPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

