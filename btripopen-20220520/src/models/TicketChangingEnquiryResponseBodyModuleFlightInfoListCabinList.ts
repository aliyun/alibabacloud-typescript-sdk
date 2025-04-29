// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRq } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRq";
import { TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList";


export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinList extends $dara.Model {
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
  changeOtaItemRuleRq?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRq;
  /**
   * @example
   * G
   */
  childCabin?: string;
  /**
   * @example
   * 0
   */
  leftNum?: string;
  modifyPriceList?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList[];
  /**
   * @example
   * 360379a11ee84e9aa011baa41b758fe6
   */
  otaItemid?: string;
  static names(): { [key: string]: string } {
    return {
      cabin: 'cabin',
      cabinClass: 'cabin_class',
      cabinDesc: 'cabin_desc',
      cabinDiscount: 'cabin_discount',
      changeOtaItemRuleRq: 'change_ota_item_rule_rq',
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
      changeOtaItemRuleRq: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRq,
      childCabin: 'string',
      leftNum: 'string',
      modifyPriceList: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListModifyPriceList },
      otaItemid: 'string',
    };
  }

  validate() {
    if(this.changeOtaItemRuleRq && typeof (this.changeOtaItemRuleRq as any).validate === 'function') {
      (this.changeOtaItemRuleRq as any).validate();
    }
    if(Array.isArray(this.modifyPriceList)) {
      $dara.Model.validateArray(this.modifyPriceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

