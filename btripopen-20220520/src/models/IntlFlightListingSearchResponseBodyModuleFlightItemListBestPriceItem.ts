// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemAgreementPriceCodes } from "./IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemAgreementPriceCodes";
import { ModuleFlightItemListBestPriceItemShoppingItemMapValue } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValue";


export class IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItem extends $dara.Model {
  agreementPriceCodes?: IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemAgreementPriceCodes[];
  itemId?: string;
  itemType?: string;
  shoppingItemMap?: { [key: string]: ModuleFlightItemListBestPriceItemShoppingItemMapValue };
  static names(): { [key: string]: string } {
    return {
      agreementPriceCodes: 'agreement_price_codes',
      itemId: 'item_id',
      itemType: 'item_type',
      shoppingItemMap: 'shopping_item_map',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementPriceCodes: { 'type': 'array', 'itemType': IntlFlightListingSearchResponseBodyModuleFlightItemListBestPriceItemAgreementPriceCodes },
      itemId: 'string',
      itemType: 'string',
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListBestPriceItemShoppingItemMapValue },
    };
  }

  validate() {
    if(Array.isArray(this.agreementPriceCodes)) {
      $dara.Model.validateArray(this.agreementPriceCodes);
    }
    if(this.shoppingItemMap) {
      $dara.Model.validateMap(this.shoppingItemMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

