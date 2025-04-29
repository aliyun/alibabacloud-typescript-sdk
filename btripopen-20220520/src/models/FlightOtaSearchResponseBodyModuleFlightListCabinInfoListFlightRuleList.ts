// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem";
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule";
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem";
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule";
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem";
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule";
import { FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule } from "./FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule";


export class FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleList extends $dara.Model {
  /**
   * @example
   * demo
   */
  baggageInfo?: string;
  baggageItem?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem;
  changeRule?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule;
  changeRuleItem?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem;
  /**
   * @example
   * {}
   */
  extra?: string;
  refundRule?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule;
  refundRuleItem?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem;
  signRule?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule;
  tuigaiqianInfo?: string;
  upgradeRule?: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule;
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
      baggageItem: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem,
      changeRule: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule,
      changeRuleItem: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem,
      extra: 'string',
      refundRule: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule,
      refundRuleItem: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem,
      signRule: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule,
      tuigaiqianInfo: 'string',
      upgradeRule: FlightOtaSearchResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule,
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

