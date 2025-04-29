// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TravelStandardListQueryResponseBodyModuleItemsMainReserveRule } from "./TravelStandardListQueryResponseBodyModuleItemsMainReserveRule";
import { TravelStandardListQueryResponseBodyModuleItemsReserveRuleDesc } from "./TravelStandardListQueryResponseBodyModuleItemsReserveRuleDesc";


export class TravelStandardListQueryResponseBodyModuleItems extends $dara.Model {
  mainReserveRule?: TravelStandardListQueryResponseBodyModuleItemsMainReserveRule;
  reserveRuleDesc?: TravelStandardListQueryResponseBodyModuleItemsReserveRuleDesc[];
  /**
   * @example
   * 1
   */
  scope?: number;
  static names(): { [key: string]: string } {
    return {
      mainReserveRule: 'main_reserve_rule',
      reserveRuleDesc: 'reserve_rule_desc',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainReserveRule: TravelStandardListQueryResponseBodyModuleItemsMainReserveRule,
      reserveRuleDesc: { 'type': 'array', 'itemType': TravelStandardListQueryResponseBodyModuleItemsReserveRuleDesc },
      scope: 'number',
    };
  }

  validate() {
    if(this.mainReserveRule && typeof (this.mainReserveRule as any).validate === 'function') {
      (this.mainReserveRule as any).validate();
    }
    if(Array.isArray(this.reserveRuleDesc)) {
      $dara.Model.validateArray(this.reserveRuleDesc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

