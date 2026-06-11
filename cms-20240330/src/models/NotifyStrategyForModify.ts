// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class NotifyStrategyForModifyCustomTemplateEntries extends $dara.Model {
  /**
   * @remarks
   * The notification type.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS
   */
  targetType?: string;
  /**
   * @remarks
   * The template UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123123-12-31-231-23-12-3123
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

export class NotifyStrategyForModifyGroupingSetting extends $dara.Model {
  /**
   * @remarks
   * The keys used for merging.
   */
  groupingKeys?: string[];
  /**
   * @remarks
   * The check period in minutes.
   * 
   * @example
   * 5
   */
  periodMin?: number;
  /**
   * @remarks
   * The silence period in seconds.
   * 
   * @example
   * 300
   */
  silenceSec?: number;
  /**
   * @remarks
   * The number of triggers.
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

export class NotifyStrategyForModifyPushingSetting extends $dara.Model {
  /**
   * @remarks
   * The list of alert action IDs.
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * The list of restore action IDs.
   */
  restoreActionIds?: string[];
  /**
   * @remarks
   * The message template UUID.
   * 
   * @example
   * 模板 UUID
   */
  templateUuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIds: 'alertActionIds',
      restoreActionIds: 'restoreActionIds',
      templateUuid: 'templateUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIds: { 'type': 'array', 'itemType': 'string' },
      restoreActionIds: { 'type': 'array', 'itemType': 'string' },
      templateUuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertActionIds)) {
      $dara.Model.validateArray(this.alertActionIds);
    }
    if(Array.isArray(this.restoreActionIds)) {
      $dara.Model.validateArray(this.restoreActionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForModifyRepeatNotifySetting extends $dara.Model {
  /**
   * @remarks
   * The incident state that stops the repeated notifications.
   * 
   * @example
   * "Resolved"
   */
  endIncidentState?: string;
  /**
   * @remarks
   * The interval for repeated notifications.
   * 
   * @example
   * 5
   */
  repeatInterval?: number;
  static names(): { [key: string]: string } {
    return {
      endIncidentState: 'endIncidentState',
      repeatInterval: 'repeatInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIncidentState: 'string',
      repeatInterval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NotifyStrategyForModifyRoutesChannels extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * This parameter is required.
   * 
   * @example
   * CONTACT
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
   * 
   * This parameter is required.
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

export class NotifyStrategyForModifyRoutesEffectTimeRange extends $dara.Model {
  /**
   * @remarks
   * The days of the week when the policy is active. Monday to Sunday.
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * The end time in minutes.
   * 
   * @example
   * 30
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * The start time in minutes.
   * 
   * @example
   * 60
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * +08:00
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

export class NotifyStrategyForModifyRoutes extends $dara.Model {
  /**
   * @remarks
   * The notification channel.
   */
  channels?: NotifyStrategyForModifyRoutesChannels[];
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The effective time range.
   */
  effectTimeRange?: NotifyStrategyForModifyRoutesEffectTimeRange;
  enableRca?: boolean;
  /**
   * @remarks
   * The routing conditions.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * The list of severity levels.
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
      channels: { 'type': 'array', 'itemType': NotifyStrategyForModifyRoutesChannels },
      digitalEmployeeName: 'string',
      effectTimeRange: NotifyStrategyForModifyRoutesEffectTimeRange,
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

export class NotifyStrategyForModify extends $dara.Model {
  /**
   * @remarks
   * The auto-recovery time in seconds.
   * 
   * @example
   * 300
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The notification channel template.
   */
  customTemplateEntries?: NotifyStrategyForModifyCustomTemplateEntries[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable incident management.
   * 
   * @example
   * true
   */
  enableIncidentManagement?: boolean;
  /**
   * @remarks
   * The list of escalation policy IDs.
   */
  escalationId?: string[];
  /**
   * @remarks
   * The filter settings.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * The grouping settings.
   * 
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForModifyGroupingSetting;
  /**
   * @remarks
   * Specifies whether to send a notification upon recovery.
   * 
   * @example
   * false
   */
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * 策略名称
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * The push settings.
   */
  pushingSetting?: NotifyStrategyForModifyPushingSetting;
  /**
   * @remarks
   * The settings for repeated notifications.
   */
  repeatNotifySetting?: NotifyStrategyForModifyRepeatNotifySetting;
  /**
   * @remarks
   * The routing settings for the notification channel.
   * 
   * This parameter is required.
   */
  routes?: NotifyStrategyForModifyRoutes[];
  /**
   * @remarks
   * The workspace filter settings.
   */
  workspaceFilterSetting?: WorkspaceFilterSetting;
  static names(): { [key: string]: string } {
    return {
      autoRecoverSeconds: 'autoRecoverSeconds',
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      enableIncidentManagement: 'enableIncidentManagement',
      escalationId: 'escalationId',
      filterSetting: 'filterSetting',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      notifyStrategyName: 'notifyStrategyName',
      pushingSetting: 'pushingSetting',
      repeatNotifySetting: 'repeatNotifySetting',
      routes: 'routes',
      workspaceFilterSetting: 'workspaceFilterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverSeconds: 'number',
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyForModifyCustomTemplateEntries },
      description: 'string',
      enableIncidentManagement: 'boolean',
      escalationId: { 'type': 'array', 'itemType': 'string' },
      filterSetting: FilterSetting,
      groupingSetting: NotifyStrategyForModifyGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      notifyStrategyName: 'string',
      pushingSetting: NotifyStrategyForModifyPushingSetting,
      repeatNotifySetting: NotifyStrategyForModifyRepeatNotifySetting,
      routes: { 'type': 'array', 'itemType': NotifyStrategyForModifyRoutes },
      workspaceFilterSetting: WorkspaceFilterSetting,
    };
  }

  validate() {
    if(Array.isArray(this.customTemplateEntries)) {
      $dara.Model.validateArray(this.customTemplateEntries);
    }
    if(Array.isArray(this.escalationId)) {
      $dara.Model.validateArray(this.escalationId);
    }
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(this.groupingSetting && typeof (this.groupingSetting as any).validate === 'function') {
      (this.groupingSetting as any).validate();
    }
    if(this.pushingSetting && typeof (this.pushingSetting as any).validate === 'function') {
      (this.pushingSetting as any).validate();
    }
    if(this.repeatNotifySetting && typeof (this.repeatNotifySetting as any).validate === 'function') {
      (this.repeatNotifySetting as any).validate();
    }
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    if(this.workspaceFilterSetting && typeof (this.workspaceFilterSetting as any).validate === 'function') {
      (this.workspaceFilterSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

