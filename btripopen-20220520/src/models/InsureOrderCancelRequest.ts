// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsureOrderCancelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2000310301
   */
  btripUserId?: string;
  buyerName?: string;
  /**
   * @example
   * open12igetbis4o07v10B1TlOWcM00
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
      isvName: 'isv_name',
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
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

