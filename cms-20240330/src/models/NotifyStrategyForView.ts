// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class NotifyStrategyForViewCustomTemplateEntries extends $dara.Model {
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
   * 123-12-312-312-31-23
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

export class NotifyStrategyForViewGroupingSetting extends $dara.Model {
  /**
   * @remarks
   * Grouping Keys
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
   * 3
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

export class NotifyStrategyForViewPushingSetting extends $dara.Model {
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

export class NotifyStrategyForViewRepeatNotifySetting extends $dara.Model {
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

export class NotifyStrategyForViewRoutesChannels extends $dara.Model {
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

export class NotifyStrategyForViewRoutesEffectTimeRange extends $dara.Model {
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
   * 60
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

export class NotifyStrategyForViewRoutes extends $dara.Model {
  /**
   * @remarks
   * Notification channel.
   */
  channels?: NotifyStrategyForViewRoutesChannels[];
  digitalEmployeeName?: string;
  /**
   * @remarks
   * Field.
   */
  effectTimeRange?: NotifyStrategyForViewRoutesEffectTimeRange;
  enableRca?: boolean;
  /**
   * @remarks
   * Routing settings.
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
      channels: { 'type': 'array', 'itemType': NotifyStrategyForViewRoutesChannels },
      digitalEmployeeName: 'string',
      effectTimeRange: NotifyStrategyForViewRoutesEffectTimeRange,
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

export class NotifyStrategyForView extends $dara.Model {
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * Create Time.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * Notification channel template.
   */
  customTemplateEntries?: NotifyStrategyForViewCustomTemplateEntries[];
  /**
   * @remarks
   * Description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Whether enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Grouping Setting.
   * 
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForViewGroupingSetting;
  /**
   * @remarks
   * Whether to notify on recovery.
   * 
   * @example
   * true
   */
  ignoreRestoredNotification?: boolean;
  incidentEscalationPolicies?: any[];
  /**
   * @remarks
   * UUID
   * 
   * @example
   * 12312-31-23-123-1-23123
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * Name.
   * 
   * This parameter is required.
   * 
   * @example
   * Test policy.
   */
  notifyStrategyName?: string;
  pushingSetting?: NotifyStrategyForViewPushingSetting;
  receiverNames?: string[];
  repeatNotifySetting?: NotifyStrategyForViewRepeatNotifySetting;
  /**
   * @remarks
   * Notification channel routing configuration.
   * 
   * This parameter is required.
   */
  routes?: NotifyStrategyForViewRoutes[];
  syncFromType?: string;
  /**
   * @remarks
   * Update Time.
   * 
   * @example
   * 2025-05-30T02:29:09Z
   */
  updateTime?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 123123****
   */
  userId?: string;
  /**
   * @remarks
   * workspace
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  workspaceFilterSetting?: WorkspaceFilterSetting;
  static names(): { [key: string]: string } {
    return {
      autoRecoverSeconds: 'autoRecoverSeconds',
      createTime: 'createTime',
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      enable: 'enable',
      filterSetting: 'filterSetting',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      incidentEscalationPolicies: 'incidentEscalationPolicies',
      notifyStrategyId: 'notifyStrategyId',
      notifyStrategyName: 'notifyStrategyName',
      pushingSetting: 'pushingSetting',
      receiverNames: 'receiverNames',
      repeatNotifySetting: 'repeatNotifySetting',
      routes: 'routes',
      syncFromType: 'syncFromType',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
      workspaceFilterSetting: 'workspaceFilterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRecoverSeconds: 'number',
      createTime: 'string',
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyForViewCustomTemplateEntries },
      description: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      groupingSetting: NotifyStrategyForViewGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      incidentEscalationPolicies: { 'type': 'array', 'itemType': 'any' },
      notifyStrategyId: 'string',
      notifyStrategyName: 'string',
      pushingSetting: NotifyStrategyForViewPushingSetting,
      receiverNames: { 'type': 'array', 'itemType': 'string' },
      repeatNotifySetting: NotifyStrategyForViewRepeatNotifySetting,
      routes: { 'type': 'array', 'itemType': NotifyStrategyForViewRoutes },
      syncFromType: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
      workspaceFilterSetting: WorkspaceFilterSetting,
    };
  }

  validate() {
    if(Array.isArray(this.customTemplateEntries)) {
      $dara.Model.validateArray(this.customTemplateEntries);
    }
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(this.groupingSetting && typeof (this.groupingSetting as any).validate === 'function') {
      (this.groupingSetting as any).validate();
    }
    if(Array.isArray(this.incidentEscalationPolicies)) {
      $dara.Model.validateArray(this.incidentEscalationPolicies);
    }
    if(this.pushingSetting && typeof (this.pushingSetting as any).validate === 'function') {
      (this.pushingSetting as any).validate();
    }
    if(Array.isArray(this.receiverNames)) {
      $dara.Model.validateArray(this.receiverNames);
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

