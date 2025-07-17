// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationChannels extends $dara.Model {
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
   * Critical
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

export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers extends $dara.Model {
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
   * *   If the value of the ReceiverType parameter is AliyunUid, the value of this parameter is the Alibaba Cloud account ID of a user.
   * *   If the value of the ReceiverType parameter is DingToken, the value of this parameter is the token of a DingTalk chatbot.
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

export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings extends $dara.Model {
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
   * The duration of the alert suppression interval. Unit: minutes.
   * 
   * @example
   * 5
   */
  muteInterval?: number;
  /**
   * @remarks
   * The alert notification methods.
   */
  notificationChannels?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationChannels[];
  /**
   * @remarks
   * The settings of alert notification recipients.
   */
  notificationReceivers?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers[];
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
      notificationChannels: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationChannels },
      notificationReceivers: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettingsNotificationReceivers },
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

export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated and replaced by the DdlTypes parameter.
   * 
   * @deprecated
   */
  ddlReportTags?: string[];
  /**
   * @remarks
   * The types of DDL operations for which the alert rule takes effect. This parameter is returned only if the MetricType parameter is set to DdlReport.
   */
  ddlTypes?: string[];
  /**
   * @remarks
   * The time interval for alert calculation. Unit: minutes.
   * 
   * @example
   * 1
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
   * Critical
   */
  severity?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * *   If the alert rule is for task status, no threshold is used.
   * *   If the alert rule is for failovers, the threshold is the number of failovers.
   * *   If the alert rule is for latency, the threshold is the latency duration, in seconds.
   * 
   * @example
   * 5
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

export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 72402
   * 
   * @deprecated
   */
  DIAlarmRuleId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 32594
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description of the alert rule.
   * 
   * @example
   * rule descrition
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is enabled. Valid values: True and False.
   * 
   * @example
   * True
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 72402
   */
  id?: number;
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
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * rule_name
   */
  name?: string;
  /**
   * @remarks
   * The alert notification method and recipient settings.
   */
  notificationSettings?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings;
  /**
   * @remarks
   * The conditions that are used to trigger the alert rule.
   */
  triggerConditions?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions[];
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      metricType: 'MetricType',
      name: 'Name',
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
      id: 'number',
      metricType: 'string',
      name: 'string',
      notificationSettings: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions },
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

export class ListDIAlarmRulesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The alert rules.
   */
  DIJobAlarmRules?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules[];
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 90
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
      DIJobAlarmRules: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules },
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
   * The pagination information.
   */
  pagingInfo?: ListDIAlarmRulesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 74C2FECD-5B3A-554A-BCF5-351A36DE9815
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIAlarmRulesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

