// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureRefundDetailRequest extends $dara.Model {
  applyId?: string;
  btripUserId?: string;
  buyerName?: string;
  insOrderId?: string;
  isvName?: string;
  outApplyId?: string;
  supplierCode?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      insOrderId: 'ins_order_id',
      isvName: 'isv_name',
      outApplyId: 'out_apply_id',
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripUserId: 'string',
      buyerName: 'string',
      insOrderId: 'string',
      isvName: 'string',
      outApplyId: 'string',
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

