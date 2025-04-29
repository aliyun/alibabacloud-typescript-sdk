// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityList } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityList";
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPrice } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPrice";
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueSegmentPriceList } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueSegmentPriceList";
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityValue } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityValue";
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueSegmentPriceValue } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueSegmentPriceValue";


export class ModuleFlightItemListBestPriceItemShoppingItemMapValue extends $dara.Model {
  cabinQuantityList?: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityList[];
  searchPrice?: ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPrice;
  segmentPriceList?: ModuleFlightItemListBestPriceItemShoppingItemMapValueSegmentPriceList[];
  /**
   * @remarks
   * id
   * 
   * @example
   * ADT07df0bd9-f803-4a50-8449-f4bd675d9939
   */
  id?: string;
  cabinQuantity?: { [key: string]: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityValue };
  segmentPrice?: { [key: string]: ModuleFlightItemListBestPriceItemShoppingItemMapValueSegmentPriceValue };
  static names(): { [key: string]: string } {
    return {
      cabinQuantityList: 'cabin_quantity_list',
      searchPrice: 'search_price',
      segmentPriceList: 'segment_price_list',
      id: 'id',
      cabinQuantity: 'cabin_quantity',
      segmentPrice: 'segment_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinQuantityList: { 'type': 'array', 'itemType': ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityList },
      searchPrice: ModuleFlightItemListBestPriceItemShoppingItemMapValueSearchPrice,
      segmentPriceList: { 'type': 'array', 'itemType': ModuleFlightItemListBestPriceItemShoppingItemMapValueSegmentPriceList },
      id: 'string',
      cabinQuantity: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityValue },
      segmentPrice: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleFlightItemListBestPriceItemShoppingItemMapValueSegmentPriceValue },
    };
  }

  validate() {
    if(Array.isArray(this.cabinQuantityList)) {
      $dara.Model.validateArray(this.cabinQuantityList);
    }
    if(this.searchPrice && typeof (this.searchPrice as any).validate === 'function') {
      (this.searchPrice as any).validate();
    }
    if(Array.isArray(this.segmentPriceList)) {
      $dara.Model.validateArray(this.segmentPriceList);
    }
    if(this.cabinQuantity) {
      $dara.Model.validateMap(this.cabinQuantity);
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

