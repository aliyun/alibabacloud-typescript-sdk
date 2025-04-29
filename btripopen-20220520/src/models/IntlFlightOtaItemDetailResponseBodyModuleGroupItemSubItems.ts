// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItemsBaggageRule } from "./IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItemsBaggageRule";
import { IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItemsRefundChangeRule } from "./IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItemsRefundChangeRule";
import { ModuleGroupItemSubItemsShoppingItemMapValue } from "./ModuleGroupItemSubItemsShoppingItemMapValue";


export class IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItems extends $dara.Model {
  baggageRule?: IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItemsBaggageRule;
  refundChangeRule?: IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItemsRefundChangeRule;
  segmentKeys?: string[];
  shoppingItemMap?: { [key: string]: ModuleGroupItemSubItemsShoppingItemMapValue };
  /**
   * @example
   * 23412341234124
   */
  uniqKey?: string;
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      refundChangeRule: 'refund_change_rule',
      segmentKeys: 'segment_keys',
      shoppingItemMap: 'shopping_item_map',
      uniqKey: 'uniq_key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItemsBaggageRule,
      refundChangeRule: IntlFlightOtaItemDetailResponseBodyModuleGroupItemSubItemsRefundChangeRule,
      segmentKeys: { 'type': 'array', 'itemType': 'string' },
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleGroupItemSubItemsShoppingItemMapValue },
      uniqKey: 'string',
    };
  }

  validate() {
    if(this.baggageRule && typeof (this.baggageRule as any).validate === 'function') {
      (this.baggageRule as any).validate();
    }
    if(this.refundChangeRule && typeof (this.refundChangeRule as any).validate === 'function') {
      (this.refundChangeRule as any).validate();
    }
    if(Array.isArray(this.segmentKeys)) {
      $dara.Model.validateArray(this.segmentKeys);
    }
    if(this.shoppingItemMap) {
      $dara.Model.validateMap(this.shoppingItemMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

