// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomEventRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact group that receives alert notifications. Separate multiple contact groups with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ECS_Group
   */
  contactGroups?: string;
  /**
   * @remarks
   * The time period during which the alert rule is effective. Valid values: 00:00 to 23:59.
   * 
   * @example
   * 00:00-23:59
   */
  effectiveInterval?: string;
  /**
   * @remarks
   * The subject of the alert notification email.
   */
  emailSubject?: string;
  /**
   * @remarks
   * The name of the custom event. For more information about how to obtain the event name, see [DescribeCustomEventAttribute](https://help.aliyun.com/document_detail/115262.html).
   * 
   * This parameter is required.
   * 
   * @example
   * HostDown
   */
  eventName?: string;
  /**
   * @remarks
   * The ID of the application group. For more information about how to obtain the group ID, see [DescribeCustomEventAttribute](https://help.aliyun.com/document_detail/115262.html).
   * 
   * >  The value 0 indicates that the reported custom event does not belong to any application Group.
   * 
   * This parameter is required.
   * 
   * @example
   * 7378****
   */
  groupId?: string;
  /**
   * @remarks
   * The level of the alert. Valid values:
   * 
   * *   CRITICAL: critical issue
   * *   WARN: warning
   * *   INFO: information
   * 
   * This parameter is required.
   * 
   * @example
   * CRITICAL
   */
  level?: string;
  /**
   * @remarks
   * The cycle that is used to aggregate monitoring data of the custom event. Unit: seconds. Set the value to an integral multiple of 60. Default value: 300.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * >  You can specify an existing ID to modify the corresponding alert rule or specify a new ID to create an alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * CustomRuleId1
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * CustomeRule
   */
  ruleName?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 99
   */
  threshold?: string;
  /**
   * @remarks
   * The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
   * 
   * @example
   * https://www.aliyun.com
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      effectiveInterval: 'EffectiveInterval',
      emailSubject: 'EmailSubject',
      eventName: 'EventName',
      groupId: 'GroupId',
      level: 'Level',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      threshold: 'Threshold',
      webhook: 'Webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: 'string',
      effectiveInterval: 'string',
      emailSubject: 'string',
      eventName: 'string',
      groupId: 'string',
      level: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      threshold: 'string',
      webhook: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

