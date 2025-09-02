// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels extends $dara.Model {
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

export class CreateDIAlarmRuleRequestNotificationSettingsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The recipient type. Valid values: AliyunUid and DingToken.
   * 
   * *   If the alert notification method is Mail, Phone, or Sms, set this parameter to **AliyunUid**, which specifies the Alibaba Cloud account ID.
   * *   If the alert notification method is Ding, set this parameter to **DingToken**, which indicates the DingTalk chatbot token.
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

export class CreateDIAlarmRuleRequestNotificationSettings extends $dara.Model {
  /**
   * @remarks
   * The duration of the alert suppression interval. Default value: 5. Unit: minutes.
   * 
   * @example
   * 5
   */
  inhibitionInterval?: number;
  /**
   * @remarks
   * The alert notification methods.
   * 
   * This parameter is required.
   */
  notificationChannels?: CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels[];
  /**
   * @remarks
   * The settings of alert notification recipients.
   * 
   * This parameter is required.
   */
  notificationReceivers?: CreateDIAlarmRuleRequestNotificationSettingsNotificationReceivers[];
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
      notificationChannels: { 'type': 'array', 'itemType': CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': CreateDIAlarmRuleRequestNotificationSettingsNotificationReceivers },
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

export class CreateDIAlarmRuleRequestTriggerConditions extends $dara.Model {
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
   * *   If the alert rule is for task status, you do not need to specify a threshold.
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

export class CreateDIAlarmRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task with which the alert rule is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * 11265
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * mysql synchronizes to hologres heartbeat alert
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the alert rule. By default, the alert rule is disabled.
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
   * This parameter is required.
   * 
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * The alert notification settings.
   * 
   * This parameter is required.
   */
  notificationSettings?: CreateDIAlarmRuleRequestNotificationSettings;
  /**
   * @remarks
   * The conditions that are used to trigger the alert rule.
   * 
   * This parameter is required.
   */
  triggerConditions?: CreateDIAlarmRuleRequestTriggerConditions[];
  static names(): { [key: string]: string } {
    return {
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
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      notificationSettings: CreateDIAlarmRuleRequestNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': CreateDIAlarmRuleRequestTriggerConditions },
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

