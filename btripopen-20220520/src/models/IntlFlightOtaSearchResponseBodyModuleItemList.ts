// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoList } from "./IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoList";
import { ModuleItemListShoppingItemMapValue } from "./ModuleItemListShoppingItemMapValue";
import { ModuleItemListSubItemPositionMapValue } from "./ModuleItemListSubItemPositionMapValue";
import { IntlFlightOtaSearchResponseBodyModuleItemListSubItems } from "./IntlFlightOtaSearchResponseBodyModuleItemListSubItems";


export class IntlFlightOtaSearchResponseBodyModuleItemList extends $dara.Model {
  agreementPriceCodes?: string[];
  flightRuleInfoList?: IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoList[];
  /**
   * @example
   * e50d380fc05942cc8ac57af8ae02f448_0
   */
  itemId?: string;
  itemType?: string;
  shoppingItemMap?: { [key: string]: ModuleItemListShoppingItemMapValue };
  subItemPositionMap?: { [key: string]: ModuleItemListSubItemPositionMapValue[] };
  subItems?: IntlFlightOtaSearchResponseBodyModuleItemListSubItems[];
  static names(): { [key: string]: string } {
    return {
      agreementPriceCodes: 'agreement_price_codes',
      flightRuleInfoList: 'flight_rule_info_list',
      itemId: 'item_id',
      itemType: 'item_type',
      shoppingItemMap: 'shopping_item_map',
      subItemPositionMap: 'sub_item_position_map',
      subItems: 'sub_items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementPriceCodes: { 'type': 'array', 'itemType': 'string' },
      flightRuleInfoList: { 'type': 'array', 'itemType': IntlFlightOtaSearchResponseBodyModuleItemListFlightRuleInfoList },
      itemId: 'string',
      itemType: 'string',
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleItemListShoppingItemMapValue },
      subItemPositionMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleItemListSubItemPositionMapValue } },
      subItems: { 'type': 'array', 'itemType': IntlFlightOtaSearchResponseBodyModuleItemListSubItems },
    };
  }

  validate() {
    if(Array.isArray(this.agreementPriceCodes)) {
      $dara.Model.validateArray(this.agreementPriceCodes);
    }
    if(Array.isArray(this.flightRuleInfoList)) {
      $dara.Model.validateArray(this.flightRuleInfoList);
    }
    if(this.shoppingItemMap) {
      $dara.Model.validateMap(this.shoppingItemMap);
    }
    if(this.subItemPositionMap) {
      $dara.Model.validateMap(this.subItemPositionMap);
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

