// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The notification channel. Valid values:
   * - Mail: email.
   * - Phone: phone call.
   * - Sms: text message.
   * - Ding: DingTalk.
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

export class CreateDIAlarmRuleRequestNotificationSettingsNotificationReceivers extends $dara.Model {
  /**
   * @remarks
   * The receiver type. Valid values: AliyunUid, DingToken, FeishuToken, and WebHookUrl.
   * 
   * @example
   * DingToken
   */
  receiverType?: string;
  /**
   * @remarks
   * The receiver values.
   * - If the receiver type is AliyunUid, the value is the Alibaba Cloud account ID.
   * - If the receiver type is DingToken, the value is the DingTalk token.
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
   * **[Deprecated]** Use the MuteInterval parameter instead.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  inhibitionInterval?: number;
  /**
   * @remarks
   * The alert mute interval. Unit: minutes. Default value: 5.
   * 
   * @example
   * 5
   */
  muteInterval?: number;
  /**
   * @remarks
   * The alert notification channels.
   */
  notificationChannels?: CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels[];
  /**
   * @remarks
   * The alert notification receivers.
   */
  notificationReceivers?: CreateDIAlarmRuleRequestNotificationSettingsNotificationReceivers[];
  static names(): { [key: string]: string } {
    return {
      inhibitionInterval: 'InhibitionInterval',
      muteInterval: 'MuteInterval',
      notificationChannels: 'NotificationChannels',
      notificationReceivers: 'NotificationReceivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inhibitionInterval: 'number',
      muteInterval: 'number',
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
   * **[Deprecated]** Use the DdlTypes parameter instead.
   * 
   * @deprecated
   */
  ddlReportTags?: string[];
  /**
   * @remarks
   * The list of DDL types that take effect. This parameter takes effect only when the metric type is DDL notification.
   */
  ddlTypes?: string[];
  /**
   * @remarks
   * The time window for alert calculation. Unit: minutes.
   * 
   * @example
   * 10
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
   * - Task status alert: no threshold is required.
   * - Failover count alert: the threshold is the number of failovers.
   * - Task latency alert: the threshold is the latency duration. Unit: seconds.
   * 
   * @example
   * 10
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      ddlReportTags: 'DdlReportTags',
      ddlTypes: 'DdlTypes',
      duration: 'Duration',
      severity: 'Severity',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddlReportTags: { 'type': 'array', 'itemType': 'string' },
      ddlTypes: { 'type': 'array', 'itemType': 'string' },
      duration: 'number',
      severity: 'string',
      threshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ddlReportTags)) {
      $dara.Model.validateArray(this.ddlReportTags);
    }
    if(Array.isArray(this.ddlTypes)) {
      $dara.Model.validateArray(this.ddlTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDIAlarmRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency parameter.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The task ID associated with the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description of the alert rule.
   * 
   * @example
   * Alert description
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
   * The alert metric type. Valid values:
   * - Heartbeat: task status alert.
   * - FailoverCount: failover count alert.
   * - Delay: task latency alert.
   * - DdlReport: DDL notification.
   * - ResourceUtilization: resource group utilization.
   * 
   * This parameter is required.
   * 
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * alartRule
   */
  name?: string;
  /**
   * @remarks
   * The alert notification settings.
   * 
   * This parameter is required.
   */
  notificationSettings?: CreateDIAlarmRuleRequestNotificationSettings;
  /**
   * @remarks
   * The list of alert trigger conditions. Multiple conditions are supported.
   * 
   * This parameter is required.
   */
  triggerConditions?: CreateDIAlarmRuleRequestTriggerConditions[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      name: 'Name',
      notificationSettings: 'NotificationSettings',
      triggerConditions: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      name: 'string',
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

