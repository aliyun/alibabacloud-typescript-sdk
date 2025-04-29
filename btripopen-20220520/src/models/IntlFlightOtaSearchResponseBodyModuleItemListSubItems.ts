// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOtaSearchResponseBodyModuleItemListSubItemsBaggageRule } from "./IntlFlightOtaSearchResponseBodyModuleItemListSubItemsBaggageRule";
import { IntlFlightOtaSearchResponseBodyModuleItemListSubItemsRefundChangeRule } from "./IntlFlightOtaSearchResponseBodyModuleItemListSubItemsRefundChangeRule";
import { ModuleItemListSubItemsShoppingItemMapValue } from "./ModuleItemListSubItemsShoppingItemMapValue";


export class IntlFlightOtaSearchResponseBodyModuleItemListSubItems extends $dara.Model {
  baggageRule?: IntlFlightOtaSearchResponseBodyModuleItemListSubItemsBaggageRule;
  refundChangeRule?: IntlFlightOtaSearchResponseBodyModuleItemListSubItemsRefundChangeRule;
  segmentKeys?: string[];
  shoppingItemMap?: { [key: string]: ModuleItemListSubItemsShoppingItemMapValue };
  /**
   * @example
   * 07df0bd9-f803-4a50-8449-f4bd675d9939
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
      baggageRule: IntlFlightOtaSearchResponseBodyModuleItemListSubItemsBaggageRule,
      refundChangeRule: IntlFlightOtaSearchResponseBodyModuleItemListSubItemsRefundChangeRule,
      segmentKeys: { 'type': 'array', 'itemType': 'string' },
      shoppingItemMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModuleItemListSubItemsShoppingItemMapValue },
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

