// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIAlarmRuleResponseBodyDIAlarmRuleNotificationSettingsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The alert notification methods.
   */
  channels?: string[];
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * *   Warning
   * *   Critical
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

export class GetDIAlarmRuleResponseBodyDIAlarmRuleNotificationSettingsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The recipient type. Valid values: AliyunUid and DingToken.
   * 
   * *   If the alert notification method is Mail, Phone, or Sms, the value of this parameter is **AliyunUid**, which indicates the Alibaba Cloud account ID.
   * *   If the alert notification method is Ding, the value of this parameter is **DingToken**, which indicates the DingTalk chatbot token.
   * 
   * @example
   * DingToken
   */
  receiverType?: string;
  /**
   * @remarks
   * The recipients.
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

export class GetDIAlarmRuleResponseBodyDIAlarmRuleNotificationSettings extends $dara.Model {
  /**
   * @remarks
   * The duration of the alert suppression interval. Unit: minutes.
   * 
   * @example
   * 5
   */
  inhibitionInterval?: number;
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: GetDIAlarmRuleResponseBodyDIAlarmRuleNotificationSettingsNotificationChannels[];
  /**
   * @remarks
   * The alert notification recipients.
   */
  notificationReceivers?: GetDIAlarmRuleResponseBodyDIAlarmRuleNotificationSettingsNotificationReceivers[];
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
      notificationChannels: { 'type': 'array', 'itemType': GetDIAlarmRuleResponseBodyDIAlarmRuleNotificationSettingsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': GetDIAlarmRuleResponseBodyDIAlarmRuleNotificationSettingsNotificationReceivers },
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

export class GetDIAlarmRuleResponseBodyDIAlarmRuleTriggerConditions extends $dara.Model {
  /**
   * @remarks
   * The time interval for alert calculation. Unit: minutes.
   * 
   * @example
   * 15
   */
  duration?: number;
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * *   Warning
   * *   Critical
   * 
   * @example
   * Warning
   */
  severity?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * *   If the alert rule is for task status, no threshold is used.
   * *   If the alert rule is for failovers, specify the number of failovers.
   * *   If the alert rule is for latency, the threshold is the latency duration, in seconds.
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

export class GetDIAlarmRuleResponseBodyDIAlarmRule extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the alert rule was created. Unit: seconds.
   * 
   * @example
   * 1663573162
   */
  createdTime?: number;
  /**
   * @remarks
   * The ID of the user who creates the alert rule.
   * 
   * @example
   * 10000001
   */
  createdUid?: string;
  /**
   * @remarks
   * The alert rule ID.
   * 
   * @example
   * 34988
   */
  DIAlarmRuleId?: number;
  /**
   * @remarks
   * The ID of the task with which the alert rule is associated.
   * 
   * @example
   * 11170
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description of the alert rule.
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
   * The metric type in the alert rule. Valid values:
   * 
   * *   Heartbeat
   * *   FailoverCount
   * *   Delay
   * 
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * The alert notification settings.
   */
  notificationSettings?: GetDIAlarmRuleResponseBodyDIAlarmRuleNotificationSettings;
  /**
   * @remarks
   * The conditions that are used to trigger the alert rule.
   */
  triggerConditions?: GetDIAlarmRuleResponseBodyDIAlarmRuleTriggerConditions[];
  /**
   * @remarks
   * The timestamp when the alert rule was last updated. Unit: seconds.
   * 
   * @example
   * 1663573163
   */
  updatedTime?: number;
  /**
   * @remarks
   * The ID of the user who last updates the alert rule.
   * 
   * @example
   * 10000001
   */
  updatedUid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      createdUid: 'CreatedUid',
      DIAlarmRuleId: 'DIAlarmRuleId',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      notificationSettings: 'NotificationSettings',
      triggerConditions: 'TriggerConditions',
      updatedTime: 'UpdatedTime',
      updatedUid: 'UpdatedUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      createdUid: 'string',
      DIAlarmRuleId: 'number',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      notificationSettings: GetDIAlarmRuleResponseBodyDIAlarmRuleNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': GetDIAlarmRuleResponseBodyDIAlarmRuleTriggerConditions },
      updatedTime: 'number',
      updatedUid: 'string',
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

export class GetDIAlarmRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the alert rule.
   */
  DIAlarmRule?: GetDIAlarmRuleResponseBodyDIAlarmRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A807D85-AC9F-55F7-A58F-998D5249CAD9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DIAlarmRule: 'DIAlarmRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRule: GetDIAlarmRuleResponseBodyDIAlarmRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DIAlarmRule && typeof (this.DIAlarmRule as any).validate === 'function') {
      (this.DIAlarmRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

