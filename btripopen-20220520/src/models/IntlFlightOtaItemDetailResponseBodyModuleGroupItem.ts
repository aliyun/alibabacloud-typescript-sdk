// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaItemDetailResponseBodyModuleGroupItemFlightRuleInfoList } from "./IntlFlightOtaItemDetailResponseBodyModuleGroupItemFlightRuleInfoList";
import { ModuleGroupItemShoppingItemMapValue } from "./ModuleGroupItemShoppingItemMapValue";
import { ModuleGroupItemSubItemPositionMapValue } from "./ModuleGroupItemSubItemPositionMapValue";
import { IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItems } from "./IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItems";


export class IntlFlightOtaItemDetailResponseBodyModuleGroupItem extends $dara.Model {
  agreementPriceCodes?: string[];
  flightRuleInfoList?: IntlFlightOtaItemDetailResponseBodyModuleGroupItemFlightRuleInfoList[];
  /**
   * @example
   * 669845158418
   */
  itemId?: string;
  itemType?: string;
  shoppingItemMap?: { [key: string]: ModuleGroupItemShoppingItemMapValue };
  subItemPositionMap?: { [key: string]: ModuleGroupItemSubItemPositionMapValue[] };
  subItems?: IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItems[];
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
      flightRuleInfoList: { 'type': 'array', 'itemType': IntlFlightOtaItemDetailResponseBodyModuleGroupItemFlightRuleInfoList },
      itemId: 'string',
      itemType: 'string',
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleGroupItemShoppingItemMapValue },
      subItemPositionMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleGroupItemSubItemPositionMapValue } },
      subItems: { 'type': 'array', 'itemType': IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItems },
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

