// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class NotifyStrategyForViewCustomTemplateEntries extends $dara.Model {
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
   * The merge keys.
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
  /**
   * @remarks
   * The list of alert action IDs.
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * The list of recovery action IDs.
   */
  restoreActionIds?: string[];
  /**
   * @remarks
   * The template UUID.
   * 
   * @example
   * "template-abc123"
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

export class NotifyStrategyForViewRepeatNotifySetting extends $dara.Model {
  /**
   * @remarks
   * The event state at which to stop.
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

export class NotifyStrategyForViewRoutesChannels extends $dara.Model {
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

export class NotifyStrategyForViewRoutesEffectTimeRange extends $dara.Model {
  /**
   * @remarks
   * The days of the week when the policy is effective (Monday to Sunday).
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * The end time in minutes.
   * 
   * @example
   * 60
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

export class NotifyStrategyForViewRoutes extends $dara.Model {
  /**
   * @remarks
   * The notification channels.
   */
  channels?: NotifyStrategyForViewRoutesChannels[];
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The field.
   */
  effectTimeRange?: NotifyStrategyForViewRoutesEffectTimeRange;
  enableRca?: boolean;
  /**
   * @remarks
   * The routing settings.
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
  /**
   * @remarks
   * The automatic recovery time.
   * 
   * @example
   * 300
   */
  autoRecoverSeconds?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The notification channel templates.
   */
  customTemplateEntries?: NotifyStrategyForViewCustomTemplateEntries[];
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
   * Indicates whether the policy is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The filter settings.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * The merge settings.
   * 
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForViewGroupingSetting;
  /**
   * @remarks
   * Indicates whether to send a notification upon recovery.
   * 
   * @example
   * true
   */
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * The list of associated escalation policies.
   */
  incidentEscalationPolicies?: any[];
  /**
   * @remarks
   * The UUID.
   * 
   * @example
   * 12312-31-23-123-1-23123
   */
  notifyStrategyId?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试策略
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * The push settings.
   */
  pushingSetting?: NotifyStrategyForViewPushingSetting;
  /**
   * @remarks
   * The list of receiver names.
   */
  receiverNames?: string[];
  /**
   * @remarks
   * The settings for repeated notifications.
   */
  repeatNotifySetting?: NotifyStrategyForViewRepeatNotifySetting;
  /**
   * @remarks
   * The routing settings for notification channels.
   * 
   * This parameter is required.
   */
  routes?: NotifyStrategyForViewRoutes[];
  /**
   * @remarks
   * The source type of the synchronization policy.
   * 
   * @example
   * "ARMS"
   */
  syncFromType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-05-30T02:29:09Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123123****
   */
  userId?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  /**
   * @remarks
   * The workspace filter settings.
   */
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

