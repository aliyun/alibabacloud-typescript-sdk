// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListItemListSubItemsShoppingItemMapValueCabinQuantityValue } from "./ModuleFlightItemListItemListSubItemsShoppingItemMapValueCabinQuantityValue";
import { ModuleFlightItemListItemListSubItemsShoppingItemMapValueSearchPrice } from "./ModuleFlightItemListItemListSubItemsShoppingItemMapValueSearchPrice";
import { ModuleFlightItemListItemListSubItemsShoppingItemMapValueSegmentPriceValue } from "./ModuleFlightItemListItemListSubItemsShoppingItemMapValueSegmentPriceValue";


export class ModuleFlightItemListItemListSubItemsShoppingItemMapValue extends $dara.Model {
  /**
   * @remarks
   * id
   * 
   * @example
   * ADT07df0bd9-f803-4a50-8449-f4bd675d9939
   */
  id?: string;
  cabinQuantity?: { [key: string]: ModuleFlightItemListItemListSubItemsShoppingItemMapValueCabinQuantityValue };
  searchPrice?: ModuleFlightItemListItemListSubItemsShoppingItemMapValueSearchPrice;
  segmentPrice?: { [key: string]: ModuleFlightItemListItemListSubItemsShoppingItemMapValueSegmentPriceValue };
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      cabinQuantity: 'cabin_quantity',
      searchPrice: 'search_price',
      segmentPrice: 'segment_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      cabinQuantity: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListItemListSubItemsShoppingItemMapValueCabinQuantityValue },
      searchPrice: ModuleFlightItemListItemListSubItemsShoppingItemMapValueSearchPrice,
      segmentPrice: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListItemListSubItemsShoppingItemMapValueSegmentPriceValue },
    };
  }

  validate() {
    if(this.cabinQuantity) {
      $dara.Model.validateMap(this.cabinQuantity);
    }
    if(this.searchPrice && typeof (this.searchPrice as any).validate === 'function') {
      (this.searchPrice as any).validate();
    }
    if(this.segmentPrice) {
      $dara.Model.validateMap(this.segmentPrice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

