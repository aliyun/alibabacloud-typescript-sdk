// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class NotifyStrategyForSNSViewCustomTemplateEntries extends $dara.Model {
  /**
   * @remarks
   * The notification type.
   * 
   * @example
   * default
   */
  targetType?: string;
  /**
   * @remarks
   * The template UUID.
   * 
   * @example
   * example-id-001
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
   * The grouping keys.
   */
  groupingKeys?: string[];
  /**
   * @remarks
   * The check period in minutes.
   * 
   * @example
   * 1
   */
  periodMin?: number;
  /**
   * @remarks
   * The silence duration in seconds.
   * 
   * @example
   * 1
   */
  silenceSec?: number;
  /**
   * @remarks
   * The number of times the condition is triggered.
   * 
   * @example
   * 1
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
   * The channel type.
   * 
   * @example
   * DING
   */
  channelType?: string;
  /**
   * @remarks
   * The enabled notification types.
   */
  enabledSubChannels?: string[];
  /**
   * @remarks
   * The channel receivers.
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
   * The effective days, from Monday to Sunday.
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * The start time in minutes.
   * 
   * @example
   * 1
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * The start time in minutes.
   * 
   * @example
   * 1
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * 1700000000
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
   * The notification channels.
   */
  channels?: NotifyStrategyForSNSViewRoutesChannels[];
  /**
   * @remarks
   * The digital employee name.
   * 
   * @example
   * Sample name
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The effective time range.
   */
  effectTimeRange?: NotifyStrategyForSNSViewRoutesEffectTimeRange;
  /**
   * @remarks
   * Indicates whether root cause analysis (RCA) is enabled.
   * 
   * @example
   * true
   */
  enableRca?: boolean;
  /**
   * @remarks
   * The route-level filter.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * The severity filter.
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
   * The creation time.
   * 
   * @example
   * 1700000000
   */
  createTime?: string;
  /**
   * @remarks
   * The notification channel templates.
   */
  customTemplateEntries?: NotifyStrategyForSNSViewCustomTemplateEntries[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the notification policy is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether incident management is enabled.
   * 
   * @example
   * true
   */
  enableIncidentManagement?: boolean;
  /**
   * @remarks
   * The grouping settings.
   */
  groupingSetting?: NotifyStrategyForSNSViewGroupingSetting;
  /**
   * @remarks
   * Indicates whether recovery notifications are sent.
   * 
   * @example
   * true
   */
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * The UUID of the associated response plan, which equals notifyStrategyId.
   * 
   * @example
   * example-id-001
   */
  incidentResponsePlanId?: string;
  /**
   * @remarks
   * The lifecycle mode. Within SNS, this value is always BundleStrategy.
   * 
   * @example
   * Sample value
   */
  mode?: string;
  /**
   * @remarks
   * The notification policy ID.
   * 
   * @example
   * example-id-001
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Sample name
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * The notification channel routing settings.
   */
  routes?: NotifyStrategyForSNSViewRoutes[];
  /**
   * @remarks
   * The synchronization source. For SNS creation, this value is always OBS.
   * 
   * @example
   * default
   */
  syncFromType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1700000000
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * example-id-001
   */
  userId?: string;
  /**
   * @remarks
   * The workspace identifier.
   * 
   * @example
   * Sample value
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

