// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList extends $dara.Model {
  /**
   * @remarks
   * The type of itinerary this refund rule applies to 0: fully unused; 1: partially unused
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * Time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * The start time of the refund time interval for this refund rule, in units of (days/hours)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * The end time of the refund time interval for this refund rule, in units of (days/hours)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * Whether a refund is allowed X-Y hours (days) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * Refund fee X-Y hours (days) before departure
   * 
   * @example
   * 20
   */
  refundFee?: number;
  /**
   * @remarks
   * Whether full tax refund is allowed X-Y hours (days) before departure
   * 
   * @example
   * true
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * Partial tax refund amount X-Y hours (days) before departure
   * 
   * @example
   * 20
   */
  returnPartTaxFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canRefund: 'can_refund',
      refundFee: 'refund_fee',
      canReturnAllTax: 'can_return_all_tax',
      returnPartTaxFee: 'return_part_tax_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canRefund: 'boolean',
      refundFee: 'number',
      canReturnAllTax: 'boolean',
      returnPartTaxFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList extends $dara.Model {
  /**
   * @remarks
   * The type of itinerary usage for this refund rule. 0: Entirely unused; 1: Partially unused
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * Time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * The start time of the refund time interval for this refund rule, in units of days/hours
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * The end time of the refund time interval for this refund rule, in units of days/hours
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * Whether a refund is allowed X-Y hours (days) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * Refund fee X-Y hours (days) before departure
   * 
   * @example
   * 20
   */
  refundFee?: number;
  /**
   * @remarks
   * Whether full tax refund is allowed X-Y hours (days) before departure
   * 
   * @example
   * 30
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * Partial tax refund amount X-Y hours (days) before departure
   * 
   * @example
   * 20
   */
  returnPartTaxFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canRefund: 'can_refund',
      refundFee: 'refund_fee',
      canReturnAllTax: 'can_return_all_tax',
      returnPartTaxFee: 'return_part_tax_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canRefund: 'boolean',
      refundFee: 'number',
      canReturnAllTax: 'boolean',
      returnPartTaxFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList extends $dara.Model {
  /**
   * @remarks
   * Type of itinerary usage for the change rule 2: outbound unused; 3: return unused
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * Time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * Start time of the refund time interval, in units of days/hours, to which this refund rule applies
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * End time of the refund time interval, in units of days/hours, to which this refund rule applies
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * Whether it is possible to change the ticket X-Y hours (days) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * Change fee X-Y hours (days) before departure
   * 
   * @example
   * 20
   */
  changeFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canChange: 'can_change',
      changeFee: 'change_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canChange: 'boolean',
      changeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList extends $dara.Model {
  /**
   * @remarks
   * The type of itinerary usage for this change rule 2: unused outbound; 3: unused return
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * Time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * Start time of the refund time interval for this refund rule, in days/hours
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * End time of the refund time interval for this refund rule, in days/hours
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * Whether it is possible to change the ticket X-Y hours (days) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * Change fee X-Y hours (days) before departure
   * 
   * @example
   * 10
   */
  changeFee?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      timeUnit: 'time_unit',
      ruleStartTime: 'rule_start_time',
      ruleEndTime: 'rule_end_time',
      canChange: 'can_change',
      changeFee: 'change_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      timeUnit: 'string',
      ruleStartTime: 'number',
      ruleEndTime: 'number',
      canChange: 'boolean',
      changeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue extends $dara.Model {
  /**
   * @remarks
   * Full unused ticket refund rules
   */
  refundRuleAllUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  /**
   * @remarks
   * Partial unused ticket refund rules
   */
  refundRulePartUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList[];
  /**
   * @remarks
   * Unused return flight change rules
   */
  changeRuleInUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList[];
  /**
   * @remarks
   * Unused outbound change rules
   */
  changeRuleOutUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList[];
  static names(): { [key: string]: string } {
    return {
      refundRuleAllUnusedList: 'refund_rule_all_unused_list',
      refundRulePartUnusedList: 'refund_rule_part_unused_list',
      changeRuleInUnusedList: 'change_rule_in_unused_list',
      changeRuleOutUnusedList: 'change_rule_out_unused_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      refundRuleAllUnusedList: { 'type': 'array', 'itemType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList },
      refundRulePartUnusedList: { 'type': 'array', 'itemType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList },
      changeRuleInUnusedList: { 'type': 'array', 'itemType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList },
      changeRuleOutUnusedList: { 'type': 'array', 'itemType': DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList },
    };
  }

  validate() {
    if(Array.isArray(this.refundRuleAllUnusedList)) {
      $dara.Model.validateArray(this.refundRuleAllUnusedList);
    }
    if(Array.isArray(this.refundRulePartUnusedList)) {
      $dara.Model.validateArray(this.refundRulePartUnusedList);
    }
    if(Array.isArray(this.changeRuleInUnusedList)) {
      $dara.Model.validateArray(this.changeRuleInUnusedList);
    }
    if(Array.isArray(this.changeRuleOutUnusedList)) {
      $dara.Model.validateArray(this.changeRuleOutUnusedList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

