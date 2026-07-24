// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList extends $dara.Model {
  /**
   * @remarks
   * 该退票规则适用航程使用类型 0:全程未使用; 1:部分未使用
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * 时间单位：day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * 该退票规则适用于的退票时间区间开始时间，单位（天/小时）
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * 该退票规则适用于的退票时间区间结束时间，单位（天/小时）
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 可否退票
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 退票手续费
   * 
   * @example
   * 200
   */
  refundFee?: number;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 是否全额退税
   * 
   * @example
   * true
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 可部分退税金额
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

export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList extends $dara.Model {
  /**
   * @remarks
   * 该退票规则适用航程使用类型 0:全程未使用; 1:部分未使用
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * 时间单位：day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * 该退票规则适用于的退票时间区间开始时间，单位（天/小时）
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * 该退票规则适用于的退票时间区间结束时间，单位（天/小时）
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 可否退票
   * 
   * @example
   * true
   */
  canRefund?: boolean;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 退票手续费
   * 
   * @example
   * 200
   */
  refundFee?: number;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 是否全额退税
   * 
   * @example
   * true
   */
  canReturnAllTax?: boolean;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 可部分退税金额
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

export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList extends $dara.Model {
  /**
   * @remarks
   * 该改签规则适用航程使用类型 2:去程未使用; 3:回程未使用
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * 时间单位：day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * 该退票规则适用于的退票时间区间开始时间，单位（天/小时）
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * 该退票规则适用于的退票时间区间结束时间，单位（天/小时）
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 可否可以改签
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 改签费
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

export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList extends $dara.Model {
  /**
   * @remarks
   * 该改签规则适用航程使用类型 2:去程未使用; 3:回程未使用
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * 时间单位：day/hour
   * 
   * @example
   * hour
   */
  timeUnit?: string;
  /**
   * @remarks
   * 该退票规则适用于的退票时间区间开始时间，单位（天/小时）
   * 
   * @example
   * 36
   */
  ruleStartTime?: number;
  /**
   * @remarks
   * 该退票规则适用于的退票时间区间结束时间，单位（天/小时）
   * 
   * @example
   * 12
   */
  ruleEndTime?: number;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 可否可以改签
   * 
   * @example
   * true
   */
  canChange?: boolean;
  /**
   * @remarks
   * 起飞前X-Y小时(天) 改签费
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

export class DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValue extends $dara.Model {
  /**
   * @remarks
   * 全程未使用退票规则
   */
  refundRuleAllUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList[];
  /**
   * @remarks
   * 部分未使用退票规则
   */
  refundRulePartUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList[];
  /**
   * @remarks
   * 回程未使用改签规则
   */
  changeRuleInUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList[];
  /**
   * @remarks
   * 去程未使用改签规则
   */
  changeRuleOutUnusedList?: DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList[];
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
      refundRuleAllUnusedList: { 'type': 'array', 'itemType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRuleAllUnusedList },
      refundRulePartUnusedList: { 'type': 'array', 'itemType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueRefundRulePartUnusedList },
      changeRuleInUnusedList: { 'type': 'array', 'itemType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleInUnusedList },
      changeRuleOutUnusedList: { 'type': 'array', 'itemType': DataSolutionSegmentRefundChangeRuleMappingListRefundChangeRuleMapValueChangeRuleOutUnusedList },
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

