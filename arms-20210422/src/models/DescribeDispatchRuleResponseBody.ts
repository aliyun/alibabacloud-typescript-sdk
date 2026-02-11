// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDispatchRuleResponseBodyDispatchRuleGroupRules extends $dara.Model {
  groupId?: number;
  groupInterval?: number;
  groupWaitTime?: number;
  groupingFields?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupInterval: 'GroupInterval',
      groupWaitTime: 'GroupWaitTime',
      groupingFields: 'GroupingFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupInterval: 'number',
      groupWaitTime: 'number',
      groupingFields: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupingFields)) {
      $dara.Model.validateArray(this.groupingFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions extends $dara.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups extends $dara.Model {
  labelMatchExpressions?: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressions: 'LabelMatchExpressions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressions: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroupsLabelMatchExpressions },
    };
  }

  validate() {
    if(Array.isArray(this.labelMatchExpressions)) {
      $dara.Model.validateArray(this.labelMatchExpressions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid extends $dara.Model {
  labelMatchExpressionGroups?: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups[];
  static names(): { [key: string]: string } {
    return {
      labelMatchExpressionGroups: 'LabelMatchExpressionGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelMatchExpressionGroups: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGridLabelMatchExpressionGroups },
    };
  }

  validate() {
    if(Array.isArray(this.labelMatchExpressionGroups)) {
      $dara.Model.validateArray(this.labelMatchExpressionGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleNotifyRulesNotifyObjects extends $dara.Model {
  name?: string;
  notifyObjectId?: string;
  notifyType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      notifyObjectId: 'NotifyObjectId',
      notifyType: 'NotifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      notifyObjectId: 'string',
      notifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules extends $dara.Model {
  notifyChannels?: string[];
  notifyObjects?: DescribeDispatchRuleResponseBodyDispatchRuleNotifyRulesNotifyObjects[];
  static names(): { [key: string]: string } {
    return {
      notifyChannels: 'NotifyChannels',
      notifyObjects: 'NotifyObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyObjects: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleNotifyRulesNotifyObjects },
    };
  }

  validate() {
    if(Array.isArray(this.notifyChannels)) {
      $dara.Model.validateArray(this.notifyChannels);
    }
    if(Array.isArray(this.notifyObjects)) {
      $dara.Model.validateArray(this.notifyObjects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBodyDispatchRule extends $dara.Model {
  groupRules?: DescribeDispatchRuleResponseBodyDispatchRuleGroupRules[];
  labelMatchExpressionGrid?: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid;
  name?: string;
  notifyRules?: DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules[];
  ruleId?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      groupRules: 'GroupRules',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
      name: 'Name',
      notifyRules: 'NotifyRules',
      ruleId: 'RuleId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleGroupRules },
      labelMatchExpressionGrid: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid,
      name: 'string',
      notifyRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules },
      ruleId: 'number',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupRules)) {
      $dara.Model.validateArray(this.groupRules);
    }
    if(this.labelMatchExpressionGrid && typeof (this.labelMatchExpressionGrid as any).validate === 'function') {
      (this.labelMatchExpressionGrid as any).validate();
    }
    if(Array.isArray(this.notifyRules)) {
      $dara.Model.validateArray(this.notifyRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDispatchRuleResponseBody extends $dara.Model {
  dispatchRule?: DescribeDispatchRuleResponseBodyDispatchRule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchRule: 'DispatchRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchRule: DescribeDispatchRuleResponseBodyDispatchRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dispatchRule && typeof (this.dispatchRule as any).validate === 'function') {
      (this.dispatchRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

