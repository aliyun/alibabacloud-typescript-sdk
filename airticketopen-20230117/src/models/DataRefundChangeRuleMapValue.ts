// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataRefundChangeRuleMapValueRefundRuleAllUnusedList extends $dara.Model {
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
   * 200
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
   * 100
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

export class DataRefundChangeRuleMapValueRefundRulePartUnusedList extends $dara.Model {
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
   * 200
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
   * 100
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

export class DataRefundChangeRuleMapValueChangeRuleInUnusedList extends $dara.Model {
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
   * 100
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

export class DataRefundChangeRuleMapValueChangeRuleOutUnusedList extends $dara.Model {
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
   * 100
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

export class DataRefundChangeRuleMapValue extends $dara.Model {
  /**
   * @remarks
   * refund rule for fully-unused tickets
   */
  refundRuleAllUnusedList?: DataRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  /**
   * @remarks
   * refund rule for partially-used tickets
   */
  refundRulePartUnusedList?: DataRefundChangeRuleMapValueRefundRulePartUnusedList[];
  /**
   * @remarks
   * change rule for inbound segment unused tickets
   */
  changeRuleInUnusedList?: DataRefundChangeRuleMapValueChangeRuleInUnusedList[];
  /**
   * @remarks
   * change rule for outbound-flight-unused tickets
   */
  changeRuleOutUnusedList?: DataRefundChangeRuleMapValueChangeRuleOutUnusedList[];
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
      refundRuleAllUnusedList: { 'type': 'array', 'itemType': DataRefundChangeRuleMapValueRefundRuleAllUnusedList },
      refundRulePartUnusedList: { 'type': 'array', 'itemType': DataRefundChangeRuleMapValueRefundRulePartUnusedList },
      changeRuleInUnusedList: { 'type': 'array', 'itemType': DataRefundChangeRuleMapValueChangeRuleInUnusedList },
      changeRuleOutUnusedList: { 'type': 'array', 'itemType': DataRefundChangeRuleMapValueChangeRuleOutUnusedList },
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

