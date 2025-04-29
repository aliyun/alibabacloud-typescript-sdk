// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModuleGroupItemSubItemsBaggageRuleBaggageInfoMapValue } from "./ModuleGroupItemSubItemsBaggageRuleBaggageInfoMapValue";


export class IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItemsBaggageRule extends $dara.Model {
  baggageDigest?: string;
  baggageInfoMap?: { [key: string]: ModuleGroupItemSubItemsBaggageRuleBaggageInfoMapValue[] };
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
      baggageInfoMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': ModuleGroupItemSubItemsBaggageRuleBaggageInfoMapValue } },
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

