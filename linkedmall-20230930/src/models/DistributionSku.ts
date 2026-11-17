// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistributionSku extends $dara.Model {
  /**
   * @remarks
   * The alias.
   * 
   * @example
   * 示例规格
   */
  aliasTitle?: string;
  /**
   * @remarks
   * The barcode.
   * 
   * @example
   * 6901234567892
   */
  barCode?: string;
  /**
   * @remarks
   * The maximum acceptable credit period.
   */
  creditPeriod?: number;
  /**
   * @remarks
   * The consignment supply price.
   */
  dxPrice?: number;
  /**
   * @remarks
   * Specifies whether credit periods are supported.
   */
  hasCredit?: boolean;
  /**
   * @remarks
   * Specifies whether invoicing is supported.
   */
  hasInvoice?: boolean;
  /**
   * @remarks
   * The distribution supply price.
   */
  jxPrice?: number;
  /**
   * @remarks
   * The image.
   * 
   * @example
   * https://example.com/images/product.png
   */
  picUrl?: string;
  /**
   * @remarks
   * The inventory.
   * 
   * @example
   * 100
   */
  quantity?: number;
  /**
   * @remarks
   * sku id
   * 
   * @example
   * 660460842235822082
   */
  skuId?: string;
  /**
   * @remarks
   * The status.
   */
  skuStatus?: string;
  /**
   * @remarks
   * The tax code.
   */
  taxCode?: string;
  /**
   * @remarks
   * The tax rate.
   */
  taxRate?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 示例商品名称
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      aliasTitle: 'aliasTitle',
      barCode: 'barCode',
      creditPeriod: 'creditPeriod',
      dxPrice: 'dxPrice',
      hasCredit: 'hasCredit',
      hasInvoice: 'hasInvoice',
      jxPrice: 'jxPrice',
      picUrl: 'picUrl',
      quantity: 'quantity',
      skuId: 'skuId',
      skuStatus: 'skuStatus',
      taxCode: 'taxCode',
      taxRate: 'taxRate',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasTitle: 'string',
      barCode: 'string',
      creditPeriod: 'number',
      dxPrice: 'number',
      hasCredit: 'boolean',
      hasInvoice: 'boolean',
      jxPrice: 'number',
      picUrl: 'string',
      quantity: 'number',
      skuId: 'string',
      skuStatus: 'string',
      taxCode: 'string',
      taxRate: 'number',
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

