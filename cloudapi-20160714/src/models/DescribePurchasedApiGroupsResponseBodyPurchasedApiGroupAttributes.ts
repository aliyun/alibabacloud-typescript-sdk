// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute } from "./DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute";


export class DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributes extends $dara.Model {
  purchasedApiGroupAttribute?: DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute[];
  static names(): { [key: string]: string } {
    return {
      purchasedApiGroupAttribute: 'PurchasedApiGroupAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      purchasedApiGroupAttribute: { 'type': 'array', 'itemType': DescribePurchasedApiGroupsResponseBodyPurchasedApiGroupAttributesPurchasedApiGroupAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.purchasedApiGroupAttribute)) {
      $dara.Model.validateArray(this.purchasedApiGroupAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

