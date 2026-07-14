// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyStrategyForSNSModifyCustomTemplateEntries extends $dara.Model {
  targetType?: string;
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      targetType: 'targetType',
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'string',
      templateUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForSNSModifyGroupingSetting extends $dara.Model {
  groupingKeys?: string[];
  periodMin?: number;
  silenceSec?: number;
  times?: number;
  static names(): { [key: string]: string } {
    return {
      groupingKeys: 'groupingKeys',
      periodMin: 'periodMin',
      silenceSec: 'silenceSec',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupingKeys: { 'type': 'array', 'itemType': 'string' },
      periodMin: 'number',
      silenceSec: 'number',
      times: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupingKeys)) {
      $dara.Model.validateArray(this.groupingKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForSNSModifyRoutesChannels extends $dara.Model {
  /**
   * @remarks
   * The notification channel type. The value must be one of the following uppercase enum values: DING (DingTalk chatbot), WEIXIN (WeCom chatbot), FEISHU (Lark chatbot), SLACK, TEAMS, WEBHOOK (custom webhook), CONTACT (contact, requires enabledSubChannels to specify sub-channels), GROUP (contact group), DUTY (on-call schedule), or DING_COOL_APP (DingTalk Cool App). Note: Lowercase values such as EMAIL or SMS are not supported. To send email, text message, or voice notifications, set channelType to CONTACT and specify EMAIL, SMS, or VOICE in enabledSubChannels.
   * 
   * This parameter is required.
   * 
   * @example
   * WEBHOOK
   */
  channelType?: string;
  /**
   * @remarks
   * Required only when channelType is CONTACT, GROUP, or DUTY. Valid values: EMAIL (email), SMS (text message), VOICE (voice call), DING (DingTalk work notification), WEIXIN (WeCom message), FEISHU (Lark message), and WEBHOOK. For example, to notify a contact by email and text message, set channelType to CONTACT and enabledSubChannels to ["EMAIL","SMS"]. This field is not required for other channelType values such as WEBHOOK or DING.
   * 
   * @example
   * ["EMAIL","SMS"]
   */
  enabledSubChannels?: string[];
  /**
   * @remarks
   * The list of receiver identifiers. For the WEBHOOK type, specify the webhook UUID. For DING, WEIXIN, or FEISHU, specify the chatbot UUID. For CONTACT, specify the contact ID. For GROUP, specify the contact group ID. For DUTY, specify the on-call schedule UUID. At least one element is required.
   * 
   * This parameter is required.
   * 
   * @example
   * ["my-webhook-uuid"]
   */
  receivers?: string[];
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      enabledSubChannels: 'enabledSubChannels',
      receivers: 'receivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      enabledSubChannels: { 'type': 'array', 'itemType': 'string' },
      receivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.enabledSubChannels)) {
      $dara.Model.validateArray(this.enabledSubChannels);
    }
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForSNSModifyRoutesEffectTimeRange extends $dara.Model {
  /**
   * @remarks
   * The days of the week on which the setting takes effect. Array element values range from 0 to 6 (0 = Sunday, 1 = Monday, 2 = Tuesday, ... 6 = Saturday). Note: The value 7 is not supported. The maximum value is 6. Example for all days: [0,1,2,3,4,5,6]. Example for weekdays only: [1,2,3,4,5].
   * 
   * @example
   * [0,1,2,3,4,5,6]
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * The end time of the day, expressed as the number of minutes from 00:00. Valid values: 0 to 1439 (23 × 60 + 59 = 1439, which represents 23:59).
   * 
   * @example
   * 1439
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * The start time of the day, expressed as the number of minutes from 00:00. Valid values: 0 to 1439 (0 represents 00:00).
   * 
   * @example
   * 0
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * The IANA time zone identifier, such as Asia/Shanghai or America/Los_Angeles.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      dayInWeek: 'dayInWeek',
      endTimeInMinute: 'endTimeInMinute',
      startTimeInMinute: 'startTimeInMinute',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayInWeek: { 'type': 'array', 'itemType': 'number' },
      endTimeInMinute: 'number',
      startTimeInMinute: 'number',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dayInWeek)) {
      $dara.Model.validateArray(this.dayInWeek);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForSNSModifyRoutesFilterSettingConditions extends $dara.Model {
  field?: string;
  op?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      op: 'op',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      op: 'string',
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

export class NotifyStrategyForSNSModifyRoutesFilterSetting extends $dara.Model {
  conditions?: NotifyStrategyForSNSModifyRoutesFilterSettingConditions[];
  expression?: string;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      expression: 'expression',
      relation: 'relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': NotifyStrategyForSNSModifyRoutesFilterSettingConditions },
      expression: 'string',
      relation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForSNSModifyRoutes extends $dara.Model {
  channels?: NotifyStrategyForSNSModifyRoutesChannels[];
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The effective period settings for notifications. Defines on which days and during which time range the system sends notifications.
   */
  effectTimeRange?: NotifyStrategyForSNSModifyRoutesEffectTimeRange;
  enableRca?: boolean;
  filterSetting?: NotifyStrategyForSNSModifyRoutesFilterSetting;
  severities?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      digitalEmployeeName: 'digitalEmployeeName',
      effectTimeRange: 'effectTimeRange',
      enableRca: 'enableRca',
      filterSetting: 'filterSetting',
      severities: 'severities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': NotifyStrategyForSNSModifyRoutesChannels },
      digitalEmployeeName: 'string',
      effectTimeRange: NotifyStrategyForSNSModifyRoutesEffectTimeRange,
      enableRca: 'boolean',
      filterSetting: NotifyStrategyForSNSModifyRoutesFilterSetting,
      severities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(this.effectTimeRange && typeof (this.effectTimeRange as any).validate === 'function') {
      (this.effectTimeRange as any).validate();
    }
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(Array.isArray(this.severities)) {
      $dara.Model.validateArray(this.severities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForSNSModify extends $dara.Model {
  customTemplateEntries?: NotifyStrategyForSNSModifyCustomTemplateEntries[];
  description?: string;
  enableIncidentManagement?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForSNSModifyGroupingSetting;
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  routes?: NotifyStrategyForSNSModifyRoutes[];
  static names(): { [key: string]: string } {
    return {
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      enableIncidentManagement: 'enableIncidentManagement',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyForSNSModifyCustomTemplateEntries },
      description: 'string',
      enableIncidentManagement: 'boolean',
      groupingSetting: NotifyStrategyForSNSModifyGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      routes: { 'type': 'array', 'itemType': NotifyStrategyForSNSModifyRoutes },
    };
  }

  validate() {
    if(Array.isArray(this.customTemplateEntries)) {
      $dara.Model.validateArray(this.customTemplateEntries);
    }
    if(this.groupingSetting && typeof (this.groupingSetting as any).validate === 'function') {
      (this.groupingSetting as any).validate();
    }
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

