// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsInvoiceScanQueryResponseBodyModuleItemsInvoiceDetails extends $dara.Model {
  /**
   * @remarks
   * 金额
   * 
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
  /**
   * @remarks
   * 货物或应税劳务、服务名称
   */
  itemName?: string;
  /**
   * @remarks
   * 数量
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * 规格型号
   * 
   * @example
   * 66PT11230069
   */
  specification?: string;
  /**
   * @remarks
   * 税额
   * 
   * @example
   * 12.79
   */
  tax?: string;
  /**
   * @remarks
   * 税率
   * 
   * @example
   * 17%
   */
  taxRate?: string;
  /**
   * @remarks
   * 单位
   */
  unit?: string;
  /**
   * @remarks
   * 单价
   * 
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

