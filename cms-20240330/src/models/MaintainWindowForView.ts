// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class MaintainWindowForViewEffectTimeRange extends $dara.Model {
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

export class MaintainWindowForView extends $dara.Model {
  createTime?: string;
  description?: string;
  effectTimeRange?: MaintainWindowForViewEffectTimeRange;
  effective?: string;
  enable?: boolean;
  endTime?: string;
  filterSetting?: FilterSetting;
  maintainWindowId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  maintainWindowName?: string;
  startTime?: string;
  updateTime?: string;
  userId?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      effectTimeRange: 'effectTimeRange',
      effective: 'effective',
      enable: 'enable',
      endTime: 'endTime',
      filterSetting: 'filterSetting',
      maintainWindowId: 'maintainWindowId',
      maintainWindowName: 'maintainWindowName',
      startTime: 'startTime',
      updateTime: 'updateTime',
      userId: 'userId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      effectTimeRange: MaintainWindowForViewEffectTimeRange,
      effective: 'string',
      enable: 'boolean',
      endTime: 'string',
      filterSetting: FilterSetting,
      maintainWindowId: 'string',
      maintainWindowName: 'string',
      startTime: 'string',
      updateTime: 'string',
      userId: 'string',
      workspace: 'string',
    };
  }

  validate() {
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

