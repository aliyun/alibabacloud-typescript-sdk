// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems";
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItemTips } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItemTips";


export class FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItem extends $dara.Model {
  baggageSubItems?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems[];
  /**
   * @example
   * 1
   */
  index?: number;
  tableHead?: string;
  tips?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItemTips;
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
      baggageSubItems: { 'type': 'array', 'itemType': FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItemTips,
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

