// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class NotifyStrategyForModifyCustomTemplateEntries extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  targetType?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class NotifyStrategyForModifyRoutesChannels extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelType?: string;
  enabledSubChannels?: string[];
  /**
   * @remarks
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
  dayInWeek?: number[];
  endTimeInMinute?: number;
  startTimeInMinute?: number;
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
  channels?: NotifyStrategyForModifyRoutesChannels[];
  effectTimeRange?: NotifyStrategyForModifyRoutesEffectTimeRange;
  filterSetting?: FilterSetting;
  severities?: string[];
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      effectTimeRange: 'effectTimeRange',
      filterSetting: 'filterSetting',
      severities: 'severities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': NotifyStrategyForModifyRoutesChannels },
      effectTimeRange: NotifyStrategyForModifyRoutesEffectTimeRange,
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
  customTemplateEntries?: NotifyStrategyForModifyCustomTemplateEntries[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  groupingSetting?: NotifyStrategyForModifyGroupingSetting;
  ignoreRestoredNotification?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  notifyStrategyName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routes?: NotifyStrategyForModifyRoutes[];
  static names(): { [key: string]: string } {
    return {
      customTemplateEntries: 'customTemplateEntries',
      description: 'description',
      groupingSetting: 'groupingSetting',
      ignoreRestoredNotification: 'ignoreRestoredNotification',
      notifyStrategyName: 'notifyStrategyName',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplateEntries: { 'type': 'array', 'itemType': NotifyStrategyForModifyCustomTemplateEntries },
      description: 'string',
      groupingSetting: NotifyStrategyForModifyGroupingSetting,
      ignoreRestoredNotification: 'boolean',
      notifyStrategyName: 'string',
      routes: { 'type': 'array', 'itemType': NotifyStrategyForModifyRoutes },
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

