// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizes } from "./FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizes";


export class FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItems extends $dara.Model {
  baggageSubContentVisualizes?: FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizes[];
  extraContentVisualizes?: any[];
  /**
   * @example
   * false
   */
  isStruct?: boolean;
  /**
   * @example
   * ADT
   */
  ptc?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      baggageSubContentVisualizes: 'baggage_sub_content_visualizes',
      extraContentVisualizes: 'extra_content_visualizes',
      isStruct: 'is_struct',
      ptc: 'ptc',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageSubContentVisualizes: { 'type': 'array', 'itemType': FlightOtaItemDetailResponseBodyModuleBaggageRuleBaggageSubItemsBaggageSubContentVisualizes },
      extraContentVisualizes: { 'type': 'array', 'itemType': 'any' },
      isStruct: 'boolean',
      ptc: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baggageSubContentVisualizes)) {
      $dara.Model.validateArray(this.baggageSubContentVisualizes);
    }
    if(Array.isArray(this.extraContentVisualizes)) {
      $dara.Model.validateArray(this.extraContentVisualizes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

