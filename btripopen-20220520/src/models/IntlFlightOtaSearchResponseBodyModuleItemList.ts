// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaSearchResponseBodyModuleItemListAgreementPriceCodes } from "./IntlFlightOtaSearchResponseBodyModuleItemListAgreementPriceCodes";
import { ModuleItemListShoppingItemMapValue } from "./ModuleItemListShoppingItemMapValue";
import { IntlFlightOtaSearchResponseBodyModuleItemListSubItems } from "./IntlFlightOtaSearchResponseBodyModuleItemListSubItems";


export class IntlFlightOtaSearchResponseBodyModuleItemList extends $dara.Model {
  agreementPriceCodes?: IntlFlightOtaSearchResponseBodyModuleItemListAgreementPriceCodes[];
  /**
   * @example
   * e50d380fc05942cc8ac57af8ae02f448_0
   */
  itemId?: string;
  itemType?: string;
  shoppingItemMap?: { [key: string]: ModuleItemListShoppingItemMapValue };
  subItems?: IntlFlightOtaSearchResponseBodyModuleItemListSubItems[];
  static names(): { [key: string]: string } {
    return {
      agreementPriceCodes: 'agreement_price_codes',
      itemId: 'item_id',
      itemType: 'item_type',
      shoppingItemMap: 'shopping_item_map',
      subItems: 'sub_items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementPriceCodes: { 'type': 'array', 'itemType': IntlFlightOtaSearchResponseBodyModuleItemListAgreementPriceCodes },
      itemId: 'string',
      itemType: 'string',
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleItemListShoppingItemMapValue },
      subItems: { 'type': 'array', 'itemType': IntlFlightOtaSearchResponseBodyModuleItemListSubItems },
    };
  }

  validate() {
    if(Array.isArray(this.agreementPriceCodes)) {
      $dara.Model.validateArray(this.agreementPriceCodes);
    }
    if(this.shoppingItemMap) {
      $dara.Model.validateMap(this.shoppingItemMap);
    }
    if(Array.isArray(this.subItems)) {
      $dara.Model.validateArray(this.subItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

