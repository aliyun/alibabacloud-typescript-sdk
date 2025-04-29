// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderApplyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100000102
   */
  btripUserId?: string;
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1000003000000490
   */
  insOrderId?: string;
  /**
   * @example
   * PostalSavingsBank
   */
  isvName?: string;
  /**
   * @example
   * 202310101026030
   */
  outOrderId?: string;
  /**
   * @example
   * 1020030003332000
   */
  outSubOrderId?: string;
  /**
   * @example
   * fliggy
   */
  supplierCode?: string;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      insOrderId: 'ins_order_id',
      isvName: 'isv_name',
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      insOrderId: 'string',
      isvName: 'string',
      outOrderId: 'string',
      outSubOrderId: 'string',
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

