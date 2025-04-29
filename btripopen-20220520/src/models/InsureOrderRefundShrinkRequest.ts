// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderRefundShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1000001
   */
  btripUserId?: string;
  buyerName?: string;
  /**
   * @example
   * PostalSavingsBank
   */
  isvName?: string;
  /**
   * @example
   * 1021000196440356908
   */
  outApplyId?: string;
  policyNoListShrink?: string;
  subInsOrderIdsShrink?: string;
  /**
   * @example
   * fliggy
   */
  supplierCode?: string;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      isvName: 'isv_name',
      outApplyId: 'out_apply_id',
      policyNoListShrink: 'policy_no_list',
      subInsOrderIdsShrink: 'sub_ins_order_ids',
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      isvName: 'string',
      outApplyId: 'string',
      policyNoListShrink: 'string',
      subInsOrderIdsShrink: 'string',
      supplierCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

