// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitPurchaseInfoRequest extends $dara.Model {
  bizId?: string;
  purchaseCurrency?: string;
  purchasePrice?: number;
  purchaseProofs?: string[];
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      purchaseCurrency: 'PurchaseCurrency',
      purchasePrice: 'PurchasePrice',
      purchaseProofs: 'PurchaseProofs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      purchaseCurrency: 'string',
      purchasePrice: 'number',
      purchaseProofs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.purchaseProofs)) {
      $dara.Model.validateArray(this.purchaseProofs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

