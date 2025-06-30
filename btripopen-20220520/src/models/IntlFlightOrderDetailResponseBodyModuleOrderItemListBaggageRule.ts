// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleOrderItemListBaggageRuleOfferBaggageInfoMapValue } from "./ModuleOrderItemListBaggageRuleOfferBaggageInfoMapValue";


export class IntlFlightOrderDetailResponseBodyModuleOrderItemListBaggageRule extends $dara.Model {
  baggageDigest?: string;
  offerBaggageInfoMap?: { [key: string]: ModuleOrderItemListBaggageRuleOfferBaggageInfoMapValue[] };
  /**
   * @example
   * true
   */
  structuredBaggage?: boolean;
  static names(): { [key: string]: string } {
    return {
      baggageDigest: 'baggage_digest',
      offerBaggageInfoMap: 'offer_baggage_info_map',
      structuredBaggage: 'structured_baggage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDigest: 'string',
      offerBaggageInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleOrderItemListBaggageRuleOfferBaggageInfoMapValue } },
      structuredBaggage: 'boolean',
    };
  }

  validate() {
    if(this.offerBaggageInfoMap) {
      $dara.Model.validateMap(this.offerBaggageInfoMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

