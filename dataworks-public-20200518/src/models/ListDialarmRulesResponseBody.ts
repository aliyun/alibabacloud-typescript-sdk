// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesNotificationSettingsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The list of channels.
   */
  channels?: string[];
  /**
   * @remarks
   * The severity level. Valid values:
   * - Warning
   * - Critical
   * 
   * @example
   * Warning
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesNotificationSettingsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The receiver type.
   * 
   * - If the alert notification channel is email, phone call, or text message, the receiver type is Alibaba Cloud user ID (**AliyunUid**).
   * - If the alert notification channel is DingTalk, the receiver type is DingTalk token (**DingToken**).
   * 
   * @example
   * DingToken
   */
  receiverType?: string;
  /**
   * @remarks
   * The list of receiver values.
   */
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.receiverValues)) {
      $dara.Model.validateArray(this.receiverValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesNotificationSettings extends $dara.Model {
  /**
   * @remarks
   * The alert suppression interval. Unit: minutes.
   * 
   * @example
   * 5
   */
  inhibitionInterval?: number;
  /**
   * @remarks
   * The alert notification channels. Multiple values are supported.
   */
  notificationChannels?: ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesNotificationSettingsNotificationChannels[];
  /**
   * @remarks
   * The alert notification receivers. Multiple values are supported.
   */
  notificationReceivers?: ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesNotificationSettingsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      inhibitionInterval: 'InhibitionInterval',
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inhibitionInterval: 'number',
      notificationChannels: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesNotificationSettingsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesNotificationSettingsNotificationReceivers },
    };
  }

  validate() {
    if(Array.isArray(this.notificationChannels)) {
      $dara.Model.validateArray(this.notificationChannels);
    }
    if(Array.isArray(this.notificationReceivers)) {
      $dara.Model.validateArray(this.notificationReceivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesTriggerConditions extends $dara.Model {
  /**
   * @remarks
   * The time window for alert calculation. Unit: minutes.
   * 
   * @example
   * 15
   */
  duration?: number;
  /**
   * @remarks
   * The severity level. Valid values:
   * - Warning
   * - Critical
   * 
   * @example
   * Warning
   */
  severity?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * - Task status alert: no threshold.
   * - Failover count alert: the threshold is the number of failovers.
   * - Task delay alert: the threshold is the delay duration. Unit: seconds.
   * 
   * @example
   * 5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      severity: 'Severity',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      severity: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRules extends $dara.Model {
  /**
   * @remarks
   * The alert rule ID.
   * 
   * @example
   * 41998
   */
  DIAlarmRuleId?: number;
  /**
   * @remarks
   * The task ID. This is the task ID associated with the alert rule.
   * 
   * @example
   * 11260
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * mysql synchronizes to hologres heartbeat alert
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The alert metric type. Valid values:
   * - Heartbeat: task status alert.
   * - FailoverCount: failover count alert.
   * - Delay: task delay alert.
   * 
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * The alert notification settings.
   */
  notificationSettings?: ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesNotificationSettings;
  /**
   * @remarks
   * The list of alert trigger conditions. Multiple conditions are supported.
   */
  triggerConditions?: ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesTriggerConditions[];
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      notificationSettings: 'NotificationSettings',
      triggerConditions: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      notificationSettings: ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRulesTriggerConditions },
    };
  }

  validate() {
    if(this.notificationSettings && typeof (this.notificationSettings as any).validate === 'function') {
      (this.notificationSettings as any).validate();
    }
    if(Array.isArray(this.triggerConditions)) {
      $dara.Model.validateArray(this.triggerConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBodyDIAlarmRulePaging extends $dara.Model {
  /**
   * @remarks
   * The list of alert rules.
   */
  DIJobAlarmRules?: ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRules[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobAlarmRules: 'DIJobAlarmRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobAlarmRules: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyDIAlarmRulePagingDIJobAlarmRules },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DIJobAlarmRules)) {
      $dara.Model.validateArray(this.DIJobAlarmRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIAlarmRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated result of alert rules.
   */
  DIAlarmRulePaging?: ListDIAlarmRulesResponseBodyDIAlarmRulePaging;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 74C2FECD-5B3A-554A-BCF5-35****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRulePaging: 'DIAlarmRulePaging',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRulePaging: ListDIAlarmRulesResponseBodyDIAlarmRulePaging,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DIAlarmRulePaging && typeof (this.DIAlarmRulePaging as any).validate === 'function') {
      (this.DIAlarmRulePaging as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

