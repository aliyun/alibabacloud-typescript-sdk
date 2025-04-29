// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItems } from "./FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItems";
import { FlightOtaItemDetailResponseBodyModuleBaggageRuleTips } from "./FlightOtaItemDetailResponseBodyModuleBaggageRuleTips";


export class FlightOtaItemDetailResponseBodyModuleBaggageRule extends $dara.Model {
  baggageSubItems?: FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItems[];
  /**
   * @example
   * 0
   */
  index?: number;
  /**
   * @example
   * tableHead
   */
  tableHead?: string;
  tips?: FlightOtaItemDetailResponseBodyModuleBaggageRuleTips;
  title?: string;
  /**
   * @example
   * 2
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
      baggageSubItems: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItems },
      index: 'number',
      tableHead: 'string',
      tips: FlightOtaItemDetailResponseBodyModuleBaggageRuleTips,
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

