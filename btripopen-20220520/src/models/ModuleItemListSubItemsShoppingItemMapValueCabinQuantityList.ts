// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleItemListSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition } from "./ModuleItemListSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition";
import { ModuleItemListSubItemsShoppingItemMapValueCabinQuantityListCabinInfo } from "./ModuleItemListSubItemsShoppingItemMapValueCabinQuantityListCabinInfo";


export class ModuleItemListSubItemsShoppingItemMapValueCabinQuantityList extends $dara.Model {
  segmentPosition?: ModuleItemListSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition;
  cabinInfo?: ModuleItemListSubItemsShoppingItemMapValueCabinQuantityListCabinInfo;
  static names(): { [key: string]: string } {
    return {
      segmentPosition: 'segment_position',
      cabinInfo: 'cabin_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segmentPosition: ModuleItemListSubItemsShoppingItemMapValueCabinQuantityListSegmentPosition,
      cabinInfo: ModuleItemListSubItemsShoppingItemMapValueCabinQuantityListCabinInfo,
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

