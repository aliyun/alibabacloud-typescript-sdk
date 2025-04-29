// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePurchasedApisResponseBodyPurchasedApisPurchasedApi } from "./DescribePurchasedApisResponseBodyPurchasedApisPurchasedApi";


export class DescribePurchasedApisResponseBodyPurchasedApis extends $dara.Model {
  purchasedApi?: DescribePurchasedApisResponseBodyPurchasedApisPurchasedApi[];
  static names(): { [key: string]: string } {
    return {
      purchasedApi: 'PurchasedApi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      purchasedApi: { 'type': 'array', 'itemType': DescribePurchasedApisResponseBodyPurchasedApisPurchasedApi },
    };
  }

  validate() {
    if(Array.isArray(this.purchasedApi)) {
      $dara.Model.validateArray(this.purchasedApi);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

