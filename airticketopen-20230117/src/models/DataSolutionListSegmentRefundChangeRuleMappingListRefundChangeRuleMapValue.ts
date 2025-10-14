// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList extends $dara.Model {
  /**
   * @remarks
   * type: 0 - fully-unused ticket; 1 - partially used ticket
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable refund rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable refund rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * refund fee X-Y hour(day) before departure
   * 
   * @example
   * 20
   */
  refundFee?: number;
  /**
   * @remarks
   * whether tax is fully refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * tax amount refundable X-Y hour(day) before departure
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
   * type: 0 - fully-unused ticket; 1 - partially used ticket
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable refund rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable refund rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether refundable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * refund fee X-Y hour(day) before departure
   * 
   * @example
   * 20
   */
  refundFee?: number;
  /**
   * @remarks
   * whether tax is fully refundable X-Y hour(day) before departure
   * 
   * @example
   * 30
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * tax amount refundable X-Y hour(day) before departure
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
   * type: 2 - outbound segment unused; 3 - inbound segment unused
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable change rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable change rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether changeable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * change fee X-Y hour(day) before departure
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
   * type: 2 - outbound segment unused; 3 - inbound segment unused
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * time unit: day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * applicable change rule start time, time unit (day/hour)
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * applicable change rule end time, time unit (day/hour)
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * whether changeable X-Y hour(day) before departure
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * change fee X-Y hour(day) before departure
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
   * refund rule for fully-unused tickets
   */
  refundRuleAllUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  /**
   * @remarks
   * refund rule for partially-used tickets
   */
  refundRulePartUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList[];
  /**
   * @remarks
   * change rule for inbound segment unused tickets
   */
  changeRuleInUnusedList?: DataSolutionListSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList[];
  /**
   * @remarks
   * change rule for outbound segment unused tickets
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

