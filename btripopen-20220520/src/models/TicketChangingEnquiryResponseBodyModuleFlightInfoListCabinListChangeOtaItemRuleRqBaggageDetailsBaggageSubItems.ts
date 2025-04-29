// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizes } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizes";
import { TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContents } from "./TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContents";


export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItems extends $dara.Model {
  /**
   * @remarks
   * attributes
   */
  attributes?: { [key: string]: any };
  baggageSubContentVisualizes?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizes[];
  baggageSubContents?: TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContents[];
  /**
   * @example
   * demo
   */
  content?: string;
  /**
   * @example
   * true
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
      attributes: 'attributes',
      baggageSubContentVisualizes: 'baggage_sub_content_visualizes',
      baggageSubContents: 'baggage_sub_contents',
      content: 'content',
      isStruct: 'is_struct',
      ptc: 'ptc',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      baggageSubContentVisualizes: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizes },
      baggageSubContents: { 'type': 'array', 'itemType': TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContents },
      content: 'string',
      isStruct: 'boolean',
      ptc: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(Array.isArray(this.baggageSubContentVisualizes)) {
      $dara.Model.validateArray(this.baggageSubContentVisualizes);
    }
    if(Array.isArray(this.baggageSubContents)) {
      $dara.Model.validateArray(this.baggageSubContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

