// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyGroupRule extends $dara.Model {
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

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRulesMatchingConditions extends $dara.Model {
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

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRules extends $dara.Model {
  /**
   * @remarks
   * The matching conditions.
   */
  matchingConditions?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRulesMatchingConditions[];
  static names(): { [key: string]: string } {
    return {
      matchingConditions: 'MatchingConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchingConditions: { 'type': 'array', 'itemType': CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRulesMatchingConditions },
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

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRuleNotifyObjects extends $dara.Model {
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
   * *   CONTACT: contact
   * *   CONTACT_GROUP: contact group
   * *   ARMS_CONTACT: ARMS contact
   * *   ARMS_CONTACT_GROUP: ARMS contact group
   * *   DING_ROBOT_GROUP: DingTalk, Lark, WeCom, or IM robot
   * *   CONTACT_SCHEDULE: user on duty defined by a schedule
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

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRule extends $dara.Model {
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
   * An array of notification objects.
   */
  notifyObjects?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRuleNotifyObjects[];
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
      notifyObjects: { 'type': 'array', 'itemType': CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRuleNotifyObjects },
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

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyTemplate extends $dara.Model {
  /**
   * @remarks
   * The content of the alert notification sent through email.
   * 
   * @example
   * Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert time: {{ .startTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{if .generatorURL }} \\<a href="{{.generatorURL}}" >Link\\</a> {{end}} {{end}}
   */
  emailContent?: string;
  /**
   * @remarks
   * The content of the alert resolution notification sent through email.
   * 
   * @example
   * Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert resolution time: {{ .endTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{if .generatorURL }} \\<a href="{{.generatorURL}}" >Link\\</a> {{end}} {{end}}
   */
  emailRecoverContent?: string;
  /**
   * @remarks
   * The title of the alert resolution notification sent through email.
   * 
   * @example
   * {{ .commonLabels.alertname }}
   */
  emailRecoverTitle?: string;
  /**
   * @remarks
   * The title of the alert notification sent through email.
   * 
   * @example
   * {{ .commonLabels.alertname }}
   */
  emailTitle?: string;
  /**
   * @remarks
   * The content of the alert notification sent by the IM robot.
   * 
   * @example
   * {{if .commonLabels.clustername }} > Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} > Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}{{ for .alerts }}> {{.annotations.message}} {{if .generatorURL }} [Link]\\({{.generatorURL}}) {{ end }} {{if eq "true" .labels._aliyun_arms_is_denoise_filtered }} (Suspected noise) {{end}} {{end}}
   */
  robotContent?: string;
  /**
   * @remarks
   * The content of the alert notification sent through text message.
   * 
   * @example
   * \\<SmsContent>Notification on the occurrence of a {{ .level }} alert. Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert time: {{ .startTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{ end }}\\</SmsContent>
   */
  smsContent?: string;
  /**
   * @remarks
   * The content of the alert resolution notification sent through text message.
   * 
   * @example
   * \\<SmsRecoverContent>Alert resolution notification. Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert resolution time: {{ .endTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{ end }}\\</SmsRecoverContent>
   */
  smsRecoverContent?: string;
  /**
   * @remarks
   * The content of the alert notification by phone.
   * 
   * @example
   * \\<TtsContent>Alert name: {{ .commonLabels.alertname }}{{if .commonLabels.clustername }} Cluster name: {{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }} Application name: {{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }} Notification policy: {{ .dispatchRuleName }} Alert time: {{ .startTime }} Alert content: {{ for .alerts }} {{.annotations.message}} {{ end }}\\</TtsContent>
   */
  ttsContent?: string;
  /**
   * @remarks
   * The content of the alert resolution notification by phone.
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

export class CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable simple mode.
   * 
   * @example
   * false
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
   * An array of alert event group objects.
   */
  groupRule?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyGroupRule;
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
   * The matching rules.
   */
  matchingRules?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRules[];
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
   * An array of notification rule objects.
   */
  notifyRule?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRule;
  /**
   * @remarks
   * The notification template.
   */
  notifyTemplate?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyTemplate;
  /**
   * @remarks
   * Indicates whether a notification is resent for a long-lasting unresolved alert. Default value: true. Valid values:
   * 
   * *   `true`: The system resends a notification for a long-lasting unresolved alert at a specified time interval.
   * *   `false`: The system sends a notification for a long-lasting unresolved alert based on an escalation policy.
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
   * Indicates whether the status of an alert automatically changes to Resolved when all events related to the alert change to the Restored state. ARMS notifies contacts when the alert status changes to Resolved.
   * 
   * *   `true`: The system sends a notification.
   * *   `false`: The system does not send a notification.
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
      groupRule: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyGroupRule,
      id: 'number',
      integrationId: 'number',
      matchingRules: { 'type': 'array', 'itemType': CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyMatchingRules },
      name: 'string',
      notifyRule: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyRule,
      notifyTemplate: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicyNotifyTemplate,
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

export class CreateOrUpdateNotificationPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of notification policy objects.
   */
  notificationPolicy?: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      notificationPolicy: 'NotificationPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notificationPolicy: CreateOrUpdateNotificationPolicyResponseBodyNotificationPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.notificationPolicy && typeof (this.notificationPolicy as any).validate === 'function') {
      (this.notificationPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

