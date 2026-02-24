// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class NotifyStrategyForModifyCustomTemplateEntries extends $dara.Model {
  /**
   * @remarks
   * Notification type.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS
   */
  targetType?: string;
  /**
   * @remarks
   * Template UUID.
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
   * Grouping keys.
   */
  groupingKeys?: string[];
  /**
   * @remarks
   * Check interval in minutes.
   * 
   * @example
   * 5
   */
  periodMin?: number;
  /**
   * @remarks
   * Silence duration in seconds.
   * 
   * @example
   * 300
   */
  silenceSec?: number;
  /**
   * @remarks
   * Trigger count.
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
  alertActionIds?: string[];
  restoreActionIds?: string[];
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
  endIncidentState?: string;
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
   * Channel type.
   * 
   * This parameter is required.
   * 
   * @example
   * CONTACT
   */
  channelType?: string;
  /**
   * @remarks
   * Enabled notification types.
   */
  enabledSubChannels?: string[];
  /**
   * @remarks
   * Channel recipient.
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
   * Effective days (Monday to Sunday).
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * End time (in minutes).
   * 
   * @example
   * 30
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * Start time (in minutes).
   * 
   * @example
   * 60
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * Time Zone.
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
   * Notification channel.
   */
  channels?: NotifyStrategyForModifyRoutesChannels[];
  digitalEmployeeName?: string;
  /**
   * @remarks
   * Valid time range.
   */
  effectTimeRange?: NotifyStrategyForModifyRoutesEffectTimeRange;
  enableRca?: boolean;
  /**
   * @remarks
   * Routing conditions.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Severity level list.
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
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * Notification channel template.
   */
  customTemplateEntries?: NotifyStrategyForModifyCustomTemplateEntries[];
  /**
   * @remarks
   * Description.
   * 
   * @example
   * test
   */
  description?: string;
  enableIncidentManagement?: boolean;
  escalationId?: string[];
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Grouping settings.
   * 
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForModifyGroupingSetting;
  /**
   * @remarks
   * Whether to notify on recovery.
   * 
   * @example
   * false
   */
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * Name.
   * 
   * This parameter is required.
   * 
   * @example
   * Policy name.
   */
  notifyStrategyName?: string;
  pushingSetting?: NotifyStrategyForModifyPushingSetting;
  repeatNotifySetting?: NotifyStrategyForModifyRepeatNotifySetting;
  /**
   * @remarks
   * Notification channel routing configuration.
   * 
   * This parameter is required.
   */
  routes?: NotifyStrategyForModifyRoutes[];
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

