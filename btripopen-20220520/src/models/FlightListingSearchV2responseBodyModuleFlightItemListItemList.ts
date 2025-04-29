// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListItemListFlightRuleInfosValue } from "./ModuleFlightItemListItemListFlightRuleInfosValue";
import { ModuleFlightItemListItemListShoppingItemMapValue } from "./ModuleFlightItemListItemListShoppingItemMapValue";
import { ModuleFlightItemListItemListSubItemPositionMapValue } from "./ModuleFlightItemListItemListSubItemPositionMapValue";
import { FlightListingSearchV2ResponseBodyModuleFlightItemListItemListSubItems } from "./FlightListingSearchV2responseBodyModuleFlightItemListItemListSubItems";


export class FlightListingSearchV2ResponseBodyModuleFlightItemListItemList extends $dara.Model {
  flightRuleInfos?: { [key: string]: ModuleFlightItemListItemListFlightRuleInfosValue };
  /**
   * @example
   * e50d380fc05942cc8ac57af8ae02f448_0
   */
  itemId?: string;
  shoppingItemMap?: { [key: string]: ModuleFlightItemListItemListShoppingItemMapValue };
  subItemPositionMap?: { [key: string]: ModuleFlightItemListItemListSubItemPositionMapValue[] };
  subItems?: FlightListingSearchV2ResponseBodyModuleFlightItemListItemListSubItems[];
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
      flightRuleInfos: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListItemListFlightRuleInfosValue },
      itemId: 'string',
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListItemListShoppingItemMapValue },
      subItemPositionMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleFlightItemListItemListSubItemPositionMapValue } },
      subItems: { 'type': 'array', 'itemType': FlightListingSearchV2ResponseBodyModuleFlightItemListItemListSubItems },
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

