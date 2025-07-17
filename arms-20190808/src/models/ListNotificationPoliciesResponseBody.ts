// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesGroupRule extends $dara.Model {
  /**
   * @remarks
   * The time interval of grouping. Unit: seconds. Default value: 30.
   * 
   * @example
   * 30
   */
  groupInterval?: number;
  /**
   * @remarks
   * The waiting time for grouping. Unit: seconds. Default value: 5.
   * 
   * @example
   * 5
   */
  groupWait?: number;
  /**
   * @remarks
   * An array of alert event group objects.
   * 
   * *   If you do not specify the groupingFields field, all alerts will be sent to contacts based on `alertname`.
   * *   If you specify the groupingFields field, alerts with the same field will be sent to contacts in one notification.
   */
  groupingFields?: string[];
  static names(): { [key: string]: string } {
    return {
      groupInterval: 'GroupInterval',
      groupWait: 'GroupWait',
      groupingFields: 'GroupingFields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupInterval: 'number',
      groupWait: 'number',
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

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRulesMatchingConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the matching condition.
   * 
   * @example
   * altertname
   */
  key?: string;
  /**
   * @remarks
   * The logical operator of the matching condition. Valid values:
   * 
   * *   `eq`: equal to
   * *   `neq`: not equal to
   * *   `in`: contains
   * *   `nin`: does not contain
   * *   `re`: regular expression match
   * *   `nre`: regular expression mismatch
   * 
   * @example
   * eq
   */
  operator?: string;
  /**
   * @remarks
   * The value of the matching condition.
   * 
   * @example
   * test
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

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRules extends $dara.Model {
  /**
   * @remarks
   * The matching conditions.
   */
  matchingConditions?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRulesMatchingConditions },
    };
  }

  validate() {
    if(Array.isArray(this.matchingConditions)) {
      $dara.Model.validateArray(this.matchingConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRuleNotifyObjects extends $dara.Model {
  /**
   * @remarks
   * The notification methods specified for a contact.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The ID of the notification object.
   * 
   * @example
   * 123
   */
  notifyObjectId?: number;
  /**
   * @remarks
   * The name of the notification object.
   * 
   * @example
   * test
   */
  notifyObjectName?: string;
  /**
   * @remarks
   * The type of the notification object. Valid values:
   * 
   * - CONTACT: an individual contact
   * - CONTACT_GROUP: a contact group
   * - DING_ROBOT: an instant messaging (IM) chatbot
   * - CONTACT_SCHEDULE: a person on duty based on an established schedule
   * 
   * @example
   * CONTACT
   */
  notifyObjectType?: string;
  static names(): { [key: string]: string } {
    return {
      notifyChannels: 'NotifyChannels',
      notifyObjectId: 'NotifyObjectId',
      notifyObjectName: 'NotifyObjectName',
      notifyObjectType: 'NotifyObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyObjectId: 'number',
      notifyObjectName: 'string',
      notifyObjectType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.notifyChannels)) {
      $dara.Model.validateArray(this.notifyChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRule extends $dara.Model {
  /**
   * @remarks
   * The notification method.
   */
  notifyChannels?: string[];
  /**
   * @remarks
   * The end time of the notification window.
   * 
   * @example
   * 23:59
   */
  notifyEndTime?: string;
  /**
   * @remarks
   * The notification objects.
   */
  notifyObjects?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRuleNotifyObjects[];
  /**
   * @remarks
   * The start time of the notification window.
   * 
   * @example
   * 00:00
   */
  notifyStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      notifyChannels: 'NotifyChannels',
      notifyEndTime: 'NotifyEndTime',
      notifyObjects: 'NotifyObjects',
      notifyStartTime: 'NotifyStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      notifyEndTime: 'string',
      notifyObjects: { 'type': 'array', 'itemType': ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRuleNotifyObjects },
      notifyStartTime: 'string',
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

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyTemplate extends $dara.Model {
  /**
   * @remarks
   * The content of the alert notification sent by email.
   * 
   * @example
   * Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert time: {{ .startTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{if .generatorURL }} \\<a href="{{.generatorURL}}" >Link\\</a> {{end}} {{end}}
   */
  emailContent?: string;
  /**
   * @remarks
   * The content of the alert resolution notification sent by email.
   * 
   * @example
   * Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert resolution time: {{ .endTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{if .generatorURL }} \\<a href="{{.generatorURL}}" >Link\\</a> {{end}} {{end}}
   */
  emailRecoverContent?: string;
  /**
   * @remarks
   * The title of the alert resolution notification sent by email.
   * 
   * @example
   * {{ .commonLabels.alertname }}
   */
  emailRecoverTitle?: string;
  /**
   * @remarks
   * The title of the alert notification sent by email.
   * 
   * @example
   * {{ .commonLabels.alertname }}
   */
  emailTitle?: string;
  /**
   * @remarks
   * The content of the alert notification sent by an IM chatbot.
   * 
   * @example
   * {{if .commonLabels.clustername }} > Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} > Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}{{ for .alerts }}> {{.annotations.message}} {{if .generatorURL }} [Link]\\({{.generatorURL}}) {{ end }} {{if eq "true" .labels._aliyun_arms_is_denoise_filtered }} (Suspected noise) {{end}} {{end}}
   */
  robotContent?: string;
  /**
   * @remarks
   * The content of the alert notification sent by text message.
   * 
   * @example
   * \\<SmsContent>Notification on the occurrence of a {{ .level }} alert. Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert time: {{ .startTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{ end }}\\</SmsContent>
   */
  smsContent?: string;
  /**
   * @remarks
   * The content of the alert resolution notification sent by text message.
   * 
   * @example
   * \\<SmsRecoverContent>Alert resolution notification. Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert resolution time: {{ .endTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{ end }}\\</SmsRecoverContent>
   */
  smsRecoverContent?: string;
  /**
   * @remarks
   * The content of the alert notification sent by phone.
   * 
   * @example
   * \\<TtsContent>Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert time: {{ .startTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{ end }}\\</TtsContent>
   */
  ttsContent?: string;
  /**
   * @remarks
   * The content of the alert resolution notification sent by phone.
   * 
   * @example
   * \\<TtsRecoverContent>Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert resolution time: {{ .endTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{ end }}\\</TtsRecoverContent>
   */
  ttsRecoverContent?: string;
  static names(): { [key: string]: string } {
    return {
      emailContent: 'EmailContent',
      emailRecoverContent: 'EmailRecoverContent',
      emailRecoverTitle: 'EmailRecoverTitle',
      emailTitle: 'EmailTitle',
      robotContent: 'RobotContent',
      smsContent: 'SmsContent',
      smsRecoverContent: 'SmsRecoverContent',
      ttsContent: 'TtsContent',
      ttsRecoverContent: 'TtsRecoverContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emailContent: 'string',
      emailRecoverContent: 'string',
      emailRecoverTitle: 'string',
      emailTitle: 'string',
      robotContent: 'string',
      smsContent: 'string',
      smsRecoverContent: 'string',
      ttsContent: 'string',
      ttsRecoverContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBeanNotificationPolicies extends $dara.Model {
  /**
   * @remarks
   * Indicates whether simple mode is enabled.
   * 
   * @example
   * true
   */
  directedMode?: boolean;
  /**
   * @remarks
   * The ID of the escalation policy.
   * 
   * @example
   * 123
   */
  escalationPolicyId?: number;
  /**
   * @remarks
   * The grouping rule for alert events.
   */
  groupRule?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesGroupRule;
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The integration ID of the ticket system to which alerts are pushed.
   * 
   * @example
   * 34
   */
  integrationId?: number;
  /**
   * @remarks
   * The matching rules for alert events.
   */
  matchingRules?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRules[];
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * notificationpolicy_test
   */
  name?: string;
  /**
   * @remarks
   * The notification rule.
   */
  notifyRule?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRule;
  /**
   * @remarks
   * The notification template.
   */
  notifyTemplate?: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyTemplate;
  /**
   * @remarks
   * Indicates whether the system resends notifications for a long-lasting unresolved alert. Valid values:
   * 
   * - `true` (default): The system resends notifications for a long-lasting unresolved alert at a specified time interval.
   * - `false`: The system resends notifications for a long-lasting unresolved alert based on an escalation policy.
   * 
   * @example
   * true
   */
  repeat?: boolean;
  /**
   * @remarks
   * The time interval at which a notification is resent for a long-lasting unresolved alert. Unit: seconds.
   * 
   * @example
   * 600
   */
  repeatInterval?: number;
  /**
   * @remarks
   * Indicates whether the status of an alert automatically changes to Resolved when all events related to the alert change to the Restored state. The system sends a notification to the alert contacts when the alert status changes to Resolved.
   * 
   * - `true` (default): The system sends a notification.
   * - `false`: The system does not send a notification.
   * 
   * @example
   * true
   */
  sendRecoverMessage?: boolean;
  /**
   * @remarks
   * Indicates whether the notification policy is enabled. Valid values: enable and disable.
   * 
   * @example
   * enable
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      directedMode: 'DirectedMode',
      escalationPolicyId: 'EscalationPolicyId',
      groupRule: 'GroupRule',
      id: 'Id',
      integrationId: 'IntegrationId',
      matchingRules: 'MatchingRules',
      name: 'Name',
      notifyRule: 'NotifyRule',
      notifyTemplate: 'NotifyTemplate',
      repeat: 'Repeat',
      repeatInterval: 'RepeatInterval',
      sendRecoverMessage: 'SendRecoverMessage',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directedMode: 'boolean',
      escalationPolicyId: 'number',
      groupRule: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesGroupRule,
      id: 'number',
      integrationId: 'number',
      matchingRules: { 'type': 'array', 'itemType': ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesMatchingRules },
      name: 'string',
      notifyRule: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyRule,
      notifyTemplate: ListNotificationPoliciesResponseBodyPageBeanNotificationPoliciesNotifyTemplate,
      repeat: 'boolean',
      repeatInterval: 'number',
      sendRecoverMessage: 'boolean',
      state: 'string',
    };
  }

  validate() {
    if(this.groupRule && typeof (this.groupRule as any).validate === 'function') {
      (this.groupRule as any).validate();
    }
    if(Array.isArray(this.matchingRules)) {
      $dara.Model.validateArray(this.matchingRules);
    }
    if(this.notifyRule && typeof (this.notifyRule as any).validate === 'function') {
      (this.notifyRule as any).validate();
    }
    if(this.notifyTemplate && typeof (this.notifyTemplate as any).validate === 'function') {
      (this.notifyTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The queried notification policies.
   */
  notificationPolicies?: ListNotificationPoliciesResponseBodyPageBeanNotificationPolicies[];
  /**
   * @remarks
   * The number of the page returned.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries that are returned on each page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The number of notification policies that are returned.
   * 
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      notificationPolicies: 'NotificationPolicies',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationPolicies: { 'type': 'array', 'itemType': ListNotificationPoliciesResponseBodyPageBeanNotificationPolicies },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.notificationPolicies)) {
      $dara.Model.validateArray(this.notificationPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned pages.
   */
  pageBean?: ListNotificationPoliciesResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListNotificationPoliciesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

