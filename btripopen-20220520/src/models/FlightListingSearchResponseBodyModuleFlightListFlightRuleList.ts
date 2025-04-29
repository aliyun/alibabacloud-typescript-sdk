// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItem } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItem";
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListChangeRule } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListChangeRule";
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem";
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRule } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRule";
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem";
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListSignRule } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListSignRule";
import { FlightListingSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule } from "./FlightListingSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule";


export class FlightListingSearchResponseBodyModuleFlightListFlightRuleList extends $dara.Model {
  /**
   * @example
   * demo
   */
  baggageInfo?: string;
  baggageItem?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItem;
  changeRule?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListChangeRule;
  changeRuleItem?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem;
  /**
   * @example
   * {}
   */
  extra?: string;
  refundRule?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRule;
  refundRuleItem?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem;
  signRule?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListSignRule;
  tuigaiqianInfo?: string;
  upgradeRule?: FlightListingSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule;
  static names(): { [key: string]: string } {
    return {
      baggageInfo: 'baggage_info',
      baggageItem: 'baggage_item',
      changeRule: 'change_rule',
      changeRuleItem: 'change_rule_item',
      extra: 'extra',
      refundRule: 'refund_rule',
      refundRuleItem: 'refund_rule_item',
      signRule: 'sign_rule',
      tuigaiqianInfo: 'tuigaiqian_info',
      upgradeRule: 'upgrade_rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageInfo: 'string',
      baggageItem: FlightListingSearchResponseBodyModuleFlightListFlightRuleListBaggageItem,
      changeRule: FlightListingSearchResponseBodyModuleFlightListFlightRuleListChangeRule,
      changeRuleItem: FlightListingSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem,
      extra: 'string',
      refundRule: FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRule,
      refundRuleItem: FlightListingSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem,
      signRule: FlightListingSearchResponseBodyModuleFlightListFlightRuleListSignRule,
      tuigaiqianInfo: 'string',
      upgradeRule: FlightListingSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule,
    };
  }

  validate() {
    if(this.baggageItem && typeof (this.baggageItem as any).validate === 'function') {
      (this.baggageItem as any).validate();
    }
    if(this.changeRule && typeof (this.changeRule as any).validate === 'function') {
      (this.changeRule as any).validate();
    }
    if(this.changeRuleItem && typeof (this.changeRuleItem as any).validate === 'function') {
      (this.changeRuleItem as any).validate();
    }
    if(this.refundRule && typeof (this.refundRule as any).validate === 'function') {
      (this.refundRule as any).validate();
    }
    if(this.refundRuleItem && typeof (this.refundRuleItem as any).validate === 'function') {
      (this.refundRuleItem as any).validate();
    }
    if(this.signRule && typeof (this.signRule as any).validate === 'function') {
      (this.signRule as any).validate();
    }
    if(this.upgradeRule && typeof (this.upgradeRule as any).validate === 'function') {
      (this.upgradeRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

