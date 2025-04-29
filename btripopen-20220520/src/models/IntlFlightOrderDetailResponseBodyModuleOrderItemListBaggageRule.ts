// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleOrderItemListBaggageRuleBaggageInfoMapValue } from "./ModuleOrderItemListBaggageRuleBaggageInfoMapValue";


export class IntlFlightOrderDetailResponseBodyModuleOrderItemListBaggageRule extends $dara.Model {
  baggageDigest?: string;
  baggageInfoMap?: { [key: string]: ModuleOrderItemListBaggageRuleBaggageInfoMapValue[] };
  /**
   * @example
   * true
   */
  structuredBaggage?: boolean;
  static names(): { [key: string]: string } {
    return {
      baggageDigest: 'baggage_digest',
      baggageInfoMap: 'baggage_info_map',
      structuredBaggage: 'structured_baggage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDigest: 'string',
      baggageInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleOrderItemListBaggageRuleBaggageInfoMapValue } },
      structuredBaggage: 'boolean',
    };
  }

  validate() {
    if(this.baggageInfoMap) {
      $dara.Model.validateMap(this.baggageInfoMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

