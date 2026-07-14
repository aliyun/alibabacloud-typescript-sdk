// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class NotifyStrategyConfigCustomTemplateEntries extends $dara.Model {
  /**
   * @remarks
   * The UUID of the notification template.
   * 
   * @example
   * template-uuid-xxx
   */
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class NotifyStrategyConfigGroupingSetting extends $dara.Model {
  /**
   * @remarks
   * The event fields by which events are grouped. Events in the same group are merged into a single notification. An empty array indicates no grouping.
   * 
   * @example
   * ["alertname"]
   */
  groupingKeys?: string[];
  /**
   * @remarks
   * This parameter does not take effect for this operation. You do not need to set this parameter.
   * 
   * @example
   * 0
   */
  periodMin?: number;
  /**
   * @remarks
   * This parameter does not take effect for this operation. You do not need to set this parameter.
   * 
   * @example
   * 0
   */
  silenceSec?: number;
  /**
   * @remarks
   * This parameter does not take effect for this operation. You do not need to set this parameter.
   * 
   * @example
   * 0
   */
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

export class NotifyStrategyConfigRoutesChannels extends $dara.Model {
  /**
   * @remarks
   * The channel type. Valid values: DING, WEIXIN, FEISHU, SLACK, TEAMS, WEBHOOK, CONTACT, GROUP, DUTY, and DING_COOL_APP. Lowercase values are not supported. For email, text message, or phone call notifications, use CONTACT with enabledSubChannels.
   * 
   * This parameter is required.
   * 
   * @example
   * WEBHOOK
   */
  channelType?: string;
  /**
   * @remarks
   * Required only for CONTACT, GROUP, or DUTY. The sub-channel types in uppercase. Valid values: EMAIL, SMS, VOICE, DING, WEIXIN, FEISHU, and WEBHOOK.
   * 
   * @example
   * ["EMAIL","SMS"]
   */
  enabledSubChannels?: string[];
  /**
   * @remarks
   * The list of receiver identifiers. At least one receiver is required. Specify a webhook UUID for WEBHOOK, a robot UUID for chatbots, or a contact ID for CONTACT.
   * 
   * This parameter is required.
   * 
   * @example
   * ["webhook-uuid-xxx"]
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

export class NotifyStrategyConfigRoutesEffectTimeRange extends $dara.Model {
  /**
   * @remarks
   * The effective days. Valid values: 0 to 6 (0 = Sunday, 6 = Saturday). The value 7 is not supported.
   * 
   * @example
   * [0,1,2,3,4,5,6]
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * The end time of the day in minutes. Valid values: 0 to 1439.
   * 
   * @example
   * 1439
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * The start time of the day in minutes. Valid values: 0 to 1438.
   * 
   * @example
   * 0
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * The IANA time zone identifier.
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

export class NotifyStrategyConfigRoutes extends $dara.Model {
  /**
   * @remarks
   * The list of notification channels.
   * 
   * @example
   * []
   */
  channels?: NotifyStrategyConfigRoutesChannels[];
  /**
   * @remarks
   * The digital employee name. Required when enableRca is set to true.
   * 
   * @example
   * 数字员工名
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The effective time range.
   */
  effectTimeRange?: NotifyStrategyConfigRoutesEffectTimeRange;
  /**
   * @remarks
   * Specifies whether to enable Root Cause Analysis (RCA).
   * 
   * @example
   * false
   */
  enableRca?: boolean;
  /**
   * @remarks
   * The route-level event filter conditions.
   * 
   * @example
   * {}
   */
  filterSetting?: FilterSetting;
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      digitalEmployeeName: 'digitalEmployeeName',
      effectTimeRange: 'effectTimeRange',
      enableRca: 'enableRca',
      filterSetting: 'filterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': NotifyStrategyConfigRoutesChannels },
      digitalEmployeeName: 'string',
      effectTimeRange: NotifyStrategyConfigRoutesEffectTimeRange,
      enableRca: 'boolean',
      filterSetting: FilterSetting,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyConfig extends $dara.Model {
  /**
   * @remarks
   * The list of custom notification templates.
   * 
   * @example
   * []
   */
  customTemplateEntries?: NotifyStrategyConfigCustomTemplateEntries[];
  /**
   * @remarks
   * The description of the notification policy.
   * 
   * @example
   * 生产环境告警通知策略
   */
  description?: string;
  /**
   * @remarks
   * The noise reduction settings.
   * 
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyConfigGroupingSetting;
  /**
   * @remarks
   * Specifies whether to ignore notifications for recovery events. A value of true indicates that recovery notifications are not sent.
   * 
   * @example
   * true
   */
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * The list of notification channel routing settings.
   * 
   * This parameter is required.
   * 
   * @example
   * []
   */
  routes?: NotifyStrategyConfigRoutes[];
  static names(): { [key: string]: string } {
    return {
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyConfigCustomTemplateEntries },
      description: 'string',
      groupingSetting: NotifyStrategyConfigGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      routes: { 'type': 'array', 'itemType': NotifyStrategyConfigRoutes },
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

