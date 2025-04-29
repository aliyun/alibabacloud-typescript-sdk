// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListBestPriceItemFlightRuleInfosValue } from "./ModuleFlightItemListBestPriceItemFlightRuleInfosValue";
import { ModuleFlightItemListBestPriceItemShoppingItemMapValue } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValue";
import { ModuleFlightItemListBestPriceItemSubItemPositionMapValue } from "./ModuleFlightItemListBestPriceItemSubItemPositionMapValue";
import { FlightListingSearchV2ResponseBodyModuleFlightItemListBestPriceItemSubItems } from "./FlightListingSearchV2responseBodyModuleFlightItemListBestPriceItemSubItems";


export class FlightListingSearchV2ResponseBodyModuleFlightItemListBestPriceItem extends $dara.Model {
  flightRuleInfos?: { [key: string]: ModuleFlightItemListBestPriceItemFlightRuleInfosValue };
  /**
   * @example
   * e50d380fc05942cc8ac57af8ae02f448_0
   */
  itemId?: string;
  shoppingItemMap?: { [key: string]: ModuleFlightItemListBestPriceItemShoppingItemMapValue };
  subItemPositionMap?: { [key: string]: ModuleFlightItemListBestPriceItemSubItemPositionMapValue[] };
  subItems?: FlightListingSearchV2ResponseBodyModuleFlightItemListBestPriceItemSubItems[];
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
      flightRuleInfos: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListBestPriceItemFlightRuleInfosValue },
      itemId: 'string',
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListBestPriceItemShoppingItemMapValue },
      subItemPositionMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleFlightItemListBestPriceItemSubItemPositionMapValue } },
      subItems: { 'type': 'array', 'itemType': FlightListingSearchV2ResponseBodyModuleFlightItemListBestPriceItemSubItems },
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

