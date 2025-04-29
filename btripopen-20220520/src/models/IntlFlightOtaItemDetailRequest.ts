// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOtaItemDetailRequest extends $dara.Model {
  /**
   * @example
   * 10001
   */
  btripUserId?: string;
  buyerName?: string;
  /**
   * @example
   * open12igetbis4o07v10B1TlOWcM00
   */
  isvName?: string;
  language?: string;
  /**
   * @example
   * JIANHANG
   */
  supplierCode?: string;
  static names(): { [key: string]: string } {
    return {
      btripUserId: 'btrip_user_id',
      buyerName: 'buyer_name',
      isvName: 'isv_name',
      language: 'language',
      supplierCode: 'supplier_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      btripUserId: 'string',
      buyerName: 'string',
      isvName: 'string',
      language: 'string',
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

