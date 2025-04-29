// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList } from "./TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList";


export class TicketChangingFlightListResponseBodyModuleFlightInfoListCabinList extends $dara.Model {
  /**
   * @example
   * G
   */
  cabin?: string;
  /**
   * @example
   * Y
   */
  cabinClass?: string;
  cabinDesc?: string;
  /**
   * @example
   * 80
   */
  cabinDiscount?: number;
  /**
   * @example
   * G
   */
  childCabin?: string;
  /**
   * @example
   * A
   */
  leftNum?: string;
  modifyPriceList?: TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList[];
  /**
   * @example
   * "360379a11ee84e9aa011baa41b758fe6"
   */
  otaItemid?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinDesc: 'cabin_desc',
      cabinDiscount: 'cabin_discount',
      childCabin: 'child_cabin',
      leftNum: 'left_num',
      modifyPriceList: 'modify_price_list',
      otaItemid: 'ota_itemid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabin: 'string',
      cabinClass: 'string',
      cabinDesc: 'string',
      cabinDiscount: 'number',
      childCabin: 'string',
      leftNum: 'string',
      modifyPriceList: { 'type': 'array', 'itemType': TicketChangingFlightListResponseBodyModuleFlightInfoListCabinListModifyPriceList },
      otaItemid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modifyPriceList)) {
      $dara.Model.validateArray(this.modifyPriceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

