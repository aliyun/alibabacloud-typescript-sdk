// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyStrategyForSNSModifyCustomTemplateEntries extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not take effect. The actual purpose of the template is determined by the type field of the template object referenced by templateUuid.
   * 
   * @example
   * DING
   */
  targetType?: string;
  /**
   * @remarks
   * The UUID of the template.
   * 
   * @example
   * adef12efca3f-8728-1928-eeaac12ef9ad92
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

export class NotifyStrategyForSNSModifyGroupingSetting extends $dara.Model {
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
   * 300
   */
  silenceSec?: number;
  /**
   * @remarks
   * The number of times the condition is triggered.
   * 
   * @example
   * 10
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

export class NotifyStrategyForSNSModifyRoutesChannels extends $dara.Model {
  /**
   * @remarks
   * The channel type.
   * 
   * This parameter is required.
   * 
   * @example
   * DING
   */
  channelType?: string;
  /**
   * @remarks
   * The enabled notification types.
   * 
   * @example
   * ["EMAIL","SMS"]
   */
  enabledSubChannels?: string[];
  /**
   * @remarks
   * The channel receivers.
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
   * The effective days of the week (Monday through Sunday).
   * 
   * @example
   * [0,1,2,3,4,5,6]
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * The end time in minutes.
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
   * 59
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * The time zone.
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
  /**
   * @remarks
   * The JSON path of the field, such as labels._cms_rule_name.
   * 
   * @example
   * subject
   */
  field?: string;
  /**
   * @remarks
   * The comparison operator.
   * 
   * @example
   * EQ
   */
  op?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * Pod OOM
   */
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
  /**
   * @remarks
   * The subscription conditions.
   */
  conditions?: NotifyStrategyForSNSModifyRoutesFilterSettingConditions[];
  /**
   * @remarks
   * If expression is not empty, it takes precedence and relation is ignored. If expression is empty or not specified, the system uses relation (AND or OR) to perform a simple AND/OR operation on all conditions. Condition numbers correspond to the indexes of the conditions array (starting from 1). Each condition evaluates whether a single event field matches by using field (the event field path, which supports dot-separated nesting such as resource.tags.pod), op (the operator, such as CONTAIN, EQ, or IN), and value (the match value).
   * 
   * @example
   * (1 AND 2 )OR 3
   */
  expression?: string;
  /**
   * @remarks
   * The relationship between conditions. If an expression is configured, the expression takes higher precedence.
   * 
   * @example
   * AND
   */
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
  /**
   * @remarks
   * The notification channels.
   */
  channels?: NotifyStrategyForSNSModifyRoutesChannels[];
  /**
   * @remarks
   * The digital employee name.
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The effective time range.
   */
  effectTimeRange?: NotifyStrategyForSNSModifyRoutesEffectTimeRange;
  /**
   * @remarks
   * Specifies whether to enable root cause analysis (RCA).
   */
  enableRca?: boolean;
  /**
   * @remarks
   * The route-level filter. This is different from the top-level subscription.filterSetting.
   */
  filterSetting?: NotifyStrategyForSNSModifyRoutesFilterSetting;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and does not take effect. Route matching only checks filterSetting and effectTimeRange.
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
  /**
   * @remarks
   * The notification channel templates.
   */
  customTemplateEntries?: NotifyStrategyForSNSModifyCustomTemplateEntries[];
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
   * The grouping settings.
   * 
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForSNSModifyGroupingSetting;
  /**
   * @remarks
   * Specifies whether to send a notification when the alert is recovered.
   * 
   * @example
   * true
   */
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * The notification channel routing settings.
   * 
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

