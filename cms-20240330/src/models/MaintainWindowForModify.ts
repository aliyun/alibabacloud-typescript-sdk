// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";


export class MaintainWindowForModifyEffectTimeRange extends $dara.Model {
  /**
   * @remarks
   * 生效天(周一到周日)
   */
  dayInWeek?: number[];
  /**
   * @remarks
   * 结束时间(分钟数)
   * 
   * @example
   * 60
   */
  endTimeInMinute?: number;
  /**
   * @remarks
   * 开始时间(分钟数)
   * 
   * @example
   * 60
   */
  startTimeInMinute?: number;
  /**
   * @remarks
   * 时区
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
   * 描述
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * 生效时间范围
   */
  effectTimeRange?: MaintainWindowForModifyEffectTimeRange;
  /**
   * @remarks
   * Crontab 表达式
   * 
   * @example
   * * * 14-18 ? * *
   */
  effective?: string;
  /**
   * @remarks
   * 生效结束时间
   * 
   * @example
   * 2024-09-05 09:30:40
   */
  endTime?: string;
  /**
   * @remarks
   * 筛选条件
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * 名称
   * 
   * This parameter is required.
   * 
   * @example
   * test strategy
   */
  maintainWindowName?: string;
  /**
   * @remarks
   * 生效开始时间
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

