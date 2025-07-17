// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The alert notification method. Valid values:
   * 
   * *   Mail
   * *   Phone
   * *   Sms
   * *   Ding
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
   * The recipient type. Valid values: AliyunUid, DingToken, FeishuToken, and WebHookUrl.
   * 
   * @example
   * DingToken
   */
  receiverType?: string;
  /**
   * @remarks
   * The recipient.
   * 
   * *   If the ReceiverType parameter is set to AliyunUid, set this parameter to the Alibaba Cloud account ID of a user.
   * *   If the ReceiverType parameter is set to DingToken, set this parameter to the token of a DingTalk chatbot.
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
   * This parameter is deprecated and replaced by the MuteInterval parameter.
   * 
   * @example
   * 5
   * 
   * @deprecated
   */
  inhibitionInterval?: number;
  /**
   * @remarks
   * The duration of the alert suppression interval. Default value: 5. Unit: minutes.
   * 
   * @example
   * 5
   */
  muteInterval?: number;
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels[];
  /**
   * @remarks
   * The settings of alert notification recipients.
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
   * This parameter is deprecated and replaced by the DdlTypes parameter.
   * 
   * @deprecated
   */
  ddlReportTags?: string[];
  /**
   * @remarks
   * The types of DDL operations for which the alert rule takes effect.
   */
  ddlTypes?: string[];
  /**
   * @remarks
   * The time interval for alert calculation. Unit: minutes.
   * 
   * @example
   * 10
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
   * *   If the alert rule is for failovers, you must specify the number of failovers.
   * *   If the alert rule is for latency, you must specify the latency duration, in seconds.
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the synchronization task with which the alert rule is associated.
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
   * The description of the alert rule.
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
   * *   DdlReport
   * *   ResourceUtilization
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
   * The conditions that can trigger the alert rule.
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

