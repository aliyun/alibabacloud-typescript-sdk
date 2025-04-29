// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItem } from "./FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItem";
import { FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRule } from "./FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRule";
import { FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem } from "./FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem";
import { FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRule } from "./FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRule";
import { FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem } from "./FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem";
import { FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRule } from "./FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRule";
import { FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule } from "./FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule";


export class FlightOtaSearchResponseBodyModuleFlightListFlightRuleList extends $dara.Model {
  /**
   * @example
   * demo
   */
  baggageInfo?: string;
  baggageItem?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItem;
  changeRule?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRule;
  changeRuleItem?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem;
  /**
   * @example
   * {}
   */
  extra?: string;
  refundRule?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRule;
  refundRuleItem?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem;
  signRule?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRule;
  tuigaiqianInfo?: string;
  upgradeRule?: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule;
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
      baggageItem: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListBaggageItem,
      changeRule: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRule,
      changeRuleItem: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListChangeRuleItem,
      extra: 'string',
      refundRule: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRule,
      refundRuleItem: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListRefundRuleItem,
      signRule: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListSignRule,
      tuigaiqianInfo: 'string',
      upgradeRule: FlightOtaSearchResponseBodyModuleFlightListFlightRuleListUpgradeRule,
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

