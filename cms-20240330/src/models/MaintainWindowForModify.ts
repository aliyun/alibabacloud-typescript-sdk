// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class MaintainWindowForModifyEffectTimeRange extends $dara.Model {
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
   * Time zone.
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

export class MaintainWindowForModify extends $dara.Model {
  /**
   * @remarks
   * Description.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * Effective time range.
   */
  effectTimeRange?: MaintainWindowForModifyEffectTimeRange;
  /**
   * @remarks
   * Crontab expression.
   * 
   * @example
   * * * 14-18 ? * *
   */
  effective?: string;
  /**
   * @remarks
   * Effective end time.
   * 
   * @example
   * 2024-09-05 09:30:40
   */
  endTime?: string;
  /**
   * @remarks
   * Filtering conditions.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * Name.
   * 
   * This parameter is required.
   * 
   * @example
   * test strategy
   */
  maintainWindowName?: string;
  /**
   * @remarks
   * Effective start time.
   * 
   * @example
   * 2025-04-11 07:55:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      effectTimeRange: 'effectTimeRange',
      effective: 'effective',
      endTime: 'endTime',
      filterSetting: 'filterSetting',
      maintainWindowName: 'maintainWindowName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectTimeRange: MaintainWindowForModifyEffectTimeRange,
      effective: 'string',
      endTime: 'string',
      filterSetting: FilterSetting,
      maintainWindowName: 'string',
      startTime: 'string',
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

