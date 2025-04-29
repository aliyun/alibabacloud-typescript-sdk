// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems";
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips";


export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem extends $dara.Model {
  baggageSubItems?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems[];
  /**
   * @example
   * 1
   */
  index?: number;
  tableHead?: string;
  tips?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips;
  title?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      baggageSubItems: 'baggage_sub_items',
      index: 'index',
      tableHead: 'table_head',
      tips: 'tips',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageSubItems: { 'type': 'array', 'itemType': FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemTips,
      title: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.baggageSubItems)) {
      $dara.Model.validateArray(this.baggageSubItems);
    }
    if(this.tips && typeof (this.tips as any).validate === 'function') {
      (this.tips as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

