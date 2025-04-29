// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderPayRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100000001
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
   * 202310101026030
   */
  outOrderId?: string;
  /**
   * @example
   * 1020030003332000
   */
  outSubOrderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3000
   */
  paymentAmount?: number;
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
      outOrderId: 'out_order_id',
      outSubOrderId: 'out_sub_order_id',
      paymentAmount: 'payment_amount',
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      isvName: 'string',
      outOrderId: 'string',
      outSubOrderId: 'string',
      paymentAmount: 'number',
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

