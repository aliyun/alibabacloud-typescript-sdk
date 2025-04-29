// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderListQueryResponseBodyModuleInvoice extends $dara.Model {
  /**
   * @example
   * 133568
   */
  id?: number;
  /**
   * @example
   * 1
   */
  invoiceType?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      invoiceType: 'invoice_type',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      invoiceType: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

