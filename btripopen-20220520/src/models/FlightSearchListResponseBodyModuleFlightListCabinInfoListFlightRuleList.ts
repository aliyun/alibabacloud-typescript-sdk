// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem } from "./FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem";
import { FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule } from "./FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule";
import { FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem } from "./FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem";
import { FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule } from "./FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule";
import { FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem } from "./FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem";
import { FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule } from "./FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule";
import { FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule } from "./FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule";


export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleList extends $dara.Model {
  /**
   * @example
   * demo
   */
  baggageInfo?: string;
  baggageItem?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem;
  changeRule?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule;
  changeRuleItem?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem;
  /**
   * @example
   * {}
   */
  extra?: string;
  refundRule?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule;
  refundRuleItem?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem;
  signRule?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule;
  tuigaiqianInfo?: string;
  upgradeRule?: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule;
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
      baggageItem: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItem,
      changeRule: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRule,
      changeRuleItem: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListChangeRuleItem,
      extra: 'string',
      refundRule: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRule,
      refundRuleItem: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListRefundRuleItem,
      signRule: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListSignRule,
      tuigaiqianInfo: 'string',
      upgradeRule: FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListUpgradeRule,
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

