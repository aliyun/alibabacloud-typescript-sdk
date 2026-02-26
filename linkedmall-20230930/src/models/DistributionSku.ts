// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistributionSku extends $dara.Model {
  aliasTitle?: string;
  barCode?: string;
  creditPeriod?: number;
  dxPrice?: number;
  hasCredit?: boolean;
  hasInvoice?: boolean;
  jxPrice?: number;
  picUrl?: string;
  quantity?: number;
  skuId?: string;
  skuStatus?: string;
  taxCode?: string;
  taxRate?: number;
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

