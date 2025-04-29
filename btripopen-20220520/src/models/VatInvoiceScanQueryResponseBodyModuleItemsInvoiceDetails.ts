// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VatInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails extends $dara.Model {
  /**
   * @example
   * 75.21
   */
  amount?: string;
  /**
   * @remarks
   * 行号
   * 
   * @example
   * 0
   */
  index?: string;
  itemName?: string;
  /**
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @example
   * 66PT11230069
   */
  specification?: string;
  /**
   * @example
   * 12.79
   */
  tax?: string;
  /**
   * @example
   * 17%
   */
  taxRate?: string;
  unit?: string;
  /**
   * @example
   * 75.21
   */
  unitPrice?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      index: 'index',
      itemName: 'item_name',
      quantity: 'quantity',
      specification: 'specification',
      tax: 'tax',
      taxRate: 'tax_rate',
      unit: 'unit',
      unitPrice: 'unit_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      index: 'string',
      itemName: 'string',
      quantity: 'string',
      specification: 'string',
      tax: 'string',
      taxRate: 'string',
      unit: 'string',
      unitPrice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

