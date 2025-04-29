// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleItemListFlightRuleInfosValue } from "./ModuleItemListFlightRuleInfosValue";
import { ModuleItemListShoppingItemMapValue } from "./ModuleItemListShoppingItemMapValue";
import { ModuleItemListSubItemPositionMapValue } from "./ModuleItemListSubItemPositionMapValue";
import { FlightOtaSearchV2ResponseBodyModuleItemListSubItems } from "./FlightOtaSearchV2responseBodyModuleItemListSubItems";


export class FlightOtaSearchV2ResponseBodyModuleItemList extends $dara.Model {
  flightRuleInfos?: { [key: string]: ModuleItemListFlightRuleInfosValue };
  /**
   * @example
   * e50d380fc05942cc8ac57af8ae02f448_0
   */
  itemId?: string;
  shoppingItemMap?: { [key: string]: ModuleItemListShoppingItemMapValue };
  subItemPositionMap?: { [key: string]: ModuleItemListSubItemPositionMapValue[] };
  subItems?: FlightOtaSearchV2ResponseBodyModuleItemListSubItems[];
  static names(): { [key: string]: string } {
    return {
      flightRuleInfos: 'flight_rule_infos',
      itemId: 'item_id',
      shoppingItemMap: 'shopping_item_map',
      subItemPositionMap: 'sub_item_position_map',
      subItems: 'sub_items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flightRuleInfos: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleItemListFlightRuleInfosValue },
      itemId: 'string',
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleItemListShoppingItemMapValue },
      subItemPositionMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleItemListSubItemPositionMapValue } },
      subItems: { 'type': 'array', 'itemType': FlightOtaSearchV2ResponseBodyModuleItemListSubItems },
    };
  }

  validate() {
    if(this.flightRuleInfos) {
      $dara.Model.validateMap(this.flightRuleInfos);
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

