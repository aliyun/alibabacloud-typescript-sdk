// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceSearchResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 1478652
   */
  id?: number;
  /**
   * @example
   * 405009
   */
  thirdPartInvoiceId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      thirdPartInvoiceId: 'third_part_invoice_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      thirdPartInvoiceId: 'string',
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

