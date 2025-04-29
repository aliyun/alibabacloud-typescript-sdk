// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition";
import { ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabin } from "./ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabin";


export class ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityList extends $dara.Model {
  segmentPosition?: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition;
  cabin?: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabin;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      cabin: 'cabin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListSegmentPosition,
      cabin: ModuleFlightItemListBestPriceItemShoppingItemMapValueCabinQuantityListCabin,
    };
  }

  validate() {
    if(this.segmentPosition && typeof (this.segmentPosition as any).validate === 'function') {
      (this.segmentPosition as any).validate();
    }
    if(this.cabin && typeof (this.cabin as any).validate === 'function') {
      (this.cabin as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

