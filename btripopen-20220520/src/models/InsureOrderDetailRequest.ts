// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  btripUserId?: string;
  buyerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1021000196440356901
   */
  insOrderId?: string;
  /**
   * @example
   * PostalSavingsBank
   */
  isvName?: string;
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
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      insOrderId: 'string',
      isvName: 'string',
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

