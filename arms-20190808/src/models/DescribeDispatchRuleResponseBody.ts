// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDispatchRuleResponseBodyDispatchRuleGroupRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * The grouping interval.
   * 
   * @example
   * 15
   */
  groupInterval?: number;
  /**
   * @remarks
   * The waiting time for grouping.
   * 
   * @example
   * 10
   */
  groupWaitTime?: number;
  /**
   * @remarks
   * The grouping fields.
   */
  groupingFields?: string[];
  /**
   * @remarks
   * The time interval at which a notification is resent for a long-lasting unresolved alert. Unit: seconds.
   * 
   * @example
   * 20
   */
  repeatInterval?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupInterval: 'GroupInterval',
      groupWaitTime: 'GroupWaitTime',
      groupingFields: 'GroupingFields',
      repeatInterval: 'RepeatInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupInterval: 'number',
      groupWaitTime: 'number',
      groupingFields: { 'type': 'array', 'itemType': 'string' },
      repeatInterval: 'number',
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
  /**
   * @remarks
   * The key of the tag of the dispatch rule. Valid values:
   * 
   * *   `_aliyun_arms_userid`: user ID
   * *   `_aliyun_arms_involvedObject_kind`: type of the associated object
   * *   `_aliyun_arms_involvedObject_id`: ID of the associated object
   * *   `_aliyun_arms_involvedObject_name`: name of the associated object
   * *   `_aliyun_arms_alert_name`: alert name
   * *   `_aliyun_arms_alert_rule_id`: alert rule ID
   * *   `_aliyun_arms_alert_type`: alert type
   * *   `_aliyun_arms_alert_level`: alert severity
   * 
   * @example
   * _aliyun_arms_involvedObject_kind
   */
  key?: string;
  /**
   * @remarks
   * The operator used in the dispatch rule. Valid values:
   * 
   * *   `eq`: equals to.
   * *   `re`: matches a regular expression.
   * 
   * @example
   * eq
   */
  operator?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * app
   */
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
  /**
   * @remarks
   * The collection of conditions of the dispatch rule.
   */
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
  /**
   * @remarks
   * The collection of dispatch rules.
   */
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
  /**
   * @remarks
   * The name of the contact or contact group.
   * 
   * @example
   * JohnDoe
   */
  name?: string;
  /**
   * @remarks
   * The ID of the contact or contact group.
   * 
   * @example
   * 1
   */
  notifyObjectId?: string;
  /**
   * @remarks
   * The type of the alert contact. Valid values:
   * 
   * - `CONTACT`: contact
   * - `CONTACT_GROUP`: contact group
   * 
   * @example
   * CONTACT
   */
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
  /**
   * @remarks
   * The notification method Array.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The collection of alert contacts.
   */
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
  /**
   * @remarks
   * Alarm handling method.
   * 
   * CREATE_ALERT: Generate an alert.
   * 
   * DISCARD_ALERT: Discard the alarm event, that is, no alarm.
   * 
   * @example
   * CREATE_ALERT
   */
  dispatchType?: string;
  /**
   * @remarks
   * The information about groups.
   */
  groupRules?: DescribeDispatchRuleResponseBodyDispatchRuleGroupRules[];
  /**
   * @remarks
   * Whether to send recovered alerts.
   * true: send.
   * false: do not send.
   * 
   * @example
   * true
   */
  isRecover?: boolean;
  /**
   * @remarks
   * The information about the dispatch rule.
   */
  labelMatchExpressionGrid?: DescribeDispatchRuleResponseBodyDispatchRuleLabelMatchExpressionGrid;
  /**
   * @remarks
   * The name of the dispatch policy.
   * 
   * @example
   * Prometheus Alert
   */
  name?: string;
  /**
   * @remarks
   * The collection of notification methods.
   */
  notifyRules?: DescribeDispatchRuleResponseBodyDispatchRuleNotifyRules[];
  /**
   * @remarks
   * The ID of the dispatch rule.
   * 
   * @example
   * 10282
   */
  ruleId?: number;
  /**
   * @remarks
   * Indicates whether the dispatch policy is enabled. Valid values: 
   * 
   * - `true`: enabled
   * - `false`: disabled
   * 
   * @example
   * true
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      dispatchType: 'DispatchType',
      groupRules: 'GroupRules',
      isRecover: 'IsRecover',
      labelMatchExpressionGrid: 'LabelMatchExpressionGrid',
      name: 'Name',
      notifyRules: 'NotifyRules',
      ruleId: 'RuleId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dispatchType: 'string',
      groupRules: { 'type': 'array', 'itemType': DescribeDispatchRuleResponseBodyDispatchRuleGroupRules },
      isRecover: 'boolean',
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
  /**
   * @remarks
   * The struct returned.
   */
  dispatchRule?: DescribeDispatchRuleResponseBodyDispatchRule;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34ED024E-9E31-434A-9E4E-D9D15C3****
   */
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

