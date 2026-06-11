// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class NotifyStrategyForSNSViewCustomTemplateEntries extends $dara.Model {
  /**
   * @remarks
   * The target type for the custom template.
   */
  targetType?: string;
  /**
   * @remarks
   * The unique identifier (UUID) of the template.
   */
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

export class NotifyStrategyForSNSViewGroupingSetting extends $dara.Model {
  /**
   * @remarks
   * The keys for grouping alerts.
   */
  groupingKeys?: string[];
  /**
   * @remarks
   * The time window in minutes for grouping alerts.
   */
  periodMin?: number;
  /**
   * @remarks
   * The silence period in seconds after a notification is sent for a group.
   */
  silenceSec?: number;
  /**
   * @remarks
   * The number of times to send notifications for a group.
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

export class NotifyStrategyForSNSViewRoutesChannels extends $dara.Model {
  /**
   * @remarks
   * The type of the notification channel, such as \\"sms\\" or \\"email\\".
   */
  channelType?: string;
  /**
   * @remarks
   * The enabled sub-channels.
   */
  enabledSubChannels?: string[];
  /**
   * @remarks
   * The list of receivers for the channel.
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

export class NotifyStrategyForSNSViewRoutesEffectTimeRange extends $dara.Model {
  /**
   * @remarks
   * The days of the week when the route is active.
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * The end time of the active period, specified in minutes from 00:00.
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * The start time of the active period, specified in minutes from 00:00.
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * The time zone for the active period. For example, \\"Asia/Shanghai\\".
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

export class NotifyStrategyForSNSViewRoutes extends $dara.Model {
  /**
   * @remarks
   * The notification channels for the route.
   */
  channels?: NotifyStrategyForSNSViewRoutesChannels[];
  /**
   * @remarks
   * The name of the digital employee assigned to this route.
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The time range during which the notification route is active.
   */
  effectTimeRange?: NotifyStrategyForSNSViewRoutesEffectTimeRange;
  /**
   * @remarks
   * Specifies whether to enable root cause analysis (RCA) for alerts that match this route. Valid values: true, false.
   */
  enableRca?: boolean;
  /**
   * @remarks
   * The filter settings for the route.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * The alert severities that trigger this route.
   */
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
      channels: { 'type': 'array', 'itemType': NotifyStrategyForSNSViewRoutesChannels },
      digitalEmployeeName: 'string',
      effectTimeRange: NotifyStrategyForSNSViewRoutesEffectTimeRange,
      enableRca: 'boolean',
      filterSetting: FilterSetting,
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

export class NotifyStrategyForSNSView extends $dara.Model {
  /**
   * @remarks
   * The creation time of the notification strategy.
   */
  createTime?: string;
  /**
   * @remarks
   * The list of custom templates.
   */
  customTemplateEntries?: NotifyStrategyForSNSViewCustomTemplateEntries[];
  /**
   * @remarks
   * The description of the notification strategy.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the notification strategy. Valid values: true, false.
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable incident management. Valid values: true, false.
   */
  enableIncidentManagement?: boolean;
  /**
   * @remarks
   * The settings for alert grouping.
   */
  groupingSetting?: NotifyStrategyForSNSViewGroupingSetting;
  /**
   * @remarks
   * Specifies whether to ignore notifications for restored alerts. Valid values: true, false.
   */
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * The ID of the incident response plan.
   */
  incidentResponsePlanId?: string;
  /**
   * @remarks
   * The mode of the notification strategy.
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the notification strategy.
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * The name of the notification strategy.
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * The list of notification routes.
   */
  routes?: NotifyStrategyForSNSViewRoutes[];
  /**
   * @remarks
   * The source from which the strategy is synchronized.
   */
  syncFromType?: string;
  /**
   * @remarks
   * The last update time of the notification strategy.
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   */
  userId?: string;
  /**
   * @remarks
   * The workspace to which the notification strategy belongs.
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      enable: 'enable',
      enableIncidentManagement: 'enableIncidentManagement',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      incidentResponsePlanId: 'incidentResponsePlanId',
      mode: 'mode',
      notifyStrategyId: 'notifyStrategyId',
      notifyStrategyName: 'notifyStrategyName',
      routes: 'routes',
      syncFromType: 'syncFromType',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyForSNSViewCustomTemplateEntries },
      description: 'string',
      enable: 'boolean',
      enableIncidentManagement: 'boolean',
      groupingSetting: NotifyStrategyForSNSViewGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      incidentResponsePlanId: 'string',
      mode: 'string',
      notifyStrategyId: 'string',
      notifyStrategyName: 'string',
      routes: { 'type': 'array', 'itemType': NotifyStrategyForSNSViewRoutes },
      syncFromType: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
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

