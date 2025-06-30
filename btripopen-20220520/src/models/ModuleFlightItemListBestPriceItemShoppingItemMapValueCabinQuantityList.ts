// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition";
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabinInfo } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabinInfo";


export class ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityList extends $dara.Model {
  segmentPosition?: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition;
  cabinInfo?: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabinInfo;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      cabinInfo: 'cabin_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition,
      cabinInfo: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabinInfo,
    };
  }

  validate() {
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    if(this.cabinInfo && typeof (this.cabinInfo as any).validate === 'function') {
      (this.cabinInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

