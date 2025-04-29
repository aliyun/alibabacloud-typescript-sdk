// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValue } from "./ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValue";


export class FlightListingSearchV2ResponseBodyModuleFlightItemListBestPriceItemSubItems extends $dara.Model {
  shoppingItemMap?: { [key: string]: ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValue };
  /**
   * @example
   * 07df0bd9-f803-4a50-8449-f4bd675d9939
   */
  uniqKey?: string;
  static names(): { [key: string]: string } {
    return {
      shoppingItemMap: 'shopping_item_map',
      uniqKey: 'uniq_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListBestPriceItemSubItemsShoppingItemMapValue },
      uniqKey: 'string',
    };
  }

  validate() {
    if(this.shoppingItemMap) {
      $dara.Model.validateMap(this.shoppingItemMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

