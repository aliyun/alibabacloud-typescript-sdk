// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderRefundRequest extends $dara.Model {
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
  policyNoList?: string[];
  subInsOrderIds?: string[];
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
      policyNoList: 'policy_no_list',
      subInsOrderIds: 'sub_ins_order_ids',
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      isvName: 'string',
      outApplyId: 'string',
      policyNoList: { 'type': 'array', 'itemType': 'string' },
      subInsOrderIds: { 'type': 'array', 'itemType': 'string' },
      supplierCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyNoList)) {
      $dara.Model.validateArray(this.policyNoList);
    }
    if(Array.isArray(this.subInsOrderIds)) {
      $dara.Model.validateArray(this.subInsOrderIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

